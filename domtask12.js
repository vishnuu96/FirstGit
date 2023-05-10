
// const arr=new Array();
const form=document.querySelector('#my-form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const userName=e.target.name.value;
    const email=e.target.email.value;
    const number=e.target.phone.value
    const person={
        name:userName,
        email:email,
        number:number
    }
    localStorage.setItem(person.name,JSON.stringify(person))
    showUserOnScreen(person)

  


})
function showUserOnScreen(person){
  const parentElem = document.querySelector('#listOfItems')
 const childElem=document.createElement("li");
 childElem.appendChild(document.createTextNode(`name:${person.name}; email:${person.email}; number:${person.number}`))
//  childElem.textContent="name: "+person.name+" email: "+person.email+ " number:  "+person.number
 parentElem.appendChild(childElem)
}

window.addEventListener("DOMContentLoaded",()=>{
    const userDetails=localStorage
    const userDetailsKey=Object.keys(userDetails)
    for(let i=0;i<userDetailsKey.length;i++){
        const id=userDetailsKey[i]
        const user=userDetails[id]
        const userObj=JSON.parse(user)
        showUserOnScreen(userObj)
    }
})