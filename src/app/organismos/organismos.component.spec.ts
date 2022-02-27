import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismosComponent } from './organismos.component';

describe('OrganismosComponent', () => {
  let component: OrganismosComponent;
  let fixture: ComponentFixture<OrganismosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganismosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganismosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
