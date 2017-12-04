<template lang="pug">
.app
    .login(v-if="!loggedIn")
        modal(header="Testing")
            input(v-model="session.userLogin")
            input(type="button" @click="login")
            .g-signin2(:data-onsuccess='googleSignIn')
    .header
        transition(name="head-trans")
            h1 {{ ui.title }}
    .chat
        .room
            message(v-for="m in messages" :user="m.user" :message="m.message")
        .entry
            input(v-model="entryBox" @keyup.enter="postMessage")
            i.fa.fa-user
    .userlist
        user(v-for="u in users" :user="u")    
</template>
<script>
var message = require('./message.vue');
var user    = require('./user.vue');
var modal   = require('./modal.vue');
var debugUser = { avatar: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7515761/doc_glasses_2.jpg', name: 'Doc' };
export default { 
    components: { message, user, modal }, 
    data () {
        return {
            uid: null,
            session: {
                userLogin: null
            },
            loggedIn: false,
            ui: {
                title: 'Tiger Talk'
            },
            entryBox: '',            
            messages: [
                { user: debugUser, message: 'Hello World!' },
                { user: debugUser, message: 'Hello World!' },
                { user: debugUser, message: 'Hello World!' }
            ],           
            users: [
                debugUser
            ]
        }
    },
    methods: {
        getSession() {
            return document.cookie ? document.cookie : null;
        },
        login() {
            var axios = require('axios');
            axios.post('/create', { name: this.session.userLogin }).then(r => {
                alert('return from server');
            });
        },
        googleSignIn(gUser) {
            var profile = gUser.getBasicProfile();
            alert(`ID: ${profile.getId()} -- Name: ${profile.getName()}`);
        },
        postMessage() {
            console.log('posting to server');
            window.socket.emit('message', { text: this.entryBox, userId: this.uid });
        }
    },
    mounted() {
        var userId = this.getSession();
        if (userId != null) {            
             this.uid = userId.split('=')[1];

        }
        else {            
            var uuid = require('uuid/v4')();
            this.uid = uuid;
            document.cookie = `userId=${uuid}`;
        }        
        window.socket = io('http://localhost:7331', { query: `uid=${this.uid}` });
        window.socket.on('<<msg', m => {
            this.messages.push({user: m.user, message: m.text });
        });
    }
}
</script>
<style lang="stylus">
$tu-yellow = #FFCC00
.app
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    align-items: flex-start
    margin: 0   
.header
    background: $tu-yellow
    height: 33%
    width: 100%
    position: fixed
    h1
        margin-left: 50px
        opacity: 1
        font-weight: 100
        font-family: 'Oswald'
        font-size: 36px
.chat
    display: flex
    margin-left: 10px
    flex-direction: column
    flex: 1 1 auto
    z-index: 2
    height: 100%
    border-radius: 2px;
    .room
        padding: 10px
        border: 1px solid #444
        margin-top: 100px
        background: #fff
        border: 1px solid #999
        box-shadow: 0 0 20px rgba(0,0,0,.3) 
        flex: 1 1 auto
    .entry
        flex: 0 1 auto
        margin-top: 10px
        width: 100%
        height: 40px
        box-sizing: border-box
        padding: 3px
        input 
            width: 100%
            height: 100%
            border: 1px solid #999
            font-size: 24px
            padding: 10px
            border-radius: 5px
            box-sizing: border-box
        .fa-paper-plane
            margin-left: -30px
            color: #333
.userlist
    margin: 100px 10px 0px 10px
    width: 200px    
    padding: 5px
    background: #333
    flex: 0 1 auto
    z-index: 2
    transition: .25s all
    box-sizing: border-box
.head-trans-enter-active, .head-trans-leave-active
    transition: margin .5s, opacity .5s
.head-trans-enter, .head-trans-leave-top
    margin-left: 0
    opacity: 0
</style>

