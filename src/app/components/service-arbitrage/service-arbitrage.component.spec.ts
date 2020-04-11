import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceArbitrageComponent } from './service-arbitrage.component';

describe('ServiceArbitrageComponent', () => {
  let component: ServiceArbitrageComponent;
  let fixture: ComponentFixture<ServiceArbitrageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceArbitrageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceArbitrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
