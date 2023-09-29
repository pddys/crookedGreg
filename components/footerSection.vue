<script setup>

</script>

<template>
    <section class="c-section c-section--footer c-footer">
        <div class="c-footer-lines">
            <span class="c-footer-line c-footer-line--1"></span>
            <span class="c-footer-line c-footer-line--2"></span>
            <span class="c-footer-line c-footer-line--3"></span>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .c-footer-lines {
        padding: 0 $spacer-m $spacer-m;
        @include mq($from: mobile) {
            padding: 0 $spacer-l $spacer-m;
        }
        @include mq($from: desktop) {
            padding: 0 $spacer-xl $spacer-m;
        }
    }
    .c-footer-line {
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
</style>