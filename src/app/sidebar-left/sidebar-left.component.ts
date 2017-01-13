import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { SavedInputsService } from '../saved-inputs.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {

  constructor(
    private storageService: StorageService,
    private savedInputsService: SavedInputsService
  ) { }

  ngOnInit() {
  }

  triggerSave() {
    this.savedInputsService.save();
  }
}
