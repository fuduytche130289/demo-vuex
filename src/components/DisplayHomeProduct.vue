<template>
  <div>
    {{ homeProducts }}
    {{$store.state.human}}
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "DisplayHomeProduct",
  computed: {
    ...mapState(['homeProducts'])
  }
}
</script>

<style scoped>
</style>