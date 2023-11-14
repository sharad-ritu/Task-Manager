
const getallTasks = (req, res) => {
    res.send("all the items");
};

const createTask = (req, res) => {
    res.json(req.body);
};

const getsingleTask = (req, res) => {
    res.json({id: req.params.id});
};

const updateTask = (req, res) => {
    res.send("update tasks");
};

const deleteTask = (req, res) => {
    res.send("delete tasks");
};

module.exports = {
    getallTasks,
    createTask,
    getsingleTask,
    updateTask,
    deleteTask
}