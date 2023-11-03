
const inputElement=document.getElementById("title")
const buttonAdd=document.getElementById("create")
const listElement=document.getElementById("list")
const notes = [
    {
        title:"якийсь запис 1",
        completed: false,
    },
    {
        title:"якийсь запис 2",
        completed: false,
        },
    ]

buttonAdd.onclick=function(){
    if (inputElement.value.length===0){
        return
    } 
    const newNote={
        title:inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value=""
}

function getNoteTemplete(note,index){
    return `<li>
    <span class="${note.completed ? 'text-decoration-line-through' : '' }">${note.title}</span>
    <span>
        <button class="${note.completed ? 'bg-success' : 'bg-warning' }" data-index="${index}" data-type="toogle">&check;</button>
        <button class="bg-danger" data-index="${index}" data-type="remove">&times;</button>             
    </span>
</li>`
}

function render(){
    listElement.innerHTML=''
    if (notes.length===0){
        listElement.innerHTML='<p>noy elements</p>'
    }
    for (let i=0; i<notes.length;i++){
        listElement.insertAdjacentHTML('beforeend',getNoteTemplete(notes[i],i))
    }
}
render()

listElement.onclick=function(event){
    if (event.target.dataset.type==="toogle"){
        notes[event.target.dataset.index].completed=!notes[event.target.dataset.index].completed  
    } else if (event.target.dataset.type==="remove"){
        notes.splice(event.target.dataset.index,1)
    }
    render()
}
