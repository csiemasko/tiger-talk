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
    margin: 5px 0 5px 0
    background: #000
    height: 40px
    padding: 5px
.avatar-frame
    display: inline
    width: 40px   
    border-radius: 30px
    background: #fff
    border: 1px solid #000
    padding: 2px
    img 
        width: 25px
        height: 25px
        vertical-align: middle
        border-radius: 40px
.name
    font-size: 20px
    font-weight: 100
    margin-left: 20px
    color: #fff
</style>