import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { MailService } from "../mail.service";
import { FormControl } from "@angular/forms";
@Component({
  selector: 'app-outlook',
  templateUrl: './outlook.component.html',
  styleUrls: ['./outlook.component.css']
})
export class OutlookComponent implements OnInit {
  
  constructor(private mailService: MailService) { }
  @ViewChild("login") login: ElementRef;
  @ViewChild("password") password: ElementRef;
  forms= {
    login: "",
    password: ""
  }
  ngOnInit() {
  }

  featureWithContent() {
  }

  // getOutlookLogins() {
  //   const login = this.login.nativeElement.value;
  //   const password = this.password.nativeElement.value;
  //   this.forms.login = login;
  //   this.forms.password = password;
  //   this.mailService.postOutlookLogins(this.forms);
  // }
  // sendMail( ) {
  //   var user = "heyman";
  //   this.mailService.postOutlookLogins(user);
  // }

}
