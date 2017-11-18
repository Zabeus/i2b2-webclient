/*
jQWidgets v4.5.2 (2017-May)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
!function(a){function b(a,b,c,d,e,f,g,h){this.label=a,this.value=b,this.parent=c,this.children=d,this.area=e||null,this.color=f,this.data=g,this.record=h}a.jqx.jqxWidget("jqxTreeMap","",{});var c={};c.default=function(){function a(b,c,d,e){this.height=e,this.width=d,this.xoffset=b,this.yoffset=c,this.shortestEdge=function(){return Math.min(this.height,this.width)},this.getCoordinates=function(a){var b=[],c=this.xoffset,d=this.yoffset,e=j(a)/this.height,f=j(a)/this.width;if(this.width>=this.height)for(var g=0;g<a.length;g+=1)b.push([c,d,c+e,d+a[g]/e]),d+=a[g]/e;else for(var g=0;g<a.length;g+=1)b.push([c,d,c+a[g]/f,d+f]),c+=a[g]/f;return b},this.cutArea=function(b){var c;if(this.width>=this.height){var d=b/this.height,e=this.width-d;c=new a(this.xoffset+d,this.yoffset,e,this.height)}else{var f=b/this.width,g=this.height-f;c=new a(this.xoffset,this.yoffset+f,this.width,g)}return c}}function b(a,b){for(var c=[],d=j(a),e=b/d,f=0;f<a.length;f+=1)c[f]=a[f]*e;return c}function c(a,b,e,f,g){f="undefined"==typeof f?0:f,g="undefined"==typeof g?0:g;var h,j=[],l=[];if(i(a[0])){for(var m=0;m<a.length;m+=1)j[m]=k(a[m]);h=d(j,b,e,f,g);for(var m=0;m<a.length;m+=1)l.push(c(a[m],h[m][2]-h[m][0],h[m][3]-h[m][1],h[m][0],h[m][1]))}else l=d(a,b,e,f,g);return l}function d(c,d,g,h,i){h="undefined"==typeof h?0:h,i="undefined"==typeof i?0:i;var j=f(b(c,d*g),[],new a(h,i,d,g),[]);return e(j)}function e(a){for(var b=[],c=0;c<a.length;c+=1)for(var d=0;d<a[c].length;d+=1)b.push(a[c][d]);return b}function f(a,b,c,d){var e,h,i;return 0===a.length?void d.push(c.getCoordinates(b)):(e=c.shortestEdge(),h=a[0],g(b,h,e)?(b.push(h),f(a.slice(1),b,c,d)):(i=c.cutArea(j(b),d),d.push(c.getCoordinates(b)),f(a,[],i,d)),d)}function g(a,b,c){var d;if(0===a.length)return!0;d=a.slice(),d.push(b);var e=h(a,c),f=h(d,c);return e>=f}function h(a,b){var c=Math.min.apply(Math,a),d=Math.max.apply(Math,a),e=j(a);return Math.max(Math.pow(b,2)*d/Math.pow(e,2),Math.pow(e,2)/(Math.pow(b,2)*c))}function i(a){return a&&a.constructor===Array}function j(a){for(var b=0,c=0;c<a.length;c+=1)b+=a[c];return b}function k(a){var b=0;if(i(a[0]))for(var c=0;c<a.length;c+=1)b+=k(a[c]);else b=j(a);return b}return c}();var d={HORIZONTAL:0,VERTICAL:1,BOTH:2};a.extend(a.jqx._jqxTreeMap.prototype,{defineInstance:function(){var b={width:600,height:600,renderCallbacks:{},legendScaleCallback:function(a){return a},hoverEnabled:!1,selectionEnabled:!0,singleSelection:!0,showLegend:!0,legendLabel:"Legend",headerHeight:25,colorRange:100,layout:"default",source:[],displayMember:null,valueMember:null,colorMode:"parent",baseColor:"#C2EEFF",legendPosition:{x:0,y:0},colorRanges:[{color:"#aa9988",min:0,max:10},{color:"#ccbbcc",min:11,max:50},{color:"#000",min:50,max:100}],_root:[]};return this===a.jqx._jqxTreeMap.prototype?b:(a.extend(!0,this,b),b)},createInstance:function(){this.render()},render:function(){this.host.addClass(this.toThemeProperty("jqx-widget")),this._destroy(),this._root=new b(void 0,0,null,[],this.host);var d=function(a,b){for(var d,e={},f=null,g=0;g<a.length;g+=1)if(a[g].items){f=!0;break}var h=new Array;if(f){var i=function(a,b){for(var c=0;c<a.length;c+=1){if(a[c].parent=b,a[c].data||(a[c].data=a[c].value),null==a[c].value&&(a[c].value=0),isNaN(parseFloat(a[c].value))){for(var d=a[c].value.toString(),e="",f=0;f<d.length;f++){var g=d.substring(f,f+1);null==g.match(/^[0-9]+$/)&&"."!=g||(e+=g)}a[c].value=new Number(e)}else a[c].value=parseFloat(a[c].value);h.push(a[c]),a[c].items&&i(a[c].items,a[c].label)}};i(a,null),a=h}for(var g=0;g<a.length;g+=1)d=a[g],d.value&&null!=d.parent&&(e[d.parent]||(e[d.parent]=0),e[d.parent]+=d.value);for(var g=0;g<a.length;g+=1)d=a[g],void 0!==e[d.label]&&(d.value=e[d.label]);b._buildTree(a,b._root),b._dataList=b._buildList(),b._setStyles();var j=c.default;"simple"===b.layout&&(j=c.simple),b._render(b._root,j),b._renderLegend()};return a.jqx.dataAdapter&&null!=this.source&&this.source._source?void this.dataBind(this.source,d):(d(this.source,this),void this._trigger("bindingComplete"))},dataBind:function(b,c){this.records=new Array;var d=!!b._source,e=new a.jqx.dataAdapter(b,{autoBind:!1});d&&(e=b,b=b._source);var f=function(a){void 0!=b.type&&(e._options.type=b.type),void 0!=b.formatdata&&(e._options.formatData=b.formatdata),void 0!=b.contenttype&&(e._options.contentType=b.contenttype),void 0!=b.async&&(e._options.async=b.async)},g=function(a,b){a.records=e.records;for(var d=new Array,f=0;f<a.records.length;f++){var g=a.records[f];a.displayMember&&(g.label=g[a.displayMember]),a.valueMember&&(g.value=g[a.valueMember]),g.record=g,d.push(g)}a._trigger("bindingComplete"),c(d,a)};f(this);var h=this;switch(b.datatype){case"local":case"array":default:null!=b.localdata&&(e.unbindBindingUpdate(this.element.id),e.dataBind(),g(this),e.bindBindingUpdate(this.element.id,function(a){g(h,a)}));break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"csv":case"tab":if(null!=b.localdata)return e.unbindBindingUpdate(this.element.id),e.dataBind(),g(this),void e.bindBindingUpdate(this.element.id,function(){g(h)});var i={};e._options.data?a.extend(e._options.data,i):(b.data&&a.extend(i,b.data),e._options.data=i);var j=function(){g(h)};e.unbindDownloadComplete(h.element.id),e.bindDownloadComplete(h.element.id,j),e.dataBind()}},_destroy:function(){this.host.children().remove()},destroy:function(){this.host.remove()},refresh:function(a){a||this._refresh()},_refresh:function(){this.render()},_setStyles:function(){this.host.css({position:"relative",width:this.width,height:this.height});var b=!1;null!=this.width&&this.width.toString().indexOf("%")!=-1&&(b=!0),null!=this.height&&this.height.toString().indexOf("%")!=-1&&(b=!0);var c=this;a.jqx.utilities.resize(this.host,function(){c.resizeTimer&&clearTimeout(c.resizeTimer),c.resizeTimer=setTimeout(function(){c.performLayout()},50)})},resize:function(a,b){this.width=a,this.height=b,this.performLayout()},performLayout:function(){var a=c.default;this.clearSelection(),this._layout(this._root,a)},_getValues:function(a){for(var b=[],c=0;c<a.length;c+=1)b.push(a[c].value);return b},_isColor:function(a){if(!a)return!1;var b=this._colorEvaluator;return!(!b._isRgb(a)&&!b._isHex(a))},_colorEvaluator:{_toRgb:function(a){var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?{r:parseInt(b[1],16),g:parseInt(b[2],16),b:parseInt(b[3],16)}:null},_toHex:function(a){var b=a.r.toString(16),c=a.g.toString(16),d=a.b.toString(16);return b=1===b.length?"0"+b:b,c=1===c.length?"0"+c:c,d=1===d.length?"0"+d:d,"#"+b+c+d},_isRgb:function(a){return/(rgb|rgba)\s*\(\s*\d+\s*(,\s*\d+\s*){2}(,\d+\.\d+)?\)(;?)/i.test(a)},_isHex:function(a){return/^(#([0-9A-F]{3})([0-9A-F]{3})?)$/i.test(a)},getColorByValue:function(a,b,c){var d,e,f,g,h,b,i=this._colorEvaluator;i._isRgb(c)&&(c=i._toHex(c)),c=i._toRgb(c),f=b.length,d=-(1/0);for(var j=0;j<f;j+=1)d<b[j].value&&(d=b[j].value);return e=a/d,g=Math.round(e*this.colorRange),h=i._toHex({r:Math.max(c.r-g,0),g:Math.max(c.g-g,0),b:Math.max(c.b-g,0)})},parent:function(a){var b=a.parent.color,c=this._colorEvaluator;return a.parent?(b||(b=this.baseColor),b=c.getColorByValue.call(this,a.value,a.parent.children,b),a.color=b,b):"#fff"},autoColors:function(a){var b=this.baseColor,c=this._colorEvaluator;return b=c.getColorByValue.call(this,a.value,this._dataList,b),a.color=b,b},rangeColors:function(a){for(var b,c=a.value,d=0;d<this.colorRanges.length;d+=1)if(b=this.colorRanges[d],b.min<c&&b.max>=c)return b.color;return"#fff"}},_getColor:function(a){var b=a.color,c=this.colorMode;if(this._isColor(b))return b;if("function"==typeof this._colorEvaluator[c])return this._colorEvaluator[c].call(this,a);throw"Invalid colorMode"},_renderRect:function(b,c){var d=a("<div/>"),e=b[2]-b[0],f=b[3]-b[1],g=this._getColor(c);d.css({position:"absolute",left:b[0]-1,top:b[1]-1,width:e,height:f,backgroundColor:g}),d.addClass(this.toThemeProperty("jqx-treemap-rectangle"));var h=this._colorEvaluator,i={data:c.data,label:c.label,value:c.value,parent:c.parent,record:c.record,color:g,rgb:h._toRgb(g)};if(c.parent==this._root&&(i.parent=null),"function"==typeof this.renderCallbacks["*"]){var j=this.renderCallbacks["*"](d,i);if(void 0!==j)return d}if("function"==typeof this.renderCallbacks[c.label])this.renderCallbacks[c.label](d,i);else{var e=d.width()-2;d.html('<span style="max-width:'+e+'px;" class="jqx-treemap-label">'+c.label+"</span>")}return d},_centerLabel:function(a,b){var c=a[0].firstChild;c.style.position="absolute",b!==d.HORIZONTAL&&b!==d.BOTH||(c.style.left=(a[0].offsetWidth-c.offsetWidth)/2+"px"),b!==d.VERTICAL&&b!==d.BOTH||(c.style.top=(a[0].offsetHeight-c.offsetHeight)/2+"px")},_trigger:function(b,c){var d=a.Event(b);return d.args=c,this.host.trigger(d)},_addHandlers:function(b,c){var d=this;b.on("mouseenter",function(a){d.hoverEnabled&&(d.host.find(".jqx-treemap-rectangle").removeClass("jqx-treemap-rectangle-hover"),b.addClass(d.toThemeProperty("jqx-treemap-rectangle-hover"))),d._trigger("mouseenterSector",c)}),b.on("mouseleave",function(a){d.hoverEnabled&&b.removeClass("jqx-treemap-rectangle-hover"),d._trigger("mouseleaveSector",c)}),b.on("click",function(c){if(d.selectionEnabled){var e=a.data(this,"jqx-treemap-selected")||!1;d.singleSelection&&d.host.find(".jqx-treemap-rectangle-hover").each(function(b,c){a.data(c,"jqx-treemap-selected",!1),a(c).removeClass("jqx-treemap-rectangle-hover")}),e?(b.removeClass("jqx-treemap-rectangle-hover"),e=!1):(b.addClass(d.toThemeProperty("jqx-treemap-rectangle-hover")),e=!0),a.data(this,"jqx-treemap-selected",e),c.stopImmediatePropagation()}})},clearSelection:function(){this.host.find(".jqx-treemap-rectangle-hover").removeClass(this.toThemeProperty("jqx-treemap-rectangle-hover")),a.data(this,"jqx-treemap-selected",!1)},_layoutArea:function(a,b){a.children.length&&a.children.length>0?(this._centerLabel(b,d.HORIZONTAL),b.addClass(this.toThemeProperty("jqx-treemap-rectangle-parent"))):this._centerLabel(b,d.BOTH)},_render:function(a,b){if(a.children.length){var c=0;a.value&&(c=this.headerHeight);for(var d,e,f=this._getValues(a.children),g=(a.area.offset(),b(f,a.area.width(),a.area.height()-c,0,c)),h=0;h<a.children.length;h+=1)d=a.children[h],e=this._renderRect(g[h],d),d.area=e,a.area.append(e),this._addHandlers(e,{label:d.label,value:d.value,color:d.color,sector:d.area,data:d.data}),this._layoutArea(d,e),this._render(d,b)}},_layout:function(b,c){if(b.children.length){var d=0;b.value&&(d=this.headerHeight);for(var e=this._getValues(b.children),f=(b.area.offset(),c(e,b.area.width(),b.area.height()-d,0,d)),g=0;g<b.children.length;g+=1){var h=b.children[g];this._layoutRect(f[g],h),this._layoutArea(h,h.area),this._layout(h,c)}this.showLegend&&(a(".jqx-treemap-legend").remove(),this._renderLegend())}},_layoutRect:function(a,b){var c=b.area,d=a[2]-a[0],e=a[3]-a[1];c.css({left:a[0]-1,top:a[1]-1,width:d,height:e});var f=this._colorEvaluator,g=this._getColor(b),h={data:b.data,label:b.label,value:b.value,parent:b.parent,record:b.record,color:g,rgb:f._toRgb(g)};if(b.parent==this._root&&(h.parent=null),"function"==typeof this.renderCallbacks["*"]){var i=this.renderCallbacks["*"](c,h);if(void 0!==i)return c}if("function"==typeof this.renderCallbacks[b.label])this.renderCallbacks[b.label](c,h);else{var d=c.width()-2;c.find(".jqx-treemap-label:first").css("max-width",d)}},_getBoundValues:function(){var a,b=this._root,c=[],d={},e={};for(d.value=b.value||1/0,e.value=b.value||-(1/0),c.push(b);c.length;){a=c.pop(),d.value>a.value&&(d=a),e.value<a.value&&(e=a);for(var f=0;f<a.children.length;f+=1)c.push(a.children[f])}return[d,e]},_getAutocolorRanges:function(){for(var a,b=this._getBoundValues(),c=5,d=b[1].value,e=b[0].value,f=(d-e)/c,g=[],h=e;h<d;h+=f)a=Math.round(h),g.push({min:a,max:h+f,color:this._colorEvaluator.getColorByValue.call(this,a,this._dataList,this.baseColor)});return g},_renderLegend:function(){if(/autoColors|rangeColors/.test(this.colorMode)&&this.showLegend){var a=this.colorRanges;"autoColors"===this.colorMode&&(a=this._getAutocolorRanges());var b=this._renderColorLegend(a);this._renderLegendLabel(b)}},_renderLegendLabel:function(b){var c=a('<tr><td colspan="'+b.find("td").length/2+'"/></tr>'),d=a('<div class="'+this.toThemeProperty("jqx-treemap-legend-label")+'" />');d.text(this.legendLabel),c.children().append(d),b.prepend(c)},_renderColorLegend:function(b){var c,d,e=a('<div class="'+this.toThemeProperty("jqx-treemap-legend")+'"/>'),f=function(a){return a};"function"==typeof this.legendScaleCallback&&(f=this.legendScaleCallback);var g=a('<table class="'+this.toThemeProperty("jqx-treemap-legend-table")+'"/>');e.append(g),g.append("<tr/>"),e.append("<div/>"),this.host.append(e),c=a(e.find("tr")[0]),d=a(e.find("div")[0]),d.addClass(this.toThemeProperty("jqx-treemap-legend-values"));var h=function(a,b){try{if(a.min<b.min)return-1;if(a.min>b.min)return 1}catch(a){}return 0};b.sort(h);for(var i=Math.round(e.width()/b.length),j=-2,k=0,l=0;l<b.length;l+=1){var m=a('<td class="'+this.toThemeProperty("jqx-treemap-legend-color")+'"/>');if(m.css("backgroundColor",b[l].color),c.append(m),0===l){var n=a('<span class="'+this.toThemeProperty("jqx-treemap-legend-max-value")+" "+this.toThemeProperty("jqx-treemap-legend-value")+'"/>');n.text(f(b[l].min)),d.append(n),g.css("margin-left",n.width()/2),j+=n.width()/2,k=j}var n=a('<span class="'+this.toThemeProperty("jqx-treemap-legend-max-value")+" "+this.toThemeProperty("jqx-treemap-legend-value")+'"/>');j+=i,n.text(f(b[l].max)),d.append(n),l==b.length-1&&(k+=n.width()/2,e.css("padding-right",k+5),j-=2),j-=n.width()/2,n.css("left",j),j+=n.width()/2}return e.css({position:"absolute",left:this.legendPosition.x,bottom:this.legendPosition.y,visibility:this.showLegend?"visible":"hidden"}),e},_buildTree:function(a,c){var d,e,f=null,g=[];for(g.push(c);g.length;){f=g.pop();for(var h=0;h<a.length;h+=1)if(e=a[h],e.parent===f.label||!e.parent&&!f.label){var i=f;d=new b(e.label,parseFloat(e.value,10),i,[],null,e.color,e.data,e.record),f.children.push(d),g.push(d)}}return c},_buildList:function(){var a,b=[],c=[];for(c.push(this._root);c.length;){a=c.pop(),a!==this._root&&b.push(a);for(var d=0;d<a.children.length;d+=1)c.push(a.children[d])}return b},propertyChangedHandler:function(a,b,c){"renderCallbacks"!==b&&(/hoverEnabled|selectionEnabled/.test(b)?c||this.host.find("jqx-treemap-rectangle-hover"):"showLegend"===b?this.host.find("jqx-treemap-legend").toggle():this._refresh())}})}(jqxBaseFramework);

