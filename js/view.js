import AddTodo from "./components/add-todo.js";
import Modal from "./components/modal.js"; 

export default class View{
    constructor(){
        this.model = null;
        this.table = document.getElementById("table");
        this.addTodoForm = new AddTodo(); //instance
        
        this.myModal = new Modal();
        // this.addTodoForm.onClick(this.addTodo); //we can't //with this will break our system
        this.addTodoForm.onClick((title, descr) => this.addTodo(title, descr)); //function anonimy, then execute our function with parameter
        // this.addTodoForm.onClick((title, description) => this.addTodo(title, description));
        //new callback
        this.myModal.onClick((id, values) => this.editTodo(id, values));

       this.myModal.closebtn.onclick = () => {
            this.myModal.hideModal();
        }
        this.myModal.xbtn.onclick = () => {
            this.myModal.hideModal();
        }
    }
    //table managment 
    setModel(model){
        this.model = model;
    }

    render(){
        const todos = this.model.getTodos();
        // for (const todo of todos) {
            // this.createRow(todo);
        // }
        todos.forEach((todo) => this.createRow(todo));//functional programming
       
    }

    addTodo(title, descr){
        // console.log(title, descr);
        const todo =this.model.addTodo(title, descr);
        this.createRow(todo);
        //todo.title = 'YouTube'; //we change this value but this cannot be possible
        // console.log(this.model.todos);

    }
    removeTodo(myid){
        this.model.removeTodo(myid); //remove from model
        document.getElementById(myid).remove(); //remove from view
    }

    toogleCompleted(id, checked){
        const todo =this.model.toggleCompleted(id, checked);
        //underline td rows todo

    }

    toggleModal(todo){
        this.myModal.showModal();//
        this.myModal.setValues(todo);
        
    }

    editTodo(id, values){
        // console.log(id);
        // console.log(values);
        this.model.editTodo(id, values);
        const row = document.getElementById(id);
        row.children[0].innerText = values.title;   
        row.children[1].innerText = values.descr;  
        row.children[2].children[0].checked = values.completed;

    }

    createRow(todo){
        // Find a <table> element with id="table" and it's body:
        //var table = document.getElementById("table");
        var tablebody = this.table.children[1]
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = tablebody.insertRow(-1);
        row.setAttribute('id', todo.id);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = todo.title;
        cell2.innerHTML = todo.descr;
        // cell3.innerHTML = 'obj3';
        const node = document.createElement('input');
        cell3.classList.add('text-center');
        node.type = 'checkbox';
        //    node.value = true;
        node.checked = todo.completed;
        node.onclick = () => {
        this.toogleCompleted(todo.id, node.checked);
        }

        cell3.appendChild(node);

        // cell4.innerHTML = 'obj4';
        cell4.classList.add('text-right');
        cell4.innerHTML = `
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>`
        cell4.children[0].onclick = () => {
            this.toggleModal(todo);
        }
        // cell4.children[0].setAttribute('data-toggle','modal');
        // cell4.children[0].setAttribute('data-target','#modal');


        const nodebtn = document.createElement('button');
        nodebtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        const inode = document.createElement('i');
        inode.classList.add('fa', 'fa-trash');
        nodebtn.appendChild(inode);
        cell4.appendChild(nodebtn);
        //    nodebtn.onclick = function (e){
        //    this.removeTodo(row.getAttribute('id'));
        //    }
        nodebtn.onclick = () => {
            this.removeTodo(todo.id);
        }
    }
}
