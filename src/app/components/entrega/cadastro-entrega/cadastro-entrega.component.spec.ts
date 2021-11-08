import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEntregaComponent } from './cadastro-entrega.component';

describe('CadastroEntregaComponent', () => {
  let component: CadastroEntregaComponent;
  let fixture: ComponentFixture<CadastroEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
