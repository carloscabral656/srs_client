<template>
    <div class="login-card"><!-- Login Image -->
        <aside class="aside-information">
            <div class="aside-information-container">
                <h3 class="title-aside-information">Lorem</h3>
                <p class="paragraph-aside-information">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe placeat maxime debitis ipsa quaerat enim quod perspiciatis itaque obcaecati tempore harum voluptatem nulla similique odio quae, quibusdam doloremque unde error!</p>  
            </div>
        </aside>
        <!-- Login Inputs -->
        <main class="user-information">
            <div class="user-information-input-container">
                <h2 class="title-information">Hello, <span class="part-of-the-day">Good {{ this.partOfTheDay }}</span>!</h2>
                <h1 class="title-login">Login</h1>

                <label>Username</label>
                <div class="container-input-login">
                    <font-awesome-icon icon="user"/>
                    <input type="text" class="input-login" name="user-name" v-model="user.name"/>
                </div>

                <label>Password</label>
                <div class="container-input-login">
                    <font-awesome-icon icon="fa-key"/>
                    <input type="password" class="input-login" name="user-password" v-model="user.password"/>
                </div>
                
                <a href="#" class="link link-forgot-password">Forgot password?</a>
                <button @click="login" class="btn-login">Login</button>
                <a href="#" class="link link-create-account">Create Account</a>
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
    .aside-information-container{
        box-sizing: border-box;
        padding: 100px;
        color: #fff;
        background-image: no-repeat center/cover url('../assets/imgs/mountains_purple.webp');
        z-index: 1;
    }

        .title-aside-information{
            text-transform: capitalize;
            font-size: 3rem;
        }

        .paragraph-aside-information{
            font-size: 1.8rem;
            text-align: justify;
        }





.user-information{
    background-color: #fff;
    grid-column: 3/4;
    padding: 25px;
    border-radius: 0 20px 20px 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

    .title-information{
        width: 100%;
    }

    .part-of-the-day{
        color: #784fff;
    }

    .user-information-input-container{
        width: 75%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

        .title-login{
            text-align: center;
            font-size: 2rem;
        }

        .container-input-login {
            margin-bottom: 50px;
            border-bottom: 1px solid black;
        }

        .input-login{
            border: 0;
            padding: 1rem;
            outline: none;
        }

        .btn-login{
            padding: 1rem;
            background-color: #7F62E0;
            cursor: pointer;
            color: #fff;
            font-size: 1.2rem;
            border-radius: 10px;
            margin-bottom: 20px;
            border: 0;
        }

        .link{
            text-decoration: none;
            font-weight: 500;
            color: #7F62E0;
        }

        .link:hover{
            text-decoration: underline;
        }

        .link-create-account{
            text-align: right;
            margin-bottom: 20px;
        }

        .link-forgot-password{
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
    computed: {
        partOfTheDay(){
            let hour = new Date().getHours();
           if(hour >= 2 && hour <= 12){
                return 'Morning'
            } else if (hour >= 13 && hour <= 18){
                return 'Afternoon'
            } else if (hour >= 19 && hour <= 22){
                return 'Evening'
            } else {
                return 'Night'
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