(function(a){a.fn.extend({smartpaginator:function(b){var c=a.extend({totalrecords:0,recordsperpage:0,length:10,next:"Next",prev:"Prev",first:"First",last:"Last",go:"Go",theme:"green",display:"double",initval:1,datacontainer:"",dataelement:"",onchange:null,controlsalways:false},b);return this.each(function(){var r=0;var k=0;var q=parseInt(c.totalrecords/c.recordsperpage);if(c.totalrecords%c.recordsperpage>0){q++}var g=false;var l=a(this).addClass("pager").addClass(c.theme);l.find("ul").remove();l.find("div").remove();l.find("span").remove();var i;var m;if(c.datacontainer!=""){i=a("#"+c.datacontainer);m=a(""+c.dataelement+"",i)}var t=a("<ul/>");var e=a("<div/>").text(c.prev).click(function(){if(a(this).hasClass("disabled")){return false}r=parseInt(t.find("li a.active").text())-1;s(--r)}).addClass("btn");var f=a("<div/>").text(c.next).click(function(){if(a(this).hasClass("disabled")){return false}r=parseInt(t.find("li a.active").text());s(r)}).addClass("btn");var d=a("<div/>").text(c.first).click(function(){if(a(this).hasClass("disabled")){return false}r=0;s(0)}).addClass("btn");var v=a("<div/>").text(c.last).click(function(){if(a(this).hasClass("disabled")){return false}r=q-1;s(r)}).addClass("btn");var p=a("<input/>").attr("type","text").keydown(function(x){if(n(p)){p.val("")}if(x.which>=48&&x.which<58){var w=parseInt(p.val()+(x.which-48));if(!(w>0&&w<=q)){x.preventDefault()}}else{if(!(x.which==8||x.which==46)){x.preventDefault()}}});var h=a("<input/>").attr("type","button").attr("value",c.go).addClass("btn").click(function(){if(p.val()==""){return false}else{r=parseInt(p.val())-1;s(r)}});l.append(d).append(e).append(t).append(f).append(v).append(a("<div/>").addClass("short").append(p).append(h));if(c.display=="single"){h.css("display","none");p.css("display","none")}u(k);if(c.initval==0){c.initval=1}r=c.initval-1;s(r);g=true;function o(w){l.find("span").remove();var x=(w+1)*c.recordsperpage;if(x>c.totalrecords){x=c.totalrecords}l.append(a("<span/>").append(a("<b/>").text(w*c.recordsperpage+1))).append(a("<span/>").text("-")).append(a("<span/>").append(a("<b/>").text(x))).append(a("<span/>").text("of")).append(a("<span/>").append(a("<b/>").text(c.totalrecords)))}function u(x){t.find("li").remove();if(c.totalrecords<=c.recordsperpage){return}for(var w=x;w<x+c.length;w++){if(w==q){break}t.append(a("<li/>").append(a("<a>").attr("id",(w+1)).addClass(c.theme).addClass("normal").attr("href","javascript:void(0)").text(w+1)).click(function(){r=x+a(this).closest("li").prevAll().length;s(r)}))}o(x);p.val((x+1));t.find("li a").addClass(c.theme).removeClass("active");t.find("li:eq(0) a").addClass(c.theme).addClass("active");var z=t.find("li:eq(0) a").outerWidth()+(parseInt(t.find("li:eq(0)").css("margin-left"))*2);var y=z*t.find("li").length;t.css({width:y});j(x)}function s(C){var y=C;var x=c.length/2;if(c.length%2>0){x=(c.length+1)/2}var B=0;if(C>=0&&C<q){if(C>=x){if(q-C>x){B=C-(x-1)}else{if(q>c.length){B=q-c.length}}}u(B);o(r);t.find("li a").removeClass("active");p.val(r+1);t.find('li a[id="'+(y+1)+'"]').addClass("active");var A=r*c.recordsperpage;var w=A+c.recordsperpage;if(w>c.totalrecords){w=c.totalrecords%w}if(g){if(c.onchange!=null){c.onchange((r+1),A,w)}}if(i!=null){if(i.length>0){m.css("display","none");if(a(m[0]).find("th").length>0){a(m[0]).css("display","");A++;w++}for(var z=A;z<w;z++){a(m[z]).css("display","")}}}j()}}function j(){if(q>c.length){if(r>0){if(!c.controlsalways){e.css("display","")}else{e.css("display","").removeClass("disabled")}}else{if(!c.controlsalways){e.css("display","none")}else{e.css("display","").addClass("disabled")}}if(r>c.length/2-1){if(!c.controlsalways){d.css("display","")}else{d.css("display","").removeClass("disabled")}}else{if(!c.controlsalways){d.css("display","none")}else{d.css("display","").addClass("disabled")}}if(r==q-1){if(!c.controlsalways){f.css("display","none")}else{f.css("display","").addClass("disabled")}}else{if(!c.controlsalways){f.css("display","")}else{f.css("display","").removeClass("disabled")}}if(q>c.length&&r<(q-(c.length/2))-1){if(!c.controlsalways){v.css("display","")}else{v.css("display","").removeClass("disabled")}}else{if(!c.controlsalways){v.css("display","none")}else{v.css("display","").addClass("disabled")}}}else{if(!c.controlsalways){d.css("display","none");e.css("display","none");f.css("display","none");v.css("display","none")}else{d.css("display","").addClass("disabled");e.css("display","").addClass("disabled");f.css("display","").addClass("disabled");v.css("display","").addClass("disabled")}}}function n(y){var x=y.get(0).selectionStart;var w=y.get(0).selectionEnd;var z=document.selection;if(z&&z.createRange().text.length!=0){return true}else{if(!z&&y.val().substring(x,w).length!=0){return true}}return false}})}})})(jQuery);