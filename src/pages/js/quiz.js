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
          choices: []
      }
  },
  computed: {
    kanjiAccordingToLevel () {
      return this.kanji.filter((item) => {
        return item.jlpt_id == this.level;
      })
    },
    currentKanji () {
      return this.kanjiAccordingToLevel[this.index];
    }
  },
  methods: {
    generateChoices () {
      this.choices = [];
      this.choices.push(this.kanjiAccordingToLevel[this.index]);

      while(this.choices.length < 4) {
        let randomKanjiNumber = Math.floor(Math.random() * this.kanjiAccordingToLevel.length);
        if(!this.choices.includes(this.kanjiAccordingToLevel[randomKanjiNumber])) {
          this.choices.push(this.kanjiAccordingToLevel[randomKanjiNumber]);
        }
      }

      this.choices = this.shuffleChoices(this.choices);
    },
    shuffleChoices (array) {
      let currentIndex = array.length, randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
      }

      return array;
    },
    checkAnswer (answer) {
      if(answer == this.currentKanji.keyword) {
        this.correct++;
      } 
      else {
        this.incorrect++;
      }
      this.index++;
    }
  },
  watch: {
    level () {
      this.index = 0;
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
