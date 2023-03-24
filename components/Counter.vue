<template>
    <div>
        <p>Count: {{ store.storeState.count }}</p>
        <button @click="action()">Increment</button>
    </div>
</template>
  
<script setup>
let store = useCount()
function action() {
    store.increment()
}


</script>