<template>
  <div class="press">
    <meeting1></meeting1>
  </div>
</template>

<script>
import meeting1 from '@/pages/meeting1'
import { mapGetters } from 'vuex';

export default {
  name: 'press',
  data () {
    return {

    }
  },
  computed:{

  },
  created() {

  },
  components: {
      meeting1
  }
}
</script>

<style scoped lang="scss">
.press{
  height:100%;
  width:100%;
}

</style>
