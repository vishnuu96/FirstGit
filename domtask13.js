// const form=document.querySelector('#my-form')
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const arr=new Array();
//     const userName=e.target.name.value;
//     const email=e.target.email.value;
//     const number=e.target.phone.value
//     const person={
//         name:userName,
//         email:email,
//         number:number
//     }
//     arr.push(person);
//     arr.forEach(element => {
// // to print on screen
//          const body = document.querySelector('body')
//         //  creating li element to show on screen
//         const li=document.createElement("li");
//         //   adding the details to li to print on screen 
//         li.appendChild(document.createTextNode(`name:${person.name}; email:${person.email}; number:${person.number}`))
//     //    creating button element
//         const btn=document.createElement("button");
//         // creating textnode and adding to button
//       btn.appendChild(document.createTextNode('delete'));
//     //   add btn to li
//         li.appendChild(btn);
//     //    creating editbtn
//         const editbtn=document.createElement("button");
//         // creating textnode and adding to button
//       editbtn.appendChild(document.createTextNode('edit'));
//     //   add btn to li
//         li.appendChild(editbtn);
//          // add li to body
//         body.appendChild(li)
// // to store in local storage
//         localStorage.setItem(element.name,JSON.stringify(person))
//     //  delete button functionality 
//         btn.addEventListener("click",(e)=>{
//         body.removeChild(li)
//         localStorage.removeItem(element.name)
//        })
//     //    edit button functionality
//     editbtn.addEventListener('click',(e)=>{
//         body.removeChild(li)
//         localStorage.removeItem(element.name)
//         document.querySelector('#name').value=element.name;
//         document.querySelector('#email').value=element.email
//         document.querySelector('#phone').value=element.number
//     })
        
   
   
//     })

   


// })

const form=document.querySelector("#my-form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const name=e.target.name.value
    const email=e.target.email.value
    const number=e.target.phone.value
    const person={
        name:name,
        email:email,
        number:number
    }
    localStorage.setItem(person.name,JSON.stringify(person))
    showOnscreen(person)

})
function showOnscreen(person){
    const parentElem=document.querySelector("#listOfitems")
    const childElem=document.createElement("li")
    // childElem.innerHTML=childElem.innerHTML+person.name+" "+person.email+" "+person.number
    childElem.textContent="name: "+person.name+" email: "+person.email+ " number:  "+person.number
   

    const deletebtn=document.createElement("input")
    deletebtn.type="button"
    deletebtn.value="delete"

    const editbtn=document.createElement("input")
    editbtn.type="button"
    editbtn.value="edit"

    childElem.appendChild(deletebtn)
    childElem.appendChild(editbtn)

    parentElem.appendChild(childElem)

    deletebtn.onclick=()=>{
       localStorage.removeItem(person.name)
       parentElem.removeChild(childElem)
    }

    editbtn.onclick=()=>{
        localStorage.removeItem(person.name)
       parentElem.removeChild(childElem)
       document.querySelector('#name').value=person.name;
       document.querySelector('#email').value=person.email
       document.querySelector('#phone').value=person.number
    }


}
window.addEventListener("DOMContentLoaded",()=>{
    const userDetails=localStorage
    const userDetailsKey=Object.keys(userDetails)
    for(let i=0;i<userDetailsKey.length;i++){
        const id=userDetailsKey[i]
        const user=userDetails[id]
        const userObj=JSON.parse(user)
        showOnscreen(userObj)
    }
})

