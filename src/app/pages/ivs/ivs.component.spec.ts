import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvsComponent } from './ivs.component';

describe('IvsComponent', () => {
  let component: IvsComponent;
  let fixture: ComponentFixture<IvsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IvsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
