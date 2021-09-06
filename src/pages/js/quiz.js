import KanjiDisplayer from "../../components/KanjiDisplayer.vue";
import Option from "../../components/Option.vue";
import Modal from "../../components/modal/Result.vue";

export default {
  name: "Quiz",
  components: {
    KanjiDisplayer,
    Option,
    Modal
  },
  props: {
    kanji: Array,
  },
  data() {
    return {
      level: "5",
      index: 0,
      correct: 0,
      incorrect: 0,
      choices: [],
      status: "unanswered",
      showResult: false,
      showModal: false,
    };
  },
  computed: {
    kanjiAccordingToLevel() {
      return this.kanji.filter((item) => {
        return item.jlpt_id == this.level;
      });
    },
    currentKanji() {
      return this.randomKanjiAccordingToLevel[this.index];
    },
    randomKanjiAccordingToLevel() {
      return this.shuffleArray(this.kanjiAccordingToLevel);
    },
    isAnswered() {
      return this.status !== "unanswered";
    },
    getResult() {
      return Math.floor((this.correct / (this.correct + this.incorrect)) * 100);
    },
    isFinished() {
      return this.index === this.randomKanjiAccordingToLevel.length - 1;
    },
  },
  methods: {
    generateChoices() {
      this.choices = [];
      this.choices.push(this.randomKanjiAccordingToLevel[this.index]);

      while (this.choices.length < 4) {
        let randomKanjiNumber = Math.floor(
          Math.random() * this.randomKanjiAccordingToLevel.length
        );
        if (
          !this.choices.includes(
            this.randomKanjiAccordingToLevel[randomKanjiNumber]
          )
        ) {
          this.choices.push(
            this.randomKanjiAccordingToLevel[randomKanjiNumber]
          );
        }
      }

      this.choices = this.shuffleArray(this.choices);
    },
    shuffleArray(array) {
      let currentIndex = array.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
    checkAnswer(answer) {
      if (this.isAnswered) {
        return;
      } else {
        if (answer == this.currentKanji.keyword) {
          this.correct++;
          this.status = "correct";
        } else {
          this.incorrect++;
          this.status = "incorrect";
        }
      }
      // this.index++;
    },
    nextQuestion() {
      if (this.isFinished && this.isAnswered) {
        this.showModal = true;
      } else {
        this.index++;
        this.status = "unanswered";
      }
    },
    closeModal() {
      this.showModal = false;
      this.index = 0;
      this.correct = 0;
      this.incorrect = 0;
      this.generateChoices();
      this.status = "unanswered";
    },
  },
  watch: {
    level() {
      this.index = 0;
      this.correct = 0;
      this.incorrect = 0;
      this.generateChoices();
    },
    index() {
      this.generateChoices();
    },
  },
  mounted() {
    this.generateChoices();
  },
};
