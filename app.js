let objData=JSON.parse(localStorage.getItem('Data')) || {};
let addTask = document.getElementById("submitbtn")
let titlevalue = document.getElementById("text-box")
let descriptionVal = document.getElementById("description")
let displayTask = document.getElementById("container-2")
let key =Number(Object.keys(objData).pop())+1 || 0,temp=0;
console.log(objData,key)
showTask();
addTask.addEventListener("click",(e)=>{
    e.preventDefault();
    if(titlevalue.value!==" " && descriptionVal.value!==" "){
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(addTask.value)
        if(addTask.value==="submit"){
            console.log(key)
            objData[key]={title:titlevalue.value, notes:descriptionVal.value ,created:time,updated:time}
            }
        else{
            objData[temp]={title:titlevalue.value, notes:descriptionVal.value ,created:time,updated:time}
            objData[temp]['title']=titlevalue.value
            objData[temp]['notes']=descriptionVal.value
            objData[temp]['updated']=time;
        }
        key+=1;
         titlevalue.value=" "
        descriptionVal.value=" "
        addTask.value="submit"
        localStorage.setItem("Data",JSON.stringify(objData))
        showTask(); 
    }
})
function showTask(){
    displayTask.innerHTML=" "
    for(let val in objData){
    
        console.log(addTask)
        let editBtn = document.createElement("button")
        editBtn.classList.add("edit")
        editBtn.innerText="edit"
        let dltBtn = document.createElement("button")
        dltBtn.classList.add("dlt")
        dltBtn.innerText="delete"
        let titlediv1 = document.createElement("div")
        let showTitle=document.createElement("p")
        showTitle.style.cursor="pointer";
        let showContent = document.createElement("p")
        let currentTime = document.createElement("p")
        let updateTime = document.createElement("p")
        showContent.setAttribute("class","hidden")
        showContent.innerText = objData[val].notes;
        showTitle.innerText = objData[val].title;
        currentTime.innerText="current time " + objData[val].created;
        updateTime .innerText="update time " +objData[val].updated;
        showTitle.addEventListener("click",(e)=>{
            e.preventDefault();
            showContent.classList.toggle("hidden")
        })
        titlediv1.appendChild(showTitle)
        displayTask.appendChild(titlediv1)
        titlediv1.appendChild(editBtn)
        titlediv1.appendChild(dltBtn)
        titlediv1.appendChild(showContent)
        titlediv1.appendChild(currentTime)
        titlediv1.appendChild(updateTime)
    dltBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        delete objData[val];
        localStorage.setItem("Data",JSON.stringify(objData))
        showTask();
    })
    editBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        console.log("hello")
        displayTask.removeChild(titlediv1)
        titlevalue.value=objData[val].title
        descriptionVal.value=objData[val].notes
        addTask.value="update";
        temp=val;
        delete objData[val];
    })
}
}