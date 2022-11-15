export default class Filters{
    constructor(){
        this.form = document.getElementById('filters');
        this.btnsearch = document.getElementById('search');
    }
    onClick(callback){//pass event 
        this.btnsearch.onclick = (e) => {
            e.preventDefault();//don't sent info to server also do not refresh
            // var opt = ''; //it's not bad but can be improved
            // console.log('opt');
            // if (this.form[0].checked === true){
            //     opt = this.form[0].value;
            // } else if (this.form[1].checked === true){
            //     opt = this.form[1].value;
            // } else {
            //     opt = this.form[2].value;
            // }
            const data = new FormData(this.form); //https://developer.mozilla.org/en-US/docs/Web/API/FormData/get
            callback({
                type:data.get('type'),
                words:data.get('words'),
            })
        }
    }
}

