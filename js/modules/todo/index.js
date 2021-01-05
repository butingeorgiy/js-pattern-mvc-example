import TodoController from './TodoController.js';
import TodoModel from './TodoModel.js';

const input = document.querySelector('#newGoalInput');
const btn = document.querySelector('#saveGoalBtn');
const container = document.querySelector('#goalsContainer');

if (input && btn && container) {
    new TodoController(btn, input, container, new TodoModel());
}