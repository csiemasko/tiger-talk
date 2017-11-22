<template lang="pug">
.user-frame
    .avatar-frame
        img(:src="user.avatar" :alt="user.name")
    span.name {{ user.name }}
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="stylus">
.user-frame
    width: 100%
    margin: 5px 0 5px 0
    background: #000
    height: 50px
    padding: 5px
.avatar-frame
    width: 40px
    height: 40px
    border-radius: 30px
    background: #fff
    border: 1px solid #000
    img 
        width: 25px
        height: 25px
.name
    font-size: 20px
    font-weight: 100
    color: #fff
</style>