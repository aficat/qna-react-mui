(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{198:function(e,t,n){e.exports=n(345)},203:function(e,t,n){},205:function(e,t,n){},345:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(16),i=n.n(o),c=(n(203),n(25)),l=n(26),u=n(28),s=n(27),m=n(29),d=(n(205),n(75)),b=n(43),h=n.n(b),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:""},n.handleChange=function(e){n.setState({name:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),h.a.post("https://5c710ac10eddba001435b5c0.mockapi.io/api/questions",n.state.name).then(function(e){console.log(e),console.log(e.data)})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d.b,{id:"outlined-multiline-static",label:"Post Your Question",multiline:!0,rows:"4",type:"text",name:"question",onChange:this.onChange,defaultValue:"Type your question here",margin:"normal",variant:"outlined"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(d.a,{className:"btn aqua-gradient btn-rounded my-0 js-scroll-trigger",onClick:this.handleSubmit},"Submit"))}}]),t}(a.Component),f=n(41),v=n.n(f),g=n(42),E=n.n(g),j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={questions:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://5c710ac10eddba001435b5c0.mockapi.io/api/questions").then(function(t){e.setState({questions:t.data})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,{item:!0,xs:12,md:6},r.a.createElement(E.a,{variant:"h6"},"Questions"),this.state.questions.map(function(e){return r.a.createElement("p",{align:"center"},e.question)})))}}]),t}(a.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",align:"center"},r.a.createElement("div",{className:"App-question"},r.a.createElement(p,null),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"App-listing",align:"center"},r.a.createElement(j,null),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[198,2,1]]]);
//# sourceMappingURL=main.b22cf659.chunk.js.map