(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),i=n.n(r),c=(n(13),n(1)),l=n(2),s=n(4),u=n(3),h=n(5),m=(n(15),n(17),20),d=800,f=600;console.log(m,d,f);var v=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.x,n=t.y;return o.a.createElement("div",{className:"Cell",style:{left:"".concat(m*e+1,"px"),top:"".concat(m*n+1,"px"),width:"".concat(m-1,"px"),height:"".concat(m-1,"px")}})}}]),e}(o.a.Component),p=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).state={cells:[],interval:100,isRunning:!1},t.runGame=function(){t.setState({isRunning:!0}),t.runIteration()},t.stopGame=function(){t.setState({isRunning:!1}),t.timeoutHandler&&(window.clearTimeout(t.timeoutHandler),t.timeoutHandler=null)},t.handleIntervalChange=function(e){t.setState({interval:e.target.value})},t.handleClick=function(e){var n=t.getElementOffset(),a=e.clientX-n.x,o=e.clientY-n.y;console.log(a);var r=Math.floor(a/m),i=Math.floor(o/m);r>0&&r<t.cols&&i>=0&&i<=t.rows&&(console.log(r,i),t.board[i][r]=!t.board[i][r]),t.setState({cells:t.makeCells()})},t.rows=f/m,t.cols=d/m,t.board=t.makeEmptyBoard(),console.log(m),t}return Object(h.a)(e,t),Object(l.a)(e,[{key:"calculateNeighbors",value:function(t,e,n){for(var a=0,o=[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]],r=0;r<o.length;r++){var i=o[r],c=n+i[0],l=e+i[1];l>=0&&l<this.cols&&c>=0&&c<this.rows&&t[c][l]&&a++}return a}},{key:"runIteration",value:function(){for(var t=this,e=this.makeEmptyBoard(),n=0;n<this.rows;n++)for(var a=0;a<this.cols;a++){var o=this.calculateNeighbors(this.board,a,n);this.board[n][a]?e[n][a]=2===o||3===o:this.board[n][a]||3!==o||(e[n][a]=!0)}this.board=e,this.setState({cells:this.makeCells()}),this.timeoutHandler=window.setTimeout(function(){t.runIteration()},this.state.interval)}},{key:"makeEmptyBoard",value:function(){for(var t=[],e=0;e<this.rows;e++){t[e]=[];for(var n=0;n<this.cols;n++)t[e][n]=!1}return t}},{key:"makeCells",value:function(){for(var t=[],e=0;e<this.rows;e++)for(var n=0;n<this.cols;n++)this.board[e][n]&&t.push({x:n,y:e});return t}},{key:"getElementOffset",value:function(){var t=this.boardRef.getBoundingClientRect(),e=document.documentElement;return{x:t.left+window.pageXOffset-e.clientLeft,y:t.top+window.pageYOffset-e.clientTop}}},{key:"render",value:function(){var t=this,e=this.state,n=e.cells,a=(e.interval,e.isRunning);return o.a.createElement("div",null,o.a.createElement("div",{className:"Board",style:{width:d,height:f,backgroundSize:"".concat(m,"px ").concat(m,"px")},onClick:this.handleClick,ref:function(e){t.boardRef=e}},n.map(function(t){return o.a.createElement(v,{x:t.x,y:t.y,key:"".concat(t.x,",").concat(t.y)})})),o.a.createElement("div",{className:"controls"},"Update every"," ",o.a.createElement("input",{value:this.state.interval,onChange:this.handleIntervalChange})," ","msec"," ",a?o.a.createElement("button",{className:"button",onClick:this.stopGame},"Stop"):o.a.createElement("button",{className:"button",onClick:this.runGame},"Run")))}}]),e}(o.a.Component),b=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.96f10bb8.chunk.js.map