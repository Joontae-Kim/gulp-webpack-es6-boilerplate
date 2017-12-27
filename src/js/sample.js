class Sample {
    constructor(name) {
        this.name = name;
    }

    gretting(){
      console.log("Hello, ", this.name);
    }

    question(){
      console.log("What is your job?", this.name);
    }

    say() {
        console.log("HI, I AM ", this.name);
    }


}

export default Sample;
