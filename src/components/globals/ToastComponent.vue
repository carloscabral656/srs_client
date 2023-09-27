<template>
    <div>
        {{ msg }}
    </div>
</template>


<style>
</style>


<script>
export default {
    name: 'ToastComponent',
    props: {
        msg: String
    },
    data(){
        return {

        }
    }
}
</script>