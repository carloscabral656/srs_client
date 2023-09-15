<template>
    <label for={{idInput}}>{{labelName}}</label>
    <input id={{idInput}} type={{inputType}} name={{inputName}} class={{inputClass}} />
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