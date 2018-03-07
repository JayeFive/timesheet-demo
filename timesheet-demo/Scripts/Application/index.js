function job(name) {
    return {
        name: ko.observable(name),
        tasks: []
    };
}

function task(name) {
    return {
        name: ko.observable(name),
        hours: ko.observable(0)
    }
}

function hoursOptions() {
    var optionsArray = [];

    for (var i = 0.5; i <= 12; i += 0.5) {
        optionsArray.push(i);
    }

    return optionsArray;
}

var viewModel = {
    jobToAdd: "",
    jobs: ko.observableArray([new job("johnny"), new job("anderson")]),
    taskToAdd: "",
    tasks: ko.observableArray([new task("siding"), new task("roofing")]),
    hours: 0,

    addJob: function () {
        var objectToAdd = new job(this.jobToAdd);

        for (var i = 0; i < this.jobs().length; i++) { 
            if (objectToAdd.name() === this.jobs()[i].name())
                return;
        }
        this.jobs.push(new job(this.jobToAdd));
    },

    addTask: function () {
        var objectToAdd = new task(this.taskToAdd);

        for (var i = 0; i < this.tasks().length; i++) {
            if (objectToAdd.name() === this.tasks()[i].name())
                return;
        }
        this.tasks.push(new task(this.taskToAdd));
    },

    removeJob: function (job) {
        viewModel.jobs.remove(job);
    },
}

function submitTask(/*job, task, hours*/) {
        // determine job object

        // add task to job object tasks array

        // add the selected hours to the task object

    console.log(job.name());
    console.log(task.name());
    console.log(viewModel.hours);
}

ko.applyBindings(viewModel);
