import { ButtonComponent } from './../../../../libs/component-ui/src/lib/button/button.component';
import { Component } from "@angular/core";
import { NxWelcomeComponent } from "./nx-welcome.component";

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, ButtonComponent],
  selector: "mbb-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cm-app";
}
