<template>
    <MenuComponent />

    <!-- Some text to describe the project -->
    <SectionComponent 
        :firstColumn="{
            type: 'Text', 
            title: 'Dolor nulla occaecat sit cillum do tempor elit occaecat.',
            content: 'Lorem enim sint velit id in pariatur irure qui nisi nostrud ullamco anim. Veniam eiusmod elit ullamco nostrud cupidatat elit quis ex. Minim veniam irure sit anim qui occaecat et est exercitation eiusmod ut. Veniam elit et Lorem exercitation fugiat cillum exercitation sunt do mollit officia Lorem elit. Exercitation ut nostrud pariatur nostrud et sunt commodo. Laboris sint velit fugiat elit qui fugiat aliqua labore commodo commodo in. Consequat cupidatat occaecat do nulla reprehenderit ullamco minim quis. Quis cillum commodo irure veniam aliqua adipisicing ipsum qui nisi irure amet sit aliquip ipsum.'
        }"
        
        :secondColumn="{
            type: 'Text', 
            title: 'Dolor nulla occaecat sit cillum do tempor elit occaecat.',
            content: 'Lorem enim sint velit id in pariatur irure qui nisi nostrud ullamco anim. Veniam eiusmod elit ullamco nostrud cupidatat elit quis ex. Minim veniam irure sit anim qui occaecat et est exercitation eiusmod ut. Veniam elit et Lorem exercitation fugiat cillum exercitation sunt do mollit officia Lorem elit. Exercitation ut nostrud pariatur nostrud et sunt commodo. Laboris sint velit fugiat elit qui fugiat aliqua labore commodo commodo in. Consequat cupidatat occaecat do nulla reprehenderit ullamco minim quis. Quis cillum commodo irure veniam aliqua adipisicing ipsum qui nisi irure amet sit aliquip ipsum.'
        }"
    />

</template>

<style scoped>
</style>

<script>
import MenuComponent from "@/components/globals/MenuComponent.vue"
import SectionComponent from "@/components/globals/SectionComponent.vue"

export default {
    name: "IndexView",
    components: {
        MenuComponent,
        SectionComponent
    },
    data() {
        return {
        }
    }
}
</script>