let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
})



ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
    console.log("button clicked");
})

// let delbuttons = document.querySelectorAll(".delete");
// for(delbtn of delbuttons){
//     delbtn.addEventListener("click", function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     })
// }
