// ["Vue", "React", "Nuxt", "NextJS", "Node", "NestJS", "React Native", "Electron", "Rust"]

const app = {
  data() {
    return {
      todoArr: [
        "Vue",
        "React",
        "Nuxt",
        "NextJS",
        "Node",
        "NestJS",
        "React Native",
        "Electron",
        "Rust",
      ],
      curTodo: "",
    };
  },

  methods: {
    addTodo() {
      // 不要将空字符串添加到数组中
      if (!this.curTodo.trim().length) {
        alert("The input is empty");
        return;
      }

      this.todoArr.push(this.curTodo);
      this.curTodo = ""; // 完成后 置空
    },

    removeTodo(removeTodo) {
      this.todoArr = this.todoArr.filter((todo) => todo !== removeTodo);
    },
  },
};

Vue.createApp(app).mount("#app");
