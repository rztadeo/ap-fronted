import { TestBed } from '@angular/core/testing';

import { LeerPerfilService } from './leer-perfil.service';

describe('LeerPerfilService', () => {
  let service: LeerPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
