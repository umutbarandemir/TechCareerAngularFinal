export class ProjectsCard {

    id:string;
    icon:string;
    title:string;
    description:string;
    githublink:string

    constructor(id:string,icon:string,title:string,description:string,githubling:string){
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.description = description;
        this.githublink = githubling;
    }

}