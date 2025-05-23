class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`this is loging${this.username}`);
        
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A course was added by ${this.username}`);
        
    }
}

const jeel = new Teacher("jeel","abc@","123")

jeel.addCourse()

const masalaChai =new User("masalaChai")
masalaChai.logMe()


console.log(jeel === masalaChai);
