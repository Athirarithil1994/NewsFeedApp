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

  /*****************getNewsFeed********************** */
  newsFeedDisplay() {
    this.apiService.getNewsFeeds().subscribe(
      (res: any) => {
        console.log(res);
        this.items = res.articles;
      },
      (err: any) => {}
    );
  }
  articleTrackBy(index: any, color: any) {
    return color.title;
  }
  showOrHideDesc(flag: boolean) {
    if (flag) {
      this.showMore = false;
    } else {
      this.showMore = true;
    }
  }



}
