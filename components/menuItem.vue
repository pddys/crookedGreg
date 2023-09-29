<template>
    <div class="c-menu-item">
        <div class="c-menu-item__img">
            <img src="https://source.unsplash.com/random/900×900/?pizza">
        </div>
        <div class="c-menu-item__text">
            <h3 class="c-menu-item__title">Grilled Courgette and Goat Cheese Pizza:</h3>
            <ul class="c-menu-item__ingredients">
                <li>Thinly sliced grilled courgette/zucchini.</li>
                <li>Crumbled goat cheese or feta cheese.</li>
                <li>Red onion slices.</li>
                <li>Fresh basil leaves.</li>
                <li>Olive oil drizzle</li>
                <li>Salt and Pepper to taste</li>
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
        padding-bottom: $spacer-xl;
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
        line-height: 1;
        margin-bottom: $spacer-m;
        &::first-letter {
            margin-left:$spacer-m;
        }
    }
    .c-menu-item__ingredients {
        margin-left: $spacer-l;
    }
</style>

<script>
</script>