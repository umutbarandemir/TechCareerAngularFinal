export class ProjectsCard {

    id:number;
    icon:string;
    title:string;
    description:string;
    githublink:string

    constructor(id:number,icon:string,title:string,description:string,githubling:string){
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.description = description;
        this.githublink = githubling;
    }

}