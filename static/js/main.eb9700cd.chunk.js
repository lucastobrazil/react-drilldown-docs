(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(30)},21:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),o=a.n(r),c=(a(21),a(3)),m=a(4),i=a(6),u=a(5),s=a(7);a(22);function f(){return l.a.createElement("header",{className:"Header"},l.a.createElement("div",{className:"Header-inner"},l.a.createElement("h1",null,"React Drilldown"),l.a.createElement("h2",null,"An iOS-style data-driven Drilldown Menu for React.")),l.a.createElement("div",{className:"Header-subheader"},l.a.createElement("div",{className:"Header-inner"},l.a.createElement("a",{href:"https://github.com/lucastobrazil/react-drilldown"},"Code and Docs on GitHub"),l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=lucastobrazil&repo=react-drilldown&type=star&count=true&size=large",frameBorder:"0",scrolling:"0",width:"160px",height:"30px",title:"Star Me!"}))))}var d=a(15),h=a(1),p=a(11),g=(a(29),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).toggleStaggered=function(){var t=e.state.staggered;e.setState({staggered:!t})},e.onSelect=function(t){return e.setState({selected:t})},e.state={staggered:!0,selected:"gender"},e.sampleData=Object(p.keyBy)("name",[{name:"gender",title:"Choose a gender",parent:null,children:["male","female"]},{name:"male",title:"Male Occasions",parent:"gender",children:["maleCasual","maleFormal","maleOutdoor"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("male")}},"Male")}},{name:"female",title:"Female Occasions",parent:"gender",children:["femaleCasual","femaleFormal","femaleOutdoor"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("female")}},"Female")}},{name:"maleCasual",title:"Male Casual Wear",parent:"male",children:["maleCasualShirts","maleCasualPants","maleCasualHats"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("maleCasual")}},"Male Casual")}},{name:"maleCasualShirts",title:null,parent:"maleCasual",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Shirts")}},{name:"maleCasualPants",title:null,parent:"maleCasual",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Pants")}},{name:"maleCasualHats",title:null,parent:"maleCasual",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Hats")}},{name:"maleFormal",title:"Male Formal Wear",parent:"male",children:["maleFormalSuits","maleFormalShoes","maleFormalTies"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("maleFormal")}},"Male Formal")}},{name:"maleFormalSuits",title:null,parent:"maleFormal",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Suits")}},{name:"maleFormalShoes",title:null,parent:"maleFormal",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Shoes")}},{name:"maleFormalTies",title:null,parent:"maleFormal",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Ties")}},{name:"maleOutdoor",title:"Male Outdoor Wear",parent:"male",children:["maleOutdoorBoots"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("maleOutdoor")}},"Male Outdoor")}},{name:"maleOutdoorBoots",title:null,parent:"maleOutdoor",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Boots")}},{name:"femaleCasual",title:"Female Casual Wear",parent:"female",children:["femaleCasualSkirts","femaleCasualDresses","femaleCasualBags"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("femaleCasual")}},"Female Casual")}},{name:"femaleCasualSkirts",title:null,parent:"femaleCasual",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Skirts")}},{name:"femaleCasualDresses",title:null,parent:"femaleCasual",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Dresses")}},{name:"femaleCasualBags",title:null,parent:"femaleCasual",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Bags")}},{name:"femaleFormal",title:"Female Formal Wear",parent:"female",children:["femaleFormalDresses","femaleFormalShoes"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("femaleFormal")}},"Feale Formal")}},{name:"femaleFormalDresses",title:null,parent:"femaleFormal",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Dresses")}},{name:"femaleFormalShoes",title:null,parent:"femaleFormal",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Shoes")}},{name:"femaleOutdoor",title:"Female Outdoor Wear",parent:"female",children:["femaleOutdoorBoots","femaleOutdoorClothing"],component:function(){return l.a.createElement(h.b,{onClick:function(){return e.onSelect("femaleOutdoor")}},"Female Outdoor")}},{name:"femaleOutdoorBoots",title:null,parent:"femaleOutdoor",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Boots")}},{name:"femaleOutdoorClothing",title:null,parent:"femaleOutdoor",children:[],component:function(){return l.a.createElement(h.c,{href:"#"},"Clothing")}}]),e.items=Object(p.mapValues)(function(t){return Object(d.a)({},t,{children:t.children.map(function(t){return e.sampleData[t].component})})},e.sampleData),e}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.selected,n=t.staggered,r=this.items[a].children,o=this.items[a].title,c=this.items[a].parent;return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",checked:this.state.staggered,onChange:this.toggleStaggered}),"Staggered Animation")),l.a.createElement("div",{className:"Example-container"},l.a.createElement(h.a,{header:o,footer:"".concat(r.length," items"),items:r,staggeredAnimation:n,onBackClick:c?function(){return e.onSelect(c)}:null})))}}]),t}(n.Component)),C=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(g,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.eb9700cd.chunk.js.map