(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a(41)},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(9),l=a(20),c=a(21),r=a(27),m=a(26),i=a(0),u=a.n(i),s=a(22),o=a.n(s);a(33);var d=function(){return u.a.createElement("h1",{className:"header__item--title"},"\u30c4\u30a4\u30c3\u30bf\u30fc")},v=a(2);var E=function(e){var t=e.menuItems,a=e.onClick,n=e.selectedMenuItemId,l=Object(v.f)(),c=t.map((function(e){var t=e.id===n;return u.a.createElement("li",{className:"menu__item ".concat(t&&"menu__item--selected"),key:e.id},u.a.createElement("a",{onClick:function(){a(e.id),l.push(e.to)}},e.title))}));return u.a.createElement("div",{className:"menu"},u.a.createElement("ul",{className:"menu__container"},c))},p=a(13),f=a(24),h=a(25);var b=function(){return u.a.createElement("div",{className:"about"},u.a.createElement("p",null,"\u3053\u306e\u30b5\u30a4\u30c8\u306f\u5b8c\u5168\u306b\u30c4\u30a4\u30c3\u30bf\u30fc\u3067\u3059\u3002"),u.a.createElement("a",{href:"https://github.com/shutarou-iijima/react-sample"},u.a.createElement(f.a,{icon:h.a})))};var _=function(){return u.a.createElement("div",{className:"profile"},"profile")},w=a(17);var I=function(e){var t=e.onClick,a=Object(i.useState)(""),n=Object(w.a)(a,2),l=n[0],c=n[1],r=Object(i.useState)(0),m=Object(w.a)(r,2),s=m[0],o=m[1];return u.a.createElement("div",{className:"tweetarea"},u.a.createElement("div",null,s," / 140"),u.a.createElement("div",null,u.a.createElement("textarea",{className:"tweetarea__textarea",value:l,onChange:function(e){e.target.value.length>140||(o(e.target.value.length),c(e.target.value))},placeholder:"\u4f55\u3092\u545f\u304f\uff1f"})),u.a.createElement("div",null,u.a.createElement("button",{type:"button",className:"tweetarea__submit",onClick:function(){t(l),o(0),c("")}},"\u545f\u304f")))};var N=function(e){var t=e.name,a=e.value;return u.a.createElement("div",{className:"tweetcard"},u.a.createElement("div",{className:"tweetcard__name"},t),u.a.createElement("div",{className:"tweetcard__value"},a))};var j=function(e){var t=e.tweets,a=e.onClick,l=Object(n.a)(t).sort((function(e,t){return t.id-e.id})).map((function(e){return u.a.createElement(N,{name:e.name,value:e.value,key:e.id})}));return u.a.createElement("div",{className:"timeline"},u.a.createElement(I,{onClick:a}),u.a.createElement("div",{className:"tweetcard__container"},l))},k=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={menuItems:[{id:1,to:"/",title:"\u30bf\u30a4\u30e0\u30e9\u30a4\u30f3"},{id:2,to:"/profile",title:"\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb"},{id:3,to:"/about",title:"\u3053\u306e\u30b5\u30a4\u30c8\u306b\u3064\u3044\u3066"}],selectedMenuItemId:1,tweets:[{id:3,name:"\u592a\u90ce",value:"\u30e9\u30fc\u30e1\u30f3\u3068\u306f\u3001\u4e2d\u83ef\u9eba\u3068\u30b9\u30fc\u30d7\u3092\u4e3b\u3068\u3057\u3001\u69d8\u3005\u306a\u5177\uff08\u30c1\u30e3\u30fc\u30b7\u30e5\u30fc\u3001\u30e1\u30f3\u30de\u3001\u5473\u4ed8\u3051\u7389\u5b50\u3001\u523b\u307f\u8471\u3001\u6d77\u82d4\u306a\u3069\uff09\u3092\u7d44\u307f\u5408\u308f\u305b\u305f\u9eba\u6599\u7406\u3002\u6f22\u5b57\u8868\u8a18\u306f\u62c9\u9eba\u3001\u8001\u9eba[2]\u307e\u305f\u306f\u67f3\u9eba\u3002"},{id:2,name:"\u6b21\u90ce",value:"\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a\u3042\u3044\u3046\u3048\u304a"},{id:1,name:"\u4e09\u90ce",value:"\u30e9\u30fc\u30e1\u30f3\u98df\u3079\u305f\u3044"}]},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement(p.a,null,u.a.createElement("div",{className:"twitter"},u.a.createElement(d,null),u.a.createElement(E,{menuItems:this.state.menuItems,onClick:function(t){e.setState({selectedMenuItemId:t})},selectedMenuItemId:this.state.selectedMenuItemId}),u.a.createElement("main",null,u.a.createElement(v.c,null,u.a.createElement(v.a,{path:"/about"},u.a.createElement(b,null)),u.a.createElement(v.a,{path:"/profile"},u.a.createElement(_,null)),u.a.createElement(v.a,{path:"/"},u.a.createElement(j,{tweets:this.state.tweets,onClick:function(t){var a={id:Math.max.apply(Math,Object(n.a)(e.state.tweets.map((function(e){return e.id}))))+1,name:"\u540d\u7121\u3057\u306e\u6a29\u5175\u885b",value:t},l=Object(n.a)(e.state.tweets).concat(a);e.setState({tweets:l})}}))))))}}]),a}(u.a.Component);o.a.render(u.a.createElement(k,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.8831d1e8.chunk.js.map