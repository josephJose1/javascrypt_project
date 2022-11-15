export default class Model {
    //is not necessary to define function
    constructor(){
        this.view = null;
        // this.todos = [];
        this.todos = JSON.parse(localStorage.getItem('todos'));
        if (!this.todos || this.todos.length < 1){
            this.todos = [
                {
                    id:0,
                    title:'Learn JS',
                    descr:'Watch JS Tutorials',
                    completed:false
                }
            ]
            this.currentId = 1;
        } else {
            //this.currentId = this.todos[-1].id + 1; //this is python lol xD
            this.currentId = this.todos[this.todos.length - 1].id + 1;
        }
        
    }

    setView(view){
        this.view = view;
    }

    save(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
    }

    getTodos(){
        return this.todos; //cannot be original
    }
    // simulation of DB , assing identifier. 
    addTodo(title, descr){
        // console.log(title, descr);
        // new object to store using key, value
        const todo = {
            id: this.currentId++,
            title,              //title: title, //remove redundancy
            descr,       //descr: descr, //remove redundancy
            completed: false,

        }
        console.log(todo);
        // console.log(todo['id']);
        // console.log(todo.id);
        // add to our t db, in this case an array
        this.todos.push(todo);
        this.save();
        //returna clone of entire todo to the View
        //return Object.assign({}, todo);//old way but acceptable
        return {...todo};
    }

    findTodo(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }

    editTodo(id,values){
        const index = this.findTodo(id) //find element
        // const todo = this.todos[index];
        // todo.title = values.title;
        // todo.descr = values.descr;
        // todo.completed = values.completed;
        Object.assign(this.todos[index], values);
        this.save();
    }

    removeTodo(id){ //function recibe functions
        const index = this.findTodo(id) //find element
        console.log(this.todos[index]);
        this.todos.splice(index, 1); //delete from todo array storage
        this.save();
    }

    toggleCompleted(id, checked){
        const index = this.findTodo(id) //find element
        const todo = this.todos[index];
        // todo.completed = !todo.completed;
        if (checked == true){
            todo.completed = true;
        } else {
            todo.completed = false;
        }
        console.log(todo);
        this.save();
        return {...todo};//expansion
    }
}