export class BootcampCard {

    id:string;
    icon:string;
    title:string;
    description:string;
    photo:string;
    sub_title:string;
    githublink:string;

    constructor(id:string,icon:string,title:string,description:string,photo:string,sub_title:string,githubling:string){
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.description = description;
        this.photo = photo;
        this.sub_title = sub_title;
        this.githublink = githubling;
    }

}