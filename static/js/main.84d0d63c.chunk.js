(this.webpackJsonpphishapp=this.webpackJsonpphishapp||[]).push([[0],{32:function(e,t,a){},37:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a(22),r=a.n(c),i=(a(37),a(32),a(12)),o=a(13),d=a(16),h=a(15),l=a(88),j=function(e){return Object(s.jsx)("button",{type:"button",class:"btn btn-primary",children:Object(s.jsxs)(l.a.Link,{href:"/PhishApp/years/".concat(e.year),children:[e.year," "]})})},u=function(e){var t=e.data,a=void 0===t?"Loading...":t.map((function(e){return Object(s.jsx)(j,{year:e},e)}));if(void 0!==a)return a},b=a(29),p=a.n(b);p.a.defaults.baseURL="https://phish.in/api/v1",p.a.defaults.headers.common={Authorization:"Bearer 856913ac92a15776365c3c519185fb5a4b0d041f248cbcb6f177c31906fe978345f1d6be08267531b818e52ddd9149f2",Accept:"application/json"};var f=p.a,O=a(86),x=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={data:[],yearLinkListItem:null,isLoading:!0},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{f.get("/years").then((function(t){console.log(t.data),e.setState({data:t.data.data,isLoading:!1})}))}catch(t){console.error(t)}}},{key:"render",value:function(){console.log(this.state.data);var e=this.state.isLoading?"Loading...":Object(s.jsx)(u,{data:this.state.data});return Object(s.jsxs)("div",{class:"container",children:[Object(s.jsx)("div",{class:"hero-image",children:Object(s.jsxs)("div",{class:"hero-text",children:[Object(s.jsx)("h1",{children:"PhishApp"}),Object(s.jsx)("p",{children:"Organized Audience Recordings"})]})}),Object(s.jsx)("div",{children:Object(s.jsx)(O.a,{children:Object(s.jsx)("div",{className:"container bg",children:Object(s.jsx)(l.a,{children:Object(s.jsx)("div",{class:"btn-group",children:e})})})})})]})}}]),a}(n.Component),m=a(49),v=function(e){return Object(m.a)(e),Object(s.jsx)("div",{class:"about-center",children:Object(s.jsxs)("div",{className:"about-text",children:[Object(s.jsx)("div",{className:"text-box",children:"Created for learning and experimentation purposes."}),Object(s.jsx)("div",{className:"text-box",children:"PhishApp provides a simple, user-friendly interface to navigate the vast public archive of audience recordings for the band Phish. You can search for a specific show by year, tour, or song. You may also provide a keyword into the search bar above. Each track of every show is also linked to an audio file and fully playable."}),Object(s.jsxs)("div",{className:"text-box",children:["The required data is gathered using an API provided by ",Object(s.jsx)("a",{href:"https://www.phish.in",target:"_blank",children:"Phish.in"}),". Queries are done in real time and based upon the user's input. The resulting data is then used to provide an interface to further refine your search until the desired show has been found. The app was built using the React library and utilizes the Node.js run-time environment. HTTP requests are done through Node.js using the Axios library. Styling comprises of CSS elements from the Bootstrap front-end framework."]})]})})},g=function(e){var t=e.show,a=t.date,n=t.venue_name,c=t.venue;return Object(s.jsxs)("div",{className:"meta-data",children:[Object(s.jsx)("h2",{className:"field",children:a}),Object(s.jsx)("h2",{className:"field",children:n}),Object(s.jsx)("h2",{className:"field",children:c.location})]})},y=a(53),N=function(e){var t=e.duration,a=e.setKey,n="";return n="E"===a||"e"===a?Object(s.jsx)("h6",{className:"set-header-field",children:"Encore"}):Object(s.jsxs)("h6",{className:"set-header-field",children:["Set ",a]}),Object(s.jsxs)("div",{className:"set-header",children:[n,Object(s.jsxs)("h6",{className:"set-header-field-length",children:["Length: ",t]})]})},k=a(24),L=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).playAudio=s.playAudio.bind(Object(k.a)(s)),s}return Object(o.a)(a,[{key:"convertLength",value:function(){var e=this.props.track.duration,t=36e5,a=6e4,s=1e3,n=0,c=0,r=0;if(e>t){for(;e>t;)e-=t,n++;for(;e>a;)e-=a,c++;for(c<10&&(c="0"+c);e>s;)e-=s,r++;return r<10&&(r="0"+r),n+":"+c+":"+r}if(e>a&&0===n){for(;e>a;)e-=a,c++;for(;e>s;)e-=s,r++;return r<10&&(r="0"+r),c+":"+r}if(e>a&&0!==n){for(;e>a;)e-=a,c++;for(c<10&&(c="0"+c);e>s;)e-=s,r++;return r<10&&(r="0"+r),c+":"+r}for(;e>s;)e-=s,r++;return r<10&&(r="0"+r),r+"seconds"}},{key:"playAudio",value:function(){var e=document.getElementsByClassName("audio-element")[0];void 0!==e&&(document.getElementById("audio-element-source").src=this.props.track.mp3,e.load(),e.play())}},{key:"render",value:function(){var e=this.props.track;return Object(s.jsx)("div",{className:"list-group-item",children:Object(s.jsxs)("div",{className:"track-info-name-length",children:[Object(s.jsx)("div",{className:"track-info-pos",children:e.position}),Object(s.jsx)("div",{className:"track-info-title",children:e.title}),Object(s.jsx)("div",{className:"track-info-length glyphicon glyphicon-play-circle",children:Object(s.jsx)("button",{className:"btn",children:Object(s.jsx)("i",{className:"fa fa-play",onClick:this.playAudio})})}),Object(s.jsx)("div",{className:"track-info-length",children:this.convertLength(e.duration)})]})})}}]),a}(n.Component),w=function(e){var t=e.tracks,a=e.setKey,n=t.filter((function(e){return e.set===a})).map((function(e){return Object(s.jsx)(L,{track:e,id:e.id})}));return Object(s.jsx)("div",{className:"list-group",children:n})},A=function(e){var t=e.tracks,a=e.setKey,n=36e5,c=6e4,r=1e3,i=t.filter((function(e){return e.set===a})),o=i.reduce((function(e,t){return e+t.duration}),0);return Object(s.jsxs)("div",{children:[Object(s.jsx)(N,{duration:function(){var e=0,t=0,a=0;if(o>n){for(;o>n;)o-=n,e++;for(;o>c;)o-=c,t++;for(t<10&&(t="0"+t);o>r;)o-=r,a++;return a<10&&(a="0"+a),e+":"+t+":"+a}if(o>c&&0===e){for(;o>c;)o-=c,t++;for(;o>r;)o-=r,a++;return a<10&&(a="0"+a),t+":"+a}if(o>c&&0!==e){for(;o>c;)o-=c,t++;for(t<10&&(t="0"+t);o>r;)o-=r,a++;return a<10&&(a="0"+a),t+":"+a}if(o>r){for(;o>r;)o-=r,a++;return a<10&&(a="0"+a),a+"seconds"}}(),setKey:a}),Object(s.jsx)(w,{tracks:i,setKey:a})]})},P=function(e){var t=e.show.tracks,a=t.map((function(e){return e.set})),n=Object(y.a)(new Set(a)).map((function(e){return Object(s.jsx)("div",{className:"set-page",children:Object(s.jsx)(A,{tracks:t,setKey:e})})}));return Object(s.jsxs)("div",{className:"set-details",children:[Object(s.jsx)("h2",{className:"set-title",children:"Set List"}),n]})},C=function(e){var t=e.show;return Object(s.jsxs)("div",{className:"show-details",children:[Object(s.jsx)("div",{className:"meta",children:Object(s.jsx)(g,{show:t})}),Object(s.jsx)("div",{className:"set-list",children:Object(s.jsx)(P,{show:t})})]})},S=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={show:void 0,isLoading:!0},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{f.get("shows/"+this.props.match.params.date).then((function(t){console.log(t.data),e.setState({show:t.data.data,isLoading:!1})}))}catch(t){console.error(t)}}},{key:"render",value:function(){return this.state.isLoading?"Loading...":Object(s.jsx)(C,{show:this.state.show})}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={data:[],yearLinkListItem:null,isLoading:!0},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{f.get("/years").then((function(t){console.log(t.data),e.setState({data:t.data.data,isLoading:!1})}))}catch(t){console.error(t)}}},{key:"render",value:function(){console.log(this.state.data);var e=this.state.isLoading?"Loading...":Object(s.jsx)(u,{data:this.state.data});return Object(s.jsx)(O.a,{bg:"light",expand:"sm",children:Object(s.jsx)(l.a,{children:Object(s.jsx)("div",{class:"container bvg",children:Object(s.jsx)("div",{class:"btn-group-vertical",children:e})})})})}}]),a}(n.Component),B=function(){return Object(s.jsx)("div",{className:"tours-center",children:Object(s.jsx)("h1",{className:"tours-text",children:"Coming soon..."})})},I=function(){return Object(s.jsx)("div",{className:"songs-center",children:Object(s.jsx)("h1",{className:"songs-text",children:"Coming soon..."})})},E=function(e){var t=e.show;return Object(s.jsx)("button",{type:"button",class:"btn btn-primary shows",children:Object(s.jsxs)(l.a.Link,{href:"/PhishApp/shows/"+t.date,children:[t.date," ",t.venue.name]})})},K=function(e){return e.shows.map((function(e){return Object(s.jsx)(E,{show:e},e.id)}))},D=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={data:[],showLinkListItem:null,isLoading:!0},s}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;try{f.get("years/"+this.props.match.params.year).then((function(t){console.log(t.data),e.setState({data:t.data.data,isLoading:!1})}))}catch(t){console.error(t)}}},{key:"render",value:function(){var e=this.state.isLoading?"Loading...":Object(s.jsx)(K,{shows:this.state.data});return Object(s.jsx)(O.a,{bg:"light",expand:"sm",children:Object(s.jsx)(l.a,{children:Object(s.jsx)("div",{class:"container bvg",children:Object(s.jsx)("div",{class:"btn-group-vertical",children:e})})})})}}]),a}(n.Component),F=a(87),M=a(50),z=a(85),R=function(){return Object(s.jsxs)(O.a,{bg:"light",expand:"lg",children:[Object(s.jsx)(O.a.Brand,{href:"/PhishApp",children:"PhishApp"}),Object(s.jsx)(O.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(s.jsxs)(O.a.Collapse,{id:"basic-navbar-nav",children:[Object(s.jsxs)(l.a,{className:"mr-auto",children:[Object(s.jsx)(l.a.Link,{href:"/PhishApp",children:"Home"}),Object(s.jsx)(l.a.Link,{href:"/PhishApp/about",children:"About"})]}),Object(s.jsxs)(F.a,{inline:!0,children:[Object(s.jsx)(M.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(s.jsx)(z.a,{variant:"outline-success",children:"Search"})]})]})]})},Y=a(51),q=a(6),H=function(){return Object(s.jsxs)(O.a,{bg:"light",className:"sidebar",children:[Object(s.jsx)(l.a,{className:"mr-auto",children:Object(s.jsx)(l.a.Link,{href:"/PhishApp/years",children:"Years"})}),Object(s.jsx)(l.a,{className:"mr-auto",children:Object(s.jsx)(l.a.Link,{href:"/PhishApp/tours",children:"Tours"})}),Object(s.jsx)(l.a,{className:"mr-auto",children:Object(s.jsx)(l.a.Link,{href:"/PhishApp/songs",children:"Songs"})})]})},J=function(){return Object(s.jsx)(Y.a,{children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("audio",{className:"audio-element",children:Object(s.jsx)("source",{id:"audio-element-source"})}),Object(s.jsx)(R,{}),Object(s.jsxs)("div",{className:"side-and-content",children:[Object(s.jsx)(H,{}),Object(s.jsx)("div",{className:"content-pane",children:Object(s.jsxs)(q.c,{children:[Object(s.jsx)(q.a,{exact:!0,path:"/PhishApp",component:x}),Object(s.jsx)(q.a,{path:"/PhishApp/about",component:v}),Object(s.jsx)(q.a,{path:"/PhishApp/tours",component:B}),Object(s.jsx)(q.a,{path:"/PhishApp/songs",component:I}),Object(s.jsx)(q.a,{exact:!0,path:"/PhishApp/years",component:T}),Object(s.jsx)(q.a,{path:"/PhishApp/years/:year",component:D}),Object(s.jsx)(q.a,{path:"/PhishApp/shows/:date",component:S})]})})]}),Object(s.jsx)("div",{className:"footer",children:"\xa9 2021 Caleb Tracey"})]})})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,89)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(s.jsx)(J,{}),document.getElementById("root")),_()}},[[83,1,2]]]);
//# sourceMappingURL=main.84d0d63c.chunk.js.map