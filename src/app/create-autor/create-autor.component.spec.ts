import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAutorComponent } from './create-autor.component';

describe('CreateAutorComponent', () => {
  let component: CreateAutorComponent;
  let fixture: ComponentFixture<CreateAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
