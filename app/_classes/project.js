"use strict";
var Project = (function () {
    function Project(project) {
        this.id = project.id;
        this.title = project.title;
        this.status = project.status;
        this.description = project.description;
        this.members = project.members;
        this.owner = project.owner;
        this.startDate = new Date(project.startDate);
        this.endDate = new Date(project.endDate);
    }
    Project.prototype.setTasks = function (tasks) {
        this.tasks = tasks;
    };
    Project.prototype.setIssues = function (issues) {
        this.issues = issues;
    };
    Project.prototype.setMilestones = function (milestones) {
        this.milestones = milestones;
    };
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map