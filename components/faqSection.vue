<template>
  <section class="c-section c-section--faq c-faqs" ref="main" id="faqs">
    <div class="c-faqs__container">
      <Faq v-for="faq in faqs" :key="faq.id" :faq="faq" />
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import Faq from "./faq";

export default {
  //     const faqs = ref(data) // data is above array of faq questions & answers
  // const toggleAnswer = id => {
  //     faqs.value = faqs.value.map(faq => faq.id === id ? {...faq, isOpen: !faq.isOpen} : faq)
  // }
};

// const data = [
//   {
//     id: 1,
//     question: "What is the capital of Australia?",
//     answer:
//       "The capital of Australia is Canberra. It is a relatively new city, established in 1913, and is located between Sydney and Melbourne. Canberra is home to numerous national institutions and landmarks, including Parliament House, the Australian War Memorial, and the National Gallery of Australia. The city is known for its modern architecture and urban planning, and has a population of over 400,000 people. Despite not being one of the country's largest cities, Canberra is an important political and cultural center, and has a significant impact on the nation's economy and development.",
//     isOpen: false,
//   },
//   {
//     id: 2,
//     question: "What is the tallest animal on earth?",
//     answer:
//       "The tallest animal on earth is the giraffe, which can grow up to 18 feet tall. Giraffes are known for their long necks, which can reach up to 6 feet in length, and are used to reach leaves and fruits from tall trees. Giraffes are found in savannas and grasslands in Africa, and are herbivorous, feeding on leaves, fruits, and flowers. Despite their size, giraffes are social animals and live in groups called towers. They are also known for their distinctive spotted coat, which helps them blend in with their environment and avoid predators.",
//     isOpen: false,
//   },
//   {
//     id: 3,
//     question: "What is the largest country in the world by area?",
//     answer:
//       "The largest country in the world by area is Russia, which covers over 17 million square kilometers. Russia is located in northern Eurasia, and is bordered by Norway, Finland, Estonia, Latvia, Lithuania, Poland, Belarus, Ukraine, Georgia, Azerbaijan, Kazakhstan, China, North Korea, and Mongolia. Russia has a population of over 144 million people, and is known for its rich history and culture, as well as its natural resources, such as oil, gas, and minerals. The country is also home to numerous landmarks and tourist attractions, including the Red Square, the Kremlin, and the Hermitage Museum.",
//     isOpen: false,
//   },
//   {
//     id: 4,
//     question: "What is the largest animal on earth?",
//     answer:
//       "The largest animal on earth is the blue whale, which can grow up to 100 feet in length and weigh up to 200 tons. Blue whales are found in all the world's oceans, and are known for their distinctive blue-gray coloration and long, slender bodies. They are filter feeders, feeding on tiny shrimp-like creatures called krill, and can consume up to 4 tons of krill in a single day. Despite their enormous size, blue whales are graceful swimmers and can travel at speeds of up to 30 miles per hour.",
//     isOpen: false,
//   },
//   {
//     id: 5,
//     question: "What is the capital of France?",
//     answer:
//       "The capital of France is Paris. It is one of the most famous cities in the world, known for its beautiful architecture, rich history, and world-class museums and landmarks. Paris is home to iconic landmarks such as the Eiffel Tower, the Louvre Museum, and Notre-Dame Cathedral, and is famous for its cuisine and fashion. The city has a population of over 2 million people, and is a global center for art, fashion, and culture. Despite its cosmopolitan character, Paris has retained much of its historic charm, with narrow streets",
//     isOpen: false,
//   },
// ];
</script>

<style></style>
