<template>
  <div class="outer-div">
    <h1>scroll</h1>
    <div class="progress-bar">
      <span class="bar"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Parallex",
  created(){
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed(){
    window.removeEventListener("scroll", this.handleScroll);
  },
  data: ()=>{
    return {
      scrollTop: 0
    }
  },
  methods:{
    handleScroll(){
      this.scrollTop = document.documentElement.scrollTop;
      let bar = document.getElementsByClassName("bar")[0]
      let per = Math.ceil(this.scrollTop / (document.getElementsByClassName("outer-div")[0].scrollHeight-window.outerHeight) * 100)
      bar.style.width = per+"%"
    }
  }
}
</script>

<style scoped>
.outer-div{
  height: 10000px;
  background: linear-gradient(150deg, red, orange, yellow, green, indigo, purple, black);
}

h1{
  color: #fff;
}

.progress-bar{
  width: 100%;
  position: fixed;
  height: 5px;
  top: 0;
  left:0;
  background-color: black;
  z-index:10;
}

.bar{
  position: absolute;
  width: 50%;
  height: 5px;
  top:0;
  left:0;
  background:yellow;
  z-index:11;
}
</style>