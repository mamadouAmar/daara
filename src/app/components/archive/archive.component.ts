import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  pages  = [
    {
      "linkUrl" : 'eleves' , "linkName" : 'eleves'
    },
    {
      "linkUrl" : 'mensualites' ,  "linkName" : 'mensualites'
    },
    {
      "linkUrl" : 'inscriptions' ,  "linkName" : 'inscriptions'
    },
    {
      "linkUrl" : 'employes' ,  "linkName" : 'employes'
    },
    {
      "linkUrl": 'paiements' ,  "linkName" : 'paiements'
    },
  ];
  
  activeLink = ''

  constructor() {
    
   }

  ngOnInit(): void {
  }

}
