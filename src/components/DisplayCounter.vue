<template>
  <div>
    Cach 1 {{ $store.state.count }}
    <br>
    Cach 2 {{count}}
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "DisplayCounter",
  computed:{
    ...mapState(["count"])//... la rest operator
  }
}
</script>

<style scoped>

</style>