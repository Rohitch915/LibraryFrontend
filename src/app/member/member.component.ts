import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  member: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    const memberId:Number = Number(localStorage.getItem('memberId'));
    console.log("sed");
    
    if (!token || !memberId) {
      console.error('Token or memberId missing');
      return;
    }


    const headers = new HttpHeaders().set('Authorization', `Basic ${token}`);
this.http.get(`http://localhost:4321/member/${memberId}/profile`, { headers })
  .subscribe({
    next: (data) => {
      this.member = data
      console.log(this.member);
      
    },
    error: (err) => console.error('Failed to fetch member data:', err)
  });

  }
}
