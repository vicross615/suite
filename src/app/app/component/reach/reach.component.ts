import { Component, OnInit } from '@angular/core';
import {SmsProviderService} from "../../../services/sms-provider.service";

import {  WorkBook, read, utils, write, readFile } from 'xlsx';




@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.css']
})
export class ReachComponent implements OnInit {


  constructor(private smsProviderService: SmsProviderService) { }

  ngOnInit(): void {
  }


  public uploadData(event: any) : void {
    let filesData = event.target.files;
    console.log(filesData[0]);
    this.convertExcelToJson(filesData)
  }

  convertExcelToJson(file)
  {
    let reader = new FileReader();
    let workbookkk;
    let XL_row_object;
    let json_object;
    reader.readAsBinaryString(file[0]);




    return new Promise((resolve, reject) => {
      reader.onload = function(){
        //  alert(reader.result);
        let data = reader.result;
        workbookkk=read(data,{type: 'binary'});
        console.log(workbookkk);
        workbookkk.SheetNames.forEach(function(sheetName) {
          // Here is your object
          XL_row_object = utils.sheet_to_json(workbookkk.Sheets[sheetName]);
          json_object = JSON.stringify(XL_row_object);
           console.log(json_object);
           console.log(XL_row_object);
          resolve(XL_row_object);
        });
      };
    });
  }

  fileUpload(event: any){
    console.log()
  }


}
