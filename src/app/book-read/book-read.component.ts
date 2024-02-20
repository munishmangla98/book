import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-book-read',
    standalone: true,
    templateUrl: './book-read.component.html',
    styleUrl: './book-read.component.css',
    imports: [HeaderComponent]
})
export class BookReadComponent {

}
