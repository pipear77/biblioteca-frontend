import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAutorComponent } from './update-autor.component';

describe('UpdateAutorComponent', () => {
  let component: UpdateAutorComponent;
  let fixture: ComponentFixture<UpdateAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
