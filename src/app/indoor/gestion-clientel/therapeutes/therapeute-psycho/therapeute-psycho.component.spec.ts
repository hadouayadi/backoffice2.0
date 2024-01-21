import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeutePsychoComponent } from './therapeute-psycho.component';

describe('TherapeutePsychoComponent', () => {
  let component: TherapeutePsychoComponent;
  let fixture: ComponentFixture<TherapeutePsychoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapeutePsychoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TherapeutePsychoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
