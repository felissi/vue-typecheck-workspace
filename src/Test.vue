<template>
  <div>
    <div>
      {{ fo }}
      <Test />
    </div>
    <span></span>
    <Test></Test>
    <ry></ry>
    <t2 :tt=""></t2>
  </div>
</template>

<script>
// @ts-check
let a = 'a'
a = 5
import * as _ from 'lodash'
import * as $ from 'jquery'
import Test from '@/components/Test.vue'
import t2 from '@/components/t2.vue'
import { implementatedFunction } from '@/realFunc'
import { getT, NewNumber } from './func'
// getT('123')
// implementatedFunction()
export default {
  // @ts-check
  props: {
    foo: { default: 'a', type: String }
  },
  data() {
    return {
      myData: 'str'
    }
  },
  components: { Test },
  methods: {
    /** @param {number} a */
    t1(a) {
      const b = a
      return b[0]
    }
  },
  mounted() {
    this.foo = 123
    this.myData = true
    this.t1('123')
    setTimeout(
      /**@param {{a:string,b:number,c:import('@/realFunc').implementatedFunction}}_*/
      ({a,b,c})=>{
        c()
    })
  }
}
</script>
