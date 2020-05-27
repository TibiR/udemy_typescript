var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Departaments (" + this.id + "): " + this.name);
    };
    Department.prototype.add = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.show = function () {
        console.log('employees: ', this.employees);
    };
    return Department;
}());
var ITDepartament = /** @class */ (function (_super) {
    __extends(ITDepartament, _super);
    function ITDepartament(webDep, id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.webDep = webDep;
        return _this;
    }
    ITDepartament.prototype.searchEmployee = function (txt) {
        console.log('search result : ', this.employees.filter(function (e) { return e === txt; }));
    };
    return ITDepartament;
}(Department));
var itDep = new ITDepartament(true, 'iT', 'IT Departament');
itDep.add('Tibi');
itDep.show();
itDep.searchEmployee('Tibi');
itDep.describe();
