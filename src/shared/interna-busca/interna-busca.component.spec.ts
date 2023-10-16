import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaBuscaComponent } from './interna-busca.component';

describe('InternaBuscaComponent', () => {
  let component: InternaBuscaComponent;
  let fixture: ComponentFixture<InternaBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaBuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
