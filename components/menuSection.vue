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
            <menuItem
                title="Grilled Courgette and Goat Cheese Pizza"
                :ingredients="[
                    'Thinly sliced grilled courgette/zucchini',
                    'Crumbled goat cheese or feta cheese',
                    'Red onion slices',
                    'Fresh basil leaves',
                    'Olive oil drizzle',
                    'Salt and Pepper to taste'
                ]"
                imageUrl="/menuItems/marrow_and_goats_cheese_pizza.png"
            />
            <menuItem
                title="Marrow, Ricotta, and Lemon Zest Pizza"
                :ingredients="[
                    'Sliced cooked marrow/zucchini',
                    'Dollops of ricotta cheese',
                    'Lemon zest for brightness',
                    'Fresh rosemary leaves',
                    'Drizzle of extra-virgin olive oil',
                ]"
                imageUrl="/menuItems/marrow_ricotta_rosemary_and_lemon_zest_pizza.png"
            />
            <menuItem
                title="Marrow, Pesto, and Pine Nut Pizza"
                :ingredients="[
                    'Sliced marrow/zucchini',
                    'Homemade or store-bought pesto sauce',
                    'Toasted pine nuts',
                    'Shredded Parmesan or Asiago cheese',
                    'Fresh arugula (rocket) for topping after baking',
                ]"
                imageUrl="/menuItems/marrow_pesto_and_pine_nut_pizza.png"
            />
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

        ScrollTrigger.matchMedia({
            
            "(min-width: 769px)": function() {

                let desktopTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: marquee,
                        start: "middle bottom",
                        scrub: 5,
                    }
                });

                desktopTL
                    .to(marqueeForwards, {duration: 1, xPercent: -20})
                    .to(marqueeReverse, {duration: 1, xPercent: 20},"<")
            },

            "(max-width: 769px)": function() {

                let desktopTL = gsap.timeline({
                    scrollTrigger: {
                        trigger: marquee,
                        start: "middle bottom",
                        scrub: 1.5,
                    }
                });

                desktopTL
                    .to(marqueeForwards, {duration: 1, xPercent: -100})
                    .to(marqueeReverse, {duration: 1, xPercent: 100},"<")
            }
        })

        const menuContainer = self.selector('.c-menu__container');
        const menuItems = self.selector('.c-menu-item');

        ScrollTrigger.matchMedia({
            "(min-width: 769px)": function() {
                menuItems.forEach((item) => {
                    let menuImg = item.querySelector('img');
                    let menuTitle = item.querySelector('h3');
                    let menuIngred = item.querySelector('ul');

                    gsap.set(
                        menuImg, {
                            opacity: 0,
                            scale: 0.875,
                        },
                    ),
                    gsap.to(
                        menuImg, {
                            opacity: 1,
                            scale: 1,
                            scrollTrigger: {
                                trigger: item,
                                start: 'top bottom',
                                end: 'bottom bottom',
                                scrub: true,
                                scrub: 2
                            },
                        },
                    ),
                    gsap.set(
                        menuTitle, {
                            opacity: 0,
                            scaleY: 0.875,
                            y: 100,
                        },
                    );
                    gsap.to(
                        menuTitle, {
                            opacity: 1,
                            scaleY: 1,
                            y: 0,
                            scrollTrigger: {
                                trigger: item,
                                start: 'top bottom',
                                end: 'bottom bottom',
                                scrub: 2,
                            },
                        }
                    );
                    gsap.set(
                        menuIngred, {
                            opacity: 0,
                            scaleY: 0.875,
                            y: 100,
                        },
                    );
                    gsap.to(
                        menuIngred, {
                            opacity: 1,
                            scaleY: 1,
                            y: 0,
                            scrollTrigger: {
                                trigger: item,
                                start: 'top bottom',
                                end: 'bottom bottom',
                                scrub: 2,
                            },
                        }
                    );
                });
            },
            "(max-width: 769px)": function() {
                menuItems.forEach((item) => {
                    let menuImg = item.querySelector('img');
                    let menuTitle = item.querySelector('h3');
                    let menuIngred = item.querySelector('ul');


                    gsap.set(
                        menuImg, {
                            opacity: 0,
                            scale: 0.875,
                        },
                    );
                    gsap.to(
                        menuImg, {
                            opacity: 1,
                            scale: 1,
                            scrollTrigger: {
                                trigger: item,
                                start: 'top bottom',
                                end: 'middle -55%',
                                scrub: true,
                                markers: true,
                                scrub: 2
                            },
                        },
                    );
                    gsap.set(
                        menuTitle, {
                            opacity: 0,
                            scaleY: 0.875,
                            y: 100,
                        },
                    );
                    gsap.to(
                        menuTitle, {
                            opacity: 1,
                            scaleY: 1,
                            y: 0,
                            scrollTrigger: {
                                trigger: item,
                                start: 'top bottom',
                                end: 'bottom bottom',
                                scrub: 2,
                            },
                        }
                    );
                    gsap.set(
                        menuIngred, {
                            opacity: 0,
                            scaleY: 0.875,
                            y: 100,
                        },
                    );
                    gsap.to(
                        menuIngred, {
                            opacity: 1,
                            scaleY: 1,
                            y: 0,
                            scrollTrigger: {
                                trigger: item,
                                start: 'top bottom',
                                end: 'bottom bottom',
                                scrub: 2,
                            },
                        }
                    );
                });
            },
        });

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