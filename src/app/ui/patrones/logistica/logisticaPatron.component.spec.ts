import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaPatronComponent } from './logisticaPatron.component';

describe('LogisticaPatronComponent', () => {
  let component: LogisticaPatronComponent;
  let fixture: ComponentFixture<LogisticaPatronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaPatronComponent]
    });
    fixture = TestBed.createComponent(LogisticaPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
