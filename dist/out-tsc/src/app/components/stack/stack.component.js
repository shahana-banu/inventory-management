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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var issue_service_1 = require("../../issue.service");
var StackComponent = /** @class */ (function () {
    function StackComponent(issueService, fb, router) {
        this.issueService = issueService;
        this.fb = fb;
        this.router = router;
        this.createForm = this.fb.group({
            title: ['', forms_1.Validators.required],
            responsible: '',
            description: '',
            severity: ''
        });
    }
    StackComponent.prototype.addIssue = function (title, responsible, description, severity) {
        var _this = this;
        this.issueService.addIssue(title, responsible, description, severity).subscribe(function () {
            _this.router.navigate(['/list']);
        });
    };
    StackComponent.prototype.ngOnInit = function () {
    };
    StackComponent = __decorate([
        core_1.Component({
            selector: 'app-create',
            templateUrl: './stack.component.html',
            styleUrls: ['./stack.component.css']
        }),
        __metadata("design:paramtypes", [issue_service_1.IssueService, forms_1.FormBuilder, router_1.Router])
    ], StackComponent);
    return StackComponent;
}());
exports.StackComponent = StackComponent;
//# sourceMappingURL=stack.component.js.map