<template>
    <div class="text-warning" v-for="item in items">
        {{ item.name }}
        {{ item.price }}
        {{ item.quantity }}

    </div>
</template>

<script lang="ts" setup>
import Item from '~~/interfaces/Item';

let cart = useCart()

let items: Item[] = cart.storeState.items
</script>