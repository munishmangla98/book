import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-books',
    standalone: true,
    templateUrl: './books.component.html',
    styleUrl: './books.component.css',
    imports: [HeaderComponent]
})
export class BooksComponent {

}
