import {Component, OnInit} from '@angular/core';
import {SignUpForm} from "../../models/signUpForm";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public credentials: SignUpForm = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, public router: Router) {
  }

  ngOnInit(): void {
  }

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe((result) => result);
    this.router.navigate(['/']);
  }

}
