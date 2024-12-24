
const input=document.querySelector('.inp')

const list1=document.querySelector('.list')

const btn=document.querySelector('.mybtn')

btn.addEventListener("click",()=>{
    if(input.value === ''){
        alert("you must be write something here")
    } else{
        let li=document.createElement('li')
        li.innerHTML=input.value;
        list1.appendChild(li)

        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value=""
    saveData()
})


list1.addEventListener('click',(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        saveData()
    } else if(e.target.tagName==='SPAN'){
        e.target.parentElement .remove()
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",list1.innerHTML)
}


function showTask(){
    list1.innerHTML=localStorage.getItem("data")
}
showTask()