function setUsername(username) {
     this.username=username
     console.log("called");
     
}

function createUser(usename,email,password) {
   setUsername.call(this,usename)

   this.email = email
   this.password = password
}

const chai = new createUser("jeel","abc","123");
console.log(chai);
