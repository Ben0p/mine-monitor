(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{dgmN:function(e,t,i){"use strict";i.r(t);var s=i("aceb"),a=i("lWTH"),r=i("vTDv"),n=i("tyNb");const l=[{title:"Dashboards",icon:"home-outline",link:"/pages/dashboards",home:!0,data:{permission:"view",resource:"dashboards"},children:[{title:"Alerts / Tetra",link:"/pages/dashboards/alerts-tetra",data:{permission:"view",resource:"dashboards"}},{title:"Power",link:"/pages/dashboards/power",data:{permission:"view",resource:"dashboards"}}]},{title:"Alerts",icon:"bulb-outline",data:{permission:"view",resource:"alerts"},children:[{title:"Overview",link:"/pages/alerts/overview",data:{permission:"view",resource:"alerts_overview"}},{title:"All",link:"/pages/alerts/all",data:{permission:"view",resource:"alerts_all"}},{title:"Weather Zone",link:"/pages/alerts/weatherzone",data:{permission:"view",resource:"alerts_display"}},{title:"Display",link:"/pages/alerts/display",data:{permission:"view",resource:"alerts_display"}},{title:"Edit",link:"/pages/alerts/edit",data:{permission:"view",resource:"alerts_edit"}}]},{title:"Wind",icon:"umbrella-outline",data:{permission:"view",resource:"wind"},children:[{title:"All",link:"/pages/wind/all",data:{permission:"view",resource:"wind_all"}}]},{title:"Tetra",icon:"radio-outline",data:{permission:"view",resource:"tetra"},children:[{title:"Nodes",link:"/pages/tetra/nodes",data:{permission:"view",resource:"tetra_nodes"}},{title:"Subscribers",link:"/pages/tetra/subscribers",data:{permission:"view",resource:"tetra_subscribers"}}]},{title:"Solar",icon:"sun-outline",data:{permission:"view",resource:"solar"},children:[{title:"Controllers",link:"/pages/solar/controllers",data:{permission:"view",resource:"solar_controllers"}},{title:"Edit",link:"/pages/solar/edit",data:{permission:"view",resource:"solar_edit"}}]},{title:"Generators",icon:"settings-2-outline",data:{permission:"view",resource:"gen"},children:[{title:"Status",link:"/pages/gen/status",data:{permission:"view",resource:"gen_status"}}]},{title:"FM",icon:"music-outline",data:{permission:"view",resource:"gen"},children:[{title:"Status",link:"/pages/fm/status",data:{permission:"view",resource:"fm_status"}},{title:"Edit",link:"/pages/fm/edit",data:{permission:"view",resource:"fm_edit"}}]},{title:"Map",icon:"map-outline",link:"/pages/map",data:{permission:"view",resource:"map"}},{title:"Settings",icon:"options-2-outline",data:{permission:"view",resource:"settings"},children:[{title:"Style",link:"/pages/settings/style",data:{permission:"view",resource:"settings_style"}}]}];var o=i("fXoL"),d=i("mgFL");const u=[{path:"",component:(()=>{class e{constructor(e){this.accessChecker=e,this.menu=l}ngOnInit(){this.authMenuItems()}authMenuItems(){this.menu.forEach(e=>{this.authMenuItem(e)})}authMenuItem(e){e.data&&e.data.permission&&e.data.resource?this.accessChecker.isGranted(e.data.permission,e.data.resource).subscribe(t=>{e.hidden=!t}):e.hidden=!0,e.hidden||null==e.children||e.children.forEach(t=>{t.data&&t.data.permission&&t.data.resource?this.accessChecker.isGranted(t.data.permission,t.data.resource).subscribe(e=>{t.hidden=!e}):t.hidden=e.hidden})}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"](a.a))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"ngx-one-column-layout"),o["\u0275\u0275element"](1,"nb-menu",0),o["\u0275\u0275element"](2,"router-outlet"),o["\u0275\u0275elementEnd"]()),2&e&&(o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("items",t.menu))},directives:[d.a,s.Q,n.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),e})(),children:[{path:"dashboards",loadChildren:()=>Promise.all([i.e(0),i.e(9)]).then(i.bind(null,"/3RA")).then(e=>e.DashboardsModule)},{path:"settings",loadChildren:()=>i.e(13).then(i.bind(null,"yPrK")).then(e=>e.SettingsModule)},{path:"alerts",loadChildren:()=>Promise.all([i.e(0),i.e(8)]).then(i.bind(null,"efP1")).then(e=>e.AlertsModule)},{path:"wind",loadChildren:()=>Promise.all([i.e(0),i.e(16)]).then(i.bind(null,"p5L5")).then(e=>e.WindModule)},{path:"tetra",loadChildren:()=>Promise.all([i.e(0),i.e(15)]).then(i.bind(null,"tMKU")).then(e=>e.TetraModule)},{path:"solar",loadChildren:()=>Promise.all([i.e(0),i.e(14)]).then(i.bind(null,"7H8U")).then(e=>e.SolarModule)},{path:"gen",loadChildren:()=>Promise.all([i.e(0),i.e(11)]).then(i.bind(null,"Jzgh")).then(e=>e.GenModule)},{path:"fm",loadChildren:()=>Promise.all([i.e(0),i.e(10)]).then(i.bind(null,"Id0d")).then(e=>e.FmModule)},{path:"map",loadChildren:()=>i.e(6).then(i.bind(null,"862v")).then(e=>e.MapModule)},{path:"",redirectTo:"dashboards/alerts-tetra",pathMatch:"full"}]}];let c=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.g.forChild(u)],n.g]}),e})();var h=i("h+2I");i.d(t,"PagesModule",(function(){return p}));let p=(()=>{class e{}return e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c,r.a,s.R,h.a,a.d]]}),e})()}}]);