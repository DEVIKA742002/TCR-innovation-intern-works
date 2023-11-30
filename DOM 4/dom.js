// Numbers=['ramu','shyamu','raamukaka']

// Numbers.forEach(function(x){
//      console.log(x);
// });


// let y='my name is anthony me duniya me akela  hu '
// console.log(y.indexOf('z'));























var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')


//Form submit event
form.addEventListener('submit',addItem)

//delete event
itemList.addEventListener('click',removeitem)

//filter event
filter.addEventListener('keyup',filterItem)




//Add item
function addItem(e){
    e.preventDefault();

    var newItem=document.getElementById('item')
    abc=newItem.value
    // console.log(abc);
    // abc=newItem.value
    // console.log(abc);


    //Create new li element
    var li=document.createElement('li')
    console.log(li);

    //add class
    li.className='list-group-item'
    // console.log(li);

    // add text node with input value
    li.appendChild(document.createTextNode(abc))
    // console.log(li);

    //Create delete button element
    var deletebtn=document.createElement('button')

    //add classes to delete button
    deletebtn.className='btn btn-danger btn-sm float-right delete'

    // console.log(deletebtn);

    ///append text node
    deletebtn.appendChild(document.createTextNode('X'))
    

    //append button to li
    li.appendChild(deletebtn)


    itemList.appendChild(li)
    
    newItem.value=''
}









function removeitem(e){
   if(e.target.classList.contains('delete')){
       if(confirm('are u sure?')){
       var li=e.target.parentElement
       itemList.removeChild(li)
    }
   }
}














//filter item
function filterItem(e){
    //convert text to lowecase
    var text=e.target.value.toLowerCase();
    // console.log(text);

    // //get list
    var items=itemList.getElementsByTagName('li')
    console.log(items);

    Array.from(items).forEach(function(X){
        var itemName=X.firstChild.textContent;
        console.log(itemName);

        if(itemName.toLowerCase().indexOf(text)==-1){
            X.style.display='none'
        }
        else{
            
            X.style.display='block'
        }

    })
}
