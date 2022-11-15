export default class Alert{
    constructor(id){
        this.alertcomp = document.getElementById(id); //id ='alert'//modal-alert
        this.alertsuccess = document.getElementById('alertv2');
        this.myId = id;
        
    }
    show(message){
        
        this.alertcomp.classList.remove('d-none'); //keep in mind toggle option
        this.alertcomp.textContent = message;
        if (this.myId === 'alert'){
            this.alertsuccess.classList.add('d-none');
        }
        
    }
    hide(message){
        this.alertcomp.classList.add('d-none');
        if (this.myId === 'alert'){
            this.alertsuccess.classList.remove('d-none');
            this.alertsuccess.innerText = message;
        }
        
    }
}