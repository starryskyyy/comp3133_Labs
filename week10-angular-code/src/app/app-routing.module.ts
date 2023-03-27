import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';
import { StudentComponent } from './student/student.component';
import { UserdatalistComponent } from './userdatalist/userdatalist.component';

const routes: Routes = [
  { path:'', redirectTo:'student', pathMatch:'full'},
  { path: 'student', component:StudentComponent},
  { path: 'faculty', component:FacultyComponent},
  {path: 'userList', component:UserdatalistComponent},
  { path: 'products', component:ProductComponent},
  { path: 'productsdetails/:pid', component:ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
