(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,n){e.exports=n(351)},206:function(e,t,n){},208:function(e,t,n){},351:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=(n(206),n(18)),u=n(19),l=n(23),s=n(21),m=n(24),h=(n(208),n(22)),p=n(17),b=n(47),d=n.n(b),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},n.handleChange=function(e){n.setState({name:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),d.a.post("https://5c2d8434b8051f0014cd478a.mockapi.io/question",{question:n.state.name}).then(function(e){})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{align:"center"},r.a.createElement(p.f,{container:!0,spacing:24,justify:"center",style:{maxWidth:800}},r.a.createElement(p.f,{item:!0,md:10},r.a.createElement(p.g,{id:"outlined-multiline-static",label:"Post Your Question Here",multiline:!0,rows:"4",type:"text",name:this.state.name,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!0,align:"left"})),r.a.createElement(p.f,{item:!0,md:2,style:{paddingTop:28}},r.a.createElement(p.b,{className:"btn aqua-gradient btn-rounded my-0 js-scroll-trigger",onClick:this.handleSubmit,fullWidth:!0},"Submit")),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(a.Component),E=f=Object(h.a)(f),g=n(40),j=n.n(g),O=n(28),y=n.n(O),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[]},n.routeToHome=function(){n.props.questionStore.updateCurrentPage("home")},n.routeToQ=function(){n.props.questionStore.updateCurrentPage("question")},n.getQuestionsAPI=function(){d.a.get("http://5c2d8434b8051f0014cd478a.mockapi.io/question").then(function(e){n.setState({questions:e.data})})},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getQuestionsAPI()}},{key:"componentDidUpdate",value:function(){this.getQuestionsAPI()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(y.a,{variant:"h6"},"List of Questions"),r.a.createElement("br",null),r.a.createElement(j.a,{container:!0,spacing:24,justify:"center",style:{maxWidth:1200}},this.state.questions.map(function(t){return r.a.createElement(j.a,{item:!0,md:3,key:t.id},r.a.createElement(p.c,null,r.a.createElement(p.e,{avatar:null,action:null,title:t.question,titleTypographyProps:{variant:"subtitle1"}}),r.a.createElement(p.d,{style:{borderTop:"#E1E1E1 solid 1px",align:"center"}},r.a.createElement(p.b,{size:"small",onClick:e.routeToQ},r.a.createElement(y.a,{variant:"caption"},"View Answers (",t.answers.length,")")),r.a.createElement(p.b,{size:"small",onClick:null},r.a.createElement(y.a,{variant:"caption"},"Delete Question")))))})))}}]),t}(a.Component),k=v=Object(h.a)(v),q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.questionStore;switch(e.keyResult){case"home":return r.a.createElement(E,{questionStore:e});case"question":return r.a.createElement(k,{questionStore:e});default:return}}}]),t}(a.Component),w=q=Object(h.a)(q),S=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.questionStore;switch(e.keyResult){case"home":return r.a.createElement(k,{questionStore:e});case"question":return r.a.createElement(w,{questionStore:e});default:return}}}]),t}(a.Component),C=S=Object(h.a)(S),P=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{position:"static",color:"default",style:{alignItems:"center"}},r.a.createElement(p.h,{disableGutters:!0},r.a.createElement(p.i,{variant:"h5",color:"default",style:{paddingBottom:24}},"Q&A APPLICATION")))}}]),t}(a.Component),A=P=Object(h.a)(P),Q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.questionStore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{questionStore:e}),r.a.createElement("div",{className:"App",align:"center"},r.a.createElement("div",{className:"App-question"},r.a.createElement("br",null),r.a.createElement(w,{questionStore:e}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"App-listing",align:"center"},r.a.createElement(C,{questionStore:e}),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),t}(a.Component),I=Q=Object(h.a)(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T=n(15),W=function(){function e(){var t=this;Object(c.a)(this,e),this.updateCurrentPage=function(e){t.currentPage.key=e},this.currentPage={key:"home"}}return Object(u.a)(e,[{key:"keyResult",get:function(){return this.currentPage.key}}]),e}();Object(T.h)(W,{currentPage:T.m,keyResult:T.e,updateCurrentPage:T.d});var x=new W;o.a.render(r.a.createElement(I,{questionStore:x}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[201,2,1]]]);
//# sourceMappingURL=main.610b17b7.chunk.js.map