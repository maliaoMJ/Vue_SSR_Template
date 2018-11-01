<template>
  <div class="container">
    <div
      v-swiper:mySwiper="swiperOption"
      class="swiperContainer">
      <div class="swiper-wrapper">
        <div
          v-for="banner in banners"
          :key="banner"
          class="swiper-slide">
          <img v-lazy="banner">
        </div>
      </div>
      <div class="swiper-pagination"/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      banners: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540804892885&di=c3f5203561af85079cac742eadb7fd60&imgtype=0&src=http%3A%2F%2Ff2.dn.anqu.com%2Fdown%2FMjRiMA%3D%3D%2Fallimg%2F1212%2F17-12120G01253.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540804892885&di=26d958331eacff74c7a6cb4ece5e0e1d&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Feac4b74543a982267a3d54978a82b9014b90eb86.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540804892885&di=b5f61cd626ac98ec11ed36d868c8b912&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F38dbb6fd5266d016f543767c932bd40735fa3508.jpg' ],
      swiperOption: {
        direction: 'vertical',
        effect: 'cube',
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        keyboard: {
          keyboard: true
        },
        mousewheel: {
          mousewheel: true
        }
      }
    }
  }
}
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiperContainer {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
