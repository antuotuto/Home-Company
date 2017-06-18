<template>
  <div class="home">
    {{changeimg_big}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data () {
    return {
      an:'',
      changeimg_big:''
    }
  },
  computed:{
    ...mapGetters([
      'an',
    ])
  },
  created() {
    this.changeimg_big = this.$store.state.an;
    console.log(this.changeimg_big);
  }
}
</script>

<style scoped lang="scss">

</style>
