// const item=document.querySelector('.list-group-item:nth-child(2)');
// item.style.background='green'
// const item3=document.querySelector('.list-group-item:nth-child(3)');
// item3.style.display='none'

// const item=document.querySelector('.list-group-item');
// item[1].style.background='green'   this gives error


// queryselectorall

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++){
odd[i].style.background='green'
}
// const item=document.querySelectorAll('.list-group-item:nth-child(1)');
// item.style.background='green'     this gives error

const item=document.querySelectorAll('.list-group-item');
item[1].style.color='green'
