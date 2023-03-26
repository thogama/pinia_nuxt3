<template>
    <div class="bg-secondary rounded m-1 p-3 row ">
        <div class="col-sm-5 d-flex align-items-center">
            <img class="border border-warning border-4 " :src="'/_nuxt/assets/' + src" />
        </div>
        <div class="col p-0 text-info">
            <div class="row">
                <div class="fs-5 col special">
                    {{ title }}
                </div>
                <div v-if="statValue! <= 0" class="text-danger fs-5">
                    {{ statType }} {{ statValue }}
                </div>
                <div v-else class="text-success fs-5">
                    {{ statType }} +{{ statValue }}
                </div>

                <div class="my-2">
                    {{ price }} Coins
                </div>
                <div class="col-6">
                    <div class="btn btn-warning">
                        Add to Cart
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
s
<script setup lang="ts">
let props = defineProps({
    title: String,
    price: Number,
    src: String,
    statType: String,
    statValue: Number
})
console.log(props.statValue)


</script>

<style scoped></style>