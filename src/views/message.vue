<template lang="pug">
.message
    .message-profile
        img(:src="user.avatar" alt="user.name")
        .name {{ user.name }}
    .message-content {{ message }}
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    }
}
</script>
<style lang="stylus">
    .message
        margin: 5px 0 5px 0
        display: flex
        width: 100%
        height: auto
        border-radius: 5px
        align-items: flex-start
        flex-direction: row
        box-sizing: border-box
        padding: 5px 30px 5px 5px
        &:hover
            background: lighten(rgba(0,0,0,.2), 20%)
            transition: .25s all
    .message-profile        
        flex: 0 1 auto
        img 
            width: 50px
            height: 50px
            border: 1px solid #888
            border-radius: 50px
        .name
            display: inline-block
            margin: 0 10px 0 10px
            font-size: 16px
            font-weight: 100
            color: #666
    .message-content
        flex: 1 1 auto        
</style>