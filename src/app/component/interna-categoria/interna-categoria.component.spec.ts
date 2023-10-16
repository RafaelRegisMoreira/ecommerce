import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaCategoriaComponent } from './interna-categoria.component';

describe('InternaCategoriaComponent', () => {
  let component: InternaCategoriaComponent;
  let fixture: ComponentFixture<InternaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
