class Project {
  constructor()  {
    this.location = 'Herndon';
  }
}

class MeanProject extends Project {
  constructor() {
    super();
    this.location = this.location + ', VA';
  }
}

let project = new MeanProject();
project.location = 'Ashburn, NM';
console.log(project.location);