import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { Router } from '@angular/router';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-new-extension-request-form',
  templateUrl: './new-extension-request-form.component.html',
  styleUrls: ['./new-extension-request-form.component.css']
})
export class NewExtensionRequestFormComponent implements OnInit {
  request: Request = new Request();


  constructor(private requestService: RequestService, private router: Router) { }


  ngOnInit(): void {
  }
  saveRequest() {
    this.requestService.createRequest(this.request).subscribe(data => {
    },
      error => console.log('Error', error));
  }

  onSubmit() {
    console.log(this.request);
    alert('Form submitted successfully!');
    this.saveRequest();
  }

}



//   onSubmit() {
//     this.isSubmitted = true;
//     if (this.isSubmitted) {
//       alert("Your request has been successfully submitted!");
//     }
//   }
// }
