import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent implements OnInit {
  @Input('p') project!: {
    _id:string,
    title: String;
    description: String;
    imageUrl:String,
    goal: {
      target: Number;
      deadline: String;
    };
    minimum_stake: Number;
    category: String;
    stage: String;
    funding_type: String;
  };
  constructor(private http: HttpClient, private router:Router, private activatedRoute: ActivatedRoute) {
    const projectId = activatedRoute.paramMap.subscribe(params => {
      params.get('id')
    })
  }
  ngOnInit(): void {}

  opendetail(){
    this.router.navigate(['/project'], {queryParams:{id:this.project._id}}); 
  }
}
