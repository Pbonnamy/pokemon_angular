import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BattleLogsComponent } from './battle-logs.component';

describe('BattleLogsComponent', () => {
  let component: BattleLogsComponent;
  let fixture: ComponentFixture<BattleLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BattleLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
