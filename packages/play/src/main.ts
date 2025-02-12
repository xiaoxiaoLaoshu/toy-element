import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ToyElement from "toy-element";

import "@toy-element/theme";
const app = createApp(App);
app.use(ToyElement);
app.mount("#app");
