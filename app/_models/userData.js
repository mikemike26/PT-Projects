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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var UserData = (function () {
    function UserData(http) {
        this.http = http;
        this.UserUrl = "";
        this.dummyUser = [
            {
                id: 0,
                first: "Mike",
                last: "Rensel",
                email: "mike.rensel@mkte.com",
                image: "../assets/images/profile-placeholder.png",
                department: "isg",
                level: "0"
            }
        ];
    }
    UserData.prototype.getuser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.dummyUser[0]);
        });
    };
    UserData = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserData);
    return UserData;
}());
exports.UserData = UserData;
//# sourceMappingURL=userData.js.map