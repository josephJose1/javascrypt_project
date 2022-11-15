import Alert from "./alert.js";
export default class Modal{
    constructor(){
        this.mymodal = document.getElementById('modal');
        this.title = document.getElementById('modal-title');
        this.descr = document.getElementById('modal-description');
        this.completed = document.getElementById('modal-completed');
        this.btn = document.getElementById('modal-btn');//save btn
        this.xbtn = document.getElementById('close-top-modal');//x btn
        this.closebtn = document.getElementById('close-footer-modal');//x btn
        this.back = document.getElementById('backdrow-modal');
        //storage id
        this.todo = null;

        this.alert = new Alert('modal-alert');//instance
    }
    showModal(){
        this.mymodal.classList.add('show');
        this.mymodal.style.display='block';
        this.back.classList.add('modal-backdrop', 'fade', 'show');

    }
    hideModal(){
        this.mymodal.classList.remove('show');
        this.mymodal.style.display='none';
        this.back.classList.remove('modal-backdrop', 'fade', 'show');

    }
    setValues(todo){
        this.todo = todo;
        this.title.value = todo.title;
        this.descr.value = todo.descr;
        this.completed.checked = todo.completed;
    }
    onClick(callback) {
        this.btn.onclick = () => {
            console.log("this message")
            if (!this.title.value && !this.descr.value){//nully and faksy
                // Strict equality (===)
                // The strict equality operator (===) checks whether its two operands 
                // are equal, returning a Boolean result. Unlike the equality operator, 
                // the strict equality operator always considers operands of different 
                // types to be different. 
                
                this.message="Title and description must be filled out";
                this.alert.show(this.message);
                return;
            } else if (!this.title.value && this.descr.value !== ''){
                this.message="Title must be filled out";
                this.alert.show(this.message);
                return;
            } else if (this.title.value !== '' && !this.descr.value){
                this.message="Description must be filled out";
                this.alert.show(this.message);
                return;
            } else {
                this.hideModal();
                console.error("ok");
                callback(this.todo.id,{
                    title:this.title.value,
                    descr:this.descr.value,
                    completed:this.completed.checked
                });
                

            }
        }
    };
    
}