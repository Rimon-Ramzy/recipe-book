import{a as P,b as B}from"./chunk-DB6PNAND.js";import{b as O}from"./chunk-6U7MSXUP.js";import{a as p}from"./chunk-7W3ALKSK.js";import{D as m,E as d,J as u,L as w,M as o,N as n,O as f,P as C,R as x,S as _,V as a,fa as T,ga as A,ia as L,j as k,ja as j,k as M,ka as E,la as N,na as R,o as I,p as c,pa as H,qa as F,r as D,ra as V,s as g,sa as y,t as l,w as S,wa as q,x as b}from"./chunk-G4DRSHJR.js";var Y=[{path:"",redirectTo:"/recipes",pathMatch:"full"},{path:"recipes",loadChildren:()=>import("./chunk-PDMYYD7B.js").then(t=>t.RecipesModule)},{path:"shopping-list",loadChildren:()=>import("./chunk-5DQIIIAS.js").then(t=>t.ShoppingListModule)},{path:"auth",loadChildren:()=>import("./chunk-NL6UJR4U.js").then(t=>t.AuthModule)}],z=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=c({imports:[y.forRoot(Y,{preloadingStrategy:V}),y]});let t=e;return t})();function $(t,e){t&1&&(o(0,"li",8)(1,"a",13),a(2,"Recipes"),n()())}function ee(t,e){t&1&&(o(0,"li",8)(1,"a",14),a(2,"Authenticate"),n()())}function te(t,e){if(t&1){let v=C();o(0,"li",15)(1,"a",16),x("click",function(){S(v);let i=_();return b(i.onLogout())}),a(2,"Logout"),n()()}}function ie(t,e){if(t&1){let v=C();o(0,"li")(1,"button",17),a(2," Manage "),n(),o(3,"ul",18)(4,"li")(5,"a",19),x("click",function(){S(v);let i=_();return b(i.onSaveData())}),a(6,"Save Data"),n()(),o(7,"li")(8,"a",19),x("click",function(){S(v);let i=_();return b(i.onFetchData())}),a(9,"Fetch Data"),n()()()()}}var J=(()=>{let e=class e{constructor(r,i){this.dataStorageService=r,this.authService=i,this.isAuthenticated=!1}ngOnInit(){this.userSub=this.authService.user.subscribe(r=>{this.isAuthenticated=!!r})}onLogout(){this.authService.logout()}onSaveData(){this.dataStorageService.storeRecipes()}onFetchData(){this.dataStorageService.fetchRecipes().subscribe()}ngOnDestroy(){this.userSub.unsubscribe()}};e.\u0275fac=function(i){return new(i||e)(d(B),d(p))},e.\u0275cmp=g({type:e,selectors:[["app-header"]],decls:17,vars:4,consts:[[1,"navbar","navbar-expand-lg","bg-body-tertiary"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavDropdown",1,"collapse","navbar-collapse"],[1,"navbar-nav"],["class","nav-item","routerLinkActive","active",4,"ngIf"],["routerLinkActive","active",1,"nav-item"],["routerLink","/shopping-list",1,"nav-link"],[1,"dropdown"],["class","nav-item",4,"ngIf"],[4,"ngIf"],["routerLink","/recipes",1,"nav-link"],["routerLink","/auth",1,"nav-link"],[1,"nav-item"],[1,"nav-link",2,"cursor","pointer",3,"click"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-outline-secondary","dropdown-toggle"],[1,"dropdown-menu","start-0"],[1,"dropdown-item",2,"cursor","pointer",3,"click"]],template:function(i,s){i&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"Recipe Book"),n(),o(4,"button",3),f(5,"span",4),n(),o(6,"div",5)(7,"ul",6),w(8,$,3,0,"li",7)(9,ee,3,0,"li",7),o(10,"li",8)(11,"a",9),a(12,"Shopping List"),n()()()(),o(13,"div",10)(14,"ul",6),w(15,te,3,0,"li",11)(16,ie,10,0,"li",12),n()()()()),i&2&&(m(8),u("ngIf",s.isAuthenticated),m(1),u("ngIf",!s.isAuthenticated),m(6),u("ngIf",s.isAuthenticated),m(1),u("ngIf",s.isAuthenticated))},dependencies:[T,H,F],styles:[".active[_ngcontent-%COMP%]{background-color:#ddd;margin:0}"]});let t=e;return t})();var K=(()=>{let e=class e{constructor(r){this.authService=r,this.title="shopping-project"}ngOnInit(){this.authService.autoLogin()}};e.\u0275fac=function(i){return new(i||e)(d(p))},e.\u0275cmp=g({type:e,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"container"],[1,"row"],[1,"col-md-12"]],template:function(i,s){i&1&&(f(0,"app-header"),o(1,"div",0)(2,"div",1)(3,"div",2),f(4,"router-outlet"),n()()())},dependencies:[R,J]});let t=e;return t})();var Q=(()=>{let e=class e{constructor(r){this.authService=r}intercept(r,i){return this.authService.user.pipe(k(1),M(s=>{if(!s)return i.handle(r);let X=r.clone({params:new A().set("auth",s.token)});return i.handle(X)}))}};e.\u0275fac=function(i){return new(i||e)(D(p))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let t=e;return t})();var U=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e}),e.\u0275inj=c({providers:[O,P,{provide:L,useClass:Q,multi:!0}]});let t=e;return t})();var W=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=l({type:e,bootstrap:[K]}),e.\u0275inj=c({imports:[N,z,j,q,U]});let t=e;return t})();E().bootstrapModule(W).catch(t=>console.error(t));