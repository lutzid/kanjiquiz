export default {
  name: 'KanjiDisplayer',
  props: {
      currentKanji: Object,
      status: String
  },
  computed: {
    isCorrect () {
      return this.status === 'correct'
    },
    isIncorrect () {
      return this.status === 'incorrect'
    },
    isAnswered () {
      return this.status !== 'unanswered'
    }
  }
}