(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{366:function(e,t,n){},429:function(e,t,n){"use strict";var r=n(366);n.n(r).a},443:function(e,t,n){"use strict";n.r(t);n(424);var r=n(440),a=n(393),o=n(432),i=n(389),s=n(434),u=n(433),c=n(439),l=n(480),g=n(425),f=n(435),w=n(426),p=n(427);var h={name:"routenmap",props:["gpx"],data:function(){return{val:this.gpx}},mounted:function(){this.$nextTick((function(){var e,t,n,h,m,d,v,x;e=this.gpx,t={Point:new g.b({image:new f.a({fill:new w.a({color:"ff6600"}),radius:5,stroke:new p.a({color:"#ff6600",width:15})})}),LineString:new g.b({stroke:new p.a({color:"#ff0",width:4})}),MultiLineString:new g.b({stroke:new p.a({color:"#0066ff",width:3})})},n=new s.a({url:e,format:new u.a}),h=new c.a({source:n,style:function(e){return t[e.getGeometry().getType()]}}),m=new l.a({source:new o.a({url:"https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),d=new a.a({center:[0,0],zoom:10}),v=new r.a({target:"map",layers:[m,h],view:d,interactions:Object(i.a)({mouseWheelZoom:!1})}),x=function(e){var t=[];if(v.forEachFeatureAtPixel(e,(function(e){t.push(e)})),t.length>0){var n,r,a=[];for(n=0,r=t.length;n<r;++n)a.push(t[n].get("ele")),a.push(t[n].get("desc")),a.push(t[n].get("name"));v.getTargetElement().style.cursor="pointer"}else v.getTargetElement().style.cursor=""},v.on("pointermove",(function(e){if(!e.dragging){var t=v.getEventPixel(e.originalEvent);x(t)}})),n.on("change",(function(e){"ready"===n.getState()&&n.getFeatures().length>0&&v.getView().fit(n.getExtent(),v.getSize())}))}))}},m=(n(429),n(42)),d=Object(m.a)(h,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"map"}})}),[],!1,null,"636eedea",null);t.default=d.exports}}]);