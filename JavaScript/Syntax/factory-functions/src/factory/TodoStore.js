function TodoStore(dataService, userStore) {

    let todos = [];
    let eventEmitter = $.Callbacks();

    function setLocalTodos(newTodos) {
        todos = newTodos;
        eventEmitter.fire();
    }

    function addLocalTodo(todo) {
        todos.push(todo);
        eventEmitter.fire();
    }

    function fetch() {
        return dataService.get().then(setLocalTodos);
    }

    function add(todo) {
        return dataService.add(todo).then(addLocalTodo);
    }

    function toViewModel(todo) {
        return Object.freeze({
            id: todo.id,
            title: todo.title,
            userName: userStore.findById(todo.userId).name
        });
    }

    function descById(todo1, todo2) {
        return parseInt(todo2.id) - parseInt(todo1.id);
    }

    function getTodos() {
        return todos.map(toViewModel).sort(descById).slice(0, 5);
    }

    return Object.freeze({
        fetch,
        getTodos,
        add,
        onChange: eventEmitter.add
    });
}