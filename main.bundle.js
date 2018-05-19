webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t<h3>About Us</h3>\n\n\t<div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n\t\t<div fxFlex=\"70%\">\n\t\t\t<h2>Our History</h2>\n\t\t\t<p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>\n\t\t\t<p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>\n\t\t</div>\n\n\t\t<div fxFlex=\"30%\">\n\t\t\t<md-card>\n\t\t\t\t<md-card-header>\n\t\t\t\t\t<md-card-title>\n\t\t\t\t\t\t<h2>Facts At a Glance</h2>\n\t\t\t\t\t</md-card-title>\n\t\t\t\t</md-card-header>\n\n\t\t\t\t<md-card-content>\n\t\t\t\t\t<dl>\n\t\t\t\t\t\t<dt>Started</dt>\n\t\t\t\t\t\t<dd>3 Feb. 2013</dd>\n\t\t\t\t\t\t<dt>Major Stake Holder</dt>\n\t\t\t\t\t\t<dd>3HK Fine Foods Inc.</dd>\n\t\t\t\t\t\t<dt>Last Year's Turnover</dt>\n\t\t\t\t\t\t<dd>$1,250,375</dd>\n\t\t\t\t\t\t<dt>Employees</dt>\n\t\t\t\t\t\t<dd>40</dd>\n\t\t\t\t\t</dl>\n\t\t\t\t</md-card-content>\n\t\t\t</md-card>\n\t\t</div>\n\t</div>\n\n\t<md-card>\n\t\t<blockquote>\n\t\t\t<h3>You better cut the pizza in four pieces because I'm not hungry enough to eat six.</h3>\n\n\t\t\t<footer>\n\t\t\t\t<cite>The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014</cite>\n\t\t\t</footer>\n\t\t</blockquote>\n\t</md-card>\n\n\t<div *ngIf=\"leaders\">\n\t\t<h2>Corporate Leadership</h2>\n\t\t<md-list [@expand]>\n\t\t\t<md-list-item *ngFor=\"let leader of leaders\">\n\n\t\t\t\t<img md-list-avatar src=\"{{'/assets/' + leader.image}}\" alt=\"{{leader.name}}\">\n\t\t\t\t<h3 mdLine>{{leader.name}} {{leader.abbr}}</h3>\n\t\t\t\t<p mdLine>{{leader.designation}}</p>\n\t\t\t\t<p mdLine>{{leader.description}}</p>\n\n\t\t\t</md-list-item>\n\t\t</md-list>\n\t</div>\n\n\t<div [hidden]=\"leaders || errMess\">\n\t\t<md-spinner></md-spinner> <h4>Loading . . . Please Wait</h4>\n\t</div>\n\n\t<div *ngIf=\"errMess\">\n\t\t<h2>Error</h2>\n\t\t<h4>{{errMess}}</h4>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n[mdLine] {\n  white-space: normal !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AboutComponent = (function () {
    function AboutComponent(leaderservice, BaseURL) {
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leaderservice.getLeaders()
            .subscribe(function (leaders) { return _this.leaders = leaders; }, function (errMess) { return _this.errMess = errMess; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")],
        host: {
            '[@flyInOut]': '',
            'style': 'display: block'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_leader_service__["a" /* LeaderService */]) === "function" && _a || Object, Object])
], AboutComponent);

var _a;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/animations/app.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (immutable) */ __webpack_exports__["a"] = flyInOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expand;
/* harmony export (immutable) */ __webpack_exports__["c"] = visibility;

