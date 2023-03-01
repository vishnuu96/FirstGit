// // /examine the document object
// //  console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// // console.log(document.all);
// // document.all[10].textContent='hello';
// console.log(document.forms[0]);
// console.log(document.links);


// getelementbyid
// console.log(document.getElementById('header-title'));
const ht=document.getElementById('header-title');
const header=document.getElementById('main-header');

// console.log(ht);
// ht.textContent='Hello'
// ht.innerText='goodbye'
// ht.innerHTML='<h3>hello</h3>'
ht.style.borderBottom='solid 3px #000'
// header.style.borderBottom='solid 3px #000'
document.getElementById('item').style.color='green';
// document.getElementById("item").style.font = "italic bold 20px arial,serif";
const it=document.getElementById('item');
// it.textContent='ADD ITEMS';
it.style.fontWeight='bold'

// getelementsbyclassname
var items= document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';
 
for(i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}