import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeutesOrthoComponent } from './therapeutes-ortho.component';

describe('TherapeutesOrthoComponent', () => {
  let component: TherapeutesOrthoComponent;
  let fixture: ComponentFixture<TherapeutesOrthoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapeutesOrthoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TherapeutesOrthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
