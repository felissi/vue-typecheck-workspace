<template>
  <div>
    <div>
      {{ foo }}
      {{ myD }}
    </div>
    <SomeComponentWithLongName />
    <NestedComponent></NestedComponent>
    <RouterLink />
    <span></span>
    <SomeComponentWithLongName :a-prop="123" />
    <div>{{ getCount }}</div>
  </div>
</template>

<script>
import * as _ from 'lodash'
import * as $ from 'jquery'
import { implementedFunction } from '@/realFunc'
import { getT, NewNumber } from './onlyHaveType'
import NestedComponent from '@/components/someModuleThing/nestedComponent.vue'
import {} from 'vuex'
getT('123') // param check for pure ts type
implementedFunction() // param check for pure js with doc
export default {
  props: {
    foo: { default: 'a', type: String },
    bar: { default: 'bar', type: String }
  },
  data() {
    return {
      myData: 'str'
    }
  },
  components: { NestedComponent },
  methods: {
    /**
     * ttttttttttt
     * @param {number} a
     * @return {boolean}
     * */
    t1(a) {
      const b = a
      return 'b[0]' // Should say return type is wrong
    }
  },
  computed: {
    getCount() {
      return this.t1(123)
    }
  },
  mounted() {
    this.foo = 123 // Should say props are read-only
    this.myData = true // Should say that myData is a string

    // `Vetur` should tell what type str is (boolean), and should say the parameter is wrong
    const str = this.t1('notNumber')
    const wrong = [1, 2, 3][str] // Again, boolean cant be index
    setTimeout(
      /**@param {{a:string,b:number,c:import('@/realFunc').implementedFunction}}_*/
      ({ a, b, c }) => {
        c() // Should show parameter of c (from implementedFunction)
      }
    )
    this.$store.commit() // Should show property of $store (`Vuex Store`)
    this.$store.commit('qwe', [], {})
    /* Some custom variable for projects */
    this.$eventBus
    this.$t()
    this.$route
    this.$router
  },
  mixins: []
}
</script>
