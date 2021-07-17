app.todo.completed = {
    
    wrapper: document.querySelector('.completed-list'),
    
    bind_events: function (task) {
    	var btn_delete = task.querySelector('.delete')
    	btn_delete.onclick = this.delete_completed_task;
    },

    delete_completed_task: function(){
    	var current_task = this.parentNode;
    	current_task.remove();
    }
}