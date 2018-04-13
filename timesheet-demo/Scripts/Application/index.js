
function Job(jobName) {
    this.name = jobName;
    this.tasks = [];
}

function Task(taskName) {
    this.name = taskName;
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
    var self = this;
    self.jobName = "";
    self.taskName = "";
    self.selectedJob = Job;
    self.selectedTask = Task;
    self.jobList = ko.observableArray([new Job("job1")]);
    self.taskList = ko.observableArray([new Task("task1")]);
    self.jobs = ko.observableArray();
    self.taskHours = 0;
    self.errorLabel = ko.observable();

    //self.addJob = function () {
    //    var jobToAdd = new Job(self.jobName);

    //    if (jobToAdd.jobName === "") return;

    //    for (var i = 0; i < self.jobList().length; i++) {
    //        if (jobToAdd.jobName === this.jobList()[i].jobName) {
    //            self.errorLabel = "Job name already exists";
    //            return;
    //        }
    //    }
    //    this.jobList.push(jobToAdd);
    //};

    //self.addTask = function () {
    //    var taskToAdd = new Task(this.taskName);

    //    if (taskToAdd.taskName === "") return;

    //    for (var i = 0; i < this.taskList().length; i++) {
    //        if (taskToAdd.taskName === this.taskList()[i].taskName) {

    //            return;
    //        }
    //    }
    //    this.taskList.push(taskToAdd);
    //};

    self.addJob = function () {
        if (self.isValidEntry(self.jobName, self.jobList())) {
            self.jobList.push(new Job(self.jobName));
        }
    }

    self.addTask = function () {
        if (self.isValidEntry(self.taskName, self.taskList())) {
            self.taskList.push(new Task(self.taskName));
        }
    }

    self.isValidEntry = function (item, list) {
        if (item.name === "") return false;

        for (var i = 0; i < list.length; i++) {
            if (item.name === list[i].name) return false;
        }
        return true;
    }


    this.removeJob = function(job) {
        viewModel.jobs.remove(job);
    };

    self.submitTask = function () {

        var jobToUpdate = self.selectedJob;

        for (var i = 0; i < self.jobs.length; i++) {
            if (self.selectedJob === self.jobs[i]) {
                jobToUpdate = self.jobs[i];
                continue;
            }
        }

        jobToUpdate.tasks.push(self.selectedTask);
        self.jobs.push(self.selectedJob);
        
        // add selected hours to task object
    };
}


ko.applyBindings(new VM());
