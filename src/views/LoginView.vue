<template>
    <div class="login-card">
        <!-- Login Inputs -->
        <main class="user-information">
            <h1 class="title-information">Information</h1>
            <label>Username</label>
            <input type="text" name="user-name" v-model="user.name"/>

            <label>Password</label>
            <input type="password" class="n" name="user-password" v-model="user.password"/>

            <button @click="login" class="">Login</button>
        </main>
        
        <!-- Login Image -->
        <aside class="aside-information">
            <img src="">  
        </aside>
    </div>
</template>

<style>

.login-card{
    width: 70%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    justify-content: center;
    align-content: center;
    background-color: red;
}

/*=====================================================*/
.user-information{
    grid-column: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: #00AEF7;
}
/*=====================================================*/

/*=====================================================*/
.aside-information{
    grid-column: 2;
}
/*=====================================================*/
</style>

<script>

export default {
    name: "LoginView",
    components:{

    },
    data(){
        return {
            user: {
                name: null,
                password: null
            }
        }
    },
    methods: {
        login(){
            alert("asdasdasd")
        }
    }
}
</script>