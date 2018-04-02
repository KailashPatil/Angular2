import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./department-detail.component.html"
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  public departmentName;
  public showSelectedDepartment = true;

  constructor(private activeRoute: ActivatedRoute, private route: Router) {}

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    let selectedName = this.departmentName ? this.departmentName : null;
    console.log(selectedId, selectedName, "22");
    this.route.navigate([
      "/departments",
      { id: selectedId, name: selectedName }
    ]); // this line of code makes URL to display id and name with its value. Ex: id=5;name:iOS
  }

  goPrevious() {
    let prevId = this.departmentId - 1;
    let prevDepartmentName = this.departmentName - 1;
    this.route.navigate(["/departments", prevId, prevDepartmentName]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    let nextDepartmentName = this.departmentName + 1;
    this.route.navigate(["/departments", nextId, nextDepartmentName]);
  }

  ngOnInit() {
    // The below code, access the data from department page //
    this.activeRoute.params.subscribe((params: Params) => {
      this.departmentId = parseInt(params["id"]); // accessing department id from department page and use it in this page to display in html, see html page
      this.departmentName = params["name"]; // accessing department name from department page and use it in this page to display in html, see html page
    });
  }
}
