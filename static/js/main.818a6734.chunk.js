(this["webpackJsonpMio-anniversary"]=this["webpackJsonpMio-anniversary"]||[]).push([[0],Array(21).concat([function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),s=n.n(r),c=(n(27),n(16)),o=(n(28),n(3)),u=n(6),m=n(5),l=n(4),p=(n(29),n(1)),j=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{id:"mio"})}}]),n}(a.Component),d=(n(31),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"mio-stage",children:Object(p.jsx)(j,{})})}}]),n}(a.Component)),b=n(12),f="4x3",h=[[f,f,f,f,f]],O=n(11),g=(n(32),function(e){return e.disablePop?0:Math.floor(3*Math.random())*Math.floor(3*Math.random()+2)}),v=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).getDefautState=function(){return{popTime:g(e.props),isDespawn:!1}},e.state=e.getDefautState(),e.getSpawnTime=function(){var t=e.state.popTime;return.5+Math.floor(t/6)},e.resetState=function(){e.setState(e.getDefautState())},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(t!==e.props&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(O.a)(e)),1e3*e.getSpawnTime())),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.popTime,n=e.isDespawn,a=n?2*this.getSpawnTime():this.getSpawnTime(),i={animationName:n?"miofa-despawn":"miofa-spawn, miofa-animate",animationDuration:a+"s, "+t+"s",animationDelay:"0s, "+a+"s"};return Object(p.jsxs)("div",{className:"miofa-container",style:i,onLoad:this.check,children:[0!==t?Object(p.jsx)("div",{className:"debug-indicator",children:t}):null,Object(p.jsx)("div",{className:"miofa"})]})}}]),n}(a.Component),x=(n(33),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.isPreview;return Object(p.jsxs)("div",{className:"miofa-with-message",children:[Object(p.jsx)("div",{className:"message-container",children:t}),Object(p.jsx)(v,{disablePop:!0,isPreview:n}),Object(p.jsx)(v,{disablePop:!0,isPreview:n})]})}}]),n}(a.Component)),y=(n(34),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.isPreview;return Object(p.jsxs)("div",{className:"miofa-with-name",children:[Object(p.jsx)(v,{disablePop:!0,isPreview:n}),Object(p.jsx)("div",{className:"name-container",children:t})]})}}]),n}(a.Component)),C=(n(35),[n.p+"static/media/miofa-1.a4886b13.png",n.p+"static/media/miofa-2.7589dd4e.png"]),w=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).getDefautState=function(){return{isDespawn:!1,currentIndex:0}},e.state=e.getDefautState(),e.resetState=function(){e.setState(e.getDefautState())},e.isFramesChange=function(t){var n=e.props.frames,a=t.frames;return a.length!=n.length||(a.forEach((function(e,t){if(n[t]!=e)return!0})),!1)},e.shouldComponentUpdate=function(t){return!e.props.isPreview&&(e.isFramesChange(t)&&(e.setState({isDespawn:!0}),e.updateTimeOut=setTimeout(e.resetState.bind(Object(O.a)(e)),1e3)),!0)},e.componentWillUnmount=function(){clearTimeout(e.updateTimeOut),clearInterval(e.updateIndex)},e.getFrames=function(){var t=e.props.frames,n=void 0===t?[]:t;return 0==n.length?C:n},e.getFrameIndex=function(){var t=e.getFrames(),n=e.state.currentIndex;return n++,!t||n>=t.length?0:n},e.updateIndex=function(){var t=e.getFrameIndex();e.setState({currentIndex:t})},e.componentDidMount=function(){setTimeout((function(){e.animationInterval=setInterval(e.updateIndex.bind(Object(O.a)(e)),500)}),500)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isDespawn,n=e.currentIndex,a=this.getFrames()[n],i={animationName:t?"miofa-despawn":"miofa-spawn",animationDuration:t?"2s":"1s",animationDelay:"0s"};return Object(p.jsx)("div",{className:"my-miofa-container",style:i,onLoad:this.check,children:Object(p.jsx)("img",{src:a,width:"90",height:"90"})})}}]),n}(a.Component),S=(n(36),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).renderMioFa=function(t,n){var a=e.props.isPreview;return Object(p.jsx)(v,{isPreview:a},n)},e.renderMioFas=function(t){return Array.from(Array(t)).map(e.renderMioFa)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.message,n=void 0===t?"Your messages for Mio.":t,a=e.name,i=void 0===a?"- MioFa -":a,r=e.frames,s=void 0===r?[]:r,c=e.isPreview;return Object(p.jsxs)("div",{className:"message-section-container",children:[this.renderMioFas(5),Object(p.jsx)(x,{message:n,isPreview:c}),this.renderMioFas(2),Object(p.jsx)(w,{frames:s}),Object(p.jsx)(y,{name:i,isPreview:c}),this.renderMioFas(1)]})}}]),n}(a.Component)),k=Object(b.a)({},f,Object(p.jsx)(S,{})),N=n(7),L=n(13),M=n(15),I=[{message:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",name:"miofa"},{message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",name:"miofa"}].map((function(e,t){return Object(N.a)(Object(N.a)({},e),{},{name:e.name+"-"+t})})),P=Object(M.b)({name:"messages",initialState:{step:5,current:0,items:I},reducers:{nextPage:function(e){e.current+=1},previousPage:function(e){e.current-=1}}}),F=P.actions,D=F.nextPage,T=F.previousPage,A=function(e){var t=e.messages,n=t.items,a=t.current,i=t.step;return n.slice(a*i,(a+1)*i)},U=Object(M.a)({reducer:{messages:P.reducer}}),R=(n(43),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).renderCells=function(){for(var t=e.props,n=t.x,a=t.y,i=[],r=0;r<n*a;r++)i.push(Object(p.jsx)(v,{},r));return i},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.x,n=70*e.y,a=70*t;return Object(p.jsx)("div",{className:"miofa-section",style:{width:a,height:n},children:this.renderCells()})}}]),n}(a.Component)),B=(n(44),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).getLayouts=function(){return h},e.mapSection=function(t,n){var a=e.props,i=a.mapping,r=a.messages,s=i[t],c=r[n];return s=s&&c?Object(N.a)(Object(N.a)({},s),{},{props:Object(N.a)({},c)}):e.getDefaultSection(t),Object(N.a)(Object(N.a)({},s),{},{key:n})},e}return n}(function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).getDefaultSection=function(e){var t=e.split("x"),n=t[0],a=t[1];return Object(p.jsx)(R,{x:n,y:a})},e.mapSection=function(t,n){var a,i=null!==(a=e.props.mapping[t])&&void 0!==a?a:e.getDefaultSection(t);return Object(N.a)(Object(N.a)({},i),{},{key:n})},e.getMappedSectionsToLayout=function(t){if(null!=t)return t.map(e.mapSection)},e.getLayouts=function(){return[]},e.getLayout=function(){var t=e.getLayouts();return t[Math.floor(Math.random()*t.length)]},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"layout-container",children:this.getMappedSectionsToLayout(this.getLayout())})}}]),n}(a.Component)));var E=Object(L.b)((function(e){return{messages:A(e)}}),null)(B),V=(n(45),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.disabled,n=e.onClick,a=e.className;return Object(p.jsx)("div",{className:"pagination-button "+a+(t?" disabled":""),onClick:t?null:n})}}]),n}(a.Component)),Y=(n(46),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.nextPage,n=e.previousPage,a=this.props.configState,i=a.items,r=a.step,s=a.current,c=s*r+i.slice(s*r,(s+1)*r).length;return Object(p.jsxs)("div",{className:"pagination-controller",children:[Object(p.jsx)(V,{className:"previous",disabled:(s-1)*r<0,onClick:function(){return n()}}),Object(p.jsxs)("div",{className:"total-display",children:[c,"/",i.length]}),Object(p.jsx)(V,{className:"next",disabled:(s+1)*r>i.length,onClick:function(){return t()}})]})}}]),n}(a.Component)),J={nextPage:D,previousPage:T},W=Object(L.b)((function(e){return{configState:(t=e,t.messages)};var t}),J)(Y),q=(n(47),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.text;return Object(p.jsx)("div",{className:"navigation-button",children:Object(p.jsx)(c.b,{to:t,children:Object(p.jsx)("button",{type:"button",children:n})})})}}]),n}(a.Component)),z=(n(48),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"main-stage-container",children:[Object(p.jsx)(W,{}),Object(p.jsx)(E,{mapping:k}),Object(p.jsx)(q,{link:"/send-message",text:"Send a Message"})]})}}]),n}(a.Component)),G=n(2),H=(n(49),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.children;return Object(p.jsx)("form",{className:"form-container",children:e})}}]),n}(a.Component)),K=n(18),Q=(n(21),n(10)),X=(n(50),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={numberOfItem:1},e.getLimit=function(){return e.props.limit},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value,r=e.props,s=r.onChange,c=r.value,o=a.split("-",2),u=Object(Q.a)(o,2),m=u[0],l=u[1];c&&(i?c[l]=i:c.splice(l,1),s({target:{name:m,value:c}}))},e.handeAddItem=function(){var t=e.state.numberOfItem;e.setState({numberOfItem:t+1})},e.handeRemoveItem=function(t){var n=e.state.numberOfItem;e.setState({numberOfItem:n-1}),e.handleChange({target:{name:t,value:null}})},e.renderInputAction=function(t,n){if(t>0)return Object(p.jsx)("div",{className:"action",onClick:function(){return e.handeRemoveItem(n)},children:"-"},t);var a=e.state.numberOfItem==e.getLimit();return Object(p.jsx)("div",{name:n,className:"action"+(a?" hidden":" "),onClick:a?null:e.handeAddItem,children:"+"},t)},e.renderInput=function(){for(var t=e.state.numberOfItem,n=e.props,a=n.name,i=n.placeholder,r=[],s=0;s<t;s++){var c=a+"-"+s;r.push(e.renderInputAction(s,c)),r.push(Object(p.jsx)("input",{name:c,onChange:e.handleChange,placeholder:i+" "+(s+1)},c))}return r},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.title;return Object(p.jsxs)("label",{className:"input multiple-input",children:[Object(p.jsx)("div",{className:"input-container",children:this.renderInput()}),Object(p.jsxs)("span",{children:[e,":"]})]})}}]),n}(a.Component)),Z=["type","title","name","onChange","placeholder","value"],$=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=(e.type,e.title),n=e.name,a=e.onChange,i=e.placeholder,r=e.value,s=Object(K.a)(e,Z);return Object(p.jsxs)("label",{className:"input",children:[Object(p.jsx)("textarea",Object(N.a)(Object(N.a)({name:n,onChange:a,placeholder:i},s),{},{children:r})),Object(p.jsxs)("span",{children:[t,":"]})]})}}]),n}(a.Component),_=["type","title","name","onChange","placeholder"],ee=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.type,n=e.title,a=e.name,i=e.onChange,r=e.placeholder,s=Object(K.a)(e,_);switch(t){case"multi":return Object(p.jsx)(X,Object(N.a)({title:n,type:t,name:a,onChange:i,placeholder:r},s));case"textarea":return Object(p.jsx)($,Object(N.a)({title:n,type:t,name:a,onChange:i,placeholder:r},s));default:return Object(p.jsxs)("label",{className:"input",children:[Object(p.jsx)("input",Object(N.a)({type:t,name:a,onChange:i,placeholder:r},s)),Object(p.jsxs)("span",{children:[n,":"]})]})}}}]),n}(a.Component),te=(n(51),{email:void 0,message:void 0,name:void 0,myMioFa:{frames:[]}}),ne=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={form:te},e.renderPreviewMessageSection=function(){var t=e.state.form,n=t.message,a=t.name,i=t.myMioFa;return Object(p.jsx)(S,{message:n,name:a,isPreview:!0,frames:i.frames})},e.handleChange=function(t){var n=t.target,a=n.name,i=n.value,r=e.state.form,s=e.updateValue(r,a,i);e.setState({form:Object(N.a)({},s)})},e.updateValue=function(t,n,a){var i=n.split(".",2);return i.length>1?Object(N.a)(Object(N.a)({},t),{},Object(b.a)({},i[0],e.updateValue(t[i[0]],i[1],a))):Object(N.a)(Object(N.a)({},t),{},Object(b.a)({},i[0],a))},e.resetForm=function(){e.setState({form:Object(N.a)(Object(N.a)({},te),{},{myMioFa:{frames:[]}})})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.form,t=e.email,n=e.message,a=e.name,i=e.myMioFa;return Object(p.jsxs)("div",{className:"send-message-container",children:[Object(p.jsx)("div",{className:"mimic pagination-controller"}),Object(p.jsx)("div",{className:"preview-container",children:this.renderPreviewMessageSection()}),Object(p.jsxs)(H,{children:[Object(p.jsx)(ee,{type:"text",title:"Email",name:"email",onChange:this.handleChange,value:t,placeholder:"example@gmail.com"}),Object(p.jsx)(ee,{type:"text",title:"Name",name:"name",onChange:this.handleChange,value:a,placeholder:"Name (10 characters max)",maxLength:"10"}),Object(p.jsx)(ee,{type:"textarea",title:"Message",name:"message",onChange:this.handleChange,value:n,placeholder:"Your messages for Mio. (100 characters max)",rows:"4",maxLength:"100"}),Object(p.jsx)(ee,{type:"multi",title:"Your MioFa",name:"myMioFa.frames",value:i.frames,onChange:this.handleChange,placeholder:"URL",limit:2}),Object(p.jsx)("input",{type:"submit",value:"Submit"}),Object(p.jsx)("input",{type:"reset",value:"Reset",onClick:this.resetForm})]}),Object(p.jsx)(q,{link:"/",text:"Back to main"})]})}}]),n}(a.Component),ae=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={mio:Object(p.jsx)(d,{}),main:Object(p.jsx)(z,{})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.mio,n=e.main;return Object(p.jsxs)(p.Fragment,{children:[t,Object(p.jsxs)(G.c,{children:[Object(p.jsx)(G.a,{path:"/",element:n}),Object(p.jsx)(G.a,{path:"/send-message",element:Object(p.jsx)(ne,{})})]})]})}}]),n}(a.Component);var ie=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(c.a,{basename:"",children:Object(p.jsx)(ae,{})})})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(L.a,{store:U,children:Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(ie,{})})}),document.getElementById("root")),re()}]),[[52,1,2]]]);
//# sourceMappingURL=main.818a6734.chunk.js.map