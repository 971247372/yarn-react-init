<template>
  <div class="signin">
    <div class="watermark">
      <img class="logo" src="@/assets/logo.svg" />
      <div class="product">{{product}}Sign in</div>
    </div>
    <i-form ref="form" :model="formModel" :rules="rules" label-position="top">
      <i-form-item class="field" prop="username">
        <label class="input-label" :class="usernameLabelClass">Username</label>
        <i-input element-id="username" v-model="formModel.username" @on-focus="usernameFocus = true" @on-blur="usernameFocus = false" @on-enter="submit" autofocus />
      </i-form-item>
      <i-form-item class="field" prop="password">
        <label class="input-label" :class="passLabelClass">Password</label>
        <i-input element-id="password" :type="passType" v-model="formModel.password" @on-focus="passFocus = true" @on-blur="passFocus = false" @on-enter="submit" autofocus>
          <svg-icon v-if="passType == 'password'" icon-class="eye" class="reveal" :class="passTypeClass" slot="suffix" @click.native="passType = 'text'" />
          <svg-icon v-else icon-class="eye_active" slot="suffix" class="reveal" :class="passTypeClass" @click.native="passType = 'password'" />
        </i-input>
      </i-form-item>
      <i-form-item style="margin-bottom: 4px;">
        <i-checkbox>Remember me</i-checkbox>
      </i-form-item>
      <i-form-item>
        <i-button long type="primary" class="btn" @click="submit">Sign in</i-button>
      </i-form-item>
      <div class="help">
        <i-button type="text">Having trouble signing in?</i-button>
      </div>
    </i-form>
    <div class="footer">
      &copy;{{company}} - All Rights Reserved. <br />
      No part of this software may be reproduced in any form without the written permission of the copyright holder.
    </div>
    </div>
</template>

<script>
import AuthService from 'common/services/Auth'

export default {
   metaInfo() {
    return {
      title: 'Sign in'
    }
  },
  data() {
    return {
      product: '',
      company: 'Lean BI',
      formModel: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: 'Error: Username is required.', trigger: 'blur' }],
        password: [{ required: true, message: 'Error: password is required.', trigger: 'blur' }]
      },
      // is username or password input focus
      usernameFocus: false,
      passFocus: false,
      passType: 'password'
    }
  },
  computed: {
    usernameLabelClass() {
      return this.usernameFocus || this.formModel.username ? 'scale' : ''
    },
    passLabelClass() {
      return this.passFocus || this.formModel.password ? 'scale' : ''
    },
    passTypeClass() {
      return this.passFocus ? 'show' : ''
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // do sign in
          AuthService.login(this.formModel.username, this.formModel.password)
            .then(() => {
              this.$router.push(this.$route.query.redirect || '/')
            })
            .catch(err => {
              this.$Notice.error({
                title: err.message
              })
            })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/color.scss';

.signin {
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: $system-l0-color;
  transition: opacity 1s ease-in-out 0ms;

  &.hidden {
    opacity: 0;
  }

  .watermark {
    flex: 1;
    padding: 64px 0 24px 64px;

    .logo {
      font-size: 43px;
      height: 44px;
    }

    .product {
      font-size: 18px;
      font-weight: 400;
      padding: 16px 0 0 4px;
      display: inline;
    }
  }

  .welcome {
    display: flex;
    flex-direction: column;
    flex: 2;
    align-self: center;
    text-align: center;
    opacity: 1;
    transition: flex 0ms ease-in-out 50ms, opacity 1s ease-in-out 0ms;

    &.hidden {
      overflow: hidden;
      opacity: 0;
      height: 0;
      flex: 0;
    }

    .message {
      font-size: 28px;
      font-weight: 100;
    }

    .username {
      font-size: 48px;
    }

    .loading {
      align-self: center;
      margin: 24px;
    }
  }

  form {
    flex: 2;
    align-self: center;
    width: 280px;

    &.hidden {
      display: none;
    }

    .field {
      position: relative;
      margin-bottom: 28px;
      height: 40px;
    }

    .input-label {
      position: absolute;
      display: inline-block;
      user-select: none;
      cursor: text;
      transition: all 0.2s;
      touch-action: manipulation;
      transform: translate(8px, 4px) scale(1);

      &.scale {
        transform: scale(0.9) translate(6px, -4px);
        opacity: 0.7;
      }
    }

    :global(.ivu-input) {
      transition: all 0.2s;
      touch-action: manipulation;
      margin-right: 0;
      width: 100%;
      height: 40px;
      font-size: 14px;
      padding-left: 8px;
      cursor: text;
      padding-top: 21px;
      caret-color: $text-color;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        -webkit-text-fill-color: $text-color;
        box-shadow: none;
        transition: background-color 50000s ease-in-out 0s;
      }
    }

    :global(.ivu-input-wrapper) {
      &:hover {
        .reveal {
          opacity: 0.5;
        }
      }
    }

    .reveal {
      position: absolute;
      top: 12px;
      right: 8px;
      opacity: 0;
      font-size: 16px;
      cursor: pointer;

      &.show {
        opacity: 0.5;
      }

      &:hover {
        opacity: 1 !important;
      }
    }

    .btn {
      /* width: 100%; */
      height: 40px;
      margin-bottom: 38px;
    }
  }

  .help {
    flex: 1;
    text-align: center;
  }

  .footer {
    width: 360px;
    flex: 0 0 108px;
    align-self: center;
    text-align: center;
    opacity: 0.4;
  }

  @media only screen and (min-width: 30em) {
    .watermark .logo {
      font-size: 55px;
      height: 56px;
    }
    .watermark .product {
      display: block;
      font-size: 16px;
      width: 100px;
    }
  }
}
</style>
