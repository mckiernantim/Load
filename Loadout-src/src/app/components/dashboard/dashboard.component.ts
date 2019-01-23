import { DataSource } from '@angular/cdk/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { map } from 'rxjs/operators';
import { GetDataService } from './../../get-data.service';
import { Http } from '@angular/http';


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource} from '@angular/material'
import { pipe } from 'rxjs';


export interface User{
  username: string;
  email: string;
 _id: string;
  posts:any;
}

export interface Post{
  id: string;
  username: string;
  title: string;
  description: string;
  category: string,

}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 postDataArray: any[]=[];
 newDataArray: Post[] = [];
 showTable = false;
 dataSource= new MatTableDataSource()
 displayedColumns: string[] = [
  'user', 
  'title', 
  'description', 
  'category'
]
index = 0;
returnedArray: any[]=[];
allPostsArray= [];


constructor(private http: Http, gds: GetDataService) { }
  
  

  ngOnInit() {
    
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.getData()
      .subscribe(response => {
        //  let data =(response.json().posts);
        //  data.forEach(element => {
        //    this.postDataArray.push(element.posts)
        //    this.showTable = true;
        //  })

        this.returnedArray = response.json()
        console.log(this.returnedArray)
        this.postDataArray = this.returnedArray['posts'].map(x => x.posts);
        console.log(this.postDataArray);
        for (let i = 0; i < this.postDataArray.length; i++) {
         for(let j= 0; j < this.postDataArray[i].length; j++){
           this.allPostsArray.push(this.postDataArray[i][j])};
          console.log(this.allPostsArray)
        }


      }
    
    )
  this.dataSource.data = this.allPostsArray}

    
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    getData(){
      return this.http.get("http://localhost:3000/users/dashboard")
    }

  }

