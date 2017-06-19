<template>
  <div class="home">



  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  data () {
    return {

    }
  },
  computed:{

  },
  created() {
    this.changeimg_big = this.$store.state.an;
  }
}
</script>

<style scoped lang="scss">

</style>
