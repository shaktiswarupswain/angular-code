import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: 'app-server',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    },2000)
   }

  ngOnInit(): void {
  }

}
