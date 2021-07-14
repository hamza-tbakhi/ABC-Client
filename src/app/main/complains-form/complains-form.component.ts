import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ComplaintNaturesList, ComplaintStatusesList } from 'src/app/shared/enums/enums';
import { Complaint, ComplaintNature } from 'src/app/shared/models/models';
import { BaseService } from 'src/app/shared/services/base.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-complains-form',
  templateUrl: './complains-form.component.html',
  styleUrls: ['./complains-form.component.scss']
})
export class ComplainsFormComponent implements OnInit {

  complaintNaturesList = ComplaintNaturesList
  complaintStatusesList = ComplaintStatusesList

  showStatus = false;

  complainsForm = new FormGroup({
    complaintDate: new FormControl('', [Validators.required]),
    complainantName: new FormControl('', [Validators.required]),
    complainantEmail: new FormControl('', [Validators.required,Validators.email]),
    location: new FormControl('', [Validators.required]),
    complaintNature: new FormControl('', [Validators.required]),
    complaintDetails: new FormControl('', [Validators.required]),
    desiredOutcome: new FormControl('', [Validators.required]),
    noPromotions: new FormControl(''),
    complaintStatus: new FormControl(1, [Validators.required]),
  });

  model: Complaint = new Complaint()

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private baseService: BaseService,
    private notificationService: NotificationService,
    public activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if (param.id) {
        this.getComplaint(parseInt(param.id));
      } 
    });
  }

  //Methods
  setModelValues() {
    this.model.complaintDate = this.complainsForm.controls.complaintDate.value;
    this.model.complainerName = this.complainsForm.controls.complainantName.value;
    this.model.complainerEmail = this.complainsForm.controls.complainantEmail.value;
    this.model.complaintLocation = this.complainsForm.controls.location.value;
    this.model.complaintDetails = this.complainsForm.controls.complaintDetails.value;
    this.model.desiredOutcome = this.complainsForm.controls.desiredOutcome.value;
    this.model.noPromotion = this.complainsForm.controls.noPromotions.value;
    this.model.status = this.complainsForm.controls.complaintStatus.value;

    var complaintNatures: ComplaintNature[] = [];
    this.complainsForm.controls.complaintNature.value.forEach(element => {
      complaintNatures.push(new ComplaintNature(this.model.id ?? 0, element))
    });
    this.model.complaintNatures = complaintNatures
  }

  setFormValues() {
    this.complainsForm.patchValue({
      complaintDate: new Date(this.model.complaintDate),
      complainantName: this.model.complainerName,
      complainantEmail: this.model.complainerEmail,
      location: this.model.complaintLocation,
      complaintDetails: this.model.complaintDetails,
      desiredOutcome: this.model.desiredOutcome,
      noPromotions: this.model.noPromotion,
      complaintStatus: this.model.status,
      complaintNature: this.model.complaintNatures.map(x => x.complaintNatueId)
    });

  }

  getComplaint(id) {
    this.spinner.show();
    this.baseService.getById('Complaint/', id).subscribe(response => {
      this.spinner.hide()
      this.model = response as any
      this.setFormValues();
    }, error => {
      this.spinner.hide;
    })
  }

  onSubmitClick() {
    this.spinner.show()
    this.setModelValues()
    if (this.model.id > 0) {
      // Update
        this.baseService.editItem('Complaint/', this.model).subscribe(response => {
        this.spinner.hide();
        this.model = response as any;
        this.notificationService.showNotification('Complaint Form', 'Your complaint form has been successfully submitted.', 'success')
      }, error => {
        this.spinner.hide();
      })
    } else {
      // Save
      this.baseService.postItem('Complaint/', this.model).subscribe(response => {
        this.spinner.hide();
        this.model = response as any;
        this.notificationService.showNotification('Complaint Form', 'Your complaint form has been successfully submitted.', 'success')
      }, error => {
        this.spinner.hide();
      })
    }
  }

  OnStatusChange(status){
    this.spinner.show();
    this.model.status = status;
    this.baseService.editItem('Complaint/', this.model).subscribe(response => {
      this.spinner.hide();
      this.model = response as any;
      this.notificationService.showNotification('Complaint Form', 'Complaint Status has been successfully updated', 'success')
    }, error => {
      this.spinner.hide();
    })
  }

  
}
