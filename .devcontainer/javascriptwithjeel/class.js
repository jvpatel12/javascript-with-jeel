class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
 
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const jeel = new User("jeel","abc","123")
console.log(jeel.encryptPassword());
console.log(jeel.changeUsername());

