<template>
    <div id="menu-container">
        <div id="project-image">Project's Image</div>
        <input type="text" id="search-input" placeholder="Search anyting here ...">
        <div id="create-container">
            <ButtonComponent
                color="white"
                backgroundColor="#784fff" 
                size="small" 
                shape="circle" 
                isIcon/>
        </div>
        <div id="login-page">
            <ButtonComponent 
                color="#586380" 
                size="small" 
                shape="rounded" 
                content="Login"/>
        </div>
        <div id="create-account-page">
            <ButtonComponent 
                color="#586380" 
                backgroundColor="#ffcd1f" 
                size="small" 
                shape="rounded" 
                content="Create Account"/>
        </div>
    </div>
</template>

<style>
#menu-container{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 1fr;
    align-items: center;
    height: 10vh;
    padding: 0 3rem;
}

#project-image{
    grid-column: 1/3;
    justify-content: start;
}

#search-input{
    grid-column: 3/7;
    justify-self: stretch;
    border-radius: 50px;
    padding: 1rem;
}

#create-container{
    grid-column: 9/10;
    justify-self: end;
}
    

#login-page{
    grid-column: 10/12;
}

#create-account-page{
    grid-column: 12/13;
}
</style>


<script>
import ButtonComponent from "@/components/globals/ButtonComponent.vue"

export default {
    name: "MenuComponent",
    components: {
        ButtonComponent
    },
    data() {
        return {

        }
    }
}
</script>