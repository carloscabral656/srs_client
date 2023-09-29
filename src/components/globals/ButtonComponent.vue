<template>
    <div 
        id="button"
        :class="[
            !this.size  ? 'small'  : this.size,
            !this.shape ? 'circle' : this.shape
        ]" 
        :style="style"
    >
        <span v-if="this.isIcon">
            <font-awesome-icon icon="fa-solid fa-plus"/>
        </span>
        <span v-else>
            <p>{{ this.content }}</p>
        </span>
    </div>
</template>


<style>
    #button{
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .small{
        
    }

    .rounded{
        border-radius: 10px;
    }

    .circle{
        height: 50px;
        width: 50px;
        border-radius: 50%;
    }

    .medium{
        font-size: 1rem;
    }
</style>


<script>
export default {
    name: "ButtonComponent",
    props: {
        size : String,
        shape: String,
        color: String,
        backgroundColor: String,
        isIcon: Boolean,
        content: String
    },
    computed: {
        style(){
            let style = '';
            style += this.backgroundColor ? 
                        'background-color: ' + this.backgroundColor + ';' : 
                        'background-color: white;'
            console.log(style)
            style += this.color ? 
                        'color: ' + this.color + ';' : 
                        'color: white;'

            return style
        }
    },
    data(){
        return {
             
        }
    }
}
</script>