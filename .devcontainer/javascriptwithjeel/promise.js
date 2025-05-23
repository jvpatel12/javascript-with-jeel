// const promiseOne = new Promise(function (resolve, reject) {
//   // do an asyn task
//   // DB calls cryptography,network

//   setTimeout(function () {
//     console.log("Asyn task is some things");
//     resolve();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("promised consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Asyn task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Asyn 2 resloved");
// });

// const ThreePromise =new Promise(function (resolve,reject){
//     setTimeout(function(){
//       resolve({username : "jeel",id : "jvpatel232gmail.com"})
//       console.log("entry  details success fully");

//     },1000)
// });
// ThreePromise.then(function(user){
//     console.log(user);
// });

const FourthPromise = new Promise(function (resolve, reject) {
  let error = false;
  if (!error) {
    resolve({ username: "jeel", id: "22012021012" });
  } else {
    reject("error somethings in code");
  }
});

FourthPromise.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise is either resloved or reject");
  });
