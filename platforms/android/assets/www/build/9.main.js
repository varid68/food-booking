webpackJsonp([9],{263:function(n,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var e=t(0),a=t(317),o=t(16),u=t(18),i=t(112),r=t(171),c=t(172),s=t(173),_=t(174),b=t(175),d=t(176),f=t(318),h=t(288),p=t(48);t.d(l,"TabsModuleNgFactory",function(){return y});var m=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])};return function(l,t){function e(){this.constructor=l}n(l,t),l.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}}(),g=function(n){function l(l){return n.call(this,l,[r.a,c.a,s.a,_.a,b.a,d.a,f.a],[])||this}return m(l,n),Object.defineProperty(l.prototype,"_NgLocalization_7",{get:function(){return null==this.__NgLocalization_7&&(this.__NgLocalization_7=new o.a(this.parent.get(e.c))),this.__NgLocalization_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ɵi_8",{get:function(){return null==this.__ɵi_8&&(this.__ɵi_8=new u.a),this.__ɵi_8},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_FormBuilder_9",{get:function(){return null==this.__FormBuilder_9&&(this.__FormBuilder_9=new u.b),this.__FormBuilder_9},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new o.d,this._ɵba_1=new u.c,this._FormsModule_2=new u.d,this._ReactiveFormsModule_3=new u.e,this._IonicModule_4=new i.b,this._IonicPageModule_5=new i.c,this._TabsModule_6=new a.a,this._LAZY_LOADED_TOKEN_10=h.a,this._TabsModule_6},l.prototype.getInternal=function(n,l){return n===o.d?this._CommonModule_0:n===u.c?this._ɵba_1:n===u.d?this._FormsModule_2:n===u.e?this._ReactiveFormsModule_3:n===i.b?this._IonicModule_4:n===i.c?this._IonicPageModule_5:n===a.a?this._TabsModule_6:n===o.e?this._NgLocalization_7:n===u.a?this._ɵi_8:n===u.b?this._FormBuilder_9:n===p.d?this._LAZY_LOADED_TOKEN_10:l},l.prototype.destroyInternal=function(){},l}(e.x),y=new e.y(g,a.a)},266:function(n,l,t){"use strict";function e(n){return o._14(2,[o._22(402653184,1,{_fixedContent:0}),o._22(402653184,2,{_scrollContent:0}),(n()(),o._15(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),o._25(null,0),(n()(),o._15(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),o._25(null,1),o._25(null,2)],null,null)}function a(n){return o._14(0,[(n()(),o._15(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null]],null,null,e,h)),o._16(4374528,null,0,u.a,[i.c,r.b,c.a,o.H,o.I,s.a,_.a,o.g,[2,b.a],[2,d.a]],null,null)],null,function(n,l){n(l,0,0,o._20(l,1).statusbarPadding)})}var o=t(0),u=t(43),i=t(1),r=t(3),c=t(9),s=t(7),_=t(17),b=t(5),d=t(20);t.d(l,"b",function(){return h}),l.a=e;var f=[],h=o._13({encapsulation:2,styles:f,data:{}});o._24("ion-content",u.a,a,{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])},288:function(n,l,t){"use strict";t(0),t(44),t(46),t(125);t.d(l,"a",function(){return e});var e=(this&&this.__decorate,this&&this.__metadata,function(){function n(n,l,t,e,a,o,u){this.navCtrl=n,this.navParams=l,this.elementRef=t,this.renderer=e,this.event=a,this.sound=o,this.keyboard=u,this.home="PageOne",this.favorit="Favorit",this.transaksi="Transaksi",this.profil="Profil"}return n.prototype.ionViewDidLoad=function(){var n=this,l=this.queryElement(this.elementRef.nativeElement,".tabbar");this.event.subscribe("hideTabs",function(){n.renderer.setElementStyle(l,"display","none");var t=n.tabRef._elementRef.nativeElement,e=n.queryElement(t,".scroll-content");n.mb=e.style["margin-bottom"],n.renderer.setElementStyle(e,"margin-bottom","0")}),this.event.subscribe("showTabs",function(){n.renderer.setElementStyle(l,"display","");var t=n.tabRef._elementRef.nativeElement,e=n.queryElement(t,".scroll-content");n.renderer.setElementStyle(e,"margin-bottom",n.mb)})},n.prototype.queryElement=function(n,l){return n.querySelector(l)},n.prototype.play=function(){this.sound.play("tabSwitch")},n}())},295:function(n,l,t){"use strict";function e(n){return r._14(0,[(n()(),r._15(0,null,null,1,"ion-icon",[["class","tab-button-icon"],["role","img"]],[[2,"hide",null]],null,null,null,null)),r._16(147456,null,0,c.a,[s.c,r.H,r.I],{name:[0,"name"],isActive:[1,"isActive"]},null)],function(n,l){var t=l.component;n(l,1,0,t.tab.tabIcon,t.tab.isSelected)},function(n,l){n(l,0,0,r._20(l,1)._hidden)})}function a(n){return r._14(0,[(n()(),r._15(0,null,null,1,"span",[["class","tab-button-text"]],null,null,null,null,null)),(n()(),r._17(null,["",""]))],null,function(n,l){n(l,1,0,l.component.tab.tabTitle)})}function o(n){return r._14(0,[(n()(),r._15(0,null,null,2,"ion-badge",[["class","tab-badge"]],null,null,null,null,null)),r._16(16384,null,0,_.a,[s.c,r.H,r.I],{color:[0,"color"]},null),(n()(),r._17(null,["",""]))],function(n,l){n(l,1,0,l.component.tab.tabBadgeStyle)},function(n,l){n(l,2,0,l.component.tab.tabBadge)})}function u(n){return r._14(0,[(n()(),r._23(16777216,null,null,1,null,e)),r._16(16384,null,0,b.m,[r.L,r.N],{ngIf:[0,"ngIf"]},null),(n()(),r._23(16777216,null,null,1,null,a)),r._16(16384,null,0,b.m,[r.L,r.N],{ngIf:[0,"ngIf"]},null),(n()(),r._23(16777216,null,null,1,null,o)),r._16(16384,null,0,b.m,[r.L,r.N],{ngIf:[0,"ngIf"]},null),(n()(),r._15(0,null,null,0,"div",[["class","button-effect"]],null,null,null,null,null))],function(n,l){var t=l.component;n(l,1,0,t.tab.tabIcon),n(l,3,0,t.tab.tabTitle),n(l,5,0,t.tab.tabBadge)},null)}function i(n){return r._14(0,[(n()(),r._15(0,null,null,1,"div",[["class","tab-button"]],[[1,"id",0],[1,"aria-controls",0],[1,"aria-selected",0],[2,"has-title",null],[2,"has-icon",null],[2,"has-title-only",null],[2,"icon-only",null],[2,"has-badge",null],[2,"disable-hover",null],[2,"tab-disabled",null],[2,"tab-hidden",null]],[[null,"click"]],function(n,l,t){var e=!0;if("click"===l){e=!1!==r._20(n,1).onClick()&&e}return e},u,h)),r._16(114688,null,0,d.a,[s.c,r.H,r.I],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,1,[r._20(l,1).tab._btnId,r._20(l,1).tab._tabId,r._20(l,1).tab.isSelected,r._20(l,1).hasTitle,r._20(l,1).hasIcon,r._20(l,1).hasTitleOnly,r._20(l,1).hasIconOnly,r._20(l,1).hasBadge,r._20(l,1).disHover,!r._20(l,1).tab.enabled,!r._20(l,1).tab.show])})}var r=t(0),c=t(31),s=t(1),_=t(123),b=t(16),d=t(132);t.d(l,"b",function(){return h}),l.a=u;var f=[],h=r._13({encapsulation:2,styles:f,data:{}});r._24(".tab-button",d.a,i,{color:"color",mode:"mode",tab:"tab"},{ionSelect:"ionSelect"},[])},296:function(n,l,t){"use strict";function e(n){return o._14(0,[o._22(402653184,1,{_vp:0}),(n()(),o._15(16777216,[[1,3],["viewport",1]],null,0,"div",[],null,null,null,null,null)),(n()(),o._15(0,null,null,0,"div",[["class","nav-decor"]],null,null,null,null,null))],null,null)}function a(n){return o._14(0,[(n()(),o._15(0,null,null,1,"ion-tab",[["role","tabpanel"]],[[1,"id",0],[1,"aria-labelledby",0]],null,null,e,m)),o._16(245760,null,0,u.a,[i.a,r.a,c.c,s.b,_.a,o.H,o.g,o.I,o.K,o.T,b.a,d.a,[2,f.b],h.a,o.p],null,null)],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,o._20(l,1)._tabId,o._20(l,1)._btnId)})}var o=t(0),u=t(133),i=t(71),r=t(7),c=t(1),s=t(3),_=t(17),b=t(6),d=t(23),f=t(14),h=t(9);t.d(l,"b",function(){return m}),l.a=e;var p=[],m=o._13({encapsulation:2,styles:p,data:{}});o._24("ion-tab",u.a,a,{color:"color",mode:"mode",swipeBackEnabled:"swipeBackEnabled",root:"root",rootParams:"rootParams",tabUrlPath:"tabUrlPath",tabTitle:"tabTitle",tabIcon:"tabIcon",tabBadge:"tabBadge",tabBadgeStyle:"tabBadgeStyle",enabled:"enabled",show:"show",tabsHideOnSubPages:"tabsHideOnSubPages"},{ionSelect:"ionSelect"},[])},297:function(n,l,t){"use strict";function e(n){return u._14(0,[(n()(),u._15(0,null,null,1,"a",[["class","tab-button"],["href","#"],["role","tab"]],[[1,"id",0],[1,"aria-controls",0],[1,"aria-selected",0],[2,"has-title",null],[2,"has-icon",null],[2,"has-title-only",null],[2,"icon-only",null],[2,"has-badge",null],[2,"disable-hover",null],[2,"tab-disabled",null],[2,"tab-hidden",null]],[[null,"ionSelect"],[null,"click"]],function(n,l,t){var e=!0,a=n.component;if("click"===l){e=!1!==u._20(n,1).onClick()&&e}if("ionSelect"===l){e=!1!==a.select(n.context.$implicit)&&e}return e},i.a,i.b)),u._16(114688,null,0,r.a,[c.c,u.H,u.I],{tab:[0,"tab"]},{ionSelect:"ionSelect"})],function(n,l){n(l,1,0,l.context.$implicit)},function(n,l){n(l,0,1,[u._20(l,1).tab._btnId,u._20(l,1).tab._tabId,u._20(l,1).tab.isSelected,u._20(l,1).hasTitle,u._20(l,1).hasIcon,u._20(l,1).hasTitleOnly,u._20(l,1).hasIconOnly,u._20(l,1).hasBadge,u._20(l,1).disHover,!u._20(l,1).tab.enabled,!u._20(l,1).tab.show])})}function a(n){return u._14(0,[u._22(402653184,1,{_highlight:0}),u._22(402653184,2,{_tabbar:0}),u._22(402653184,3,{portal:0}),(n()(),u._15(0,[[2,0],["tabbar",1]],null,4,"div",[["class","tabbar"],["role","tablist"]],null,null,null,null,null)),(n()(),u._23(16777216,null,null,1,null,e)),u._16(802816,null,0,s.k,[u.L,u.N,u.t],{ngForOf:[0,"ngForOf"]},null),(n()(),u._15(0,null,null,1,"div",[["class","tab-highlight"]],null,null,null,null,null)),u._16(16384,[[1,4]],0,_.a,[u.H,b.a],null,null),u._25(null,0),(n()(),u._15(16777216,[[3,3],["portal",1]],null,0,"div",[["tab-portal",""]],null,null,null,null,null))],function(n,l){n(l,5,0,l.component._tabs)},null)}function o(n){return u._14(0,[(n()(),u._15(0,null,null,2,"ion-tabs",[],null,null,null,a,v)),u._16(4374528,null,0,d.a,[[2,f.a],[2,h.a],p.a,c.c,u.H,m.b,u.I,g.b],null,null),u._26(6144,null,y.a,null,[d.a])],null,null)}var u=t(0),i=t(295),r=t(132),c=t(1),s=t(16),_=t(79),b=t(9),d=t(71),f=t(20),h=t(5),p=t(7),m=t(3),g=t(14),y=t(27);t.d(l,"b",function(){return v}),l.a=a;var I=[],v=u._13({encapsulation:2,styles:I,data:{}});u._24("ion-tabs",d.a,o,{color:"color",mode:"mode",selectedIndex:"selectedIndex",tabsLayout:"tabsLayout",tabsPlacement:"tabsPlacement",tabsHighlight:"tabsHighlight"},{ionChange:"ionChange"},["*"])},317:function(n,l,t){"use strict";t(0),t(44),t(288);t.d(l,"a",function(){return e});var e=(this&&this.__decorate,function(){function n(){}return n}())},318:function(n,l,t){"use strict";function e(n){return o._14(0,[o._22(402653184,1,{tabRef:0}),(n()(),o._15(0,null,null,19,"ion-content",[],[[2,"statusbar-padding",null]],null,null,u.a,u.b)),o._16(4374528,null,0,i.a,[r.c,c.b,s.a,o.H,o.I,_.a,b.a,o.g,[2,d.a],[2,f.a]],null,null),(n()(),o._17(1,["\n\t"])),(n()(),o._15(0,null,1,15,"ion-tabs",[],null,null,null,h.a,h.b)),o._16(4374528,[[1,4],["myTabs",4]],0,p.a,[[2,f.a],[2,d.a],_.a,r.c,o.H,c.b,o.I,m.b],null,null),o._26(6144,null,g.a,null,[p.a]),(n()(),o._17(0,["\n\t\t"])),(n()(),o._15(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","home"],["tabTitle","home"],["tabsHideOnSubPages","true"]],[[1,"id",0],[1,"aria-labelledby",0]],[[null,"ionSelect"]],function(n,l,t){var e=!0,a=n.component;if("ionSelect"===l){e=!1!==a.play()&&e}return e},I.a,I.b)),o._16(245760,null,0,v.a,[p.a,_.a,r.c,c.b,b.a,o.H,o.g,o.I,o.K,o.T,S.a,T.a,[2,m.b],s.a,o.p],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"],tabsHideOnSubPages:[3,"tabsHideOnSubPages"]},{ionSelect:"ionSelect"}),(n()(),o._17(0,["\n\t\t"])),(n()(),o._15(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","heart"],["tabTitle","favorit"],["tabsHideOnSubPages","true"]],[[1,"id",0],[1,"aria-labelledby",0]],[[null,"ionSelect"]],function(n,l,t){var e=!0,a=n.component;if("ionSelect"===l){e=!1!==a.play()&&e}return e},I.a,I.b)),o._16(245760,null,0,v.a,[p.a,_.a,r.c,c.b,b.a,o.H,o.g,o.I,o.K,o.T,S.a,T.a,[2,m.b],s.a,o.p],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"],tabsHideOnSubPages:[3,"tabsHideOnSubPages"]},{ionSelect:"ionSelect"}),(n()(),o._17(0,["\n\t\t"])),(n()(),o._15(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","swap"],["tabTitle","transakasi"]],[[1,"id",0],[1,"aria-labelledby",0]],[[null,"ionSelect"]],function(n,l,t){var e=!0,a=n.component;if("ionSelect"===l){e=!1!==a.play()&&e}return e},I.a,I.b)),o._16(245760,null,0,v.a,[p.a,_.a,r.c,c.b,b.a,o.H,o.g,o.I,o.K,o.T,S.a,T.a,[2,m.b],s.a,o.p],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},{ionSelect:"ionSelect"}),(n()(),o._17(0,["\n\t\t"])),(n()(),o._15(0,null,0,1,"ion-tab",[["role","tabpanel"],["tabIcon","contact"],["tabTitle","profil"]],[[1,"id",0],[1,"aria-labelledby",0]],[[null,"ionSelect"]],function(n,l,t){var e=!0,a=n.component;if("ionSelect"===l){e=!1!==a.play()&&e}return e},I.a,I.b)),o._16(245760,null,0,v.a,[p.a,_.a,r.c,c.b,b.a,o.H,o.g,o.I,o.K,o.T,S.a,T.a,[2,m.b],s.a,o.p],{root:[0,"root"],tabTitle:[1,"tabTitle"],tabIcon:[2,"tabIcon"]},{ionSelect:"ionSelect"}),(n()(),o._17(0,["\n\t"])),(n()(),o._17(1,["\n"])),(n()(),o._17(null,["\n"]))],function(n,l){var t=l.component;n(l,9,0,t.home,"home","home","true");n(l,12,0,t.favorit,"favorit","heart","true");n(l,15,0,t.transaksi,"transakasi","swap");n(l,18,0,t.profil,"profil","contact")},function(n,l){n(l,1,0,o._20(l,2).statusbarPadding),n(l,8,0,o._20(l,9)._tabId,o._20(l,9)._btnId),n(l,11,0,o._20(l,12)._tabId,o._20(l,12)._btnId),n(l,14,0,o._20(l,15)._tabId,o._20(l,15)._btnId),n(l,17,0,o._20(l,18)._tabId,o._20(l,18)._btnId)})}function a(n){return o._14(0,[(n()(),o._15(0,null,null,1,"page-tabs",[],null,null,null,e,L)),o._16(49152,null,0,y.a,[f.a,O.a,o.H,o.I,w.a,H.a,P.a],null,null)],null,null)}var o=t(0),u=t(266),i=t(43),r=t(1),c=t(3),s=t(9),_=t(7),b=t(17),d=t(5),f=t(20),h=t(297),p=t(71),m=t(14),g=t(27),y=t(288),I=t(296),v=t(133),S=t(6),T=t(23),O=t(11),w=t(75),H=t(46),P=t(125);t.d(l,"a",function(){return k});var E=[],L=o._13({encapsulation:2,styles:E,data:{}}),k=o._24("page-tabs",y.a,a,{},{},[])}});
//# sourceMappingURL=C:\xampp\htdocs\latihan\ionic2\ionicBlank\www\build\9.main.js.map