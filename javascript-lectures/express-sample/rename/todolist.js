$(function(){    //this function runs only when the page is completely loaded
    let newtodo=$('#newtodo')
    let addtodobtn=$('#addtodo')
    let todolist=$('#todolist')
    addtodobtn.click(function(){  //this function runs when addtodobtn is clicked
       let new_todo=newtodo.val()
    $.post(                      //(fn contains 3 arguments)this command makes request to the server from the current page and some data gets downloaded and it returns back to the same page
        '/todo',        //path where we want to send the request 
        {task:new_todo},  //body: it consists the content in js and it 
        function (data){        //this fucntion is called when response is sent from server to current page
            todolist.empty()
            for(abc of data){  
                todolist.append("<li>"+abc.task+"</li>")
            }
        }
    )
    })
})

