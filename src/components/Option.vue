<template>
  <button class="option" @click.prevent="checkAnswer(keyword)">{{ keyword }}</button>
</template>
<script src="./js/option.js"></script>
<style scoped>
.option {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding: 15px 0;
  width: 100%;
  font-size: 30px;
  color: #2c3e50;
  cursor: pointer;
  margin-bottom: 20px;
  border: none;
  box-shadow: 0 3px 10px -2px rgb(0 0 0 / 20%);
  background: #fff;
  border-radius: 5px;
}

/* @media only screen and (min-width: 900px){
  .option {
    width: 40%;
  }
} */
</style>