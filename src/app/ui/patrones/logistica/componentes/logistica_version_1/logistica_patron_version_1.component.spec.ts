import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaPatronVersion1Component } from './logistica_patron_version_1.component';

describe('LogisticaComponent', () => {
  let component: LogisticaPatronVersion1Component;
  let fixture: ComponentFixture<LogisticaPatronVersion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaPatronVersion1Component]
    });
    fixture = TestBed.createComponent(LogisticaPatronVersion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
