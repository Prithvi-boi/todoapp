
let ul = document.getElementById("my_ul")
let inputTask = document.getElementById("inputtask")

let completedcount = 0
let completedelmt = document.getElementById('Complete_count')

let Uncompletedcount = 0
let Uncompletedelmt = document.getElementById('Uncomplete_count')


// Add task button
let addbtn = document.getElementById("Addtask").addEventListener("click",function () {

    let li = document.createElement('li')

        //  Mark Button
        let markbtn = document.createElement('span')
            markbtn.classList.add('Mark')
            
        
        //  paragraph tag --> Task text
        let p = document.createElement('p')
            p.classList.add('task_txt')
            p.innerText = inputTask.value

        //  Delete and Edit Button
        let buttons = document.createElement('span')
            let deletebtn = document.createElement('button')
                deletebtn.classList.add('deletebtn')
                deletebtn.innerText = 'Delete'

            let editbtn = document.createElement('button')
                editbtn.classList.add('editbtn')
                editbtn.innerText = 'Edit'
        
        buttons.appendChild(deletebtn)
        buttons.appendChild(editbtn)

    li.appendChild(markbtn)
    li.appendChild(p)
    li.appendChild(buttons)
    ul.appendChild(li)

    inputTask.value = ''

    Uncompletedcount++
    Uncompletedelmt.innerText = Uncompletedcount

    let markflag = false
    markbtn.addEventListener('click',function () {
        if (markflag == false) {
            markbtn.style.backgroundColor = '#00FF38'
            p.style.textDecoration = 'line-through'
            p.style.color = '#787878' 
            markflag = true
            completedcount++
            completedelmt.innerText = completedcount
            Uncompletedcount--
            Uncompletedelmt.innerText = Uncompletedcount
        } else {
            markbtn.style.backgroundColor = 'white'
            p.style.textDecoration = 'none'
            p.style.color = 'white'
            markflag = false
            completedcount--
            completedelmt.innerText = completedcount
            Uncompletedcount++
            Uncompletedelmt.innerText = Uncompletedcount
        }
    },false)

    deletebtn.addEventListener('click',function () {
        ul.removeChild(li)
        if (markflag == false) {
            Uncompletedcount--
            Uncompletedelmt.innerText = Uncompletedcount
        } else {
            completedcount--
            completedelmt.innerText = completedcount
        }
    },false)

    let editflag = false 
    let editedtask = document.createElement('input')
    editbtn.addEventListener('click',function () {
         // Add input text inplace of p text
            editedtask.setAttribute("type", "text")
            editedtask.setAttribute("placeholder", p.innerText)
                editedtask.style.height = '50px'
                editedtask.style.width = '785px'
                editedtask.style.backgroundColor = 'rgb(35, 35, 35)'
                editedtask.style.border = 'solid 0px rgb(35, 35, 35)'
                editedtask.addEventListener('focus',function () {
                    editedtask.style.outline = 'none'
                })
                editedtask.style.fontSize = '30px'
                editedtask.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow', 'Arial, sans-serif'

    
        if (editflag == false) {
            editflag = true
                editbtn.style.backgroundColor = '#00b912ff'
                editbtn.style.textShadow = '1px 1px black'
                editbtn.textContent = 'Save'
                editbtn.style.fontWeight = 'bold'
            p.innerText = ''
            p.appendChild(editedtask)
            editedtask.focus()
        } else {
            editflag = false
                editbtn.style.backgroundColor = 'blue'
                editbtn.style.textShadow = '0px 0px black'
                editbtn.textContent = 'Edit'
                editbtn.style.fontWeight = 'none'
            p.textContent = editedtask.value
            p.removeChild(editedtask)
        }
        
    },false)

},false)
