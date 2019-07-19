import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visting-place',
  templateUrl: './visting-place.component.html',
  styleUrls: ['./visting-place.component.css']
})
export class VistingPlaceComponent implements OnInit {

  VisitingPlaceList = [
    {
      MainImage: "",
      MainImageDescription: "Img Desc",
      FullDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      DetailsUrl: "/visitingplace/indore"
    },
    {
      MainImage: "",
      MainImageDescription: "Img Desc",
      FullDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      DetailsUrl: "/visitingplace/indore"
    },
    {
      MainImage: "",
      MainImageDescription: "Img Desc",
      FullDescription: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      DetailsUrl: "/visitingplace/indore"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
