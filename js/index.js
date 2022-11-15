import Model from './model.js'
import View from './view.js'

// document.addEventListener('DOMContentLoaded', function(){
document.addEventListener('DOMContentLoaded', () => { //the same thing has before    
    //instancias clases
    const model = new Model();
    const view = new View();

    model.setView(view);
    view.setModel(model);


    view.render();//for each create row

});