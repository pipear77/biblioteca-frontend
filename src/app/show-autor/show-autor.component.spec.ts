import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAutorComponent } from './show-autor.component';

describe('ShowAutorComponent', () => {
  let component: ShowAutorComponent;
  let fixture: ComponentFixture<ShowAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
