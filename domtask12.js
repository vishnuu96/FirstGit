
// const arr=new Array();
const form=document.querySelector('#my-form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const arr=new Array();
    const userName=e.target.name.value;
    const email=e.target.email.value;
    const number=e.target.phone.value
    const person={
        name:userName,
        email:email,
        number:number
    }
    arr.push(person);
    arr.forEach(element => {
         const body = document.querySelector('body')
        const li=document.createElement("li");
        li.appendChild(document.createTextNode(`name:${person.name}; email:${person.email}; number:${person.number}`))
        body.appendChild(li)
        localStorage.setItem(element.name,JSON.stringify(person))
    });

    // for(i=0;i<arr.length;i++){
    //     const body = document.querySelector('body')
    //     const li=document.createElement("li");
    //     li.appendChild(document.createTextNode(`name: ${person.name};email:${person.email}`))
    //     body.appendChild(li)
    //     localStorage.setItem(arr[i].name,JSON.stringify(person))
    
    // }
    
    // arr.forEach(details)
    // function details(){
    
    // const body = document.querySelector('body')
    // const li=document.createElement("li");
    // li.appendChild(document.createTextNode(`name: ${person.name};email:${person.email}`))
    // body.appendChild(li)
    // localStorage.setItem(details.name,JSON.stringify(person))
    // }

})