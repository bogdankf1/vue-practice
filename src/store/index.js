import { createStore } from "vuex";
import { todolistModule } from "../modules";

const store = createStore({
  modules: {
    todolist: todolistModule,
  },
});

export default store;
