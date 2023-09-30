<template>
    <MenuComponent />

    <!-- Some text to describe the project -->
    <SectionComponent 
        :firstColumn="{
            title: 'Teste 1',
            content: 'teste content'
        }"
        :secondColumn="{
            title: 'Teste 2',
            content: 'teste content 2'
        }"
    />

</template>

<style>
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