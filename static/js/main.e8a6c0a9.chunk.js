(this["webpackJsonpreact-tesseract-ocr"]=this["webpackJsonpreact-tesseract-ocr"]||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(63),i=n.n(a),o=n(9),u=n(12),s=n(4),l=n(27),b=n(66),f=(n(88),n(144)),d=n(145),h=n(146),j=n(147),p=n(148),O=n(142),x=n(68),v=n.n(x),g=n(75),w=n.n(g),m=n(76),k=n.n(m),y=n(77),S=n.n(y),z=n(73),R=n.n(z),C=n(72),H=n.n(C),W=n(74),E=n.n(W),I=n(2);function M(e){var t,n,c,a,i,x,g,m=Object(r.useState)(null!==(t=e.size)&&void 0!==t?t:{width:.95*window.screen.width,height:.75*window.screen.height}),y=Object(s.a)(m,2),z=y[0],C=y[1],W=Object(r.useState)(null!==(n=e.language)&&void 0!==n?n:"eng"),M=Object(s.a)(W,1)[0],T=Object(r.useState)(),L=Object(s.a)(T,2),B=L[0],P=L[1],A=Object(r.useState)(),D=Object(s.a)(A,2),U=D[0],J=D[1],Z=Object(r.useState)((function(){return e.videcropHeightRatio?e.videcropHeightRatio>1?1:e.videcropHeightRatio:.2})),q=Object(s.a)(Z,2),F=q[0],N=(q[1],Object(r.useState)()),G=Object(s.a)(N,2),K=G[0],Q=G[1],V=Object(r.useState)(),X=Object(s.a)(V,2),Y=X[0],$=X[1],_=Object(r.useState)(1),ee=Object(s.a)(_,2),te=ee[0],ne=ee[1],re=Object(r.useState)(),ce=Object(s.a)(re,2),ae=ce[0],ie=ce[1],oe=Object(r.useState)([]),ue=Object(s.a)(oe,2),se=(ue[0],ue[1],Object(r.useRef)(null)),le=Object(r.useState)(),be=Object(s.a)(le,2),fe=be[0],de=be[1],he=Object(r.useState)(),je=Object(s.a)(he,2),pe=je[0],Oe=je[1],xe=Object(r.useState)(),ve=Object(s.a)(xe,2),ge=ve[0],we=ve[1],me=Object(r.useState)(),ke=Object(s.a)(me,2),ye=ke[0],Se=ke[1],ze=Object(r.useState)(),Re=Object(s.a)(ze,2),Ce=(Re[0],Re[1]),He=Object(r.useState)(),We=Object(s.a)(He,2),Ee=We[0],Ie=We[1],Me=Object(r.useState)(1),Te=Object(s.a)(Me,2),Le=Te[0],Be=Te[1],Pe=Object(r.useState)(1),Ae=Object(s.a)(Pe,2),De=Ae[0],Ue=Ae[1],Je=Object(r.useState)("camera"),Ze=Object(s.a)(Je,2),qe=Ze[0],Fe=Ze[1],Ne=Object(r.useState)(null!==(c=e.resultMode)&&void 0!==c?c:"line"),Ge=Object(s.a)(Ne,2),Ke=Ge[0],Qe=(Ge[1],Object(r.useState)(0)),Ve=Object(s.a)(Qe,2),Xe=Ve[0],Ye=Ve[1],$e=Object(r.useState)(""),_e=Object(s.a)($e,2),et=_e[0],tt=_e[1],nt=Object(r.useState)(null!==(a=e.confidence)&&void 0!==a?a:20),rt=Object(s.a)(nt,1)[0],ct=Object(r.useRef)(null),at=Object(r.useState)(!1),it=Object(s.a)(at,2),ot=it[0],ut=it[1],st=Object(r.useRef)(!1),lt=Object(r.useRef)(null),bt=Object(r.useRef)(null),ft=Object(r.useRef)(),dt=Object(r.useRef)(),ht=Object(r.useRef)(null);Object(r.useEffect)((function(){if(K&&Y){var e=K.height*(1-F)/2;0===K.left&&P({top:K.top,left:K.left,width:K.width,height:e}),0===K.left&&J({top:K.height-e,left:K.left,width:K.width,height:e}),ie({top:Y.height*(1-F)/2,left:0,width:Y.width,height:Y.height*F})}}),[K,Y,te,F]);var jt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var r=new FileReader;r.readAsDataURL(t),r.onload=function(){return e(r.result)},r.onerror=function(e){return n(e)}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var n,r,c,a,i,u;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ct.current&&bt.current){e.next=2;break}return e.abrupt("return");case 2:if(ct.current.height=t.height,ct.current.width=t.width,n=ct.current.getContext("2d"),r=t.top,c=t.left,a=t.height,i=t.width,!n){e.next=10;break}return n.drawImage(bt.current,c,r,i,a,0,0,i,a),u=ct.current.toDataURL().toString(),e.abrupt("return",u);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ot=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t,n){var r,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vt(t);case 2:if(r=e.sent,c=gt(r,z),de(t),Ue(c),!n){e.next=14;break}return Oe(t),Be(c),e.t0=Ie,e.next=12,kt(t);case 12:e.t1=e.sent,(0,e.t0)(e.t1);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),xt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t,n){var r,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vt(t);case 2:if(r=e.sent,c=gt(r,z),Oe(t),Be(c),e.t0=!n,!e.t0){e.next=13;break}return e.t1=Ie,e.next=11,kt(t);case 11:e.t2=e.sent,(0,e.t1)(e.t2);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),vt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new Image).src=t,e.next=4,n.decode();case 4:return e.abrupt("return",{width:n.naturalWidth,height:n.naturalHeight});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),gt=function(e,t){if(t.height>=e.height&&t.width>=e.width)return 1;var n=t.width/e.width,r=t.height/e.height;return n>r?r:n},wt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(){var t,n,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((n=null===(t=se.current)||void 0===t?void 0:t.files)&&n.length>0)){e.next=10;break}return Fe("recognize"),e.next=5,jt(n[0]);case 5:return r=e.sent,e.next=8,Ot(r,!0);case 8:e.next=11;break;case 10:de(void 0);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),mt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(){var t,n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!ot){e.next=2;break}return e.abrupt("return");case 2:if("camera"!==qe){e.next=15;break}return e.next=5,pt(Object(l.a)(Object(l.a)({},Y),{},{top:0,left:0}));case 5:return(t=e.sent)&&Ot(t),e.next=9,pt(ae);case 9:(n=e.sent)&&xt(n),Ie(void 0),Fe("recognize"),e.next=26;break;case 15:if("crop"!==qe||!ye){e.next=19;break}ye.getCroppedCanvas().toBlob(function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=6;break}return e.next=3,jt(t);case 3:n=e.sent,xt(n),Fe("recognize");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=26;break;case 19:if(e.t0=pe,!e.t0){e.next=26;break}return e.t1=Ie,e.next=24,kt(pe);case 24:e.t2=e.sent,(0,e.t1)(e.t2);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),kt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",dt.current.recognize(t).then((function(e){return console.log("result",e),Ye(1),{success:!0,result:e}})).catch((function(e){return console.error("recognize",e),{success:!1,error:e}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){ot&&!lt.current?(lt.current=setInterval(Object(u.a)(Object(o.a)().mark((function t(){var n,r;return Object(o.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(st.current){t.next=23;break}return st.current=!0,t.next=4,pt(ae);case 4:if(!(n=t.sent)){t.next=22;break}return we(n),t.next=9,kt(n);case 9:if(r=t.sent,Ie(r),t.t0=e.onExamineResult&&r.result,!t.t0){t.next=16;break}return t.next=15,e.onExamineResult(r.result);case 15:t.t0=t.sent;case 16:if(!t.t0){t.next=22;break}return t.next=19,xt(n,!0);case 19:return Fe("recognize"),ut(!1),t.abrupt("return");case 22:setTimeout((function(){st.current=!1}),100);case 23:case"end":return t.stop()}}),t)}))),100),console.log("intervalRef.current.set",lt.current)):(console.log("intervalRef.current.clear",lt.current),st.current=!1,lt.current&&clearInterval(lt.current),lt.current=null)}),[ot]);var yt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(){var t;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}});case 3:t=e.sent,bt.current&&t&&(bt.current.srcObject=t,ft.current=t,bt.current.play().then((function(){$({width:bt.current.videoWidth,height:bt.current.videoHeight}),Q({top:bt.current.offsetTop,left:bt.current.offsetLeft,width:bt.current.offsetWidth,height:bt.current.offsetHeight}),ne(bt.current.offsetHeight/bt.current.videoHeight),C({height:bt.current.offsetHeight+100,width:Math.min(bt.current.offsetWidth,z.width)})}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.toString());case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),St=function(){ft&&ft.current&&ft.current.getTracks().forEach((function(e){e.stop()})),console.log("video stop")};Object(r.useEffect)((function(){var e,t,n,r,c;console.log("videoSize",Y,null===(e=bt.current)||void 0===e?void 0:e.offsetHeight,null===(t=bt.current)||void 0===t?void 0:t.offsetWidth,null===(n=bt.current)||void 0===n?void 0:n.offsetTop,null===(r=bt.current)||void 0===r?void 0:r.offsetLeft,null===(c=bt.current)||void 0===c?void 0:c.offsetParent),console.log("cropArea",ae)}),[Y]);var zt,Rt=function(){var e=Object(u.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return dt.current=v.a.createWorker({logger:function(e){console.log(e),"recognizing text"===e.status?Ye(e.progress<.02?.02:e.progress):Ye(.01)}}),e.next=3,dt.current.load();case 3:return e.next=5,dt.current.loadLanguage(M);case 5:return e.next=7,dt.current.initialize(M);case 7:return e.next=9,yt();case 9:Fe("camera");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ct=function(){var e=Object(u.a)(Object(o.a)().mark((function e(){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=dt.current,!e.t0){e.next=4;break}return e.next=4,dt.current.terminate();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){return Rt(),function(){St(),Ct()}}),[]),Object(r.useEffect)((function(){"camera"===qe?yt():St()}),[qe]),Object(I.jsxs)(f.a,{style:{height:z.height,width:z.width,position:"relative",border:"1px solid Black",backgroundColor:"black",opacity:"0.8",margin:"auto"},children:[Object(I.jsx)(f.a,{style:{position:"absolute",left:0,right:0,top:0,bottom:0},children:Object(I.jsxs)(f.a,{style:{position:"relative",overflow:"visible"},children:["camera"===qe&&Object(I.jsx)("video",{ref:bt,autoPlay:!0,muted:!0,playsInline:!0,style:{maxWidth:z.width}}),"camera"===qe&&B&&Object(I.jsx)(f.a,{style:Object(l.a)(Object(l.a)({},B),{},{position:"absolute",opacity:"0.6",background:"green"}),children:ge&&ot&&Object(I.jsx)("img",{src:ge,style:{maxWidth:"100%",maxHeight:"100%"}})}),"camera"===qe&&U&&Object(I.jsx)(f.a,{style:Object(l.a)(Object(l.a)({},U),{},{position:"absolute",opacity:"0.6",background:"green"})}),"crop"===qe&&Object(I.jsx)(b.a,{height:z.height,width:z.width,zoomTo:De,src:fe,viewMode:1,minCropBoxHeight:10,minCropBoxWidth:10,background:!1,responsive:!0,checkOrientation:!1,onInitialized:function(e){Se(e)},guides:!0,style:{maxHeight:z.height,maxWidth:z.width}}),"recognize"===qe&&pe&&Object(I.jsx)("img",{ref:ht,style:{zoom:Le},src:pe,alt:"cropped"}),Object(I.jsx)("canvas",{ref:ct,hidden:!0}),Ee&&Ee.result&&(!1===ot&&1===Xe||!0===ot)&&(zt="paragraph"===Ke?Ee.result.data.paragraphs:"word"===Ke?Ee.result.data.words:Ee.result.data.lines,zt.map((function(t,n){var r,c,a,i,s="".concat(Ke,"-").concat(n);return t.confidence>rt?Object(I.jsxs)("div",{id:s,onClick:Object(u.a)(Object(o.a)().mark((function n(){return Object(o.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s!==et){n.next=9;break}if(tt(""),Ce(""),n.t0=e.onSelect,!n.t0){n.next=7;break}return n.next=7,e.onSelect("");case 7:n.next=15;break;case 9:if(tt(s),Ce(t.text),n.t1=e.onSelect,!n.t1){n.next=15;break}return n.next=15,e.onSelect(t.text);case 15:case"end":return n.stop()}}),n)}))),style:{position:"absolute",left:t.bbox.x0*(ot?te:Le)+(ot?0:(z.width-Le*(null!==(r=null===(c=ht.current)||void 0===c?void 0:c.offsetWidth)&&void 0!==r?r:0))/2),top:ot?(t.bbox.y0+((null!==(a=null===Y||void 0===Y?void 0:Y.height)&&void 0!==a?a:0)-(null!==(i=null===ae||void 0===ae?void 0:ae.height)&&void 0!==i?i:0))/2)*te:t.bbox.y0*Le,width:(t.bbox.x1-t.bbox.x0)*(ot?te:Le),height:(t.bbox.y1-t.bbox.y0)*(ot?te:Le),border:et===s?"1px solid green":"1px dashed red",backgroundColor:"transparent",color:"red",overflow:"visible"},children:[" ",Object(I.jsx)("div",{style:{position:"relative",overflow:"visible",height:"100%"},children:Object(I.jsx)("div",{style:{position:"absolute",width:"80%",bottom:"100%",color:"#fb4d3d",overflow:"hidden",fontSize:"10px",display:"block",whiteSpace:"nowrap"},children:t.text})})]},s):null})))]})}),!1===ot&&"recognize"===qe&&Xe>0&&Xe<1&&Object(I.jsx)(f.a,{sx:{top:null!==(i=null===U||void 0===U?void 0:U.top)&&void 0!==i?i:0,left:0,bottom:(null!==(x=null===U||void 0===U?void 0:U.height)&&void 0!==x?x:0)+(null!==(g=null===U||void 0===U?void 0:U.top)&&void 0!==g?g:0),right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(I.jsxs)(f.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(I.jsx)(d.a,{size:25,variant:"determinate",value:100*Xe}),Object(I.jsx)(f.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center"},children:Object(I.jsx)(h.a,{variant:"caption",component:"div",color:"text.secondary",fontSize:"20px",sx:{width:z.width},children:"".concat(Math.round(100*Xe),"%")})})]})}),Object(I.jsx)(j.a,{"aria-label":"add",size:"small",style:{position:"absolute",bottom:50,right:5},onClick:function(){Fe("camera"),de(void 0),Oe(void 0),Ie(void 0)},children:Object(I.jsx)(H.a,{})}),Object(I.jsx)(j.a,{"aria-label":"upload",size:"small",style:{position:"absolute",bottom:5,right:5},onClick:function(){se.current&&(se.current.click(),se.current.files=null)},children:Object(I.jsx)(R.a,{})}),Object(I.jsx)(j.a,{onClick:function(){Fe("crop"),Ie(void 0)},size:"small",style:{position:"absolute",bottom:95,right:5},children:Object(I.jsx)(E.a,{})}),Object(I.jsx)(j.a,{"aria-label":"Take Photo",size:"large",onClick:mt,style:{position:"absolute",bottom:5,left:z.width/2-28},children:Object(I.jsx)(w.a,{fontSize:"large"})}),Object(I.jsx)(p.a,{"aria-label":"Zoom In",onClick:function(){"recognize"===qe?Be((function(e){return e+.1})):"crop"===qe&&Ue((function(e){return e+.1}))},size:"large",style:{position:"absolute",bottom:0,right:z.width/2-100},children:Object(I.jsx)(k.a,{fontSize:"large",color:"info"})}),Object(I.jsx)(p.a,{"aria-label":"Zoom Out",onClick:function(){"recognize"===qe?Be((function(e){return e-.1})):"crop"===qe&&Ue((function(e){return e-.1}))},size:"large",style:{position:"absolute",bottom:0,left:z.width/2-100},children:Object(I.jsx)(S.a,{fontSize:"large",color:"info"})}),Object(I.jsx)(O.a,{sx:{position:"absolute",bottom:5,left:5,backgroundColor:"white",margin:0,borderRadius:"20px",fontSize:"8px"},color:"secondary",checked:ot,onChange:function(e,t){return ut(t)}}),Object(I.jsx)("input",{accept:"images/*, image/*",ref:se,type:"file",onChange:wt,onClick:function(e){e.target.value=""},hidden:!0})]})}var T=function(){var e=c.a.useState(null),t=Object(s.a)(e,2),n=(t[0],t[1],Object(r.useState)("")),a=Object(s.a)(n,2),i=a[0],l=a[1],b=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.data.lines.find((function(e){return e.text.startsWith("Serial Number:")})))){e.next=4;break}return l(n.text),e.abrupt("return",!0);case 4:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)("div",{style:{textAlign:"center"},children:[Object(I.jsx)("div",{style:{margin:"auto",fontSize:"30px"},children:"Result: ".concat(i)}),Object(I.jsx)(M,{onExamineResult:b,size:{width:640,height:480},onSelect:f})]})};i.a.render(Object(I.jsx)(T,{}),document.querySelector("#root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.e8a6c0a9.chunk.js.map