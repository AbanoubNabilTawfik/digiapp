import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPorduct } from 'src/core/Models/IProduct';
import { CategoryService } from 'src/core/Services/category.service';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.scss']
})
export class ProductItemsComponent implements OnInit {
  categoryName:any;
  products:IPorduct[]=[];
  constructor(private activatedRoute:ActivatedRoute,private categoryService :CategoryService){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.categoryName=params.get('category');
    }) 

    this.categoryService.getAllProductsByCategoryName(this.categoryName).subscribe({
      next:response=>this.products=response
    })
  
  }



}
