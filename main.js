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

let list = document.querySelector('ol');




addTask.addEventListener('click',(e)=>{
    e.preventDefault();

    if(!entryBox.value){
    alert('Please enter a task!');
}else{
    let li = document.createElement('li');
    li.innerHTML = entryBox.value;
    list.appendChild(li);

    
    li.addEventListener('click',()=>{
        if(li.style.textDecoration === 'line-through'){
            li.style.textDecoration = ''
            li.classList.remove('completed')
        }else if(li.style.textDecoration === ''){
            li.style.textDecoration = 'line-through';
            li.classList.add('completed');
        }

        
    })
}
    entryBox.value = '';

})

removeAll.addEventListener('click',(e)=>{
    e.preventDefault();
    let items = document.querySelectorAll('#theList li');
    for (let i = 0; i < items.length; i++) {
        list.removeChild(items[i]);
        
    };

});


removeTask.addEventListener('click',(e)=>{
    e.preventDefault();
    let toBeDeleted = document.querySelectorAll('.completed');

toBeDeleted.forEach(item =>{
    item.remove();
})

})