function flyInOut() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('flyInOut', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('500ms ease-in')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':leave', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('500ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 })))
    ]);
}
function expand() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('expand', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateX(0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(-50%)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('500ms ease-in')
        ])
    ]);
}
function visibility() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* trigger */])('visibility', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('shown', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'scale(1.0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('hidden', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'scale(0.5)', opacity: 0 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* transition */])('* => *', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* animate */])('500ms ease-in-out'))
    ]);
}
//# sourceMappingURL=app.animation.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("../../../../../src/app/app-routing/routes.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__routes__["a" /* routes */])
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_1__about_about_component__["a" /* AboutComponent */] },
    { path: 'menu', component: __WEBPACK_IMPORTED_MODULE_2__menu_menu_component__["a" /* MenuComponent */] },
    { path: 'dishdetail/:id', component: __WEBPACK_IMPORTED_MODULE_3__dishdetail_dishdetail_component__["a" /* DishdetailComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_4__contact_contact_component__["a" /* ContactComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_own_custom_material_my_own_custom_material_module__ = __webpack_require__("../../../../../src/app/my-own-custom-material/my-own-custom-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_restConfig__ = __webpack_require__("../../../../../src/app/shared/restConfig.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_highlight_directive__ = __webpack_require__("../../../../../src/app/directives/highlight.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__dishdetail_dishdetail_component__ = __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shared_baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_16__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_17__directives_highlight_directive__["a" /* HighlightDirective */],
            __WEBPACK_IMPORTED_MODULE_18__dishdetail_dishdetail_component__["a" /* DishdetailComponent */],
            __WEBPACK_IMPORTED_MODULE_19__contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__my_own_custom_material_my_own_custom_material_module__["a" /* MyOwnCustomMaterialModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_restangular__["RestangularModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__shared_restConfig__["a" /* RestangularConfigFactory */]),
            __WEBPACK_IMPORTED_MODULE_9__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__services_dish_service__["a" /* DishService */],
            __WEBPACK_IMPORTED_MODULE_21__services_promotion_service__["a" /* PromotionService */],
            __WEBPACK_IMPORTED_MODULE_22__services_leader_service__["a" /* LeaderService */],
            __WEBPACK_IMPORTED_MODULE_24__services_feedback_service__["a" /* FeedbackService */],
            { provide: 'BaseURL', useValue: __WEBPACK_IMPORTED_MODULE_23__shared_baseurl__["a" /* baseURL */] }
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t<h3>Contact Us</h3>\n\t<hr>\n\n\t<div>\n\t\t<h3>Location Information</h3>\n\t\t<div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\n\t\t\t<div fxFlex=\"50%\" fxFlexOffset=\"50px\">\n\t\t\t\t\n\t\t\t\t<h4>Our Address</h4>\n\t\t\t\t<address>\n\t\t\t\t\t121, Clear Water Bay Road<br>\n\t\t            Clear Water Bay, Kowloon<br>\n\t\t            HONG KONG<br>\n\n\t\t            <i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n\t\t            <i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n\t\t            <i class=\"fa fa-envelope\"></i>:\n\t\t            <a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n\t\t\t\t</address>\n\n\t\t\t\t<div>\n\t\t\t\t\t<a md-raised-button href=\"tel:+85212345678\">\n\t\t\t\t\t\t<i class=\"fa fa-phone\"></i> Call\n\t\t\t\t\t</a>\n\t\t\t\t\t<a md-raised-button>\n\t\t\t\t\t\t<i class=\"fa fa-skype\"></i> Skype\n\t\t\t\t\t</a>\n\t\t\t\t\t<a md-raised-button href=\"mailto:confusion@food.net\">\n\t\t\t\t\t\t<i class=\"fa fa-envelope-o\"></i> Email\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div fxFlex=\"40%\">\n\t\t\t\t<h4>Map of our Location</h4>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<h3>Send us your Feedback</h3>\n\t\t<form novalidate *ngIf=\"showForm\" [formGroup]=\"feedbackForm\" (ngSubmit)=\"onSubmit()\"\n\t\t      [@expand]>\n\t\t\t<p>\n\t\t\t\t<md-form-field class=\"half-width\"> \n\t\t\t\t\t<input mdInput formControlName=\"firstname\" placeholder=\"First Name\"\n\t\t\t\t\t       required>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.firstname.errors?.required\">\n\t\t\t\t\t\t{{formErrors.firstname.required}}\n\t\t\t\t\t</md-error>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.firstname.errors?.minlength\">\n\t\t\t\t\t\t{{formErrors.firstname.minlength}}\n\t\t\t\t\t</md-error>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.firstname.errors?.maxlength\">\n\t\t\t\t\t\t{{formErrors.firstname.maxlength}}\n\t\t\t\t\t</md-error>\n\t\t\t\t</md-form-field>\n\n\t\t\t\t<md-form-field class=\"half-width\">\n\t\t\t\t\t<input mdInput formControlName=\"lastname\" placeholder=\"Last Name\" \n\t\t\t\t\t       required>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.lastname.errors?.required\">\n\t\t\t\t\t\t{{formErrors.lastname.required}}\n\t\t\t\t\t</md-error>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.lastname.errors?.minlength\">\n\t\t\t\t\t\t{{formErrors.lastname.minlength}}\n\t\t\t\t\t</md-error>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.lastname.errors?.maxlength\">\n\t\t\t\t\t\t{{formErrors.lastname.maxlength}}\n\t\t\t\t\t</md-error>\n\t\t\t\t</md-form-field>\n\n\t\t\t\t<md-form-field class=\"half-width\">\n\t\t\t\t\t<input mdInput formControlName=\"telnum\" type=\"tel\" \n\t\t\t\t\t       placeholder=\"Tel. Number\" pattern=\"[0-9]*\" required>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.telnum.errors?.required\">\n\t\t\t\t\t\t{{formErrors.telnum.required}}\n\t\t\t\t\t</md-error>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.telnum.errors?.pattern\">\n\t\t\t\t\t\t{{formErrors.telnum.pattern}}\n\t\t\t\t\t</md-error>\n\t\t\t\t</md-form-field>\n\n\t\t\t\t<md-form-field class=\"half-width\">\n\t\t\t\t\t<input mdInput formControlName=\"email\" type=\"email\" placeholder=\"Email\" \n\t\t\t\t\t       required>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.email.errors?.required\">\n\t\t\t\t\t\t{{formErrors.email.required}}\n\t\t\t\t\t</md-error>\n\n\t\t\t\t\t<md-error *ngIf=\"feedbackForm.controls.email.errors?.email\">\n\t\t\t\t\t\t{{formErrors.email.email}}\n\t\t\t\t\t</md-error>\n\t\t\t\t</md-form-field>\n\t\t\t</p>\n\n\t\t\t<table class=\"form-size\">\n\t\t\t\t<td>\n\t\t\t\t\t<md-slide-toggle formControlName=\"agree\">\n\t\t\t\t\t\tMay we contact you?\n\t\t\t\t\t</md-slide-toggle>\n\t\t\t\t</td>\n\t\t\t\t<td>\n\t\t\t\t\t<md-select formControlName=\"contacttype\" placeholder=\"How?\">\n\t\t\t\t\t\t<md-option *ngFor=\"let ctype of contactType\" [value]=\"ctype\">\n\t\t\t\t\t\t\t{{ctype}}\n\t\t\t\t\t\t</md-option>\n\t\t\t\t\t</md-select>\n\t\t\t\t</td>\n\t\t\t</table>\n\n\t\t\t<p>\n\t\t\t\t<md-form-field class=\"full-width\">\n\t\t\t\t\t<textarea mdInput formControlName=\"message\" placeholder=\"Your Feedback\" \n\t\t\t\t\t          rows=\"12\"></textarea>\n\t\t\t\t</md-form-field>\n\t\t\t</p>\n\n\t\t\t<button type=\"submit\" md-button class=\"background-primary text-floral-white\"\n\t\t\t        [disabled]=\"feedbackForm.invalid\">\n\t\t\t\tSubmit\n\t\t\t</button>\n\t\t</form>\n\n\t\t<div *ngIf=\"showSpinner\">\n\t\t\t<h4>Submitting Form</h4> <md-spinner></md-spinner>\n\t\t</div>\n\n\t\t<div *ngIf=\"showFeedback\" [@expand]>\n\t\t\t<h4>Your Submission</h4>\n\t\t\t<p>First Name: {{feedback.firstname}}</p>\n\t\t\t<p>Last Name: {{feedback.lastname}}</p>\n\t\t\t<p>Tel. Number: {{feedback.telnum}}</p>\n\t\t\t<p>Email: {{feedback.email}}</p>\n\t\t\t<p>Contact you?: {{feedback.agree}}</p>\n\t\t\t<p>How?: {{feedback.contacttype}}</p>\n\t\t\t<p>Feedback: {{feedback.message}}</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.half-width {\n  width: 45%; }\n\n.form-size {\n  width: 75%; }\n\n.full-width {\n  width: 95%; }\n\n.background-primary {\n  background-color: #512DA8; }\n\n.text-floral-white {\n  color: floralwhite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_feedback__ = __webpack_require__("../../../../../src/app/shared/feedback.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__ = __webpack_require__("../../../../../src/app/services/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = (function () {
    function ContactComponent(fb, feedbackservice) {
        this.fb = fb;
        this.feedbackservice = feedbackservice;
        this.contactType = __WEBPACK_IMPORTED_MODULE_1__shared_feedback__["a" /* ContactType */];
        this.showForm = true;
        this.showSpinner = false;
        this.showFeedback = false;
        this.formErrors = {
            firstname: {
                required: 'First Name is required',
                minlength: 'First Name must be at least 2 characters long',
                maxlength: 'First Name cannot be more than 25 characters long'
            },
            lastname: {
                required: 'Last Name is required',
                minlength: 'Last Name must be at least 2 characters long',
                maxlength: 'Last Name cannot be more than 25 characters long'
            },
            telnum: {
                required: 'Tel. Number is required',
                pattern: 'Tel. Number must contain only numbers'
            },
            email: {
                required: 'Email is required',
                email: 'Email not in valid format'
            },
        };
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.feedbackForm = this.fb.group({
            firstname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(25)]],
            lastname: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].maxLength(25)]],
            telnum: [0, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].pattern]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* Validators */].email]],
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    ContactComponent.prototype.onSubmit = function () {
        var _this = this;
        this.showForm = false;
        this.showSpinner = true;
        this.showFeedback = false;
        this.feedbackservice.submitFeedback(this.feedbackForm.value)
            .subscribe(function (feedback) {
            _this.feedback = feedback;
            _this.showForm = false;
            _this.showSpinner = false;
            _this.showFeedback = true;
            setTimeout(function () {
                _this.showForm = true;
                _this.showSpinner = false;
                _this.showFeedback = false;
            }, 5000);
        });
        this.feedbackForm.reset({
            firstname: '',
            lastname: '',
            telnum: 0,
            email: '',
            agree: false,
            contacttype: 'None',
            message: ''
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact/contact.component.scss")],
        host: {
            '[@flyInOut]': '',
            'style': 'display: block'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__["a" /* FeedbackService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_feedback_service__["a" /* FeedbackService */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(renderer, el) {
        this.renderer = renderer;
        this.el = el;
    }
    HighlightDirective.prototype.onmouseenter = function () {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    };
    HighlightDirective.prototype.onmouseleave = function () {
        this.renderer.removeClass(this.el.nativeElement, 'highlight');
    };
    return HighlightDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onmouseenter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HighlightDirective.prototype, "onmouseleave", null);
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appHighlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], HighlightDirective);

var _a, _b;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"row\"\n     fxLayout.lt-md=\"column\"\n     fxLayoutAlign.gt-md=\"space-around start\"\n     fxLayoutGap=\"10px\"\n     fxLayoutGap.xs=\"0\">\n\t\n\t<div fxFlex=\"40%\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n\t\t<md-card>\n\t\t\t\n\t\t\t<md-card-header>\n\t\t\t\t<md-card-title>\n\t\t\t\t\t<h3>{{dish.name | uppercase}}</h3>\n\t\t\t\t</md-card-title>\n\t\t\t</md-card-header>\n\n\t\t\t<img md-card-image src=\"{{'/assets/' + dish.image}}\" alt=\"{{dish.name}}\">\n\n\t\t\t<md-card-content><p>{{dish.description}}</p></md-card-content>\n\n\t\t\t<md-card-actions>\n\t\t\t\t<button md-button [routerLink]=\"['/dishdetail', prevId]\">\n\t\t\t\t\t<span class=\"fa fa-chevron-left fa-lg\"></span>\n\t\t\t\t</button>\n\n\t\t\t\t<button md-button (click)=\"goBack()\">BACK</button>\n\t\t\t\t<button md-button>LIKE</button>\n\t\t\t\t<button md-button>SHARE</button>\n\n\t\t\t\t<span class=\"flex-spacer\"></span>\n\n\t\t\t\t<button md-button [routerLink]=\"['/dishdetail', nextId]\">\n\t\t\t\t\t<span class=\"fa fa-chevron-right fa-lg\"></span>\n\t\t\t\t</button>\n\t\t\t</md-card-actions>\n\n\t\t</md-card>\n\t</div>\n\n\t<div fxFlex=\"40%\" *ngIf=\"dish\" [@visibility]=\"visibility\" [@expand]>\n\t\t<md-card>\n\t\t\t\n\t\t\t<md-card-header>\n\t\t\t\t<md-card-title>\n\t\t\t\t\t<h3>Comments</h3>\n\t\t\t\t</md-card-title>\n\t\t\t</md-card-header>\n\n\t\t\t<md-card-content>\n\t\t\t\t<md-list>\n\t\t\t\t\t\n\t\t\t\t\t<md-list-item *ngFor=\"let comment of dish.comments\">\n\t\t\t\t\t\t<h4 mdLine>{{comment.comment}}</h4>\n\t\t\t\t\t\t<p mdLine>{{comment.rating}} Stars</p>\n\t\t\t\t\t\t<p mdLine> \n\t\t\t\t\t\t\t-- {{comment.author}} {{comment.date | date: 'longDate'}}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</md-list-item>\n\n\t\t\t\t</md-list>\n\t\t\t</md-card-content>\n\n\t\t\t<md-list *ngIf=\"commentForm.valid\">\n\t\t\t\t<md-list-item>\n\t\t\t\t\t<h4 mdLine>{{commentForm.value.comment}}</h4>\n\t\t\t\t\t<p mdLine>{{commentForm.value.rating}} Stars</p>\n\t\t\t\t\t<p mdLine> -- {{commentForm.value.author}}</p>\n\t\t\t\t</md-list-item>\n\t\t\t</md-list>\n\n\t\t\t<form novalidate [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t<md-form-field class=\"full-width\">\n\t\t\t\t\t<input mdInput formControlName=\"author\" placeholder=\"Name\" required>\n\n\t\t\t\t\t<md-error *ngIf=\"commentForm.controls.author.errors?.required\">\n\t\t\t\t\t\t{{formErrors.author.required}}\n\t\t\t\t\t</md-error>\n\n\t\t\t\t\t<md-error *ngIf=\"commentForm.controls.author.errors?.minlength\">\n\t\t\t\t\t\t{{formErrors.author.minlength}}\n\t\t\t\t\t</md-error>\n\t\t\t\t</md-form-field>\n\n\t\t\t\t<md-slider formControlName=\"rating\" min=\"0\" max=\"5\" tickInterval=\"1\" \n\t\t\t\t           thumbLabel></md-slider>\n\n\t\t\t\t<md-form-field class=\"full-width\">\n\t\t\t\t\t<textarea mdInput formControlName=\"comment\" placeholder=\"Your comment\" \n\t\t\t\t\t          rows=\"12\" required></textarea>\n\n\t\t\t\t\t<md-error *ngIf=\"commentForm.controls.comment.errors?.required\">\n\t\t\t\t\t\t{{formErrors.comment.required}}\n\t\t\t\t\t</md-error>\n\t\t\t\t</md-form-field>\n\n\t\t\t\t<button type=\"submit\" md-button class=\"background-primary text-floral-white\"\n\t\t\t\t        [disabled]=\"commentForm.invalid\">\n\t\t\t\t\tSubmit\n\t\t\t\t</button>\n\t\t\t</form>\n\n\t\t</md-card>\n\t</div>\n\n\t<div [hidden]=\"dish || errMess\">\n\t\t<md-spinner></md-spinner> <h4>Loading . . . Please Wait</h4>\n\t</div>\n\n\t<div *ngIf=\"errMess\">\n\t\t<h2>Error</h2>\n\t\t<h4>{{errMess}}</h4>\n\t</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.full-width {\n  width: 95%; }\n\n.background-primary {\n  background-color: #512DA8; }\n\n.text-floral-white {\n  color: floralwhite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dishdetail/dishdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var DishdetailComponent = (function () {
    function DishdetailComponent(route, dishservice, location, fb, BaseURL) {
        this.route = route;
        this.dishservice = dishservice;
        this.location = location;
        this.fb = fb;
        this.BaseURL = BaseURL;
        this.formErrors = {
            author: {
                required: 'Author is required',
                minlength: 'Author must be at least 2 characters long'
            },
            comment: {
                required: 'Comment is required'
            }
        };
        this.commentForm = this.fb.group({
            author: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* Validators */].minLength(2)]],
            rating: 5,
            comment: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* Validators */].required]]
        });
    }
    DishdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.visibility = 'hidden';
            return _this.dishservice.getDish(+params.get('id'));
        })
            .subscribe(function (dish) {
            _this.dishservice.getDishIds()
                .subscribe(function (dishIds) {
                _this.dishIds = dishIds;
                _this.setPrevNext(dish.id);
                _this.dish = dish;
                _this.visibility = 'shown';
            });
        }, function (errMess) { return _this.errMess = errMess; });
    };
    DishdetailComponent.prototype.setPrevNext = function (dishId) {
        var index = this.dishIds.indexOf(dishId);
        var prevIndex = (index + this.dishIds.length - 1) % this.dishIds.length;
        var nextIndex = (index + this.dishIds.length + 1) % this.dishIds.length;
        this.prevId = this.dishIds[prevIndex];
        this.nextId = this.dishIds[nextIndex];
    };
    DishdetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    DishdetailComponent.prototype.onSubmit = function () {
        this.commentForm.value.date = new Date().toISOString();
        this.dish.comments.push(this.commentForm.value);
        this.dish.save();
        this.commentForm.reset({
            author: '',
            rating: 5,
            comment: ''
        });
    };
    return DishdetailComponent;
}());
DishdetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dishdetail',
        template: __webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dishdetail/dishdetail.component.scss")],
        host: {
            '[@flyInOut]': '',
            'style': 'display: block'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_app_animation__["b" /* expand */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__animations_app_animation__["c" /* visibility */])()
        ]
    }),
    __param(4, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_dish_service__["a" /* DishService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* FormBuilder */]) === "function" && _d || Object, Object])
], DishdetailComponent);

