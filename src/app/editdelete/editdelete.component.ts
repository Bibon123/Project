import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'delete-info',
  templateUrl: './editdelete.component.html',
  styleUrls: ['./editdelete.component.css'],
  template: '<h3>модель {{id}}</h3>'
})
export class EditdeleteComponent implements OnInit {
  id: number

  constructor(private activateRoute: ActivatedRoute) {
    this.id = activateRoute.snapshot.params['id']
   }

  ngOnInit(): void {
  }

}
