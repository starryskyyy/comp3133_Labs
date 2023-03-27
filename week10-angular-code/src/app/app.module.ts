import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { FormsModule } from '@angular/forms';
import { FacultyComponent } from './faculty/faculty.component';
import { GreetPipe } from './greet.pipe';
import { AppColorDirective } from './app-color.directive';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserdatalistComponent } from './userdatalist/userdatalist.component';
import {HttpClientModule } from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { InputFormatDirective } from './input-format.directive';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    StudentComponent,
    FacultyComponent,
    GreetPipe,
    AppColorDirective,
    ProductComponent,
    ProductDetailsComponent,
    UserdatalistComponent,
    HeroesComponent,
    RemoveSpacesPipe,
    InputFormatDirective,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
