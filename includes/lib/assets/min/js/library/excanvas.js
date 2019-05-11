document.createElement("canvas").getContext||function(){function a(){return this.context_||(this.context_=new j(this))}function b(a,b,c){var d=x.call(arguments,2);return function(){return a.apply(b,d.concat(x.call(arguments)))}}function c(a){var b=a.srcElement;switch(a.propertyName){case"width":b.style.width=b.attributes.width.nodeValue+"px",b.getContext().clearRect();break;case"height":b.style.height=b.attributes.height.nodeValue+"px",b.getContext().clearRect()}}function d(a){var b=a.srcElement;b.firstChild&&(b.firstChild.style.width=b.clientWidth+"px",b.firstChild.style.height=b.clientHeight+"px")}function e(){return[[1,0,0],[0,1,0],[0,0,1]]}function f(a,b){for(var c=e(),d=0;d<3;d++)for(var f=0;f<3;f++){for(var g=0,h=0;h<3;h++)g+=a[d][h]*b[h][f];c[d][f]=g}return c}function g(a,b){b.fillStyle=a.fillStyle,b.lineCap=a.lineCap,b.lineJoin=a.lineJoin,b.lineWidth=a.lineWidth,b.miterLimit=a.miterLimit,b.shadowBlur=a.shadowBlur,b.shadowColor=a.shadowColor,b.shadowOffsetX=a.shadowOffsetX,b.shadowOffsetY=a.shadowOffsetY,b.strokeStyle=a.strokeStyle,b.globalAlpha=a.globalAlpha,b.arcScaleX_=a.arcScaleX_,b.arcScaleY_=a.arcScaleY_,b.lineScale_=a.lineScale_}function h(a){var b,c=1;if(a=String(a),"rgb"==a.substring(0,3)){var d=a.indexOf("(",3),e=a.indexOf(")",d+1),f=a.substring(d+1,e).split(",");b="#";for(var g=0;g<3;g++)b+=z[Number(f[g])];4==f.length&&"a"==a.substr(3,1)&&(c=f[3])}else b=a;return{color:b,alpha:c}}function i(a){switch(a){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function j(a){this.m_=e(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle="#000",this.fillStyle="#000",this.lineWidth=1,this.lineJoin="miter",this.lineCap="butt",this.miterLimit=1*v,this.globalAlpha=1,this.canvas=a;var b=a.ownerDocument.createElement("div");b.style.width=a.clientWidth+"px",b.style.height=a.clientHeight+"px",b.style.overflow="hidden",b.style.position="absolute",a.appendChild(b),this.element_=b,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function k(a,b,c,d){a.currentPath_.push({type:"bezierCurveTo",cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y}),a.currentX_=d.x,a.currentY_=d.y}function l(a){for(var b=0;b<3;b++)for(var c=0;c<2;c++)if(!isFinite(a[b][c])||isNaN(a[b][c]))return!1;return!0}function m(a,b,c){if(l(b)&&(a.m_=b,c)){var d=b[0][0]*b[1][1]-b[0][1]*b[1][0];a.lineScale_=u(t(d))}}function n(a){this.type_=a,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function o(){}var p=Math,q=p.round,r=p.sin,s=p.cos,t=p.abs,u=p.sqrt,v=10,w=v/2,x=Array.prototype.slice,y={init:function(a){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var c=a||document;c.createElement("canvas"),c.attachEvent("onreadystatechange",b(this.init_,this,c))}},init_:function(a){if(a.namespaces.g_vml_||a.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML"),a.namespaces.g_o_||a.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML"),!a.styleSheets.ex_canvas_)var b=null,c="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}";try{b=a.createStyleSheet(),b.owningElement.id="ex_canvas_",b.cssText=c}catch(a){b=document.styleSheets[document.styleSheets.length-1],b.cssText+="\r\n"+c}for(var d=a.getElementsByTagName("canvas"),e=0;e<d.length;e++)this.initElement(d[e])},initElement:function(b){if(!b.getContext){b.getContext=a,b.innerHTML="",b.attachEvent("onpropertychange",c),b.attachEvent("onresize",d);var e=b.attributes;e.width&&e.width.specified?b.style.width=e.width.nodeValue+"px":b.width=b.clientWidth,e.height&&e.height.specified?b.style.height=e.height.nodeValue+"px":b.height=b.clientHeight}return b}};y.init();for(var z=[],A=0;A<16;A++)for(var B=0;B<16;B++)z[16*A+B]=A.toString(16)+B.toString(16);var C=j.prototype;C.clearRect=function(){this.element_.innerHTML=""},C.beginPath=function(){this.currentPath_=[]},C.moveTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:"moveTo",x:c.x,y:c.y}),this.currentX_=c.x,this.currentY_=c.y},C.lineTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:"lineTo",x:c.x,y:c.y}),this.currentX_=c.x,this.currentY_=c.y},C.bezierCurveTo=function(a,b,c,d,e,f){var g=this.getCoords_(e,f);k(this,this.getCoords_(a,b),this.getCoords_(c,d),g)},C.quadraticCurveTo=function(a,b,c,d){var e=this.getCoords_(a,b),f=this.getCoords_(c,d),g={x:this.currentX_+2/3*(e.x-this.currentX_),y:this.currentY_+2/3*(e.y-this.currentY_)};k(this,g,{x:g.x+(f.x-this.currentX_)/3,y:g.y+(f.y-this.currentY_)/3},f)},C.arc=function(a,b,c,d,e,f){c*=v;var g=f?"at":"wa",h=a+s(d)*c-w,i=b+r(d)*c-w,j=a+s(e)*c-w,k=b+r(e)*c-w;h!=j||f||(h+=.125);var l=this.getCoords_(a,b),m=this.getCoords_(h,i),n=this.getCoords_(j,k);this.currentPath_.push({type:g,x:l.x,y:l.y,radius:c,xStart:m.x,yStart:m.y,xEnd:n.x,yEnd:n.y})},C.rect=function(a,b,c,d){this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath()},C.strokeRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath(),this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath(),this.stroke(),this.currentPath_=e},C.fillRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath(),this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath(),this.fill(),this.currentPath_=e},C.createLinearGradient=function(a,b,c,d){var e=new n("gradient");return e.x0_=a,e.y0_=b,e.x1_=c,e.y1_=d,e},C.createRadialGradient=function(a,b,c,d,e,f){var g=new n("gradientradial");return g.x0_=a,g.y0_=b,g.r0_=c,g.x1_=d,g.y1_=e,g.r1_=f,g},C.drawImage=function(a,b){var c,d,e,f,g,h,i,j,k=a.runtimeStyle.width,l=a.runtimeStyle.height;a.runtimeStyle.width="auto",a.runtimeStyle.height="auto";var m=a.width,n=a.height;if(a.runtimeStyle.width=k,a.runtimeStyle.height=l,3==arguments.length)c=arguments[1],d=arguments[2],g=h=0,i=e=m,j=f=n;else if(5==arguments.length)c=arguments[1],d=arguments[2],e=arguments[3],f=arguments[4],g=h=0,i=m,j=n;else{if(9!=arguments.length)throw Error("Invalid number of arguments");g=arguments[1],h=arguments[2],i=arguments[3],j=arguments[4],c=arguments[5],d=arguments[6],e=arguments[7],f=arguments[8]}var o=this.getCoords_(c,d),r=[];if(r.push(" <g_vml_:group",' coordsize="',10*v,",",10*v,'"',' coordorigin="0,0"',' style="width:',10,"px;height:",10,"px;position:absolute;"),1!=this.m_[0][0]||this.m_[0][1]){var s=[];s.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",q(o.x/v),",","Dy=",q(o.y/v),"");var t=o,u=this.getCoords_(c+e,d),w=this.getCoords_(c,d+f),x=this.getCoords_(c+e,d+f);t.x=p.max(t.x,u.x,w.x,x.x),t.y=p.max(t.y,u.y,w.y,x.y),r.push("padding:0 ",q(t.x/v),"px ",q(t.y/v),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",s.join(""),", sizingmethod='clip');")}else r.push("top:",q(o.y/v),"px;left:",q(o.x/v),"px;");r.push(' ">','<g_vml_:image src="',a.src,'"',' style="width:',v*e,"px;"," height:",v*f,'px;"',' cropleft="',g/m,'"',' croptop="',h/n,'"',' cropright="',(m-g-i)/m,'"',' cropbottom="',(n-h-j)/n,'"'," />","</g_vml_:group>"),this.element_.insertAdjacentHTML("BeforeEnd",r.join(""))},C.stroke=function(a){var b=[],c=h(a?this.fillStyle:this.strokeStyle),d=c.color,e=c.alpha*this.globalAlpha;b.push("<g_vml_:shape",' filled="',!!a,'"',' style="position:absolute;width:',10,"px;height:",10,'px;"',' coordorigin="0 0" coordsize="',10*v," ",10*v,'"',' stroked="',!a,'"',' path="');for(var f={x:null,y:null},g={x:null,y:null},j=0;j<this.currentPath_.length;j++){var k=this.currentPath_[j];switch(k.type){case"moveTo":k,b.push(" m ",q(k.x),",",q(k.y));break;case"lineTo":b.push(" l ",q(k.x),",",q(k.y));break;case"close":b.push(" x "),k=null;break;case"bezierCurveTo":b.push(" c ",q(k.cp1x),",",q(k.cp1y),",",q(k.cp2x),",",q(k.cp2y),",",q(k.x),",",q(k.y));break;case"at":case"wa":b.push(" ",k.type," ",q(k.x-this.arcScaleX_*k.radius),",",q(k.y-this.arcScaleY_*k.radius)," ",q(k.x+this.arcScaleX_*k.radius),",",q(k.y+this.arcScaleY_*k.radius)," ",q(k.xStart),",",q(k.yStart)," ",q(k.xEnd),",",q(k.yEnd))}k&&((null==f.x||k.x<f.x)&&(f.x=k.x),(null==g.x||k.x>g.x)&&(g.x=k.x),(null==f.y||k.y<f.y)&&(f.y=k.y),(null==g.y||k.y>g.y)&&(g.y=k.y))}if(b.push(' ">'),a)if("object"==typeof this.fillStyle){var l=this.fillStyle,m=0,n={x:0,y:0},o=0,r=1;if("gradient"==l.type_){var s=l.x0_/this.arcScaleX_,t=l.y0_/this.arcScaleY_,u=l.x1_/this.arcScaleX_,w=l.y1_/this.arcScaleY_,x=this.getCoords_(s,t),y=this.getCoords_(u,w),z=y.x-x.x,A=y.y-x.y;m=180*Math.atan2(z,A)/Math.PI,m<0&&(m+=360),m<1e-6&&(m=0)}else{var x=this.getCoords_(l.x0_,l.y0_),B=g.x-f.x,C=g.y-f.y;n={x:(x.x-f.x)/B,y:(x.y-f.y)/C},B/=this.arcScaleX_*v,C/=this.arcScaleY_*v;var D=p.max(B,C);o=2*l.r0_/D,r=2*l.r1_/D-o}var E=l.colors_;E.sort(function(a,b){return a.offset-b.offset});for(var F=E.length,G=E[0].color,H=E[F-1].color,I=E[0].alpha*this.globalAlpha,J=E[F-1].alpha*this.globalAlpha,K=[],j=0;j<F;j++){var L=E[j];K.push(L.offset*r+o+" "+L.color)}b.push('<g_vml_:fill type="',l.type_,'"',' method="none" focus="100%"',' color="',G,'"',' color2="',H,'"',' colors="',K.join(","),'"',' opacity="',J,'"',' g_o_:opacity2="',I,'"',' angle="',m,'"',' focusposition="',n.x,",",n.y,'" />')}else b.push('<g_vml_:fill color="',d,'" opacity="',e,'" />');else{var M=this.lineScale_*this.lineWidth;M<1&&(e*=M),b.push("<g_vml_:stroke",' opacity="',e,'"',' joinstyle="',this.lineJoin,'"',' miterlimit="',this.miterLimit,'"',' endcap="',i(this.lineCap),'"',' weight="',M,'px"',' color="',d,'" />')}b.push("</g_vml_:shape>"),this.element_.insertAdjacentHTML("beforeEnd",b.join(""))},C.fill=function(){this.stroke(!0)},C.closePath=function(){this.currentPath_.push({type:"close"})},C.getCoords_=function(a,b){var c=this.m_;return{x:v*(a*c[0][0]+b*c[1][0]+c[2][0])-w,y:v*(a*c[0][1]+b*c[1][1]+c[2][1])-w}},C.save=function(){var a={};g(this,a),this.aStack_.push(a),this.mStack_.push(this.m_),this.m_=f(e(),this.m_)},C.restore=function(){g(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},C.translate=function(a,b){m(this,f([[1,0,0],[0,1,0],[a,b,1]],this.m_),!1)},C.rotate=function(a){var b=s(a),c=r(a);m(this,f([[b,c,0],[-c,b,0],[0,0,1]],this.m_),!1)},C.scale=function(a,b){this.arcScaleX_*=a,this.arcScaleY_*=b,m(this,f([[a,0,0],[0,b,0],[0,0,1]],this.m_),!0)},C.transform=function(a,b,c,d,e,g){m(this,f([[a,b,0],[c,d,0],[e,g,1]],this.m_),!0)},C.setTransform=function(a,b,c,d,e,f){m(this,[[a,b,0],[c,d,0],[e,f,1]],!0)},C.clip=function(){},C.arcTo=function(){},C.createPattern=function(){return new o},n.prototype.addColorStop=function(a,b){b=h(b),this.colors_.push({offset:a,color:b.color,alpha:b.alpha})},G_vmlCanvasManager=y,CanvasRenderingContext2D=j,CanvasGradient=n,CanvasPattern=o}();