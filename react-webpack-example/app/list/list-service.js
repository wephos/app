export default class ListService {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  getName(){
    return this.name;
  }
  getAge(){
    return this.age;
  }
}