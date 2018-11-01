<template>
  <div class="test">
    <div
      id="mysvg"
      ref="mysvg"/>
  </div>
</template>
<script>
export default {
   mounted() {
     this.playSvg()
     console.log('play over');
   },
   methods: {
       playSvg() {
        console.log(this.$Vivus)
        console.log(this.$refs.mysvg)
        let Vivus = this.$Vivus
        const test = new Vivus('mysvg', {
            file: 'images/tiger.svg',
            duration: 1000,
            type: 'oneByOne',
            animTimingFunction: Vivus.EASE
        })
        test.play()
        setTimeout(() => {
            test.play(2)
        }, 20)
       }
   }
}
</script>
<style lang="scss" scoped>
.test {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>


