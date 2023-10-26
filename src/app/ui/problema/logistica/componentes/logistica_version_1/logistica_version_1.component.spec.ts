import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaVersion1Component } from './logistica_version_1.component';

describe('LogisticaComponent', () => {
  let component: LogisticaVersion1Component;
  let fixture: ComponentFixture<LogisticaVersion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogisticaVersion1Component]
    });
    fixture = TestBed.createComponent(LogisticaVersion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
