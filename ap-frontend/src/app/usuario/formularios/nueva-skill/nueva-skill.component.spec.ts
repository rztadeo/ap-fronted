import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaSkillComponent } from './nueva-skill.component';

describe('NuevaSkillComponent', () => {
  let component: NuevaSkillComponent;
  let fixture: ComponentFixture<NuevaSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
