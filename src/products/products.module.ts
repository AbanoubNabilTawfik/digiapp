import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesProductsComponent } from './categories-products/categories-products.component';
import { ProductsComponent } from './products/products.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUpdateProductComponent } from './add-update-product/add-update-product.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/core/core.module';
import { ProductItemsComponent } from './product-items/product-items.component';

@NgModule({
  declarations: [
    CategoriesProductsComponent,
    ProductsComponent,
    AddUpdateProductComponent,
    ProductItemsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule ,
    MatCheckboxModule,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatSortModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    MatRadioModule,
    MatSelectModule,
    CoreModule
  ]
})
export class ProductsModule { }
