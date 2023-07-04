import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/core/Services/products.service';
import { SnackbarServiceService } from 'src/core/Services/snackbar-service.service';

@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.scss']
})
export class AddUpdateProductComponent implements OnInit {
 productId:any;
 product:any;
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private router:Router,private productService:ProductsService,private snackbar: SnackbarServiceService){

  }
  productForm=this.fb.group({
    title:[''],
    price:[''],
    description:[''],
    image:[''],
    category:['']
  })
  onSubmit(){
    let body=
    {
      title:this.productForm.get('title')?.value,
      price:this.productForm.get('price')?.value,
      description:this.productForm.get('description')?.value,
      image:this.productForm.get('image')?.value,
      category:this.productForm.get('category')?.value
    }
    if(this.productId!=null && this.productId!=undefined&&this.productId!="undefined")
{
  this.productService.UpdateProduct(this.productId,body).subscribe({
    next:res=>{
      this.snackbar.success("Updated Successfully")
      this.router.navigate(['/categories/products'])
  }
   })
}
else
     this.productService.addProduct(body).subscribe({
      next:res=>{
        this.snackbar.success("Created Successfully")
        this.router.navigate(['/categories/products'])
    }
     })
  }
  GetFileOnLoad(event:any)
  {

  }

  ngOnInit(): void {
    //check if update or create
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.productId=params.get('id');
    })
    if(this.productId!=null && this.productId!=undefined&&this.productId!="undefined")
    {
     //make a call to get 
      this.productService.GetProductById(this.productId).subscribe({
        next:res=>{
          this.snackbar.success("Get Data Successfully");
          this.product=res;
          this.productForm.patchValue({
            title:this.product.title,
            price:this.product.price,
            description:this.product.description,
            image:this.product.image,
            category:this.product.category

          })
        }
      })
    }
  }
 
}
