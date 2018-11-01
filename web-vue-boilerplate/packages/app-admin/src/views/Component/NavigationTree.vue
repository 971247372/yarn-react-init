<template>
  <i-row :gutter="30">
    <i-col span="6">
      <div>
        <label>Collapsed (current page is under Group of pages 1)</label>
      </div>
      <i-menu theme="dark" active-name="1.1">
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
    </i-col>
    <i-col span="6">
      <div>
        <label>Expanded (Page 1.1 is current page)</label>
      </div>
      <i-menu theme="dark" :open-names="['1']" active-name="1.1">
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
    </i-col>
    <i-col span="6">
      <div>
        <label>Hovering on a specific item</label>
      </div>
      <i-menu theme="dark" :open-names="['1']" active-name="1.1">
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
    </i-col>
    <i-col span="6">
      <div>
        <label>Subgroup expanded</label>
      </div>
      <i-menu theme="dark" :open-names="['1', '1.3']" active-name="1.1">
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
    </i-col>
  </i-row>
</template>

<script>
import MenuItems from '@/components/MenuItems'

export default {
  components: { MenuItems },
  data() {
    return {
      menus: [
        { key: '0', title: 'Stand alone page 0' },
        {
          key: '1',
          title: 'Group of pages 1',
          children: [
            { key: '1.1', title: 'Page 1.1' },
            { key: '1.2', title: 'Page 1.2' },
            {
              key: '1.3',
              title: 'Subgroup 1.3',
              children: [
                { key: '1.3.1', title: 'Page 1.3.1' },
                { key: '1.3.2', title: 'Page 1.3.2' }
              ]
            }
          ]
        },
        {
          key: '2',
          title: 'Group of pages 2',
          children: [{ key: '2.1', title: 'Page 2.1' }, { key: '2.2', title: 'Page 2.2' }]
        },
        { key: '3', title: 'Stand alone page 3' }
      ]
    }
  }
}
</script>

<style>
</style>
