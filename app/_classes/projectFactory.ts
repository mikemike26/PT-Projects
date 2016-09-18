import {Project} from "./project";

export class ProjectFactory {
    
    static createProject(projectData: any): Project {
        let project: Project = new Project(projectData);
        
        project.setTasks(projectData.tasks);
        project.setIssues(projectData.tasks);
        project.setMilestones(projectData.tasks);
        
        return project;
    }
}