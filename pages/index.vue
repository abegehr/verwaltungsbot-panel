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

export default {
  name: "HomePage",
  data() {
    return {
      items: [
        {
          id: "1",
          question: "Was bedeutet häusliche Quarantäne?",
          answer: "HEy1"
        },
        {
          id: "2",
          question: "Woran erkenne ich Corona?",
          answer: "HEy2"
        },
        {
          id: "3",
          question: "Wo kann ich einen Test machen?",
          answer: "HEy3"
        }
      ]
    };
  },
  components: {
    Login,
    Card
  }
};
</script>
