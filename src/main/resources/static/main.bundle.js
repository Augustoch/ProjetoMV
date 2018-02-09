webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApproutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pessoa_editar_pessoa_editar_pessoa_component__ = __webpack_require__("../../../../../src/app/pessoa/editar-pessoa/editar-pessoa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pessoa_pessoa_component__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listagem_listagem_component__ = __webpack_require__("../../../../../src/app/listagem/listagem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/listagem', pathMatch: 'full' },
    { path: 'listagem', component: __WEBPACK_IMPORTED_MODULE_3__listagem_listagem_component__["a" /* ListagemComponent */] },
    { path: 'cadastro', component: __WEBPACK_IMPORTED_MODULE_2__pessoa_pessoa_component__["a" /* PessoaComponent */] },
    { path: 'editar', component: __WEBPACK_IMPORTED_MODULE_0__pessoa_editar_pessoa_editar_pessoa_component__["a" /* EditarPessoaComponent */] },
];
var ApproutingModule = /** @class */ (function () {
    function ApproutingModule() {
    }
    ApproutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]
            ]
        })
    ], ApproutingModule);
    return ApproutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listagem_listagem_component__ = __webpack_require__("../../../../../src/app/listagem/listagem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pessoa_pessoa_service__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tooltip__ = __webpack_require__("../../../../ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pessoa_pessoa_component__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pessoa_editar_pessoa_editar_pessoa_component__ = __webpack_require__("../../../../../src/app/pessoa/editar-pessoa/editar-pessoa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pgnf_pgnf_component__ = __webpack_require__("../../../../../src/app/pgnf/pgnf.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pessoa_pessoa_component__["a" /* PessoaComponent */],
                __WEBPACK_IMPORTED_MODULE_1__listagem_listagem_component__["a" /* ListagemComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pessoa_editar_pessoa_editar_pessoa_component__["a" /* EditarPessoaComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pgnf_pgnf_component__["a" /* PgnfComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* ApproutingModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap_tooltip__["a" /* TooltipModule */], __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap_modal__["a" /* ModalModule */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__pessoa_pessoa_service__["a" /* PessoaService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/listagem/listagem.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listagem/listagem.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home\n                    <span class=\"sr-only\">(current)</span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</nav>\n<h3>Listagem de Pessoas</h3>\n<div class=\"row w-75 p-3\">\n    <div class=\"form-group\" class=\"col-md-4\">\n        <label>Nome: </label>\n        <input type=\"text\" class=\"form-control\" name=\"nome\">\n    </div>\n    <div class=\"form-group\" class=\"col-md-4\">\n        <label>CPF: </label>\n        <input type=\"text\" class=\"form-control\" name=\"cpf\">\n        \n    </div>\n    \n    <div class=\"btn-group row w-75 p-3 col-md-4\">\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\">Pesquisar</button>\n        <button type=\"button\" routerLink=\"/cadastro\" routerLinkActive=\"active\" class=\"btn btn-outline-success btn-sm\">Cadastrar</button>\n    </div>\n\n</div>\n<hr>\n<table class=\"table table-hover\">\n    <thead>\n        <tr>\n            <th>Id</th>\n            <th>Nome</th>\n            <th>E-mail</th>\n            <th>CPF</th>\n            <th>Idade</th>\n            <th>Quantidade de Telefones</th>\n            <th>Ações</th>\n        </tr>\n    </thead>\n    <tr *ngFor=\"let pesso of pess\">\n        <td>{{pesso.pessoam.id}}</td>\n        <td>{{pesso.pessoam.nome}}</td>\n        <td>{{pesso.pessoam.email}}</td>\n        <td>{{pesso.pessoam.cpf}}</td>\n        <td>{{2018 - pesso.pessoam.dataDeNascimento.getFullYear()}} Anos</td>\n        <td>{{pesso.qtdN}}</td>\n        <td>\n            <button type=\"button\" routerLink=\"/editar\" (click)=\"chamaEditor(pesso.pessoam)\"  class=\"btn btn-outline-info btn-sm\">Editar</button>\n            <button type=\"button\" (click)=\"excluirPessoa(pesso.pessoam)\" \n             class=\"btn btn-outline-danger btn-sm\">Excluir</button>\n\n        </td>\n\n    </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/listagem/listagem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListagemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pessoa_pessoa_model__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pessoa_pessoa_service__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListagemComponent = /** @class */ (function () {
    function ListagemComponent(pessoaService, location) {
        this.pessoaService = pessoaService;
        this.location = location;
        ListagemComponent_1.pessoaEditar = new __WEBPACK_IMPORTED_MODULE_0__pessoa_pessoa_model__["a" /* Pessoa */];
        this.pessoas = new Array();
        this.pess = new Array;
        this.pess = this.todasPessoas();
    }
    ListagemComponent_1 = ListagemComponent;
    ListagemComponent.prototype.ngOnInit = function () {
    };
    ListagemComponent.prototype.refreshDados = function () {
        location.reload();
    };
    ListagemComponent.prototype.todasPessoas = function () {
        return this.pessoaService.getPessoas();
    };
    ListagemComponent.prototype.excluirPessoa = function (pesso) {
        if (confirm("deseja realmente excluir " + pesso.nome)) {
            this.pessoaService.deteletarPessoa(pesso.id).subscribe();
            this.refreshDados();
        }
    };
    ListagemComponent.prototype.chamaEditor = function (pessoa) {
        console.log(JSON.stringify(pessoa));
        ListagemComponent_1.pessoaEditar = pessoa;
    };
    ListagemComponent = ListagemComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-listagem',
            template: __webpack_require__("../../../../../src/app/listagem/listagem.component.html"),
            styles: [__webpack_require__("../../../../../src/app/listagem/listagem.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__pessoa_pessoa_service__["a" /* PessoaService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pessoa_pessoa_service__["a" /* PessoaService */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]])
    ], ListagemComponent);
    return ListagemComponent;
    var ListagemComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/pessoa/editar-pessoa/editar-pessoa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pessoa/editar-pessoa/editar-pessoa.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" href=\"#\">Home\n                  <span class=\"sr-only\">(current)</span>\n              </a>\n          </li>\n\n      </ul>\n  </div>\n</nav>\n<div>\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n      <h3>Editar Pessoa</h3>\n      <div class=\"row\">\n          <div class=\"w-25 p-3\">\n\n              <div class=\"form-group\">\n                  <label>Nome: </label>\n                  <input  type=\"text\" class=\"form-control\" name=\"nome\" [(ngModel)]=\"pessoa.nome\">\n              </div>\n\n              <div class=\"form-group\">\n                  <label>Email:</label>\n                  <input type=\"email\" class=\"form-control\" id=\"Email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"pessoa.email\">\n\n              </div>\n\n          </div>\n          <div class=\"w-25 p-3\">\n\n              <div class=\"form-group\">\n                  <label>CPF: </label>\n                  <input type=\"text\" class=\"form-control\" maxlength=\"15\" name=\"cpf\" [(ngModel)]=\"pessoa.cpf\">\n              </div>\n              <div class=\"form-group\">\n                  <label>Data de Nascimento: </label>\n                  <input type=\"date\" class=\"form-control\" name=\"dataDeNascimento\" [(ngModel)]=\"pessoa.dataDeNascimento\">\n              </div>\n\n          </div>\n      </div>\n\n      <div>\n          <div>\n              <label> DDD</label>\n              <input type=\"text\" maxlength=\"2\" class=\" input-sm col-md-1\" name=\"ddd\" [(ngModel)]=\"phone.ddd\" >\n\n              <label>Numero</label>\n              <input type=\"text\" class=\"col-md-1\" name=\"numero\"  [(ngModel)]=\"phone.numero\">\n\n              <button type=\"button\" class=\"btn btn-primary col-md-1\" (click)=\"salvarTelefone()\">Adicionar</button>\n\n          </div>\n\n      </div>\n\n      <div class=\"w-50 p-3\">\n          <table class=\"table table-hover\">\n              <thead>\n                  <tr>\n                      <th>DDD</th>\n                      <th>Telefone</th>\n                      <th>Ações</th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr *ngFor=\"let telefone of telefones\">\n                      <td>{{telefone.ddd}}</td>\n                      <td>{{telefone.numero}}</td>\n                      <td><button type=\"button\" (click)=\"removerNumero(telefone)\" class=\"btn btn-danger\">Excluir</button></td>\n                  </tr>\n              </tbody>\n          </table>\n\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary col-md-1\" (click)=\"atualizarNoBanco()\"\n       routerLink=\"/listagem\" routerLinkActive=\"active\">Atualizar</button>\n  </form>\n  \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pessoa/editar-pessoa/editar-pessoa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPessoaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pessoa_service__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__telefone_model__ = __webpack_require__("../../../../../src/app/pessoa/telefone.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listagem_listagem_component__ = __webpack_require__("../../../../../src/app/listagem/listagem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pessoa_model__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditarPessoaComponent = /** @class */ (function () {
    function EditarPessoaComponent(pessoaService) {
        this.pessoaService = pessoaService;
        this.pessoa = __WEBPACK_IMPORTED_MODULE_2__listagem_listagem_component__["a" /* ListagemComponent */].pessoaEditar;
        this.phone = new __WEBPACK_IMPORTED_MODULE_1__telefone_model__["a" /* Telefone */];
    }
    EditarPessoaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.telefones = new Array;
        this.pessoa.telefones.forEach(function (element) {
            _this.telefones.push(element);
        });
    };
    EditarPessoaComponent.prototype.salvarTelefone = function () {
        var telefone = new __WEBPACK_IMPORTED_MODULE_1__telefone_model__["a" /* Telefone */];
        telefone.ddd = this.phone.ddd;
        telefone.numero = this.phone.numero;
        this.telefones.push(telefone);
    };
    EditarPessoaComponent.prototype.removerNumero = function (phone) {
        this.telefones.splice(this.telefones.indexOf(phone), 1);
    };
    EditarPessoaComponent.prototype.atualizarNoBanco = function () {
        var _this = this;
        this.pessoa.telefones = new Array;
        this.telefones.forEach(function (element) {
            _this.pessoa.telefones.push(element);
        });
        console.log("fred vs " + JSON.stringify(this.pessoa));
        this.pessoaService.atualizarPessoa(this.pessoa).subscribe();
    };
    EditarPessoaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-editar-pessoa',
            template: __webpack_require__("../../../../../src/app/pessoa/editar-pessoa/editar-pessoa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pessoa/editar-pessoa/editar-pessoa.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__pessoa_model__["a" /* Pessoa */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__pessoa_service__["a" /* PessoaService */]])
    ], EditarPessoaComponent);
    return EditarPessoaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pessoa/pessoa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pessoa/pessoa.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n        aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"#\">Home\n                    <span class=\"sr-only\">(current)</span>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</nav>\n<div>\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n        <h3>Cadastro de Pessoa</h3>\n        <div class=\"row\">\n            <div class=\"w-25 p-3\">\n\n                <div class=\"form-group\">\n                    <label>Nome: </label>\n                    <input  type=\"text\" class=\"form-control\" name=\"nome\" [(ngModel)]=\"pessoa.nome\">\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Email:</label>\n                    <input type=\"email\" class=\"form-control\" id=\"Email\" placeholder=\"email\" name=\"email\" [(ngModel)]=\"pessoa.email\">\n\n                </div>\n\n            </div>\n            <div class=\"w-25 p-3\">\n\n                <div class=\"form-group\">\n                    <label>CPF: </label>\n                    <input type=\"text\" class=\"form-control\" name=\"cpf\" [(ngModel)]=\"pessoa.cpf\">\n                </div>\n                <div class=\"form-group\">\n                    <label>Data de Nascimento: </label>\n                    <input type=\"date\" class=\"form-control\" name=\"dataDeNascimento\" [(ngModel)]=\"pessoa.dataDeNascimento\">\n                </div>\n\n            </div>\n        </div>\n\n        <div>\n            <div>\n                <label> DDD</label>\n                <input type=\"text\" maxlength=\"2\" class=\" input-sm col-md-1\" name=\"ddd\" [(ngModel)]=\"telefone.ddd\" >\n\n                <label>Numero</label>\n                <input type=\"text\" class=\"col-md-1\" name=\"numero\" [(ngModel)]=\"telefone.numero\">\n\n                <button type=\"button\" class=\"btn btn-primary col-md-1\" (click)=\"salvarTelefone()\">Adicionar</button>\n\n            </div>\n\n        </div>\n\n        <div class=\"w-50 p-3\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th>DDD</th>\n                        <th>Telefone</th>\n                        <th>Ações</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let phone of phones\">\n                        <td>{{phone.ddd}}</td>\n                        <td>{{phone.numero}}</td>\n                        <td><button type=\"button\" (click)=\"removerNumero(phone)\" class=\"btn btn-danger\">Excluir</button></td>\n                    </tr>\n                </tbody>\n            </table>\n\n        </div>\n\n        <button type=\"submit\" class=\"btn btn-primary col-md-1\" (click)=\"salvarNoBanco()\"\n         routerLink=\"/listagem\" routerLinkActive=\"active\">Cadastrar</button>\n    </form>\n    \n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pessoa/pessoa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pessoa_service__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__telefone_model__ = __webpack_require__("../../../../../src/app/pessoa/telefone.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pessoa_model__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PessoaComponent = /** @class */ (function () {
    function PessoaComponent(pessoaService) {
        this.pessoaService = pessoaService;
        this.pessoa = new __WEBPACK_IMPORTED_MODULE_2__pessoa_model__["a" /* Pessoa */]();
        this.telefone = new __WEBPACK_IMPORTED_MODULE_1__telefone_model__["a" /* Telefone */]();
        this.pessoa.telefones = new Array;
        this.phones = new Array;
    }
    PessoaComponent.prototype.salvarNoBanco = function () {
        this.pessoa.telefones = this.phones;
        this.pessoaService.salvarPessoaNoBanco(this.pessoa);
    };
    PessoaComponent.prototype.salvarTelefone = function () {
        this.phone = new __WEBPACK_IMPORTED_MODULE_1__telefone_model__["a" /* Telefone */]();
        this.phone.ddd = this.telefone.ddd;
        this.phone.numero = this.telefone.numero;
        this.phones.push(this.phone);
    };
    PessoaComponent.prototype.removerNumero = function (phone) {
        this.phones.splice(this.phones.indexOf(phone), 1);
    };
    PessoaComponent.prototype.ngOnInit = function () {
    };
    PessoaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-pessoa',
            template: __webpack_require__("../../../../../src/app/pessoa/pessoa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pessoa/pessoa.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__pessoa_service__["a" /* PessoaService */]])
    ], PessoaComponent);
    return PessoaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pessoa/pessoa.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pessoa; });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    return Pessoa;
}());



/***/ }),

