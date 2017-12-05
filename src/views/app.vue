<template lang="pug">
.app
    .login(v-if="!session.loggedIn")
        modal(header="Log In to Tiger Talk")
            .modal-label User Name
            input(v-model="session.userLogin" placeholder="Username")  
            .modal-label Password          
            input(v-model="session.userPass" type="password" placeholder="Password")
            .modal-label(v-show="ui.newUser") Verify Password          
            input(v-show="ui.newUser" v-model="session.userPassVerify" type="password" placeholder="Verify Password")
            .login-button(@click="login")
                i.fa.fa-sign-in
                | {{ ui.newUser ? 'Create + Sign In' : 'Sign In' }}
            gbutton(@glogin="googleSignIn($event)")               
            .login-button(v-show="!ui.newUser" @click='ui.newUser = true' value="Create Account")
                i.fa.fa-plus
                | Create Account
    transition(name="header-enter")
        .header(v-show="session.loggedIn")
            h1 {{ ui.title }}
            a(href='https://github.com/csiemasko/tiger-talk' target='_blank')
                i.fa.fa-github
    transition(name="chat-enter")
        .chat(v-show="session.loggedIn" key=1)
            .room
                transition-group(name="show-message")
                    message(v-for="m,i in messages" :key="i" :user="m.user" :message="m.message")
            .entry
                input(v-model="entryBox" @keyup.enter="postMessage" placeholder='Start Typing...')
                i.fa.fa-paper-plane
    transition(name='users-enter')
        .userlist(v-show="session.loggedIn")
            user(v-for="u in users" :user="u")        
    #toast(v-show="ui.toastVisible") {{ ui.toastMessage }}
