var form=document.getElementById('addForm')
var itemList=document.getElementById('items')



// form submit event
form.addEventListener('submit',addItem);

// delete event 
itemList.addEventListener('click',deleteItem);
// filter event


// add item
function addItem(e){
    e.preventDefault();
    // get the input value
    var newlist=document.getElementById('item').value
    // create li element to store the value 
    var li=document.createElement('li')
    // add classname
    li.className='list-group-item'
    // append the value of input to li element 
    li.appendChild(document.createTextNode(newlist));

    // create a delete button
    var deletebtn=document.createElement('button')
    // add class to button element
    deletebtn.className='btn btn-danger btn-sm float-right delete'

    // append the textnode
    deletebtn.appendChild(document.createTextNode('x'));
    // append the button to li 
    li.appendChild(deletebtn)
    //  create edit button
  var editbtn= document.createElement('button');
//   add class to button
  editbtn.className='btn btn-danger btn-sm float-right delete'
//   append the text node 
  editbtn.appendChild(document.createTextNode('edit'));
//   append button to li
   li.appendChild(editbtn);
    //  append the li element to itemlist 
    itemList.appendChild(li);
    

}

// delete item
function deleteItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('are you sure?')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
   } 
}
// var editbtn= document.createElement('button');
// //   add class to button
//   editbtn.className='btn btn-danger btn-sm float-right delete'
// //   append the text node 
//   editbtn.appendChild(document.createTextNode('edit'));
// //   append button to li
//    li.appendChild(editbtn);