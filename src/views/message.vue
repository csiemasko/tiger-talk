<template lang="pug">
.message
    .message-profile(v-if="message.type != 'system'")
        img(:src="user.avatar" alt="user.name")
        .info-frame
            .name {{ user.name }}
            .timestamp {{ `@${'Now'}` }}
    .message-frame
        .message-content(:class="{system_message: message.type == 'system'}") {{ message.text }}
</template>
<script>
export default {
    props: {
        user: {
            type: Object,
            required: false
        },
        message: {
            type: Object,
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
            width: 30px
            height: 30px
            border: 1px solid #888
            border-radius: 30px
        .info-frame
            display: inline-block
            .name, .timestamp
                display: block
                margin: 0 10px 0 10px
                font-size: 12px
                font-weight: 100
                color: #666  
            .timestamp
                font-style: italic
        .message-frame
        flex: 1 1 auto
        font-size: 12px      
        padding: 2px
        box-sizing: border-box  
        .message-content
            vertical-align: middle
        .system_message
            vertical-align: middle
            color: #999       
</style>