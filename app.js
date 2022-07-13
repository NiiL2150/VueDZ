class VueTask {
  constructor(value) {
    this.value = value;
    this.isMarked = false;
    this.isSelected = false;
    this.id = this.generateId();
  }

  generateId() {
    return Math.random().toString(36).substring(2, 15);
  }
}

const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: ""
    };
  },
  computed:{
    taskCount(){
      return this.tasks.length;
    }
  },
  methods: {
    addTask(){
      this.tasks.push(new VueTask(this.taskInput));
    },
    removeTask(taskId){
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
  },
});

app.mount("#app");
