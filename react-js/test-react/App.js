class App extends Component {
  state = {
    tasks: [
      { text: "free Blinky" },
      { text: "send and emai" },
      { text: "Master the was of jsx" }
    ]
  };
  render() {
    return (
      <div classNme="App">
        <h1> Cohort</h1>
        <list tasks={this.state.task} removeTsk={this.removeTask} addTsk={this.addTask}/>
      </div>
    );
  }

  removeTask=(taskToRemove)=> {
    const updatedTask =this.state.tasks.filter(taks=> task!===taskToRemove);
    this.setState({
      task:updatedTasks
    })
  }
  addTask = (tasktoupdate) => {

  }

}
export default App;
