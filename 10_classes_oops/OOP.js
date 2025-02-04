const user={
    username:"Ujjal",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
       // console.log("Got user details from database");
      //console.log(`Username:${this.username}`);
        console.log(this);
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this);


function User(username,loginCount,isLoggedIn){//constructor
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}
const userOne=new User("Ujjal",1,true)
const userTwo=new User("Ram",2,false)

console.log(userOne);
console.log(userTwo);


