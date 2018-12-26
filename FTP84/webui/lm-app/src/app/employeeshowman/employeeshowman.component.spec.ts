import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeshowmanComponent } from './employeeshowman.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

describe('EmployeeshowmanComponent', () => {
  let component: EmployeeshowmanComponent;
  let fixture: ComponentFixture<EmployeeshowmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({ 
      imports: [
        RouterTestingModule, FormsModule,HttpModule
      ],
      declarations: [ EmployeeshowmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeshowmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
