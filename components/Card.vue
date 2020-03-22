<template>
  <div class="level box">
    <div class="level-left" style="width: 240px;">
      <p class="">Frage: {{ question }}</p>
    </div>
    <div class="level-right column flex-end">
      <b-field horizontal label="Antwort">
        <b-input
          style="flex-grow: 1;"
          type="textarea"
          v-model="answer"
          :disabled="!editing"
        />
      </b-field>
      <b-button @click="click">{{ editing ? "Save" : "Edit" }}</b-button>
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
