import { PostService } from './services/post.service';
import { HttpModule } from '@angular/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { FormBuilderSampleComponent } from './form-builder-sample/form-builder-sample.component';
import { PostsComponent } from './posts/posts.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    FormBuilderSampleComponent,
    PostsComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
