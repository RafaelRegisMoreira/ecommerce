import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEletroComponent } from './crud-eletro.component';

describe('CrudEletroComponent', () => {
  let component: CrudEletroComponent;
  let fixture: ComponentFixture<CrudEletroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudEletroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudEletroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
