(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{33:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(22),r=c(6),a=c(2),s=(c(31),c(32),c(0)),i=c.n(s),o=(c(33),c(10)),j=c.n(o),l=c(3),d=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},b=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(r.c,{to:"/",className:d,children:"Home"}),Object(l.jsx)(r.c,{to:"/people",className:d,children:"People"})]})})})},h=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(b,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(a.b,{})})})]})},O=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},x=c(4);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(e){return e.NoError="",e.LoadError="Unable to load people",e}({}),m=i.a.createContext({peopleList:[],isLoading:!1,errorMessage:""}),f=function(e){var t=e.children,c=Object(s.useState)([]),n=Object(x.a)(c,2),r=n[0],a=n[1],i=Object(s.useState)(!1),o=Object(x.a)(i,2),j=o[0],d=o[1],b=Object(s.useState)(p.NoError),h=Object(x.a)(b,2),O=h[0],f=h[1],g=Object(s.useEffect)((function(){d(!0),u().then(a).catch((function(){f(p.LoadError)})).finally((function(){d(!1)}))}),[]),v=Object(s.useMemo)((function(){return{peopleList:r,isLoading:j,errorMessage:O,loadPeople:g}}),[r,j,O]);return Object(l.jsx)(m.Provider,{value:v,children:t})},g=(c(35),function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})}),v=function(e){var t=e.person;return Object(l.jsx)(r.b,{className:j()({"has-text-danger":"f"===t.sex}),to:"/people/".concat(t.slug),children:t.name})},N=function(){var e=Object(s.useContext)(m),t=e.peopleList,c=e.isLoading,n=e.errorMessage,r=!t.length||n||c,i=Object(a.r)().peopleSlug;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),r&&Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[c&&Object(l.jsx)(g,{}),n===p.LoadError&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!t.length&&!c&&Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})}),!!t.length&&Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){var c=t.find((function(t){return t.name===e.motherName})),n=t.find((function(t){return t.name===e.fatherName}));return Object(l.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":i===e.slug}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(v,{person:e})}),Object(l.jsx)("td",{children:e.sex}),Object(l.jsx)("td",{children:e.born}),Object(l.jsx)("td",{children:e.died}),Object(l.jsx)("td",{children:c?Object(l.jsx)(v,{person:c}):e.motherName||"-"}),Object(l.jsx)("td",{children:n?Object(l.jsx)(v,{person:n}):e.fatherName||"-"})]},e.slug)}))})]})]})},y=function(){return Object(l.jsx)("h1",{className:"title",children:"Page not found"})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(f,{children:Object(l.jsx)(r.a,{children:Object(l.jsx)(a.e,{children:Object(l.jsxs)(a.c,{path:"/",element:Object(l.jsx)(h,{}),children:[Object(l.jsx)(a.c,{index:!0,element:Object(l.jsx)(O,{})}),Object(l.jsx)(a.c,{path:"home",element:Object(l.jsx)(a.a,{to:"/",replace:!0})}),Object(l.jsx)(a.c,{path:"people/:peopleSlug?",element:Object(l.jsx)(N,{})}),Object(l.jsx)(a.c,{path:"*",element:Object(l.jsx)(y,{})})]})})})}))}},[[36,1,2]]]);
//# sourceMappingURL=main.6ef75811.chunk.js.map