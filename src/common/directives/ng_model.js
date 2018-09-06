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
var decorators_1 = require("../../core/directives/decorators");
var NgModel = (function () {
    function NgModel() {
    }
    NgModel.prototype.$render = function () {
    };
    NgModel.prototype.$setValidity = function (validationErrorKey, isValid) {
    };
    NgModel.prototype.$setViewValue = function (value, trigger) {
    };
    NgModel.prototype.$setPristine = function () {
    };
    NgModel.prototype.$setDirty = function () {
    };
    NgModel.prototype.$validate = function () {
    };
    NgModel.prototype.$setTouched = function () {
    };
    NgModel.prototype.$setUntouched = function () {
    };
    NgModel.prototype.$rollbackViewValue = function () {
    };
    NgModel.prototype.$commitViewValue = function () {
    };
    NgModel.prototype.$isEmpty = function (value) {
        return undefined;
    };
    NgModel.prototype.$processModelValue = function (value) {
    };
    NgModel.prototype.$overrideModelOptions = function (value) {
    };
    return NgModel;
}());
NgModel = __decorate([
    decorators_1.Directive({ selector: '[ng-model]' }),
    __metadata("design:paramtypes", [])
], NgModel);
exports.NgModel = NgModel;
//# sourceMappingURL=ng_model.js.map
