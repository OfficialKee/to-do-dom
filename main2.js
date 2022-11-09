let main = document.querySelector('main')

let inputBox = document.querySelector('#inputBox');

let addToList = document.querySelector('#addButton');

let editList = document.querySelector('#editButton')

let deleteCompleted = document.querySelector('#deleteCompleted');

let deleteAll = document.querySelector('#deleteAll')

let completion = ' completed'




addToList.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let div = document.createElement('div')
    let toDoitem = document.createElement('input');

    toDoitem.value = inputBox.value
  toDoitem.setAttribute('readonly',true)
   toDoitem.classList.add('edit')
    main.append(div)
    main.append(toDoitem)

    toDoitem.addEventListener('click',(e)=>{
        e.preventDefault;

      
     if(toDoitem.classList.contains('completed') || toDoitem.hasAttribute('readonly')===false){
            toDoitem.classList.remove('completed')
            toDoitem.style.background= ''
          
        }else if(toDoitem.hasAttribute('readonly')===true && !toDoitem.classList.contains('completed')){
            toDoitem.classList.add('completed');
            toDoitem.style.background = 'red'

        }


    })

    

    inputBox.value = ''
})

editList.addEventListener('click',(e)=>{
    e.preventDefault()
    let editables = document.querySelectorAll('.edit');

  
    editables.forEach(item =>{

    if(item.hasAttribute('readonly')===true){
        item.removeAttribute('readonly')
       }
        else if(item.hasAttribute('readonly')===false){
        item.setAttribute('readonly',true)
       }
    })
    })



deleteCompleted.addEventListener('click',(e)=>{
        e.preventDefault();
        let toBeDeleted = document.querySelectorAll('.completed');

toBeDeleted.forEach(item =>{
    item.remove(); })

        
    })




deleteAll.addEventListener('click',(e)=>{
    e.preventDefault;

    let toBeDeleted = document.querySelectorAll('.completed');

toBeDeleted.forEach(item =>{
    item.remove();
})

})