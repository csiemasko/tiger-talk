<template lang="pug">
transition(name="modal-trans")
    .modal(v-if="!closed")
        transition(name="dialog-trans")
            .dialog
                .dialog-header {{ header}}
                    .close-button
                        i.fa.fa-times-circle-o(@click="close")        
                .dialog-body
                    slot       
</template>
<script>
export default {
    props: {
        header: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            closed: false
        }
    },
    methods: {
        close() {           
            this.closed = true;        
        }
    }
}
</script>
<style lang="stylus">
.modal    
    z-index: 100
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    opacity: 1
    background: rgba(0,0,0,.5)
    margin: 0 auto
    vertical-align: middle
    text-align: center
    align-content: center
.dialog        
    margin: 0 auto
    margin-top: 100px;    
    box-sizing: border-box
    background: #fff
    max-width: 75%
    border-radius: 20px
    box-shadow: 0 0 30px rgba(0,0,0,.5)
    position: relative
    transform: scale(1)
    display: flex
    align-items: flex-start
    flex-direction: column
    .dialog-header
        box-sizing: border-box
        flex: 0 1 auto        
        top: 0
        width: 100%
        padding: 5px
        text-align: center
        color: #fff
        background: #000
        font-weight: 100
        font-size: 16px
        .fa.fa-times-circle-o
            float: right
            color: #ff0
    .dialog-body
        flex: 1 1 auto
        margin: 20px
.modal-trans-enter, .modal-trans-leave-to
    opacity: 0
.modal-trans-enter-active, .modal-trans-leave-active
    transition: opacity .3s
.dialog-trans-enter, .dialog-trans-leave-to
    transform: scale(.1)
.dialog-trans-enter-active, .dialog-trans-leave-active
    transition: transform .3s
</style>