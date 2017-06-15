<template>
  <div class="one">
    <welcomeMan></welcomeMan>
  </div>
</template>

<script>
import welcomeMan from '@/components/welcomeMan'

export default {
  name: 'one',
  data () {
    return {

    }
  },
  components: {
      welcomeMan
  }
}
</script>

<style scoped lang="scss">
.one{
  height:100%;
  width:100%;
  overflow: hidden;
}
</style>
