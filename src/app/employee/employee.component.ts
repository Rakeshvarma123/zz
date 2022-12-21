
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-college',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class CollegeComponent implements OnInit {
firstname:any;
lastname:any;
  constructor(
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params=>{console.log(params);
      this.firstname=params['firstname'];
      this.lastname=params['lastname'];
  
    })
  }

}