const Task = require('../../src/models/Task');

describe('Task Model Tests', () => {
    it('should create a new task', async () => {
        const task = new Task({
            title: 'Test Task',
            description: 'Test Description',
            dueDate: '2024-03-20',
            category: 'Work',
            priority: 'High'
        });
        await expect(task.save()).resolves.toBeDefined();
    });
});
