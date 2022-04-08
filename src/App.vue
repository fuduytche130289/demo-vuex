<template>
  <div id="app">
<!--    <ControlCounter></ControlCounter>-->
<!--    <DisplayCounter></DisplayCounter>-->
<!--    <DisplayHomeProduct></DisplayHomeProduct>-->
<!--    <button @click="$store.dispatch('loadHomeProducts')">Get Home Product</button>-->
<!--    <button @click="_setHuman">Set Human</button>-->


    <div>
      {{$store.state.home.homeData}}
    </div>

  </div>
</template>

<script>

// import ControlCounter from "@/components/ControlCounter";
// import DisplayCounter from "@/components/DisplayCounter";
// import DisplayHomeProduct from "@/components/DisplayHomeProduct";
import {mapMutations, mapState} from "vuex";

export default {
  name: 'App',
  components: {
    // DisplayHomeProduct,
    // ControlCounter,
    // DisplayCounter
  },
  methods:{
    _setHuman(){
      this.$store.commit('setHuman',{name:"Duy",age: "1233213124",school:"dai hoc FPT", phoneNum:"0912959973"});
    },
    ...mapMutations(["setHuman"]),
  },
  computed: {
    nameOfUser() {
      const {name} = this.user//ES6
      return name;
    },
    ...mapState('home', ['homeData']),
    ...mapState('cart', ['cartData'])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
