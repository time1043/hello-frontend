import { createApp } from "vue";
import { YkMessage, YkNotification } from "@yike-design/ui";
import Icon from "@yike-design/ui/es/components/svg-icon";
import App from "./App.vue";
import router from "./router";
import "@yike-design/ui/es/index.less";
import "./style.less";

const app = createApp(App);
app.config.globalProperties.$notification = YkNotification;
app.config.globalProperties.$message = YkMessage;

app.use(router).use(Icon).mount("#app");
