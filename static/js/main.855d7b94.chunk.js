(this.webpackJsonpcomponents=this.webpackJsonpcomponents||[]).push([[0],{103:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(45),c=n.n(o),l=(n(103),n(7)),i=n(8),s=n(10),u=n(9),m=n(11),p=n(92),b=n.n(p),f={mergeClasses:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return b()(t)},mergeModifiers:function(e,t){if(!t)return e;var n=t instanceof Array?t.slice():[t],a=e;return n.forEach((function(n){"string"===typeof t&&(a+=" ".concat(e,"--").concat(n))})),a}},O=n(46),h=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onClickAction=function(e){console.log(n.props.onClick),e.preventDefault(),n.props.onClick(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.onClick,o=e.disabled,c=e.size,l=e.color,i=e.link,s=e.isBlock,u=e.text,m=f.mergeClasses(n,l&&"".concat(n,"-").concat(l),c&&"".concat(n,"-").concat(c),s&&"".concat(n,"-block"));return i?r.a.createElement(O.b,{to:i,className:m},u||t):r.a.createElement("button",{className:m,onClick:a&&this.onClickAction,disabled:o},u||t)}}]),t}(a.Component),d=n(6),j=n(94);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={login:!1,username:"",password:""},E=n(209),k=Object(d.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(console.log("reduser",t.payload),t.type){case"LOGIN":return v({},e,{},t.payload,{login:!0});case"LOGOUT":return v({},y);default:return e}},form:E.a}),w=function(e,t){return k(e,t)},N=Object(d.c)(w),C=N.dispatch,P=(N.getState,N),x=function(e){console.log("action",e),C({type:"LOGIN",payload:e})},S=function(){C({type:"LOGOUT"})},A=n(13),I=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.login;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h,{className:"nav-link",color:"primary",link:"/main"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h,{className:"nav-link",color:"primary",link:"/news"}," \u041d\u043e\u0432\u043e\u0441\u0442\u0438")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h,{className:"nav-link",color:"primary",link:"/about"}," \u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438")),r.a.createElement("li",{className:"nav-item ml-auto"},e&&r.a.createElement(h,{className:"btn",onClick:S,color:"light"}," \u0412\u044b\u0439\u0442\u0438"))))}}]),t}(a.Component),D=Object(A.b)((function(e){return{login:e.login.login}}))(I),L=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null))}}]),t}(a.Component),G=n(21),B=n(208),F=n(207),U=function(e){return function(t){function n(){return Object(l.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){return this.props.login?r.a.createElement(e,this.props):r.a.createElement(G.a,{to:"/main"})}}]),n}(a.Component)},J=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._onSubmit=function(e){x(e)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"\u0433\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"),r.a.createElement(M,{onSubmit:this._onSubmit}))}}]),t}(a.Component),M=Object(F.a)({form:"loginForm",destroyOnUnmount:!0})((function(e){return r.a.createElement("form",{className:"col-sm-10 col-md-5 col-12 col-xl-5",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Login"),r.a.createElement(B.a,{type:"text",component:"input",name:"username",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Login"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement(B.a,{component:"input",type:"password",name:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit"))})),T={loginAction:x},W=Object(A.b)((function(e){return{login:e.login.login,username:e.login.username,password:e.login.password}}),T)(J),_=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438")}}]),t}(a.Component),z=Object(A.b)((function(e){return{login:e.login.login}}))(U(_)),H=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438")}}]),t}(a.Component),$=Object(A.b)((function(e){return{login:e.login.login}}))(U(H)),q=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(A.a,{store:P},r.a.createElement(O.a,null,r.a.createElement(L,null),r.a.createElement("div",{className:"container pt-5"},r.a.createElement(G.d,null,r.a.createElement(G.b,{path:"/",exact:!0,component:W}),r.a.createElement(G.b,{path:"/main",component:W}),r.a.createElement(G.b,{path:"/about",component:z}),r.a.createElement(G.b,{path:"/news",component:$}),r.a.createElement(G.b,{render:function(){return r.a.createElement("h2",null,"\u041d\u0438\u0447\u0435\u0433\u043e")}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,n){e.exports=n(206)}},[[98,1,2]]]);
//# sourceMappingURL=main.855d7b94.chunk.js.map