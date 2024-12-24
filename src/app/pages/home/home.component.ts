import { Component, OnInit, OnChanges, DoCheck } from "@angular/core";
import { AuthService } from "src/app/core/services/auth-service";
import { TranslateService } from "@ngx-translate/core";
import { lang } from "src/environments/environment";
import { NgwWowService } from "ngx-wow";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  // lang: any;
  constructor(
    private translate: TranslateService,
    private wowService: NgwWowService
  ) {
    // this.lang = lang;
    this.wowService.init();
  }

  ngOnInit() {}
}
