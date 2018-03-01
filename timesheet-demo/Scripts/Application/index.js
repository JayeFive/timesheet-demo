function job(name) {
    return {
        name: ko.observable(name)
    };
}

var viewModel = {
    jobToAdd: "",
    jobs: ko.observableArray([new job("johnny"), new job("anderson")]),

    addJob: function () {
        this.jobs.push(new job(this.jobToAdd));
    },
}
ko.applyBindings(viewModel);