var _a, _b, _c, _d;
// index   prevIndex   nextIndex
// 0       3           1
// 1       0           2
// 2       1           3
// 3       2           0
// 0  % 4 = 0
// 1  % 4 = 1
// 2  % 4 = 2
// 3  % 4 = 3
//-------------------
// 4  % 4 = 0
// 5  % 4 = 1
// 6  % 4 = 2
// 7  % 4 = 3
//-------------------
// 8  % 4 = 0
// 9  % 4 = 1
// 10 % 4 = 2
// 11 % 4 = 3
//# sourceMappingURL=dishdetail.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\"\n\t fxLayout=\"row\"\n\t fxLayout.lt-md=\"column\"\n\t fxLayoutAlign.lt-md=\"start center\"\n\t fxLayoutAlign.gt-sm=\"center center\"\n\t fxLayoutWrap\n\t fxLayoutGap=\"10px\">\n\n\t<div fxFlex=\"50%\" fxLayout=\"row\">\n\t\t<div fxFlex=\"40%\" fxFlexOffset=\"20px\">\n\t\t\t\n\t\t\t<h4>Links</h4>\n\t\t\t<md-list>\n\t\t\t\t<md-list-item>\n\t\t\t\t\t<a md-button routerLink=\"/home\">Home</a>\n\t\t\t\t</md-list-item>\n\t\t\t\t<md-list-item>\n\t\t\t\t\t<a md-button routerLink=\"/aboutus\">About</a>\n\t\t\t\t</md-list-item>\n\t\t\t\t<md-list-item>\n\t\t\t\t\t<a md-button routerLink=\"/menu\">Menu</a>\n\t\t\t\t</md-list-item>\n\t\t\t\t<md-list-item>\n\t\t\t\t\t<a md-button routerLink=\"/contactus\">Contact</a>\n\t\t\t\t</md-list-item>\n\t\t\t</md-list>\n\n\t\t</div>\n\n\t\t<div fxFlex=\"50%\">\n\t\t\t<h4>Our Address</h4>\n\t\t\t<address>\n\t\t\t\t121, Clear Water Bay Road<br> Clear Water Bay, Kowloon<br> HONG KONG<br>\n\t\t\t\t<i class=\"fa fa-phone\"></i>: +852 1234 5678<br>\n\t\t\t\t<i class=\"fa fa-fax\"></i>: +852 8765 4321<br>\n\t\t\t\t<i class=\"fa fa-envelope\"></i>:\n\t\t\t\t<a href=\"mailto:confusion@food.net\">confusion@food.net</a>\n\t\t\t</address>\n\t\t</div>\n\t</div>\n\t\n\n\t<div fxFlex=\"45%\" style=\"text-align: center\">\n\t\t<a md-icon-button class=\"btn-google-plus\" href=\"http://google.com/+\">\n\t\t\t<i class=\"fa fa-google-plus fa-lg\"></i>\n\t\t</a>\n\n\t\t<a md-icon-button class=\"btn-facebook\" href=\"http://www.facebook.com\">\n\t\t\t<i class=\"fa fa-facebook fa-lg\"></i>\n\t\t</a>\n\n\t\t<a md-icon-button class=\"btn-linkedin\" href=\"http://www.linkedin.com/in/\">\n\t\t\t<i class=\"fa fa-linkedin fa-lg\"></i>\n\t\t</a>\n\n\t\t<a md-icon-button class=\"btn-youtube\" href=\"http://youtube.com/\">\n\t\t\t<i class=\"fa fa-youtube fa-lg\"></i>\n\t\t</a>\n\n\t\t<a md-icon-button class=\"btn-mail\" href=\"mailto:\">\n\t\t\t<i class=\"fa fa-envelope-o fa-lg\"></i>\n\t\t</a>\n\t</div>\n\n\t<div fxFlex=\"100%\" style=\"text-align: center\">\n\t\t<p>© Copyright 2017 Ristorante Con Fusion</p>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  background-color: #D1C4E9;\n  margin: 0px auto;\n  padding: 0px 0px; }\n\n.btn-google-plus {\n  color: #fff;\n  background-color: #dd4b39; }\n\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5998; }\n\n.btn-linkedin {\n  color: #fff;\n  background-color: #007bb6; }\n\n.btn-youtube {\n  color: #fff;\n  background-color: #ff4b39; }\n\n.btn-mail {\n  color: #fff;\n  background-color: #512DA8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n\t<span><img src=\"/assets/images/logo.png\" width=30 height=41></span>\n\n\t<a md-button routerLink=\"/home\" routerLinkActive=\"active\">\n\t\t<span class=\"fa fa-home fa-lg\"></span> Home\n\t</a>\n\t<a md-button routerLink=\"/aboutus\" routerLinkActive=\"active\">\n\t\t<span class=\"fa fa-info fa-lg\"></span> About\n\t</a>\n\t<a md-button routerLink=\"/menu\" routerLinkActive=\"active\">\n\t\t<span class=\"fa fa-list fa-lg\"></span> Menu\n\t</a>\n\t<a md-button routerLink=\"/contactus\" routerLinkActive=\"active\">\n\t\t<span class=\"fa fa-address-card fa-lg\"></span> Contact\n\t</a>\n\n\t<span class=\"flex-spacer\"></span>\n\n\t<a md-button (click)=\"openLoginForm()\"><span class=\"fa fa-sign-in fa-lg\"></span> Login</a>\n</md-toolbar>\n\n<div class=\"jumbotron\"\n     fxLayout=\"row\"\n     fxLayout.lt-md=\"column\"\n\t fxLayoutAlign.lt-md=\"start center\"\n\t fxLayoutGap=\"10px\">\n\n\t<div fxFlex fxFlex.gt-sm=\"50%\">\n\t\t<h1>Ristorante Con Fusion</h1>\n\t\t<p>We take inspiration from the World's best cuisines, and create a unique fusion \n\t\t   experience. Our lipsmacking creationswill tickle your culinary senses!</p>\n\t</div>\n\n\t<div fxFlex fxFlex.gt-sm=\"20%\">\n\t\t<img src=\"/assets/images/logo.png\" alt=\"Logo\">\n\t</div>\n\n\t<div fxFlex></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.jumbotron {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0px auto;\n  padding: 70px 30px;\n  background: #9575CD;\n  color: floralwhite;\n  min-height: 150px; }\n\n.active {\n  background: #4527A0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dialog) {
        this.dialog = dialog;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openLoginForm = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */], { width: '500px', height: '450px' });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MdDialog */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n     fxLayout=\"row\"\n     fxLayout.lt-md=\"column\"\n     fxLayoutAlign.gt-md=\"space-around start\"\n     fxLayoutGap=\"10px\">\n\n\t<md-card *ngIf=\"dish\" fxFlex [@expand]>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<h3>{{dish.name | uppercase}}</h3>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\n\t\t<img md-card-image src=\"{{'/assets/' + dish.image}}\" alt=\"dish.name\">\n\n\t\t<md-card-content>\n\t\t\t<p>{{dish.description}}</p>\n\t\t</md-card-content>\n\t</md-card>\n\n\t<div [hidden]=\"dish || dishErrMess\">\n\t\t<md-spinner></md-spinner> <h4>Loading . . . Please Wait</h4>\n\t</div>\n\n\t<div *ngIf=\"dishErrMess\">\n\t\t<h2>Error</h2>\n\t\t<h4>{{dishErrMess}}</h4>\n\t</div>\n\n\n\t<md-card *ngIf=\"promotion\" fxFlex [@expand]>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<h3>{{promotion.name | uppercase}}</h3>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\n\t\t<img md-card-image src=\"{{'/assets/' + promotion.image}}\" alt=\"promotion.name\">\n\n\t\t<md-card-content>\n\t\t\t<p>{{promotion.description}}</p>\n\t\t</md-card-content>\n\t</md-card>\n\n\t<div [hidden]=\"promotion || promotionErrMess\">\n\t\t<md-spinner></md-spinner> <h4>Loading . . . Please Wait</h4>\n\t</div>\n\n\t<div *ngIf=\"promotionErrMess\">\n\t\t<h2>Error</h2>\n\t\t<h4>{{promotionErrMess}}</h4>\n\t</div>\n\n\n\t<md-card *ngIf=\"leader\" fxFlex [@expand]>\n\t\t<md-card-header>\n\t\t\t<md-card-title>\n\t\t\t\t<h3>{{leader.name | uppercase}}</h3>\n\t\t\t</md-card-title>\n\t\t</md-card-header>\n\n\t\t<img md-card-image src=\"{{'/assets/' + leader.image}}\" alt=\"leader.name\">\n\n\t\t<md-card-content>\n\t\t\t<p>{{leader.description}}</p>\n\t\t</md-card-content>\n\t</md-card>\n\n\t<div [hidden]=\"leader || leaderErrMess\">\n\t\t<md-spinner></md-spinner> <h4>Loading . . . Please Wait</h4>\n\t</div>\n\n\t<div *ngIf=\"leaderErrMess\">\n\t\t<h2>Error</h2>\n\t\t<h4>{{leaderErrMess}}</h4>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__ = __webpack_require__("../../../../../src/app/services/promotion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_leader_service__ = __webpack_require__("../../../../../src/app/services/leader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var HomeComponent = (function () {
    function HomeComponent(dishservice, promotionservice, leaderservice, BaseURL) {
        this.dishservice = dishservice;
        this.promotionservice = promotionservice;
        this.leaderservice = leaderservice;
        this.BaseURL = BaseURL;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getFeaturedDish()
            .subscribe(function (dish) { return _this.dish = dish; }, function (errmess) { return _this.dishErrMess = errmess; });
        this.promotionservice.getFeaturedPromotion()
            .subscribe(function (promotion) { return _this.promotion = promotion; }, function (errmess) { return _this.promotionErrMess = errmess; });
        this.leaderservice.getFeaturedLeader()
            .subscribe(function (leader) { return _this.leader = leader; }, function (errmess) { return _this.leaderErrMess = errmess; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        host: {
            '[@flyInOut]': '',
            'style': 'display: block'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(3, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_promotion_service__["a" /* PromotionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_leader_service__["a" /* LeaderService */]) === "function" && _c || Object, Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar md-dialog-title color=\"primary\">\n\tLogin\n\t<span class=\"flex-spacer\"></span>\n\t<button md-button md-dialog-close>&times;</button>\n</md-toolbar>\n\n<form novalidate #loginForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\t<md-dialog-content>\n\t\t\n\t\t<md-form-field>\n\t\t\t<input mdInput type=\"text\" placeholder=\"Username\" required\n\t\t\t\t   [(ngModel)]=\"user.username\" name=\"username\" #username=\"ngModel\">\n\n\t\t\t<md-error *ngIf=\"username.errors?.required\">Username is required</md-error>\n\t\t</md-form-field>\n\n\t\t<md-form-field>\n\t\t\t<input mdInput type=\"password\" placeholder=\"Password\" required\n\t\t\t\t   [(ngModel)]=\"user.password\" name=\"password\" #password=\"ngModel\">\n\n\t\t\t<md-error *ngIf=\"password.errors?.required\">Password is required</md-error>\n\t\t</md-form-field>\n\n\t\t<md-checkbox name=\"remember\" [(ngModel)]=\"user.remember\">Remember Me</md-checkbox>\n\t</md-dialog-content>\n\n\t<md-dialog-actions>\n\t\t<button md-button md-dialog-close>Cancel</button>\n\t\t<button type=\"submit\" md-button class=\"background-primary text-floral-white\"\n\t\t        [disabled]=\"loginForm.invalid\">\n\t\t\tLogin\n\t\t</button>\n\t</md-dialog-actions>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.background-primary {\n  background-color: #512DA8; }\n\n.text-floral-white {\n  color: floralwhite; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(dialogRef) {
        this.dialogRef = dialogRef;
        this.user = {
            username: '',
            password: '',
            remember: false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        console.log(this.user);
        this.dialogRef.close();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MdDialogRef */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n\t<h3>Menu</h3>\n\n\t<div *ngIf=\"dishes\" [@expand]>\n\t\t<md-grid-list cols=\"2\" rowHeight=\"200px\">\n\t\t\t<md-grid-tile *ngFor=\"let dish of dishes\" appHighlight\n\t\t\t              [routerLink]=\"['/dishdetail', dish.id]\">\n\t\t\t\t\n\t\t\t\t<img src=\"{{'/assets/' + dish.image}}\" alt=\"{{dish.name}}\" height=\"200px\">\n\t\t\t\t<md-grid-tile-footer>\n\t\t\t\t\t<h1>{{dish.name | uppercase}}</h1>\n\t\t\t\t</md-grid-tile-footer>\n\n\t\t\t</md-grid-tile>\n\t\t</md-grid-list>\n\t</div>\n\n\t<div fxFlexAlign=\"center\" [hidden]=\"dishes || errMess\">\n\t\t<md-spinner></md-spinner> <h4>Loading . . . Please Wait</h4>\n\t</div>\n\n\t<div fxFlexAlign=\"center\" *ngIf=\"errMess\">\n\t\t<h2>Error</h2>\n\t\t<h4>{{errMess}}</h4>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.highlight {\n  background-color: #D1C4E9;\n  border: 1px solid #512DA8;\n  z-index: 1;\n  -webkit-transform: scale(1.01);\n          transform: scale(1.01); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dish_service__ = __webpack_require__("../../../../../src/app/services/dish.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_app_animation__ = __webpack_require__("../../../../../src/app/animations/app.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MenuComponent = (function () {
    function MenuComponent(dishservice, BaseURL) {
        this.dishservice = dishservice;
        this.BaseURL = BaseURL;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dishservice.getDishes()
            .subscribe(function (dishes) { return _this.dishes = dishes; }, function (errMess) { return _this.errMess = errMess; });
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.scss")],
        host: {
            '[@flyInOut]': '',
            'style': 'display: block'
        },
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["a" /* flyInOut */])(),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__animations_app_animation__["b" /* expand */])()
        ]
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('BaseURL')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dish_service__["a" /* DishService */]) === "function" && _a || Object, Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/my-own-custom-material/my-own-custom-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOwnCustomMaterialModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyOwnCustomMaterialModule = (function () {
    function MyOwnCustomMaterialModule() {
    }
    return MyOwnCustomMaterialModule;
}());
MyOwnCustomMaterialModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSelectModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatSliderModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatSlideToggleModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatSelectModule */]
        ],
        declarations: []
    })
], MyOwnCustomMaterialModule);

