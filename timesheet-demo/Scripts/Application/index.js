function job(name) {
    return {
        name: ko.observable(name),
        tasks: []
    };
}

function task(name) {
    return {
        name: ko.observable(name)
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

    removeJob: function (job) { this.jobs.remove(job) },

    enterWork: function () {

        return;
    }
}
ko.applyBindings(viewModel);
