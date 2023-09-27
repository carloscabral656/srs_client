<template>
    <div class="login-card"><!-- Login Image -->
        <aside class="aside-information">
            <img src="">  
        </aside>
        <!-- Login Inputs -->
        <main class="user-information">
            <h1 class="title-information">Some Text</h1>

            <div class="user-information-input-container">
                <h1 class="title-login">Login</h1>

                <label>Username</label>
                <input type="text" class="input-login" name="user-name" v-model="user.name"/>

                <label>Password</label>
                <input type="password" class="input-login" name="user-password" v-model="user.password"/>
                
                <a href="#" class="link-forgot-password">Forgot password?</a>
                <button @click="login" class="btn-login">Login</button>
                <a href="#" class="link-create-account">Create Account</a>
            </div>
        </main>
    </div>
</template>

<style>

body{
    background-color: #b19aff;
}

.login-card{
    width: 80%;
    height: 85%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    border-radius: 20px;
    -webkit-box-shadow: -20px 22px 23px -23px rgba(0,0,0,0.83);
    -moz-box-shadow: -20px 22px 23px -23px rgba(0,0,0,0.83);
    box-shadow: -20px 22px 23px -23px rgba(0,0,0,0.83);
}

.aside-information{
    background-color: #7F62E0;
    grid-column: 1/3;
    border-radius: 20px 0 0 20px ;
}

.user-information{
    background-color: #fff;
    grid-column: 3/4;
    padding: 50px;
    border-radius: 0 20px 20px 0;
}

    .title-information{
        width: 100%;
    }

    .user-information-input-container{
        display: flex;
        flex-direction: column;
    }

        .title-login{
            text-align: center;
            font-size: 2rem;
        }

        .input-login{
            margin-bottom: 20px;
            border: 0;
            padding: 1rem;
            border-bottom: 1px solid black;
            outline: none;
        }

        .link-forgot-password{
            text-align: right;
            margin-bottom: 20px;
        }

        .btn-login{
            padding: 1rem;
            background-color: #7F62E0;
            color: #fff;
            font-size: 1.2rem;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 0;
        }

        .link-create-account{
            text-align: right;
            margin-bottom: 20px;
        }


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
        },
        validate(){
            
        }
    }
}
</script>