import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { svgSpritePlugin } from 'vue-svg-sprite'
import VueSocketIO from 'vue-socket.io'
import io from 'socket.io-client';
import Vue3TouchEvents from "vue3-touch-events";

const socketPlugin = new VueSocketIO({
    debug: false,
    connection: io('https://express-socket-io-start-project.maksslyzar.repl.co', {
        withCredentials: false,
        autoConnect: true
    }),
		vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
});
// fix bug https://github.com/MetinSeylan/Vue-Socket.io/issues/282
socketPlugin.install = (function (app) {
    // @ts-ignore
    app.config.globalProperties.$socket = this.io;
    // @ts-ignore
    app.provide('socket', this.io);
    // @ts-ignore
    app.config.globalProperties.$vueSocketIo = this
}).bind(socketPlugin);


createApp(App)
	.use(store)
	.use(Vue3TouchEvents)
	.use(socketPlugin)
	.use(svgSpritePlugin, {
		url: require('/src/assets/sprite.svg')})
	.use(router)
	.mount('#app')
