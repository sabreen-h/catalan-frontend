import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  isLoginActive = false;

  toggleForm(form: string): void {
    if (form === 'login') {
      this.isLoginActive = true;
    } else {
      this.isLoginActive = false;
    }
  }

}
