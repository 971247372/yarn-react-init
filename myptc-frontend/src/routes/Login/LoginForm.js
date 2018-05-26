import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { Form, Input, Button, Radio } from 'antd';
import styled from 'styled-components';
import logo from './logo.png';

const StyledForm = styled(Form)`
  position: relative;
  background: #fff;
  width: 550px;
  margin: 0 auto !important;
  padding: 30px 185px 20px 40px !important;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 30px;
  right: -100px;
  width: 200px;
  height: 200px;
  background: linear-gradient(to right, #07b5fd, #4472fc) !important;
  box-shadow: 0 5px 8px 2px rgba(68, 114, 252, 0.25);
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }

  img {
    width: 60%;
  }
`;

const FormItem = Form.Item;

const LoginButton = styled(Button)`
  position: absolute !important;
  left: 80px;
  bottom: -21px;
  width: 198px;
  border-radius: 30px !important;
  background: linear-gradient(to right, #07b5fd, #4472fc) !important;
  border: 0 !important;
  height: 42px !important;
  box-shadow: 0 11px 24px rgba(21, 102, 249, 0.3);

  &:hover {
    background: linear-gradient(to right, #07b5fd, #07b5fd) !important;
  }

  &:active {
    background: linear-gradient(to right, #1aa5e1, #224ac5) !important;
  }
`;

@inject(({ session }) => ({
  login: session.login,
  isLoading: session.isLoading
}))
@observer
@withRouter
@Form.create()
class LoginForm extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values.username, values.password, values.type, {
          fail: () => {
            const { setFieldsValue } = this.props.form;
            setFieldsValue({
              password: ''
            });
          },
          success: () => {
            setTimeout(() => this.props.history.push('/'), 300);
          }
        });
      }
    });
  };

  renderType = () => (
    <Radio.Group>
      <Radio value="local">默认</Radio>
      <Radio value="ad">AD</Radio>
      <Radio value="wechat"> 微信</Radio>
    </Radio.Group>
  );

  render() {
    const { form: { getFieldDecorator }, isLoading } = this.props;
    return (
      <StyledForm onSubmit={this.handleSubmit} hideRequiredMark>
        <LogoContainer>
          <img src={logo} alt="lean-bi" />
        </LogoContainer>
        <FormItem label="用户名">
          {getFieldDecorator('username', {
            rules: [
              { required: true, message: '请输入用户名' }
            ]
          })(<Input
            placeholder="用户名"
            ref={node => (this.input = node)}
          />)}
        </FormItem>
        <FormItem label="密码">
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码' }
            ]
          })(<Input htmlType="password" placeholder="密码" />)}
        </FormItem>
        <LoginButton type="primary" htmlType="submit" loading={isLoading} size="large">
          登录
        </LoginButton>
      </StyledForm>
    );
  }
}

LoginForm.propTypes = {
  isLoading: PropTypes.bool,
  history: PropTypes.object,
  form: PropTypes.object,
  login: PropTypes.func
};

export default LoginForm;
