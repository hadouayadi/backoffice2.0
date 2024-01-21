import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuteDeletedComponent } from './therapeute-deleted.component';

describe('TherapeuteDeletedComponent', () => {
  let component: TherapeuteDeletedComponent;
  let fixture: ComponentFixture<TherapeuteDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapeuteDeletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TherapeuteDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
