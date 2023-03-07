var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter= document.getElementById('filter')



// form submit event
form.addEventListener('submit',addItem);

// delete event 
itemList.addEventListener('click',deleteItem);
// filter event
filter.addEventListener('keyup',filterItems);


// add item
function addItem(e){
    e.preventDefault();
    // get the input value
    var newlist=document.getElementById('item').value
    // get the discription value
    var newDiscript=document.getElementById('description').value
    // create li element to store the value 
    var li=document.createElement('li')
    // add classname
    li.className='list-group-item'
    // append the value of input to li element 
   li.appendChild(document.createTextNode(newlist));
   li.appendChild(document.createTextNode(' '));
   li.appendChild(document.createTextNode(newDiscript));
    
    
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
  editbtn.className='btn btn-sm float-right'
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

function filterItems(e){
  // get the input text
  var text=e.target.value.toLowerCase();
  // get li elements
   var items=document.getElementsByTagName('li')
  //  convert to array
  Array.from(items).forEach(function(item){
    // get each li(item)s first child text
   var itemName=item.firstChild.textContent;
  //  get items 3 rd child second child is space
   var descriptName=item.childNodes[2].textContent;
   
   if(itemName.toLowerCase().indexOf(text)!=-1||descriptName.toLowerCase().indexOf(text)!=-1){ 
    
    item.style.display='block'
   }else{ 
    item.style.display='none'
   }
  })
}


