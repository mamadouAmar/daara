import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-depense',
  templateUrl: './ajout-depense.component.html',
  styleUrls: ['./ajout-depense.component.css']
})
export class AjoutDepenseComponent {
  
  addressForm = this.fb.group({
    depense: [null, Validators.required],
    somme: [null, Validators.required],
    dateDepese: [null, Validators.required],
  });

  

  constructor(private fb: UntypedFormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
