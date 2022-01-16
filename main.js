let  input=document.querySelector("form").addEventListener('submit',addTodo)

let  mainDiv=document.querySelector(".list")
mainDiv.addEventListener('click',deleteCheck)


let todoList=JSON.parse(localStorage.getItem("todoTodo"))
// let todoList=[]
display(todoList)


function addTodo(e){
    e.preventDefault()
    let list =document.querySelector("#todolist").value
    // console.log(list);
    
    let taskListObj={listItem:list}
    todoList.push(taskListObj)
    localStorage.setItem("todoTodo",JSON.stringify(todoList))
    display(todoList)
    list.value=""
}


// console.log(todoList);
// mainDiv.innerHTML=""



function display(todoList){
    todoList.map(function(elem){
        mainDiv.innerHTML=""
          let listDiv =document.createElement("div")
          listDiv.classList.add('todo-div')

          let disList=document.createElement("div")
          disList.textContent=elem.listItem

          let btnDiv1= document.createElement('div') 
          btnDiv1.textContent="Completed"                                          
          btnDiv1.classList.add('completed')


          let btnDiv2= document.createElement('div') 
          btnDiv2.classList.add('Delete')
          btnDiv2.textContent="Delete"                                          

          

          listDiv.append(disList,btnDiv1,btnDiv2)


          mainDiv.append(listDiv)
          
      })  
}

function deleteCheck(e){
    const item=e.target;
    if(item.classList[0]==='completed'){
        const todo=item.parentElement;
        todo.remove()
    }
   
    // 
    if(item.classList[0]==='delete'){
        const todo=item.parentElement;
        todo.classList.toggle("deleted")
        
    }

}