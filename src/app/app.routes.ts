import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { BookReadComponent } from './book-read/book-read.component';
import { BooksComponent } from './books/books.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'book_read',
        component: BookReadComponent
    },
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path:'contactus',
        component:ContactUsComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'login',
        component:LoginComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
