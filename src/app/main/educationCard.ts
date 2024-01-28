export class EducationCard {

    id:string;
    icon:string;
    title:string;
    location:string;
    date:string;
    description:string;
    photo:string;
    sub_title:string;

    constructor(id:string,icon:string,title:string,location:string,date:string,description:string,photo:string,sub_title:string){
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.location = location;
        this.date = date;
        this.description = description;
        this.photo = photo;
        this.sub_title = sub_title;
    }
}