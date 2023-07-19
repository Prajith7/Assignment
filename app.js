let addTask = document.getElementById("submitbtn")
let titlevalue = document.getElementById("text-box")
console.log(titlevalue)
let displayTask = document.getElementById("container-2")
console.log(addTask)
let editBtn = document.createElement("button")
editBtn.classList.add("edit")
editBtn.innerText="edit"
let dltBtn = document.createElement("button")
dltBtn.classList.add("dlt")
dltBtn.innerText="delete"
let titlediv1 = document.createElement("div")
let titlediv2 = document.createElement("div")
let showTitle=document.createElement("p")
addTask.addEventListener("click",()=>{
  
   if(titlevalue.value){
    
    showTitle.innerText = titlevalue.value;
    titlediv2.appendChild(titlediv1)
    titlediv1.appendChild(showTitle)
    displayTask.appendChild(titlediv2)
    titlediv2.appendChild(editBtn)
    titlediv2.appendChild(dltBtn)
    console.log(displayTask)
    // let table = document.createElement('table');
    // let  rows = document.createElement('tr');
    // let td1= document.createElement("td");
    // let td2= document.createElement("td");
    // let td3= document.createElement("td");

    
    //     displayTask.appendChild(table)
    //     rows.appendChild(td1)
    //     rows.appendChild(td2)
    //     rows.appendChild(td3)
    //     td1.innerText=titlevalue.value;
    //     td2.appendChild(editBtn)
    //     td3.appendChild(dltBtn)
    //     table.appendChild(rows)
    titlevalue.value=" " ;
    editBtn.addEventListener("click",()=>{

    })
   }
   

   

})
dltBtn.addEventListener("click",()=>{
    displayTask.remove(titlediv1)
   })

