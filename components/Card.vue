<template>
  <div class="level box">
    <div class="level-left" style="flex: 1;">
      <p class="">Frage: {{ question }}</p>
    </div>
    <div class="level-right column flex-end" style="flex: 2;">
      <b-field horizontal label="Antwort">
        <b-input type="textarea" v-model="answer" :disabled="!editing" />
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
      editing: false
    };
  },
  methods: {
    click: function() {
      console.log("click – id: ", this.id);
      this.editing = !this.editing;
    }
  }
};
</script>

<style>
.box {
  min-height: 160px;
}
</style>
