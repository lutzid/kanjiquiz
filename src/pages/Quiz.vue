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
    <KanjiDisplayer :currentKanji="currentKanji"/>
    <Option 
      v-for="choice in choices"
      :key="choice.id"
      v-bind="choice"
      @checkAnswer="checkAnswer"
    />
  </div>
</template>
<script src="./js/quiz.js"></script>