import App from "./App.vue";
import "normalize.css";
import "./router-control";
/**
 * 暗黑模式
 **/
import "@/assets/styles/index.scss";

/**
 * 初始化系统
 * */
import initSys from "@/utils/init-sys";

const app = createApp(App);

initSys(app);
