export class EducationCard {

    id:number;
    icon:string;
    title:string;
    location:string;
    date:string;
    description:string;

    constructor(id:number,icon:string,title:string,location:string,date:string,description:string){
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.location = location;
        this.date = date;
        this.description = description;
    }
}