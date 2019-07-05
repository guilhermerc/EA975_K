(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<br>\n<br>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/autenticacao/autenticacao.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/autenticacao/autenticacao.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h1>Login</h1><br>\n    <form (ngSubmit)=\"login()\" #formsUsuario=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" required\n        [(ngModel)]=\"dadosLogin.username\" name=\"username\"\n        #username=\"ngModel\">\n        <div [hidden]=\"username.valid || username.pristine\"\n        class=\"alert alert-danger\">\n        Username é obrigatório.\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"senha\">Senha</label>\n        <input type=\"text\" class=\"form-control\" id=\"senha\" required\n        [(ngModel)]=\"dadosLogin.senha\" name=\"senha\"\n        #senha=\"ngModel\">\n        <div [hidden]=\"senha.valid || senha.pristine\"\n        class=\"alert alert-danger\">\n        Senha é obrigatória.\n        </div>\n      </div>\n\n      <div class=\"\" *ngIf=\"mensageDeErro\" style=\"color: red\">\n        {{mensageDeErro}}\n      </div>\n\n\n      <button type=\"submit\" class=\"btn btn-success\"\n      [disabled]=\"!formsUsuario.form.valid\">Fazer Login</button>\n    </form>\n  </div>\n  <br>\n  <hr>\n</div>\n<app-forms-cadastro-usuario></app-forms-cadastro-usuario>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/critica/critica.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/critica/critica.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-critica\" *ngIf=\"!usuario\">\n  <h2 mat-dialog-title> Você precisa estar logado para poder dar sua crítica!</h2>\n\n  <div class=\"botao-entrar\">\n\n\n  <button  routerLink=\"autenticacao\">Entrar</button>\n  </div>\n</div>\n\n<!-- Isso só aparece quando o usuário está logado -->\n<div *ngIf=\"usuario\" class=\"container-critica\">\n\n  <h2 mat-dialog-title> Crítica do filme : {{filme.titulo}}</h2>\n\n  <form (ngSubmit)=\"fazerCritica()\" #formsUsuario=\"ngForm\">\n\n    <div class=\"form-group\" id=\"nota\">\n      <label for=\"nota\">Qual nota você dá pra esse filme?</label>\n      <select class=\"form-control\" id=\"nota\"\n      [(ngModel)]=\"critica.nota\" name= \"nota\">\n        <option *ngFor=\"let opcaoNota of notasPossiveis\" [value]=\"opcaoNota\">{{opcaoNota}}</option>\n      </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"comentario\">Escreva uma sua crítica</label>\n      <textarea name=\"name\" [(ngModel)]=\"critica.comentario\" rows=\"4\"\n      style=\"margin-right: 0\"></textarea>\n    </div>\n\n    <button *ngIf=\"!primeiraVez\" type=\"submit\" class=\"botao-critica\">Atualizar Crítica</button>\n    <button *ngIf=\"primeiraVez\"type=\"submit\" class=\"botao-critica\">Adicionar Crítica</button>\n    <br><button *ngIf=\"!primeiraVez\" type=\"submit\" class=\"botao-remover-critica\">Remover sua crítica</button>\n\n  </form>\n\n\n  <div class=\"botao-entrar\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/filme/filme.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/filme/filme.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"filme\">\n\n  <div class=\"titulo\">\n    {{filme.titulo}} ({{filme.ano}})\n    <div style=\"float:right; margin-top:-10px\">\n      <!-- img class=\"estrelas\" src=\"assets/estrelas/voto_1.jpeg\" -->\n    </div>\n  </div>\n\n  <div class=\"container-media\">\n    <div class=\"linha\">\n        <div class=\"coluna\">\n            <img src=\"/assets/imagens/vingadores_0.jpg\">\n        </div>\n        <div class=\"div-video\">\n          <iframe class=\"video\" src=\"https://www.youtube.com/embed/g6ng8iy-l0U\" frameborder=\"0\"\n          allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"info-filme\">\n\n    <!--Direção--->\n    <div class=\"lista-pessoas\">\n      <ul>\n        <li><b>Direção:</b></li>\n        <li *ngFor=\"let pessoa of filme.diretores\">{{pessoa.nome}},</li>\n      </ul>\n    </div>\n\n    <!--Elenco--->\n    <div class=\"lista-pessoas\">\n      <ul>\n        <li><b>Elenco:</b></li>\n        <li *ngFor=\"let pessoa of filme.elenco\">{{pessoa.nome}},</li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"sinopse\">\n    <b>Sinopse:</b>\n    <br>{{filme.sinopse}}\n  </div>\n\n  <hr>\n\n\n  <div class=\"container-criticas\">\n    <span style=\"font-size: 28px; margin-left:20px\">Críticas de Usuários</span>\n\n    <br><br>\n\n      <ul>\n        <li *ngFor= \"let critica of filme.criticas\" class=\"critica\">\n              <span style=\"color:red\">{{critica.username}}</span>\n              , no dia {{critica.data}}, escreveu:\n            <br>\"{{critica.comentario}}\"\n            <br>Nota: {{critica.nota}}\n        </li>\n      </ul>\n\n      <div *ngIf=\"!criticaDoUsuario\" class=\"critica\">\n        Já assistiu {{filme.titulo}}? Então deixe sua crítica aqui também!\n        <button with=\"400px\"(click)=\"criticar()\" class=\"critica-botao\">\n        Avaliar esse filme</button>\n      </div>\n\n      <div *ngIf=\"criticaDoUsuario\" class=\"critica\">\n        <span style=\"color:red\">{{criticaDoUsuario.username}}</span>\n        , no dia {{criticaDoUsuario.data}}, escreveu:\n        <br>\"{{criticaDoUsuario.comentario}}\"\n        <br>\"Nota: {{criticaDoUsuario.nota}}\"\n        <button with=\"400px\"(click)=\"criticar()\" class=\"critica-botao\">\n        Editar Crítica</button>\n      </div>\n  </div>\n\n</div>\n\n<br><br><br><br><br><br><br><br><br>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Registro de Usuário</h1><br>\n  <form (ngSubmit)=\"registrar()\" #formsUsuario=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"nome\">Nome</label>\n      <input type=\"text\" class=\"form-control\" id=\"nome\" required\n      [(ngModel)]=\"usuario.nome\" name=\"nome\"\n      #nome=\"ngModel\">\n      <div [hidden]=\"nome.valid || nome.pristine\"\n      class=\"alert alert-danger\">\n      Nome é obrigatório\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"username\">Nomde de Usuário</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" required\n      [(ngModel)]=\"usuario.login.username\" name=\"username\"\n      #username=\"ngModel\">\n      <div [hidden]=\"username.valid || username.pristine\"\n      class=\"alert alert-danger\">\n      username é obrigatório\n      </div>\n    </div>\n\n\n    <div id=\"inline-forms\">\n      <div class=\"form-group\" id=\"campo\">\n        <label for=\"data\">Data de Nascimento</label>\n        <input type=\"date\" class=\"form-control\" id=\"data\" required\n        [(ngModel)]=\"usuario.dataNascimento\" name=\"data\" #dataNascimento=\"ngModel\">\n        <div [hidden]=\"dataNascimento.valid || dataNascimento.pristine\"\n        class=\"alert alert-danger\">\n        Data de nascimento é obrigatório\n        </div>\n      </div>\n\n      <div class=\"form-group\" id=\"campo\">\n        <label for=\"sexo\">Sexo</label>\n        <select class=\"form-control\" id=\"sexo\" required\n        [(ngModel)]=\"usuario.sexo\" name= \"sexo\">\n          <option *ngFor=\"let sexo of sexos\" [value]=\"sexo\">{{sexo}}</option>\n        </select>\n      </div>\n    </div>\n\n\n\n    <button type=\"submit\" class=\"btn btn-success\"\n    [disabled]=\"!formsUsuario.form.valid\">Registrar</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n    <!-- logo-->\n    <a class=\"image\" routerLink=\"/\">\n      <img src=\"assets/logo2.png\" height=\"55\" width=\"200\">\n    </a>\n\n    <div class=\"search-container\">\n      <form (ngSubmit)=\"buscaSimples()\">\n        <input type=\"text\" placeholder=\"Procurar por um filme, elenco, direção...\" name=\"search\"\n        [(ngModel)]=\"barraDeBusca\" class=\"barra-input\">\n        <select id= \"filtroDePesquisa\" class=\"barra-input\">\n          <option selected>{{filtrosExibidos[0]}}</option>\n          <option>{{filtrosExibidos[1]}}</option>\n          <option>{{filtrosExibidos[2]}}</option>\n          <option>{{filtrosExibidos[3]}}</option>\n          <option>{{filtrosExibidos[4]}}</option>\n        </select>\n        <button type=\"submit\" class=\"barra-input\">Buscar</button>\n      </form>\n    </div>\n\n    <div class=\"topnav-right\">\n      <a class=\"botao\" *ngIf=\"true\" routerLink=\"/developer\">Developer</a>\n      <a class=\"botao\" *ngIf=\"usuarioEstaLogado && usuario.moderador\" routerLink=\"/\">Adicionar Filme</a>\n\n      <a class=\"botao\" *ngIf=\"usuarioEstaLogado\" routerLink=\"/perfil/0\"> {{usuario.login.username}} Perfil</a>\n\n\n      <a class=\"botao\" *ngIf=\"!usuarioEstaLogado\" routerLink=\"/autenticacao\">Entrar</a>\n      <a class=\"botao\" *ngIf=\"usuarioEstaLogado\" (click)=\"logout()\">Sair</a>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/perfil-usuario/perfil-usuario.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/perfil-usuario/perfil-usuario.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  perfil-usuario works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/resultado-de-busca/resultado-de-busca.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/resultado-de-busca/resultado-de-busca.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!nenhumFilmeFoiEncontrado\">\n\n  <div class=\"container\" >\n    <h2>Filmes Encontrados</h2>\n\n    <ul class=\"filmesEncontrados\">\n      <li *ngFor=\"let filme of filmesEncontrados\" class=\"filme-da-lista\">\n        <div class=\"filme\">\n          <a routerLink=\"/filme/{{filme.id}}\">\n            {{filme.titulo}}</a>\n          ({{filme.ano}})\n          <!--Direção--->\n          <div class=\"lista-pessoas\">\n            <ul>\n              <li><b>Direção:</b></li>\n              <li *ngFor=\"let pessoa of filme.diretores\">{{pessoa.nome}},</li>\n            </ul>\n          </div>\n\n        </div>\n\n      </li>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container mensagem\" *ngIf=\"nenhumFilmeFoiEncontrado\" >\n  <h2>UMDB Filmes</h2>\n\n  <p >\n  <b>Nenhum filme foi Encontrado!</b><br>\n  <br>\n  Escolha uma categoria (Título, Diretor, Elenco ou Ano) e digite pelo conteúdo que você procura!<br>\n  Se não souber a categoria, não se preocupe, você também pode pesquisar em todas selecionando a categoria Todos.\n  </p>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/testa-servidor/testa-servidor.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/testa-servidor/testa-servidor.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <label for=\"router\">Router</label>\n  <input type=\"text\" [(ngModel)]=\"router\" value=\"\" id=\"router\">\n  <br><br>\n  <label for=\"query\">Query</label>\n  <input type=\"text\" [(ngModel)]=\"query\" value=\"\" id=\"query\">\n  <br><br>\n  <div class=\"\">\n    <button type=\"button\" (click)=\"get()\">GET</button>\n    <button type=\"button\" (click)=\"post()\">POST</button>\n    <button type=\"button\" (click)=\"put()\">PUT</button>\n    <button type=\"button\" (click)=\"delete()\">DELETE</button>\n  </div>\n  <br><br><br><br>\n  Response:<br>\n  {{response | json}}\n\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil-usuario/perfil-usuario.component */ "./src/app/perfil-usuario/perfil-usuario.component.ts");
/* harmony import */ var _filme_filme_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filme/filme.component */ "./src/app/filme/filme.component.ts");
/* harmony import */ var _autenticacao_autenticacao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autenticacao/autenticacao.component */ "./src/app/autenticacao/autenticacao.component.ts");
/* harmony import */ var _resultado_de_busca_resultado_de_busca_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resultado-de-busca/resultado-de-busca.component */ "./src/app/resultado-de-busca/resultado-de-busca.component.ts");
/* harmony import */ var _testa_servidor_testa_servidor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./testa-servidor/testa-servidor.component */ "./src/app/testa-servidor/testa-servidor.component.ts");








