
function Job(jobName) {
    this.name = jobName;
    this.tasks = ko.observableArray();
}

function Task(taskName) {
    this.name = taskName;
    this.hours = ko.observable(0);
}

function hoursOptions() {
    const hoursIncrement = 0.5, minHours = 0.5, maxHours = 12;
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
    self.selectedHours = 0;
    self.jobList = ko.observableArray([new Job("job1"), new Job("job2")]);
    self.taskList = ko.observableArray([new Task("task1"), new Task("task2")]);
    self.jobs = ko.observableArray();
    self.taskHours = 0;
    self.promptLabel = ko.observable();

    // Button methods //
    self.addJob = function () {
        if (self.isNoRepeat(self.jobName, self.jobList())) {
            self.jobList.push(new Job(self.jobName));
            self.promptLabel(self.jobName + ' added successfully');
        }
    };

    self.addTask = function () {
        if (self.isNoRepeat(self.taskName, self.taskList())) {
            self.taskList.push(new Task(self.taskName));
            self.promptLabel(self.taskName + ' added successfully');
        }
    };

    self.submitEntry = function () {

        for (var i = 0; i < self.jobs().length; i++) {

            if (self.selectedJob.name === self.jobs()[i].name) {

                for (var j = 0; j < self.jobs()[i].tasks().length; j++) {
                    if (self.selectedTask.name === self.jobs()[i].tasks()[j].name) {
                        self.jobs()[i].tasks()[j].hours(self.jobs()[i].tasks()[j].hours += self.selectedHours) ;
                        return;
                    }
                }
                self.jobs()[i].tasks.push(new Task(self.selectedTask.name));
                self.jobs()[i].tasks()[self.jobs()[i].tasks().length - 1].hours += selectedHours;

                return;
            }
        }

        self.jobs.push(new Job(self.selectedJob.name))
        self.jobs()[self.jobs().length - 1].tasks.push(new Task(self.selectedTask.name)).hours += self.selectedHours;


        //var entry;

        //if (self.isNoRepeat(self.selectedJob.name, self.jobs())) {
        //    //entry = new Job(self.selectedJob.name);
        //    self.jobs.push(self.selectedJob);
        //    self.jobs()[self.jobs().length - 1].tasks.push(self.selectedTask);
        //}
        //else {

        //}

        //for (var i = 0; i < self.jobs().length; i++) {
        //    if (self.selectedJob.name === self.jobs()[i].name) {

        //        console.log(self.jobs[i].name);
        //        addTaskToJob
        //            (self.jobs()[i]);

                //self.jobs()[i].tasks.push(self.selectedTask);
                //return;
        //    }
        //}

        //self.jobs.push(self.selectedJob);
        //self.jobs()[self.jobs().length - 1].tasks.push(self.selectedTask);
        
        // add selected hours to task object
    };

    this.removeJob = function (job) {
        self.jobs.remove(job);
    };

    // Helper methods //
    self.isNoRepeat = function (itemName, list) {
        if (itemName === "") {
            self.promptLabel('*Cannot have a blank entry');
            return false;
        }

        for (var i = 0; i < list.length; i++) {
            if (itemName === list[i].name) {
                //self.promptLabel('*Entry already exists');
                return false;
            }
        }
        return true;
    };

    self.jobExists = function (jobName) {
        for (var i = 0; i < self.jobs().length; i++) {
            if (jobName === self.jobs()[i].name) {
                //self.promptLabel('*Entry already exists');
                return self.jobs()[i];
            }
        }
        return null;
    }

    self.assignTask = function (job) {

        //console.log(job.name);

        //for (var i = 0; i < job.tasks.length; i++) {
        //    if (self.selectedTask.name === job.tasks()[i])
        //        return;
        //}

        //job.tasks.push(self.selectedTask);

    }
}


ko.applyBindings(new VM());
