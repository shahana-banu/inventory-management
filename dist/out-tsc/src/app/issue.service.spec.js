"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var issue_service_1 = require("./issue.service");
describe('IssueService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [issue_service_1.IssueService]
        });
    });
    it('should be created', testing_1.inject([issue_service_1.IssueService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=issue.service.spec.js.map