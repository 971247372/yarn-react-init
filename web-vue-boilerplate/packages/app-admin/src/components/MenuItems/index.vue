<template>
  <i-submenu v-if="data[subMenuKey] && data[subMenuKey].length" :name="data[nameKey]">
    <template slot="title">
      {{data[titleKey]}}
    </template>
    <menu-items v-for="item in data[subMenuKey]" :key="item[nameKey]" :data="item" :name-key="nameKey" :title-key="titleKey" :sub-menu-key="subMenuKey" />
  </i-submenu>
  <i-menu-item v-else :name="data[nameKey]">{{data[titleKey]}}</i-menu-item>
</template>

<script>
export default {
  name: 'menu-items',
  props: {
    data: Object,
    nameKey: {
      type: 'String',
      default: 'key'
    },
    titleKey: {
      type: 'String',
      default: 'title'
    },
    subMenuKey: {
      type: 'String',
      default: 'children'
    }
  }
}
</script>

<style>
</style>
