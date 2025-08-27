//Concept of settimeout
document.addEventListener("DOMContentLoaded",function(){
let a = 10
let readtext = document.querySelector("#settimeout");
setTimeout(function(){
 readtext.textContent = a;
},1000)
});

//Concept of setInterval
document.addEventListener("DOMContentLoaded",function(){
let b=1;
let readinterval = document.getElementById("setinterval")
const addedinterval = setInterval(function(){
    b++
    readinterval.textContent = b;
    if(b === 10){
        clearInterval(addedinterval)
    }
},1000)
})

//Concept of fetch
//{userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
document.addEventListener("DOMContentLoaded",function(){
    let readfet = document.getElementById("letsefetch")
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(raw => raw.json())
    .then(data =>{
        data.forEach(elem => {
            if(elem.completed == false && elem.userId < 5)
            readfet.innerHTML += "User id: " + elem.userId + " iscompleted: " +elem.completed + "<br>"
        })
        // readfet.textContent = data[1];
        console.log(data[1].userId, data[1].completed)
    })
})

//Concept of Promises
//{userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
document.addEventListener("DOMContentLoaded", function () {
  let readparchi = document.querySelector("#parchi");

  const checkalluser = new Promise(function (res, rej) {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(raw => raw.json())
      .then(readable => {
        // ✅ Use Set to track unique userIds
        const seenUsers = new Set();

        readable.forEach(data => {
          if (data.completed === true && !seenUsers.has(data.userId)) {
            seenUsers.add(data.userId); // mark user as shown

            readparchi.innerHTML +=
              "Userid = " + data.userId +
              " | Title: " + data.title +
              " | Status: " + data.completed + "<br>";
          }
        });

        if (seenUsers.size > 0) {
          res("Data fetched through promise successfully");
        } else {
          rej("No completed users found");
        }
      })
      .catch(() => rej("Error fetching data"));
  });

  checkalluser
    .then(msg => console.log(msg))
    .catch(err => console.log(err));
});

//Check callback
//{userId: 1, id: 2, title: 'quis ut nam facilis et officia qui', completed: false}
document.addEventListener("DOMContentLoaded",function(){
    let readaheckcall = document.getElementById("checkcallbacks")
    function fetchdata(url,calls){
        fetch(url)
        .then(raw =>raw.json())
        .then(data => {
            data.forEach(newdata => {
                if(newdata.completed === false){
                    calls(newdata)
                }
            })
        })
        .catch(err => console.log("Error in fetching API"))
    }
    fetchdata('https://jsonplaceholder.typicode.com/todos', function(data){
            readaheckcall.innerHTML += "UserID: " + data.userId +
            "| Title: " + data.title +
            "| Completed: " + data.completed + "<br>"
    })
})

//Checck Async and Await
document.addEventListener("DOMContentLoaded",function(){
    let readawaytext = document.getElementById("asyawi")
    async function getdatafromapi(){
      let a = await fetch('https://jsonplaceholder.typicode.com/todos')
      a = await(a.json())
        .then(readable => {
            if(readable)
            readawaytext.textContent = "Datafetched successfully"
        console.log("Executed last ASYNC")
        })
        .catch(err => {
            if(err)
            readawaytext.textContent = "Failed to fetch the data"
        })
        console.log("Executed first before ASYNC log")
    }
    getdatafromapi()
})

//Generator
document.addEventListener("DOMContentLoaded",function(){
    let gentext = document.getElementById("gen")
    function* display(){
        console.log("Execution started")
        yield 1;
        console.log("Started 2")
        yield 2
        console.log("Started 3")
        yield 3
    }
    let geni = display()
    // console.log(geni.next().value)
    gentext.textContent = geni.next().value
    // console.log(geni.next().value)
    gentext.textContent = geni.next().value
    // console.log(geni.next().value)
    gentext.textContent = geni.next().value
})


