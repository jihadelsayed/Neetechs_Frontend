import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
  userInfo = JSON.parse(localStorage.getItem('UserInfo')!);
  authenticateHttpHeaders = new HttpHeaders({ 'Authorization': 'Token ' + localStorage.getItem('userToken') });

  constructor(private router: Router,
    private http: HttpClient,

    ) { }

  ngOnInit(): void {
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
    location.reload();

  }
  Subscription() {
    this.http.get(environment.SERVER_URL + 'api/customerPortal', { headers: this.authenticateHttpHeaders })
      .subscribe((portalUrl: any) => {
        // console.log(portalUrl)
        window.location.href = portalUrl[0]
        //this.router.navigate(['/login']);
      });
  }
}
