import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjRelatedDocComponent } from './proj-related-doc.component';

describe('ProjRelatedDocComponent', () => {
  let component: ProjRelatedDocComponent;
  let fixture: ComponentFixture<ProjRelatedDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjRelatedDocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjRelatedDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