</template>
<script>
var message = require('./message.vue');
var user    = require('./user.vue');
var modal   = require('./modal.vue');
var gbutton = require('./gsignin.vue');
var debugUser = { avatar: 'https://cdn.vox-cdn.com/uploads/chorus_asset/file/7515761/doc_glasses_2.jpg', name: 'Doc' };
export default { 
    components: { message, user, modal, gbutton }, 
    data () {
        return {
            uid: null,
            session: {
                currentUser: {},
                userLogin: null,
                userPass: null,
                userPassVerify: null,
                loggedIn: false,
                userAvatar: ''
            },            
            ui: {
                newUser: false,
                title: 'Tiger Talk',
                toastMessage: '',
                toastVisible: false
            },
            entryBox: '',            
            messages: [            
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
        googleSignIn(e) {
            console.log('final user?---');
            console.log(e);
            this.session.loggedIn = true;
            this.session.currentUser = e;
            this.connect(this.session.currentUser);
            this.toast(`Signed in as ${e.name} on Google`);
        },
        toast(message) {
            this.ui.toastMessage = message;
            this.ui.toastVisible = true;
            setTimeout(() => {
                this.ui.toastVisible = false;
            }, 5000);
        },
        login() {//Redirect to create if create is active
            if (this.ui.newUser) {
                this.createUser();
                return;
            } else {
                var axios = require('axios');
            axios.post('/login', {type: 'tt', name: this.session.userLogin, pass: this.session.userPass }).then(r => {
                console.log(r);
                if (r != null) {//User login success, return user object
                    if (r.data.result == 'success') {
                        this.session.loggedIn = true;
                        this.session.currentUser = r.data.user;
                        this.connect(r.data.user);//Connect to socket, valid login                        
                    } else if (r.result == 'fail') {
                        this.toast(r.data.message);//Make pretty later
                    }                   
                }
            });
            }  
        },
        createUser() {
            if (this.session.userPass != this.session.userPassVerify) {
                this.toast('Passwords do not match!');
                this.session.userPass = '';
                this.session.userPassVerify = '';
            } else {
                var axios = require('axios');
                axios.post('/create', { name: this.session.userLogin, pass: this.session.userPass }).then(r => {
                    console.log(r);
                if (r.data != null) {//User login success, return user object            
                    if (r.data.result == 'success') {
                         this.session.loggedIn = true;
                         this.session.currentUser = r.data.user;
                         this.connect(this.session.currentUser);
                    } else if (r.data.result == 'fail') {
                        this.toast(r.data.message);                      
                    }                   
                } else {
                    console.log('User creation failed');
                    this.toast('User creation failed');
                }
            });
            }            
        },
        connect(validUser) {
            window.socket = io('http://localhost:7331', { query: `uid=${validUser._id}` });
            window.socket.on('<<msg', m => {
                console.log('message~~');
                console.log(m);
                this.messages.push({user: m.user, message: m.message });
            });
            window.socket.on('+users', u => {
                this.messages.push({type: 'system', message: {type: 'system', text: `${u.name} has connected`, timestamp: new Date()}});
                this.users = u.list;
            });
            window.socket.on('-users', u => {
                this.messages.push({type: 'system', message: {type: 'system', text: `${u.name} has left`, timestamp: new Date() }});
                this.users = u.list;
            });

        },        
        postMessage() {
            window.socket.emit('msg>>', { text: this.entryBox, _id: this.session.currentUser._id, type: 'user-message' });
            this.entryBox = '';
        },
        authenticate() {

        }
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
    opacity: 1
    margin-top: 0
    box-shadow: 0 10px 20px rgba(0,0,0,.4)
    a i.fa-github
        float: right
        top: 20
        right: 20
        position: absolute
        font-size: 36px
        transition: .3s all
        &:hover
            transform: scale(1.2)
            transition: .3s all
            text-shadow: 0 0 rgba(0,0,0,.3)
    h1
        margin-left: 50px
        opacity: 1
        font-weight: 100
        font-family: 'Oswald'
        font-size: 36px
.login modal input 
    padding: 5px
.modal-label
    display: inline-block
    font-size: 9px
    margin-right: 10px
    vertical-align: middle
.g-signin-button, .login-button
    width: 200px
    height: 30px
    font-size: 16px
    cursor: pointer
    display: block
    line-height: 30px
    font-weight: 100
    margin: 5px 0px 5px 0px
    border: 1px solid #888888
    background: $tu-yellow
    color: #000
    padding: 3px 0px 3px 0px
    transition: .25s all
    &:hover
        background: lighten($tu-yellow, 30%)
        transition: .25s all
        box-shadow: 0 0 10px rgba(0,0,0,.3)
        transform: scale(1.05)
    .fa
        float: left 
        margin: 10px 0px 0px 10px
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
        flex: 0 0 auto
        margin-top: 10px
        margin-bottom: 10px
        height: 50px
        width: 100%      
        padding: 3px
        input 
            width: 100%
            height: 100%
            border: 1px solid #999
            font-size: 30px
            padding: 20px
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
.show-message-enter-active, .show-message-leave-active
    transition: .5s all
.show-message-enter, .show-message-leave-to
    margin-left: -50px
    opacity: 0
.header-enter-enter-active, .header-enter-leave-active
    transition: 1s all
.header-enter-enter, .header-enter-leave-to
    margin-top: -200px
    opacity: 0
.chat-enter-enter-active, .chat-enter-leave-active
    transition: 1s all
.chat-enter-enter, .chat-enter-leave-to
    margin-top: 100%
.users-enter-enter-active, .users-enter-leave-active
    transition: 1s all
.users-enter-enter, .users-enter-leave-to
    margin-left: 400px
@keyframes toast-show {
   0% {
        opacity: 0;
        margin-top: 30px;
    }        
    25% {
        opacity: 1;
        margin-top: 0;
    }
    50% {
        opacity: 1;
        margin-top: 0;
    }        
    100% {
        opacity: 0;
        margin-top: 30px;
    }
}
    
#toast
    display: inline-block;
    animation: toast-show 1s ease-in-out
    padding: 10px 30px 10px 30px
    background: $tu-yellow
    color: #000
    position: absolute
    bottom: 0
    text-align: center
    height: 30px
    transition: 1s all        
    z-index: 101
    box-shadow: 0 0 20px rgba(0,0,0,.5)
</style>

