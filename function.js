export default  class  Hello {
    constructor(name,age,height) {
        this.name = name;
        this.age = age;
        this.height = height;
    } 
    description(){
        console.log(
           ` Hello my name is ${this.name},and i'm ${this.age} years old my height is ${this.height} cantimerters,
         ` );
    }
}