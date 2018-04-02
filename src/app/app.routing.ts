import { Routes, RouterModule } from "@angular/router";

import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

import { SecondTab1Component } from "./second/second-tab1/second-tab1.component";
import { SecondTab2Component } from "./second/second-tab2/second-tab2.component";

import { ThirdComponent } from "./third/third.component";
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
import { StudentComponent } from "./http/student.component";
import { MeanComponent } from "./mean/mean.component";
import { HomeComponent } from "./mean/home/home.component";
import { VideoComponent } from "./mean/video/video.component";
import { LoginComponent } from "./login/login.component";
import { LoginAuthComponent } from "./login-auth/login-auth.component";
import { AuthGuard } from "./login-auth/auth.guard";
import { SignupComponent } from "./login-auth/signup/signup.component";
import { ForgotPasswordComponent } from "./login-auth/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./login-auth/reset-password/reset-password.component";
import { LoginService } from "./login-auth/login.service";
// import { AuthService } from './login-auth/auth.service';
// import { AuthguardGuard } from './login/authguard.guard';
import { SortingComponent } from "./sorting/sorting.component";
import { FiltersComponent } from "./filters/filters.component";
import { Sort2Component } from "./sorting/sort2/sort2.component";
import { SortingAjaxComponent } from "./sorting/sorting-ajax/sorting-ajax.component";
import { AjaxComponent } from "./sorting/ajax/ajax.component";
import { SearchComponent } from "./search/search.component";
import { SearchFormComponent } from "./search/search-form/search-form.component";
import { PaginationComponent } from "./pagination/pagination.component";
import { CsvExportComponent } from "./csv-export/csv-export.component";
import { CsvImportComponent } from "./csv-export/csv-import/csv-import.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const APP_ROUTES: Routes = [
	{ path: "", redirectTo: "/login-auth", pathMatch: "full" },
	{ path: "login-auth", component: LoginAuthComponent },
	{ path: "signup", component: SignupComponent },
	{ path: "forgot-password", component: ForgotPasswordComponent },
	{ path: "reset-password", component: ResetPasswordComponent },
	{ path: "first", canActivate: [AuthGuard], component: FirstComponent }, // canActivate guard checks whether current user has permission to see this page or not and it takes you auth.guard.ts file to check
	// { path: 'first', canActivate: [AuthguardGuard], component: FirstComponent },
	{ path: "second", component: SecondComponent },
	{ path: "first/second", component: SecondComponent },
	{ path: "second/second-tab1", component: SecondTab1Component },
	{ path: "second/second-tab2", component: SecondTab2Component },
	{ path: "third", component: ThirdComponent },
	{ path: "crud", component: CrudComponent },
	{ path: "crud2", component: Crud2Component },

	{ path: "about", component: SecondComponent },
	{ path: "services", component: ThirdComponent },

	{ path: "departments", component: DepartmentComponent },
	{ path: "departments/:id/:name", component: DepartmentDetailComponent }, // this is how we use route params, here id and name are route parms. We used id and name in DepartmentDetailComponent Ex: goToDepartments()
	{ path: "io/one", component: OneComponent },
	{ path: "io/two", component: TwoComponent },
	{ path: "io/pipes", component: PipesComponent },

	{ path: "forms", component: TemplateDrivenFormsComponent },
	{
		path: "forms/template-driven-forms",
		component: TemplateDrivenFormsComponent
	},
	{ path: "forms/model-driven-forms", component: ModelDrivenFormsComponent },
	{
		path: "forms/model-driven-forms-with-formBuilder",
		component: MdfWithFormBuilderComponent
	},
	{ path: "service", component: EmployeeServiceComponent },
	{ path: "http", component: StudentComponent },
	{ path: "mean", component: HomeComponent },
	{ path: "mean/home", component: HomeComponent },
	{ path: "mean/video", component: VideoComponent },
	{ path: "mean/video/:name", component: VideoComponent },
	{ path: "login", component: LoginComponent },
	{ path: "sorting", component: SortingComponent },
	{ path: "filter", component: FiltersComponent },
	{ path: "sorting-in-table", component: Sort2Component },
	{ path: "sorting-ajax", component: SortingAjaxComponent },
	{ path: "sort-using-ajax", component: AjaxComponent },
	{ path: "search", component: SearchComponent },
	{ path: "search-form", component: SearchFormComponent },
	{ path: "pagination", component: PaginationComponent },
	{ path: "csv-export", component: CsvExportComponent },
	{ path: "csv-import", component: CsvImportComponent },
	{ path: "**", component: PageNotFoundComponent }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
