import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliateMarketingComponent } from './affiliate-marketing.component';

describe('AffiliateMarketingComponent', () => {
  let component: AffiliateMarketingComponent;
  let fixture: ComponentFixture<AffiliateMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliateMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliateMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
