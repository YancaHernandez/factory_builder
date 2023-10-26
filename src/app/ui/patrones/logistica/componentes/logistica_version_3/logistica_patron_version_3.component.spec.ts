import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaPatronVersion3Component } from './logistica_patron_version_3.component';

describe('LogisticaComponent', () => {
  let component: LogisticaPatronVersion3Component;
  let fixture: ComponentFixture<LogisticaPatronVersion3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaPatronVersion3Component]
    });
    fixture = TestBed.createComponent(LogisticaPatronVersion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
