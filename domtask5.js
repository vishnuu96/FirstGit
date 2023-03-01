// elementbytagname
const li=document.getElementsByTagName('li');
li[1].textContent='hello';
li[1].style.fontWeight='bold'
li[1].style.background='green'
for(i=0;i<li.length;i++){
    li[i].style.background= 'grey'
    li[i].style.fontWeight='bold'
}



// elementbyclassname
// const items= document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor='green';
 
// for(i=0;i<items.length;i++){
//     items[i].style.fontWeight='bold';
//     items[i].style.backgroundColor='green';
// }