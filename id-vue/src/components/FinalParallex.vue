<template>
  <div class="outer-div">
    <section class="mainPage">
      <div class="imageWrap">
        <div class="parallax_image" id="parallax_0"></div>
        <div class="parallax_image" id="parallax_1"></div>
        <div class="parallax_image" id="parallax_2"></div>
        <div class="parallax_image" id="parallax_3"></div>
        <div class="parallax_image" id="parallax_4"></div>
        <div class="parallax_image" id="parallax_5"></div>
      </div>
    </section>
    <section class="below-section">

    </section>
  </div>
</template>

<script>
export default {
  name: "FinalParallex"
}
</script>

<style scoped>
.outer-div{
  position:relative;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/bg.jpg")
}

section.mainPage .imageWrap {
  height: 1100px;
  overflow-y: hidden;
}


section.mainPage .imageWrap .parallax_image {
  position: fixed;
  width: 100%;
  height: inherit;
  background-position: top center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}

section.mainPage .imageWrap .parallax_image:nth-child(1) {
  background-image: url(../assets/main_0.png);
}

section.mainPage .imageWrap .parallax_image:nth-child(2) {
  background-image: url(../assets/main_1.png);
}

section.mainPage .imageWrap .parallax_image:nth-child(3) {
  background-image: url(../assets/main_2.png);
}

section.mainPage .imageWrap .parallax_image:nth-child(4) {
  background-image: url(../assets/main_3.png);
}

section.mainPage .imageWrap .parallax_image:nth-child(5) {
  background-image: url(../assets/main_4.png);
}

section.mainPage .imageWrap .parallax_image:nth-child(6) {
  background-image: url(../assets/main_5.png);
  background-size: cover;
}


.background00{
  position:relative;
  width: 100vw;
  height:100vh;
  background-image: url("../assets/main_0.png");
  z-index:0;
}

.background01{
  position:relative;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/main_1.png");
  z-index:1;
}

.background02{
  background-image: url("../assets/main_2.png")
}

.background03{
  background-image: url("../assets/main_3.png")
}

.background04{
  background-image: url("../assets/main_4.png")
}


</style>