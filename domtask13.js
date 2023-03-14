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
        //  creating li element to show on screen
        const li=document.createElement("li");
        //   adding the details to li to print on screen 
        li.appendChild(document.createTextNode(`name:${person.name}; email:${person.email}; number:${person.number}`))
    //    creating button element
        const btn=document.createElement("button");
      btn.appendChild(document.createTextNode('delete'));
        li.appendChild(btn);
        body.appendChild(li)

        localStorage.setItem(element.name,JSON.stringify(person))
       btn.addEventListener("click",(e)=>{
        body.removeChild(li)
        localStorage.removeItem(element.name)
       })
        
   
   
    })

   


})

