import { Component, HostListener, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator!';
  @ViewChild('test') theButton: ElementRef;
  @HostListener('window:keyup', ['$event.key'])
  theThing(key: string) {
    if (key !== '8') { return; };

    let event = new MouseEvent('click', { bubbles: true });
    this.renderer.invokeElementMethod(this.theButton.nativeElement, 'dispatchEvent', [event]);
  }

  constructor(private renderer: Renderer) { }

  yowzers() {
    console.log('hula hoop')
  }
}
