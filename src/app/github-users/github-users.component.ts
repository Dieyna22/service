import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service';
@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  public receveData: any;

  constructor(private gitService: GithubService) { }

  ngOnInit() {
    this.gitService.getUsergithub().subscribe((data: any) => {  
        this.receveData=data
    })
    
 }
}
