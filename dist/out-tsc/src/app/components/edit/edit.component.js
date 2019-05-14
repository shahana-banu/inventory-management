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
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var issue_service_1 = require("../../issue.service");
var EditComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function EditComponent(issueService, router, route, snackBar, fb) {
        this.issueService = issueService;
        this.router = router;
        this.route = route;
        this.snackBar = snackBar;
        this.fb = fb;
        this.issue = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.updateForm = this.fb.group({
            title: ['', forms_1.Validators.required],
            responsible: '',
            description: '',
            severity: ''
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.issueService.getIssueById(_this.id).subscribe(function (res) {
                _this.issue = res;
                _this.updateForm.get('title').setValue(_this.issue.title);
                _this.updateForm.get('responsible').setValue(_this.issue.responsible);
            });
        });
    };
    EditComponent.prototype.updateIssue = function (title, responsible, description, severity) {
        var _this = this;
        this.issueService.updateIssue(this.id, title, responsible, description, severity).subscribe(function () {
            _this.snackBar.open('Issue updated successfully', 'OK', {
                duration: 3000
            });
        });
    };
    EditComponent = __decorate([
        core_1.Component({
            selector: 'app-edit',
            templateUrl: './edit.component.html',
            styleUrls: ['./edit.component.css']
        }),
        __metadata("design:paramtypes", [issue_service_1.IssueService, router_1.Router, router_1.ActivatedRoute, material_1.MatSnackBar, forms_1.FormBuilder])
    ], EditComponent);
    return EditComponent;
}());
exports.EditComponent = EditComponent;
//# sourceMappingURL=edit.component.js.map