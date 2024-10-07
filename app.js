// let name = prompt("Enter your name");

let change = document.querySelector(".pics");
console.log(change);

let bg = document.querySelector("#themes");
console.log(bg);

let body = document.querySelector("body");
console.log(body);

let title = document.querySelector(".title");
console.log(title);

let des = document.querySelector(".desc");
console.log(des);

let button = document.querySelector(".same");
console.log(button);

let myName = document.querySelector(".name");
console.log(myName);

let login = document.querySelector(".login");
console.log(login)

// form

let curMode = "pic1";


change.addEventListener("click" , ()=>{

    if(curMode == "pic1"){
        console.log("clicked");
        curMode = "pic2";
        change.style.backgroundImage = "url('img2.png')";
    }
    else if(curMode == "pic2"){
        console.log("clicked");
        curMode = "pic3";
        change.style.backgroundImage = "url('img3.jpg')";
    }
    else {
        curMode = "pic1";
        change.style.backgroundImage = "url('img1.jpg')";

    }

})

let bgmode = "dark";

bg.addEventListener("click", ()=>{

    if(bgmode == "dark"){
        body.style.backgroundColor = "#f4f3ee";
        body.style.color = "black";
        title.style.color = "black";
        des.style.color = "black";
        
        bgmode = "light";
    }
    else{
        body.style.backgroundColor = "#463f3a";
        body.style.color = "#f4f3ee";
        title.style.color = "white";
        des.style.color = "white";
        
        bgmode ="dark";
    }
})

// myName.innerText = name;

login.addEventListener("click", ()=>{
    myName.innerText = "Kunal";
})