import { ProjectsCard } from './projectsCard';
import { Component } from '@angular/core';
import { BootcampCard } from './bootcampCard';
import { EducationCard } from './educationCard';
import { LanguagesCard } from './languagesCard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  bootcampCard:BootcampCard[] = [
    {
      id:1,icon:"fa fa-quote-right",title:"Week1 - HTML&CSS&JS",description:"To start the bootcamp we went over the html,css and bootstrap basics while creating login form with all the neccesary attributes. We got assigend to do a login/register form of our own.",photo:"../../uploads/htmlcssjs.png",sub_title:"Html&Css&Js ",githublink:"https://github.com/umutbarandemir/Bootcamp-Login-Register",
    },{
      id:2,icon:"fa fa-quote-left",title:"Week2 - JS&TS",description:"During week2 we went over the javascript essentials and later on started learning typescript. Without skipping a subject we learned all the topics of typescript then touched on npm installs.",photo:"../../uploads/typescript.png",sub_title:"JS&Typescript ",githublink:"https://github.com/umutbarandemir/TypeScript",
    },{
      id:3,icon:"fa fa-quote-right",title:"Week3 - AngularSetup&Components",description:"With the start of week3 we set our first angular app. Covered the basics of angular, learned how to set angular projects and coding environment. Learned about the component based coding of angular.",photo:"../../uploads/angular.png",sub_title:"ANGULAR ",githublink:"https://github.com/umutbarandemir/angular-onepage-fromzero",
    },{
      id:4,icon:"fa fa-quote-left",title:"Week4 - AngularOnePage",description:"We went into more details on angular and started a small one page application. Picked up a template for my portfolio page and started adjusting the template according to the end result i want.",photo:"../../uploads/angular.png",sub_title:"ANGULAR ",githublink:"https://github.com/umutbarandemir/angular-onepage-fromzero",
    },{
      id:5,icon:"fa fa-quote-right",title:"Week5 - More Angular",description:"Learned about more complex ideas such as pipelines, rxjs, nodejs, mongodb, json and services. For the final deliverable of the bootcamp finished the design and content of the website and started the conversion of javascript to angular.",photo:"../../uploads/angular.png",sub_title:"ANGULAR&Node.js ",githublink:"https://github.com/umutbarandemir/angular-onepage-fromzero",
    }
  ];

  projectsCard:ProjectsCard[]=[
    { 
      id:1,icon:"flaticon-seo",title:"OnePage Portfolio",description:"Onepage portfolio website that i built for the final project for Techcareer Angular Frontend Bootcamp using angular knowledge i gained during the 5 weeks long training.",githublink:"https://github.com/umutbarandemir/OnePagePortfolio",
    },
    { 
      id:2,icon:"flaticon-process",title:"Forum Website with React",description:"Created a forum website to test my react and nodejs knowledge where users were able to login, register, create threads, search for threads, leave comments on threads and like threads. Used mongoDB for the first time for cloud storage.",githublink:"https://github.com/umutbarandemir/ForumWebsite",
    },
    { 
      id:3,icon:"flaticon-discuss-issue",title:"GameApp in Android Studio",description:"To sum up all my knowledge about android studio java, I created a game app. Started as a stand alone game then turned into a game app with multiple games, main page, difficulty scenes and game scenes.",githublink:"https://github.com/umutbarandemir/GameAppAndroid",
    },
    { 
      id:4,icon:"flaticon-development",title:"IMDB type Critic Website with React",description:"Built a full-stack web app to allow users to search for movies, video games or tv show titles and leave reviews using React, NodeJS and MongoDB.",githublink:"https://github.com/umutbarandemir/MyCritic",
    },
    { 
      id:5,icon:"flaticon-idea",title:"TetrisBot in Python",description:"Utilized python basics and pygame library to create a python game then implemented a bot to play it without using advanced python libraries.",githublink:"https://github.com/umutbarandemir/tetris_bot",
    },
    { 
      id:6,icon:"flaticon-idea-1",title:"MovieRecomendation System with ML",description:"A movie recommendation system that uses K-NN algorithm to find similarities between user activities and suggests movies to users based on similar users.",githublink:"https://github.com/umutbarandemir/MovieRec",
    },
  ];

  educationCard:EducationCard[] = [
    {
      id:1,icon:"flaticon-seo",title:"High School",location:"Tülay Basaran Anadolu Lisesi, SAMSUN / ILKADIM , ",date:"2015-2019",description:"Root of the love and the passion i have for the software world and the constant hunger to learn resides on the growth i had during these years.",description2:"",
    },{
      id:2,icon:"flaticon-development",title:"College",location:"Istanbul Aydin University, KUCUKCEKMECE / ISTANBUL , ",date:"2019-2023",description:"Building a solid foundation that includes software basics, algorithms and building projects in variety of languages. Tapping into the limitless potential of software world.",description2:"",
    },{
      id:3,icon:"flaticon-process",title:"Internships",location:"Remote , ",date:"SUMMER 2023",description:"Kreatif Fabrika, August 2024",description2:"To finish my college journey i did 28 days of intership in this firm. I learned and used PHP Laravel along with the html,css and javascript.",
    },{
      id:4,icon:"flaticon-process",title:"After College",location:"Remote , ",date:"FALL 2023",description:"After completing my internships and graduation i got an offer from TUBITAK BILGEM YTE BOOTCAMP 2023 to attend their online bootcamp that had subjects such as Java, Figma, Springboot. Completing these courses and doing some freelance jobs brought me to end of 2023.",description2:"To start the 2024, I have been taking an Angular Frontend Bootcamp via TechCareer.",
    },
  ];

  languagesCard:LanguagesCard[] = [
    {
      id:1,photo:"../../uploads/react.png",filter:"gal_a",
    },
    {
      id:2,photo:"../../uploads/angular.png",filter:"gal_a",
    },
    {
      id:3,photo:"../../uploads/htmlcssjs.png",filter:"gal_a",
    },
    {
      id:4,photo:"../../uploads/nodejs.png",filter:"gal_b",
    },
    {
      id:5,photo:"../../uploads/java.png",filter:"gal_a gal_b",
    },
    {
      id:6,photo:"../../uploads/php.png",filter:"gal_b",
    },
    {
      id:7,photo:"../../uploads/springboot.png",filter:"gal_b",
    },
    {
      id:8,photo:"../../uploads/mysql.jpg",filter:"gal_c",
    },
    {
      id:9,photo:"../../uploads/oraclesql.png",filter:"gal_c",
    },
    {
      id:10,photo:"../../uploads/mongodb.png",filter:"gal_c",
    },
    {
      id:11,photo:"../../uploads/python.png",filter:"gal_a gal_b",
    },
  ];

  viewPdfButton(){

  }

}
