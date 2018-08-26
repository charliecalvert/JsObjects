let todoStore = TodoStore();

// let todo = { title : "A new task" };
let todo = Object.freeze({ title : "A new task" });

todoStore.add(todo);

//somewhere after
todo.title = "";

//getting data from todoStore
let todos = todoStore.get();

todos; //{title: ""}

function TodoStore(){
    let todos = [];
    function add(todo){
        todos.push(todo);
    }

    function get(){
        return todos;
    }

    return Object.freeze({
        add,
        get
    });
}