const routes = [
    //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }, default
    { path: 'perfil/:id', component: _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_3__["PerfilUsuarioComponent"] },
    { path: 'filme/:id', component: _filme_filme_component__WEBPACK_IMPORTED_MODULE_4__["FilmeComponent"] },
    { path: 'autenticacao', component: _autenticacao_autenticacao_component__WEBPACK_IMPORTED_MODULE_5__["AutenticacaoComponent"] },
    { path: 'busca/:id', component: _resultado_de_busca_resultado_de_busca_component__WEBPACK_IMPORTED_MODULE_6__["ResultadoDeBuscaComponent"] },
    { path: 'home', component: _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_3__["PerfilUsuarioComponent"] },
    { path: 'developer', component: _testa_servidor_testa_servidor_component__WEBPACK_IMPORTED_MODULE_7__["TestaServidorComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background-color: #dadfe8;\n}\n\n/* AppComponent's private CSS styles */\n\nh1 {\n  font-size: 1.2em;\n  margin-bottom: 0;\n}\n\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\n\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n\nnav a:visited, a:link {\n  color: #334953;\n}\n\nnav a:hover {\n  color: #039be5;\n  background-color: #cfd8dc;\n}\n\nnav a.active {\n  color: #039be5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsc0NBQXNDOztBQUN0QztFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYWRmZTg7XG59XG5cbi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaDIge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5uYXYgYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxubmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcbiAgY29sb3I6ICMzMzQ5NTM7XG59XG5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjMDM5YmU1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgY29sb3I6ICMwMzliZTU7XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'cliente';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _autenticacao_autenticacao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./autenticacao/autenticacao.component */ "./src/app/autenticacao/autenticacao.component.ts");
/* harmony import */ var _filme_filme_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filme/filme.component */ "./src/app/filme/filme.component.ts");
/* harmony import */ var _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./perfil-usuario/perfil-usuario.component */ "./src/app/perfil-usuario/perfil-usuario.component.ts");
/* harmony import */ var _forms_cadastro_usuario_forms_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms-cadastro-usuario/forms-cadastro-usuario.component */ "./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.ts");
/* harmony import */ var _resultado_de_busca_resultado_de_busca_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resultado-de-busca/resultado-de-busca.component */ "./src/app/resultado-de-busca/resultado-de-busca.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _critica_critica_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./critica/critica.component */ "./src/app/critica/critica.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _testa_servidor_testa_servidor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testa-servidor/testa-servidor.component */ "./src/app/testa-servidor/testa-servidor.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _autenticacao_autenticacao_component__WEBPACK_IMPORTED_MODULE_7__["AutenticacaoComponent"],
            _filme_filme_component__WEBPACK_IMPORTED_MODULE_8__["FilmeComponent"],
            _perfil_usuario_perfil_usuario_component__WEBPACK_IMPORTED_MODULE_9__["PerfilUsuarioComponent"],
            _forms_cadastro_usuario_forms_cadastro_usuario_component__WEBPACK_IMPORTED_MODULE_10__["FormsCadastroUsuarioComponent"],
            _resultado_de_busca_resultado_de_busca_component__WEBPACK_IMPORTED_MODULE_11__["ResultadoDeBuscaComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
            _critica_critica_component__WEBPACK_IMPORTED_MODULE_14__["CriticaComponent"],
            _testa_servidor_testa_servidor_component__WEBPACK_IMPORTED_MODULE_16__["TestaServidorComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
        ],
        entryComponents: [
            _critica_critica_component__WEBPACK_IMPORTED_MODULE_14__["CriticaComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/autenticacao/autenticacao.component.css":
/*!*********************************************************!*\
  !*** ./src/app/autenticacao/autenticacao.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 30px;\n  padding-bottom: 0px;\n  width: 900px;\n  background: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0ZW50aWNhY2FvL2F1dGVudGljYWNhby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hdXRlbnRpY2FjYW8vYXV0ZW50aWNhY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgd2lkdGg6IDkwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/autenticacao/autenticacao.component.ts":
/*!********************************************************!*\
  !*** ./src/app/autenticacao/autenticacao.component.ts ***!
  \********************************************************/
/*! exports provided: AutenticacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacaoComponent", function() { return AutenticacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AutenticacaoComponent = class AutenticacaoComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.dadosLogin = {
            username: "",
            senha: ""
        };
    }
    ngOnInit() {
    }
    login() {
        console.log('estou em login');
        this.usuarioService.login(this.dadosLogin.username, this.dadosLogin.senha, (usuarioLogouComExito, mensageDeErro) => {
            if (usuarioLogouComExito) {
                this.router.navigate(['/']);
                this.mensageDeErro = null;
            }
            else {
                this.mensageDeErro = mensageDeErro;
            }
        });
    }
};
AutenticacaoComponent.ctorParameters = () => [
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AutenticacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-autenticacao',
        template: __webpack_require__(/*! raw-loader!./autenticacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/autenticacao/autenticacao.component.html"),
        styles: [__webpack_require__(/*! ./autenticacao.component.css */ "./src/app/autenticacao/autenticacao.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AutenticacaoComponent);



/***/ }),

/***/ "./src/app/critica/critica.component.css":
/*!***********************************************!*\
  !*** ./src/app/critica/critica.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-critica {\n  text-align: center;\n  margin-top: 25px;\n  margin-bottom: 25px;\n}\n\nbutton {\n  margin-top: 20px;\n  width: 100px;\n  padding: 10px 20px;\n}\n\ntextarea {\n\n  width: 400px;\n}\n\n#nota {\n  margin: auto;\n  width: 400px;\n  margin-bottom: 30px;\n}\n\n.botao-remover-critica {\n  width: auto;\n  border-color: red;\n}\n\n.botao-critica {\n  width: auto;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JpdGljYS9jcml0aWNhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFdBQVc7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9jcml0aWNhL2NyaXRpY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItY3JpdGljYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5cbnRleHRhcmVhIHtcblxuICB3aWR0aDogNDAwcHg7XG59XG4jbm90YSB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmJvdGFvLXJlbW92ZXItY3JpdGljYSB7XG4gIHdpZHRoOiBhdXRvO1xuICBib3JkZXItY29sb3I6IHJlZDtcbn1cbi5ib3Rhby1jcml0aWNhIHtcbiAgd2lkdGg6IGF1dG87XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/critica/critica.component.ts":
/*!**********************************************!*\
  !*** ./src/app/critica/critica.component.ts ***!
  \**********************************************/
/*! exports provided: CriticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriticaComponent", function() { return CriticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _filme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filme.service */ "./src/app/filme.service.ts");




