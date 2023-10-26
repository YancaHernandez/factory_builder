import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaVersion2Component } from './logistica_version_2.component';

describe('LogisticaComponent', () => {
  let component: LogisticaVersion2Component;
  let fixture: ComponentFixture<LogisticaVersion2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaVersion2Component]
    });
    fixture = TestBed.createComponent(LogisticaVersion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
