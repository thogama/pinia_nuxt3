<template>
    <k-container>
        <k-element class="kinesis">
            <div class="text-center  bg-secondary  p-2 rounded">
                <div class="row row-cols-1 row-cols-lg-2 align-items-center  p-0">
                    <div class="col">
                        <img class="h-75 img-fluid border-4 border-warning border" :src="'/' + src" />
                    </div>
                    <div class="col fs-4">
                        <div class="  text-warning">
                            {{ title }}
                            <div v-if="statValue! <= 0" class="text-danger fs-5">
                                {{ statType }} {{ statValue }}
                            </div>
                            <div v-else class="text-success fs-5">
                                {{ statType }} +{{ statValue }}
                            </div>
                            <div class="my-2 col-sm">
                                {{ price }} Coins
                            </div>
                            <div class="col">
                                <div @click="addToCart()" class=" btn btn-outline-warning">
                                    Add to Cart
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </k-element>
    </k-container>
</template>

<script setup lang="ts">
import Item from '~~/interfaces/Item';

let props = defineProps({
    title: String,
    price: Number,
    src: String,
    statType: String,
    statValue: Number
})

let dummyItem: Item = {
    name: props.title!,
    price: props.price!,
    quantity: 1
}
async function addToCart() {
    let store = useCart()
    store.addItem(dummyItem)
}

</script>

<style scoped>
@media (max-width: 767.98px) {
    .kinesis {
        transform: translate3d(0, 0, 0) !important;

    }
}
</style>