import { Component, OnInit } from "@angular/core";
import { SortingService } from "../sorting.service";
import * as $ from "jquery";
import * as _ from "underscore";

@Component({
  selector: "app-sort2",
  templateUrl: "./sort2.component.html"
})
export class Sort2Component implements OnInit {
  public lists = [];
  public tableSort;
  public ageAsc = true;
  public nameAsc = true;
  public cityAsc = true;
  public ageDesc;
  public nameDesc;
  public cityDesc;

  constructor(private sortingService: SortingService) {}

  sortColumn(key, direction) {
    this.lists = _.sortBy(this.lists, key);
    if (direction == "asc") {
      if (key == "name") {
        this.nameDesc = true;
        this.nameAsc = false;
      }
      if (key == "age") {
        this.ageDesc = true;
        this.ageAsc = false;
      }
      if (key == "city") {
        this.cityDesc = true;
        this.cityAsc = false;
      }
    }

    if (direction == "desc") {
      this.lists = this.lists.reverse();
      if (key == "age") {
        this.ageDesc = false;
        this.ageAsc = true;
      }
      if (key == "city") {
        this.cityDesc = false;
        this.cityAsc = true;
      }
      if (key == "name") {
        this.nameDesc = false;
        this.nameAsc = true;
      }
    }
  }

  toggle() {
    this.tableSort = !this.tableSort;
  }

  ngOnInit() {
    this.sortingService.getLists().subscribe(resLists => {
      this.lists = resLists;
      this.lists = _.sortBy(this.lists, "age");
    });
  }
}
