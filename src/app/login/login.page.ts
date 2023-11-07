import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  
  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private navCtrl: NavController) {
    this.formularioLogin = this.fb.group({
        nombre: new FormControl('',Validators.required),
        password: new FormControl('', Validators.required),
    });
    
    
  }

  ngOnInit(): void {
    
  }

  async ingresar(){
    var f = this.formularioLogin.value.nombre;
    var p = this.formularioLogin.value.password;

    if(f == "admin" && p == "password"){
      // Redirigir al tab1 (reemplaza 'tab1' por el nombre de tu pestaña/tab)
      this.navCtrl.navigateRoot('tabs/tab1');
    }else{ 
      this.notificar();
    }
  }
  
  async notificar() {
    const alert = await this.alertController.create({
      header: 'Datos incorrectos!',
      message: `Usuario o contraseña incorrectos. Por favor inténtelo nuevamente.`,
      buttons: ['Aceptar'],
    });
  
    await alert.present();
  }
}