let CriticaComponent = class CriticaComponent {
    // precisa receber o filme e o usuario
    constructor(dialogRef, filmeService, data) {
        this.dialogRef = dialogRef;
        this.filmeService = filmeService;
        this.data = data;
        this.critica = {
            username: "a",
            data: null,
            comentario: "",
            nota: 0
        };
        this.primeiraVez = true;
        this.notasPossiveis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log('data:' + JSON.stringify(data));
        this.usuario = data.usuario;
        this.filme = data.filme;
        if (data.critica != null) {
            this.critica = data.critica;
            this.primeiraVez = false;
        }
    }
    ngOnInit() {
    }
    botaoEntrar() {
        this.dialogRef.close();
    }
    fazerCritica() {
        if (this.primeiraVez) {
            this.dialogRef.close();
            // post
        }
        else {
            //put
            this.dialogRef.close();
        }
        //close na callback
    }
    removerCritica() {
        //delet
    }
};
CriticaComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _filme_service__WEBPACK_IMPORTED_MODULE_3__["FilmeService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
CriticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-critica',
        template: __webpack_require__(/*! raw-loader!./critica.component.html */ "./node_modules/raw-loader/index.js!./src/app/critica/critica.component.html"),
        styles: [__webpack_require__(/*! ./critica.component.css */ "./src/app/critica/critica.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        _filme_service__WEBPACK_IMPORTED_MODULE_3__["FilmeService"], Object])
], CriticaComponent);



/***/ }),