//# sourceMappingURL=my-own-custom-material.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/dish.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_db__ = __webpack_require__("../../../../../src/app/shared/db.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DishService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DishService = (function () {
    function DishService(restangular) {
        this.restangular = restangular;
    }
    DishService.prototype.getDishes = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].dishes).delay(2000);
        // return this.restangular.all('dishes').getList();
    };
    DishService.prototype.getFeaturedDish = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].dishes.filter(function (dish) { return dish.featured; })[0]).delay(2000);
        // return this.restangular.all('dishes').getList({ featured: true })
        // 	.map(dishes => dishes[0]);
    };
    DishService.prototype.getDish = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].dishes.filter(function (dish) { return dish.id === id; })[0]).delay(2000);
        // return this.restangular.one('dishes', id).get();
    };
    DishService.prototype.getDishIds = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].dishes.map(function (dish) { return dish.id; })).delay(2000);
        // return this.getDishes()
        //   .map(dishes => dishes.map(dish => dish.id));
    };
    return DishService;
}());
DishService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], DishService);

var _a;
//# sourceMappingURL=dish.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_db__ = __webpack_require__("../../../../../src/app/shared/db.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeedbackService = (function () {
    function FeedbackService(restangular) {
        this.restangular = restangular;
    }
    FeedbackService.prototype.submitFeedback = function (feedback) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].feedback).delay(2000);
        // return this.restangular.all('feedback').post(feedback);
    };
    return FeedbackService;
}());
FeedbackService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], FeedbackService);

