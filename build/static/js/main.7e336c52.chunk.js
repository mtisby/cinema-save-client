(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},28:function(e,t,n){},31:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(23),a=n(5),r=n(3),o=(n(28),n(0));var j=function(){return console.log(s.a.version),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Welcome to Splash Page"}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"/register",children:"register"}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:"/login",children:"login"}),Object(o.jsx)("br",{})]})},l=n(4),d=(n(31),function(){var e=l.ReactSession.get("userid");return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsxs)("div",{className:"home",children:[Object(o.jsxs)(a.b,{className:"navbar-link",to:"/home",children:[Object(o.jsx)("img",{src:"https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640657226/cinema-save/logo/266805495_593009852001789_9140452071824781120_n_obfvmh.png",alt:"cinema-save-logo"})," "]}),Object(o.jsx)(a.b,{className:"navbar-link",to:"/home",children:Object(o.jsx)("p",{children:"Home"})})]}),Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"search"})}),Object(o.jsx)("div",{children:Object(o.jsx)(a.b,{className:"navbar-link",to:"/profile/".concat(e),children:"Profile"})})]})}),b=n(2),u=n(8),h=n.n(u),O="http://localhost:3060/",m="authentication/profile/",p=function(e){return h.a.post(O+"home/",{userid:e})},x=function(e,t){var n=O+"movie/"+e;return h.a.post(n,{movie_id:e,user_id:t})},f=function(e,t){return h.a.post(O+m,{user_id:e,board_id:t})},v=function(e){return h.a.post(O+m+"getboard/",{user_id:e})},g=function(e,t){return h.a.post(O+m+"getboard/id",{user_id:e,board_id:t})},N=(n(50),function(e){var t=l.ReactSession.get("userid"),n=Object(r.h)().id,s=Object(c.useState)([]),i=Object(b.a)(s,2),a=i[0],j=i[1],d=Object(c.useState)([]),u=Object(b.a)(d,2),h=u[0],O=u[1];Object(c.useEffect)((function(){x({movie_id:n,user_id:t}).then((function(e){return console.log("promise fulfilled"),e.data})).then((function(e){j(e.movie),O(e.streamMovie)}))}),[]);var m=h.slice(0,3).map((function(e){return Object(o.jsx)("div",{className:"streamLogo",children:Object(o.jsx)("a",{href:e[0],children:Object(o.jsx)("img",{src:e[2],alt:e[3]})})})})),p=a.genre+"",f=(p=p.split(",")).map((function(e){return Object(o.jsx)("div",{className:"genre",children:e})}));return Object(o.jsx)("div",{className:"movie-show-pg",children:Object(o.jsxs)("div",{className:"movie-container-col",children:[Object(o.jsxs)("div",{className:"movie-container-row",children:[Object(o.jsxs)("div",{className:"div-left",children:[Object(o.jsx)("img",{className:"poster",src:a.poster,alt:"".concat(a.title," poster")}),Object(o.jsx)("div",{className:"save-btn-container",children:Object(o.jsx)("button",{className:"save-btn",onClick:function(){return a._id,void fetch("http://localhost:3060/authentication/profile/addpin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movie_id:n,user_id:t})}).then((function(e){return e.json()}))}})})]}),Object(o.jsxs)("div",{className:"movie-desrip-show",children:[Object(o.jsx)("h1",{children:a.title}),Object(o.jsx)("h3",{children:a.imdbRating}),Object(o.jsx)("div",{className:"allgenres",children:f}),Object(o.jsx)("h4",{children:a.description}),Object(o.jsxs)("h5",{children:["languages: ",a.languages]})]})]}),Object(o.jsxs)("div",{className:"streamContainerParent",children:[Object(o.jsx)("h5",{children:"Watch it here:"}),Object(o.jsx)("div",{className:"streamContainer",children:m})]})]})})}),y=(n(21),function(e){var t=e.userid,n=Object(c.useState)([]),s=Object(b.a)(n,2),i=s[0],j=s[1],l=Object(c.useState)([]),d=Object(b.a)(l,2),u=d[0],h=d[1],O=Object(c.useState)(Number),m=Object(b.a)(O,2),x=m[0],f=m[1];Object(c.useEffect)((function(){p(t).then((function(e){console.log("promise fulfilled"),j(e.data),h(e.data.splice(0,50)),f(50)}))}),[]);var v=u.map((function(e){return Object(o.jsxs)("div",{className:"movie-container",children:[Object(o.jsx)(a.b,{to:"/movie/".concat(e._id),onClick:function(){return function(e){var t=e;fetch("http://localhost:3060/movie/id",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t})}).then((function(e){return e.json()})).then((function(e){void 0!==e&&(r.b,"/movie/:".concat(t))}))}(e._id)},style:{textDecoration:"none",color:"black"},children:Object(o.jsx)("img",{src:e.poster,alt:"".concat(e.title," poster"),className:"poster"})}),Object(o.jsxs)("div",{className:"movie-descrip",children:[Object(o.jsx)("h3",{children:e.title}),Object(o.jsxs)("h5",{children:["imdb: ",e.imdbRating," "]}),Object(o.jsxs)("h5",{children:["genre(s): ",e.genre," "]})]}),Object(o.jsx)("div",{className:"save-btn-container",children:Object(o.jsx)("button",{className:"save-btn",onClick:function(){return function(e){fetch("http://localhost:3060/authentication/profile/addpin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}({movieID:e._id,userID:t})}})})]})}));return Object(o.jsxs)("div",{className:"pinrec",children:[Object(o.jsx)("div",{className:"movies-contianer",children:v}),Object(o.jsx)("button",{onClick:function(){var e=x+50,t=i.slice(x,e);e<i.length&&(f(e),h(t))},children:"Load More"})]})});var S=function(){var e=l.ReactSession.get("userid");return Object(o.jsxs)("div",{className:"Home-Pg pgMargin",children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"movies-contianer",children:Object(o.jsx)(y,{userid:e})})]})},C=function(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(""),j=Object(b.a)(a,2),d=j[0],u=j[1],h=Object(c.useState)(""),O=Object(b.a)(h,2),m=O[0],p=O[1],x=Object(c.useState)(Boolean),f=Object(b.a)(x,2),v=f[0],g=f[1],N=l.ReactSession.get("userid");return v?Object(o.jsx)(r.a,{to:{pathname:"/profile/".concat(N,"/board/").concat(m)}}):e.value?Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"boardname",children:"Name your board"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"boardname",onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"boarddescrip",children:"Give your board a description"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"boarddescrip",onChange:function(e){return u(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){console.log(s);var e={title:s,description:d,userID:N};fetch("http://localhost:3060/authentication/profile/addboard/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){p(e)})).then((function(e){g(!0)}))},children:" save "})]}):Object(o.jsx)("div",{})},w=["https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501510/cinema-save/theater-img_w5f8yz.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501509/cinema-save/theater-img2_cujja6.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501512/cinema-save/popcorn-img_spun7w.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501512/cinema-save/cinema-img1_x0r9az.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501515/cinema-save/popcorn-img2_m3zdto.jpg","https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501514/cinema-save/camera-img_db30he.jpg"],_=function(e){var t=e.data,n=Object(c.useState)([]),s=Object(b.a)(n,2),i=s[0],r=s[1];Object(c.useEffect)((function(){v(t).then((function(e){return console.log("promise fulfilled"),e.data})).then((function(e){r(e.boards),console.log(e)}))}),[]);var j=i.map((function(e){var n=null,c=null;if(""!=e.pins[0].poster)n=e.pins[0].poster,c=e.pins.title;else{var s=Math.floor(6*Math.random());n=w[s],c="theater image"}return Object(o.jsxs)("div",{className:"board-contianer-profile",children:[Object(o.jsx)("img",{className:"poster",src:n,alt:c}),Object(o.jsx)(a.b,{to:"/profile/".concat(t,"/board/").concat(e._id),children:Object(o.jsx)("h3",{children:e.title})})]})}));return Object(o.jsx)("div",{className:"boards-container",children:j})};n(22);var k=function(){var e=l.ReactSession.get("userid"),t=Object(c.useState)([]),n=Object(b.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)([]),r=Object(b.a)(a,2),j=(r[0],r[1]),u=Object(c.useState)(Boolean),h=Object(b.a)(u,2),O=h[0],m=h[1];Object(c.useEffect)((function(){f(e).then((function(e){return console.log("promise fulfilled"),e.data})).then((function(e){try{i(e.pins),j(e.boards)}catch(t){console.log(t)}}))}),[]);var p=s.slice(0).reverse().map((function(t){return Object(o.jsxs)("div",{className:"movie-contianer-profile",children:[Object(o.jsx)("img",{src:t.poster,alt:"".concat(t.title," poster"),className:"poster"}),Object(o.jsxs)("div",{className:"movie-descrip",children:[Object(o.jsx)("h3",{children:t.title}),Object(o.jsxs)("h5",{children:["imdb: ",t.imdbRating," "]}),Object(o.jsxs)("h5",{children:["genre(s): ",t.genre," "]})]}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{className:"removeBtn",onClick:function(){return n={movieID:t._id,userID:e},void fetch("http://localhost:3060/authentication/profile/deletepin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(e){try{i(e.pins),j(e.boards)}catch(t){console.log(t)}}));var n},children:"remove"})]})}));return Object(o.jsxs)("div",{className:"profile pgMargin",children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("input",{id:"userProfileLink",value:window.location.href,type:"text",hidden:!0}),Object(o.jsx)("img",{className:"profile-img",src:"https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640501510/cinema-save/theater-img_w5f8yz.jpg",alt:"profile-pic"}),Object(o.jsxs)("div",{className:"share",children:[Object(o.jsx)("h1",{children:l.ReactSession.get("username")}),Object(o.jsx)("img",{onClick:function(){var e=document.getElementById("userProfileLink");e.select(),navigator.clipboard.writeText(e.value)},src:"https://res.cloudinary.com/dr0ofxgkz/image/upload/v1640736464/cinema-save/logo/share_lre6s2.png",alt:"share-logo"})]})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"boards-header",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Boards"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"addBtn",onClick:function(){m(!0)},children:"+"})})]}),Object(o.jsx)(_,{data:e}),Object(o.jsx)(C,{value:O})]}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"all-pins-profile",children:[Object(o.jsx)("h2",{children:"all pins"}),Object(o.jsx)("div",{className:"movies-contianer",children:p})]})]})};var T=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),a=Object(b.a)(i,2),j=a[0],l=a[1],d=Object(c.useState)(""),u=Object(b.a)(d,2),h=u[0],O=u[1],m=Object(c.useState)(!1),p=Object(b.a)(m,2),x=p[0],f=p[1],v=Object(c.useState)(""),g=Object(b.a)(v,2),N=g[0],y=g[1];return!0===x&&" "!==N?Object(o.jsx)(r.a,{push:!0,to:{pathname:"/profile/".concat(N)}}):Object(o.jsxs)("div",{className:"register",children:[Object(o.jsx)("div",{class:"welcome",children:Object(o.jsx)("h1",{children:"Register"})}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:n,email:j,password:h};fetch("http://localhost:3060/authentication/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("new user added"),e.json()})).then((function(e){y(e)})).then((function(e){f(!0)}))},children:[Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{class:"form-label",children:"Username"}),Object(o.jsx)("input",{class:"form-control",type:"text",id:"username",name:"username",required:!0,onChange:function(e){return s(e.target.value)}})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{class:"form-label",for:"email",children:"Email"}),Object(o.jsx)("input",{class:"form-control",type:"email",id:"email",name:"email",required:!0,onChange:function(e){return l(e.target.value)}})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{class:"form-label",for:"password",children:"Password"}),Object(o.jsx)("input",{class:"form-control",type:"password",id:"password",name:"password",required:!0,onChange:function(e){return O(e.target.value)}})]}),Object(o.jsx)("button",{class:"btn btn-success",children:"Register"})]})]})};var P=function(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(""),j=Object(b.a)(a,2),d=j[0],u=j[1],h=Object(c.useState)(!1),O=Object(b.a)(h,2),m=O[0],p=O[1],x=Object(c.useState)(""),f=Object(b.a)(x,2),v=f[0],g=f[1];return!0===m&&" "!==v?Object(o.jsx)(r.a,{push:!0,to:{pathname:"/profile/".concat(v)}}):Object(o.jsxs)("div",{className:"login",children:[Object(o.jsx)("div",{class:"welcome",children:Object(o.jsx)("h1",{children:"Login"})}),Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:s,password:d};fetch("http://localhost:3060/authentication/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return console.log("logged in"),e.json()})).then((function(e){"success"!==e&&(g(e.user_id),p(!0),l.ReactSession.set("username",e.username),l.ReactSession.set("userid",e.user_id))}))}.bind(this),children:[Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{class:"form-label",children:"Username"}),Object(o.jsx)("input",{class:"form-control",type:"text",id:"username",name:"username",required:!0,onChange:function(e){return i(e.target.value)}})]}),Object(o.jsxs)("div",{class:"mb-3",children:[Object(o.jsx)("label",{class:"form-label",for:"password",children:"Password"}),Object(o.jsx)("input",{class:"form-control",type:"password",id:"password",name:"password",required:!0,onChange:function(e){return u(e.target.value)}})]}),Object(o.jsx)("button",{class:"btn btn-success",children:"Login"})]})]})};var D=function(){var e=l.ReactSession.get("userid");return Object(o.jsxs)("div",{className:"showMovie pgMargin",children:[Object(o.jsx)(d,{}),Object(o.jsx)(N,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(y,{userid:e})]})},R=function(e){var t=Object(c.useState)(""),n=Object(b.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(""),r=Object(b.a)(a,2),j=r[0],d=r[1],u=window.location.pathname.split("/board/")[1],h=l.ReactSession.get("userid"),O=e.value;e.data;if(O){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("button",{onClick:function(){var e={userID:h,boardID:u};fetch("http://localhost:3060/authentication/profile/deleteboard/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},children:"delete board"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"boardname",children:"Change your board's name"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"boardname",onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{htmlFor:"boarddescrip",children:"Change your board's a description"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"text",id:"boarddescrip",onChange:function(e){return d(e.target.value)}}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{onClick:function(){var e={userID:h,boardID:u,title:s,description:j};fetch("http://localhost:3060/authentication/profile/editboard/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))},children:" save "})]})]})}return Object(o.jsx)("div",{})};function I(e){return 0===e.pins.length?Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:"get started by adding pins to this board!"})}):Object(o.jsx)("div",{className:"boards-container",children:e.component})}var z=function(){var e=l.ReactSession.get("userid"),t=window.location.pathname.split("/board/")[1],n=Object(c.useState)([]),s=Object(b.a)(n,2),i=s[0],a=s[1],r=Object(c.useState)([]),j=Object(b.a)(r,2),u=j[0],h=j[1],O=Object(c.useState)(Boolean),m=Object(b.a)(O,2),x=m[0],f=m[1];Object(c.useEffect)((function(){g(e,t).then((function(e){return e.data})).then((function(e){a(e),h(e.pins)}))}),[]);var v=Object(c.useState)([]),N=Object(b.a)(v,2),S=(N[0],N[1]);Object(c.useEffect)((function(){p(e).then((function(e){S(e.data)}))}),[]);var C=u.slice(0).reverse().map((function(n){return Object(o.jsxs)("div",{className:"board-movies",children:[Object(o.jsx)("img",{src:n.poster,alt:"".concat(n.title," poster"),className:"poster"}),Object(o.jsxs)("div",{className:"movie-descrip",children:[Object(o.jsx)("h3",{children:n.title}),Object(o.jsxs)("h5",{children:["imdb: ",n.imdbRating," "]}),Object(o.jsxs)("h5",{children:["genre(s): ",n.genre," "]})]}),Object(o.jsx)("button",{className:"save-btn",onClick:function(){return c={movieID:n._id,userID:e,boardID:t},void fetch("http://localhost:3060/authentication/profile/deletepin/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(e){return e.json()})).then((function(e){a(e.boards),h(e.pins)}));var c},children:"remove"})]})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{}),Object(o.jsxs)("div",{className:"showBoard",children:[Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)("button",{onClick:function(){f(!0)},children:"edit board"}),Object(o.jsx)(R,{value:x,data:{userID:e,boardID:t}})]}),Object(o.jsxs)("h1",{children:[i.title," Board"]}),Object(o.jsx)("h3",{children:i.description}),Object(o.jsx)(I,{pins:u,component:C}),Object(o.jsx)("h2",{children:"Here are some suggestions"}),Object(o.jsx)("div",{className:"movies-contianer",children:Object(o.jsx)(y,{userid:e})})]})]})},J=document.getElementById("root");Object(i.render)(Object(o.jsx)(a.a,{children:Object(o.jsxs)(r.d,{children:[Object(o.jsx)(r.b,{path:"/",element:Object(o.jsx)(j,{})}),Object(o.jsx)(r.b,{path:"/home",element:Object(o.jsx)(S,{})}),Object(o.jsx)(r.b,{path:"/profile/:id",element:Object(o.jsx)(k,{})}),Object(o.jsx)(r.b,{path:"/profile/:id/board/:id",element:Object(o.jsx)(z,{})}),Object(o.jsx)(r.b,{path:"/register",element:Object(o.jsx)(T,{})}),Object(o.jsx)(r.b,{path:"/login",element:Object(o.jsx)(P,{})}),Object(o.jsx)(r.b,{path:"/movie/:id",element:Object(o.jsx)(D,{})})]})}),J)}},[[51,1,2]]]);
//# sourceMappingURL=main.7e336c52.chunk.js.map