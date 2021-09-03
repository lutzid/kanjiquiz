export default {
  name: "Option",
  props: {
    constituent: String,
    id: Number,
    jlpt_id: Number,
    jouyou_id: Number,
    kanji: String,
    keyword: String,
    kun_yomi: String,
    lesson_no: Number,
    on_yomi: String,
    story: String,
    stroke_count: Number,
  },
  methods: {
    checkAnswer(answer) {
      this.$emit("checkAnswer", answer)
    }
  }
};
