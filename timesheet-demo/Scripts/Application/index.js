function job(name) {
    return {
        name: ko.observable(name),
        tasks: []
    };
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
            if (objectToAdd.name() === this.jobs()[i].name())
                return;
        }
        this.jobs.push(new job(this.jobName));
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

    }
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
