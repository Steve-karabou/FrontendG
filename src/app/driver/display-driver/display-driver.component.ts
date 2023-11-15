import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DriverService } from '../service/driver.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-display-driver',
  templateUrl: './display-driver.component.html',
  styleUrls: ['./display-driver.component.css']
})
export class DisplayDriverComponent implements OnInit{

  searchFormGroup!: FormGroup;
  message: string = '';
  receivedMessages: string[] = [];
  private socketSubscription!: Subscription;

  constructor(private fb: FormBuilder, private driverService: DriverService){}

  public messages: string[] = [];
  

  ngOnInit(){
    console.log("Message:", this.messages)

    this.searchFormGroup = this.fb.group({
      deliveryId: ["", Validators.required]
    });
  }
 

  ngOnDestroy() {
  
  }

  pickedUp(){
   this.driverService.sendMessage("Develomppeur") 
  }
  inTransit(){}
  deliveredt(){}
  failed(){}

  public searchDeliveryPackage(){}
  //   let name = this.searchFormGroup.value.deliveryId;
    //  this.patientServ.searchPatient(name, this.currentPage, this.pageSize).subscribe({
    //   next: (patient: Patient) => {
    //    this.patients = patient.docs;
    //    this.currentPage = patient.page;
    //    this.totalPages = patient.pages;
    //   }
    //  })
  }


