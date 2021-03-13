<template>
    <div class="gate-box">
      <div class="top">
        <p>Wearing a mask?</p>
      </div>
      <div class="bottom">
        <div class="inner">
          <a href="/#yes" id="yes">yes</a>
          <a href="/#no" id="no">no</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "BlendyMode"
}
</script>

<style scoped>
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