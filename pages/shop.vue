<template>
    <div class="row justify-content-center">
        <div class="text-start px-4 special mb-5 fs-2 text-info">
            The Shop
        </div>
        <div class=" row">
            <div v-for="item in items" class="col-sm-6">
                <Item :title="item.title" :stat-type="item.statType" :stat-value="item.statValue" :price="item.price"
                    :src="item.src" />

            </div>


            <!-- <Item title="Hammer" src="hammer.png" :price="300" />
        <Item title="Hammer" src="hammer.png" :price="300" />
        <Item title="Hammer" src="hammer.png" :price="300" /> -->


        </div>
    </div>
</template>

<script setup lang="ts">
const items: Array<{ title: string, statType: string, statValue: number, src: string, price: number }> = [
    {
        title: "Hammer",
        statType: "ATK",
        statValue: -10,
        src: "hammer.png",
        price: 100
    },
    {
        title: "Sword",
        statType: "ATK",
        statValue: +15,
        src: "sword.png",
        price: 250
    },

]
</script>
<style scoped></style>