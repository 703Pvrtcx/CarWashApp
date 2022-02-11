import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
// import { ProductsService } from 'src/app/Services/Products/products.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
// import { Product } from '../products/product.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
 // @Input() product: Product;
 isEditMode: boolean;
 form:  FormGroup;
 constructor(private loadingCtrl: LoadingController,
   private modalContrl: ModalController,
   // private productService: ProductsService
   ) {

     // this.isEditMode =  this.productService.editProduct;
   }
ngOnInit() {
    this.form =  new FormGroup({
       email : new FormControl(null,[Validators.required]),
       password : new FormControl(null,[Validators.required]),
   
     });
 }
 closeModal(){

   // this.productService.editProduct = false;
   this.modalContrl.dismiss();
 }
 async submitProduct(){
   const loading = await this.loadingCtrl.create({message: ' Adding ...'});
   // loading.present();
   // this.productService.addProduct(this.form.value).
   // pipe(take(1))
   // .subscribe(()=>{
     this.form.reset();
   //   loading.dismiss();
   // });
 }
}