<template>
    <div>
        {{ msg }}
    </div>
</template>


<style>
</style>


<script>
export default {
    name: 'Toast',
    props: {
        msg: String
    },
    data(){
        return {

        }
    }
}
</script>