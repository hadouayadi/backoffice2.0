import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDeletedComponent } from './parent-deleted.component';

describe('ParentDeletedComponent', () => {
  let component: ParentDeletedComponent;
  let fixture: ComponentFixture<ParentDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentDeletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