/***/ "./src/app/filme.service.ts":
/*!**********************************!*\
  !*** ./src/app/filme.service.ts ***!
  \**********************************/
/*! exports provided: FilmeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmeService", function() { return FilmeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let FilmeService = class FilmeService {
    constructor(http) {
        this.http = http;
    }
    // Observable ativa uma chamada assincrona do retorno dessa função
    getFilme(nome) {
        this.router = '/filmes/' + nome;
        return this.http.get(this.router)
            .pipe(
        //catchError(this.handleError<RespostaServidorFilmes>('getFilme', []))
        );
    }
    /**
       * Fonte: https://angular.io/tutorial/toh-pt6
       * Tratador de error em operações HTTP
       * Permite que o app continue executando
       * @param operation - nome da operação que falhou
       * @param result - optional value to return as the observable result
       */
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            // Permite que o app continue executando com valor vazio
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
FilmeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FilmeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FilmeService);



/***/ }),

/***/ "./src/app/filme/filme.component.css":
/*!*******************************************!*\
  !*** ./src/app/filme/filme.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titulo {\n  /*background-color: gray;*/\n  width: 100%;\n  font-size: 36px;\n  /*text-align: left;\n\n  display: inline;\n  padding: 10px;\n  margin-right: 0px;\n*/\n}\n\n.container {\n  padding-top: 50px;\n  padding-left: 50px;\n  padding-right: 50px;\n  padding-bottom: 50px;\n  width: 900px;\n  background: white;\n}\n\nimg {\n  padding: 10px;\n  max-height:300px;\n  max-width:100%;\n  width: auto;\n  height: 300px;\n}\n\n.video {\n  min-width: 500px;\n  max-height: 300px;\n  height: 300px;\n  padding: 10px;\n}\n\n.div-video {\n    float: right;\n}\n\n.container-media {\n  width: 800px;\n  height: 310px;\n}\n\n.coluna {\n  float: left;\n}\n\n.estrelas {\n  width: 191;\n  height: 64px;\n}\n\nul {\n  list-style: none;\n  padding-left: 2px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-right: 2px;\n}\n\n.critica {\n  background-color: #e1e4e8;\n  padding-top: 50px;\n  padding-right: 30px;\n  padding-bottom: 50px;\n  padding-left: 50px;\n  margin-top: 5px;\n\n\n}\n\n.critica-botao {\n  float: right;\n  padding: 5px;\n}\n\n.container-criticas {\n  margin-top: 10px;\n  margin-bottom: 0px;\n}\n\n.lista-pessoas {\n  display: table;\n  width: 100%;\n}\n\n.lista-pessoas ul {\n  list-style: none;\n}\n\n.lista-pessoas li {\n  margin-left: 0px;\n  margin-right: 5px;\n  display: inline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsbWUvZmlsbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsZUFBZTtFQUNmOzs7OztDQUtEO0FBQ0Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlOzs7QUFHakI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9maWxtZS9maWxtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdHVsbyB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogZ3JheTsqL1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICAvKnRleHQtYWxpZ246IGxlZnQ7XG5cbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiovXG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgd2lkdGg6IDkwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuaW1nIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbWF4LWhlaWdodDozMDBweDtcbiAgbWF4LXdpZHRoOjEwMCU7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDMwMHB4O1xufVxuXG4udmlkZW8ge1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRpdi12aWRlbyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY29udGFpbmVyLW1lZGlhIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDMxMHB4O1xufVxuXG4uY29sdW5hIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5lc3RyZWxhcyB7XG4gIHdpZHRoOiAxOTE7XG4gIGhlaWdodDogNjRweDtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuLmNyaXRpY2Ege1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlNGU4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuXG5cbn1cbi5jcml0aWNhLWJvdGFvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jb250YWluZXItY3JpdGljYXMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5saXN0YS1wZXNzb2FzIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxpc3RhLXBlc3NvYXMgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmxpc3RhLXBlc3NvYXMgbGkge1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/filme/filme.component.ts":
/*!******************************************!*\
  !*** ./src/app/filme/filme.component.ts ***!
  \******************************************/
/*! exports provided: FilmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilmeComponent", function() { return FilmeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _filme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filme.service */ "./src/app/filme.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _critica_critica_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../critica/critica.component */ "./src/app/critica/critica.component.ts");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");








