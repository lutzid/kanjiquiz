<template>
  <div>
    <button class="option" @click.prevent="checkAnswer(keyword)">{{ keyword }}</button>
  </div>
</template>
<script src="./js/option.js"></script>
<style scoped>
.option {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  width: 80%;
  font-size: 30px;
  color: #2c3e50;
  cursor: pointer;
  margin-bottom: 15px;
}

/* @media only screen and (min-width: 900px){
  .option {
    width: 40%;
  }
} */
</style>