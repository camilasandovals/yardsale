let tasks = [];

if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  renderTasks()
}
// function addTask() {
  
//   const taskValue = document.querySelector('input[type="text"]').value
//   if(!taskValue) return;
//   task.push(taskValue)
//   console.log(task)
//   const li = document.createElement('li')
  
//   // checkbox
//   const checkbox = document.createElement('input')
//   checkbox.type = 'checkbox'

//   checkbox.addEventListener('change', function(){
//     if(this.checked) {
//       this.parentElement.classList.add('completed')
//     } else {
//       this.parentElement.classList.remove('completed')
//     }
//   })

//   // remove button
//   const remove = document.createElement('button')
//   remove.textContent = 'Remove'
//   remove.addEventListener('click', function() {
//       this.parentElement.remove()
//   })

//   // 
//   const task = document.createTextNode(taskValue)


//   li.appendChild(task)
//   li.appendChild(checkbox)
//   li.appendChild(remove)
//   document.querySelector('section ul').append(li)
//   document.querySelector('input[type="text"]').value = ''
// }

function addTask() {
  const taskValue = document.querySelector('input[type="text"]').value
  if(!taskValue) return
  
  tasks.push(taskValue);
  localStorage.setItem('tasks', JSON.stringify(tasks))
  //clear de input 
  document.querySelector('input[type=text]').value = ''

  renderTasks()
}

function renderTasks(){
  const ul = document.querySelector('section ul')

  ul.innerHTML = ''

  tasks.forEach(taskValue => {
    const li = document.createElement('li')

    //checkbox
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', function() {
      if(this.checked){
        this.nextSibling.classList.add('completed')
      } else {
        this.nextSibling.classList.remove('completed')
      }
    })

    //task 
    const taskText = document.createElement('span')
    taskText.textContent = taskValue;

    //Remove

    const remove = document.createElement('button')
    remove.textContent = 'Remove'
    remove.addEventListener('click', function() {
      const index = tasks.indexOf(taskValue)
      tasks.splice(index, 1);
      renderTasks();
    })
    li.appendChild(checkbox)
    li.appendChild(taskText)
    li.appendChild(remove)
    ul.appendChild(li)
  })


}

