<template>
    <div class="">


        <div
            class="bg-primary text-warning d-flex flex-row-reverse align-items-center justify-content-between special p-3 sticky-top ">
            <NuxtLink to="/cart" class="btn btn-outline-warning  position-relative">
                <Icon class="fs-1 rounded" name="material-symbols:shopping-cart" />
                <span class="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger">
                    {{ itemsInStore.storeState.quantity }}
                </span>
            </NuxtLink>
            <div class="my-3 fs-2">
                The Shop

            </div>
        </div>
        <div class="row row-cols-2 py-2 row-cols-lg-4 g-4 ">

            <div v-for="item, index in items" class="col">
                <transition-fade :delay="index * 75" :duration="500 + (index * 150)">
                    <div v-if="trigger">
                        <Item :title="item.title" :stat-type="item.statType" :stat-value="item.statValue"
                            :price="item.price" :src="item.src" />
                    </div>
                </transition-fade>

            </div>

        </div>


    </div>
</template>

<script setup lang="ts">

let itemsInStore = useCart()

let trigger = ref(false)
const items: Array<{ title: string, statType: string, statValue: number, src: string, price: number }> = [
    {
        title: "Hammer",
        statType: "ATK",
        statValue: -10,
        src: "hammer.png",
        price: 100
    },
    {
        title: "Armor",
        statType: "DEF",
        statValue: +15,
        src: "armor.png",
        price: 250
    },
    {
        title: "Helmet",
        statType: "DEF",
        statValue: +15,
        src: "helmet.png",
        price: 250
    },
    {
        title: "Sword",
        statType: "ATK",
        statValue: +25,
        src: "sword.png",
        price: 850
    },
    {
        title: "Wand",
        statType: "ATK",
        statValue: +25,
        src: "wand.png",
        price: 850
    },
    {
        title: "Map",
        statType: "???",
        statValue: 0,
        src: "map.png",
        price: 950
    },
    {
        title: "HP Potion",
        statType: "HP",
        statValue: +100,
        src: "potionRed.png",
        price: 300
    },
    {
        title: "Shield",
        statType: "DEF",
        statValue: +20,
        src: "shieldSmall.png",
        price: 250
    },
    {
        title: "Tome",
        statType: "INT",
        statValue: +25,
        src: "tome.png",
        price: 850
    },
    {
        title: "Bow",
        statType: "ATK",
        statValue: +20,
        src: "bow.png",
        price: 850
    },
    {
        title: "Big Axe",
        statType: "ATK",
        statValue: +30,
        src: "axeDouble.png",
        price: 950
    },
    {
        title: "B. Shield",
        statType: "DEF",
        statValue: +45,
        src: "shield.png",
        price: 950
    },


]
onMounted(() => {
    trigger.value = true

})
useHead({
    title: "The Shop"
})
</script>
<style scoped></style>