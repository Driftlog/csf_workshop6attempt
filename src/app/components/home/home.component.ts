import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  fb = inject(FormBuilder)
  cityForm !: FormGroup
  cityArr : string[] = ["Singapore", "Kuala Lumpur", "Tokyo", "Bangkok", "Hong Kong", "Beijing"];

  ngOnInit() {
    this.cityForm = this.createForm()
  }

  addCity() {
    const city : string = this.cityForm.value['city']
    if (!this.cityArr.includes(city)){
      this.cityArr.push(city)
    }
  }

  createForm() {
    return this.fb.group({
      city: this.fb.control<string>('', [Validators.required])
    })
  }


}
