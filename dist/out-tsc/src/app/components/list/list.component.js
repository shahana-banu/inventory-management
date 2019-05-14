"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var issue_service_1 = require("../../issue.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(issueService, router) {
        this.issueService = issueService;
        this.router = router;
        this.displayedColumns = ['title', 'responsible', 'severity', 'description', 'actions'];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.fetchIssues();
    };
    ListComponent.prototype.fetchIssues = function () {
        var _this = this;
        this.issueService
            .getIssues()
            .subscribe(function (data) {
            _this.issues = data;
            console.log('Data requested ...');
            console.log(_this.issues);
        });
    };
    ListComponent.prototype.editIssue = function (id) {
        this.router.navigate(["/edit/" + id]);
    };
    ListComponent.prototype.deleteIssue = function (id) {
        var _this = this;
        this.issueService.deleteIssue(id).subscribe(function () {
            _this.fetchIssues();
        });
    };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
        }),
        __metadata("design:paramtypes", [issue_service_1.IssueService, router_1.Router])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map