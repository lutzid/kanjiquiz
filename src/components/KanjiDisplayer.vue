<template>
  <div class="card" :class="{correct: isCorrect, incorrect: isIncorrect}">
    <p class="kanji">{{ currentKanji.kanji }}</p>
    <div class="description" v-show="isAnswered">
      <p class="keyword">{{ currentKanji.keyword }}</p>
      <p class="story">{{ currentKanji.story }}</p>
    </div>
  </div>
</template>
<script src="./js/kanji-displayer.js"></script>
<style scoped>
.card {
  display: flex;
  border: 3px solid #666;
  width: 100%;
  height: 400px;
  font-size: 60px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  box-shadow: 0 3px 10px -2px rgb(0 0 0 / 20%);
}

.kanji {
  padding: 0px 30px;
}

.description {
  font-size: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
}

.keyword{
  font-size: 28px;
}

.story {
  display: flex;
  justify-content: start;
}

.incorrect {
  border-color: #b30000;
}

.correct {
  border-color: #2ed518;
}

@media only screen and (max-width: 900px){
  .card {
    width: 100%;
  }
}
</style>