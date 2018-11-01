<template>
  <i-layout class="layout">
    <sysbar :product="product">
      <img src="@/assets/logo.svg" slot="logo" style="vertical-align: middle;" />
    </sysbar>
      <i-layout>
        <i-sider class="sider" hide-trigger collapsible :collapsed-width="0" v-model="collapsed" :width="240">
          <div class="appbar">
            <svg-icon icon-class="menu_collapse" class="menu-toggle" @click.native="toggleMenu" /> Menu
          </div>
          <i-menu theme="dark" :active-name="$route.name" width="auto">
            <template v-for="item in menus">
              <i-submenu v-if="item.children && item.children.length" :key="item.key" :name="item.key">
                <template slot="title">
                  {{item.title}}
                </template>
                <template v-for="sub in item.children">
                  <i-submenu v-if="sub.children && sub.children.length" :key="sub.key" :name="sub.key">
                    <template slot="title">
                      {{sub.title}}
                    </template>
                    <template v-for="sub in sub.children">
                      <i-menu-item :name="sub.key" :key="sub.key">{{sub.title}}</i-menu-item>
                    </template>
                  </i-submenu>
                  <i-menu-item v-else :name="sub.key" :key="sub.key">{{sub.title}}</i-menu-item>
                </template>
              </i-submenu>
              <i-menu-item v-else :name="item.key" :key="item.key">{{item.title}}</i-menu-item>
            </template>
          </i-menu>
        </i-sider>
        <i-content class="content">
          <div class="appbar" style="padding-left: 8px;">
            <svg-icon v-if="collapsed" icon-class="menu_expand" class="menu-toggle" @click.native="toggleMenu" />
            <h2>{{$route.meta.label}}</h2>
          </div>
          <div class="main-content">
            <router-view />
          </div>
        </i-content>
      </i-layout>
  </i-layout>
</template>

<script>
import Sysbar from '@/components/Sysbar'

export default {
  components: {
    Sysbar
  },
  data() {
    return {
      product: 'Product',
      collapsed: false,
      menus: [
        { key: 'example', title: 'Example page' },
        { key: '0', title: 'Stand alone page' },
        {
          key: '1',
          title: 'Group of pages',
          children: [{ key: '1.1', title: 'Page 1.1' }, { key: '1.2', title: 'Page 1.2' }]
        }
      ]
    }
  },
  methods: {
    toggleMenu() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/assets/scss/color.scss';

.layout {
  min-height: 100vh;
}

.menu-toggle {
  cursor: pointer;
  margin-right: 8px;
}

.content {
  padding: 0 16px 16px;
}

.main-content {
  min-height: calc(100vh - 48px - 48px - 16px);
}

.appbar {
  height: 48px;
  line-height: 48px;
  padding: 0 24px;
}
</style>
