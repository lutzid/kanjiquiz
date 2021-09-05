import KanjiDisplayer from "../../components/KanjiDisplayer.vue";
import Option from "../../components/Option.vue";

export default {
  name: "Quiz",
  components: {
      KanjiDisplayer,
      Option
  },
  props: {
    kanji: Array
  },
  data () {
      return {
          level: "5",
          index: 0,
          correct: 0,
          incorrect: 0,
          choices: [],
          status: 'unanswered'
      }
  },
  computed: {
    kanjiAccordingToLevel () {
      return this.kanji.filter((item) => {
        return item.jlpt_id == this.level;
      })
    },
    currentKanji () {
      return this.randomKanjiAccordingToLevel[this.index];
    },
    randomKanjiAccordingToLevel () {
      return this.shuffleArray(this.kanjiAccordingToLevel);
    },
    isAnswered () {
      return this.status !== 'unanswered';
    }
  },
  methods: {
    generateChoices () {
      this.choices = [];
      this.choices.push(this.randomKanjiAccordingToLevel[this.index]);

      while(this.choices.length < 4) {
        let randomKanjiNumber = Math.floor(Math.random() * this.randomKanjiAccordingToLevel.length);
        if(!this.choices.includes(this.randomKanjiAccordingToLevel[randomKanjiNumber])) {
          this.choices.push(this.randomKanjiAccordingToLevel[randomKanjiNumber]);
        }
      }

      this.choices = this.shuffleArray(this.choices);
    },
    shuffleArray (array) {
      let currentIndex = array.length, randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    },
    checkAnswer (answer) {
      if(this.isAnswered) {
        return
      } 
      else {
        if(answer == this.currentKanji.keyword) {
          this.correct++;
          this.status = 'correct'
        } 
        else {
          this.incorrect++;
          this.status = 'incorrect'
        }
      }
      // this.index++;
    },
    nextQuestion () {
      this.index++;
      this.status = 'unanswered'
    }
  },
  watch: {
    level () {
      this.index = 0;
      this.correct = 0;
      this.incorrect = 0;
      this.generateChoices();
    },
    index () {
      this.generateChoices();
    }
  },
  mounted () {
    this.generateChoices();
  }
};
