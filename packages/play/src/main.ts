import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ToyElement from "toy-element";

import "@toy-element/theme";
createApp(App).use(ToyElement).mount("#app");