let FilmeComponent = class FilmeComponent {
    constructor(route, filmeService, location, dialog, usuarioService) {
        this.route = route;
        this.filmeService = filmeService;
        this.location = location;
        this.dialog = dialog;
        this.usuarioService = usuarioService;
        this.filme = {
            id: 2,
            titulo: "Vingadores: Ultimato",
            ano: 2019,
            diretores: [{ nome: "Russo1" }, { nome: "Russo2" }],
            elenco: [{ nome: "Robert Downey Jr" }, { nome: "Scarlett Johansson" }],
            criticas: [{ username: "guilherme", data: "12/12/2012", comentario: "adorei, achei uma porcaria", nota: 9 },
                { username: "marcelo", data: "12/12/2012", comentario: "adorei, mas nem tanto", nota: 8 }],
            imagens: ["/assets/images/vingadores_0.jpg"],
            sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos.Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
        };
        this.observerUsuario();
    }
    ngOnInit() {
        var idFilme = this.route.snapshot.params.id;
        // Busca filme id
        this.getFilme('id/' + idFilme); // TODO: Sem servidor
    }
    /**
      Adiciona um observer ao estado do usuário de logado.
    */
    observerUsuario() {
        this.usuarioService.usuarioEstaLogado.subscribe(usuarioEstaLogado => {
            console.log("this.usuarioService.usuarioEstaLogado.subscribe()");
            this.ajustaCriticaDoUsuario();
        });
    }
    getFilme(router) {
        this.filmeService.getFilme(router).subscribe(resposta => {
            console.log('resposta do server:' + JSON.stringify(resposta));
            if (!resposta.houveErro) {
                if (resposta.filmes.length > 0) {
                    this.filme = resposta.filmes[0];
                    console.log('resposta:' + JSON.stringify(resposta));
                    // Separa o comentario do usuario se ele existir
                    this.ajustaCriticaDoUsuario();
                }
                else {
                    // TODO: Dispara ação quando não acha filme.
                    console.log("nenhumFilmeFoiEncontrado");
                }
            }
            else {
                // Houve erro
                console.log(resposta.mensagemErro);
            }
            console.log('Filmes retornados' + resposta.filmes + ']');
        });
    }
    // Se o usuário estiver logado vai precisar ver se ele já faz uma crítica
    // E se esse for o caso precisa-se mostrar essa cŕitica de forma diferente
    ajustaCriticaDoUsuario() {
        console.log('estou em ajustaCriticaDoUsuario()');
        var user = this.usuarioService.getUser();
        console.log('estou em ajustaCriticaDoUsuario()+ user:' + user);
        if (user != null) {
            console.log('criticaDoUsuario antes:' + JSON.stringify(this.criticaDoUsuario));
            this.criticaDoUsuario = this.getCriticaDoUsuario(user.login.username);
            console.log('criticaDoUsuario depois:' + JSON.stringify(this.criticaDoUsuario));
            console.log('criticado usuario' + this.criticaDoUsuario);
        }
        else {
            console.log('else do ajustaCriticaDoUsuario()');
            this.criticaDoUsuario = null;
        }
    }
    criticar() {
        var usuario = this.usuarioService.getUser();
        var dados = {
            filme: this.filme,
            usuario: usuario,
            critica: this.criticaDoUsuario
        };
        const dialogRef = this.dialog.open(_critica_critica_component__WEBPACK_IMPORTED_MODULE_6__["CriticaComponent"], {
            width: '500px',
            data: dados
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('Fechou caixa de dialogo');
            // atualiza filmes
        });
    }
    getCriticaDoUsuario(username) {
        var index = -1;
        var critica;
        for (let critica of this.filme.criticas) {
            if (critica.username == username) {
                index = this.filme.criticas.indexOf(critica);
            }
        }
        if (index != -1) {
            console.log('criticas antes:' + JSON.stringify(this.filme));
            critica = this.filme.criticas.splice(index, 1)[0];
            console.log('criticas depois:' + JSON.stringify(this.filme));
            console.log('retirado:' + JSON.stringify(critica));
            return critica;
        }
        else {
            return null;
        }
    }
};
FilmeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _filme_service__WEBPACK_IMPORTED_MODULE_4__["FilmeService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"] }
];
FilmeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filme',
        template: __webpack_require__(/*! raw-loader!./filme.component.html */ "./node_modules/raw-loader/index.js!./src/app/filme/filme.component.html"),
        styles: [__webpack_require__(/*! ./filme.component.css */ "./src/app/filme/filme.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _filme_service__WEBPACK_IMPORTED_MODULE_4__["FilmeService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"]])
], FilmeComponent);



