const form=document.querySelector('#my-form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  const userName=document.querySelector("#name").value
  const email=document.querySelector("#email").value
  // const userName=e.target.name.value;
  // const email=e.target.email.value
  
  // localStorage.setItem('name',userName)
  // localStorage.setItem('email',email)
  const personDetails={
    name:userName,
    email:email
  }
  
  localStorage.setItem('details',JSON.stringify(personDetails));
  
})
