
function Job(jobName) {
    this.name = jobName;
    this.tasks = ko.observableArray();
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
    self.promptLabel = ko.observable();

    self.addJob = function () {
        if (self.isValidEntry(self.jobName, self.jobList())) {
            self.jobList.push(new Job(self.jobName));
            self.promptLabel(self.jobName + ' added successfully');
        }
    }

    self.addTask = function () {
        if (self.isValidEntry(self.taskName, self.taskList())) {
            self.taskList.push(new Task(self.taskName));
            self.promptLabel(self.taskName + ' added successfully');
        }
    }

    self.isValidEntry = function (itemName, list) {
        if (itemName === "") {
            self.promptLabel('*Cannot have a blank entry');
            return false;
        }

        for (var i = 0; i < list.length; i++) {
            if (itemName === list[i].name) {
                self.promptLabel('*Entry already exists');
                return false;
            }
        }
        return true;
    }

    this.removeJob = function(job) {
        self.jobs.remove(job);
    };

    self.submitTask = function () {

        for (var i = 0; i < self.jobs().length; i++) {
            if (self.selectedJob.name === self.jobs()[i].name) {
                self.jobs()[i].tasks.push(self.selectedTask);
                return;
            }
        }

        self.jobs.push(self.selectedJob);
        self.jobs()[self.jobs().length - 1].tasks.push(self.selectedTask);
        
        // add selected hours to task object
    };
}


ko.applyBindings(new VM());