/***/ "../../../../../src/app/pessoa/pessoa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pessoaQtdN_model__ = __webpack_require__("../../../../../src/app/pessoa/pessoaQtdN.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pessoa_model__ = __webpack_require__("../../../../../src/app/pessoa/pessoa.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__telefone_model__ = __webpack_require__("../../../../../src/app/pessoa/telefone.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core___ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PessoaService = /** @class */ (function () {
    function PessoaService(http, httpCliente) {
        this.http = http;
        this.httpCliente = httpCliente;
        this.emitirPessoa = new __WEBPACK_IMPORTED_MODULE_8__angular_core___["w" /* EventEmitter */]();
        this.u = "";
        this.url = "/pessoa/";
        this.pessoasUrl = "/pessoa/todas";
        this.headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': 'my-auth-token'
            })
        };
    }
    PessoaService.prototype.deteletarPessoa = function (id) {
        console.log(this.u + this.url + id);
        return this.httpCliente.delete(this.u + this.url + id, this.httpOptions).pipe();
    };
    PessoaService.prototype.salvarPessoaNoBanco = function (pessoa) {
        console.log(JSON.stringify(pessoa.nome));
        return this.http.post(this.u + this.url, JSON.stringify(pessoa), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleErrore);
    };
    PessoaService.prototype.atualizarPessoa = function (pessoa) {
        return this.httpCliente.put(this.u + this.url, JSON.stringify(pessoa), this.httpOptions)
            .pipe();
    };
    PessoaService.prototype.getPessoas = function () {
        var pps = new Array();
        this.httpCliente.get(this.u + this.pessoasUrl)
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                var pp = new __WEBPACK_IMPORTED_MODULE_0__pessoaQtdN_model__["a" /* pessoaQtdN */];
                pp.pessoam = new __WEBPACK_IMPORTED_MODULE_1__pessoa_model__["a" /* Pessoa */]();
                pp.pessoam.id = data[i].id;
                pp.pessoam.nome = data[i].nome;
                pp.pessoam.cpf = data[i].cpf;
                pp.pessoam.email = data[i].email;
                pp.pessoam.dataDeNascimento = new Date(data[i].dataDeNascimento);
                var telefones = new Array();
                for (var x = 0; x < data[i].telefones.length; x++) {
                    var telefone = new __WEBPACK_IMPORTED_MODULE_7__telefone_model__["a" /* Telefone */]();
                    pp.qtdN = data[i].telefones.length;
                    telefone.id = data[i].telefones[x].id;
                    telefone.ddd = data[i].telefones[x].ddd;
                    telefone.numero = data[i].telefones[x].numero;
                    telefones.push(telefone);
                    pp.pessoam.telefones = telefones;
                }
                pps.push(pp);
            }
        });
        return pps;
    };
    PessoaService.prototype.handleErrore = function (error) {
        console.error('Error', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    PessoaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], PessoaService);
    return PessoaService;
}());



/***/ }),

/***/ "../../../../../src/app/pessoa/pessoaQtdN.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pessoaQtdN; });
var pessoaQtdN = /** @class */ (function () {
    function pessoaQtdN() {
    }
    return pessoaQtdN;
}());



/***/ }),

/***/ "../../../../../src/app/pessoa/telefone.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Telefone; });
var Telefone = /** @class */ (function () {
    function Telefone() {
    }
    return Telefone;
}());



/***/ }),

/***/ "../../../../../src/app/pgnf/pgnf.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pgnf/pgnf.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Pagina não encontrada</h1>\n"

/***/ }),

/***/ "../../../../../src/app/pgnf/pgnf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PgnfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PgnfComponent = /** @class */ (function () {
    function PgnfComponent() {
    }
    PgnfComponent.prototype.ngOnInit = function () {
    };
    PgnfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pgnf',
            template: __webpack_require__("../../../../../src/app/pgnf/pgnf.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pgnf/pgnf.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PgnfComponent);
    return PgnfComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map