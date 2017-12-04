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
            input(type="button" @click="login" :value="ui.newUser ? 'Create & Sign In' : 'Sign In'")
            .g-signin2(data-onsuccess='googleSignIn')
            input(v-show="!ui.newUser" type="button" @click='ui.newUser = true' value="Create Account")
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
    #toast(v-if="ui.toastVisible") {{ ui.toastMessage }}
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
            axios.post('/login', { name: this.session.userLogin, pass: this.session.userPass }).then(r => {
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
                this.messages.push({user: m.user, message: m.text, timestamp: m.timestamp });
            });
            window.socket.on('+users', u => {
                this.messages.push({type: 'system', message: `${u.name} has connected`});
                this.users = u.list;
            });
            window.socket.on('-users', u => {
                this.messages.push({type: 'system', message: `${u.name} has left`});
                this.users = u.list;
            });

        },
        googleSignIn(gUser) {
            var profile = gUser.getBasicProfile();
            alert(`ID: ${profile.getId()} -- Name: ${profile.getName()}`);
        },
        postMessage() {           
            window.socket.emit('message', { text: this.entryBox, userId: this.session.currentUser.uid });
        },
        authenticate() {

        }
    },
    mounted() {             
       
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
.modal-label
    display: inline-block
    font-size: 9px
    margin-right: 10px
    vertical-align: middle
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
@keyframes toast-show
    from
        opacity: 0
        margin-top: 30px
    to
        opacity: 1
        margin-top: 0
#toast
    display: none
    animation: toast-show 1s ease-in-out
    padding: 10px 30px 10px 30px
    background: $tu-yellow
    color: #000
    position: absolute
    bottom: 0
    text-align: center
    height: 30px
    transition: 1s all    
</style>

