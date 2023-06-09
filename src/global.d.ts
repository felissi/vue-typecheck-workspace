// This modifies the existing Vue module to add custom global variables.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Route from 'vue-router'
import VueI18n from 'vue-i18n'
import { Store } from 'vuex'
declare module 'vue/types/vue' {
  interface Vue extends VueI18n {
    $router: VueRouter
    $route: Route
    $eventBus: Vue
    $store: Store
  }
}
