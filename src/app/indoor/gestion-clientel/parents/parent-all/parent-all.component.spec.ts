import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentAllComponent } from './parent-all.component';

describe('ParentAllComponent', () => {
  let component: ParentAllComponent;
  let fixture: ComponentFixture<ParentAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
