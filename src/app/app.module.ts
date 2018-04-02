import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NguiTabModule } from "@ngui/tab";
import { Routing } from "./app.routing";
import { Http, HttpModule } from "@angular/http";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { NgxPaginationModule } from "ngx-pagination";
// import { ngCsv, ngSanitize } from "ng-csv";
import { CookieService } from "angular2-cookie/services/cookies.service";

import { AppComponent } from "./app.component";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";
import { SecondTab1Component } from "./second/second-tab1/second-tab1.component";
import { SecondTab2Component } from "./second/second-tab2/second-tab2.component";
import { ThirdComponent } from "./third/third.component";

import { CountryService } from "./third/country.service";
import { CrudComponent } from "./crud/crud.component";
import { Crud2Component } from "./crud2/crud2.component";

import { DepartmentComponent } from "./route/department.component";
import { DepartmentDetailComponent } from "./route/department-detail.component";
import { OneComponent } from "./io/one/one.component";
import { TwoComponent } from "./io/two/two.component";
import { PipesComponent } from "./io/pipes/pipes.component";

import { TemplateDrivenFormsComponent } from "./forms/template-driven-forms/template-driven-forms.component";
import { ModelDrivenFormsComponent } from "./forms/model-driven-forms/model-driven-forms.component";
import { MdfWithFormBuilderComponent } from "./forms/mdf-with-form-builder/mdf-with-form-builder.component";

import { EmployeeServiceComponent } from "./service/employee.component";
import { EmployeeListServiceComponent } from "./service/employee-list.component";
import { EmployeeDetailServiceComponent } from "./service/employee-detail.component";
import { EmployeeService } from "./service/employee.service";

import { StudentComponent } from "./http/student.component";
import { StudentListComponent } from "./http/student-list.component";
import { StudentDetailComponent } from "./http/student-detail.component";
import { StudentService } from "./http/student.service";
import { MeanComponent } from "./mean/mean.component";
import { HomeComponent } from "./mean/home/home.component";
import { VideoComponent } from "./mean/video/video.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { VideoDetailComponent } from "./mean/video-detail/video-detail.component";
import { VideoListComponent } from "./mean/video-list/video-list.component";
import { VideoService } from "./mean/video.service";
import { SafeurlPipe } from "./mean/safeurl.pipe";
import { LoginComponent } from "./login/login.component";
import { UserService } from "./login/user.service";
// import { AuthguardGuard } from './login/authguard.guard';

import { LoginAuthComponent } from "./login-auth/login-auth.component";
import { LoginService } from "./login-auth/login.service";
import { SignupComponent } from "./login-auth/signup/signup.component";
import { AuthGuard } from "./login-auth/auth.guard";
import { ForgotPasswordComponent } from "./login-auth/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./login-auth/reset-password/reset-password.component";
import { SortingComponent } from "./sorting/sorting.component";
import { SortingService } from "./sorting/sorting.service";
import { SortPipe } from "./sorting/sort.pipe";
import { FiltersComponent } from "./filters/filters.component";
import { FiltersService } from "./filters/filters.service";
import { FilterPipe } from "./filters/filter.pipe";
import { FilterMediumPipe } from "./filters/filter-medium.pipe";
import { FilterAdvancedPipe } from "./filters/filter-advanced.pipe";
import { Sort2Component } from "./sorting/sort2/sort2.component";
import { SortingAjaxComponent } from "./sorting/sorting-ajax/sorting-ajax.component";
import { AjaxComponent } from "./sorting/ajax/ajax.component";
import { SearchComponent } from "./search/search.component";
import { SearchService } from "./search/search.service";
import { SearchFormComponent } from "./search/search-form/search-form.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { PaginationService } from "./pagination/pagination.service";
import { CsvExportComponent } from "./csv-export/csv-export.component";
import { CsvExportService } from "./csv-export/csv-export.service";
import { CsvImportComponent } from './csv-export/csv-import/csv-import.component';

@NgModule({
    declarations: [
        AppComponent,
        FirstComponent,
        SecondComponent,
        SecondTab1Component,
        SecondTab2Component,
        ThirdComponent,
        CrudComponent,
        Crud2Component,
        DepartmentComponent,
        DepartmentDetailComponent,
        OneComponent,
        TwoComponent,
        PipesComponent,
        TemplateDrivenFormsComponent,
        ModelDrivenFormsComponent,
        MdfWithFormBuilderComponent,
        EmployeeServiceComponent,
        EmployeeListServiceComponent,
        EmployeeDetailServiceComponent,
        StudentComponent,
        StudentListComponent,
        StudentDetailComponent,
        MeanComponent,
        HomeComponent,
        VideoComponent,
        PageNotFoundComponent,
        VideoDetailComponent,
        VideoListComponent,
        SafeurlPipe,
        LoginComponent,
        // AuthguardGuard,
        LoginAuthComponent,
        SignupComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        SortingComponent,
        SortPipe,
        FiltersComponent,
        FilterPipe,
        FilterMediumPipe,
        FilterAdvancedPipe,
        Sort2Component,
        SortingAjaxComponent,
        AjaxComponent,
        SearchComponent,
        SearchFormComponent,
        PaginationComponent,
        CsvExportComponent,
        CsvImportComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NguiTabModule,
        Routing,
        HttpModule,
        RouterModule,
        Ng2SmartTableModule,
        NgxPaginationModule
    ],
    providers: [
        CountryService,
        EmployeeService,
        StudentService,
        VideoService,
        UserService,
        LoginService,
        AuthGuard,
        SortingService,
        FiltersService,
        SearchService,
        PaginationService,
        CsvExportService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
