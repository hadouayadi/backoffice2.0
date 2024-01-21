import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapeuteErgoComponent } from './therapeute-ergo.component';

describe('TherapeuteErgoComponent', () => {
  let component: TherapeuteErgoComponent;
  let fixture: ComponentFixture<TherapeuteErgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TherapeuteErgoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TherapeuteErgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
