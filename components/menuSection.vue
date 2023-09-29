<template>
    <section class="c-section c-section--menu c-menu" ref="main" id="menu">
        <h2 class="visually-hidden">Menu</h2>
        <div class="c-marquee">
            <div class="c-marquee__inner forward">
                <span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span>
            </div>
            <div class="c-marquee__inner reverse">
                <span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span><span>Menu</span>
            </div>
        </div>
        <div class="c-menu__container">
            <menuItem />
            <menuItem />
            <menuItem />
        </div>
    </section>
</template>

<script setup>
import MenuItem from './menuItem.vue'
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;


onMounted(() => {
    ctx = gsap.context((self) => {

    const marquee = self.selector('.c-marquee');
    const marqueeForwards = self.selector('.forward');
    const marqueeReverse = self.selector('.reverse');


    // ScrollTrigger.saveStyles(".c-marquee__inner, .c-section--menu");

        ScrollTrigger.matchMedia({"(min-width: 769px)": function() {

            let desktopTL = gsap.timeline({
                scrollTrigger: {
                    trigger: marquee,
                    start: "middle bottom",
                    scrub: 32,
                }
            });

            desktopTL
                .to(marqueeForwards, {duration: 1, xPercent: -60})
                .to(marqueeReverse, {duration: 1, xPercent: 60},"<")
            }
        })
        ScrollTrigger.matchMedia({"(max-width: 769px)": function() {

            let desktopTL = gsap.timeline({
                scrollTrigger: {
                    trigger: marquee,
                    start: "middle bottom",
                    scrub: 16,
                }
            });

            desktopTL
                .to(marqueeForwards, {duration: 1, xPercent: -35})
                .to(marqueeReverse, {duration: 1, xPercent: 35},"<")
            }
            })
    }, main.value); // <- Scope!
})
</script>

<style lang="scss" scoped>
    .c-menu {
        min-height: 100dvh;
        background: $black;
        color: $white;
        padding: $spacer-s $spacer-m;
        @include mq($from: mobile) {
            padding: $spacer-m $spacer-l;
        }
        @include mq($from: desktop) {
            padding: $spacer-m $spacer-xl;
        }
    }
    .c-marquee {
        margin-top: 10vh;
        margin-bottom: 10vh;
        height: auto;
        position: relative;
        overflow-x: hidden;
        pointer-events: none;
        &__inner {
            width: fit-content;
            display: flex;
            position: relative;
            white-space: nowrap;
            span {
                @include font-size-3;
                @include font-bold;
                padding: 0 2vw;
                text-transform: uppercase;
                margin-right: 5vw;
                @include mq($from: tablet) {
                    @include font-size-5;
                }
            }
            &.forward {
                transform: translateX(10%);
            }
            &.reverse {
                transform: translateX(-60%);
            }
        }
    }
</style>