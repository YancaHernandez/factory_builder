import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaVersion3Component } from './logistica_version_3.component';

describe('LogisticaComponent', () => {
  let component: LogisticaVersion3Component;
  let fixture: ComponentFixture<LogisticaVersion3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaVersion3Component]
    });
    fixture = TestBed.createComponent(LogisticaVersion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
