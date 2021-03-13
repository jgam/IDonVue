<template>
  <div class="outer-div" @mousemove="mousemove" >
    <div class="gate-box">
      <div class="top">
        <p>Wearing a mask?</p>
      </div>
      <div class="bottom">
        <div class="inner">
          <a href="/#yes" id="yes" @mouseover="mouseover" @mouseout="mouseout">yes</a>
          <a href="/#no" id="no" @mouseover="mouseover" @mouseout="mouseout">no</a>
        </div>
      </div>
    </div>
    <div id="cursorItem" class="cursorItem">
      <div id="circle" class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlendyMode",
  create(){
    window.addEventListener("load", this.onWindowLoad);
  },
  methods:{
    mousemove(event){
      document.getElementById("cursorItem").style.transform = "translate("+event.clientX+"px, "+event.clientY+"px)"
    },
    mouseover(){
      document.getElementById("circle").style.transform = "scale(0.3)"
    },
    mouseout(){
      document.getElementById("circle").style.transform = "scale(1)"
    },
    onWindowLoad(){
      console.log('window load event');
    }
  }
}
</script>

<style scoped>
.cursorItem {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: .5;
}

.cursorItem .circle {
  position: fixed;
  display: block;
  width: 120px;
  height: 120px;
  margin: -60px 0 0 -60px;
  background: #a300a8;
  border-radius: 50%;
  transition: all .2s ease-in-out;
}

.outer-div{
  width: 100vw;
  height: 100vh;
  background-color: grey;
}

.gate-box {
  background-color: #42b983;
  width: 400px;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 200px);
  border: 5px solid darkslategrey;
}

.top {
  justify-content: center;
  text-align: center;
  border-bottom: 3px solid darkslategrey;
}

.top p{
  color: #fff;
}

.inner{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
}

.gate-box .bottom a{
  display:inline-block;
  font-size: 20px;
  text-decoration: none;
  color: #fff;
  width: 100%;
  padding: 30px 0;
  text-align: center;
  box-sizing: inherit;
  transition: all .3s ease;
}

.gate-box .bottom a:hover{
  background: #fff;
  color: #42b983;
}
</style>