var _a;
//# sourceMappingURL=feedback.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/leader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_db__ = __webpack_require__("../../../../../src/app/shared/db.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeaderService = (function () {
    function LeaderService(restangular) {
        this.restangular = restangular;
    }
    LeaderService.prototype.getLeaders = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].leaders).delay(2000);
        // return this.restangular.all('leaders').getList();
    };
    LeaderService.prototype.getFeaturedLeader = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].leaders.filter(function (leader) { return leader.featured; })[0]).delay(2000);
        // return this.restangular.all('leaders').getList({ featured: true })
        // 	.map(leaders => leaders[0]);
    };
    return LeaderService;
}());
LeaderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], LeaderService);

var _a;
//# sourceMappingURL=leader.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/promotion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__ = __webpack_require__("../../../../ngx-restangular/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_restangular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_restangular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_db__ = __webpack_require__("../../../../../src/app/shared/db.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PromotionService = (function () {
    function PromotionService(restangular) {
        this.restangular = restangular;
    }
    PromotionService.prototype.getFeaturedPromotion = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].of(__WEBPACK_IMPORTED_MODULE_3__shared_db__["a" /* db */].promotions.filter(function (promotion) { return promotion.featured; })[0]).delay(2000);
        // return this.restangular.all('promotions').getList({ featured: true })
        // 	.map(promotions => promotions[0]);
    };
    return PromotionService;
}());
PromotionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_restangular__["Restangular"]) === "function" && _a || Object])
], PromotionService);

