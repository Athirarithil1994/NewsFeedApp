import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../core/http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  items: any = [];
  showMore: boolean = false;
  constructor(private apiService: HttpService) {
  }
  articles: any = [];
  protected loading: boolean = false;
  numbers: any[] = [];

  ngOnInit(): void {
    this.newsFeedDisplay();
  }

  /*
  @Desc : To get the news feed data
  @Param : NA
  @Return : NA
  */
  newsFeedDisplay() {
    this.apiService.getNewsFeeds().subscribe(
      (res: any) => {
       
        this.items = res.articles;
      },
      (err: any) => {}
    );
  }

  /*
  @Desc : Show or Hide the news title
  @Param : boolean flag
  @Return : NA
  */
  showOrHideDesc(flag: boolean) {
    if (flag) {
      this.showMore = false;
    } else {
      this.showMore = true;
    }
  }



}
