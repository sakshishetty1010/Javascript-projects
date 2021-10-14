const form = document.querySelector('#form');
const input = document.querySelector('#input');
const ul = document.querySelector('.todos')

form.addEventListener('submit',e=>{
    e.preventDefault();
    let todo = input.value;
    if(todo){
        const li = document.createElement('li');
        li.innerText = todo;
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
        });
        li.addEventListener('contextmenu',e=>{
            e.preventDefault();
            li.remove();
        });
        ul.appendChild(li);
        input.value="";
    }

});

function addTodo(todo){
    
}