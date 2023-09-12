(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function d(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();let T;const v=new Uint8Array(16);function S(){if(!T&&(T=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!T))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return T(v)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function C(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const L=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:L};function E(e,t,a){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const d=e.random||(e.rng||S)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){a=a||0;for(let o=0;o<16;++o)t[a+o]=d[o];return t}return C(d)}class g{constructor(t){this.id=E(),this.description=t,this.done=!1,this.createAt=new Date}}const c={All:"All",Completed:"Completed",Pending:"Pending"},l={todos:[new g("estudiar angular"),new g("estudiar vanilla javascript"),new g("estudiar vue"),new g("estudiar reac")],filter:c.All},A=()=>{w()},w=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},f=()=>{localStorage.setItem("state",JSON.stringify(l))},P=(e=c.All)=>{switch(e){case c.All:return[...l.todos];case c.Completed:return l.todos.filter(t=>t.done);case c.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is not valid`)}},U=e=>{if(!e)throw new Error("description is required");l.todos.push(new g(e)),f()},k=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},I=e=>{l.todos=l.todos.filter(t=>t.id!==e),f()},x=()=>{l.todos=l.todos.filter(e=>!e.done),f()},O=(e=c.All)=>{if(console.log(e),!Reflect.has(c,e))throw new Error("there is no such property");l.filter=e,f()},q=()=>l.filter,i={initStore:A,loadStore:w,getTodos:P,addTodo:U,toggleTodo:k,deleteTodo:I,deleteCompleted:x,setFilter:O,getCurrentFilter:q},D=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,M=e=>{if(!e)throw new Error(" A tODO object is required ");const{done:t,description:a,id:d}=e,o=`
    
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${a}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `,r=document.createElement("li");return r.innerHTML=o,r.setAttribute("data-id",d),t&&r.classList.add("completed"),r};let h;const F=(e,t=[])=>{if(h||(h=document.querySelector(e)),!h)throw new Error(`Element ${e} not found`);h.innerHTML="",t.forEach(a=>{h.append(M(a))})},m={ClearCompleted:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",DeleteTodo:".destroy",TodoFilters:".filtro",todosPending:"#pending-count"},N=e=>{const t=()=>{const n=i.getTodos(i.getCurrentFilter());a(),F(m.TodoList,n)},a=()=>{const n=i.getTodos(c.Pending),u=document.querySelector(m.todosPending);u.innerHTML=n.length,console.log(n)};(()=>{const n=document.createElement("div");n.innerHTML=D,document.querySelector(e).append(n),i.initStore(),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),r=document.querySelector(m.ClearCompleted),p=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",n=>{n.keyCode===13&&n.target.value.trim().length!==0&&(i.addTodo(n.target.value),t(),n.target.value="")}),o.addEventListener("click",n=>{const u=n.target.closest("[data-id]");i.toggleTodo(u.getAttribute("data-id")),t()}),o.addEventListener("click",n=>{const u=n.target.className==="destroy",y=n.target.closest("[data-id]");!y||!u||(i.deleteTodo(y.getAttribute("data-id")),t())}),r.addEventListener("click",n=>{i.deleteCompleted(),t()}),p.forEach(n=>{n.addEventListener("click",u=>{switch(p.forEach(y=>y.classList.remove("selected")),u.target.classList.add("selected"),u.target.text){case"Todos":i.setFilter(c.All);break;case"Pendientes":i.setFilter(c.Pending);break;case"Completados":i.setFilter(c.Completed);break}t()})})};i.initStore();N("#app");
