import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk//index.css'
// 引入v-md
// import VMdEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';
// import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
// import '@kangc/v-md-editor/lib/theme/style/github.css';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 引入你所使用的主题 此处以 github 主题为例
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
//highlightjs
import hljs from 'highlight.js';

Vue.config.productionTip = false
Vue.use(ElementUI)

//  使用v-md,主题
// VMdEditor.use(githubTheme, {
//   Hljs: hljs,
// });
// Vue.use(VMdEditor);
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});
Vue.use(VMdPreview);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
