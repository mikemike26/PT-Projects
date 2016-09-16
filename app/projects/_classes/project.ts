export class Project {
    id: Number;
    title:String;
    status: String;
    description:String;
    startDate:Date;
    endDate:Date;
    tasks:any;
    issues:any;
    members: any;
    owner: String;
    milestones: any;
    
    constructor(project: any) {
        this.id = project.id;
        this.title = project.title;
        this.status = project.status;
        this.description = project.description;
        this.members = project.members;
        this.owner = project.owner;
        this.startDate = new Date(project.startDate);
        this.endDate = new Date(project.endDate);
    }

    setTasks(tasks): void {
        this.tasks = tasks;
    }

    setIssues(issues): void {
        this.issues = issues;
    }
    
    setMilestones(milestones): void {
        this.milestones = milestones;
    }
}