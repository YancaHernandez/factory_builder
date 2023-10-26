import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaPatronVersion2Component } from './logistica_patron_version_2.component';

describe('LogisticaComponent', () => {
  let component: LogisticaPatronVersion2Component;
  let fixture: ComponentFixture<LogisticaPatronVersion2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaPatronVersion2Component]
    });
    fixture = TestBed.createComponent(LogisticaPatronVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
