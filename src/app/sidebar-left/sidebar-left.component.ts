import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StorageService } from '../storage.service';
import { SavedInputsService } from '../saved-inputs.service';

@Component({
  selector: 'app-sidebar-left',
  templateUrl: './sidebar-left.component.html',
  styleUrls: ['./sidebar-left.component.css']
})
export class SidebarLeftComponent implements OnInit {
  @ViewChild('inputTitle') inputTitle: ElementRef;

  constructor(
    private storageService: StorageService,
    private savedInputsService: SavedInputsService
  ) { }

  ngOnInit() {
  }

  triggerSave() {
    let title = this.inputTitle.nativeElement.value;

    if (title !== '') {
      this.savedInputsService.save(title);
      this.storageService.title = '';
      return;
    }
    this.savedInputsService.save();
  }
}
