
function Job(jobName) {
    this.jobName = jobName;
    this.tasks = [];
}

function Task(taskName) {
    this.taskName = taskName;
}

function hoursOptions() {
    const hoursIncrement = 0.5,
          minHours = 0.5,
          maxHours = 12;
    var optionsArray = [];

    for (var i = minHours; i <= maxHours; i += hoursIncrement) {
        optionsArray.push(i);
    }

    return optionsArray;
}

function VM() {
    this.selectedJob = Job;
    this.selectedTask = Task;
    this.jobName = "";
    this.taskName = "";
    this.jobList = ko.observableArray([new Job("job1")]);
    this.taskList = ko.observableArray([new Task("task1")]);
    this.jobs = ko.observableArray();
    this.taskHours = 0;

    this.addJob = function() {
        var objectToAdd = new Job(this.jobName);

        if (objectToAdd.jobName === "") return;

        for (var i = 0; i < this.job().length; i++) {
            if (objectToAdd.jobName === this.jobs()[i].jobName) {
                //this.labelText() = "Job name already exists"; // not working
                return;
            }
        }
        this.jobList.push(objectToAdd);
    };

    this.addTask = function() {
        var taskToAdd = new Task(this.taskName);

        if (taskToAdd.taskName === "") return;

        for (var i = 0; i < this.taskList().length; i++) {
            if (taskToAdd.taskName === this.taskList()[i].taskName) {

                return;
            }
        }
        this.taskList.push(taskToAdd);
    };

    this.removeJob = function(job) {
        viewModel.jobs.remove(job);
    };

    this.submitTask = function () {

        this.selectedJob.tasks.push(this.selectedTask);
        this.jobs().push(this.selectedJob);

        // add selected hours to task object
    };
}

ko.applyBindings(new VM);
