<script setup></script>
<template>
    <div class="c-faq">
        <div class="c-faq__header">
            <div class="c-faq__question">
                {{ faq.question }} 
            </div>
            <div class="c-faq__icon">
                <img :src="chevron" alt="chevron-icon"/>
            </div>
        </div>
        <div class="c-faq__answer">
            <p>{{ faq.answer }}</p>
        </div>
    </div>
</template>
<style scoped lang="scss"></style>