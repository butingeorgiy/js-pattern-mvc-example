export default class TodoModel {
    storage = [];

    constructor() {
        const storage = localStorage.getItem('goals');

        if (storage !== null) {
            this.storage = JSON.parse(storage);
        }
    }

    add(title) {
        let maxId = 0;

        this.storage.forEach(goal => {
            if (goal.id > maxId) { maxId = goal.id; }
        });

        const newGoal = {
            id: maxId + 1,
            title
        };

        this.storage.push(newGoal);
        this.store();

        return newGoal;
    }

    remove(id) {
        this.storage.forEach((goal, index) => {
            if (goal.id === id) { this.storage.splice(index, 1); }
        });

        this.store();

        return this.storage;
    }

    store() {
        localStorage.setItem('goals', JSON.stringify(this.storage));
    }
}