/***/ }),

/***/ "./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#inline-forms {\n   display: flex;\n   justify-content: space-around;\n   align-items: center;\n\n}\n#campo {\n  margin: 5px;\n  width: 100%;\n}\n.container {\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n  padding-bottom: 0px;\n\n  width: 900px;\n  background: white;\n  padding-bottom: 50px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMtY2FkYXN0cm8tdXN1YXJpby9mb3Jtcy1jYWRhc3Ryby11c3VhcmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxhQUFhO0dBQ2IsNkJBQTZCO0dBQzdCLG1CQUFtQjs7QUFFdEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjs7RUFFbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy1jYWRhc3Ryby11c3VhcmlvL2Zvcm1zLWNhZGFzdHJvLXVzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbmxpbmUtZm9ybXMge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuI2NhbXBvIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcblxuICB3aWR0aDogOTAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.ts ***!
  \****************************************************************************/
/*! exports provided: FormsCadastroUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsCadastroUsuarioComponent", function() { return FormsCadastroUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");



let FormsCadastroUsuarioComponent = class FormsCadastroUsuarioComponent {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.usuario = {
            login: {
                username: "",
                senha: ""
            },
            nome: "",
            dataNascimento: null,
            sexo: "",
            moderador: false
        };
        this.registrado = false;
        this.sexos = ['Masculino', 'Feminino', 'Outro'];
    }
    registrar() {
        this.registrado = true;
        this.usuarioService.registrar(this.usuario, (usuarioLogouComExito, mensageDeErro) => { });
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.usuario); }
    ngOnInit() { }
};
FormsCadastroUsuarioComponent.ctorParameters = () => [
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
FormsCadastroUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forms-cadastro-usuario',
        template: __webpack_require__(/*! raw-loader!./forms-cadastro-usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.html"),
        styles: [__webpack_require__(/*! ./forms-cadastro-usuario.component.css */ "./src/app/forms-cadastro-usuario/forms-cadastro-usuario.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
], FormsCadastroUsuarioComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Nav bar*/\n.navbar {\n  background-color: #333;\n  position: fixed;\n  width: 100%;\n  overflow: visible;\n}\n.topnav-right {\n  position: static;\n  float: right;\n}\n/* Elementos de Pesquisa */\n.search-container {\n  \n  margin-top: 12px;\n  margin-bottom: 12px;\n  float: left;\n}\n.barra-input {\n  height: 30px;\n  margin-left: 2px;\n  margin-right: 2px;\n}\n.navbar input[type=text] {\n  width: 350px;\n  padding: 6px;\n  font-size: 17px;\n  border: none;\n}\n/* Fim dos elementos de Pesquisa */\n.navbar a {\n  vertical-align: middle;\n  font-size: 17px;\n  text-align: center;\n  color: #f2f2f2;\n  text-decoration: none;\n  float: left;\n}\n.navbar .botao:hover {\n  background-color: #ddd;\n  color: black;\n}\n.image {\n  margin-top: 1px;\n  margin-left: 1px;\n}\n.botao {\n    padding: 16px 20px;\n}\n.navbar div {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFdBQVc7QUFDWDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDtBQUVBLDBCQUEwQjtBQUMxQjs7RUFFRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBLGtDQUFrQztBQUNsQztFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsV0FBVztBQUNiO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBOYXYgYmFyKi9cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnRvcG5hdi1yaWdodCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogRWxlbWVudG9zIGRlIFBlc3F1aXNhICovXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIFxuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmJhcnJhLWlucHV0IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cbi5uYXZiYXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogNnB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi8qIEZpbSBkb3MgZWxlbWVudG9zIGRlIFBlc3F1aXNhICovXG4ubmF2YmFyIGEge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmMmYyZjI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5uYXZiYXIgLmJvdGFvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaW1hZ2Uge1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxcHg7XG59XG4uYm90YW8ge1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbn1cblxuLm5hdmJhciBkaXYge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../usuario.service */ "./src/app/usuario.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
        this.filtroIds = ['titulo', 'diretor', 'elenco', 'ano', 'todos'];
        this.filtrosExibidos = ['Título', 'Diretor', 'Elenco', 'Ano', 'Todos'];
        this.barraDeBusca = '';
        this.usuarioEstaLogado = false;
        this.usuarioModerador = false;
        this.usuarioService.usuarioEstaLogado.subscribe(usuarioEstaLogado => {
            this.usuarioEstaLogado = usuarioEstaLogado;
            console.log("this.usuarioService.usuarioEstaLogado.subscribe()");
            if (usuarioEstaLogado) {
                this.atualizaUsuario();
            }
        });
    }
    ngOnInit() { }
    atualizaUsuario() {
        var usuario = this.usuarioService.getUser();
        if (usuario === null) {
            console.log('Em atualizaUsuario() usuario = null');
        }
        else {
            this.usuario = usuario;
            console.log('novo usuario é: ' + this.usuario.login.username);
        }
    }
    atualizaModerador() {
        if (this.usuario != null) {
            if (this.usuario.moderador) {
            }
        }
        else {
            console.log("Erro! Usuário não está logado. Em atualizaModerador()");
        }
    }
    buscaSimples() {
        var filtroEscolhido = document.getElementById("filtroDePesquisa").value;
        var index = this.filtrosExibidos.indexOf(filtroEscolhido);
        var idFiltro = this.filtroIds[index];
        var pesquisa = idFiltro + '/' + this.barraDeBusca;
        // O que estiver nesse vetor é a url da próxima página
        this.router.navigate(['/busca/_' + this.barraDeBusca], { queryParams: { filtro: idFiltro, conteudo: this.barraDeBusca } });
    }
    logout() {
        this.usuarioService.logout();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/perfil-usuario/perfil-usuario.component.css":
/*!*************************************************************!*\
  !*** ./src/app/perfil-usuario/perfil-usuario.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC11c3VhcmlvL3BlcmZpbC11c3VhcmlvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/perfil-usuario/perfil-usuario.component.ts":
/*!************************************************************!*\
  !*** ./src/app/perfil-usuario/perfil-usuario.component.ts ***!
  \************************************************************/
/*! exports provided: PerfilUsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilUsuarioComponent", function() { return PerfilUsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PerfilUsuarioComponent = class PerfilUsuarioComponent {
    constructor() { }
    ngOnInit() {
    }
};
PerfilUsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-perfil-usuario',
        template: __webpack_require__(/*! raw-loader!./perfil-usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/perfil-usuario/perfil-usuario.component.html"),
        styles: [__webpack_require__(/*! ./perfil-usuario.component.css */ "./src/app/perfil-usuario/perfil-usuario.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PerfilUsuarioComponent);



/***/ }),

