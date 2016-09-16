"use strict";
var project_1 = require("./project");
var ProjectFactory = (function () {
    function ProjectFactory() {
    }
    ProjectFactory.createProject = function (projectData) {
        var project = new project_1.Project(projectData);
        project.setTasks(projectData.tasks);
        project.setIssues(projectData.tasks);
        project.setMilestones(projectData.tasks);
        return project;
    };
    return ProjectFactory;
}());
exports.ProjectFactory = ProjectFactory;
//# sourceMappingURL=projectFactory.js.map