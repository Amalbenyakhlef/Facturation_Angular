import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighchartStatisticComponent } from './highchart-statistic.component';

describe('HighchartStatisticComponent', () => {
  let component: HighchartStatisticComponent;
  let fixture: ComponentFixture<HighchartStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighchartStatisticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighchartStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
