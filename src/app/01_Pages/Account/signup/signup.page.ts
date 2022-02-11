import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
// import { ProductsService } from 'src/app/Services/Products/products.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
// import { Product } from '../products/product.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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
        name : new FormControl(null,[Validators.required]),
        slug : new FormControl(null,[Validators.required]),
        price : new FormControl(null,[Validators.required]),
        category : new FormControl(null,[Validators.required]),
        imageURL : new FormControl(null,[Validators.required]),
        description : new FormControl(null),
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