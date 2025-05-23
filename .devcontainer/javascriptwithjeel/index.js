// function multiple(num){
//   return num*5;
// }

// multiple.power=2

// console.log(multiple(5));
// console.log(multiple.prototype);
// console.log(multiple.power);


// function createUser(usename,score){
//        this.usename =usename
//        this.score=score
// }
//        createUser.prototype.increment = function(){
//         this.score++;
//        }
//        createUser.prototype.printMe = function(){
//         console.log(`score is ${this.score}`);
//       }

//       const chai = new createUser("chai",25)
//       const tea = new createUser("tea",250)

//       chai.printMe()


      const user ={
        name:"jeel"
      }
      const teacher = {
        makeVideo: true
      }

      const teacherSupport = {
        isAvailable  :  false
      }

      const Tospport =  {
        markAssignment :'jsAsiignment',
        fullTime : true,
        __proto__:teacherSupport
      }

      teacher.__proto__=user

      Object.setPrototypeOf(teacherSupport, teacher)

      let another = "jeel patel"

      String.prototype.trueLength = function()
{
    console.log(`${this}`);
    
    console.log(`${this.name}`);

    console.log(`this is length is:${this.trim().length}`);
    
    
    
}

another.trueLength()
