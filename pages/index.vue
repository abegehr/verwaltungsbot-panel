<template>
  <section class="section">
    <Login v-if="!$auth.loggedIn" />
    <div v-if="$auth.loggedIn">
      <Card
        v-for="item in items"
        :key="item.id"
        :qid="item.qid"
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
  verunsicherter_buerger:
    "Fragen zum Umgang mit der aktuellen Situation. Ziel ist es, Informationsmaterial an die Hand zu geben und zu beruhigen.\nThemen: Frustration, Unsicherheit, familiäre Konflikte, Lebensmittelversorgung / Hamsterkäufe, Möglichkeiten für soziales Engagement, Aufenthalt in der Öffentlichkeit / Ausgangssperre.",
  gastro_betrieb:
    "Fragen zu aktuellen Vorschriften im Bezug auf Gastronomie-Einrichtungen. Welche Regeln gelten für Restaurants, Imbissbuden und Lieferdienste?",
  corona_diagnose:
    "Fragen, die mögliche Ansteckungssituationen, Symptome und Handlungsempfehlungen im Falle einer Erkrankung betreffen."
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

        Object.keys(questions).forEach(qid => {
          items[qid] = {
            qid: qid,
            question: questions[qid],
            answer: answers[qid] || ""
          };
        });

        this.items = items;
      });
    }
  }
};
</script>
