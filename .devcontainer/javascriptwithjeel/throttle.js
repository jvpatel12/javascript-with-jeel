function thorttle(fn,delay){
    let lastCall =0;

    return function(...args){
       const now  = Date.now();

       if(now -lastCall < delay){
        return;
       }
       lastCall = now
       return fn(...args);
    };
}

function sendChatMessage(message){
    console.log(
        `sending message`,message
    );
}
const sendChatMessageSlowMode = thorttle(sendChatMessage,2000);


sendChatMessageSlowMode('hi');
sendChatMessageSlowMode('hello ');
sendChatMessageSlowMode('hello js');
sendChatMessageSlowMode('sir ji next  cohort kan hoga');
