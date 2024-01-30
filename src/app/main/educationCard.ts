export class EducationCard {

    id:number;
    icon:string;
    title:string;
    location:string;
    date:string;
    description:string;
    description2:string;
    buttonId:string;
    pdfPath:string;

    constructor(id:number,icon:string,title:string,location:string,date:string,description:string,description2:string,buttonId:string,pdfPath:string){
        this.id = id;
        this.icon = icon;
        this.title = title;
        this.location = location;
        this.date = date;
        this.description = description;
        this.description2 = description2;
        this.buttonId = buttonId;
        this.pdfPath = pdfPath;
    }
}