/***/ "./src/app/resultado-de-busca/resultado-de-busca.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/resultado-de-busca/resultado-de-busca.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.container {\n  padding-left: 20px;\n  padding-top: 40px;\n  width: 600px;\n  background: white;\n}\n\n.mensagem .container {\n  .background-color: white;\n  font-size: 10;\n}\n\n.filmesEncontrados {\n  margin-left: 0px;\n\n  list-style-type: none;\n  padding: 20px;\n}\n\n.filme-da-lista {\n  border-style: solid;\n  border-width: thin;\n  border-color: black;\n  padding: 20px;\n  margin-bottom: 5px;\n}\n\nh2 {\n  text-align: left;\n}\n\n.lista-pessoas {\n  padding-left: 0px;\n  display: table;\n  width: 100%;\n}\n\n.lista-pessoas ul {\n  list-style: none;\n  padding-left: 5px;\n}\n\n.lista-pessoas li {\n\n  margin-left: 0px;\n  margin-right: 5px;\n  display: inline;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0YWRvLWRlLWJ1c2NhL3Jlc3VsdGFkby1kZS1idXNjYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7O0FBR0E7RUFDRSxnQkFBZ0I7O0VBRWhCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUNBOztFQUVFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby1kZS1idXNjYS9yZXN1bHRhZG8tZGUtYnVzY2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tZW5zYWdlbSAuY29udGFpbmVyIHtcbiAgLmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwO1xufVxuXG5cbi5maWxtZXNFbmNvbnRyYWRvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG5cbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZmlsbWUtZGEtbGlzdGEge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5saXN0YS1wZXNzb2FzIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5saXN0YS1wZXNzb2FzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4ubGlzdGEtcGVzc29hcyBsaSB7XG5cbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/resultado-de-busca/resultado-de-busca.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/resultado-de-busca/resultado-de-busca.component.ts ***!
  \********************************************************************/
/*! exports provided: ResultadoDeBuscaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadoDeBuscaComponent", function() { return ResultadoDeBuscaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _filme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../filme.service */ "./src/app/filme.service.ts");





