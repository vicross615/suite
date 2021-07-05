import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {SmsProviderService} from "../../../../services/sms-provider.service";

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {

  smsForm = new FormGroup({
    numbers: new FormControl('', [Validators.required, Validators.minLength(10)]),
    contact_file: new FormControl(),
    message: new FormControl()
  })
  private fileName: string;

  constructor(private smsProvider: SmsProviderService ) { }

  ngOnInit(): void {
  }

  handleTo(numbers: any): string[]{
    var phoneNumbers: string[];
    phoneNumbers = numbers.split(",");
    console.log(phoneNumbers);
    return phoneNumbers;
  }




  onSubmit() {
    //some validation goes here
    const sms = {
      to: this.handleTo(this.smsForm.value.numbers),
      message: this.smsForm.value.message
    }
    this.smsProvider.sendSms(sms);
    this.smsForm.reset();
  }


  uploadFile(event: Event) {
    const element = event.currentTarget as HTMLInputElement;
    console.log(element.files[0].name);
    this.fileName = element.files[0].name;

    // let fileList: FileList | null = element.files;
    // if (fileList) {
    //   console.log("FileUpload -> files", fileList.File.name);
    // }
  }
}


