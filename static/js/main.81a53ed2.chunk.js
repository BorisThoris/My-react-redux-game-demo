(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/cardFront.34e9638c.png"},19:function(e,t,a){e.exports=a.p+"static/media/cardBack.e237d232.png"},20:function(e,t,a){e.exports=a.p+"static/media/cardBack2.0c66ed35.png"},21:function(e,t,a){e.exports=a.p+"static/media/gameBoardBackground.2873992a.jpg"},22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),s=a.n(c),i=(a(27),a(28),a(2)),d=a(3),l=a(5),o=a(4),u=a(6),p=a(1),v=(a(33),a(18)),f=a.n(v),m=a(19),C=a.n(m),y=a(20),_=a.n(y),h=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onTest,a=e.saveStyle;t(),a()}},{key:"clickHandler",value:function(){this.props.onClick(this.props.id)}},{key:"render",value:function(){var e=this,t=this.props,a=t.classToAdd,r=t.disabled,c=t.intro,s={display:"inline-block"};r&&(s={display:"inline-block",opacity:"0.4",transition:"1s",transform:"scale(0.9)"});var i=null;return a?i=a:c&&(i="active"),n.a.createElement("div",{onClick:function(){e.clickHandler()},className:"flip-card ".concat(i),style:s},n.a.createElement("div",{class:"flip-card-inner"},n.a.createElement("div",{class:"flip-card-front"},n.a.createElement("img",{height:"99%",width:"95%",src:"".concat(_.a),alt:C.a})),n.a.createElement("div",{class:"flip-card-back"},n.a.createElement("h4",{class:"flip-card-number"},this.props.value),n.a.createElement("img",{style:{position:"relative",top:"0px",right:"0px"},height:"100%",width:"100%",src:"".concat(f.a),alt:"lol"}))))}}]),t}(r.Component),O=Object(p.b)(function(e){return{propss:e,cardsPressed:e.cardsPressed,intro:e.intro}},function(e){return{saveStyle:function(e){return{type:"SAVE_CARD_STYLE",elementStyle:e}},onTest:function(){return e({type:"ON_TEST"})},flipCard:function(t){e({type:"ON_CARD_FLIP",card:t})}}})(h),b=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.gameIsOver,a=e.score;return n.a.createElement("div",{id:"gameOver",style:{transition:"0.15s",opacity:"".concat(t?100:0),zIndex:"".concat(t?2:-1e3)}},n.a.createElement("div",null,"Game Over!"),n.a.createElement("div",null,"You scored"," ".concat(a)," Points!"))}}]),t}(r.Component),E=Object(p.b)(function(e){return{cards:e.cards,htmlSaved:e.htmlSaved,cardStyles:e.cardsHtml,activeCard:e.tempCurrentCard,cardTwo:e.cardTwo,disabled:e.disabled,lastCard:e.lastCard,lives:e.lives,score:e.score,gameIsOver:e.gameOver,flippedCards:e.flippedCards,cardsPressed:e.cardsPressed}},function(e){return{setIntro:function(t){return e({type:"ON_GAME_INTRO",bool:t})},onTest:function(){return e({type:"ON_TEST"})},saveCards:function(t){e({type:"SAVE_ALL_CARDS",cardArray:t})},saveCardsHtml:function(t){e({type:"SAVE_ALL_CARDS_HTML",elementArray:t})},flipCard:function(t){e({type:"ON_CARD_FLIP",card:t})},setLives:function(t){e({type:"SET_GAME_LIVES",lives:t})},unFlipCards:function(t){e({type:"UNFLIP_OLD_CARDS",cards:t})}}})(b),S=(a(34),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gameIsOver,a=e.score,r=e.lives;return n.a.createElement("div",{id:"informationDiv",style:{transition:"0.5s",opacity:"".concat(t?0:100)}},n.a.createElement("h4",{id:"scoreDiv"},"Your score: ",a),n.a.createElement("h4",{id:"livesDiv"},"Your lives: ",r))}}]),t}(r.Component)),A=Object(p.b)(function(e){return{cards:e.cards,htmlSaved:e.htmlSaved,cardStyles:e.cardsHtml,activeCard:e.tempCurrentCard,cardTwo:e.cardTwo,disabled:e.disabled,lastCard:e.lastCard,lives:e.lives,score:e.score,gameIsOver:e.gameOver,flippedCards:e.flippedCards,cardsPressed:e.cardsPressed}},function(e){return{setIntro:function(t){return e({type:"ON_GAME_INTRO",bool:t})},onTest:function(){return e({type:"ON_TEST"})},saveCards:function(t){e({type:"SAVE_ALL_CARDS",cardArray:t})},saveCardsHtml:function(t){e({type:"SAVE_ALL_CARDS_HTML",elementArray:t})},flipCard:function(t){e({type:"ON_CARD_FLIP",card:t})},setLives:function(t){e({type:"SET_GAME_LIVES",lives:t})},unFlipCards:function(t){e({type:"UNFLIP_OLD_CARDS",cards:t})}}})(S),g=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"clickHandler",value:function(){window.alert("lol")}},{key:"render",value:function(){var e=this.props.gameIsOver;return n.a.createElement("div",{id:"replayButton",style:{opacity:"".concat(e?100:0),zIndex:"".concat(e?2:-1e3)}},n.a.createElement("div",{onClick:this.clickHandler,id:"arrow"},">"))}}]),t}(r.Component)),L=Object(p.b)(function(e){return{cards:e.cards,htmlSaved:e.htmlSaved,cardStyles:e.cardsHtml,activeCard:e.tempCurrentCard,cardTwo:e.cardTwo,disabled:e.disabled,lastCard:e.lastCard,lives:e.lives,score:e.score,gameIsOver:e.gameOver,flippedCards:e.flippedCards,cardsPressed:e.cardsPressed}},function(e){return{setIntro:function(t){return e({type:"ON_GAME_INTRO",bool:t})},onTest:function(){return e({type:"ON_TEST"})},saveCards:function(t){e({type:"SAVE_ALL_CARDS",cardArray:t})},saveCardsHtml:function(t){e({type:"SAVE_ALL_CARDS_HTML",elementArray:t})},flipCard:function(t){e({type:"ON_CARD_FLIP",card:t})},setLives:function(t){e({type:"SET_GAME_LIVES",lives:t})},unFlipCards:function(t){e({type:"UNFLIP_OLD_CARDS",cards:t})}}})(g),T=(a(36),a(21)),k=a.n(T),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).onClick=function(e){var t=a.props,r=t.flipCard,n=t.cards,c=t.disabled,s=t.gameIsOver;c.includes(n[e])||s||r(e)},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){for(var e=this.props,t=e.saveCards,a=e.setIntro,r=[],n=0;n<6;n++)r.push({number:n,count:0});for(var c=[],s=0;s<12;s++)c.push({key:s,id:s,value:"empty"});for(var i=0;i<r.length;i++)for(;r[i].count<2;){var d=c[Math.floor(Math.random()*c.length)];"empty"===d.value&&(d.value=r[i].number,r[i].count++)}a(!0),setTimeout(function(){a(!1)},325),t(c)}},{key:"render",value:function(){var e=this.props,t=e.cards,a=e.saveCardsHtml,r=e.htmlSaved,c=e.cardStyles,s=e.activeCard,i=e.disabled,d=e.lastCard,l=e.setLives,o=e.lives,u=e.flippedCards,p=e.unFlipCards,v=e.cardsPressed,f=[],m=[],C=!1,y=!1;null===o&&t.length>0&&l(t.length/2);for(var _=0;_<t.length;_++)_!==s&&_!==d||(u.includes(s)||u.includes(d))&&(C=!0),i.includes(t[_])&&(C=!0,y=!0),f.push(n.a.createElement(O,{id:t[_].id,key:t[_].key,value:t[_].value,onClick:this.onClick,style:c[_]?c[_].style:null,classToAdd:!i||C?"active":null,disabled:y})),C=!1,m.push({index:t[_].id,style:{}}),y=!1;return s&&d&&2===v&&setTimeout(function(){p([s,d])},700),!r&&m.length>0&&a(m),n.a.createElement("div",{id:"appDiv"},n.a.createElement(A,null),n.a.createElement(E,null),n.a.createElement(L,null),n.a.createElement("div",{id:"gameBoard",style:{backgroundImage:"url(".concat(k.a,")")}},n.a.createElement("div",{id:"cardsDiv"},f||null)))}}]),t}(r.Component),I=Object(p.b)(function(e){return{cards:e.cards,htmlSaved:e.htmlSaved,cardStyles:e.cardsHtml,activeCard:e.tempCurrentCard,cardTwo:e.cardTwo,disabled:e.disabled,lastCard:e.lastCard,lives:e.lives,score:e.score,gameIsOver:e.gameOver,flippedCards:e.flippedCards,cardsPressed:e.cardsPressed}},function(e){return{setIntro:function(t){return e({type:"ON_GAME_INTRO",bool:t})},onTest:function(){return e({type:"ON_TEST"})},saveCards:function(t){e({type:"SAVE_ALL_CARDS",cardArray:t})},saveCardsHtml:function(t){e({type:"SAVE_ALL_CARDS_HTML",elementArray:t})},flipCard:function(t){e({type:"ON_CARD_FLIP",card:t})},setLives:function(t){e({type:"SET_GAME_LIVES",lives:t})},unFlipCards:function(t){e({type:"UNFLIP_OLD_CARDS",cards:t})}}})(D);var j=function(){return n.a.createElement("div",null,n.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=a(14),N={cardsPressed:0,score:0,lives:null,pages:{},cardsHtml:[],cards:[],disabled:[],currentPage:null,active:null,tempCurrentCard:null,lastCard:null,htmlSaved:!1,matched:!1,intro:!1,gameOver:!1,flippedCards:[]},R=function(){for(var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0,r=a.pageName?a.pageName:t.currentPage,n=Object(w.a)({},t.pages),c=t.cardsPressed,s=t.matched,i=t.htmlSaved,d=t.intro,l=t.lastCard,o=t.lives,u=t.score,p=t.gameOver,v=t.flippedCards,f=[],m=0;m<t.cards.length;m++)f.push(t.cards[m]);var C=f,y=t.cardsHtml;switch(a.type){case"ON_GAME_INTRO":d=a.bool;break;case"SET_GAME_LIVES":o=a.lives;break;case"SAVE_CARD_STYLE":break;case"SAVE_ALL_CARDS":C=a.cardArray;break;case"SAVE_ALL_CARDS_HTML":y=a.elementArray,i=!0;break;case"UNFLIP_OLD_CARDS":var _=!0,h=!1,O=void 0;try{for(var b,E=a.cards[Symbol.iterator]();!(_=(b=E.next()).done);_=!0){var S=b.value;for(var A in v)S===v[A]&&(v=v.splice(A-1,1))}}catch(D){h=!0,O=D}finally{try{_||null==E.return||E.return()}finally{if(h)throw O}}c=0,l=null,e=null;break;case"ON_CARD_FLIP":var g=t.tempCurrentCard,L=t.cards,T=t.disabled,k=L[a.card]&&L[g]&&L[a.card].value===L[g].value&&L[a.card]!==L[g];if(y[a.card]&&(y[a.card].style={backgroundColor:"red"}),s=!1,c<2&&(c++,e=a.card,l=t.tempCurrentCard,v.push(e)),2===c){if(!k){void 0!==typeof(e=a.card)&&v.push(e),void 0!==typeof l&&v.push(l),e!==l&&o--,0===o&&(p=!0);break}s=!0,u+=50,o++,c=0,T.push(L[g],L[a.card]),L.length===T.length&&window.alert("SuCcEsS")}break;default:return t}return Object(w.a)({},t,{pages:n,currentPage:r,test:"123",cards:C,cardsPressed:c,tempCurrentCard:e,lastCard:l,matched:s,htmlSaved:i,cardsHtml:y,intro:d,lives:o,score:u,gameOver:p,flippedCards:v})},P=a(10),H=Object(P.b)(R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(n.a.createElement(p.a,{store:H},n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.81a53ed2.chunk.js.map