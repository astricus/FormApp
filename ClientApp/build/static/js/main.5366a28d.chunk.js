(this["webpackJsonpmaterial-sign-in"]=this["webpackJsonpmaterial-sign-in"]||[]).push([[0],{112:function(e,a,t){e.exports=t(204)},204:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=t(40),i=t(38),u=t(24),s=t(51),m=t(52),d=t(59),f=t(23),g=t(249),b=t(251),h=t(252),p=t(94),v=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),E=function(){var e=v();return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{position:"relative"},r.a.createElement(b.a,null,r.a.createElement(h.a,{color:"inherit",component:o.b,to:"/"},"Home"),r.a.createElement(h.a,{color:"inherit",component:o.b,to:"/all-forms"},"All Forms"))))},j=t(270),O=t(258),k=t(205),y=t(257),w=t(99),C=t.n(w),S=t(100),x=t(254),F=t(255),N=t(266),q=t(256),I=t(271),R=t(269),W=t(267),A=t(272),D=t(268),B=t(17),L=t(11),V=t(44),G=t(13),M=t(47),P=t.n(M),T=t(32),H=t.n(T);function J(e){var a=e.name,t=e.validation,r=void 0===t?"":t,l=e.values,c=e.setValues,o=e.defaultInvalidAttr,i=e.handleError,u=H.a.pick(a,l)||"",s=Object(n.useState)(u),m=Object(G.a)(s,2),d=m[0],f=m[1],g=Object(n.useState)(!0),b=Object(G.a)(g,2),h=b[0],p=b[1],v=Object(n.useState)(!1),E=Object(G.a)(v,2),j=E[0],O=E[1],k=Object(n.useState)(!1),y=Object(G.a)(k,2),w=y[0],C=y[1],S=Object(n.useState)(r),x=Object(G.a)(S,1)[0],F=Object(n.useCallback)((function(){var e=function(e,a){var t,n=[];switch(typeof a){case"object":Object.keys(a).forEach((function(e){n.push({rule:e,options:a[e]})}));break;case"string":default:if(!a.length)return!0;t=a.replace(/ /g,""),t.split(",").forEach((function(e){n.push({rule:e})}))}var r=!0;return n.forEach((function(a){var t=a.rule,n=a.options,l=void 0===n?null:n;switch(t.trim()){case"isRequired":e||(r=!1);break;default:if(r){if(null!==l){var c;switch(l){case!0:c=P.a[t](e);break;case!1:c=!P.a[t](e);break;default:c=P.a[t](e,l)}r=c}else r=P.a[t](e);break}}})),r}(d,x);p(e),i(a,e)}),[p,x,a,d,i]);Object(n.useEffect)((function(){d!==u&&(f(u),O(!1),C(!1))}),[u,d,f,C,O]),Object(n.useEffect)((function(){F()}),[F,a]);var N=Object(n.useCallback)((function(e){var t,n=e.target,r=n.value,o=n.checked,i="checkbox"===n.type?o:r;a.includes(".")?(H.a.override=!0,t=H.a.str(a,i,Object(V.a)({},l))):t=Object(V.a)({},l,Object(L.a)({},a,i)),f(i),c(t)}),[f,l,c,a]),q=Object(n.useCallback)((function(){O(!0),C(!0),F()}),[O,C,F]),I=Object(n.useCallback)((function(){C(!1)}),[C]),R=!h&&j&&!w?o:null;return Object(V.a)({value:d,name:a,onChange:N,onFocus:q,onBlur:I},R)}function U(e){var a=e.name,t=e.value,r=e.values,l=e.setValues,c=H.a.pick(a,r)||[],o=c.indexOf(t)>-1,i=Object(n.useState)(o),u=Object(G.a)(i,2),s=u[0],m=u[1];Object(n.useEffect)((function(){var e=c.indexOf(t)>-1;m(e)}),[c,t]);var d=Object(n.useCallback)((function(e){var n,c,o=e.target,i=H.a.pick(a,r)||[],u=o.checked,s=i.indexOf(t);u&&s<0?n=[].concat(Object(B.a)(i),[t]):!u&&s>-1&&(n=i.filter((function(e){return e!==t}))),a.includes(".")?(H.a.override=!0,c=H.a.str(a,n,Object(V.a)({},r))):c=Object(V.a)({},r,Object(L.a)({},a,n)),m(u),l(c)}),[t,r,l,a]);return{name:a,checked:s,onChange:d}}var z=t(253),Y=function(){return r.a.createElement(S.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(z.a,{color:"inherit",href:"https://github.com/astricus/FormApp"},"FormApp")," ",(new Date).getFullYear(),".")},$=t(55),K=t.n($),Q=[{value:"St.Petersburg",label:"St.Petersburg"},{value:"Moscow",label:"Moscow"},{value:"Sochi",label:"Sochi"}],X=Object(p.a)((function(e){return{form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Z=function(){var e=Object(f.e)(),a=Q,t=X(),l=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{error:!0},t=Object(n.useState)(e),r=Object(G.a)(t,2),l=r[0],c=r[1],o=Object(n.useState)(!1),i=Object(G.a)(o,2),u=i[0],s=i[1],m=Object(n.useState)([]),d=Object(G.a)(m,2),f=d[0],g=d[1],b=Object(n.useCallback)((function(e,a){var t=f,n=t.findIndex((function(a){return a===e}));a?n>-1&&t.splice(n,1):n<0&&t.push(e),g(t)}),[f]);Object(n.useEffect)((function(){s(!0)}),[]);var h=function(e,t){return J({name:e,validation:t,values:l,setValues:c,defaultInvalidAttr:a,handleError:b})},p=function(e,a){return U({name:e,values:l,setValues:c,value:a})};return{values:l,setValues:c,useInput:h,useCheckboxGroup:p,errors:f,isValid:u&&!f.length}}({name:"",email:"",city:"",date:"",gender:""}),c=l.values,o=l.useInput,i=l.isValid;return r.a.createElement("form",{onSubmit:function(a){a.preventDefault(),K.a.post("api/Forms/AddForm",c).then((function(a){200===a.status?e.push("/all-forms"):console.log("Form was not submitted!")}))},className:t.form},r.a.createElement(N.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoComplete:"name",autoFocus:!0},o("name","isRequired"))),r.a.createElement(N.a,Object.assign({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-mail address",name:"email",autoComplete:"email"},o("email","isRequired, isEmail"))),r.a.createElement(N.a,Object.assign({id:"city",margin:"normal",required:!0,select:!0,label:"Select city",fullWidth:!0,name:"city",variant:"outlined"},o("city","isRequired")),a.map((function(e){return r.a.createElement(I.a,{key:e.value,value:e.value},e.label)}))),r.a.createElement(N.a,Object.assign({id:"date",name:"date",required:!0,margin:"normal",label:"Birthday",type:"date",fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0}},o("date","isRequired"))),r.a.createElement(x.a,{component:"fieldset",fullWidth:!0,margin:"normal",className:t.formControl},r.a.createElement(F.a,{component:"legend",required:!0},"Gender"),r.a.createElement(A.a,Object.assign({"aria-label":"gender",name:"gender"},o("gender","isRequired")),r.a.createElement(q.a,{value:"Male",control:r.a.createElement(D.a,{color:"primary"}),label:"Male"}),r.a.createElement(q.a,{value:"Female",control:r.a.createElement(D.a,{color:"primary"}),label:"Female"}))),r.a.createElement(q.a,{margin:"normal",control:r.a.createElement(R.a,Object.assign({color:"primary",name:"formControl"},o("formControl","isRequired"))),label:"I agree to submit the form"}),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,disabled:!i},"Submit form"),r.a.createElement(W.a,{mt:5},r.a.createElement(Y,null)))},_=Object(p.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/collection/1976082)",backgroundRepeat:"no-repeat",backgroundColor:"dark"===e.palette.type?e.palette.grey[900]:e.palette.grey[50],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main}}})),ee=function(){var e=_();return r.a.createElement(y.a,{container:!0,component:"main",className:e.root},r.a.createElement(O.a,null),r.a.createElement(y.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(y.a,{item:!0,xs:12,sm:8,md:5,component:k.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(j.a,{className:e.avatar},r.a.createElement(C.a,null)),r.a.createElement(S.a,{component:"h1",variant:"h5"},"Submit the form"),r.a.createElement(Z,null))))},ae=t(265),te=t(260),ne=t(264),re=t(263),le=t(259),ce=t(261),oe=t(262),ie=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){t.setState({searchfield:e.target.value})},t.state={forms:[],loading:!0,searchfield:""},t}return Object(d.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.populateFormsData()}},{key:"populateFormsData",value:function(){var e=this;K.a.get("api/Forms/GetForms").then((function(a){var t=a.data;e.setState({forms:t,loading:!1})}))}},{key:"renderFormsTable",value:function(e){return r.a.createElement(le.a,{component:k.a},r.a.createElement(te.a,{"aria-label":"simple table"},r.a.createElement(ce.a,null,r.a.createElement(oe.a,null,r.a.createElement(re.a,null,"Name"),r.a.createElement(re.a,{align:"right"},"E-mail"),r.a.createElement(re.a,{align:"right"},"City"),r.a.createElement(re.a,{align:"right"},"Date"),r.a.createElement(re.a,{align:"right"},"Gender"))),r.a.createElement(ne.a,null,e.map((function(e){return r.a.createElement(oe.a,{key:e.name},r.a.createElement(re.a,{component:"th",scope:"row"},e.name),r.a.createElement(re.a,{align:"right"},e.email),r.a.createElement(re.a,{align:"right"},e.city),r.a.createElement(re.a,{align:"right"},new Date(e.date).toLocaleDateString("ru-RU")),r.a.createElement(re.a,{align:"right"},e.gender))})))))}},{key:"render",value:function(){var e=this.state,a=e.forms,t=e.searchfield,n=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})),l=this.state.loading?r.a.createElement(S.a,{variant:"overline",align:"center",color:"textSecondary",paragraph:!0},"Loading..."):this.renderFormsTable(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null),r.a.createElement("div",null,r.a.createElement(ae.a,{maxWidth:"lg"},r.a.createElement(S.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"All Forms"),r.a.createElement(S.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Here you can see and filter all submitted forms"),r.a.createElement("div",null,r.a.createElement(y.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(y.a,{item:!0},r.a.createElement(N.a,{variant:"outlined",margin:"normal",id:"search",label:"search",name:"search",onChange:this.handleInputChange,autoFocus:!0})))),r.a.createElement("div",null,l))))}}]),a}(n.Component),ue=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement(f.a,{path:"/",exact:!0,component:ee}),r.a.createElement(f.a,{path:"/all-forms",component:ie}))}}]),a}(n.Component);ue.displayName=ue.name;var se=ue,me=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function de(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var fe=document.getElementsByTagName("base")[0].getAttribute("href"),ge=document.getElementById("root");c.a.render(r.a.createElement(o.a,{basename:fe},r.a.createElement(se,null)),ge),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");me?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):de(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):de(e)}))}}()}},[[112,1,2]]]);
//# sourceMappingURL=main.5366a28d.chunk.js.map