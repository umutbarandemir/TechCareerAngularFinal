import { ProjectsCard } from './projectsCard';
import { Component } from '@angular/core';
import { BootcampCard } from './bootcampCard';
import { EducationCard } from './educationCard';
import { LanguagesCard } from './languagesCard';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  bootcampCard:BootcampCard[] = [
    {
      id:1,icon:"",title:"",description:"",photo:"",sub_title:"",githublink:""
    },{
      id:2,icon:"",title:"",description:"",photo:"",sub_title:"",githublink:""
    },{
      id:3,icon:"",title:"",description:"",photo:"",sub_title:"",githublink:""
    },{
      id:4,icon:"",title:"",description:"",photo:"",sub_title:"",githublink:""
    },{
      id:5,icon:"",title:"",description:"",photo:"",sub_title:"",githublink:""
    }
  ];

  projectsCard:ProjectsCard[]=[
    { 
      id:1,icon:"",title:"",description:"",githublink:"",
    },
    { 
      id:2,icon:"",title:"",description:"",githublink:"",
    },
    { 
      id:3,icon:"",title:"",description:"",githublink:"",
    },
    { 
      id:4,icon:"",title:"",description:"",githublink:"",
    },
    { 
      id:5,icon:"",title:"",description:"",githublink:"",
    },
    { 
      id:6,icon:"",title:"",description:"",githublink:"",
    },
  ];

  educationCard:EducationCard[] = [
    {
      id:1,icon:"",title:"",location:"",date:"",description:"",
    },{
      id:2,icon:"",title:"",location:"",date:"",description:"",
    },{
      id:3,icon:"",title:"",location:"",date:"",description:"",
    },{
      id:4,icon:"",title:"",location:"",date:"",description:"",
    },
  ];

  languagesCard:LanguagesCard[] = [
    {
      id:1,photo:"",filter:"",
    },
    {
      id:2,photo:"",filter:"",
    },
    {
      id:3,photo:"",filter:"",
    },
    {
      id:4,photo:"",filter:"",
    },
    {
      id:5,photo:"",filter:"",
    },
    {
      id:6,photo:"",filter:"",
    },
    {
      id:7,photo:"",filter:"",
    },
    {
      id:8,photo:"",filter:"",
    },
    {
      id:9,photo:"",filter:"",
    },
    {
      id:10,photo:"",filter:"",
    },
    {
      id:11,photo:"",filter:"",
    },
    {
      id:12,photo:"",filter:"",
    },
  ];

}
