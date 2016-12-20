import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculator!';

  @HostListener('window:keyup', ['$event'])
  test(event: any) {
    console.log(event.key);
  }
}