let ResultadoDeBuscaComponent = class ResultadoDeBuscaComponent {
    constructor(route, filmeService, location) {
        this.route = route;
        this.filmeService = filmeService;
        this.location = location;
        this.filme = {
            id: 2,
            titulo: "Vingadores: Ultimato",
            ano: 2019,
            diretores: [{ nome: "Russo1" }, { nome: "Russo2" }],
            elenco: [{ nome: "Robert Downey Jr" }, { nome: "Scarlett Johansson" }],
            criticas: [{ username: "guilherme", data: "12/12/2012", comentario: "adorei, achei uma porcaria", nota: 9 },
                { username: "marcelo", data: "12/12/2012", comentario: "adorei, mas nem tanto", nota: 8 }],
            imagens: ["/assets/images/vingadores_0.jpg"],
            sinopse: "Após Thanos eliminar metade das criaturas vivas, os Vingadores precisam lidar com a dor da perda de amigos e seus entes queridos.Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, Steve Rogers (Chris Evans) e Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco."
        };
        this.filmesEncontrados = [this.filme, this.filme, this.filme]; // TODO: Sem Servidor
        this.nenhumFilmeFoiEncontrado = true; // TODO: Sem Servidor tem q ser true
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.getFilmes(this.route.snapshot.queryParams); // TODO: Sem servidor
        });
    }
    getFilmes(params) {
        var conteudo = params.conteudo;
        var filtro = params.filtro;
        var router;
        if (conteudo.length > 0) {
            console.log('string não vazia');
            router = filtro + '/' + conteudo;
        }
        else {
            console.log('string vazia');
            router = "";
        }
        console.log('agora vai router[' + router + ']');
        this.filmeService.getFilme(router).subscribe(resposta => {
            if (!resposta.houveErro) {
                this.filmesEncontrados = resposta.filmes;
                if (this.filmesEncontrados.length > 0) {
                    this.nenhumFilmeFoiEncontrado = false;
                }
                else {
                    // TODO: Dispara ação quando não acha filme.
                    console.log("nenhumFilmeFoiEncontrado");
                }
            }
            else {
                // Houve erro
                console.log(resposta.mensagemErro);
            }
            console.log('Filmes retornados' + resposta.filmes + ']');
        });
    }
};
ResultadoDeBuscaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _filme_service__WEBPACK_IMPORTED_MODULE_4__["FilmeService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
ResultadoDeBuscaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resultado-de-busca',
        template: __webpack_require__(/*! raw-loader!./resultado-de-busca.component.html */ "./node_modules/raw-loader/index.js!./src/app/resultado-de-busca/resultado-de-busca.component.html"),
        styles: [__webpack_require__(/*! ./resultado-de-busca.component.css */ "./src/app/resultado-de-busca/resultado-de-busca.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _filme_service__WEBPACK_IMPORTED_MODULE_4__["FilmeService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], ResultadoDeBuscaComponent);



/***/ }),

/***/ "./src/app/testa-servidor/testa-servidor.component.css":
/*!*************************************************************!*\
  !*** ./src/app/testa-servidor/testa-servidor.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 5px;\n}\n\n.container {\n  margin-top: 100px;\n  text-align: center;\n}\n\ninput {\n  margin: 5px;\n  width: 400px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGEtc2Vydmlkb3IvdGVzdGEtc2Vydmlkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdGVzdGEtc2Vydmlkb3IvdGVzdGEtc2Vydmlkb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXQge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/testa-servidor/testa-servidor.component.ts":
/*!************************************************************!*\
  !*** ./src/app/testa-servidor/testa-servidor.component.ts ***!
  \************************************************************/
/*! exports provided: TestaServidorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestaServidorComponent", function() { return TestaServidorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let TestaServidorComponent = class TestaServidorComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    get() {
        this.http.get(this.router).subscribe(response => {
            this.response = response;
        });
    }
    post() {
        this.http.post(this.router, this.query).subscribe(response => {
            this.response = response;
        });
    }
    put() {
        this.http.put(this.router, this.query).subscribe(response => {
            this.response = response;
        });
    }
    delete() {
        this.http.delete(this.router).subscribe(response => {
            this.response = response;
        });
    }
};
TestaServidorComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TestaServidorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testa-servidor',
        template: __webpack_require__(/*! raw-loader!./testa-servidor.component.html */ "./node_modules/raw-loader/index.js!./src/app/testa-servidor/testa-servidor.component.html"),
        styles: [__webpack_require__(/*! ./testa-servidor.component.css */ "./src/app/testa-servidor/testa-servidor.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], TestaServidorComponent);



/***/ }),

/***/ "./src/app/usuario.service.ts":
/*!************************************!*\
  !*** ./src/app/usuario.service.ts ***!
  \************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let UsuarioService = class UsuarioService {
    constructor() {
        this.usuarioEstaLogado = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    login(username, senha, callback) {
        console.log('estou em login do servico');
        //requisição
        //chama callback
        // se logou
        if (username == 'guilherme' || username == 'marcelo' || username == 'gabriel') {
            //TODO: atribui a this.usuario o ususario obtido pelo servidor
            this.usuario = {
                login: {
                    username: username,
                    senha: ""
                },
                nome: 'String',
                dataNascimento: new Date(),
                sexo: 'String',
                moderador: true
            };
            // Atualiza o observable
            this.usuarioEstaLogado.next(true);
            callback(true, null);
        }
        else {
            var mensagem = "Esta combinação de nome do usuário e senha é inválida.";
            callback(false, mensagem);
        }
    }
    registrar(usuario, callback) {
        //TODO: Subustituir por pegar do servidor os dados cadastrados.
        //request
        if (usuario.login.username == 'guilherme' || usuario.login.username == 'marcelo' || usuario.login.username == 'gabriel') {
            //TODO: colocar o usuario recebido do servidor
            this.usuario = usuario;
            // se logar de verdade
            this.usuarioEstaLogado.next(true);
            callback(true, null);
        }
        else {
            var mensagem = "Exemplo: Usuário já existente";
            callback(false, mensagem);
        }
    }
    getUser() {
        console.log('getUser:' + this.usuarioEstaLogado);
        if (this.usuarioEstaLogado) {
            return this.usuario;
            console.log('get user usuario');
        }
        else {
            console.log('get user null');
            return null;
        }
    }
    logout() {
        console.log('Logout no serviço');
        this.usuarioEstaLogado.next(false);
        this.usuario = null;
    }
};
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UsuarioService);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/marcelo/EA975/EA975_K/projeto/cliente/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map