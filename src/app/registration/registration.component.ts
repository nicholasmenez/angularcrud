import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Registration {
  constructor(
    public omsid: string = '',
    public products: string = '',
    public orderdetails:string = '' ,
    public gtin: string = '',
    public quantity: string = '',
    public template: string = '',
    public serialtype: string = '',
    public serialnumber: string = '',
    public templateid: string = ''
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: Registration;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';
  // It maintains table row index based on selection.
  selectedRow: number;
  
  constructor() {
    // Add default registration data.
    //this.registrations.push(new Registration('0645848', '', '01334567894339', 3, '', 'SELF_MADE','XT6c84e','3'));
    
  }

  ngOnInit() {}

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Save';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
      // Push registration model object into registration list.
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].omsid = this.regModel.omsid;
      this.registrations[this.selectedRow].products = this.regModel.products;
      this.registrations[this.selectedRow].orderdetails = this.regModel.orderdetails;
      this.registrations[this.selectedRow].gtin = this.regModel.gtin;
      this.registrations[this.selectedRow].quantity = this.regModel.quantity;
      this.registrations[this.selectedRow].template = this.regModel.template;
      this.registrations[this.selectedRow].serialtype = this.regModel.serialtype;
      this.registrations[this.selectedRow].serialnumber = this.regModel.serialnumber;
      this.registrations[this.selectedRow].templateid = this.regModel.templateid;
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Update';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }


  

}
