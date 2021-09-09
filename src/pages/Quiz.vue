<template>
  <div class="content">
    <Navbar/>
    <div class="status">
      <div class="level-status">
        <select v-model="level">
          <option value="5">N5</option>
          <option value="4">N4</option>
          <option value="3">N3</option>
          <option value="2">N2</option>
          <option value="1">N1</option>
        </select>
      </div>
      <div class="answer-status">
        <h3>Correct: {{ correct }}</h3>
        <h3>Incorrect: {{ incorrect }}</h3>
        <h3>Remaining: {{ remaining }}</h3>
      </div>
    </div>
    <div class="container">
      <div class="kanji-viewer">
        <KanjiDisplayer :currentKanji="currentKanji" :status="status"/>
      </div>
      <div class="grid-option">
        <Option 
          v-for="choice in choices"
          :key="choice.id"
          v-bind="choice"
          @checkAnswer="checkAnswer"
        />
      </div>
    </div>
    <button class="next" v-show="isAnswered && !isFinished" @click="nextQuestion">Next</button>
    <button class="finish" v-show="isAnswered && isFinished" @click="showModal = true">Finish</button>
    <modal v-if="showModal">
      <template v-slot:header>
        <h1>Result</h1>
      </template>

      <template v-slot:body>
        <h3>Your Score is {{ getResult }}</h3>
      </template>

      <template v-slot:footer>
        <div>
          <button class="close" @click="closeModal">Close</button>
        </div>
      </template>
    </modal>
  </div>
</template>
<script src="./js/quiz.js"></script>
<style scoped>
.content {
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.kanji-viewer {
  display: flex;
  margin: 20px;
  width: 40%;
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
  background-color: #2ed518;
  border: none;
  padding: 20px 30px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}
.finish {
  cursor: pointer;
  background-color: #2ed518;
  border: none;
  padding: 20px 30px;
  border-radius: 5px;
  color: #fff;
  font-size: 20px;
}
.close {
  cursor: pointer;
  background-color: #2ed518;
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  color: #fff;
  font-size: 15px;
}
.status {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
}
.level-status {
  display: flex;
  margin: 0 20px;
  width: 40%;
  justify-content: flex-start;
}
.answer-status {
  display: flex;
  margin: 0 20px;
  width: 40%;
  justify-content: space-around;
}
select {
  padding: 0 1rem;
  border-radius: 5px;
  margin: 10px 0px;
}

@media only screen and (max-width: 900px){
  .container {
    justify-items: center;
  }
  .kanji-viewer {
    width: 80%;
  }
  .grid-option {
    width: 80%;
  }
  .level-status {
    margin: 0px;
  }
  .answer-status {
    margin: 0px;
  }
}
</style>