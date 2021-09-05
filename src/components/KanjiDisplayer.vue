<template>
  <div class="card" :class="{correct: isCorrect, incorrect: isIncorrect}">
    <p>{{ currentKanji.kanji }}</p>
    <div class="description" v-show="isAnswered">
      <p>{{ currentKanji.keyword }}</p>
      <p>{{ currentKanji.story }}</p>
    </div>
  </div>
</template>
<script src="./js/kanji-displayer.js"></script>
<style scoped>
.card {
  display: flex;
  border: 3px solid #666;
  width: 40%;
  height: 400px;
  font-size: 60px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  flex-direction: column;
}

.description {
  font-size: 20px;
}

.incorrect {
  border-color: #b30000;
}

.correct {
  border-color: #2ed518;
}

@media only screen and (max-width: 900px){
  .card {
    width: 85%;
  }
}
</style>