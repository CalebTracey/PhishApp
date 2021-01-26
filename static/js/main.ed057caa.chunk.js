(this.webpackJsonpphishapp=this.webpackJsonpphishapp||[]).push([[0],{105:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a(0),r=a.n(s),c=a(30),i=a.n(c),o=(a(48),a(31),a(8)),h=a(9),d=a(11),l=a(10),u=a(16),j=function(t){return Object(n.jsxs)(u.b,{to:"/PhishApp/years/".concat(t.year),style:{color:"white"},className:"btn btn-primary ",children:[" ",t.year," "]})},b=function(t){var e=t.data;return void 0===e?"Loading...":e.map((function(t){return Object(n.jsx)(j,{year:t},t)}))},p=a(40),O=a.n(p);O.a.defaults.baseURL="https://phish.in/api/v1",O.a.defaults.headers.common={Authorization:"Bearer 856913ac92a15776365c3c519185fb5a4b0d041f248cbcb6f177c31906fe978345f1d6be08267531b818e52ddd9149f2",Accept:"application/json"};var x=O.a,m=a(111),v=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:[],yearLinkListItem:null,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{x.get("/years").then((function(e){t.setState({data:e.data.data,isLoading:!1})}))}catch(e){console.error(e)}}},{key:"render",value:function(){var t=this.state.isLoading?"Loading...":Object(n.jsx)(b,{data:this.state.data});return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("div",{className:"hero-image",children:Object(n.jsxs)("div",{className:"hero-text",children:[Object(n.jsx)("h1",{children:"PhishApp"}),Object(n.jsx)("p",{children:"Organized Audience Recordings"})]})}),Object(n.jsx)("div",{children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"container bg",children:Object(n.jsx)("div",{className:"btn-group",children:t})})})})]})}}]),a}(s.Component),f=function(t){return Object(n.jsx)("div",{className:"about-center",children:Object(n.jsxs)("div",{className:"about-text",children:[Object(n.jsx)("div",{className:"text-box",children:"Created for learning and experimentation purposes."}),Object(n.jsx)("div",{className:"text-box",children:"PhishApp provides a simple, user-friendly interface to navigate the vast public archive of audience recordings for the band Phish. You can search for a specific show by year, tour, or song. You may also provide a keyword into the search bar above. Each track of every show is also linked to an audio file and fully playable."}),Object(n.jsxs)("div",{className:"text-box",children:["The required data is gathered using an API provided by ",Object(n.jsx)("a",{href:"https://www.phish.in",target:"_top",children:"Phish.in"}),". Queries are done in real time and based upon the user's input. The resulting data is then used to provide an interface to further refine your search until the desired show has been found. The app was built using the React library and utilizes the Node.js run-time environment. HTTP requests are done through Node.js using the Axios library. Styling comprises of CSS elements from the Bootstrap front-end framework."]})]})})},g=function(t){var e=t.show,a=e.date,s=e.venue_name,r=e.venue;return Object(n.jsxs)("div",{className:"meta-data",children:[Object(n.jsx)("h2",{className:"field",children:a}),Object(n.jsx)("h2",{className:"field",children:s}),Object(n.jsx)("h2",{className:"field",children:r.location})]})},y=a(37),k=function(t){var e=t.duration,a=t.setKey,s="";return s="E"===a||"e"===a?Object(n.jsx)("h6",{className:"set-header-field",children:"Encore"}):Object(n.jsxs)("h6",{className:"set-header-field",children:["Set ",a]}),Object(n.jsxs)("div",{className:"set-header",children:[s,Object(n.jsxs)("h6",{className:"set-header-field-length",children:["Length: ",e]})]})},N=a(41),w=function(t){var e,a=t.track,r=t.duration,c=function(t){var e=Object(s.useState)(new Audio(t)),a=Object(N.a)(e,1)[0],n=Object(s.useState)(!1),r=Object(N.a)(n,2),c=r[0],i=r[1];return Object(s.useEffect)((function(){c?a.play():a.pause()}),[c]),Object(s.useEffect)((function(){return a.addEventListener("ended",(function(){return i(!1)})),function(){a.removeEventListener("ended",(function(){return i(!1)}))}}),[]),[c,function(){return i(!c)}]}(t.url),i=Object(N.a)(c,2),o=i[0],h=i[1];return e=o?"list-group-item list-group-item-action active":"list-group-item list-group-item-action",Object(n.jsx)("div",{children:Object(n.jsx)("button",{type:"button",class:e,onClick:h,children:Object(n.jsxs)("div",{className:"track-info-name-length",children:[Object(n.jsx)("div",{className:"track-info-pos",children:a.position}),Object(n.jsx)("div",{className:"track-info-title",children:a.title}),Object(n.jsx)("div",{className:"track-info-length",children:r})]})})})},L=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={selectedTrack:null},n}return Object(h.a)(a,[{key:"convertLength",value:function(){var t=this.props.track.duration,e=36e5,a=6e4,n=1e3,s=0,r=0,c=0;if(t>e){for(;t>e;)t-=e,s++;for(;t>a;)t-=a,r++;for(r<10&&(r="0"+r);t>n;)t-=n,c++;return c<10&&(c="0"+c),s+":"+r+":"+c}if(t>a&&0===s){for(;t>a;)t-=a,r++;for(;t>n;)t-=n,c++;return c<10&&(c="0"+c),r+":"+c}if(t>a&&0!==s){for(;t>a;)t-=a,r++;for(r<10&&(r="0"+r);t>n;)t-=n,c++;return c<10&&(c="0"+c),r+":"+c}for(;t>n;)t-=n,c++;return c<10&&(c="0"+c),":"+c}},{key:"render",value:function(){var t=this.props.track;return Object(n.jsx)(w,{track:t,duration:this.convertLength(t.duration),url:t.mp3,children:" "})}}]),a}(s.Component),S=function(t){var e=t.tracks,a=t.setKey;return e.filter((function(t){return t.set===a})).map((function(t){return Object(n.jsx)(L,{track:t},t.id)}))},A=function(t){var e=t.tracks,a=t.setKey,s=36e5,r=6e4,c=1e3,i=e.filter((function(t){return t.set===a})),o=i.reduce((function(t,e){return t+e.duration}),0);return Object(n.jsxs)("div",{children:[Object(n.jsx)(k,{duration:function(){var t=0,e=0,a=0;if(o>s){for(;o>s;)o-=s,t++;for(;o>r;)o-=r,e++;for(e<10&&(e="0"+e);o>c;)o-=c,a++;return a<10&&(a="0"+a),t+":"+e+":"+a}if(o>r&&0===t){for(;o>r;)o-=r,e++;for(;o>c;)o-=c,a++;return a<10&&(a="0"+a),e+":"+a}if(o>r&&0!==t){for(;o>r;)o-=r,e++;for(e<10&&(e="0"+e);o>c;)o-=c,a++;return a<10&&(a="0"+a),e+":"+a}if(o>c){for(;o>c;)o-=c,a++;return a<10&&(a="0"+a),"0"+a}}(),setKey:a}),Object(n.jsx)("div",{class:"list-group",children:Object(n.jsx)(S,{tracks:i,setKey:a})})]})},P=function(t){var e=t.show.tracks,a=e.map((function(t){return t.set})),s=Object(y.a)(new Set(a)).map((function(t){return Object(n.jsx)("div",{className:"set-page",children:Object(n.jsx)(A,{tracks:e,setKey:t})},t)}));return Object(n.jsxs)("div",{className:"set-details",children:[Object(n.jsx)("h2",{className:"set-title",children:"Set List"}),s]})},T=function(t){var e=t.show;return Object(n.jsxs)("div",{className:"show-details",children:[Object(n.jsx)("div",{className:"meta",children:Object(n.jsx)(g,{show:e})}),Object(n.jsx)("div",{className:"set-list",children:Object(n.jsx)(P,{show:e})})]})},C=a(15),D=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={show:void 0,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{x.get("shows/"+this.props.match.params.date).then((function(e){console.log(e.data),t.setState({show:e.data.data,isLoading:!1})}))}catch(e){console.error(e)}}},{key:"render",value:function(){return this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsx)(T,{show:this.state.show})}}]),a}(s.Component),I=a(109),M=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:[],yearLinkListItem:null,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{x.get("/years").then((function(e){t.setState({data:e.data.data,isLoading:!1})}))}catch(e){console.error(e)}}},{key:"render",value:function(){var t=this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsx)(b,{data:this.state.data});return Object(n.jsx)(I.a,{bg:"light",expand:"sm",className:"padding-zero",children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:t})})})})}}]),a}(s.Component),R=a(25),E=a.n(R),F=a(28),U=function(t){return Object(n.jsxs)(u.b,{to:"/PhishApp/tours/".concat(t.tour.id),style:{color:"white"},className:"btn btn-primary shows",children:[" ",t.tour.name," "]})},_=function(t){var e=t.data;return void 0===e?"Loading...":e.map((function(t){return Object(n.jsx)(U,{tour:t},t.id)}))},z=function(t){return t.sort((function(t,e){var a=t.name.toUpperCase(),n=e.name.toUpperCase(),s=0;return a<n&&(s=-1),a>n&&(s=1),s}))},K=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:[],tourLinkListItem:null,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{x.get("/tours").then((function(e){t.setState({data:e.data.data,isLoading:!1})}))}catch(e){console.error(e)}}},{key:"componentDidMount",value:function(){var t=Object(F.a)(E.a.mark((function t(){var e,a,n=this;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0,a=0;case 2:return t.prev=2,t.next=5,x.get("/tours",{params:{page:++e}}).then((function(t){console.log(t.data),a=t.data.total_pages,n.state.data=n.state.data.concat(t.data.data),1!=e&&e===a&&n.setState({isLoading:!1})}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.error(t.t0);case 10:if(e<a){t.next=2;break}case 11:this.sortTours();case 12:case"end":return t.stop()}}),t,this,[[2,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"sortTours",value:function(){this.setState({data:z(this.state.data)})}},{key:"render",value:function(){var t=this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsx)(_,{data:this.state.data});return Object(n.jsx)(I.a,{bg:"light",expand:"sm",className:"padding-zero",children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:t})})})})}}]),a}(s.Component),B=function(t){return t.sort((function(t,e){var a=t.title.toUpperCase(),n=e.title.toUpperCase(),s=0;return a<n&&(s=-1),a>n&&(s=1),s}))},Y=function(t){return Object(n.jsxs)(u.b,{to:"/PhishApp/songs/".concat(t.song.id),style:{color:"white"},className:"btn btn-primary shows",children:[" ",t.song.title," "]})},q=function(t){var e=t.data;return void 0===e?"Loading...":e.map((function(t){return Object(n.jsx)(Y,{song:t},t.id)}))},H=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:[],tourLinkListItem:null,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=Object(F.a)(E.a.mark((function t(){var e,a,n=this;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0,a=0;case 2:return t.prev=2,t.next=5,x.get("/songs",{params:{page:++e}}).then((function(t){console.log(t.data),a=t.data.total_pages,n.state.data=n.state.data.concat(t.data.data),1!=e&&e===a&&n.setState({isLoading:!1})}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),console.error(t.t0);case 10:if(e<a){t.next=2;break}case 11:this.sortSongs();case 12:case"end":return t.stop()}}),t,this,[[2,7]])})));return function(){return t.apply(this,arguments)}}()},{key:"sortSongs",value:function(){this.setState({data:B(this.state.data)})}},{key:"render",value:function(){var t=this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsx)(q,{data:this.state.data});return Object(n.jsx)(I.a,{bg:"light",expand:"sm",className:"padding-zero",children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:t})})})})}}]),a}(s.Component),J=function(t){var e=t.show;function a(){return e.hasOwnProperty("date")?e.date:e.show_date}return Object(n.jsxs)(u.b,{to:"/PhishApp/shows/"+a(),style:{color:"white"},className:"btn btn-primary shows",children:[a()," ",e.hasOwnProperty("venue")?e.venue.name:e.venue_name]})},Q=function(t){return t.shows.map((function(t){return Object(n.jsx)(J,{show:t},t.id)}))},G=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isLoading:!0,searchText:"",exactShow:null,otherShows:[],songs:[],tours:[],searchResults:null,searchOutput:[]},t}return Object(h.a)(a,[{key:"handleSearch",value:function(){var t=Object(F.a)(E.a.mark((function t(){var e,a,n=this;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=0,a=0,this.state.searchText=this.props.location.state.searchText;case 3:return t.prev=3,t.next=6,x.get("/search/"+this.state.searchText,{params:{page:++e}}).then((function(t){console.log(t.data),a=t.total_pages,n.setState({searchResults:t.data,exactShow:t.data.data.exact_show,otherShows:t.data.data.other_shows,songs:t.data.data.songs,tours:t.data.data.tours,isLoading:!1})}));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(3),console.error(t.t0);case 11:if(e<a){t.next=3;break}case 12:case"end":return t.stop()}}),t,this,[[3,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.handleSearch()}},{key:"componentDidUpdate",value:function(t){t.location.state.searchText!==this.props.location.state.searchText&&this.handleSearch()}},{key:"render",value:function(){var t=this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Your Search Results"}),Object(n.jsx)("ul",{children:Object(n.jsxs)("li",{children:['Search: "',this.state.searchText,'"']})}),null!==this.state.searchResults?Object(n.jsxs)(I.a,{bg:"light",expand:"sm",children:[null!==this.state.exactShow?Object(n.jsxs)(m.a,{children:[Object(n.jsx)("h4",{children:"Exact Show"}),Object(n.jsx)("div",{className:"btn-group-vertical",children:Object(n.jsx)(J,{show:this.state.exactShow})})]}):Object(n.jsx)(n.Fragment,{}),this.state.otherShows.length>0?Object(n.jsxs)(m.a,{children:[Object(n.jsx)("h4",{children:"Other Shows on this Day"}),Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:Object(n.jsx)(Q,{shows:this.state.otherShows})})})]}):Object(n.jsx)(n.Fragment,{}),this.state.songs.length>0?Object(n.jsxs)(m.a,{children:[Object(n.jsx)("h4",{children:"Matching Songs"}),Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:Object(n.jsx)(q,{data:this.state.songs})})})]}):Object(n.jsx)(n.Fragment,{}),this.state.tours.length>0?Object(n.jsxs)(m.a,{children:[Object(n.jsx)("h4",{children:"Matching Tours"}),Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:Object(n.jsx)(_,{data:this.state.tours})})})]}):Object(n.jsx)(n.Fragment,{})]}):Object(n.jsx)("p",{children:"NO RESULTS FOUND"})]});return Object(n.jsx)("div",{style:{margin:"20px 0px 0px 20px"},children:t})}}]),a}(s.Component),V=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:[],showLinkListItem:null,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{x.get("years/"+this.props.match.params.year).then((function(e){console.log(e.data),t.setState({data:e.data.data,isLoading:!1})}))}catch(e){console.error(e)}}},{key:"render",value:function(){var t=this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsx)(Q,{shows:this.state.data});return Object(n.jsx)(I.a,{bg:"light",expand:"sm",children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:t})})})})}}]),a}(s.Component),W=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:[],showLinkListItem:null,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{x.get("tours/"+this.props.match.params.id).then((function(e){console.log(e.data),t.setState({data:e.data.data.shows,isLoading:!1})}))}catch(e){console.error(e)}}},{key:"render",value:function(){var t=this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsx)(Q,{shows:this.state.data});return Object(n.jsx)(I.a,{bg:"light",expand:"sm",children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:t})})})})}}]),a}(s.Component),X=function(t){return t.shows.tracks.map((function(t){return Object(n.jsx)(J,{show:t},t.id)}))},Z=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={data:[],showLinkListItem:null,isLoading:!0},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=this;try{x.get("songs/"+this.props.match.params.id).then((function(e){console.log(e.data),t.setState({data:e.data.data,isLoading:!1})}))}catch(e){console.error(e)}}},{key:"render",value:function(){var t=this.state.isLoading?Object(n.jsx)(C.a,{animation:"border"}):Object(n.jsx)(X,{shows:this.state.data});return Object(n.jsx)(I.a,{bg:"light",expand:"sm",children:Object(n.jsx)(m.a,{children:Object(n.jsx)("div",{className:"container bvg",children:Object(n.jsx)("div",{className:"btn-group-vertical",children:t})})})})}}]),a}(s.Component),$=a(110),tt=a(72),et=a(108),at=a(12),nt=(a(73),a(104),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).handleRoute=function(t){return function(){n.props.history.push({pathname:t})}},n.handleSearchInput=function(t){n.setState({searchText:t.target.value})},n.handleSearchSubmit=function(){n.state.searchText&&n.state.searchText.length>=3?n.props.history.push({pathname:"/PhishApp/search?term="+n.state.searchText,state:{searchText:n.state.searchText}}):n.state.searchText&&n.state.searchText.length<3?alert("Search term must be longer than 3 characters"):alert("Please enter some search text!")},n.state={searchText:""},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(I.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(I.a.Brand,{onClick:this.handleRoute("/PhishApp"),children:"PhishApp"}),Object(n.jsx)(I.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(I.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(m.a,{className:"mr-auto",children:[Object(n.jsx)(m.a.Link,{onClick:this.handleRoute("/PhishApp"),children:"Home"}),Object(n.jsx)(m.a.Link,{onClick:this.handleRoute("/PhishApp/about"),children:"About"})]}),Object(n.jsxs)($.a,{inline:!0,children:[Object(n.jsx)(tt.a,{onChange:this.handleSearchInput,value:this.state.searchText,type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(n.jsx)(et.a,{onClick:this.handleSearchSubmit,variant:"outline-info",children:"Search"})]})]})]})})}}]),a}(s.Component)),st=Object(at.f)(nt),rt=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){return Object(o.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=[];return Object(y.a)(Array(1).keys()).forEach((function(e){return t.push(Object(n.jsx)("h1",{children:"Unable to find that..."},e))})),t}}]),a}(r.a.Component),ct=function(){return Object(n.jsxs)(I.a,{bg:"light",className:"sidebar",children:[Object(n.jsx)(m.a,{className:"mr-auto",children:Object(n.jsx)(u.b,{to:"/PhishApp/years",className:"nav-link",children:"Years"})}),Object(n.jsx)(m.a,{className:"mr-auto",children:Object(n.jsx)(u.b,{to:"/PhishApp/tours",className:"nav-link",children:"Tours"})}),Object(n.jsx)(m.a,{className:"mr-auto",children:Object(n.jsx)(u.b,{to:"/PhishApp/songs",className:"nav-link",children:"Songs"})})]})},it=function(){return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)("audio",{className:"audio-element",children:Object(n.jsx)("source",{id:"audio-element-source"})}),Object(n.jsx)(st,{}),Object(n.jsxs)("div",{className:"side-and-content",children:[Object(n.jsx)(ct,{}),Object(n.jsx)("div",{className:"content-pane",children:Object(n.jsxs)(at.c,{children:[Object(n.jsx)(at.a,{exact:!0,path:"/",component:v}),Object(n.jsx)(at.a,{exact:!0,path:"/PhishApp",component:v}),Object(n.jsx)(at.a,{exact:!0,path:"/PhishApp/about",component:f}),Object(n.jsx)(at.a,{exact:!0,path:"/PhishApp/search?term=:searchText",component:G}),Object(n.jsx)(at.a,{exact:!0,path:"/PhishApp/tours",component:K}),Object(n.jsx)(at.a,{exact:!0,path:"/PhishApp/songs",component:H}),Object(n.jsx)(at.a,{exact:!0,path:"/PhishApp/years",component:M}),Object(n.jsx)(at.a,{path:"/PhishApp/years/:year",component:V}),Object(n.jsx)(at.a,{path:"/PhishApp/shows/:date",component:D}),Object(n.jsx)(at.a,{path:"/PhishApp/tours/:id",component:W}),Object(n.jsx)(at.a,{path:"/PhishApp/songs/:id",component:Z}),Object(n.jsx)(at.a,{component:rt})]})})]}),Object(n.jsx)("div",{className:"footer",children:"\xa9 2021 Caleb Tracey"})]})})},ot=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};i.a.render(Object(n.jsx)(it,{}),document.getElementById("root")),ot()},31:function(t,e,a){},48:function(t,e,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.ed057caa.chunk.js.map