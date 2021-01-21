(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"7H8U":function(t,e,n){"use strict";n.r(e);var s=n("ofXK"),r=n("tyNb"),a=n("fXoL"),o=n("lWTH");function i(t,e){1&t&&a["\u0275\u0275element"](0,"router-outlet")}const l=function(){return["view","solar"]};let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-solar"]],decls:1,vars:2,consts:[[4,"nbIsGranted"]],template:function(t,e){1&t&&a["\u0275\u0275template"](0,i,1,0,"router-outlet",0),2&t&&a["\u0275\u0275property"]("nbIsGranted",a["\u0275\u0275pureFunction0"](1,l))},directives:[o.b,r.h],encapsulation:2}),t})();var d=n("tk/3"),h=n("LRne"),u=n("lJxs"),p=n("JIr8"),m=n("aceb");const g={headers:new d.d({"Content-Type":"application/json"})},f="https://solmm01.fmg.local/api/solar/";let b=(()=>{class t{constructor(t,e){this.http=t,this.toastrService=e}extractData(t){return t||{}}handleError(t="operation",e){return t=>(this.dangerToast("top-right","danger",t.statusText,t.status),Object(h.a)(e))}returnFalse(t="operation",e){return Object(h.a)(e)}createSolarController(t){return this.http.post(f+"create",JSON.stringify(t),g).pipe(Object(u.a)(this.extractData),Object(p.a)(this.handleError("error")))}updateSolarController(t){return this.http.post(f+"update",JSON.stringify(t),g).pipe(Object(u.a)(this.extractData),Object(p.a)(this.handleError("error")))}deleteSolarController(t){return this.http.delete(f+"delete/"+t).pipe(Object(u.a)(this.extractData),Object(p.a)(this.handleError("failed")))}getSolarControllers(){return this.http.get(f+"controllers").pipe(Object(u.a)(this.extractData),Object(p.a)(this.handleError("failed")))}getSolarData(){return this.http.get(f+"data").pipe(Object(u.a)(this.extractData),Object(p.a)(this.handleError("failed")))}dangerToast(t,e,n,s){this.toastRef=this.toastrService.show("API call error - "+s+": "+n,"Failed",{position:t,status:e,preventDuplicates:!0,duration:0}),this.toastRef&&(this.tempToast=this.toastRef),this.delay&&clearTimeout(this.delay),this.delay=setTimeout(()=>{this.clearToast(this.tempToast)},5500)}successToast(t,e,n,s){this.toastrService.show("API call error - "+s+": "+n,"Failed",{position:t,status:e,preventDuplicates:!0})}clearToast(t){t&&t.close()}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275inject"](d.a),a["\u0275\u0275inject"](m.ob))},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=n("eGx+");function C(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"div",4),a["\u0275\u0275elementStart"](1,"nb-card"),a["\u0275\u0275elementStart"](2,"nb-card-header"),a["\u0275\u0275text"](3),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](4,"nb-card-body"),a["\u0275\u0275element"](5,"ngx-solar-doughnut",5),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](6,"nb-card-footer"),a["\u0275\u0275text"](7),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()),2&t){const t=e.$implicit;a["\u0275\u0275advance"](3),a["\u0275\u0275textInterpolate1"](" ",t.name," "),a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("data",t),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate1"](" State: ",t.live.charge_state," ")}}function y(t,e){if(1&t&&(a["\u0275\u0275elementStart"](0,"div",2),a["\u0275\u0275template"](1,C,8,3,"div",3),a["\u0275\u0275elementEnd"]()),2&t){const t=a["\u0275\u0275nextContext"](2);a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("ngForOf",t.solar_datas)}}const S=function(){return["view","solar_controllers"]};function w(t,e){1&t&&(a["\u0275\u0275elementStart"](0,"div"),a["\u0275\u0275template"](1,y,2,1,"div",1),a["\u0275\u0275elementEnd"]()),2&t&&(a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("nbIsGranted",a["\u0275\u0275pureFunction0"](1,S)))}let E=(()=>{class t{constructor(t){this.solar=t,this.loaded=!1}ngOnInit(){this.refreshData(),this.loaded=!0,this.interval=setInterval(()=>{this.refreshData()},1e4)}ngOnDestroy(){clearInterval(this.interval)}refreshData(){this.solar.getSolarData().subscribe(t=>{this.solar_datas=t})}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](b))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["solar-controllers"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","row",4,"nbIsGranted"],[1,"row"],["class","col-xl-2 col-lg-3 col-md-4 col-sm-6",4,"ngFor","ngForOf"],[1,"col-xl-2","col-lg-3","col-md-4","col-sm-6"],[3,"data"]],template:function(t,e){1&t&&a["\u0275\u0275template"](0,w,2,2,"div",0),2&t&&a["\u0275\u0275property"]("ngIf",e.loaded)},directives:[s.m,o.b,s.l,m.n,m.p,m.m,v.a,m.o],styles:["nb-card[_ngcontent-%COMP%]{height:250px}"]}),t})();var x=n("RS3s");function T(t,e){if(1&t){const t=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"ng2-smart-table",2),a["\u0275\u0275listener"]("deleteConfirm",(function(e){a["\u0275\u0275restoreView"](t);const n=a["\u0275\u0275nextContext"](),s=a["\u0275\u0275reference"](2);return n.onDialog(s,"delete",e)}))("editConfirm",(function(e){a["\u0275\u0275restoreView"](t);const n=a["\u0275\u0275nextContext"](),s=a["\u0275\u0275reference"](2);return n.onDialog(s,"edit",e)}))("createConfirm",(function(e){a["\u0275\u0275restoreView"](t);const n=a["\u0275\u0275nextContext"](),s=a["\u0275\u0275reference"](2);return n.onDialog(s,"create",e)})),a["\u0275\u0275elementEnd"]()}if(2&t){const t=a["\u0275\u0275nextContext"]();a["\u0275\u0275property"]("settings",t.controllerSettings)("source",t.controllerSource)}}function D(t,e){if(1&t){const t=a["\u0275\u0275getCurrentView"]();a["\u0275\u0275elementStart"](0,"nb-card",3),a["\u0275\u0275elementStart"](1,"nb-card-header"),a["\u0275\u0275text"](2,"Warning"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](3,"nb-card-body"),a["\u0275\u0275text"](4),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementStart"](5,"nb-card-footer"),a["\u0275\u0275elementStart"](6,"div",4),a["\u0275\u0275elementStart"](7,"button",5),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](t);const n=e.dialogRef;return a["\u0275\u0275nextContext"]().onModifyConfirm(!0),n.close()})),a["\u0275\u0275text"](8,"Yes"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](9," \xa0\xa0 "),a["\u0275\u0275elementStart"](10,"button",5),a["\u0275\u0275listener"]("click",(function(){a["\u0275\u0275restoreView"](t);const n=e.dialogRef;return a["\u0275\u0275nextContext"]().onModifyConfirm(!1),n.close()})),a["\u0275\u0275text"](11,"No"),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"](),a["\u0275\u0275elementEnd"]()}if(2&t){const t=e.$implicit;a["\u0275\u0275advance"](4),a["\u0275\u0275textInterpolate"](t)}}const I=function(){return["view","solar_edit"]},O=[{path:"",component:c,children:[{path:"controllers",component:E},{path:"edit",component:(()=>{class t{constructor(t,e,n){this.solar=t,this.dialogService=e,this.toastrService=n,this.submitted=!1,this.models=[{title:"Tristar-60 MPPT",value:"Tristar-60 MPPT"},{title:"Tristar MPPT 600V",value:"Tristar MPPT 600V"}],this.controllerSettings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0}},this.index=0,this.ipPattern=new RegExp("(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),this.whiteSpace=new RegExp("([^\\s]*)")}loadModuleTableSettings(){return{add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{name:{title:"Name",type:"string"},location:{title:"Location",type:"string"},ip:{title:"IP",type:"string"},model:{title:"Model",type:"string",editor:{type:"list",config:{list:this.models}}},uid:{title:"UID",type:"text",editable:!1,editor:{type:"list",config:{list:[{value:"",title:"(auto)"}]}}}}}}refreshData(){this.solar.getSolarControllers().subscribe(t=>{this.controllerSource=t,this.controllerSettings=this.loadModuleTableSettings()})}ngOnDestroy(){}ngOnInit(){this.refreshData()}onDialog(t,e,n){this.tableEvent=n,this.modifyType=e,this.dialogMessage="create"==e?"Are you sure you want to "+e+" "+this.tableEvent.newData.name+"?":"Are you sure you want to "+e+" "+this.tableEvent.data.name+"?",this.dialogService.open(t,{context:this.dialogMessage})}onModifyConfirm(t){var e=!1;t?"delete"==this.modifyType?this.solar.deleteSolarController(this.tableEvent.data.uid).subscribe(t=>{this.postResult=t,this.postResult.success?(this.successToast("top-right","success",this.postResult.message),this.tableEvent.confirm.resolve(),this.refreshData()):(this.dangerToast("top-right","danger",this.postResult.message),this.tableEvent.confirm.reject())}):"edit"==this.modifyType?(0==this.ipPattern.test(this.tableEvent.newData.ip)&&(this.dangerToast("top-right","danger","IP Address invalid."),e=!0),""===this.tableEvent.newData.name&&(this.dangerToast("top-right","danger","Name invalid."),e=!0),""===this.tableEvent.newData.location&&(this.dangerToast("top-right","danger","Location invalid."),e=!0),""===this.tableEvent.newData.model&&(this.dangerToast("top-right","danger","Model invalid."),e=!0),0==e&&this.solar.updateSolarController(this.tableEvent.newData).subscribe(t=>{this.postResult=t,this.postResult.success?(this.successToast("top-right","success",this.postResult.message),this.tableEvent.confirm.resolve(),this.refreshData()):(this.dangerToast("top-right","danger",this.postResult.message),this.tableEvent.confirm.reject())})):"create"==this.modifyType&&(0==this.ipPattern.test(this.tableEvent.newData.ip)&&(this.dangerToast("top-right","danger","IP Address invalid."),e=!0),""===this.tableEvent.newData.name&&(this.dangerToast("top-right","danger","Name invalid."),e=!0),""===this.tableEvent.newData.location&&(this.dangerToast("top-right","danger","Location invalid."),e=!0),""===this.tableEvent.newData.model&&(this.dangerToast("top-right","danger","Model invalid."),e=!0),0==e&&this.solar.createSolarController(this.tableEvent.newData).subscribe(t=>{this.postResult=t,this.postResult.success?(this.successToast("top-right","success",this.postResult.message),this.tableEvent.confirm.resolve(),this.refreshData()):(this.dangerToast("top-right","danger",this.postResult.message),this.tableEvent.confirm.reject())})):this.tableEvent.confirm.reject()}successToast(t,e,n){"delete"==this.modifyType?this.toastrService.show(n,"Success",{position:t,status:e}):"edit"==this.modifyType?this.toastrService.show(n,"Success",{position:t,status:e}):"create"==this.modifyType&&this.toastrService.show("Created  "+this.tableEvent.newData.name,"Success",{position:t,status:e})}dangerToast(t,e,n){this.toastrService.show(n,"Error",{position:t,status:e})}}return t.\u0275fac=function(e){return new(e||t)(a["\u0275\u0275directiveInject"](b),a["\u0275\u0275directiveInject"](m.z),a["\u0275\u0275directiveInject"](m.ob))},t.\u0275cmp=a["\u0275\u0275defineComponent"]({type:t,selectors:[["solar-edit"]],decls:3,vars:2,consts:[[3,"settings","source","deleteConfirm","editConfirm","createConfirm",4,"nbIsGranted"],["dialog",""],[3,"settings","source","deleteConfirm","editConfirm","createConfirm"],["status","danger"],[1,"wrapper"],["nbButton","",3,"click"]],template:function(t,e){1&t&&(a["\u0275\u0275template"](0,T,1,2,"ng2-smart-table",0),a["\u0275\u0275template"](1,D,12,1,"ng-template",null,1,a["\u0275\u0275templateRefExtractor"])),2&t&&a["\u0275\u0275property"]("nbIsGranted",a["\u0275\u0275pureFunction0"](1,I))},directives:[o.b,x.a,m.n,m.p,m.m,m.o,m.k],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.wrapper[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     .ng-valid{color:#000}"]}),t})()}]}];let j=(()=>{class t{}return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[r.g.forChild(O)],r.g]}),t})();var M=n("h+2I");n.d(e,"SolarModule",(function(){return P}));let P=(()=>{class t{}return t.\u0275mod=a["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[s.c,j,M.a,m.q,m.l,m.C,x.b,o.d]]}),t})()}}]);