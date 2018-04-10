﻿//function job(name) {
//    return {
//        name: ko.observable(name),
//        tasks: []
//    };
//}

var job = function(name) {
    this.jobName = name;
}

function task(name) {
    return {
        name: ko.observable(name),
        hours: 0
    }
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

var viewModel = {
    labelText: "",
    selectedJob: ko.observable(),
    jobName: "",
    jobs: ko.observableArray(),
    taskName: "",
    taskList: ko.observableArray(["one", "two"]),
    taskHours: 0,
    timesheet: ko.observableArray(),
    errorMessage: ko.observable(),

    addJob: function() {
        var objectToAdd = new job(this.jobName);

        for (var i = 0; i < this.jobs().length; i++) { 
            if (objectToAdd.jobName === this.jobs()[i].jobName)
                return;
        }

        this.jobs.push(objectToAdd);
    },

    addTask: function () {
        for (var i = 0; i < this.taskList().length; i++) {
            if (this.taskName === this.taskList()[i]) return;
        }
        this.taskList.push(this.taskName);
    },

    removeJob: function(job) {
        viewModel.jobs.remove(job);
    },

    submitTask: function() {
        // determine selected job object
        console.log(this.selectedJob.name);
        // add selected task to tasks array within job object

        // add selected hours to task object
    },

}

//function submitTask() {
//    // determine job object
    
//    viewModel.errorMessage("This is the label");

//    // add task to job object tasks array

//    console.log(viewModel.taskList()[0]);

//    // add the selected hours to the task object

//    job.tasks[job.tasks.length - 1].hours += parseFloat(viewModel.taskHours);
//    console.log(job.tasks[job.tasks.length - 1].hours);

//}

ko.applyBindings(viewModel);
