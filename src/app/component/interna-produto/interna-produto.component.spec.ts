import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaProdutoComponent } from './interna-produto.component';

describe('InternaProdutoComponent', () => {
  let component: InternaProdutoComponent;
  let fixture: ComponentFixture<InternaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
