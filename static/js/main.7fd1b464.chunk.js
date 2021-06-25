(this["webpackJsonpmaterial-ui-palette-generator"]=this["webpackJsonpmaterial-ui-palette-generator"]||[]).push([[0],{296:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),i=n.n(r),c=n(131),s=n(14),o=n(151),l="SET_READY",u="SET_LOADING",d="SET_HEX_VALUE",h="SET_LOCK",b="SET_HISTORY",j="SET_TOAST",p="SET_COLOR_PICKER",O="SET_MENU",x="SET_TEXT_VISIBLE",y="SET_UNDO_STEPS",f="SET_UNDO_ENABLED",m="SET_ABOUT",v={ready:!1,loading:!0,hexValues:{primary:"#000000",secondary:"#FFFFFF"},locks:{primary:!1,secondary:!1},colorPicker:{open:!1,variant:""},history:[],undoEnabled:!0,undoSteps:0,toast:{open:!1,msg:"",severity:"success"},menu:{visible:!1,timerId:null},textVisible:!0,about:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload,r=Object.assign({},e);switch(n){case l:r.ready=a;break;case u:r.loading=a;break;case d:r.hexValues[a.variant]=a.hex;break;case h:r.locks[a.variant]=a.locked;break;case b:r.history=a;break;case j:r.toast=a;break;case p:r.colorPicker=a;break;case O:r.menu=a;break;case x:r.textVisible=a;break;case y:r.undoSteps=a;break;case f:r.undoEnabled=a;break;case m:r.about=a}return r},k=Object(o.a)(g),E=n(344),S=function(e){return{type:u,payload:e}},w=function(e){return{type:h,payload:e}},V=function(e){return{type:b,payload:e}},T=function(e){return{type:j,payload:e}},C=function(e){return{type:p,payload:e}},I=function(e){return{type:O,payload:e}},_=function(e){return{type:y,payload:e}},U=function(e){return{type:f,payload:e}},M=function(e){return{type:m,payload:e}},P=n(319),A=n(345),R=n(322),D=n(154),F=n(323),L=n(324),B=n(325),H=n(326),N=n(138),Y=n.n(N),G=n(3),z=Object(s.b)((function(e){return{isOpen:e.about}}))((function(e){var t=e.dispatch,n=e.isOpen,a=function(){t(M(!1))};return Object(G.jsx)(P.a,{children:Object(G.jsxs)(A.a,{open:n,fullWidth:!0,onClose:a,children:[Object(G.jsxs)(R.a,{disableTypography:!0,style:{textAlign:"center"},children:[Object(G.jsx)("img",{src:"./logo.png",alt:"Material-UI logo",style:{width:50,marginRight:15}}),Object(G.jsx)(D.a,{variant:"h4",children:"Material-UI Palette Picker"})]}),Object(G.jsxs)(F.a,{style:{textAlign:"center"},children:[Object(G.jsx)(Y.a,{src:"./biog.jpg",placeholder:"./biog-tiny.jpg",children:function(e){return Object(G.jsx)("img",{src:e,alt:"David with a dog",style:{borderRadius:"50%"}})}}),Object(G.jsx)(D.a,{paragraph:!0,children:"Hi! My name's Dave. Thanks for checking out my little app. If you enjoy using it, please consider giving me some love/stars on GitHub."}),Object(G.jsxs)(D.a,{children:["If you have any comments or suggestions, please feel free to"," ",Object(G.jsx)(L.a,{href:"mailto:dandrewsuk82@gmail.com",children:"email me"}),"."]})]}),Object(G.jsx)(B.a,{children:Object(G.jsx)(H.a,{onClick:a,children:"Close"})})]})})})),J=n(321),K=n(327),X=n(328),W=n(329),q=n(330),Q=n.n(q),Z=n(331),$=n.n(Z),ee=n(332),te=n.n(ee),ne=n(333),ae=n.n(ne),re=n(334),ie=n.n(re),ce=n(335),se=n.n(ce),oe=n(69),le=n(139),ue=n(140),de=n(141),he=function(){function e(t){Object(le.a)(this,e),this.currentState=Object.assign({},k.getState()),this.variants=["primary","secondary"],this.random=!0,this.hexValues=this.currentState.hexValues,t&&(this.random=!1,this.variants=[],Object.assign(this,t)),this._init()}return Object(ue.a)(e,[{key:"_init",value:function(){var e=this;if(k.dispatch(S(!0)),this.disableUndo&&k.dispatch(U(!1)),this.random){this.variants=this.variants.filter((function(t){return!e.currentState.locks[t]}));var t,n=Object(oe.a)(this.variants);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.hexValues[a]=this.getRandomColor()}}catch(s){n.e(s)}finally{n.f()}}else{var r,i=Object(oe.a)(this.update);try{for(i.s();!(r=i.n()).done;){var c=r.value;this.variants.push(c.variant),this.hexValues[c.variant]=c.hex,c.hasOwnProperty("lock")&&k.dispatch(w({variant:c.variant,locked:c.lock}))}}catch(s){i.e(s)}finally{i.f()}}}},{key:"getRandomColor",value:function(){var e=function(){return Math.floor(255*Math.random())};return"#".concat(Object(de.a)("rgb(".concat(e(),", ").concat(e(),", ").concat(e(),")")))}},{key:"commit",value:function(){var e,t,n=Object(oe.a)(this.variants);try{for(n.s();!(e=n.n()).done;){var a=e.value;k.dispatch((t={variant:a,hex:this.hexValues[a]},{type:d,payload:t}))}}catch(r){n.e(r)}finally{n.f()}k.dispatch(S(!1)),this.disableUndo&&k.dispatch(U(!0))}}]),e}(),be=Object(s.b)((function(e){return{show:e.menu.visible,timerId:e.menu.timerId,textVisible:e.textVisible,history:e.history,undoSteps:e.undoSteps,hexValues:e.hexValues,locks:e.locks}}))((function(e){var t=e.dispatch,n=e.show,a=e.timerId,r=e.textVisible,i=e.history,c=e.undoSteps,s=e.hexValues,o=e.locks,l=function(e){switch(document.activeElement.blur(),e){case"undo":var n=i[i.length-1-c-1];t(_(c+1)),new he({update:[{variant:"primary",hex:n.primary},{variant:"secondary",hex:n.secondary}],disableUndo:!0}).commit();break;case"redo":var a=i[i.length-1-c+1];t(_(c-1)),new he({update:[{variant:"primary",hex:a.primary},{variant:"secondary",hex:a.secondary}],disableUndo:!0}).commit();break;case"textVisible":t({type:x,payload:!r});break;case"swap":new he({update:[{variant:"primary",hex:s.secondary,lock:o.secondary},{variant:"secondary",hex:s.primary,lock:o.primary}],disableUndo:!0}).commit();break;case"about":t(M(!0))}};return Object(G.jsx)(J.a,{in:n,children:Object(G.jsx)(K.a,{color:"default",style:{position:"fixed",top:"50%",transform:"translateY(-50%)"},onMouseOver:function(){clearTimeout(a)},onMouseOut:function(){t(I({visible:!0,timerId:setTimeout((function(){t(I({visible:!1,timerId:null}))}),1e3)}))},children:Object(G.jsxs)(X.a,{variant:"dense",children:[Object(G.jsx)("img",{src:"logo.png",alt:"material logo",width:"50",style:{marginRight:20}}),Object(G.jsx)(D.a,{variant:"h5",children:"Material-UI Palette Picker"}),Object(G.jsx)(E.a,{flexGrow:1}),Object(G.jsx)(W.a,{disabled:i.length-c<2,onClick:function(){return l("undo")},children:Object(G.jsx)(Q.a,{})}),Object(G.jsx)(W.a,{disabled:0===c,onClick:function(){return l("redo")},children:Object(G.jsx)($.a,{})}),Object(G.jsx)(W.a,{onClick:function(){return l("textVisible")},children:r?Object(G.jsx)(te.a,{}):Object(G.jsx)(ae.a,{})}),Object(G.jsx)(W.a,{onClick:function(){return l("swap")},children:Object(G.jsx)(ie.a,{})}),Object(G.jsx)(W.a,{onClick:function(){return l("about")},children:Object(G.jsx)(se.a,{})})]})})})})),je=n(150),pe=n(149),Oe=n(336),xe=n(337),ye=Object(s.b)((function(e){return{primary:e.hexValues.primary,secondary:e.hexValues.secondary,loading:e.loading,history:e.history,undoEnabled:e.undoEnabled,undoSteps:e.undoSteps}}))((function(e){var t=e.dispatch,n=e.loading,r=e.primary,i=e.secondary,c=e.history,s=e.undoEnabled,o=e.undoSteps,l=e.children,u=Object(pe.a)({palette:{primary:{main:r},secondary:{main:i}},typography:{fontFamily:"Inter"}});return Object(a.useEffect)((function(){if(!n&&s)if(0!==o){var e=c.slice(0,-Math.abs(o));e.push({primary:r,secondary:i}),t(V(e)),t(_(0))}else t(V([].concat(Object(je.a)(c),[{primary:r,secondary:i}])))}),[n]),Object(G.jsxs)(Oe.a,{theme:u,children:[Object(G.jsx)(xe.a,{}),l]})})),fe=n(29),me=n(347),ve=n(346),ge=Object(s.b)((function(e){return{open:e.toast.open,msg:e.toast.msg,severity:e.toast.severity,toast:e.toast}}))((function(e){var t=e.dispatch,n=e.open,a=e.msg,r=e.severity,i=e.toast;return Object(G.jsx)(me.a,{open:n,autoHideDuration:2e3,onClose:function(){return t(T(Object(fe.a)(Object(fe.a)({},i),{},{open:!1})))},children:Object(G.jsx)(ve.a,{variant:"filled",severity:r,children:a})})})),ke=n(92),Ee=n.n(ke),Se=n(142),we=n(35),Ve=n(66),Te=n(342),Ce=n(143),Ie=n.n(Ce),_e=n(338),Ue=n.n(_e),Me=n(339),Pe=n.n(Me),Ae=n(340),Re=n.n(Ae),De=n(341),Fe=n.n(De),Le=Object(s.b)((function(e,t){return{lock:e.locks[t.variant],hex:e.hexValues[t.variant]}}))((function(e){var t=e.variant,n=e.dispatch,a=e.lock,r=e.hex,i=function(e){switch(document.activeElement.blur(),e){case"lock":n(w({variant:t,locked:!a}));break;case"copy":navigator.clipboard?(navigator.clipboard.writeText(r),n(T({open:!0,msg:"Successfully copied ".concat(r.toUpperCase()," to the clipboard"),severity:"success"}))):n(T({open:!0,msg:"Sorry. Your browser is not compatible with this feature",severity:"error"}));break;case"colorpicker":n(C({open:!0,variant:t}))}};return Object(G.jsxs)(E.a,{align:"center",children:[Object(G.jsx)(W.a,{color:"inherit",onClick:function(){return i("lock")},children:a?Object(G.jsx)(Ue.a,{}):Object(G.jsx)(Pe.a,{})}),Object(G.jsx)(W.a,{color:"inherit",onClick:function(){return i("copy")},children:Object(G.jsx)(Re.a,{})}),Object(G.jsx)(W.a,{color:"inherit",disabled:a,onClick:function(){return i("colorpicker")},children:Object(G.jsx)(Fe.a,{})})]})})),Be={transition:"all .2s"},He=Object(s.b)((function(e){return{textVisible:e.textVisible}}))((function(e){var t=e.variant,n=e.textVisible,r=Object(Ve.a)(),i=Object(a.useState)(""),c=Object(we.a)(i,2),s=c[0],o=c[1],l=Object(a.useState)(!0),u=Object(we.a)(l,2),d=u[0],h=u[1],b=r.palette[t];return Object(a.useEffect)((function(){h(!0),function(){var e=Object(Se.a)(Ee.a.mark((function e(){var t,n;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ie.a.get("https://api.color.pizza/v1/".concat(b.main.substr(1)));case 2:t=e.sent,n=t.data,o(n.colors[0].name),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[b.main]),Object(G.jsxs)(E.a,{height:"50%",width:"100%",position:"relative",children:[Object(G.jsxs)(Te.a,{container:!0,style:{width:"100%",height:"100%"},children:[Object(G.jsx)(Te.a,{item:!0,xs:2,children:Object(G.jsx)(E.a,{height:"100%",width:"100%",bgcolor:"".concat(t,".dark"),style:Be})}),Object(G.jsx)(Te.a,{item:!0,xs:8,children:Object(G.jsx)(E.a,{height:"100%",width:"100%",bgcolor:"".concat(t,".main"),style:Be})}),Object(G.jsx)(Te.a,{item:!0,xs:2,children:Object(G.jsx)(E.a,{height:"100%",width:"100%",bgcolor:"".concat(t,".light"),style:Be})})]}),Object(G.jsxs)(E.a,{position:"absolute",align:"center",color:b.contrastText,style:{top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(G.jsx)(J.a,{in:n,unmountOnExit:!0,children:Object(G.jsx)(D.a,{children:b.main.toUpperCase()})}),Object(G.jsx)(J.a,{in:!d&&n,unmountOnExit:!0,children:Object(G.jsx)(D.a,{variant:"overline",children:s})}),Object(G.jsx)(Le,{variant:t})]})]})})),Ne=function(){return Object(G.jsxs)(E.a,{height:"100vh",width:"100%",children:[Object(G.jsx)(He,{variant:"primary"}),Object(G.jsx)(He,{variant:"secondary"})]})},Ye=n(148),Ge=Object(s.b)((function(e){return{hexValues:e.hexValues,colorPicker:e.colorPicker}}))((function(e){var t=e.dispatch,n=e.hexValues,r=e.colorPicker,i=r.open,c=r.variant,s=Object(a.useState)(n[c]),o=Object(we.a)(s,2),l=o[0],u=o[1],d=function(e){switch(e){case"cancel":t(C(Object(fe.a)(Object(fe.a)({},r),{},{open:!1})));break;case"confirm":new he({update:[{variant:c,hex:l}]}).commit(),t(C(Object(fe.a)(Object(fe.a)({},r),{},{open:!1})))}};return Object(a.useEffect)((function(){u(n[c])}),[i]),Object(G.jsx)(P.a,{children:Object(G.jsx)(A.a,{open:i,hideBackdrop:!0,onClose:function(){return d("cancel")},children:Object(G.jsx)(Ye.a,{color:l,header:"Choose ".concat(c," color"),onChangeComplete:function(e){return u(e.hex)},onAccept:function(){return d("confirm")},onCancel:function(){return d("cancel")}})})})}));var ze=Object(s.b)((function(e){return{timerId:e.menu.timerId}}))((function(e){var t=e.dispatch,n=e.timerId,r=function(){(new he).commit()};return Object(a.useEffect)((function(){document.addEventListener("keypress",(function(e){32===e.charCode&&r()})),r()}),[]),Object(G.jsxs)(ye,{children:[Object(G.jsx)(Ge,{}),Object(G.jsx)(z,{}),Object(G.jsx)(be,{}),Object(G.jsx)(E.a,{onMouseMove:function(){n&&clearTimeout(n),t(I({visible:!0,timerId:setTimeout((function(){t(I({visible:!1,timerId:null}))}),1e3)}))},children:Object(G.jsx)(Ne,{})}),Object(G.jsx)(ge,{})]})}));i.a.render(Object(G.jsxs)(G.Fragment,{children:[Object(G.jsxs)(c.a,{children:[Object(G.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),Object(G.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:!0}),Object(G.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter&display=swap",rel:"stylesheet"})]}),Object(G.jsx)(s.a,{store:k,children:Object(G.jsx)(ze,{})})]}),document.getElementById("root"))}},[[296,1,2]]]);
//# sourceMappingURL=main.7fd1b464.chunk.js.map