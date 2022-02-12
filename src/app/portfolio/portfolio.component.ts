import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  images: string[] = ['8G1A2596.jpg', '8G1A2357.jpg', '8G1A4910.jpg'];
  constructor(private dataService: DataService) {
  }


  

  ngOnInit(): void {
  }

}
