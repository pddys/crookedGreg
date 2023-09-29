<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
let ctx;
gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
  ctx = gsap.context((self) => {
    const boxes = self.selector('.c-ph__img');

    const box1 = self.selector('.c-ph__img:first-of-type');
    const box2 = self.selector('.c-ph__img:nth-of-type(2n)');
    const box3 = self.selector('.c-ph__img:nth-of-type(3n)');

    gsap.set(box1, {
        y: -50,
    })

    gsap.to(box1, {
        y: 150,
        opacity: 0.1,
        scrollTrigger: {
            trigger: '.c-ph',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        },
    });

    gsap.set(box2, {
        y: 0,
    })

    gsap.to(box2, {
        y: 150,
        opacity: 0.1,
        scrollTrigger: {
            trigger: '.c-ph',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        },
    });

    gsap.set(box3, {
        y: 50,
    })

    gsap.to(box3, {
        y: 150,
        opacity: 0.1,
        scrollTrigger: {
            trigger: '.c-ph',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
        },
    });

    // boxes.forEach((box) => {
    //   gsap.to(box, {
    //     y: 150,
    //     opacity: 0.1,
    //     scrollTrigger: {
            // trigger: '.c-ph',
            // start: 'top top',
            // end: 'bottom bottom',
            // scrub: true,
    //     },
    //   });
    // });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <section class="c-section c-section--masthead c-ph" ref="main" id="top">
        <div class="c-ph__header">
            <span class="c-ph__header-pretitle">Crooked Greg's</span>
            <h1 class="c-ph__header-title">Pizza & Marrow Emporium</h1>
            <span class="c-ph__header-subtitle">Each pizza is a living, breathing entity, shaped by the whispers of user insights and imbued with incantations of innovation.</span>
        </div>
        <div class="c-ph__img-container">
            <div class="c-ph__img">
                <img src="https://source.unsplash.com/random/900×900/?wallpaper,nature">
            </div>
            <div class="c-ph__img">
                <img src="https://source.unsplash.com/random/900×900/?wallpaper,nature">
            </div>
            <div class="c-ph__img">
                <img src="https://source.unsplash.com/random/900×900/?wallpaper,nature">
            </div>
        </div>
        <div class="c-ph__footer">
            <span class="c-ph__footer-line c-ph__footer-line--1"></span>
            <span class="c-ph__footer-line c-ph__footer-line--2"></span>
            <span class="c-ph__footer-line c-ph__footer-line--3"></span>
        </div>
    </section>
    <div class="c-ph__footer c-ph__sticky-header">
            <div class="c-ph__footer-container">
                <span><a href="#menu">Menu</a></span>
                <span><a href="#about">About</a></span>
                <span><a href="#faqs">FAQs</a></span>
                <span><a href="#top">Top</a></span>
            </div>
            <span class="c-ph__footer-line c-ph__footer-line--5"></span>
        </div>
</template>

<style scoped lang="scss">
    .c-ph__box-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 24px;
    }
    .c-ph {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: $black;
        color: $white;
        padding: $spacer-l $spacer-m 0;
        margin-bottom: 0;
        @include mq($from: mobile) {
            padding: $spacer-xl $spacer-l 0;
        }
        @include mq($from: desktop) {
            padding: $spacer-xl $spacer-xl 0;
        }
        @include mq($until: desktop) {
            overflow: hidden;
        }
    }
    .c-ph__header {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    .c-ph__header-pretitle {
        @include font-size-3;
        font-family: serif;
        line-height: 1;
        max-width: 300px;
        margin-bottom: 0.5em;

    }
    .c-ph__header-title {
        @include font-size-6;
        @include font-bold;
        text-transform: uppercase;
        line-height: 1;
        margin-bottom: $spacer-m;
    }
    .c-ph__header-subtitle {
        max-width: 500px;
        @include font-size-minus-2;
        @include font-bold;
        text-transform: uppercase;
        line-height: 1.5;
    }
    .c-ph__img-container {
        display: flex;
        gap: $spacer-m;
        margin: $spacer-xl 0;
        padding-top: 50px;
        padding-bottom: 150px;
        @include mq($until: desktop) {
            width: 180vw;
        }
    }
    .c-ph__img {
        aspect-ratio: 16 / 16;
        object-fit: cover;
        &:first-of-type {
            transform: translateY(-50px);
        }
        &:last-of-type {
            transform: translateY(50px);
        }
        @include mq($until: desktop) {

        }
    }
    .c-ph__footer {
        width: 100%;
    }
    .c-ph__footer-container {
        display: flex;
        justify-content: space-between;
        padding: $spacer-m 0;
        margin-top: -$spacer-xs;
        span {
            @include font-size-minus-1;
            @include font-bold;
            text-transform: uppercase;
            line-height: 1;
        }
    }
    .c-ph__footer-line {
        display: block;
        width: 100%;
        height: 1px;
        background: rgba($white, 0.75);
        margin-bottom: $spacer-xs;
        &--2 {
            height: 4px;
            background: rgba($white, 0.75);
        }
        &--3 {
            height: 12px;
            background: rgba($white, 0.25);
            margin-top: $spacer-s;
        }
    }
    .c-ph__sticky-header {
        position: sticky;
        top: 0;
        color: $white;
        background: rgba($black, 0.75);
        backdrop-filter: blur(5px);
        z-index: 100;
        padding: 0 $spacer-m 0 $spacer-m;
        @include mq($from: mobile) {
            padding: 0 $spacer-l 0 $spacer-l;
        }
        @include mq($from: desktop) {
            padding: 0 $spacer-xl 0 $spacer-xl;
        }
    }
</style>