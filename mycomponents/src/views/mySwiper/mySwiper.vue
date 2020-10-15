<template>
    <div class="swiper">东方闪电</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'mySwiper',
    props: {
        msg: String
    }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.swiper {
    font-size: 0.25rem;
}
</style>
