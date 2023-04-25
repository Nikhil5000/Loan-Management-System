import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Request } from '../request';
import { RequestService } from '../service/request.service';

@Component({
  selector: 'app-respond-extension',
  templateUrl: './respond-extension.component.html',
  styleUrls: ['./respond-extension.component.css']
})
export class RespondExtensionComponent implements OnInit {

  requestId: number;
  request: Request = new Request();

  constructor(private route: ActivatedRoute, private requestService: RequestService, private router: Router) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params['requestId'];
    this.request = new Request();
    this.requestService.getRequestById(this.requestId).subscribe(data => {
      this.request = data;
    });
  }

  approveRequest(): void {
    this.request.requestStatus = 'Approved';
    alert('Response Updated successfully!');
    this.saveResponse();
  }
  rejectRequest(): void {
    this.request.requestStatus = 'Rejected';
    alert('Response Updated  successfully!');
    this.saveResponse();
  }
  saveResponse() {
    this.requestService.updateRequestById(this.requestId, this.request).subscribe(data => {
      this.goToRespond();
    },
      error => console.log(error));
  }

  goToRespond() {
    this.router.navigate(['/requests']);
  }
}
