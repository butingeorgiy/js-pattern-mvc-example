export default class TodoView {
    constructor(goal, node) {
        this.goal = goal;
        this.node = node;

        this.render = this.render.bind(this);
        this.remove = this.remove.bind(this);
    }

    render() {
        const goalElement = document.createElement('li');
        goalElement.classList.add('goal-item');
        goalElement.innerHTML = `
            <span>${ this.goal.title }</span>
            <button class="remote-goal-btn">Remove</button>
        `;

        this.node.append(goalElement);
        this.element = goalElement;

        return goalElement;
    }

    remove() {
        this.element.remove();
    }

    static showEmptyIndicator() {
        document.querySelector('#emptyListIndicator').style.display = '';
    }

    static hideEmptyIndicator() {
        let indicator = document.querySelector('#emptyListIndicator');
        if (indicator.style.display !== 'none') { indicator.style.display = 'none'; }
    }
}