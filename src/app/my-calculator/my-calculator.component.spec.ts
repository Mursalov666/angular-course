import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCalculatorComponent } from './my-calculator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('MyCalculatorComponent', () => {
  let component: MyCalculatorComponent;
  let fixture: ComponentFixture<MyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCalculatorComponent, FormsModule, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
