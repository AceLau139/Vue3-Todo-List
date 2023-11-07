// ===== Vue ===== //
const urlAPI = `https://eudora-hsj.github.io/Vue-practice/data/todolist.json`;

const vm = Vue.createApp({
    data() {
        return {
            newTodo: '',
            apiData: [], // Save API data
            todos: [], // Save LocalStorage data
            visibilityList: [
                { name: '全部', value: 'all' },
                { name: '進行中', value: 'active' },
                { name: '已完成', value: 'completed' }
            ],
            visibility: 'all',
            cacheTodo: {},
            cacheTitle: ''
        };
    },
    created() {
        this.loadLocalStorage(); // Load data from LocalStorage
        this.getList(urlAPI); // Fetch API data
    },
    methods: {
        // API data
        getList(urlAPI) {
            fetch(urlAPI, {
                method: 'GET'
            })
                .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    throw new Error('Error fetching the data');
                })
                .then(data => {
                    this.apiData = data.data;
                    this.saveToLocalStorage(); // Save fetched data to LocalStorage
                })
                .catch(error => {
                    console.error(error);
                });
        },
        // Add new to-do
        addTodo() {
            let newTodoStr = this.newTodo.trim();
            if (!newTodoStr) {
                return;
            }
            this.newTodo = '';
            let submitData = {
                id: Math.floor(Date.now()),
                title: newTodoStr,
                completed: false,
            };
            this.todos.push(submitData);
            this.saveToLocalStorage();
        },
        // Remove to-do
        removeTodo(item) {
            this.todos.splice(this.getIndex(item.id), 1);
            this.saveToLocalStorage();
        },
        // Edit to-do
        editTodo(item) {
            this.cacheTodo = item;
            this.cacheTitle = item.title;
        },
        // Esc - Cancel edit
        cancelEdit() {
            this.cacheTodo = {};
        },
        // Enter - Submit edit
        doneEdit(item) {
            item.title = this.cacheTitle;
            this.cacheTitle = '';
            this.cacheTodo = {};
            this.saveToLocalStorage();
        },
        // Confirm clean all to-do
        confirmCleanAll(event){            
            if (confirm('確定要清除所有任務嗎？')) {
                this.cleanTodo(); // Call the cleanTodo function to clear all tasks
            }
        },
        // Clean all to-do
        cleanTodo() {
            this.todos.splice(0, this.todos.length);
            this.saveToLocalStorage();
        },
        getIndex(id) {
            return this.todos.findIndex(el => el.id == id);
        },
        changeComplated(id) {
            let index = this.getIndex(id);
            this.todos[index].completed = !this.todos[index].completed;
            this.saveToLocalStorage();
        },
        // Waiting for LocalStorage
        saveToLocalStorage() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        loadLocalStorage() {
            const savedTodos = localStorage.getItem('todos');
            console.log(savedTodos)
            if (savedTodos) {
                this.todos = JSON.parse(savedTodos);
            }
        }
    },
    computed: {
        // Change the tab
        filteredTodos() {
            let nowTab = this.visibility;
            switch (nowTab) {
                case 'all':
                    return this.todos.filter(item => true);
                case 'active':
                    return this.todos.filter(item => !item.completed);
                case 'completed':
                    return this.todos.filter(item => item.completed);
            }
        },
        getNewKey() {
            return Math.max(...this.todos.map(el => +el.id));
        },
        activeTodosLength() {
            return this.todos.filter(item => !item.completed).length;
        }
    },
    components: {
        
    }
}).mount('#app');