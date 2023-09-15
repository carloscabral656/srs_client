<template>
    <label for="">{{labelName}}asdasd</label>
    <input type={{inputType}} name={{inputName}} class={{inputClass}}/>
</template>

<style></style>

<script>
export default{
    name: 'InputComponent',
    props: {
        labelName: String,
        inputType: String,
        inputClass: String,
        inputName: String
    }
}
</script>