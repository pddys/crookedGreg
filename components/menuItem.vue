<template>
  <div class="c-menu-item">
    <div v-if="imageUrl" class="c-menu-item__img">
      <NuxtImg
        :src="`${imageUrl}`"
        sizes="100vw sm:50vw md:400px"
        format="'avif'"
      />
    </div>
    <div class="c-menu-item__text">
      <h3 class="c-menu-item__title" v-if="title">{{ title }}</h3>
      <ul class="c-menu-item__ingredients" v-if="ingredients.length">
        <li v-for="item in ingredients" :key="item.ingredients">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-menu-item {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: $spacer-l;
  padding-bottom: $spacer-xl * 4;
  max-width: 1000px;
  margin: 0 auto;
  @include mq($from: mobile) {
    flex-direction: row;
    gap: $spacer-xl;
    padding-bottom: $spacer-xl * 2;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
      padding-left: $spacer-xl;
    }
  }
}
.c-menu-item__img {
  flex-basis: 50%;
}
.c-menu-item__text {
  flex-basis: 50%;
}
.c-menu-item__title {
  @include font-size-3;
  @include ff-serif;
  line-height: 1;
  margin-bottom: $spacer-m;
  text-wrap: pretty;
  &::first-letter {
    margin-left: $spacer-m;
  }
}
.c-menu-item__ingredients {
  margin-left: $spacer-l;
  @include font-light;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Grilled Courgette and Goat Cheese Pizza",
      required: false,
    },
    imageUrl: {
      type: String,
      default: "https://source.unsplash.com/random/900×900/?pizza",
      required: false,
    },
    ingredients: {
      type: Array,
      default: [
        "Fresh basil leaves.",
        "Olive oil drizzle",
        "Salt and Pepper to taste",
      ],
      required: false,
    },
  },
};
</script>
