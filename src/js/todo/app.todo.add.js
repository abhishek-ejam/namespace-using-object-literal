app.todo.add = {
    task_name: document.getElementById('task_name'),
    btn_add_task: document.getElementById('btn_add_task'),

    init: function () {
        this.bind_events();
    },

    bind_events: function () {
        this.btn_add_task.addEventListener('click', this.add_task.bind(this));
    },

    add_task: function () {
        var task = this.create_task(this.task_name.value);

        app.todo.incomplete.wrapper.appendChild(task);
        app.todo.incomplete.bind_events(task);

        this.task_name.value = "";
    },

    create_task: function (task_name) {
        var task = document.createElement('div'),
            label = document.createElement("label"),
            button = document.createElement("button");

        label.innerHTML = task_name;
        button.innerText = 'Complete';
        button.classList.add('complete');

        task.appendChild(label);
        task.appendChild(button);

        return task;
    }
}