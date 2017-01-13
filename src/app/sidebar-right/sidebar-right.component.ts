import { Component, OnInit } from '@angular/core';
import { SavedInputsService } from '../saved-inputs.service';

@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent implements OnInit {

  constructor(private savedInputsService: SavedInputsService) { }

  ngOnInit() {
  }

}
