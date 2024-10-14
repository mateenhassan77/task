// Examian tha object

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.doctype);
// console.log(document.all[10]);

// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);

// // get element by id
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle)
// headerTitle.textContent = "hello";
// headerTitle.innerText = "Goodbye"
// console.log(headerTitle.innerText);
//headerTitle.innerHTML = "<h3>Hello</h3>";
//  headerTitle.style.borderbottem - 'solid 3px gray';

// get elemnt by class name

// var items= document.getElementsByClassName('list-group-item')
// console.log(items);
// console.log(items[1]);
// items[1].textContent -  "Hello";
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // items.style.backgroundColor =  'gray';

// for( var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = 'gray';
// }


// var li= document.getElementsByClassName('list-group-item')
// console.log(li);
// console.log(li[1]);
// li[1].textContent -  "Hello";
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';



// for( var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'gray';
// }



// query selector//
// var header = document.querySelector('#main-header');
// header.style.border = 'solid 4px  #ccc';


// var input = document.querySelector('input');
// input.value = 'Hello world';


// var submit = document.querySelector('input[type="submit"]');

// submit.value ="SEND"

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.color = 'green';


// var titles = document.querySelectorAll('.title');
// console.log(titles);
//  titles[0].style.color = 'red';
//  titles[1].textContent =  'New title';

//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  var even = document.querySelectorAll('li:nth-child(even)');


//  for( var  i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'yellow';
//     even[i].style.backgroundColor = 'aqua';
// }

//var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundcolor = 'purple';
// console.log(itemList.parentNode.parentNode);

// var itemList = document.querySelector('#items');
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundcolor = 'purple';
// console.log(itemList.parentElement.parentElement.parentElement);

// childeNodes

// var itemList = document.querySelector('#items');
// //  console.log(itemList.childNodes);
//  console.log(itemList.children);
//  console.log(itemList.children[1]);
//  itemList.children[1].style.backgrondcolor  = 'blue';


//  console.log(itemList.firstChild);

//  console.log(itemList.firstElementChild);
//  itemList.firstElementChild.textContent = 'gello!';


// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent - 'hello!';


// console.log(itemList.nextsibling);

// console.log(itemList.nextElementsibling);
// console.log(itemList.previousElementSibling);

// // creat element
//  var newDiv = document.createElement('div');
//  newDiv.className = 'hello';
//  newDiv.id = 'hello-id';
//  //  newDiv.textContent = 'hello!';
//  //  newDiv.innerHTML = '<h2>Hello</h2>';
//  //  newDiv.outerHTML = '<button>hello</button>';
//  //  newDiv.innerHTML = '<button>hello</button>';

//  console.log(newDiv);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header hi');

//  console.log(container);

// events

// var button= document.getElementById('button').addEventListener
// ("click", buttonClick);

// function buttonClick(e){
    // console.log("button click")
    // document.getElementById("header-title").textContent -'changed';
    // document.querySelector('main').style.backgroundColor =  'red';

    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.target.id);
    // console.log(e.target.classList);

    // var  output = document.getElementById('output');
    // output.innerHTML - '<h3> ' +e,target.id +'</h3>';

    // console.log(e.type);

//  console.log(e.clientx);
 
//  console.log(e.clientY);


// console.log(e.offsetx);

// console.log(e.offsetY);


// }
// var button = document.getElementById("button")
// // button.addEventListener("click", runEvent);
// // button.addEventListener("dbclick", runEvent);
// // button.addEventListener("mousedown", runEvent);



// function runEvent(e){
//     console.log(`Event type: ${e.type}`)
// }

// var button = document.getElementById("button");
// var box = document.getElementById("box");


// box.addEventListener("mouseenter", runEvent);
//  box.addEventListener("mouseleave", runEvent);


// // box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);


// box.addEventListener("mousemove", runEvent);

// function runEvent(e){
//     console.log(`Event type: ${e.type}`)

    // output.innerHTML ='<h3>MouseX: '+e.offstx+' </h3><h3> MouseY:'  +e.offsetY+'</h3>';

// box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";

// }
// var iteminput = document.querySelector('input[type-text]');
// var form =  document.querySelector('form');

// iteminput.addEventListener('keydown', runEvent);
// iteminput.addEventListener('keyup', runEvent);

// function runEvent(e){
// //     console.log(`Event type: ${e.type}`)
// // }

// //     console.log(e.target.value);
// //     document.getElementById('output').innerHTML = '<h3>'+e.target.value +  '</h3>';
// // }

// var iteminput = document.querySelector('input[type-text]');
//  var form =  document.querySelector('form');
// var select = document.querySelector('select')



// // select.addEventListener('charge', runEvent);

// // select.addEventListener('input', runEvent);

// form.addEventListener('submit',  runEvent);


//  function runEvent(e){
//     e.preventDefault();
//      console.log('Event Type:  '+e.type);

//     //  console.log(e.target.value); 
//  }
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Filter event
filter.addEventListener('keyup', filterItems);

// Form submit event
form.addEventListener('submit', addItem);

// Remove item event
itemList.addEventListener('click', removeItem);

function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Prevent empty items from being added
    if (newItem.trim() === '') {
        alert('Please enter a valid item');
        return;
    }

    // Create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    // Append text to li
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append delete button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

    // Clear the input field after adding the item
    document.getElementById('item').value = '';
}

function removeItem(e) {
    // Check if the clicked target is a delete button
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    // Get the value of the filter input
    var filterValue = e.target.value.toLowerCase();

    // Get all items in the list
    var items = itemList.getElementsByTagName('li');

    // Convert the HTMLCollection to an array and loop through each item
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;

        // If the item name matches the filter, show it; otherwise, hide it
        if (itemName.toLowerCase().indexOf(filterValue) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
