import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadComponent } from './book-read.component';

describe('BookReadComponent', () => {
  let component: BookReadComponent;
  let fixture: ComponentFixture<BookReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookReadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
