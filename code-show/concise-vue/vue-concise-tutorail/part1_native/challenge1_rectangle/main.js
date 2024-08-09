// {
//   transform: `perspective(0px)rotateX(0deg)rotateY(0deg)rotateZ(0deg)`,
// }

const app = {
  data() {
    return {
      perspective: 0,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },

  methods: {
    handleReset() {
      this.perspective = this.rotateX = this.rotateY = this.rotateZ = 0;
    },
  },

  computed: {
    boxStyle() {
      return {
        transform: `perspective(${this.perspective}px)rotateX(${this.rotateX}deg)rotateY(${this.rotateY}deg)rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
};

Vue.createApp(app).mount("#app");
