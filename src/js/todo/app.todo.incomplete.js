app.todo.incomplete = {
    
    wrapper: document.querySelector('.incomplete-list'),

    bind_events: function(task){
    	var btn_complete = task.querySelector('.complete');
    	btn_complete.onclick = this.move_completed_task;
    },

    move_completed_task: function(){
    	var current_task = this.parentNode;
    	
    	var btn_complete = current_task.querySelector('.complete');
    	btn_complete.remove();

    	var btn_delete = document.createElement('button');
    	btn_delete.innerText = 'Delete';
        btn_delete.classList.add('delete');

        current_task.appendChild(btn_delete);

        app.todo.completed.wrapper.appendChild(current_task);

        app.todo.completed.bind_events(current_task);
    }
}