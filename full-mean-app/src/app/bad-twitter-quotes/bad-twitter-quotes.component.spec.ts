import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadTwitterQuotesComponent } from './bad-twitter-quotes.component';

describe('BadTwitterQuotesComponent', () => {
  let component: BadTwitterQuotesComponent;
  let fixture: ComponentFixture<BadTwitterQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadTwitterQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadTwitterQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
