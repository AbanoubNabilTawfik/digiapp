import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/core/Services/category.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  categories:any;
  constructor(private CategoryService:CategoryService,private router:Router){}
  ngOnInit(): void {
    this.CategoryService.getAllCategories().subscribe({
      next:response=>this.categories=response
    })
  }

  goToProductItems(category:any)
  {
    this.router.navigate(['/categories/products-items',category])
  }

}
