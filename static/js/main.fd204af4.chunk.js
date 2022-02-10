(this["webpackJsonpreact-courses"]=this["webpackJsonpreact-courses"]||[]).push([[0],{22:function(e,t){e.exports={newCourse:{id:null,title:"",authorId:null,category:""},courses:[{id:1,title:"Securing React Apps with Auth0",slug:"react-auth0-authentication-security",authorId:1,category:"JavaScript"},{id:2,title:"React: The Big Picture",slug:"react-big-picture",authorId:1,category:"JavaScript"},{id:3,title:"Creating Reusable React Components",slug:"react-creating-reusable-components",authorId:1,category:"JavaScript"},{id:4,title:"Building a JavaScript Development Environment",slug:"javascript-development-environment",authorId:1,category:"JavaScript"},{id:5,title:"Building Applications with React and Redux",slug:"react-redux-react-router-es6",authorId:1,category:"JavaScript"},{id:6,title:"Building Applications in React and Flux",slug:"react-flux-building-applications",authorId:1,category:"JavaScript"},{id:7,title:"Clean Code: Writing Code for Humans",slug:"writing-clean-code-humans",authorId:1,category:"Software Practices"},{id:8,title:"Architecting Applications for the Real World",slug:"architecting-applications-dotnet",authorId:1,category:"Software Architecture"},{id:9,title:"Becoming an Outlier: Reprogramming the Developer Mind",slug:"career-reboot-for-developer-mind",authorId:1,category:"Career"},{id:10,title:"Web Component Fundamentals",slug:"web-components-shadow-dom",authorId:1,category:"HTML5"}],authors:[{id:1,name:"Cory House"},{id:2,name:"Scott Allen"},{id:3,name:"Dan Wahlin"}],users:[{id:1,email:"test@example.com",password:"123"},{id:2,email:"bob@example.com",password:"345"}]}},31:function(e,t,r){},40:function(e,t,r){},43:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(10),s=r.n(a),o=(r(31),r(1)),u=function(){return Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsx)("h2",{children:" About "}),Object(o.jsx)("p",{children:"This app use React, Redux and React Router for ultra-responsive web apps."})]})},i=r(5),l=function(){return Object(o.jsxs)("div",{className:"jumbotron",children:[Object(o.jsx)("h1",{children:"Pluralsights Adminstration"}),Object(o.jsx)("p",{children:"React, Redux and React Router for ultra-responsive web apps."}),Object(o.jsx)(i.b,{to:"about",className:"btn btn-primary btn-lg",children:"Learn more"})]})},d=r(2),h=function(){var e={color:"#f15B2A"};return Object(o.jsxs)("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"},children:[Object(o.jsx)(i.c,{to:"/react-courses/",style:function(t){return t.isActive?e:null},children:"Home"})," | ",Object(o.jsx)(i.c,{to:"/react-courses/about",style:function(t){return t.isActive?e:null},children:"About"})," | ",Object(o.jsx)(i.c,{to:"/react-courses/courses",style:function(t){return t.isActive?e:null},children:"Courses"})]})},j=function(){return Object(o.jsx)("h1",{children:"Oops! Page not found."})},b=r(6),p=r(13),f=r.n(p),O=r(16),g=r(19),m=r(20),v=r(26),x=r(24),C=r(12),y=r(9),S=r(8),A="CREATE_COURSE_SUCCESS",w="UPDATE_COURSE_SUCCESS",I="DELETE_COURSE_OPTIMISTIC",E="LOAD_COURSES_SUCCESS",N="LOAD_AUTHORS_SUCCESS",R="BEGIN_API_CALL",P="API_CALL_ERROR";function T(e){return k.apply(this,arguments)}function k(){return(k=Object(O.a)(f.a.mark((function e(t){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=2;break}return e.abrupt("return",t.json());case 2:if(400!==t.status){e.next=7;break}return e.next=5,t.text();case 5:throw r=e.sent,new Error(r);case 7:throw new Error("Network response was not ok.");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){throw console.error("API call failed. "+e),e}var _=function(){return{type:R}},L=function(){return{type:P}};function B(){return function(e){return e(_()),fetch("https://my-json-server.typicode.com/iahmediibrahim/react-courses-json/authors/").then(T).catch(D).then((function(t){e(function(e){return{type:N,authors:e}}(t))})).catch((function(t){throw e(L()),t}))}}var U="https://my-json-server.typicode.com/iahmediibrahim/react-courses-json/courses/";function F(){return function(e){return e(_()),fetch(U).then(T).catch(D).then((function(t){e(function(e){return{type:E,courses:e}}(t))})).catch((function(t){throw e(L()),t}))}}function J(e){return function(t){return t({type:I,id:e}),function(e){return fetch(U+e,{method:"DELETE",headers:{"content-type":"application/json"}}).then(T).catch(D)}(e)}}r(40);var H=function(){return Object(o.jsx)("div",{className:"loader",children:"Loading..."})},M=function(e){var t=e.courses,r=e.onDeleteClick;return Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:"Author"}),Object(o.jsx)("th",{children:"Category"}),Object(o.jsx)("th",{})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"btn btn-light",href:"http://pluralsight.com/courses/"+e.slug,children:"Watch"})}),Object(o.jsx)("td",{children:Object(o.jsx)(i.b,{to:"/react-courses/course/"+e.slug,children:e.title})}),Object(o.jsx)("td",{children:e.authorName}),Object(o.jsx)("td",{children:e.category}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return r(e.id)},children:"Delete"})})]},e.id)}))})]})},W=function(e){Object(v.a)(r,e);var t=Object(x.a)(r);function r(){var e;Object(g.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={redirectToAddCoursePage:!1},e.deleteCourse=function(){var t=Object(O.a)(f.a.mark((function t(r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y.b.success("Course deleted."),t.prev=1,t.next=4,e.props.actions.deleteCourse(r);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),y.b.error("Delete failed."+t.t0.message,{autoClose:!1});case 9:case"end":return t.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.courses,r=e.authors,n=e.actions;0===t.length&&n.loadCourses().catch((function(e){return alert("loading courses failed "+e)})),0===r.length&&n.loadAuthors().catch((function(e){return alert("loading Authors failed "+e)}))}},{key:"render",value:function(){var e=this;return Object(o.jsxs)(c.a.Fragment,{children:[this.state.redirectToAddCoursePage&&Object(o.jsx)(d.a,{to:"/react-courses/course"}),Object(o.jsx)("h1",{className:"mt-5 text-center",children:"Courses"}),this.props.loading?Object(o.jsx)(H,{}):Object(o.jsxs)(c.a.Fragment,{children:[Object(o.jsx)("button",{className:"btn btn-primary my-4",onClick:function(){return e.setState({redirectToAddCoursePage:!0})},children:"Add Course"}),Object(o.jsx)(M,{courses:this.props.courses,onDeleteClick:this.deleteCourse})]})]})}}]),r}(n.Component);var q=Object(C.b)((function(e){var t=e.courses,r=e.authors,n=e.apiCallsInProgress;return{courses:0===r.length?[]:t.map((function(e){return Object(b.a)(Object(b.a)({},e),{},{authorName:r.find((function(t){return e.authorId===t.id})).name})})),authors:r,loading:n>0}}),(function(e){return{actions:{loadCourses:Object(S.b)(F,e),deleteCourse:Object(S.b)(J,e),loadAuthors:Object(S.b)(B,e)}}}))(W),G=r(15),z=r(7),K=function(e){var t=e.name,r=e.label,n=e.onChange,c=e.placeholder,a=e.value,s=e.error,u="form-group";return s&&s.length>0&&(u+=" has-error"),Object(o.jsxs)("div",{className:u,children:[Object(o.jsx)("label",{htmlFor:t,children:r}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("input",{type:"text",name:t,className:"form-control",placeholder:c,value:a,onChange:n}),s&&Object(o.jsx)("div",{className:"alert alert-danger",children:s})]})]})},Q=function(e){var t=e.name,r=e.label,n=e.onChange,c=e.defaultOption,a=e.value,s=e.error,u=e.options;return Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:t,children:r}),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsxs)("select",{name:t,value:a,onChange:n,className:"form-control",children:[Object(o.jsx)("option",{value:"",children:c}),u.map((function(e){return Object(o.jsx)("option",{value:e.value,children:e.text},e.value)}))]}),s&&Object(o.jsx)("div",{className:"alert alert-danger",children:s})]})]})},V=function(e){var t=e.course,r=e.authors,n=e.onSave,c=e.onChange,a=e.saving,s=void 0!==a&&a,u=e.errors,i=void 0===u?{}:u;return Object(o.jsxs)("form",{onSubmit:n,className:"card mt-5 p-5",children:[Object(o.jsxs)("h2",{children:[t.id?"Edit":"Add"," Course"]}),i.onSave&&Object(o.jsx)("div",{className:"alert alert-danger",role:"alert",children:i.onSave}),Object(o.jsx)(K,{name:"title",label:"Title",value:t.title,onChange:c,error:i.title}),Object(o.jsx)(Q,{name:"authorId",label:"Author",value:t.authorId||"",defaultOption:"Select Author",options:r.map((function(e){return{value:e.id,text:e.name}})),onChange:c,error:i.author}),Object(o.jsx)(K,{name:"category",label:"Category",value:t.category,onChange:c,error:i.category}),Object(o.jsx)("button",{type:"submit",disabled:s,className:"btn btn-primary",children:s?"Saving...":"Save"})]})},X=r(22);var Y={loadCourses:F,saveCourse:function(e){return function(t){return t(_()),function(e){return fetch(U+(e.id||""),{method:e.id?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(T).catch(D)}(e).then((function(r){e.id?t(function(e){return{type:w,course:e}}(r)):t(function(e){return{type:A,course:e}}(r))})).catch((function(e){throw t(L()),e}))}},loadAuthors:B};var Z,$=(Z=Object(C.b)((function(e,t){var r=e.courses,n=e.authors,c=t.slug;return{initialCourse:c?r.find((function(e){return e.slug===c})):X.newCourse,courses:r,authors:n}}),Y)((function(e){var t=e.initialCourse,r=e.courses,c=e.authors,a=e.loadCourses,s=e.loadAuthors,u=e.saveCourse,i=Object(n.useState)(Object(b.a)({},t)),l=Object(z.a)(i,2),h=l[0],j=l[1],p=Object(n.useState)({}),f=Object(z.a)(p,2),O=f[0],g=f[1],m=Object(n.useState)(!1),v=Object(z.a)(m,2),x=v[0],C=v[1],S=Object(d.g)();return Object(n.useEffect)((function(){0===r.length?a().catch((function(e){return alert("loading courses failed "+e)})):j(Object(b.a)({},t)),0===c.length&&s().catch((function(e){return alert("loading Authors failed "+e)}))}),[t]),0===c.length||0===r.length?Object(o.jsx)(H,{}):Object(o.jsx)(V,{course:h,errors:O,authors:c,onChange:function(e){var t=e.target,r=t.name,n=t.value;j((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(G.a)({},r,"authorId"===r?parseInt(n,10):n))}))},onSave:function(e){e.preventDefault(),function(){var e=h.title,t=h.authorId,r=h.category,n={};return e||(n.title="Title is required."),t||(n.author="Author is required"),r||(n.category="Category is required"),g(n),0===Object.keys(n).length}()&&(C(!0),u(h).then((function(){y.b.success("Course saved."),S("/react-courses/courses")})).catch((function(e){C(!1),g({onSave:e.message})})))},saving:x})})),function(e){var t=Object(d.h)().slug;return Object(o.jsx)(Z,Object(b.a)(Object(b.a)({},e),{},{slug:t}))});r(41);var ee=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)("div",{id:"app",className:"container-fluid",children:[Object(o.jsx)(h,{}),Object(o.jsxs)(d.d,{children:[Object(o.jsx)(d.b,{path:"/react-courses/",element:Object(o.jsx)(l,{})}),Object(o.jsx)(d.b,{path:"/react-courses/about",element:Object(o.jsx)(u,{})}),Object(o.jsx)(d.b,{path:"/react-courses/courses",element:Object(o.jsx)(q,{})}),Object(o.jsx)(d.b,{path:"/react-courses/course/:slug",element:Object(o.jsx)($,{})}),Object(o.jsx)(d.b,{path:"/react-courses/course",element:Object(o.jsx)($,{})}),Object(o.jsx)(d.b,{path:"*",element:Object(o.jsx)(j,{})})]}),Object(o.jsx)(y.a,{hideProgressBar:!0,autoClose:3e3})]})})},te=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,44)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))},re=(r(42),r(25)),ne={courses:[],authors:[],apiCallsInProgress:0};function ce(e){return"_SUCCESS"===e.substring(e.length-8)}var ae=Object(S.c)({courses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.courses,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return[].concat(Object(re.a)(e),[Object(b.a)({},t.course)]);case w:return e.map((function(e){return e.id===t.course.id?t.course:e}));case I:return e.filter((function(e){return e.id!==t.id}));case E:return t.courses;default:return e}},authors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.authors,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return t.authors;default:return e}},apiCallsInProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.apiCallsInProgress,t=arguments.length>1?arguments[1]:void 0;return t.type===R?e+1:ce(t.type)||t.type===P?e-1:e}}),se=r(23);var oe,ue=Object(S.d)(ae,oe,Object(S.a)(se.a));s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(C.a,{store:ue,children:Object(o.jsx)(ee,{})})}),document.getElementById("root")),te()}},[[43,1,2]]]);
//# sourceMappingURL=main.fd204af4.chunk.js.map