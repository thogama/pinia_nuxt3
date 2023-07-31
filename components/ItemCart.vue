<template>
    <k-container>
        <k-element class="kinesis">
            <div class="text-center  bg-secondary  p-2 rounded">
                <div class="row align-items-center  p-0">
                    <div class="col">
                        <img class="h-75 img-fluid border-4 border-warning border" :src="'/' + imgSrc" />

                    </div>
                    <div class="col">
                        {{ title }}

                    </div>
                    <div class="col d-flex align-items-center justify-content-evenly fs-5">
                        <div @click="remove(title!)" class="btn-warning btn-sm btn">
                            <Icon name="ic:baseline-minus" />
                        </div>
                        <div class="text-light px-2">
                            {{ propsReactive.quantity }}
                        </div>
                        <div @click="add(title!)" class="btn-warning btn-sm btn">
                            <Icon name="ic:baseline-plus" />

                        </div>
                    </div>
                    <div class="col fs-4">
                        <div class="text-warning">
                            <div class="my-2 col-sm">
                                {{ propsReactive.price! * propsReactive.quantity! }} Coins
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </k-element>
    </k-container>
</template>

<script setup lang="ts">
let props = defineProps({
    title: String,
    price: Number,
    imgSrc: String,
    quantity: Number
})

let propsReactive = ref({
    price: props.price,
    quantity: props.quantity,
})

const cart = useCart()

function add(name: string) {
    propsReactive.value.quantity! += 1
    let item = cart.storeState.items.find(element => element.name == name)
    item!.quantity += 1
    cart.storeState.total += item!.price
    console.log(cart.storeState.total)
}

function remove(name: string) {
    if (propsReactive.value.quantity! > 0) {
        propsReactive.value.quantity! -= 1
        let item = cart.storeState.items.find(element => element.name == name)
        item!.quantity -= 1
        cart.storeState.total -= item!.price
        cart.storeState.quantity -= 1



    }
}

</script>

<style scoped>
@media (max-width: 767.98px) {
    .kinesis {
        transform: translate3d(0, 0, 0) !important;

    }
}
</style>