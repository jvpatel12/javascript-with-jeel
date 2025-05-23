function debounce(fn, delay) {
  let timerId;

  return function (...args) {
    clearTimeout(timerId); //Cancel the last call

    timerId = setTimeout(()=>{
          fn(...args); 
    },delay
    );
  };
}

const search = (query) => {
  console.log(`searching for`, query);
};

const searchWithDebounce = debounce(search,300 );

searchWithDebounce("ha");
searchWithDebounce("har");
searchWithDebounce("hard");
searchWithDebounce("hard jeel patel");
