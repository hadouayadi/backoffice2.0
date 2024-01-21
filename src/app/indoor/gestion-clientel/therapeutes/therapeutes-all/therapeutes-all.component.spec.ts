import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeutesAllComponent } from './therapeutes-all.component';

describe('TherapeutesAllComponent', () => {
  let component: TherapeutesAllComponent;
  let fixture: ComponentFixture<TherapeutesAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapeutesAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TherapeutesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
