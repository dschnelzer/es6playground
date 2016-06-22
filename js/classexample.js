console.log('in classexample.js');
class Task {
  //  let taskId = 8000;  this would be a syntax error
  // find new. ...
  constructor() {
    console.log('constructing Task');
    // console.log(new.target);
  }

  // this actually adds the function to the Task.prototype
  showId() {
    console.log('99');
  }

}

class Java extends Task {
  constructor() {
    super();
  }

  showId() {
    console.log('not 99');
  }
}

console.log('Task typeof is', typeof Task);

let task = new Java();
console.log('task typeof is', typeof task);

console.log('task instance of Task', task instanceof Task);

task.showId();