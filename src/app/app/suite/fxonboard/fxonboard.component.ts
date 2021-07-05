import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

import { Router } from '@angular/router';



@Component({
  selector: 'app-fxonboard',
  templateUrl: './fxonboard.component.html',
  styleUrls: ['./fxonboard.component.css']
})
export class FXOnboardComponent implements OnInit {

  formGroup = this.fb.group({
    file: [null, Validators.required]
  });

   fileName = null;
  public message = "Send KYC Document to compliance team";
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
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

  refresh(): void {
     window.location.reload();

  }

  toggleLoading(): void{
    this.isLoading =true;

    setTimeout(() => {
      this.isLoading = false;
       confirm("Your Document has been sent for Verification!");
      this.router.navigate(['/suite/home']);

    }, 3000);

  }

}

