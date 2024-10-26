class Office {
    constructor(name, employees){
        this.name = name;
        this.employees = employees;    

    if(typeOf Office.instance == "object") {
        return Office.instance;
    }

    Office.instance = this;
    return this;
  }
}

const office1 = new Office("Principal", 30)
