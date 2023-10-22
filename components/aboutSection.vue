<template>
    <section class="c-section c-section--about c-about" ref="main" id="about">
        <div class="c-about__inner">
            <div ref="heroImgContainer" class="c-about__main-img">
                <NuxtImg
                    src="about__hero.png"
                    sizes="100vw sm:50vw md:400px lg:100vw"
                    format="'avif'"
                />
            </div>
            <div class="c-about__text">
                <h3>Behind the Scenes</h3>
                <p>We take you behind the scenes of Greg's exclusive marrow collection</p>
            </div>

            <div class="c-about__img-container">
                <div class="c-about__img c-about__img--1">
                    <span>001</span>
                    <NuxtImg
                        src="about_1.png"
                        sizes="100vw sm:50vw md:400px lg:100vw"
                        format="'avif'"
                    />
                    <!-- <img src="https://source.unsplash.com/random/900×900/?marrow,courgette"> -->
                </div>
                <div class="c-about__img c-about__img--2">
                    <span>002</span>
                    <NuxtImg
                        src="about_2.png"
                        sizes="100vw sm:50vw md:400px lg:100vw"
                        format="'avif'"
                    />
                    <!-- <img src="https://source.unsplash.com/random/900×900/?marrow,courgette"> -->
                </div>
                <div class="c-about__img c-about__img--3">
                    <span>003</span>
                    <NuxtImg
                        src="about_3.png"
                        sizes="100vw sm:50vw md:400px lg:100vw"
                        format="'avif'"
                    />
                    <!-- <img src="https://source.unsplash.com/random/900×900/?marrow,courgette"> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .c-about {
        background: $black;
        color: $white;
        margin-bottom: $spacer-l;
        @include mq($from: tablet) {
            padding: $spacer-l $spacer-l 0;
        }
        @include mq($from: desktop) {
            padding: $spacer-xl $spacer-xl 0;
        }
    }
    .c-about__inner {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .c-about__main-img {
        width: 100%;
        height: 70vw;
        overflow: hidden;
        margin-bottom: $spacer-l;
        padding-top: $spacer-xl;
        position: relative;
        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            object-fit: cover;
            object-position: center;
            padding: 0;
        }
        @include mq($from: desktop) {
            height: 30vw;
        }
    }
    .c-about__text {
        text-align: center;
        padding: $spacer-l $spacer-m;
        h3 {
            @include font-size-minus-1;
            text-transform: uppercase;
            margin-bottom: $spacer-m;
        }
        p {
            @include font-size-4;
            @include ff-serif;
            line-height: 1;
            text-wrap: balance
        }
    }
    .c-about__img-container {
        display: flex;
        align-items: flex-end;
        gap: $spacer-m;
        margin: $spacer-xl 0;
        padding-top: $spacer-xl;
        padding-bottom: $spacer-xl;
        @include mq($from: desktop) {
            padding-top: calc($spacer-xl * 2);
            gap: $spacer-xl;
        }
        @include mq($until: desktop) {
            position: relative;
            width: 110vw;
            left: 50%;
            transform: translateX(-50%);
            overflow: hidden;
        }
    }
    .c-about__img {
        aspect-ratio: 10 / 16;
        object-fit: cover;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        span {
            display: none;
        }
        &--1, &--2, &--3 {
            display: none;
        }
        &--2 {
            display: block;
            width: 110vw;
        }
        @include mq($from: tablet) {
            span {
                display: block;
            }
            &--1, &--2, &--3 {
                display: block;
            }
            &--1 {
                transform: translateY(-20%);
                flex-grow: 1;
                flex-basis: 70%;
            }
            &--2 {
                flex-grow: 2;
            }
            &--3 {
                transform: translateY(-35%);
                flex-grow: 1;
                flex-basis: 70%;
            }
        }
    }
</style>


<script setup>
import { onMounted, onUnmounted, ref} from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();
let ctx;
gsap.registerPlugin(ScrollTrigger);

const heroImgContainer = ref(0)

onMounted(async () => {

  ctx = gsap.context(async (self) => {

    const heroImgContainerSelector = self.selector('.c-about__main-img');
    const heroImgSelector = self.selector('.c-about__main-img img');

    gsap.utils.toArray(heroImgContainerSelector).forEach(function(container) {
        let heroImage = container.querySelector('img');

        gsap.to(heroImage, {
            y: () => heroImgContainer.value.offsetHeight - heroImgSelector[0].offsetHeight,
            scale: 1.15,
            scrollTrigger: {
                trigger: container,
                scrub: 2,
                pin: false,
                invalidateOnRefresh: true
            },
        });
    }); 

    const aboutImgs = self.selector('.c-about__img-container');

    const aboutImg1 = self.selector('.c-about__img--1 img');
    const aboutImg2 = self.selector('.c-about__img--2 img');
    const aboutImg3 = self.selector('.c-about__img--3 img');

    gsap.set(aboutImg1, {
        y: -20,
        opacity: 0,
        scale: 1.1111,
        clipPath: 'inset(5%)',
    })

    gsap.to(aboutImg1, {
        y: 25,
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0%)',
        scrollTrigger: {
            trigger: '.c-about__img-container',
            start: 'top top+=150px',
            end: 'bottom bottom-=150px',
            scrub: true,
        },
    });

    gsap.set(aboutImg2, {
        y: 0,
        opacity: 0,
        scale: 1.1111,
        clipPath: 'inset(5%)',
    })

    gsap.to(aboutImg2, {
        y: 25,
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0%)',
        scrollTrigger: {
            trigger: '.c-about__img-container',
            start: 'top top+=150px',
            end: 'bottom bottom-=150px',
            scrub: true,
        },
    });

    gsap.set(aboutImg3, {
        y: -35,
        opacity: 0,
        scale: 1.1111,
        clipPath: 'inset(5%)',
    })

    gsap.to(aboutImg3, {
        y: 25,
        opacity: 1,
        scale: 1,
        clipPath: 'inset(0%)',
        scrollTrigger: {
            trigger: '.c-about__img-container',
            start: 'top top+=150px',
            end: 'bottom bottom-=150px',
            scrub: true,
        },
    });
  }, main.value);
})
</script>
