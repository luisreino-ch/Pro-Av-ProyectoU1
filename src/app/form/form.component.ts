import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  formulario: FormGroup;

  siteKey: string = "6LctGnYmAAAAAI_RlcWxFwwArNMLNMWN6ihIRl4v";

  mostrarCampoArchivo: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      nombres: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      apellidos: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fechaNacimiento: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      nivelAcademico: ['secundaria', Validators.required],
      tipoSangre: ['', Validators.required],
      tipoLicencia: ['', Validators.required],
      examenPsicometrico: ['', Validators.requiredTrue],
      archivo: ['', Validators.required]
    });
  }

  ngOnInit(): void {



  }


  get f() {
    return this.formulario.controls;
  }

  cambiarNivelAcademico(nivel: string) {
    if (nivel === 'tercer-nivel') {
      this.formulario.get('nivelAcademico')?.setValue(nivel);
    } else {
      this.formulario.get('nivelAcademico')?.setValue('secundaria');
    }
  }

  cambiarExamenPsicometrico() {
    this.mostrarCampoArchivo = this.formulario.get('examenPsicometrico')?.value;
    if (!this.mostrarCampoArchivo) {
      this.formulario.get('archivo')?.setValue('');
    }
  }

  guardar() {
    if (this.formulario.invalid) {
      return;
    }

    // Aquí puedes hacer algo con los datos del formulario
    console.log(this.formulario.value);
  }
}
