import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class studentComponent implements OnInit {
firstname:any;
lastname:any;
  constructor(
private router: Router


  ) { }

  ngOnInit() {
  }
navigate(){
  this. router.navigate(['college'],
  {queryParams: {firstname: this.firstname, lastname: this.lastname}
  }
  
  )
}
}


