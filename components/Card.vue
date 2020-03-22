<template>
  <div class="level box">
    <div class="level-left" style="flex: 1;">
      <p>{{ question }}</p>
    </div>
    <div class="level-right column flex-end" style="flex: 2;">
      <b-field horizontal label="Antwort">
        <b-input type="textarea" v-model="answer_text" :disabled="!editing" />
      </b-field>
      <div>
        <b-button class="is-pulled-right" @click="click">{{
          !editing ? "Edit" : "Save"
        }}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    qid: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      answer_text: this.answer,
      editing: false,
      saving: false
    };
  },
  methods: {
    click: function() {
      console.log("click – id: ", this.id);
      console.log("answer_text: ", this.answer_text);
      this.editing = !this.editing;
    },
    save: async function() {
      console.log("Card.save - called");
      this.saving = true;
      if (!id) {
        console.warn("Card.save – create not impl", qid);
        // https://wirvsvirus.slack.com/archives/C010GMP1G80/p1584908563060000?thread_ts=1584905639.057600&cid=C010GMP1G80
      } else {
        try {
          const res = await this.$axios.put(`/answers/${id}`, { answer_text });
          console.log("Card.save – res: ", res);
          this.saving = false;
        } catch (err) {
          console.log("Card.save – Error: ", err);
        }
      }
    }
  }
};
</script>

<style>
.box {
  min-height: 160px;
}
</style>
