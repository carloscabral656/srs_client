<template>
    <section class="section-container">
        <div v-if="this.firstColumn" id="first-column" class="column">
            <h3 class="title">{{ this.firstColumn.title }}</h3>
            <p class="content">{{ this.firstColumn.content }}</p>        
        </div>
        <div v-if="this.secondColumn" id="second-column" class="column">
            <h3 class="title">{{ this.secondColumn.title}}</h3>
            <p class="content">{{ this.secondColumn.content }}</p>             
        </div>
    </section>
</template>

<style scoped>
.section-container{
    width: 100%;
    height: 50vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
}

#first-column{
    grid-column: 1/2;
}

#second-column{
    grid-column: 2/3; 
}

.title{
    padding: 10px 100px;
    font-size: 3rem;
}

.content{
    padding: 10px 100px;
    font-size: 1.5rem;
    text-align: justify;
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