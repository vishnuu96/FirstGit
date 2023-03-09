const form=document.querySelector('#my-form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const name=document.querySelector("#name").value
  const email=document.querySelector("#email").value
  localStorage.setItem('name',name)
  localStorage.setItem('email',email)
})