var _a;
//# sourceMappingURL=promotion.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/baseurl.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseURL; });
var baseURL = 'https://api.myjson.com/bins/12d7x6';
//# sourceMappingURL=baseurl.js.map

/***/ }),

/***/ "../../../../../src/app/shared/db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return db; });
var db = JSON.parse("{\n  \"dishes\": [\n    {\n      \"id\": 0,\n      \"name\": \"Uthappizza\",\n      \"image\": \"images/uthappizza.png\",\n      \"category\": \"mains\",\n      \"label\": \"Hot\",\n      \"price\": \"4.99\",\n      \"featured\": \"true\",\n      \"description\": \"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.\",\n      \"comments\": [\n        {\n          \"rating\": 5,\n          \"comment\": \"Imagine all the eatables, living in conFusion!\",\n          \"author\": \"John Lemon\",\n          \"date\": \"2012-10-16T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!\",\n          \"author\": \"Paul McVites\",\n          \"date\": \"2014-09-05T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 3,\n          \"comment\": \"Eat it, just eat it!\",\n          \"author\": \"Michael Jaikishan\",\n          \"date\": \"2015-02-13T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Ultimate, Reaching for the stars!\",\n          \"author\": \"Ringo Starry\",\n          \"date\": \"2013-12-02T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 2,\n          \"comment\": \"It's your birthday, we're gonna party!\",\n          \"author\": \"25 Cent\",\n          \"date\": \"2011-12-02T17:57:28.556094Z\"\n        },\n        {\n          \"date\": \"2017-09-05T18:02:35.432Z\",\n          \"author\": \"testName\",\n          \"rating\": 4,\n          \"comment\": \"testComment\"\n        },\n        {\n          \"date\": \"2017-09-05T18:17:45.360Z\",\n          \"author\": \"testName2\",\n          \"rating\": 3,\n          \"comment\": \"testComment2\"\n        },\n        {\n          \"author\": \"testName3\",\n          \"rating\": 5,\n          \"comment\": \"testComment3\",\n          \"date\": \"2017-10-06T15:26:26.789Z\"\n        },\n        {\n          \"author\": \"testName4\",\n          \"rating\": 5,\n          \"comment\": \"testComment4\",\n          \"date\": \"2017-10-06T15:29:44.556Z\"\n        }\n      ]\n    },\n    {\n      \"id\": 1,\n      \"name\": \"Zucchipakoda\",\n      \"image\": \"images/zucchipakoda.png\",\n      \"category\": \"appetizer\",\n      \"label\": \"\",\n      \"price\": \"1.99\",\n      \"featured\": \"false\",\n      \"description\": \"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce\",\n      \"comments\": [\n        {\n          \"rating\": 5,\n          \"comment\": \"Imagine all the eatables, living in conFusion!\",\n          \"author\": \"John Lemon\",\n          \"date\": \"2012-10-16T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!\",\n          \"author\": \"Paul McVites\",\n          \"date\": \"2014-09-05T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 3,\n          \"comment\": \"Eat it, just eat it!\",\n          \"author\": \"Michael Jaikishan\",\n          \"date\": \"2015-02-13T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Ultimate, Reaching for the stars!\",\n          \"author\": \"Ringo Starry\",\n          \"date\": \"2013-12-02T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 2,\n          \"comment\": \"It's your birthday, we're gonna party!\",\n          \"author\": \"25 Cent\",\n          \"date\": \"2011-12-02T17:57:28.556094Z\"\n        }\n      ]\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Vadonut\",\n      \"image\": \"images/vadonut.png\",\n      \"category\": \"appetizer\",\n      \"label\": \"New\",\n      \"price\": \"1.99\",\n      \"featured\": \"false\",\n      \"description\": \"A quintessential ConFusion experience, is it a vada or is it a donut?\",\n      \"comments\": [\n        {\n          \"rating\": 5,\n          \"comment\": \"Imagine all the eatables, living in conFusion!\",\n          \"author\": \"John Lemon\",\n          \"date\": \"2012-10-16T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!\",\n          \"author\": \"Paul McVites\",\n          \"date\": \"2014-09-05T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 3,\n          \"comment\": \"Eat it, just eat it!\",\n          \"author\": \"Michael Jaikishan\",\n          \"date\": \"2015-02-13T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Ultimate, Reaching for the stars!\",\n          \"author\": \"Ringo Starry\",\n          \"date\": \"2013-12-02T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 2,\n          \"comment\": \"It's your birthday, we're gonna party!\",\n          \"author\": \"25 Cent\",\n          \"date\": \"2011-12-02T17:57:28.556094Z\"\n        }\n      ]\n    },\n    {\n      \"id\": 3,\n      \"name\": \"ElaiCheese Cake\",\n      \"image\": \"images/elaicheesecake.png\",\n      \"category\": \"dessert\",\n      \"label\": \"\",\n      \"price\": \"2.99\",\n      \"featured\": \"false\",\n      \"description\": \"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms\",\n      \"comments\": [\n        {\n          \"rating\": 5,\n          \"comment\": \"Imagine all the eatables, living in conFusion!\",\n          \"author\": \"John Lemon\",\n          \"date\": \"2012-10-16T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!\",\n          \"author\": \"Paul McVites\",\n          \"date\": \"2014-09-05T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 3,\n          \"comment\": \"Eat it, just eat it!\",\n          \"author\": \"Michael Jaikishan\",\n          \"date\": \"2015-02-13T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 4,\n          \"comment\": \"Ultimate, Reaching for the stars!\",\n          \"author\": \"Ringo Starry\",\n          \"date\": \"2013-12-02T17:57:28.556094Z\"\n        },\n        {\n          \"rating\": 2,\n          \"comment\": \"It's your birthday, we're gonna party!\",\n          \"author\": \"25 Cent\",\n          \"date\": \"2011-12-02T17:57:28.556094Z\"\n        }\n      ]\n    }\n  ],\n  \"promotions\": [\n    {\n      \"id\": 0,\n      \"name\": \"Weekend Grand Buffet\",\n      \"image\": \"images/buffet.png\",\n      \"label\": \"New\",\n      \"price\": \"19.99\",\n      \"featured\": \"true\",\n      \"description\": \"Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person \"\n    }\n  ],\n  \"leaders\": [\n    {\n      \"id\": 0,\n      \"name\": \"Peter Pan\",\n      \"image\": \"images/alberto.png\",\n      \"designation\": \"Chief Epicurious Officer\",\n      \"abbr\": \"CEO\",\n      \"featured\": \"false\",\n      \"description\": \"Our CEO, Peter, credits his hardworking East Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. His mother's wizardy in the kitchen whipping up the tastiest dishes with whatever is available inexpensively at the supermarket, was his first inspiration to create the fusion cuisines for which The Frying Pan became well known. He brings his zeal for fusion cuisines to this restaurant, pioneering cross-cultural culinary connections.\"\n    },\n    {\n      \"id\": 1,\n      \"name\": \"Dhanasekaran Witherspoon\",\n      \"image\": \"images/alberto.png\",\n      \"designation\": \"Chief Food Officer\",\n      \"abbr\": \"CFO\",\n      \"featured\": \"false\",\n      \"description\": \"Our CFO, Danny, as he is affectionately referred to by his colleagues, comes from a long established family tradition in farming and produce. His experiences growing up on a farm in the Australian outback gave him great appreciation for varieties of food sources. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!\"\n    },\n    {\n      \"id\": 2,\n      \"name\": \"Agumbe Tang\",\n      \"image\": \"images/alberto.png\",\n      \"designation\": \"Chief Taste Officer\",\n      \"abbr\": \"CTO\",\n      \"featured\": \"false\",\n      \"description\": \"Blessed with the most discerning gustatory sense, Agumbe, our CFO, personally ensures that every dish that we serve meets his exacting tastes. Our chefs dread the tongue lashing that ensues if their dish does not meet his exacting standards. He lives by his motto, You click only if you survive my lick.\"\n    },\n    {\n      \"id\": 3,\n      \"name\": \"Alberto Somayya\",\n      \"image\": \"images/alberto.png\",\n      \"designation\": \"Executive Chef\",\n      \"abbr\": \"EC\",\n      \"featured\": \"true\",\n      \"description\": \"Award winning three-star Michelin chef with wide International experience having worked closely with whos-who in the culinary world, he specializes in creating mouthwatering Indo-Italian fusion experiences. He says, Put together the cuisines from the two craziest cultures, and you get a winning hit! Amma Mia!\"\n    }\n  ],\n  \"feedback\": [\n    {\n      \"firstname\": \"testFirstname\",\n      \"lastname\": \"testLastname\",\n      \"telnum\": \"0\",\n      \"email\": \"t@t\",\n      \"agree\": true,\n      \"contacttype\": \"Email\",\n      \"message\": \"testFeedback\",\n      \"id\": 1\n    },\n    {\n      \"firstname\": \"test first 2\",\n      \"lastname\": \"test last 2\",\n      \"telnum\": \"01\",\n      \"email\": \"test@test\",\n      \"agree\": true,\n      \"contacttype\": \"Tel\",\n      \"message\": \"test feedback2\",\n      \"id\": 2\n    },\n    {\n      \"firstname\": \"tt\",\n      \"lastname\": \"tt\",\n      \"telnum\": 0,\n      \"email\": \"t@t\",\n      \"agree\": false,\n      \"contacttype\": \"None\",\n      \"message\": \"\",\n      \"id\": 3\n    },\n    {\n      \"firstname\": \"ttt\",\n      \"lastname\": \"tt\",\n      \"telnum\": 0,\n      \"email\": \"t@t\",\n      \"agree\": false,\n      \"contacttype\": \"None\",\n      \"message\": \"\",\n      \"id\": 4\n    }\n  ]\n}");
//# sourceMappingURL=db.js.map

/***/ }),

/***/ "../../../../../src/app/shared/feedback.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Feedback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactType; });
var Feedback = (function () {
    function Feedback() {
    }
    return Feedback;
}());

var ContactType = ['None', 'Tel', 'Email'];
//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ "../../../../../src/app/shared/restConfig.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseurl__ = __webpack_require__("../../../../../src/app/shared/baseurl.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = RestangularConfigFactory;

function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(__WEBPACK_IMPORTED_MODULE_0__baseurl__["a" /* baseURL */]);
}
//# sourceMappingURL=restConfig.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map