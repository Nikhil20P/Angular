import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAndEquityDetailsComponent } from './project-and-equity-details.component';

describe('ProjectAndEquityDetailsComponent', () => {
  let component: ProjectAndEquityDetailsComponent;
  let fixture: ComponentFixture<ProjectAndEquityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectAndEquityDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAndEquityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
