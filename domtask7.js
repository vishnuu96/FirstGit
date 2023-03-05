var itemList=document.querySelector('#items');
// parent node property
console.log(itemList.parentNode);    
// this gives its parent node
itemList.parentNode.style.backgroundColor='#f4f4f4'
console.log(itemList.parentNode.parentNode.parentNode);

// parentnode nad parentelement can be used interchangebly

console.log(itemList.parentElement);    
itemList.parentElement.style.backgroundColor='#f4f4f4'
console.log(itemList.parentElement.parentElement.parentElement);

// childnode
console.log(itemList.childNodes);
// this gives text as child including the space so it is preferred to use children
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow'

// first child and it gives text including white space or linebreaks.so we can use firstelementchild instead
console.log(itemList.firstChild);
// // firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello'


// lastchild
console.log(itemList.lastChild);
// // lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello 1' 

// nextsibling
console.log(itemList.nextSibling);
// // nextelementsibling
console.log(itemList.nextElementSibling);

// previoussibling
console.log(itemList.previousSibling);
// // previouselementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='red'

// create element
// create a div
var newDiv=document.createElement('div');
// add class
newDiv.className='hello'
// add id
newDiv.id='hello1'
// add attribute
newDiv.setAttribute('title','hello div');
// create a text node
var newDivText=document.createTextNode('hello world');
// add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
 container.insertBefore(newDiv, h1);
 newDiv.style.fontSize='30px'
console.log(newDiv);

