import TodoView from "./TodoView.js";

export default class TodoController {
    constructor(btn, input, container, model) {
        this.btn = btn;
        this.input = input;
        this.container = container;
        this.model = model;

        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.initGoals = this.initGoals.bind(this);

        this.btn.addEventListener('click', this.add);

        if (this.model.storage.length !== 0) {
            this.initGoals();
        }
    }

    initGoals() {
        TodoView.hideEmptyIndicator();

        this.model.storage.forEach(goal => {
            const todoView = new TodoView(goal, this.container);
            todoView.render().addEventListener('click', () => {
                this.remove(todoView);
            });
        });
    }

    add() {
        const goalTitle = this.input.value;

        if (goalTitle === '' || goalTitle === undefined) { return false; }

        const newGoal = this.model.add(goalTitle);

        const todoView = new TodoView(newGoal, this.container);
        const newGoalDomElement = todoView.render();

        TodoView.hideEmptyIndicator();

        this.input.value = '';

        newGoalDomElement.addEventListener('click', () => {
            this.remove(todoView);
        });
    }

    remove(todoView) {
        let storage = this.model.remove(todoView.goal.id);

        todoView.remove();

        if (storage.length === 0) { TodoView.showEmptyIndicator(); }
    }
}