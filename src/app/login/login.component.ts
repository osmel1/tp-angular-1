import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  formLogin! : FormGroup;
  public errorMessage : undefined;
  constructor(private fb : FormBuilder, private router : Router , private authentiService :AuthService ){}
  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
  }
  handleLogin() {
    console.log(this.formLogin.value);
    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;
    this.authentiService.login(username,password)
      .then(resp=>{
          console.log(resp);
          this.router.navigateByUrl("/admin");
        }
      ).catch(err=>{
      this.errorMessage=err;
    })
  }
}
