const app = {
  data() {
    return {
      todoArr: [
        { item: "Vue", isComplete: false },
        { item: "React", isComplete: true },
        { item: "Nuxt", isComplete: false },
        { item: "NextJS", isComplete: false },
        { item: "Node", isComplete: false },
        { item: "NestJS", isComplete: false },
        { item: "React Native", isComplete: false },
        { item: "Electron", isComplete: false },
        { item: "Rust", isComplete: false },
      ],
      curTodo: "",
    };
  },

  methods: {
    addTodo() {
      if (!this.curTodo.trim().length) {
        alert("The input is empty");
        return;
      }

      this.todoArr.push({ item: this.curTodo, isComplete: false });
      this.curTodo = "";
    },

    removeTodo(removeTodo) {
      this.todoArr = this.todoArr.filter((todo) => todo !== removeTodo);
    },

    completeItem(item) {
      const index = this.todoArr.findIndex((todo) => todo.item === item);
      this.todoArr[index] = { ...this.todoArr[index], isComplete: true };
    },
  },
};

Vue.createApp(app).mount("#app");
