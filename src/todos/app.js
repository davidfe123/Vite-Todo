import todoStore, { Filters } from '../store/todo.store';
import html from './app.html?raw';
import { renderTodos } from './use-cases';

const elementIds ={
    ClearCompleted:'.clear-completed',
    TodoList:'.todo-list',
    NewTodoInput:'#new-todo-input',
    DeleteTodo:'.destroy',
    TodoFilters:'.filtro',
    todosPending:'#pending-count'
    
}
/**
 * 
 * @param {String} elementId
 */
export const App = (elementId)=>{

    const displayTodos = () =>{
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        todosPending();
        renderTodos(elementIds.TodoList,todos);
    }

    const todosPending=()=>{
        const pendingTodos = todoStore.getTodos(Filters.Pending);
        const htmlTodosPeding = document.querySelector(elementIds.todosPending);
        htmlTodosPeding.innerHTML = pendingTodos.length
        console.log(pendingTodos)
    }

    //cuando la funcion app() se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        todoStore.initStore();
        displayTodos();
    })();

    // referencia html
    const newDescriptionInput = document.querySelector(elementIds.NewTodoInput);
    const todoListUl = document.querySelector(elementIds.TodoList);
    const clearCompleted = document.querySelector(elementIds.ClearCompleted);
    const filtersUl = document.querySelectorAll(elementIds.TodoFilters);

    // listeners
    newDescriptionInput.addEventListener('keyup',(event)=>{
        if(event.keyCode !== 13) return;
        if(event.target.value.trim().length === 0) return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    })

    todoListUl.addEventListener('click',(event)=>{
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    todoListUl.addEventListener('click',(event)=>{
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if(!element || !isDestroyElement) return;

        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    clearCompleted.addEventListener('click',(event)=>{
        todoStore.deleteCompleted();
        displayTodos();
    })

    filtersUl.forEach(element =>{

        element.addEventListener('click',(elemento)=>{
            filtersUl.forEach(el =>el.classList.remove('selected'));
            elemento.target.classList.add('selected')
            switch (elemento.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;

                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                break;

                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                break; 
            }
            displayTodos();
        })

    })

    

}