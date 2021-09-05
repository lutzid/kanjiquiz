<template>
  <div>
    <h3>Correct: {{ correct }}</h3>
    <h3>Incorrect: {{ incorrect }}</h3>
    <select v-model="level">
      <option value="5">N5</option>
      <option value="4">N4</option>
      <option value="3">N3</option>
      <option value="2">N2</option>
      <option value="1">N1</option>
    </select>
    <div class="container">
      <KanjiDisplayer :currentKanji="currentKanji" :status="status"/>
      <div class="grid-option">
        <Option 
          v-for="choice in choices"
          :key="choice.id"
          v-bind="choice"
          @checkAnswer="checkAnswer"
        />
      </div>
    </div>
    <button class="next" v-show="isAnswered" @click="nextQuestion">Next</button>
  </div>
</template>
<script src="./js/quiz.js"></script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.grid-option {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 20px;
  width: 40%;
  justify-content: space-evenly;
}

.next {
  cursor: pointer;
}

@media only screen and (max-width: 900px){
  .container {
    flex-direction: column;
    justify-items: center;
  }
  .grid-option {
    width: 100%;
  }
}
</style>