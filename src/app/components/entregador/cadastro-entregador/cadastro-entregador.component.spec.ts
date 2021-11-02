import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEntregadorComponent } from './cadastro-entregador.component';

describe('CadastroEntregadorComponent', () => {
  let component: CadastroEntregadorComponent;
  let fixture: ComponentFixture<CadastroEntregadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEntregadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEntregadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
