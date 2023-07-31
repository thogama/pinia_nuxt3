<template>
    <div style="min-height: 100vh;" class="">
        <div class="bg-primary text-warning d-flex flex-row-reverse
             align-items-center justify-content-between special 
             p-3 sticky-top ">
            <NuxtLink to="/" class="btn btn-outline-warning  position-relative">
                <Icon class="fs-1 rounded" name="ph:arrow-fat-line-left-fill" />
            </NuxtLink>
            <div class="my-3 fs-2">
                The Cart

            </div>
        </div>
        <div class="row m-1 text-nowrap p-2 border-4 border border-warning rounded text-warning special">
            Total : {{ cart.storeState.total }} Coins
        </div>

        <div class="row  py-2 text-center g-4 ">

            <div v-for="item, index in items" class="col-sm-6 text-warning">
                <transition-fade :delay="index * 75" :duration="500 + (index * 150)">
                    <div v-if="trigger">
                        <ItemCart :imgSrc="imgToUse(item)!" :title="item.name" :price="item.price"
                            :quantity="item.quantity" />
                    </div>
                </transition-fade>

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Item from '~~/interfaces/Item';
useHead({
    title: "Cart"
})

let trigger = ref(false)
onMounted(() => {
    trigger.value = true
})
let cart = useCart()

let items: Item[] = cart.storeState.items

let AllItemsImgMap: Array<{ name: string, src: string }> = [
    {
        name: "Hammer",
        src: "hammer.png",
    },
    {
        name: "Armor",
        src: "armor.png",
    },
    {
        name: "Helmet",
        src: "helmet.png",
    },
    {
        name: "Sword",
        src: "sword.png",
    },
    {
        name: "Wand",
        src: "wand.png",
    },
    {
        name: "Map",

        src: "map.png",
    },
    {
        name: "HP Potion",
        src: "potionRed.png",
    },
    {
        name: "Shield",
        src: "shieldSmall.png",
    },
    {
        name: "Tome",
        src: "tome.png",
    },
    {
        name: "Bow",
        src: "bow.png",
    },
    {
        name: "Big Axe",
        src: "axeDouble.png",
    },
    {
        name: "B. Shield",
        src: "shield.png",
    }
]
const imgToUse = (item: Item) => {
    let val = AllItemsImgMap.find(element => element.name === item.name)
    return val!.src
} 
</script>