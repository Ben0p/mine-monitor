function _slicedToArray(t,e){return _arrayWithHoles(t)||_iterableToArrayLimit(t,e)||_unsupportedIterableToArray(t,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _iterableToArrayLimit(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,a=!1,s=void 0;try{for(var r,i=t[Symbol.iterator]();!(o=(r=i.next()).done)&&(n.push(r.value),!e||n.length!==e);o=!0);}catch(c){a=!0,s=c}finally{try{o||null==i.return||i.return()}finally{if(a)throw s}}return n}}function _arrayWithHoles(t){if(Array.isArray(t))return t}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{wpJA:function(t,e,n){"use strict";n.r(e);var o,a,s,r=n("ofXK"),i=n("tyNb"),c=n("fXoL"),l=((o=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=c["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-ups"]],decls:1,vars:0,template:function(t,e){1&t&&c["\u0275\u0275element"](0,"router-outlet")},directives:[i.h],encapsulation:2}),o),u=n("lJxs"),d=n("UXun"),p=n("XNiG"),h=n("itXk"),f=n("l5mm"),m=n("z6cu"),g=n("JX91"),b=n("5+tZ"),v=n("JIr8"),C=n("tk/3"),_=((s=function(){function t(e){var n=this;_classCallCheck(this,t),this.http=e,this.upsUrl="https://solmm01.fmg.local/api/ups/status",this.ups$=Object(f.a)(1e4).pipe(Object(g.a)(0),Object(b.a)((function(){return n.getUpsStatus()})),Object(d.a)(1),Object(v.a)(this.handleError))}return _createClass(t,[{key:"getUpsStatus",value:function(){return this.http.get(this.upsUrl)}},{key:"handleError",value:function(t){var e;return e=t.error instanceof ErrorEvent?"An error occurred: ".concat(t.error.message):"Backend returned code ".concat(t.status,": ").concat(t.body.error),console.error(t),Object(m.a)(e)}}]),t}()).\u0275fac=function(t){return new(t||s)(c["\u0275\u0275inject"](C.a))},s.\u0275prov=c["\u0275\u0275defineInjectable"]({token:s,factory:s.\u0275fac,providedIn:"root"}),s),O=((a=function(){function t(e){var n=this;_classCallCheck(this,t),this.http=e,this.modulesUrl="https://solmm01.fmg.local/api/ups/modules",this.ups$=Object(f.a)(1e4).pipe(Object(g.a)(0),Object(b.a)((function(){return n.getUpsModules()})),Object(d.a)(1),Object(v.a)(this.handleError))}return _createClass(t,[{key:"getUpsModules",value:function(){return this.http.get(this.modulesUrl)}},{key:"handleError",value:function(t){var e;return e=t.error instanceof ErrorEvent?"An error occurred: ".concat(t.error.message):"Backend returned code ".concat(t.status,": ").concat(t.body.error),console.error(t),Object(m.a)(e)}}]),t}()).\u0275fac=function(t){return new(t||a)(c["\u0275\u0275inject"](C.a))},a.\u0275prov=c["\u0275\u0275defineInjectable"]({token:a,factory:a.\u0275fac,providedIn:"root"}),a),y=n("aceb");function M(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275element"](1,"nb-icon",4),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275classMapInterpolate1"]("icon status-",n.system_status,""),c["\u0275\u0275property"]("icon",n.system_icon),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" \xa0",n.status," ")}}function P(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"div"),c["\u0275\u0275element"](1,"nb-icon",4),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;c["\u0275\u0275advance"](1),c["\u0275\u0275classMapInterpolate1"]("icon status-",n.phase_status,""),c["\u0275\u0275property"]("icon",n.phase_icon),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",n.phase_voltage,"v ")}}function w(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"nb-list-item",1),c["\u0275\u0275elementStart"](1,"span"),c["\u0275\u0275text"](2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"span"),c["\u0275\u0275template"](4,M,3,5,"div",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"span"),c["\u0275\u0275element"](6,"nb-icon",4),c["\u0275\u0275text"](7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"span"),c["\u0275\u0275element"](9,"nb-icon",4),c["\u0275\u0275text"](10),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"span"),c["\u0275\u0275element"](12,"nb-icon",4),c["\u0275\u0275text"](13),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"span"),c["\u0275\u0275template"](15,P,3,5,"div",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"span"),c["\u0275\u0275element"](17,"nb-icon",4),c["\u0275\u0275text"](18),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" ",n.location," "),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",n.status),c["\u0275\u0275advance"](2),c["\u0275\u0275classMapInterpolate1"]("icon status-",n.batt_status,""),c["\u0275\u0275property"]("icon",n.batt_icon),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" \xa0",n.batt_remaining,"% "),c["\u0275\u0275advance"](2),c["\u0275\u0275classMapInterpolate1"]("icon status-",n.load_status,""),c["\u0275\u0275property"]("icon",n.load_icon),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" \xa0",n.load_percent,"% "),c["\u0275\u0275advance"](2),c["\u0275\u0275classMapInterpolate1"]("icon status-",n.load_status,""),c["\u0275\u0275property"]("icon","flash-outline"),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" \xa0",n.kw_out,"kw "),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("ngForOf",n.phases),c["\u0275\u0275advance"](2),c["\u0275\u0275classMapInterpolate1"]("icon status-",n.temp_status,""),c["\u0275\u0275property"]("icon",n.temp_icon),c["\u0275\u0275advance"](1),c["\u0275\u0275textInterpolate1"](" ",n.temp,"\xb0C ")}}function S(t,e){if(1&t&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-list"),c["\u0275\u0275elementStart"](2,"nb-list-item",1),c["\u0275\u0275elementStart"](3,"span"),c["\u0275\u0275text"](4,"Name"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"span"),c["\u0275\u0275text"](6,"Status"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"span"),c["\u0275\u0275text"](8,"Battery "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"span"),c["\u0275\u0275text"](10,"Load "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"span"),c["\u0275\u0275text"](12,"Power Out"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"span"),c["\u0275\u0275text"](14,"Volts In"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"span"),c["\u0275\u0275text"](16,"Temperature"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](17,w,19,23,"nb-list-item",2),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&t){var n=e.ngIf;c["\u0275\u0275advance"](17),c["\u0275\u0275property"]("ngForOf",n)}}var k,E,x=((k=function t(e,n){_classCallCheck(this,t),this.upsStatusService=e,this.upsModuleService=n,this.errorMessageSubject=new p.a,this.errorMessage$=this.errorMessageSubject.asObservable(),this.mergeById=function(t){var e=_slicedToArray(t,2),n=e[0],o=e[1];return n.map((function(t){return Object.assign({},t,o.find((function(e){return t._id.$oid===e._id.$oid})))}))},this.ups$=Object(h.a)([this.upsModuleService.ups$,this.upsStatusService.ups$]).pipe(Object(u.a)(this.mergeById),Object(d.a)(1))}).\u0275fac=function(t){return new(t||k)(c["\u0275\u0275directiveInject"](_),c["\u0275\u0275directiveInject"](O))},k.\u0275cmp=c["\u0275\u0275defineComponent"]({type:k,selectors:[["ups-status"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"item"],["class","item",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"icon"]],template:function(t,e){1&t&&(c["\u0275\u0275template"](0,S,18,1,"nb-card",0),c["\u0275\u0275pipe"](1,"async")),2&t&&c["\u0275\u0275property"]("ngIf",c["\u0275\u0275pipeBind1"](1,1,e.ups$))},directives:[r.m,y.n,r.l,y.A],pipes:[r.b],styles:[".nb-theme-default   [_nghost-%COMP%]{overflow:auto}.nb-theme-default   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.nb-theme-default   [_nghost-%COMP%]   .item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nb-theme-default   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]:first-child{border-top:none}.nb-theme-default   [_nghost-%COMP%]   .icon.status-basic[_ngcontent-%COMP%]{color:#edf1f7}.nb-theme-default   [_nghost-%COMP%]   .icon.status-primary[_ngcontent-%COMP%]{color:#36f}.nb-theme-default   [_nghost-%COMP%]   .icon.status-success[_ngcontent-%COMP%]{color:#00d68f}.nb-theme-default   [_nghost-%COMP%]   .icon.status-warning[_ngcontent-%COMP%]{color:#fa0}.nb-theme-default   [_nghost-%COMP%]   .icon.status-danger[_ngcontent-%COMP%]{color:#ff3d71}.nb-theme-default   [_nghost-%COMP%]   .icon.status-info[_ngcontent-%COMP%]{color:#0095ff}.nb-theme-default   [_nghost-%COMP%]   .icon.status-control[_ngcontent-%COMP%]{color:#fff}@media (max-width:575.98px){.nb-theme-default   [_nghost-%COMP%]   ngx-traffic-bar[_ngcontent-%COMP%]{display:none}}.nb-theme-dark   [_nghost-%COMP%]{overflow:auto}.nb-theme-dark   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.nb-theme-dark   [_nghost-%COMP%]   .item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nb-theme-dark   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]:first-child{border-top:none}.nb-theme-dark   [_nghost-%COMP%]   .icon.status-basic[_ngcontent-%COMP%]{color:#edf1f7}.nb-theme-dark   [_nghost-%COMP%]   .icon.status-primary[_ngcontent-%COMP%]{color:#36f}.nb-theme-dark   [_nghost-%COMP%]   .icon.status-success[_ngcontent-%COMP%]{color:#00d68f}.nb-theme-dark   [_nghost-%COMP%]   .icon.status-warning[_ngcontent-%COMP%]{color:#fa0}.nb-theme-dark   [_nghost-%COMP%]   .icon.status-danger[_ngcontent-%COMP%]{color:#ff3d71}.nb-theme-dark   [_nghost-%COMP%]   .icon.status-info[_ngcontent-%COMP%]{color:#0095ff}.nb-theme-dark   [_nghost-%COMP%]   .icon.status-control[_ngcontent-%COMP%]{color:#fff}@media (max-width:575.98px){.nb-theme-dark   [_nghost-%COMP%]   ngx-traffic-bar[_ngcontent-%COMP%]{display:none}}.nb-theme-cosmic   [_nghost-%COMP%]{overflow:auto}.nb-theme-cosmic   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.nb-theme-cosmic   [_nghost-%COMP%]   .item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nb-theme-cosmic   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]:first-child{border-top:none}.nb-theme-cosmic   [_nghost-%COMP%]   .icon.status-basic[_ngcontent-%COMP%]{color:#f0f0fa}.nb-theme-cosmic   [_nghost-%COMP%]   .icon.status-primary[_ngcontent-%COMP%]{color:#a16eff}.nb-theme-cosmic   [_nghost-%COMP%]   .icon.status-success[_ngcontent-%COMP%]{color:#00d68f}.nb-theme-cosmic   [_nghost-%COMP%]   .icon.status-warning[_ngcontent-%COMP%]{color:#fa0}.nb-theme-cosmic   [_nghost-%COMP%]   .icon.status-danger[_ngcontent-%COMP%]{color:#ff3d71}.nb-theme-cosmic   [_nghost-%COMP%]   .icon.status-info[_ngcontent-%COMP%]{color:#0095ff}.nb-theme-cosmic   [_nghost-%COMP%]   .icon.status-control[_ngcontent-%COMP%]{color:#fff}@media (max-width:575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   ngx-traffic-bar[_ngcontent-%COMP%]{display:none}}.nb-theme-corporate   [_nghost-%COMP%]{overflow:auto}.nb-theme-corporate   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.nb-theme-corporate   [_nghost-%COMP%]   .item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1}.nb-theme-corporate   [_nghost-%COMP%]   .item[_ngcontent-%COMP%]:first-child{border-top:none}.nb-theme-corporate   [_nghost-%COMP%]   .icon.status-basic[_ngcontent-%COMP%]{color:#edf1f7}.nb-theme-corporate   [_nghost-%COMP%]   .icon.status-primary[_ngcontent-%COMP%]{color:#36f}.nb-theme-corporate   [_nghost-%COMP%]   .icon.status-success[_ngcontent-%COMP%]{color:#00d68f}.nb-theme-corporate   [_nghost-%COMP%]   .icon.status-warning[_ngcontent-%COMP%]{color:#fa0}.nb-theme-corporate   [_nghost-%COMP%]   .icon.status-danger[_ngcontent-%COMP%]{color:#ff3d71}.nb-theme-corporate   [_nghost-%COMP%]   .icon.status-info[_ngcontent-%COMP%]{color:#0095ff}.nb-theme-corporate   [_nghost-%COMP%]   .icon.status-control[_ngcontent-%COMP%]{color:#fff}@media (max-width:575.98px){.nb-theme-corporate   [_nghost-%COMP%]   ngx-traffic-bar[_ngcontent-%COMP%]{display:none}}"],changeDetection:0}),k),j=n("LRne"),I={headers:new C.d({"Content-Type":"application/json"})},T="https://solmm01.fmg.local/api/ups/",D=((E=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.toastrService=n}return _createClass(t,[{key:"extractData",value:function(t){return t||{}}},{key:"handleError",value:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1?arguments[1]:void 0);return function(n){return t.dangerToast("top-right","danger",n.statusText,n.status),Object(j.a)(e)}}},{key:"returnFalse",value:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=arguments.length>1?arguments[1]:void 0;return Object(j.a)(t)}},{key:"createUpsModule",value:function(t){return this.http.post(T+"create",JSON.stringify(t),I).pipe(Object(u.a)(this.extractData),Object(v.a)(this.handleError("error")))}},{key:"updateUpsModule",value:function(t){return this.http.post(T+"update",JSON.stringify(t),I).pipe(Object(u.a)(this.extractData),Object(v.a)(this.handleError("error")))}},{key:"deleteUpsModule",value:function(t){return this.http.delete(T+"delete/"+t).pipe(Object(u.a)(this.extractData),Object(v.a)(this.handleError("failed")))}},{key:"getUpsList",value:function(){return this.http.get(T+"list").pipe(Object(u.a)(this.extractData),Object(v.a)(this.handleError("failed")))}},{key:"dangerToast",value:function(t,e,n,o){var a=this;this.toastRef=this.toastrService.show("API call error - "+o+": "+n,"Failed",{position:t,status:e,preventDuplicates:!0,duration:0}),this.toastRef&&(this.tempToast=this.toastRef),this.delay&&clearTimeout(this.delay),this.delay=setTimeout((function(){a.clearToast(a.tempToast)}),5500)}},{key:"successToast",value:function(t,e,n,o){this.toastrService.show("API call error - "+o+": "+n,"Failed",{position:t,status:e,preventDuplicates:!0})}},{key:"clearToast",value:function(t){t&&t.close()}}]),t}()).\u0275fac=function(t){return new(t||E)(c["\u0275\u0275inject"](C.a),c["\u0275\u0275inject"](y.ob))},E.\u0275prov=c["\u0275\u0275defineInjectable"]({token:E,factory:E.\u0275fac,providedIn:"root"}),E),A=n("RS3s");function R(t,e){if(1&t){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"nb-card",2),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2,"Warning"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275text"](4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"nb-card-footer"),c["\u0275\u0275elementStart"](6,"div",3),c["\u0275\u0275elementStart"](7,"button",4),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var t=e.dialogRef;return c["\u0275\u0275nextContext"]().onModifyConfirm(!0),t.close()})),c["\u0275\u0275text"](8,"Yes"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](9," \xa0\xa0 "),c["\u0275\u0275elementStart"](10,"button",4),c["\u0275\u0275listener"]("click",(function(){c["\u0275\u0275restoreView"](n);var t=e.dialogRef;return c["\u0275\u0275nextContext"]().onModifyConfirm(!1),t.close()})),c["\u0275\u0275text"](11,"No"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&t){var o=e.$implicit;c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](o)}}var U,B,$=[{path:"",component:l,children:[{path:"status",component:x},{path:"edit",component:(U=function(){function t(e,n,o){_classCallCheck(this,t),this.ups=e,this.dialogService=n,this.toastrService=o,this.submitted=!1,this.types=[{title:"Management Card",value:"NMC"},{title:"Power Xpert",value:"PXGX"}],this.upsSettings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0}},this.index=0,this.ipPattern=new RegExp("(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"),this.whiteSpace=new RegExp("([^\\s]*)")}return _createClass(t,[{key:"loadModuleTableSettings",value:function(){return{add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmCreate:!0},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>',confirmSave:!0},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{name:{title:"Name",type:"string"},location:{title:"Location",type:"string"},ip:{title:"IP",type:"string"},type:{title:"Type",type:"string",editor:{type:"list",config:{list:this.types}}},uid:{title:"UID",type:"text",editable:!1,editor:{type:"list",config:{list:[{value:"",title:"(auto)"}]}}}}}}},{key:"refreshData",value:function(){var t=this;this.ups.getUpsList().subscribe((function(e){t.upsSource=e,t.upsSettings=t.loadModuleTableSettings()}))}},{key:"ngOnDestroy",value:function(){}},{key:"ngOnInit",value:function(){this.refreshData()}},{key:"onDialog",value:function(t,e,n){this.tableEvent=n,this.modifyType=e,this.dialogMessage="create"==e?"Are you sure you want to "+e+" "+this.tableEvent.newData.name+"?":"Are you sure you want to "+e+" "+this.tableEvent.data.name+"?",this.dialogService.open(t,{context:this.dialogMessage})}},{key:"onModifyConfirm",value:function(t){var e=this,n=!1;t?"delete"==this.modifyType?this.ups.deleteUpsModule(this.tableEvent.data.uid).subscribe((function(t){e.postResult=t,e.postResult.success?(e.successToast("top-right","success",e.postResult.message),e.tableEvent.confirm.resolve(),e.refreshData()):(e.dangerToast("top-right","danger",e.postResult.message),e.tableEvent.confirm.reject())})):"edit"==this.modifyType?(0==this.ipPattern.test(this.tableEvent.newData.ip)&&(this.dangerToast("top-right","danger","IP Address invalid."),n=!0),""===this.tableEvent.newData.name&&(this.dangerToast("top-right","danger","Name invalid."),n=!0),""===this.tableEvent.newData.location&&(this.dangerToast("top-right","danger","Location invalid."),n=!0),""===this.tableEvent.newData.model&&(this.dangerToast("top-right","danger","Model invalid."),n=!0),0==n&&this.ups.updateUpsModule(this.tableEvent.newData).subscribe((function(t){e.postResult=t,e.postResult.success?(e.successToast("top-right","success",e.postResult.message),e.tableEvent.confirm.resolve(),e.refreshData()):(e.dangerToast("top-right","danger",e.postResult.message),e.tableEvent.confirm.reject())}))):"create"==this.modifyType&&(0==this.ipPattern.test(this.tableEvent.newData.ip)&&(this.dangerToast("top-right","danger","IP Address invalid."),n=!0),""===this.tableEvent.newData.name&&(this.dangerToast("top-right","danger","Name invalid."),n=!0),""===this.tableEvent.newData.location&&(this.dangerToast("top-right","danger","Location invalid."),n=!0),""===this.tableEvent.newData.model&&(this.dangerToast("top-right","danger","Model invalid."),n=!0),0==n&&this.ups.createUpsModule(this.tableEvent.newData).subscribe((function(t){e.postResult=t,e.postResult.success?(e.successToast("top-right","success",e.postResult.message),e.tableEvent.confirm.resolve(),e.refreshData()):(e.dangerToast("top-right","danger",e.postResult.message),e.tableEvent.confirm.reject())}))):this.tableEvent.confirm.reject()}},{key:"successToast",value:function(t,e,n){"delete"==this.modifyType?this.toastrService.show(n,"Success",{position:t,status:e}):"edit"==this.modifyType?this.toastrService.show(n,"Success",{position:t,status:e}):"create"==this.modifyType&&this.toastrService.show("Created  "+this.tableEvent.newData.name,"Success",{position:t,status:e})}},{key:"dangerToast",value:function(t,e,n){this.toastrService.show(n,"Error",{position:t,status:e})}}]),t}(),U.\u0275fac=function(t){return new(t||U)(c["\u0275\u0275directiveInject"](D),c["\u0275\u0275directiveInject"](y.z),c["\u0275\u0275directiveInject"](y.ob))},U.\u0275cmp=c["\u0275\u0275defineComponent"]({type:U,selectors:[["ups-edit"]],decls:3,vars:2,consts:[[3,"settings","source","deleteConfirm","editConfirm","createConfirm"],["dialog",""],["status","danger"],[1,"wrapper"],["nbButton","",3,"click"]],template:function(t,e){if(1&t){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"ng2-smart-table",0),c["\u0275\u0275listener"]("deleteConfirm",(function(t){c["\u0275\u0275restoreView"](n);var o=c["\u0275\u0275reference"](2);return e.onDialog(o,"delete",t)}))("editConfirm",(function(t){c["\u0275\u0275restoreView"](n);var o=c["\u0275\u0275reference"](2);return e.onDialog(o,"edit",t)}))("createConfirm",(function(t){c["\u0275\u0275restoreView"](n);var o=c["\u0275\u0275reference"](2);return e.onDialog(o,"create",t)})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](1,R,12,1,"ng-template",null,1,c["\u0275\u0275templateRefExtractor"])}2&t&&c["\u0275\u0275property"]("settings",e.upsSettings)("source",e.upsSource)},directives:[A.a,y.n,y.p,y.m,y.o,y.k],styles:[".nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0)}.wrapper[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     .ng-valid{color:#000}"]}),U)}]}],L=((B=function t(){_classCallCheck(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:B}),B.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||B)},imports:[[i.g.forChild($)],i.g]}),B),N=n("h+2I");n.d(e,"UpsModule",(function(){return X}));var F,X=((F=function t(){_classCallCheck(this,t)}).\u0275mod=c["\u0275\u0275defineNgModule"]({type:F}),F.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||F)},imports:[[r.c,L,N.a,y.q,y.l,y.C,A.b]]}),F)}}]);