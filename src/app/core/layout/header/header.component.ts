import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "../../services/auth-service";
import { Lang } from "../../models/lang";
declare let $: any;
declare let layout: any;

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  userLanguage: any;
  constructor(
    public translate: TranslateService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    layout();
    const userLanguage = (this.userLanguage =
      this.authService.getUserLanguage() || "en");
    if (userLanguage === "en") {
      Lang.changeDirection("ltr");
    } else if (userLanguage === "ar") {
      Lang.changeDirection("rtl");
    }
    this.translate.use(userLanguage);
  }
  changeLanguage() {
    if (this.translate.currentLang === "en") {
      this.translate.use("ar");
      Lang.changeDirection("rtl");
      this.authService.setUserLanguage("ar");
    } else {
      this.translate.use("en");
      Lang.changeDirection("ltr");
      this.authService.setUserLanguage("en");
    }
  }
}
