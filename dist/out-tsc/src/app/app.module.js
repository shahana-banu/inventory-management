"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var list_component_1 = require("./components/list/list.component");
var create_component_1 = require("./components/create/create.component");
var edit_component_1 = require("./components/edit/edit.component");
var login_component_1 = require("./components/login/login.component");
var stack_component_1 = require("./components/stack/stack.component");
var issue_service_1 = require("./issue.service");
var routes = [
    { path: 'create', component: create_component_1.CreateComponent },
    { path: 'edit/:id', component: edit_component_1.EditComponent },
    { path: 'list', component: list_component_1.ListComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'stack', component: stack_component_1.StackComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                list_component_1.ListComponent,
                create_component_1.CreateComponent,
                edit_component_1.EditComponent,
                stack_component_1.StackComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(routes),
                forms_1.ReactiveFormsModule,
                material_1.MatToolbarModule,
                material_1.MatFormFieldModule,
                material_1.MatInputModule,
                material_1.MatOptionModule,
                material_1.MatSelectModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatCardModule,
                material_1.MatTableModule,
                material_1.MatDividerModule,
                material_1.MatSnackBarModule
            ],
            providers: [issue_service_1.IssueService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map