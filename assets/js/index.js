document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('add');    

    // alternative to add event click listener 
    btn.addEventListener('click', validateForm);
    // btn.onclick = function(){
    //     const title = document.getElementById("title");
    //     const descr = document.getElementById("description");
    //     console.log('Description:', descr.value);
    //     console.log('Title:', title.value);
        
    // }
    function delete_row(){
        // var table = document.getElementById("table");
        var tdnode = this.parentNode;
        var rownode = tdnode.parentNode;
        console.log(rownode);
        rownode.remove();
        //https://www.w3schools.com/js/js_htmldom_navigation.asp
    }
    function removeTodo(myid){
        console.log(myid);
        document.getElementById(myid).remove();

    }

    function add_row(title, descr){


        // Find a <table> element with id="table" and it's body:
        var table = document.getElementById("table");
        var tablebody = table.children[1]
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = tablebody.insertRow(-1);
        //I want to know what is the last element #to set my new class button trash 
        var thelastrow = table.children[1].children.length;
        console.log(thelastrow);
        const myclass = 'myrow-' + thelastrow.toString();
        row.setAttribute('id', myclass);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = title;
        cell2.innerHTML = descr;
        // cell3.innerHTML = 'obj3';
        const node = document.createElement('input');
        cell3.classList.add('text-center');
        node.type = 'checkbox';
        
        cell3.appendChild(node);

        // cell4.innerHTML = 'obj4';
        cell4.classList.add('text-right');
        cell4.innerHTML = `
            <button class="btn btn-primary mb-1">
                <i class="fa fa-pencil"></i>
            </button>`
        const nodebtn = document.createElement('button');
        nodebtn.classList.add('btn', 'btn-danger', 'mb-1', 'ml-1');
        const inode = document.createElement('i');
        inode.classList.add('fa', 'fa-trash');
        nodebtn.appendChild(inode);
        cell4.appendChild(nodebtn);
        //add event to trash btn
        // nodebtn.addEventListener('click', delete_row);
        //add event onclick alternative
        nodebtn.onclick = function (e){
            removeTodo(row.getAttribute('id'));
        }
    };
    
    function change_alert(msg, opt){
    
        const alertcomp = document.getElementById('alert');
        const alertsuccess = document.getElementById('alertv2')
        
        
        if (opt === false){
            alertcomp.classList.remove('d-none'); //keep in mind toggle option
            alertsuccess.classList.add('d-none')
            alertcomp.textContent = msg
        } else {
            alertcomp.classList.add('d-none');
            alertsuccess.classList.remove('d-none');
            alertsuccess.textContent = msg
        }
    
    };
    
    function validateForm(){
        // const x = document.forms;
        // console.log(x)
        // console.log(x[0])
        // let title =x['myForm']['tittle'] undefined
        // Get the value of the input field with id = "numb"
        const title = document.getElementById("title").value;
        const descr = document.getElementById("description").value;
        var message = 'Add succesfully'
        console.log('Title:', title)
        console.log('Description:', descr)
    
        if (title === ''  && descr === ''){
            // Strict equality (===)
            // The strict equality operator (===) checks whether its two operands 
            // are equal, returning a Boolean result. Unlike the equality operator, 
            // the strict equality operator always considers operands of different 
            // types to be different. 
    
            message="Title and description must be filled out";
            change_alert(message,false);
            return false;
        } else if (title === ''  && descr != ''){
            message="Title must be filled out";
            change_alert(message, false);    
            return false;
        } else if (title != ''  && descr === ''){
            message="Description must be filled out";
            change_alert(message, false);
            return false;
        }
         else {
            // alert("Good Job!!");
            change_alert(message, true);
            add_row(title, descr);
            return true;
        }
        
    
    };
});




