import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarServiceService } from 'src/core/Services/snackbar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb:FormBuilder,private router:Router,private snackbar: SnackbarServiceService)
  {
    
  }
  loginForm= this.fb.group({
    username:[''],
    password:['']
  })
  onSubmit()
  {
    
    let users=JSON.parse(localStorage.getItem("users")||'{}') ;
    let username=this.loginForm.get('username')?.value;
    let password=this.loginForm.get('password')?.value;

    if(users)
    {
      for(let i=0;i<users.length;i++)
      {
        if(users[i].username==username && users[i].password==password &&users[i].username=="user")
        {
           localStorage.setItem("userRole",users[i].role);
           localStorage.setItem("isLoggedIn","true");
           this.snackbar.success("Logged In Successfully")
           window.location.href="/categories/home";
           //this.router.navigate(['/categories/products'])
         
        }
        else if(users[i].username==username && users[i].password==password &&users[i].username=="admin")
        {
           localStorage.setItem("userRole",users[i].role);
           localStorage.setItem("isLoggedIn","true");
           this.snackbar.success("Logged In Successfully")
           
           window.location.href="/categories/products";
           //this.router.navigate(['/categories/products'])
         
        }
      }

    }
  }
}
