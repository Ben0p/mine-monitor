(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"t+m9":function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),a=n("aceb"),o=n("lWTH"),i=n("h+2I"),c=n("tyNb"),d=n("fXoL");function s(e,t){1&e&&d["\u0275\u0275element"](0,"router-outlet")}const l=function(){return["view","weather"]};let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-weather"]],decls:1,vars:2,consts:[[4,"nbIsGranted"]],template:function(e,t){1&e&&d["\u0275\u0275template"](0,s,1,0,"router-outlet",0),2&e&&d["\u0275\u0275property"]("nbIsGranted",d["\u0275\u0275pureFunction0"](1,l))},directives:[o.b,c.h],encapsulation:2}),e})();var u=n("1SsM"),f=n("VJQC");function m(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",4),d["\u0275\u0275elementStart"](1,"nb-card"),d["\u0275\u0275elementStart"](2,"nb-card-header"),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](4,"nb-card-body"),d["\u0275\u0275element"](5,"ngx-weather-wind-direction",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;d["\u0275\u0275advance"](3),d["\u0275\u0275textInterpolate1"](" Wind Speed and Direction - ",e.location," "),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("data",e)}}function h(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"div",2),d["\u0275\u0275template"](1,m,6,2,"div",3),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("ngForOf",e.wind_datas)}}const w=function(){return["view","weather_wind"]};function v(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div"),d["\u0275\u0275template"](1,h,2,1,"div",1),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("nbIsGranted",d["\u0275\u0275pureFunction0"](1,w)))}const b=[{path:"",component:p,children:[{path:"wind",component:(()=>{class e{constructor(e){this.weather=e,this.loaded=!1}ngOnInit(){this.refreshData(),this.loaded=!0,this.interval=setInterval(()=>{this.refreshData()},6e5)}ngOnDestroy(){clearInterval(this.interval)}refreshData(){this.weather.getWeatherWind().subscribe(e=>{this.wind_datas=e})}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["weather-wind"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","row",4,"nbIsGranted"],[1,"row"],["class","col-12",4,"ngFor","ngForOf"],[1,"col-12"],[3,"data"]],template:function(e,t){1&e&&d["\u0275\u0275template"](0,v,2,2,"div",0),2&e&&d["\u0275\u0275property"]("ngIf",t.loaded)},directives:[r.m,o.b,r.l,a.n,a.p,a.m,f.a],styles:["nb-card[_ngcontent-%COMP%]{height:500px}"]}),e})()}]}];let g=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.g.forChild(b)],c.g]}),e})();n.d(t,"WeatherModule",(function(){return y}));let y=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[g,r.c,i.a,a.q,o.d]]}),e})()}}]);