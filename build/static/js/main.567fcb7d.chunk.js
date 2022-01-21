(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(23),i=n(5),a=n(3),r=(n(28),n(0));var o=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Welcome to Splash Page"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"/register",children:"register"}),Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:"/login",children:"login"}),Object(r.jsx)("br",{})]})},j=n(4),l=(n(31),function(){var e=j.ReactSession.get("userid");return Object(r.jsxs)("div",{className:"navbar",children:[Object(r.jsxs)("div",{className:"home",children:[Object(r.jsxs)(i.b,{className:"navbar-link",to:"/home",children:[Object(r.jsx)("img",{src:"https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640657226/cinema-save/logo/266805495_593009852001789_9140452071824781120_n_obfvmh.png",alt:"cinema-save-logo"})," "]}),Object(r.jsx)(i.b,{className:"navbar-link",to:"/home",children:Object(r.jsx)("p",{children:"Home"})})]}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"search"})}),Object(r.jsx)("div",{children:Object(r.jsx)(i.b,{className:"navbar-link",to:"/profile/".concat(e),children:"Profile"})})]})}),d=n(2),b=n(8),u=n.n(b),h="https://cinema-save.herokuapp.com/",O="authentication/profile/",m=function(e){return u.a.post(h+"home/",{userid:e})},p=function(e,t){var n=h+"movie/"+e;return u.a.post(n,{movie_id:e,user_id:t})},x=function(e,t){return u.a.post(h+O,{user_id:e,board_id:t})},v=function(e){return u.a.post(h+O+"getboard/",{user_id:e})},f=function(e,t){return u.a.post(h+O+"getboard/id",{user_id:e,board_id:t})},g=(n(50),function(e){var t=j.ReactSession.get("userid"),n=Object(a.h)().id,s=Object(c.useState)([]),i=Object(d.a)(s,2),o=i[0],l=i[1],b=Object(c.useState)([]),u=Object(d.a)(b,2),h=u[0],O=u[1];Object(c.useEffect)((function(){p({movie_id:n,user_id:t}).then((function(e){return console.log("promise fulfilled"),e.data})).then((function(e){l(e.movie),O(e.streamMovie)}))}),[]);var m=h.slice(0,3).map((function(e){return Object(r.jsx)("div",{className:"streamLogo",children:Object(r.jsx)("a",{href:e[0],children:Object(r.jsx)("img",{src:e[2],alt:e[3]})})})})),x=o.genre+"",v=(x=x.split(",")).map((function(e){return Object(r.jsx)("div",{className:"genre",children:e})}));return Object(r.jsx)("div",{className:"movie-show-pg",children:Object(r.jsxs)("div",{className:"movie-container-col",children:[Object(r.jsxs)("div",{className:"movie-container-row",children:[Object(r.jsxs)("div",{className:"div-left",children:[Object(r.jsx)("img",{className:"poster",src:o.poster,alt:"".concat(o.title," poster")}),Object(r.jsx)("div",{className:"save-btn-container",children:Object(r.jsx)("button",{className:"save-btn",onClick:function(){return o._id,void fetch("https://cinema-save.herokuapp.com/authentication/profile/addpin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movie_id:n,user_id:t}),credentials:"include"}).then((function(e){return e.json()}))}})})]}),Object(r.jsxs)("div",{className:"movie-desrip-show",children:[Object(r.jsx)("h1",{children:o.title}),Object(r.jsx)("h3",{children:o.imdbRating}),Object(r.jsx)("div",{className:"allgenres",children:v}),Object(r.jsx)("h4",{children:o.description}),Object(r.jsxs)("h5",{children:["languages: ",o.languages]})]})]}),Object(r.jsxs)("div",{className:"streamContainerParent",children:[Object(r.jsx)("h5",{children:"Watch it here:"}),Object(r.jsx)("div",{className:"streamContainer",children:m})]})]})})}),N=(n(21),function(e){var t=e.userid,n=Object(c.useState)([]),s=Object(d.a)(n,2),o=s[0],j=s[1],l=Object(c.useState)([]),b=Object(d.a)(l,2),u=b[0],h=b[1],O=Object(c.useState)(Number),p=Object(d.a)(O,2),x=p[0],v=p[1];Object(c.useEffect)((function(){m(t).then((function(e){console.log("promise fulfilled"),j(e.data),h(e.data.splice(0,50)),v(50)}))}),[]);var f=u.map((function(e){return Object(r.jsxs)("div",{className:"movie-container",children:[Object(r.jsx)(i.b,{to:"/movie/".concat(e._id),onClick:function(){return function(e){var t=e;fetch("https://cinema-save.herokuapp.com/movie/id",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t}),credentials:"include"}).then((function(e){return e.json()})).then((function(e){void 0!==e&&(a.b,"/movie/:".concat(t))}))}(e._id)},style:{textDecoration:"none",color:"black"},children:Object(r.jsx)("img",{src:e.poster,alt:"".concat(e.title," poster"),className:"poster"})}),Object(r.jsxs)("div",{className:"movie-descrip",children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsxs)("h5",{children:["imdb: ",e.imdbRating," "]}),Object(r.jsxs)("h5",{children:["genre(s): ",e.genre," "]})]}),Object(r.jsx)("div",{className:"save-btn-container",children:Object(r.jsx)("button",{className:"save-btn",onClick:function(){return function(e){fetch("https://cinema-save.herokuapp.com/authentication/profile/addpin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){return e.json()}))}({movieID:e._id,userID:t})}})})]})}));return Object(r.jsxs)("div",{className:"pinrec",children:[Object(r.jsx)("div",{className:"movies-contianer",children:f}),Object(r.jsx)("button",{onClick:function(){var e=x+50,t=o.slice(x,e);e<o.length&&(v(e),h(t))},children:"Load More"})]})});var y=function(){var e=j.ReactSession.get("userid");return Object(r.jsxs)("div",{className:"Home-Pg pgMargin",children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:"movies-contianer",children:Object(r.jsx)(N,{userid:e})})]})},S=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(""),l=Object(d.a)(o,2),b=l[0],u=l[1],h=Object(c.useState)(""),O=Object(d.a)(h,2),m=O[0],p=O[1],x=Object(c.useState)(Boolean),v=Object(d.a)(x,2),f=v[0],g=v[1],N=j.ReactSession.get("userid");return f?Object(r.jsx)(a.a,{to:{pathname:"/profile/".concat(N,"/board/").concat(m)}}):e.value?Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"boardname",children:"Name your board"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",id:"boardname",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"boarddescrip",children:"Give your board a description"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",id:"boarddescrip",onChange:function(e){return u(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){console.log(s);var e={title:s,description:b,userID:N};fetch("https://cinema-save.herokuapp.com/authentication/profile/addboard/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){return e.json()})).then((function(e){p(e)})).then((function(e){g(!0)}))},children:" save "})]}):Object(r.jsx)("div",{})},k=["https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501510/cinema-save/theater-img_w5f8yz.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501509/cinema-save/theater-img2_cujja6.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501512/cinema-save/popcorn-img_spun7w.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501512/cinema-save/cinema-img1_x0r9az.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501515/cinema-save/popcorn-img2_m3zdto.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501514/cinema-save/camera-img_db30he.jpg"],C=function(e){var t=e.data,n=Object(c.useState)([]),s=Object(d.a)(n,2),a=s[0],o=s[1];Object(c.useEffect)((function(){v(t).then((function(e){return console.log("promise fulfilled"),e.data})).then((function(e){o(e.boards),console.log(e)}))}),[]);var j=a.map((function(e){var n=null,c=null;if(""!=e.pins[0].poster)n=e.pins[0].poster,c=e.pins.title;else{var s=Math.floor(6*Math.random());n=k[s],c="theater image"}return Object(r.jsxs)("div",{className:"board-contianer-profile",children:[Object(r.jsx)("img",{className:"poster",src:n,alt:c}),Object(r.jsx)(i.b,{to:"/profile/".concat(t,"/board/").concat(e._id),children:Object(r.jsx)("h3",{children:e.title})})]})}));return Object(r.jsx)("div",{className:"boards-container",children:j})};n(22);var w=function(){var e=j.ReactSession.get("userid"),t=Object(c.useState)([]),n=Object(d.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)([]),o=Object(d.a)(a,2),b=(o[0],o[1]),u=Object(c.useState)(Boolean),h=Object(d.a)(u,2),O=h[0],m=h[1];Object(c.useEffect)((function(){x(e).then((function(e){return console.log("promise fulfilled"),e.data})).then((function(e){try{i(e.pins),b(e.boards)}catch(t){console.log(t)}}))}),[]);var p=s.slice(0).reverse().map((function(t){return Object(r.jsxs)("div",{className:"movie-contianer-profile",children:[Object(r.jsx)("img",{src:t.poster,alt:"".concat(t.title," poster"),className:"poster"}),Object(r.jsxs)("div",{className:"movie-descrip",children:[Object(r.jsx)("h3",{children:t.title}),Object(r.jsxs)("h5",{children:["imdb: ",t.imdbRating," "]}),Object(r.jsxs)("h5",{children:["genre(s): ",t.genre," "]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"removeBtn",onClick:function(){return n={movieID:t._id,userID:e},void fetch("https://cinema-save.herokuapp.com/authentication/profile/deletepin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n),credentials:"include"}).then((function(e){return e.json()})).then((function(e){try{i(e.pins),b(e.boards)}catch(t){console.log(t)}}));var n},children:"remove"})]})}));return Object(r.jsxs)("div",{className:"profile pgMargin",children:[Object(r.jsx)(l,{}),Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("input",{id:"userProfileLink",value:window.location.href,type:"text",hidden:!0}),Object(r.jsx)("img",{className:"profile-img",src:"https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501510/cinema-save/theater-img_w5f8yz.jpg",alt:"profile-pic"}),Object(r.jsxs)("div",{className:"share",children:[Object(r.jsx)("h1",{children:j.ReactSession.get("username")}),Object(r.jsx)("img",{onClick:function(){var e=document.getElementById("userProfileLink");e.select(),navigator.clipboard.writeText(e.value)},src:"https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640736464/cinema-save/logo/share_lre6s2.png",alt:"share-logo"})]})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"boards-header",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h3",{children:"Boards"})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:"addBtn",onClick:function(){m(!0)},children:"+"})})]}),Object(r.jsx)(C,{data:e}),Object(r.jsx)(S,{value:O})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"all-pins-profile",children:[Object(r.jsx)("h2",{children:"all pins"}),Object(r.jsx)("div",{className:"movies-contianer",children:p})]})]})};var _=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),o=Object(d.a)(i,2),j=o[0],l=o[1],b=Object(c.useState)(""),u=Object(d.a)(b,2),h=u[0],O=u[1],m=Object(c.useState)(!1),p=Object(d.a)(m,2),x=p[0],v=p[1],f=Object(c.useState)(""),g=Object(d.a)(f,2),N=g[0],y=g[1];return!0===x&&" "!==N?Object(r.jsx)(a.a,{push:!0,to:{pathname:"/profile/".concat(N)}}):Object(r.jsxs)("div",{className:"register",children:[Object(r.jsx)("div",{class:"welcome",children:Object(r.jsx)("h1",{children:"Register"})}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,email:j,password:h};fetch("https://cinema-save.herokuapp.com/authentication/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"}).then((function(e){return console.log("new user added"),e.json()})).then((function(e){y(e)})).then((function(e){v(!0)}))},children:[Object(r.jsxs)("div",{class:"mb-3",children:[Object(r.jsx)("label",{class:"form-label",children:"Username"}),Object(r.jsx)("input",{class:"form-control",type:"text",id:"username",name:"username",required:!0,onChange:function(e){return s(e.target.value)}})]}),Object(r.jsxs)("div",{class:"mb-3",children:[Object(r.jsx)("label",{class:"form-label",for:"email",children:"Email"}),Object(r.jsx)("input",{class:"form-control",type:"email",id:"email",name:"email",required:!0,onChange:function(e){return l(e.target.value)}})]}),Object(r.jsxs)("div",{class:"mb-3",children:[Object(r.jsx)("label",{class:"form-label",for:"password",children:"Password"}),Object(r.jsx)("input",{class:"form-control",type:"password",id:"password",name:"password",required:!0,onChange:function(e){return O(e.target.value)}})]}),Object(r.jsx)("button",{class:"btn btn-success",children:"Register"})]})]})};var T=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(""),l=Object(d.a)(o,2),b=l[0],u=l[1],h=Object(c.useState)(!1),O=Object(d.a)(h,2),m=O[0],p=O[1],x=Object(c.useState)(""),v=Object(d.a)(x,2),f=v[0],g=v[1];return!0===m&&" "!==f?Object(r.jsx)(a.a,{push:!0,to:{pathname:"/profile/".concat(f)}}):Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)("div",{class:"welcome",children:Object(r.jsx)("h1",{children:"Login"})}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:s,password:b};fetch("https://cinema-save.herokuapp.com/authentication/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"}).then((function(e){return console.log("logged in"),e.json()})).then((function(e){"success"!==e&&(g(e.user_id),p(!0),j.ReactSession.set("username",e.username),j.ReactSession.set("userid",e.user_id))}))}.bind(this),children:[Object(r.jsxs)("div",{class:"mb-3",children:[Object(r.jsx)("label",{class:"form-label",children:"Username"}),Object(r.jsx)("input",{class:"form-control",type:"text",id:"username",name:"username",required:!0,onChange:function(e){return i(e.target.value)}})]}),Object(r.jsxs)("div",{class:"mb-3",children:[Object(r.jsx)("label",{class:"form-label",for:"password",children:"Password"}),Object(r.jsx)("input",{class:"form-control",type:"password",id:"password",name:"password",required:!0,onChange:function(e){return u(e.target.value)}})]}),Object(r.jsx)("button",{class:"btn btn-success",children:"Login"})]})]})};var P=function(){var e=j.ReactSession.get("userid");return Object(r.jsxs)("div",{className:"showMovie pgMargin",children:[Object(r.jsx)(l,{}),Object(r.jsx)(g,{}),Object(r.jsx)("hr",{}),Object(r.jsx)(N,{userid:e})]})},D=function(e){var t=Object(c.useState)(""),n=Object(d.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(""),o=Object(d.a)(a,2),l=o[0],b=o[1],u=window.location.pathname.split("/board/")[1],h=j.ReactSession.get("userid"),O=e.value;e.data;if(O){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){var e={userID:h,boardID:u};fetch("https://cinema-save.herokuapp.com/authentication/profile/deleteboard/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){return e.json()}))},children:"delete board"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"boardname",children:"Change your board's name"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",id:"boardname",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("label",{htmlFor:"boarddescrip",children:"Change your board's a description"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",id:"boarddescrip",onChange:function(e){return b(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){var e={userID:h,boardID:u,title:s,description:l};fetch("https://cinema-save.herokuapp.com/authentication/profile/editboard/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){return e.json()}))},children:" save "})]})]})}return Object(r.jsx)("div",{})};function R(e){return 0===e.pins.length?Object(r.jsx)("div",{children:Object(r.jsx)("p",{children:"get started by adding pins to this board!"})}):Object(r.jsx)("div",{className:"boards-container",children:e.component})}var I=function(){var e=j.ReactSession.get("userid"),t=window.location.pathname.split("/board/")[1],n=Object(c.useState)([]),s=Object(d.a)(n,2),i=s[0],a=s[1],o=Object(c.useState)([]),b=Object(d.a)(o,2),u=b[0],h=b[1],O=Object(c.useState)(Boolean),p=Object(d.a)(O,2),x=p[0],v=p[1];Object(c.useEffect)((function(){f(e,t).then((function(e){return e.data})).then((function(e){a(e),h(e.pins)}))}),[]);var g=Object(c.useState)([]),y=Object(d.a)(g,2),S=(y[0],y[1]);Object(c.useEffect)((function(){m(e).then((function(e){S(e.data)}))}),[]);var k=u.slice(0).reverse().map((function(n){return Object(r.jsxs)("div",{className:"board-movies",children:[Object(r.jsx)("img",{src:n.poster,alt:"".concat(n.title," poster"),className:"poster"}),Object(r.jsxs)("div",{className:"movie-descrip",children:[Object(r.jsx)("h3",{children:n.title}),Object(r.jsxs)("h5",{children:["imdb: ",n.imdbRating," "]}),Object(r.jsxs)("h5",{children:["genre(s): ",n.genre," "]})]}),Object(r.jsx)("button",{className:"save-btn",onClick:function(){return c={movieID:n._id,userID:e,boardID:t},void fetch("https://cinema-save.herokuapp.com/authentication/profile/deletepin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),credentials:"include"}).then((function(e){return e.json()})).then((function(e){a(e.boards),h(e.pins)}));var c},children:"remove"})]})}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(l,{}),Object(r.jsxs)("div",{className:"showBoard",children:[Object(r.jsxs)("div",{className:"menu",children:[Object(r.jsx)("button",{onClick:function(){v(!0)},children:"edit board"}),Object(r.jsx)(D,{value:x,data:{userID:e,boardID:t}})]}),Object(r.jsxs)("h1",{children:[i.title," Board"]}),Object(r.jsx)("h3",{children:i.description}),Object(r.jsx)(R,{pins:u,component:k}),Object(r.jsx)("h2",{children:"Here are some suggestions"}),Object(r.jsx)("div",{className:"movies-contianer",children:Object(r.jsx)(N,{userid:e})})]})]})},z=document.getElementById("root");Object(s.render)(Object(r.jsx)(i.a,{children:Object(r.jsxs)(a.d,{children:[Object(r.jsx)(a.b,{path:"/",element:Object(r.jsx)(o,{})}),Object(r.jsx)(a.b,{path:"/home",element:Object(r.jsx)(y,{})}),Object(r.jsx)(a.b,{path:"/profile/:id",element:Object(r.jsx)(w,{})}),Object(r.jsx)(a.b,{path:"/profile/:id/board/:id",element:Object(r.jsx)(I,{})}),Object(r.jsx)(a.b,{path:"/register",element:Object(r.jsx)(_,{})}),Object(r.jsx)(a.b,{path:"/login",element:Object(r.jsx)(T,{})}),Object(r.jsx)(a.b,{path:"/movie/:id",element:Object(r.jsx)(P,{})})]})}),z)}},[[51,1,2]]]);
//# sourceMappingURL=main.567fcb7d.chunk.js.map