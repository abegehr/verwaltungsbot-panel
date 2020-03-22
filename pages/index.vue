<template>
  <section class="section">
    <Login v-if="!$auth.loggedIn" />
    <div v-if="$auth.loggedIn">
      <b-loading :active.sync="loading" />
      <Card
        v-for="item in items"
        :key="item.qid"
        :id="item.id"
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
      loading: true,
      items: []
    };
  },
  mounted: function() {
    this.fetchItems();
  },
  methods: {
    fetchItems: async function() {
      console.log("fetchItems – called");

      try {
        const items = {};
        const answers = {};

        const res = await this.$axios.get("/answers");
        console.log("fetchItems – res: ", res);

        res.data.forEach(item => {
          answers[item.question_id] = {
            id: item.id,
            text: item.answer_text
          };
        });

        Object.keys(questions).forEach(qid => {
          const answer = answers[qid] || {};
          items[qid] = {
            id: answer.id || null,
            qid: qid,
            question: questions[qid],
            answer: answer.text || ""
          };
        });

        this.items = items;
      } catch (err) {
        console.log("fetchItems – Error: ", err);
      }
      this.loading = false;
    }
  }
};
</script>
