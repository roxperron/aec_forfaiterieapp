import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';






@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
contactForm = new FormGroup({
  firstName : new FormControl(''),
  lastName : new FormControl(''),
  email : new FormControl(''),
  phoneNumber : new FormControl('null', Validators.required),
  communicationEmail: new FormControl(''),
  communicationPhone : new FormControl(''),
  reason : new FormControl(''),
  comment : new FormControl(''),
  replyBefore : new FormControl(''),
  knownUs : new FormControl(''),
  newsletter : new FormControl(''),

})

  constructor() { }

  ngOnInit(): void {
   
  }

  onSubmit(){
    console.log("Subtmitted!!!")
  }

}
