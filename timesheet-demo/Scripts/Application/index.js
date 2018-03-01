function job(name) {
    return {
        name: ko.observable(name)
    };
}

var viewModel = {
    jobToAdd: "",
    jobs: ko.observableArray([new job("johnny"), new job("anderson")]),

    addJob: function () {
        var objectToAdd = new job(this.jobToAdd);

        for (var i = 0; i < this.jobs().length; i++) {
            if (objectToAdd.name() === this.jobs()[i].name())
                return;
        }
        this.jobs.push(new job(this.jobToAdd));
    }
}
ko.applyBindings(viewModel);
