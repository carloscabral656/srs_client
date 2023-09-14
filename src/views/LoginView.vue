<template>
    <div class="login-card">
        <!-- Login Inputs -->
        <div class="user-information">
            <form action="">
                <input type="text" class="" name="user_name" v-model="this.user.userName">
                <input type="password" class="" name="user_password" v-model="this.user.userPassword">
                <button type="submit">LOGIN</button>
            </form>  
        </div>
        
        <!-- Login Image -->
        <div class="image">
            <img src="">  
        </div>
    </div>
</template>

<style>
.login-card{
    width: 90%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    justify-content: center;
    align-content: center;
    background-color: red;
}

.user-information{

}
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