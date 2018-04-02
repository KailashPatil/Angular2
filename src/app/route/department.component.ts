import { Component, OnInit } from "@angular/core";
import { Router, Params } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-departments",
  templateUrl: "./department.component.html"
})
export class DepartmentComponent implements OnInit {
  public departmentLists;
  public departmentId;
  public selectedDepartment;
  public selectedId;
  public selectedName;

  departments = [
    { id: "1", name: "Angular" },
    { id: "2", name: "C++" },
    { id: "3", name: "Java" },
    { id: "4", name: "Android" },
    { id: "5", name: "iOS" }
  ];

  constructor(
    private route: Router, // this 'router' uses to navigate from this page to other
    private activeRoute: ActivatedRoute // this 'router' uses to access data from other component and use it in this page through ngOnInit. Ex: selectedId and selectedName
  ) {}

  showDepartments() {
    this.departmentLists = true;
    this.route.navigate(["/departments"]);
  }

  onSelect(department) {
    this.route.navigate(["/departments", department.id, department.name]); // this line looks for routing path to go to that page - app.routing.ts
    this.selectedDepartment = department;
    this.departmentLists = false;
  }

  isSelected(department) {
    console.log(this.selectedId, this.selectedName, "xx");
    return department.id == this.selectedId;
  }

  ngOnInit() {
    // The below code, access the data from department-detail page - to display active state of a department //  appends id and name into the URL Ex: /2/c++
    this.activeRoute.params.subscribe((params: Params) => {
      this.selectedId = parseInt(params["id"]); // accessing selected id from department-detail page and use it in this page
      this.selectedName = params["name"]; // accessing selected name from department-detail page and use it in this page
      this.departmentLists = true;
    });
  }
}
