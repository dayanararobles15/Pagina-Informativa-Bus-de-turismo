import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBoletoComponent } from './nuevo-boleto.component';

describe('NuevoBoletoComponent', () => {
  let component: NuevoBoletoComponent;
  let fixture: ComponentFixture<NuevoBoletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoBoletoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoBoletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
