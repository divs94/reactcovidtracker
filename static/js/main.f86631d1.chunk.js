(this.webpackJsonplivecovidtracker=this.webpackJsonplivecovidtracker||[]).push([[0],{25:function(e,c,s){},27:function(e,c,s){},34:function(e,c,s){},35:function(e,c,s){"use strict";s.r(c);var t=s(1),a=s(19),n=s.n(a),r=(s(25),s(8)),d=s.n(r),i=s(11),j=s(12),l=(s(27),s(9)),h=(s(15),s(0)),b=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{className:"text-center",children:"\ud83d\udd34LIVE   "}),Object(h.jsxs)("h2",{children:["    Covid-19 Coronavirus ",Object(h.jsx)("br",{}),"Tracker",Object(h.jsxs)("span",{children:[" ",Object(h.jsx)(l.b,{className:"nav-link",to:"/statewise",children:"Check Statewise"})," "]})]})]})})},x=function(){var e=Object(t.useState)([]),c=Object(j.a)(e,2),s=c[0],a=c[1],n=function(){var e=Object(i.a)(d.a.mark((function e(){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.covid19india.org/data.json");case 3:return c=e.sent,e.next=6,c.json();case 6:s=e.sent,console.log(s.statewise[0]),a(s.statewise[0]),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){n()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("section",{children:[Object(h.jsx)(b,{}),Object(h.jsx)("hr",{}),Object(h.jsxs)("ul",{className:"card_back",children:[Object(h.jsx)("li",{id:"first",className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[Object(h.jsx)("span",{children:" our "}),"COUNTRY"]}),Object(h.jsx)("p",{className:"card_total card_small",children:"INDIA"})]})})}),Object(h.jsx)("li",{id:"second",className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[Object(h.jsx)("span",{children:" Total "}),"RECOVERED"]}),Object(h.jsx)("p",{className:"card_total card_small",children:s.recovered})]})})}),Object(h.jsx)("li",{id:"third",className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[Object(h.jsx)("span",{children:" Total "}),"CONFIRMED"]}),Object(h.jsx)("p",{className:"card_total card_small",children:s.confirmed})]})})}),Object(h.jsx)("li",{id:"fourth",className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[Object(h.jsx)("span",{children:" Total "}),"DEATH"]}),Object(h.jsx)("p",{className:"card_total card_small",children:s.deaths})]})})}),Object(h.jsx)("li",{id:"five",className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[Object(h.jsx)("span",{children:" Total "}),"ACTIVE"]}),Object(h.jsx)("p",{className:"card_total card_small",children:s.active})]})})}),Object(h.jsx)("li",{id:"six",className:"card",children:Object(h.jsx)("div",{className:"card_main",children:Object(h.jsxs)("div",{className:"card_inner",children:[Object(h.jsxs)("p",{className:"card_name",children:[Object(h.jsx)("span",{children:" Last "}),"UPDATED"]}),Object(h.jsx)("p",{id:"last",className:"card_total card_small",children:s.lastupdatedtime})]})})})]})]})})},O=s(2),o=(s(34),function(){var e=Object(t.useState)([]),c=Object(j.a)(e,2),s=c[0],a=c[1],n=function(){var e=Object(i.a)(d.a.mark((function e(){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19india.org/data.json");case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,a(s.statewise);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(t.useEffect)((function(){n()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid ",children:[Object(h.jsx)("div",{className:"main-heading",children:Object(h.jsxs)("h1",{children:[Object(h.jsx)("span",{children:"India"})," Covid-19 Dashboard"]})}),Object(h.jsx)("div",{className:"table-responsive",children:Object(h.jsxs)("table",{className:"table table-hover",children:[Object(h.jsx)("thead",{className:"thead-dark",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"State"}),Object(h.jsx)("th",{children:"confirmed"}),Object(h.jsx)("th",{children:"recovered"}),Object(h.jsx)("th",{children:"deaths"}),Object(h.jsx)("th",{children:"active"}),Object(h.jsx)("th",{children:"updated"})]})}),Object(h.jsx)("tbody",{className:"data_body",children:s.map((function(e,c){return Object(h.jsxs)("tr",{className:"table-row",children:[Object(h.jsx)("td",{children:e.state}),Object(h.jsx)("td",{children:e.confirmed}),Object(h.jsx)("td",{children:e.recovered}),Object(h.jsx)("td",{children:e.deaths}),Object(h.jsx)("td",{children:e.active}),Object(h.jsx)("td",{children:e.lastupdatedtime})]},c)}))})]})})]})})}),m=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(O.d,{children:[Object(h.jsx)(O.b,{exact:!0,path:"/",component:x}),Object(h.jsx)(O.b,{exact:!0,path:"/statewise",component:o}),Object(h.jsx)(O.a,{to:"/"})]})})};n.a.render(Object(h.jsx)(l.a,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.f86631d1.chunk.js.map