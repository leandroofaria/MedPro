import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userType: string | null = null;

  ngOnInit(): void {
    this.userType = localStorage.getItem('tipo');
  }
}

