import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  SiteDescription = {
    Heading: "Tourism",
    Description: "Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization."
  };
  VisitingPlaceList = [
    {
      MainImage: "",
      MainImageDescription: "Img Desc",
      FullDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      DetailsUrl: "https://www.google.com"
    },
    {
      MainImage: "",
      MainImageDescription: "Img Desc",
      FullDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      DetailsUrl: "https://www.google.com"
    },
    {
      MainImage: "",
      MainImageDescription: "Img Desc",
      FullDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      DetailsUrl: "https://www.google.com"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
