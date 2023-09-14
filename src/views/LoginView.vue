<template>
    <div class="login-card">
        <!-- Login Inputs -->
        <main class="user-information">
            <h1 class="title-information">Information</h1>
            <input type="text" class="input-information" name="user-name" v-model="this.user.userName">
            <input type="password" class="input-information" name="user-password" v-model="this.user.userPassword">
            <button type="submit" class="input-information">LOGIN</button>
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
    align-content: center;
    justify-content: center;
    background-color: #00AEF7;
}

.input-information{
    display: block;
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
    data(){
        return {
            user: {
                userName: null,
                userPassword: null
            }
        }
    }
}
</script>