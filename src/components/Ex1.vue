<template>
  <div>{{ numOnly(post.body) }}</div>
</template>

<script>
// @ts-check
/**
 * @typedef {{body:string}} Post
 */
export default {
  props: {
    post: {
      /** @type {import('vue').PropType<Post>} */
      type: Object,
      required: true
    }
  },
  computed: {
    /** @type {import('vue').ComputedGetter<string>} */
    notNum() {
      return this.post.body
    },
    something: {
      set(val) {
        //It knows val should be a number
      },
      /** @type {import('vue').ComputedGetter<number>} */
      get() {
        return 1
      }
    }
  },
  methods: {
    /**  @param {number} num */
    numOnly(num) {}
  },
  mounted() {
    this.numOnly('234')
    this.something = '123'
    this.notNum
  }
}
</script>
