import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLibroComponent } from './show-libro.component';

describe('ShowLibroComponent', () => {
  let component: ShowLibroComponent;
  let fixture: ComponentFixture<ShowLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
