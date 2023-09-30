<template>
    <section class="section-container">
        <div v-if="this.firstColumn" id="first-column" class="column">
            <h3>{{ this.firstColumn.title }}</h3>
            <p>{{ this.firstColumn.content }}</p>        
        </div>
        <div v-if="this.secondColumn" id="second-column" class="column">
            <h3>{{ this.secondColumn.title}}</h3>
            <p>{{ this.secondColumn.content }}</p>             
        </div>
    </section>
</template>

<style>
.section-container{
    width: 100%;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 2rem;
}

#first-column{
    grid-column: 1/2;
}

#second-column{
    grid-column: 2/3; 
}

.column{

}
</style>


<script>
export default {
    name: "SectionComponent",
    props: {
        firstColumn: Object,
        secondColumn: Object
    },
    data(){
        return {

        }
    }
}
</script>