(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),c=a.n(i),l=a(8),s=a.n(l),o=a(16),m=a(2),d=a(3),u=a(5),v=a(4),h=a(6),p=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={term:""},a.handleInputChange=function(e){a.setState({term:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),a.props.onFormSubmit(a.state.term)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar ui segment"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Video Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:this.handleInputChange,placeholder:"Enter search term and press enter"}))))}}]),t}(r.a.Component),f=a(17),b=a.n(f).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,key:"AIzaSyAnGilVGrFcD4pV_VxLUzvozPPkTgW2TCs"}}),E=(a(45),function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet;return r.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},r.a.createElement("img",{className:"ui image",alt:n.description,src:n.thumbnails.medium.url}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},n.title)))}),S=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map(function(e){return r.a.createElement(E,{key:e.id.videoId||e.id.playlistId,onVideoSelect:a,video:e})});return r.a.createElement("div",{className:"ui relaxed divided list"},n)},g=function(e){var t=e.video;if(!t)return r.a.createElement("div",null,"Loading...");var a="https://youtube.com/embed/".concat(t.id.videoId);return r.a.createElement("div",null,r.a.createElement("div",{className:"ui embed"},r.a.createElement("iframe",{title:"videoplayer",src:a})),r.a.createElement("div",{className:"ui segment"},r.a.createElement("h4",{className:"ui header"},t.snippet.title),r.a.createElement("p",null,t.snippet.description)))},y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={videos:[],selectedVideo:null},a.handelTermSubmit=function(){var e=Object(o.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.get("/search",{params:{q:t}});case 2:n=e.sent,a.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.handleVideoSelect=function(e){a.setState({selectedVideo:e})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=["trendings","football","children stories","technology","music","funny videos"],t=e[Math.floor(Math.random()*e.length)];this.handelTermSubmit(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(p,{onFormSubmit:this.handelTermSubmit}),r.a.createElement("div",{className:"ui grid"},r.a.createElement("div",{className:"ui row"},r.a.createElement("div",{className:"eleven wide column"},r.a.createElement(g,{video:this.state.selectedVideo})),r.a.createElement("div",{className:"five wide column"},r.a.createElement(S,{onVideoSelect:this.handleVideoSelect,videos:this.state.videos})))))}}]),t}(r.a.Component);c.a.render(r.a.createElement(y,null),document.querySelector("#root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dfdfc9b0.chunk.js.map