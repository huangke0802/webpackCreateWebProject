//这里的index.js使我们真正的入口文件
import Vue from "vue"
import App from "./App.vue"
import "./assets/styles/text-stylus.styl";
import "./assets/styles/global.css"
//创建一个节点
const root = document.createElement("div");
//插入到body里面
document.body.appendChild(root);

new Vue({
    render : (h) => h(App) //创建App内容的方法
}).$mount(root);