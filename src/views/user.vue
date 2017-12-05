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
$tu-yellow = #FFCC00
.user-frame    
    margin: 5px 0 5px 0
    background: #000
    height: 35px
    padding: 5px
.avatar-frame
    display: inline
    width: 30px   
    height: 30px  
    img 
        width: 30px
        height: 30px
        vertical-align: middle
        border-radius: 40px
        box-shadow: 0 0 10px rgba(255,255,255,.4)
.name
    font-size: 14px
    font-weight: 100
    margin-left: 20px
    color: #fff
</style>