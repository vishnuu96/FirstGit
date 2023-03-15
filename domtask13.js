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
// to print on screen
         const body = document.querySelector('body')
        //  creating li element to show on screen
        const li=document.createElement("li");
        //   adding the details to li to print on screen 
        li.appendChild(document.createTextNode(`name:${person.name}; email:${person.email}; number:${person.number}`))
    //    creating button element
        const btn=document.createElement("button");
        // creating textnode and adding to button
      btn.appendChild(document.createTextNode('delete'));
    //   add btn to li
        li.appendChild(btn);
    //    creating editbtn
        const editbtn=document.createElement("button");
        // creating textnode and adding to button
      editbtn.appendChild(document.createTextNode('edit'));
    //   add btn to li
        li.appendChild(editbtn);
         // add li to body
        body.appendChild(li)
// to store in local storage
        localStorage.setItem(element.name,JSON.stringify(person))
    //  delete button functionality 
        btn.addEventListener("click",(e)=>{
        body.removeChild(li)
        localStorage.removeItem(element.name)
       })
    //    edit button functionality
    editbtn.addEventListener('click',(e)=>{
        body.removeChild(li)
        localStorage.removeItem(element.name)
        document.querySelector('#name').value=element.name;
        document.querySelector('#email').value=element.email
        document.querySelector('#phone').value=element.number
    })
        
   
   
    })

   


})

