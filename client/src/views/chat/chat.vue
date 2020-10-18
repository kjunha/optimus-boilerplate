<template>
    <div class="chat mx-5 mt-3">
        <div class="chat-view card d-flex flex-column overflow-auto" ref="chatbox">
            <div class="mx-3" v-for="(chat, index) in this.msgStack" v-bind:key="index">
                <div v-bind:class="id == chat.sender?'text-right':'text-left'">
                    <p>
                        {{ chat.sender }}: <br/>
                        &nbsp;&nbsp;{{ chat.message }} <br/>
                        <span class="timestamp">{{ chat.created_at }}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="input-group mt-2">
            <input type="text" class="form-control" placeholder="Your message" v-model="message" @keyup.enter="sendMessage()">
            <div class="input-group-append">
                <button class="btn btn-primary" type="button" v-on:click="sendMessage()">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'
export default {
    data: () => {
        return {
            baseUrl: 'http://localhost:3000/chats',
            message: '',
            msgStack: [],
            id: '',
        }
    },
    methods: {
        sendMessage: function() {
            if(this.message.length > 0) {
                this.socket.emit('sendMessage', {sender: this.id, index: this.index, message: this.message})
                this.message = ''
            }
        },
    },
    created() {
        this.socket = io(this.baseUrl)
        this.socket.emit('join')
        this.socket.on('welcome', (data) => {
            this.id = data.client_id
            this.index = data.index
        })
        this.socket.on('getMessage', (data) => {
            this.msgStack.push(data.messages[0])
        })
    },
    updated() {
        var elem = this.$refs.chatbox
        elem.scrollTop = elem.clientHeight;
    }
}
</script>

<style>
.chat-view {
    height: 67vh;
    overflow-y: scroll;
}
.timestamp {
    font-size: 8pt;
}
</style>

