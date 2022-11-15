import Alert from "./alert.js";
export default class AddTodo {
    constructor() {
        this.btn = document.getElementById('add');  
        this.title = document.getElementById("title");
        this.descr = document.getElementById("description");
        this.message = 'Add succesfully';

        this.alertForm = new Alert('alert');//instance alert

    }
    //function to function 
    onClick(callback) {
        this.btn.onclick = () => {
            if (this.title.value === '' && this.descr.value === ''){
                // Strict equality (===)
                // The strict equality operator (===) checks whether its two operands 
                // are equal, returning a Boolean result. Unlike the equality operator, 
                // the strict equality operator always considers operands of different 
                // types to be different. 
                
                this.message="Title and description must be filled out";
                // console.error(this.message);
                this.alertForm.show(this.message);
            } else if (this.title.value === '' && this.descr.value !== ''){
                this.message="Title must be filled out";
                this.alertForm.show(this.message);
            } else if (this.title.value !== '' && this.descr.value === ''){
                this.message="Description must be filled out";
                this.alertForm.show(this.message);
            } else {
                this.alertForm.hide('Added sucessfully!!');
                callback(this.title.value, this.descr.value);
            }
        }
    }
}