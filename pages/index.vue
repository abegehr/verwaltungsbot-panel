<template>
  <section class="section">
    <Login v-if="!$auth.loggedIn" />
    <div v-if="$auth.loggedIn">
      <Card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :question="item.question"
        :answer="item.answer"
      />
    </div>
  </section>
</template>

<script>
import Login from "~/components/Login";
import Card from "~/components/Card";

const questions = {
  verunsicherter_buerger: "Ich bin verunsichert. Was nun?",
  gastro_betrieb: "Ich habe einen Gastro Betrieb. Was nun?",
  corona_diagnose: "Wo kann ich einen Test machen?"
};

export default {
  name: "HomePage",
  components: {
    Login,
    Card
  },
  data() {
    return {
      items: []
    };
  },
  mounted: function() {
    this.fetchItems();
  },
  methods: {
    fetchItems: function() {
      this.$axios.get("/answers").then(res => {
        const items = {};
        const answers = {};

        res.data
          .filter(item => item.channel.key === "test-website-1") //DEBUG filtering is debug only!
          .forEach(item => {
            answers[item.question_id] = item.answer_text;
          });

        Object.keys(questions).forEach(id => {
          items[id] = {
            id: id,
            question: questions[id],
            answer: answers[id] || ""
          };
        });

        this.items = items;
      });
    }
  }
};
</script>
