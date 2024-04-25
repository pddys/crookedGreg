<template>
    <section class="c-section c-section--employee c-employee" ref="main" id="employee">
        <div class="c-employee__text">
            <h3>Employee of the Month</h3>
            <p>November 2023</p>
        </div>
        <div class="c-employee__img">
            <NuxtImg
                src="/images/employee.png"
                sizes="100vw sm:50vw md:400px lg:100vw"
            />
        </div>
    </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref} from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const main = ref();

let ctx;
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    ctx = gsap.context((self) => {
        const employeeImg = self.selector('.c-employee__img img');

        gsap.set(employeeImg, {
            clipPath: 'inset(95%)',
            scale: 1.1111,
            y: -350
        })

        gsap.to(employeeImg, {
            clipPath: 'inset(5%)',
            scale: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".c-employee__img",
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
                markers: true
            }
        });
    }, main.value); // <- Scope!

});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});

</script>

<style lang="scss" scoped>
.c-section--employee img {
	pointer-events: none;
	z-index: 1;
    max-width: 500px;
}

.c-employee__img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    min-height: 100dvh;
}

.c-employee {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.c-employee__text {
        text-align: center;
        padding: $spacer-l $spacer-m;
        p {
            @include font-size-minus-1;
            text-transform: uppercase;
            margin-top: $spacer-m;
        }
        h3 {
            @include font-size-4;
            @include ff-serif;
            line-height: 1;
            text-wrap: balance
        }
    }

</style>