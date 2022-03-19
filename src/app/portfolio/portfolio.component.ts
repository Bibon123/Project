import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  constructor(private dataService: DataService) {
  }
  
  
  list = [
  {img: '8G1A2357.jpg', id: 1},
  {img:'8G1A2596.jpg', id: 2},

  {img: '8G1A4910.jpg', id: 3},
  {img: '8G1A0762-2.jpg', id: 4},
  {img: '8G1A1939-2.jpg', id: 5},
  {img: '8G1A6257.jpg', id: 6},]

  

  ngOnInit(): void {
  }



  }

