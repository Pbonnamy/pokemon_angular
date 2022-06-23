import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-battle-logs',
  templateUrl: './battle-logs.component.html',
  styleUrls: ['./battle-logs.component.css']
})
export class BattleLogsComponent implements OnInit {

  @Input()battle_logs:{color: string, text: string}[] = [];
  @Input()today : number = Date.now() ;

  constructor() { }

  ngOnInit(): void { }
}
