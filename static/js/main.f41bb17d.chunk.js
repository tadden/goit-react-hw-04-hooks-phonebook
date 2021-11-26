(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"Container_container__2JIsw"}},18:function(t,e,n){},19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(18),n(13)),i=n(2),u=(n(19),n(11)),l=n.n(u),b=n(0);var m=function(t){var e=t.children;return Object(b.jsx)("div",{className:l.a.container,children:e})},j=n(3),d=n.n(j);function f(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],m=u[1],j=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":o(a);break;case"number":m(a)}},f=function(){o(""),m("")};return Object(b.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:l}),f()},children:[Object(b.jsxs)("label",{className:d.a.label,children:["Name",Object(b.jsx)("input",{className:d.a.input,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:j})]}),Object(b.jsxs)("label",{children:["Number",Object(b.jsx)("input",{className:d.a.input,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:j})]}),Object(b.jsx)("button",{className:d.a.button,type:"submit",children:"Add contact"})]})}var h=n(4),_=n.n(h),p=function(t){var e=t.contacts,n=t.deleteContact;return Object(b.jsx)("ul",{className:_.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsxs)("li",{className:_.a.item,children:[Object(b.jsx)("p",{className:_.a.name,children:a}),Object(b.jsx)("p",{className:_.a.number,children:c}),Object(b.jsx)("button",{className:_.a.button,type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},O=n(9),x=n.n(O);var v=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{children:[Object(b.jsx)("span",{className:x.a.span,children:"Find contacts by name"}),Object(b.jsx)("input",{className:x.a.input,type:"text",name:"filter",value:e,onChange:n})]})},C=n(12),N=n.n(C);function g(){var t=Object(a.useState)((function(){return function(){var t;return null!==(t=JSON.parse(localStorage.getItem("contacts")))&&void 0!==t?t:[]}()})),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],l=o[1];Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=function(){var t=u.toLowerCase().trim();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(b.jsxs)(m,{children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:function(t){var e=t.name,a=t.number,r={id:N.a.generate(),name:e,number:a};n.find((function(t){return t.name.toLowerCase()===r.name.toLowerCase()}))||n.find((function(t){return t.number===r.number}))?alert("".concat(r.name," contact is already exists!")):c((function(t){return[].concat(Object(s.a)(t),[r])}))}}),Object(b.jsx)(v,{value:u,onChange:function(t){l(t.currentTarget.value)}}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(p,{contacts:j,deleteContact:function(t){c(n.filter((function(e){return e.id!==t})))}})]})}o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={form:"ContactForm_form__xhKpQ",field:"ContactForm_field__3K4bd",label:"ContactForm_label__3H55x",input:"ContactForm_input__2BDSF",button:"ContactForm_button__ZMfNW"}},4:function(t,e,n){t.exports={list:"ContactList_list__1RaJD",item:"ContactList_item__3h3HN",name:"ContactList_name__10T8O",number:"ContactList_number__2hmOn",button:"ContactList_button__219K9"}},9:function(t,e,n){t.exports={span:"Filter_span__2O52q",input:"Filter_input__lAvG6"}}},[[29,1,2]]]);
//# sourceMappingURL=main.f41bb17d.chunk.js.map