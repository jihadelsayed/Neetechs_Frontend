import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent {
  name: string | null = null;
  fullname: string | null = null;
  email: string | null = null;
  twitter: string | null = null;
  facebook: string | null = null;
  gender: string | null = null;
  phone: string | null = null;
  address: string | null = null;
  description: string | null = null;
  
  ngOnInit() {
    // Retrieve username from local storage
    const userInfoString = localStorage.getItem('userInfo');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    
    if(userInfo){
      const name = userInfo['name'];
      const names = name.split(' ');
      const capitalized = names.map((name: string) => name.charAt(0).toUpperCase() + name.slice(1)).join(' ');
      const firstName = name.split(' ')[0];
      this.name = firstName
      this.email =  userInfo['email']
      this.twitter =  userInfo['twitter']
      this.facebook =  userInfo['facebook']
      this.phone =  userInfo['telephone']
      this.gender =  userInfo['gender']
      this.address =  userInfo['address']
      this.description =  userInfo['description']
      this.fullname = capitalized
      
    }
  }
  public genderSelectOptions = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' },
    { value: 'others', text: 'Others' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    console.log('Selected option:', selectedOption);
  }
}
