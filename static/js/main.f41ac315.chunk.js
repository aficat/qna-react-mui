(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{201:function(e,t,n){e.exports=n(352)},206:function(e,t,n){},208:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),c=(n(206),n(17)),l=n(18),u=n(22),s=n(20),m=n(23),p=(n(208),n(21)),d=n(9),h=n(36),b=n.n(h),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},n.handleChange=function(e){n.setState({name:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),b.a.post("https://5c2d8434b8051f0014cd478a.mockapi.io/question",{question:n.state.name}).then(function(e){})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{align:"center"},r.a.createElement(d.g,{container:!0,spacing:24,justify:"center",style:{maxWidth:800}},r.a.createElement(d.g,{item:!0,md:10},r.a.createElement(d.h,{id:"outlined-multiline-static",label:"Post Your Question Here",multiline:!0,rows:"4",type:"text",name:this.state.name,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!0,align:"left"})),r.a.createElement(d.g,{item:!0,md:2,style:{paddingTop:28}},r.a.createElement(d.b,{variant:"contained",color:"primary",onClick:this.handleSubmit,fullWidth:!0},"Submit")),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(a.Component),E=f=Object(p.a)(f),g=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={},n.routeToHome=function(){n.props.questionStore.updateCurrentPage("home")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{align:"center"},r.a.createElement(d.b,{variant:"outlined",color:"primary",onClick:this.routeToHome},"Back to Home"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(d.c,{style:{maxWidth:800,backgroundColor:"#BCE0FD"}},r.a.createElement(d.f,{avatar:null,action:null,title:"What is a question?",titleTypographyProps:{variant:"subtitle1"}})),r.a.createElement("br",null),r.a.createElement(d.g,{container:!0,spacing:24,justify:"center",style:{maxWidth:800}},r.a.createElement(d.g,{item:!0,md:10},r.a.createElement(d.h,{id:"outlined-multiline-static",label:"Post Your Answer Here",multiline:!0,rows:"4",type:"text",name:this.state.name,onChange:this.handleChange,margin:"normal",variant:"outlined",fullWidth:!0,align:"left"})),r.a.createElement(d.g,{item:!0,md:2,style:{paddingTop:28}},r.a.createElement(d.b,{variant:"contained",color:"primary",onClick:this.handleSubmit,fullWidth:!0},"Submit"))))}}]),t}(a.Component),y=g=Object(p.a)(g),j=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.questionStore;switch(e.keyResult){case"home":return r.a.createElement(E,{questionStore:e});case"question":return r.a.createElement(y,{questionStore:e});default:return}}}]),t}(a.Component),v=j=Object(p.a)(j),O=n(29),k=n.n(O),q=n(26),C=n.n(q),w=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[]},n.routeToHome=function(){n.props.questionStore.updateCurrentPage("home")},n.routeToQ=function(){n.props.questionStore.updateCurrentPage("question")},n.getQuestionsAPI=function(){b.a.get("https://5c2d8434b8051f0014cd478a.mockapi.io/question").then(function(e){n.setState({questions:e.data})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getQuestionsAPI()}},{key:"componentDidUpdate",value:function(){this.getQuestionsAPI()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h6",style:{paddingTop:18}},"List of Questions"),r.a.createElement("br",null),r.a.createElement(k.a,{container:!0,spacing:24,justify:"center",style:{maxWidth:1200}},this.state.questions.map(function(t){return r.a.createElement(k.a,{item:!0,md:3,key:t.id},r.a.createElement(d.c,null,r.a.createElement(d.f,{avatar:null,action:null,title:t.question,titleTypographyProps:{variant:"subtitle1"}}),r.a.createElement(d.e,{style:{borderTop:"#E1E1E1 solid 1px",align:"center"}},r.a.createElement(d.b,{size:"small",onClick:e.routeToQ},r.a.createElement(C.a,{variant:"caption"},"View Answers (",t.answers.length,")")),r.a.createElement(d.b,{size:"small",onClick:null},r.a.createElement(C.a,{variant:"caption"},"Delete Question")))))})))}}]),t}(a.Component),S=w=Object(p.a)(w),P=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[]},n.getQuestionsAPI=function(){b.a.get("https://5c2d8434b8051f0014cd478a.mockapi.io/question").then(function(e){n.setState({questions:e.data})})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getQuestionsAPI()}},{key:"componentDidUpdate",value:function(){this.getQuestionsAPI()}},{key:"render",value:function(){return r.a.createElement(k.a,{container:!0,spacing:24,justify:"center",style:{maxWidth:800,paddingTop:24}},this.state.questions.map(function(e){return r.a.createElement(k.a,{item:!0,md:12,key:e.id},r.a.createElement(d.c,null,r.a.createElement(d.f,{avatar:null,action:null,title:e.question,titleTypographyProps:{variant:"subtitle1"}}),r.a.createElement(d.d,{style:{borderTop:"#E1E1E1 solid 1px",align:"center"}},r.a.createElement(C.a,{variant:"caption",style:{padding:6}},"DELETE ANSWER"))))}))}}]),t}(a.Component),A=P=Object(p.a)(P),T=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.questionStore;switch(e.keyResult){case"home":return r.a.createElement(S,{questionStore:e});case"question":return r.a.createElement(A,{questionStore:e});default:return}}}]),t}(a.Component),W=T=Object(p.a)(T),Q=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{position:"static",color:"default",style:{alignItems:"center"}},r.a.createElement(d.i,{disableGutters:!0},r.a.createElement(d.j,{variant:"h5",color:"default",style:{paddingTop:18,paddingBottom:18}},"Q&A APPLICATION")))}}]),t}(a.Component),x=Q=Object(p.a)(Q),I=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.questionStore;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{questionStore:e}),r.a.createElement("div",{className:"App",align:"center"},r.a.createElement("div",{className:"App-question"},r.a.createElement("br",null),r.a.createElement(v,{questionStore:e}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"App-listing",align:"center"},r.a.createElement(W,{questionStore:e}),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),t}(a.Component),D=I=Object(p.a)(I);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(16),B=function(){function e(){var t=this;Object(c.a)(this,e),this.updateCurrentPage=function(e){t.currentPage.key=e},this.currentPage={key:"home"}}return Object(l.a)(e,[{key:"keyResult",get:function(){return this.currentPage.key}}]),e}();Object(H.h)(B,{currentPage:H.m,keyResult:H.e,updateCurrentPage:H.d});var N=new B;o.a.render(r.a.createElement(D,{questionStore:N}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[201,2,1]]]);
//# sourceMappingURL=main.f41ac315.chunk.js.map