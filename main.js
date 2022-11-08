// create to do item
//add item to, To Do List
// complete item
//remove completed item
//remove all items

let form = document.querySelector('form');

let entryBox = document.querySelector('#entryBox');

let addTask = document.querySelector('#addTask')

let removeTask = document.querySelector('#removeCompleted');

let removeAll = document.querySelector('#removeAll');

let list = document.querySelector('ol')




addTask.addEventListener('click',function(event){
    event.preventDefault();
    //console.log('item added');

    let li = document.createElement('li');
    li.innerHTML = entryBox.value
    //console.log(li)
    list.appendChild(li);

    entryBox.value = ''

})

removeAll.addEventListener('click',function(event){
    event.preventDefault();
    let items = document.querySelectorAll('#theList li');
    for (let i = 0; i < items.length; i++) {
        list.removeChild(items[i])
        
    }

})






