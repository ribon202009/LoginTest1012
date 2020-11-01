import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify' <script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>;

Vue.config.productionTip = false

new Vue({
  // vuetify,
  render: h => h(App)
}).$mount('#app')

// 全ページに反映させたいJavaScriptコードを書くためのファイル

// ❶、❷どちらかでOK

//❶
// new Vue({ 
//   components: { App },
//   template: '<App/>'
// })


//❷だいたいこれで書く 
// new Vue({
//   render: h => h(App)
// }).$mount('#app')

// .$mount('#app')で#app要素に
// コンポーネントを乗せる＝上書きするように設定

// render: h => h(App)とは、
// render: function(createElement){
//   return createElement(App)
// }  の略 (App)が引数