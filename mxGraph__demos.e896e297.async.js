"use strict";(self.webpackChunkdt_react_component=self.webpackChunkdt_react_component||[]).push([[2019,7919],{18406:function(I,f,e){e.r(f);var y=e(82548),g=e.n(y),h=e(58570),E=e(50959),a=e(9995),r=e(50741),n=e(3846),t=e(8950),_=e(83076),i=e(11527);f.default=function(){return(0,i.jsx)(r.MxGraphContainer,{style:{height:400},config:{tooltips:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",childNode:[]}]}]}]}],onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderActions:function(m){return(0,i.jsxs)("div",{style:{display:"grid",gridGap:5,gridTemplateColumns:"15px 15px"},children:[(0,i.jsx)(h.default,{title:"\u653E\u5927",children:(0,i.jsx)(n.Z,{onClick:function(){return m.zoomIn()}})}),(0,i.jsx)(h.default,{title:"\u7F29\u5C0F",children:(0,i.jsx)(t.Z,{onClick:function(){return m.zoomOut()}})})]})},onRenderCell:function(m){if(m.vertex&&m.value){var v=m.value;if(v)return a.renderToString((0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:v.taskName}),(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:v.taskId})]}))}return""},onRenderTooltips:function(m){return m.vertex&&m.value?m.value.taskName:""}})}},6972:function(I,f,e){e.r(f);var y=e(50959),g=e(9995),h=e(50741),E=e(83076),a=e(11527);f.default=function(){return(0,a.jsx)(h.MxGraphContainer,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDrawVertex:function(n){var t=["#fffbe6","#e6f6ff","#f5ffe6","#fff1f0","#e6e9f2"],_=["#fdb313","#3f87ff","#12bc6a","#fe615c","#5b6da6"];return"whiteSpace=wrap;fillColor="+t[n.taskType-1]+";strokeColor="+_[n.taskType-1]+";"},onContextMenu:function(n,t){var _=["\u6267\u884C\u4E2D","\u90E8\u7F72\u4E2D","\u53D6\u6D88\u4E2D","\u8FD0\u884C\u6210\u529F","\u8FD0\u884C\u5931\u8D25"];return t.vertex?[{id:"operation",title:_[n.taskType-1],callback:function(){alert("\u5F53\u524D vertex \u5904\u4E8E"+_[n.taskType-1])}},{id:"remove",title:"\u5220\u9664\u5F53\u524D\u8282\u70B9",callback:function(){console.log("\u5220\u9664")}}]:[{id:"remove",title:"\u5220\u9664\u8FDE\u7EBF",callback:function(){console.log("\u5220\u9664")}}]},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return g.renderToString((0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:t.taskName}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:t.taskId})]}))}return""}})}},80753:function(I,f,e){e.r(f);var y=e(50959),g=e(9995),h=e(50741),E=e(83076),a=e(11527);f.default=function(){return(0,a.jsx)(h.MxGraphContainer,{enableDrag:!0,style:{height:400},config:{tooltips:!1,connectable:!0,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onDropWidgets:function(n,t,_,i,p){console.group("onDropWidgets"),console.log("node:",n),console.log("graph:",t),console.log("target:",_),console.log("x and y:",i,p),console.groupEnd();var m="randomId__"+new Date().valueOf();t.insertVertex(t.getDefaultParent(),m,{taskName:n.innerText,taskId:m},i,p,210,50,"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;")},onCellsChanged:function(n){console.group("onCellsChanged"),console.log("cell:",n),console.groupEnd()},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return g.renderToString((0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:t.taskName}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:t.taskId})]}))}return""},onGetPreview:function(n){var t=document.createElement("div");return t.style.width="210px",t.style.height="50px",t.style.border="1px solid #ddd",t.style.textAlign="center",t.dataset.name=n.innerText,t.innerHTML=g.renderToString((0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{children:"\u65B0\u8282\u70B9"}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:n.innerText})]})),t},onRenderWidgets:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{style:{height:20,background:"#ddd"},children:"\u62D6\u62FD\u7EC4\u4EF6"}),(0,a.jsxs)("ul",{style:{listStyle:"none",margin:0,padding:0},children:[(0,a.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D1"}),(0,a.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D2"}),(0,a.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D3"}),(0,a.jsx)("li",{className:h.WIDGETS_PREFIX+"__",style:{cursor:"move",margin:"5px 0"},children:"\u4F60\u597D4"})]})]})}})}},20286:function(I,f,e){e.r(f);var y=e(50959),g=e(9995),h=e(50741),E=e(83076),a=e(11527);f.default=function(){return(0,a.jsx)(h.MxGraphContainer,{style:{height:400},config:{tooltips:!1,highlight:!0},graphData:[{taskId:"test-1",taskName:"\u4F60\u597D-1",taskType:1,childNode:[{taskId:"test-11",taskName:"\u4F60\u597D-11",taskType:2,childNode:[]},{taskId:"test-12",taskName:"\u4F60\u597D-12",taskType:3,childNode:[{taskId:"test-21",taskName:"\u4F60\u597D-21",taskType:4,childNode:[{taskId:"test-31",taskName:"\u4F60\u597D-31",taskType:5,childNode:[]}]}]}]}],onClick:function(n,t,_){console.group("onClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",_.target),console.groupEnd()},onDoubleClick:function(n,t,_){console.group("onDoubleClick"),console.log("\u5F53\u524D\u70B9\u51FB\u7684 cell \u662F:",n),console.log("\u5F53\u524D\u70B9\u51FB\u7684 graph \u662F:",t),console.log("\u5F53\u524D\u70B9\u51FB\u7684 dom \u662F:",_.target),console.groupEnd()},onContainerChanged:function(n){console.group("onContainerChanged"),console.log(n),console.groupEnd()},onKeyDown:function(){return[{id:"remove",method:"bindControlKey",keyCode:8,func:function(){alert("\u5220\u9664")}}]},onContextMenu:function(){return[{id:"remove",title:"\u5220\u9664"}]},onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#f5ffe6;strokeColor=#12bc6a;"},onRenderCell:function(n){if(n.vertex&&n.value){var t=n.value;if(t)return g.renderToString((0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:t.taskName}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{children:t.taskId})]}))}return""}})}},49636:function(I,f,e){e.r(f);var y=e(93525),g=e.n(y),h=e(57213),E=e.n(h),a=e(52510),r=e.n(a),n=e(54306),t=e.n(n),_=e(50959),i=e(9995),p=e(50741),m=e(83076),v=e(11527);f.default=function(){var k=(0,_.useState)(!1),S=t()(k,2),s=S[0],P=S[1],b=(0,_.useState)("b"),A=t()(b,2),O=A[0],j=A[1],U=(0,_.useState)([{metaId:"1",metaInfo:{name:"tableName",type:1,list:["a","b","c","d"]},childNode:[{metaId:"2",metaInfo:{name:"tableName",type:2,list:["1-c"]}},{metaId:"3",metaInfo:{name:"tableName",type:2,list:["1-c"]}}]}]),T=t()(U,2),N=T[0],L=T[1],C=function(o){return o.metaId==="1"?{width:194,height:120}:{width:196,height:54}};return(0,v.jsx)(p.MxGraphContainer,{direction:"west",loading:s,style:{height:400},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,vertexMovable:!1,defaultEdgeStyle:function(o){var l,c=o.mxConstants,u=o.mxEdgeStyle;return l={},r()(l,c.STYLE_ROUNDED,1),r()(l,c.STYLE_CURVED,0),r()(l,c.STYLE_EDGE,u.EntityRelation),l},getPortOffset:function(o,l){var c=o[l?"visibleSourceState":"visibleTargetState"].text.node.querySelectorAll("div")[1],u=c.querySelector("li[data-id="+O+"]")||c.querySelector("li");return u}},vertexKey:"metaId",onClick:function(o,l,c){o.value.metaId==="1"&&(P(!0),setTimeout(function(){var u,x=[E()(E()({},N[0]),{},{childNode:[],parentNode:[]})],D=Math.random()>.5?"childNode":"parentNode",R=Math.floor(Math.random()*5+1);(u=x[0][D]).push.apply(u,g()(new Array(R).fill({}).map(function(W,B){return{metaId:"1-"+B,metaInfo:{name:"tableName",type:2,list:["1-c"]}}})));var M=c.target;j(M.dataset.id),L(x),P(!1)},300))},onGetSize:C,graphData:N,onDrawVertex:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onDrawEdge:function(){return"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;"},onRenderCell:function(o){if(o.vertex&&o.value){var l=o.value;if(l){var c=C(l);return i.renderToString((0,v.jsxs)("div",{style:{overflow:"hidden",width:c.width,height:c.height},children:[l.metaInfo.name,(0,v.jsx)("hr",{style:{borderTop:"1px solid #ddd",margin:0}}),(0,v.jsx)("div",{style:{width:"100%",overflow:"auto"},children:(0,v.jsx)("ul",{style:{listStyle:"none",margin:0,padding:0},children:l.metaInfo.list.map(function(u){return(0,v.jsx)("li",{"data-id":u,style:{height:20,borderBottom:"1px solid #ddd",background:O===u?"red":"transparent"},children:u},u)})})})]}))}}return""}})}},68470:function(I,f,e){e.r(f),e.d(f,{default:function(){return P}});var y=e(51317),g=e(96169),h=e(82548),E=e(58570),a=e(52510),r=e.n(a),n=e(93525),t=e.n(n),_=e(54306),i=e.n(_),p=e(50959),m=e(9995),v=e(50741),k=[{metaId:"test-1",metaInfo:{name:"tableName",type:1},childNode:[{metaId:"test-2",metaInfo:{name:"tableName2",type:2}},{metaId:"test-3",metaInfo:{name:"tableName3",type:2}},{metaId:"test-4",metaInfo:{name:"tableName4",type:2}},{metaId:"test-5",metaInfo:{name:"tableName5",type:2}}],parentNode:[{metaId:"test-6",metaInfo:{name:"tableName6",type:3}},{metaId:"test-7",metaInfo:{name:"tableName7",type:3}},{metaId:"test-8",metaInfo:{name:"tableName8",type:3}},{metaId:"test-9",metaInfo:{name:"tableName9",type:3}}]}],S=e(83076),s=e(11527),P=function(){var b=(0,p.useState)(!1),A=i()(b,2),O=A[0],j=A[1],U=(0,p.useState)(t()(k)),T=i()(U,2),N=T[0],L=T[1];return(0,s.jsx)(v.MxGraphContainer,{direction:"west",loading:O,style:{height:300},vertexSize:{width:196,height:54},config:{tooltips:!1,connectable:!1,highlight:!1,toolbarStyle:{bottom:100,right:0,top:"initial"},defaultEdgeStyle:function(d){var o,l=d.mxConstants,c=d.mxEdgeStyle;return o={},r()(o,l.STYLE_ROUNDED,1),r()(o,l.STYLE_CURVED,0),r()(o,l.STYLE_EDGE,c.EntityRelation),o}},vertexKey:"metaId",onContextMenu:function(d,o){return o.vertex?[{id:"insert",title:"\u63D2\u5165"},{id:"remove",title:"\u5220\u9664"}]:[]},onClick:function(d,o,l){var c=l.target;c.closest(".loadData")&&(j(!0),setTimeout(function(){L(function(u){for(var x=t()(u);x.length;){var D=x.pop();if(D.metaId===d.value.metaId){var R="randomId__"+new Date().valueOf(),M=d.value.metaInfo.type===2?"childNode":"parentNode";D[M]=D[M]||[],D[M].push({metaId:R,metaInfo:{name:R+"tableName",type:D.metaInfo.type}});break}x.push.apply(x,t()(D.childNode||[])),x.push.apply(x,t()(D.parentNode||[]))}return t()(u)}),j(!1)},300))},graphData:N,onDrawVertex:function(d){return["","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;","whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;"][d.metaInfo.type]},onDrawEdge:function(d,o){return d.value.metaInfo.type===3?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#26D6AE;":o.value.metaInfo.type===2?"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#7460EF;":"whiteSpace=wrap;fillColor=#ffffff;strokeColor=#3F87FF;"},onRenderActions:function(d,o){var l=o.mxOutline;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,s.jsx)("button",{onClick:function(){return d.center(!0,!0)},children:(0,s.jsx)(E.default,{title:"\u5C45\u4E2D",children:"center"})}),(0,s.jsx)("button",{onClick:function(){return g.default.success("download successfully")},children:(0,s.jsx)(E.default,{title:"\u4E0B\u8F7D",children:"download"})})]}),(0,s.jsxs)("div",{style:{marginTop:10},children:[(0,s.jsx)("button",{onClick:function(){var u=document.getElementById("outline");u.innerHTML?u.innerHTML="":new l(d,u)},children:(0,s.jsx)(E.default,{title:"\u5BFC\u822A\u5668",children:"navigator"})}),(0,s.jsx)("div",{id:"outline"})]})]})},onRenderCell:function(d){if(d.vertex&&d.value){var o=d.value;if(o){var l,c=o.metaInfo.type===3,u=c?"left":"right";return m.renderToString((0,s.jsxs)("div",{style:{position:"relative",width:196,height:54,paddingTop:10},children:[(0,s.jsx)("span",{children:o.metaInfo.name}),o.metaInfo.type!==1&&(0,s.jsx)("img",{className:"loadData",width:14,height:14,style:(l={cursor:"pointer",position:"absolute"},r()(l,u,0),r()(l,"top","50%"),r()(l,"transform","translate("+(c?"-50%":"50%")+",-50%)"),l),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAAXNSR0IArs4c6QAAADNQTFRFAAAAscTOtr/Isb7HsLzGsL7Frr3Fr73Gr7zFr73Frr3FrrzFrrzGrrzF5+vt5+vu////mHsMmQAAAA10Uk5TABocTmtum7bZ8vP8/XH+TQkAAACASURBVCjPdVLZAoAgCMMjb8r//9oOjazcnpApzAFRg7Y+pBS81TRCucwd2aknbyIPiObOL4VfKEu//8kfzPVGRf4hnn2cHLdNQnfoFD1cq4RZk+UZwZb8nPAU5kSg1PpWQVOQ/sTaCVgKNody4QdHS9bREmwitB0PCo8WL8NsfXarIha/m4rePQAAAABJRU5ErkJggg=="})]}))}}return""},children:function(){return(0,s.jsx)("div",{children:(0,s.jsxs)("ul",{style:{listStyle:"none",display:"flex",justifyContent:"center",gap:"15px"},children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(38, 214, 174)"}}),"1"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(63, 135, 255)"}}),"2"]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{style:{display:"inline-block",width:12,height:12,marginRight:5,background:"rgb(116, 96, 239)"}}),"3"]})]})})}})}},83076:function(){}}]);
