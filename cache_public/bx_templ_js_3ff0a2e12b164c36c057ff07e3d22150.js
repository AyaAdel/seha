
 {
function fviuDelete(sName,oLink){var $this=this;var oDate=new Date()}
function fvtTogglePopup(sName,oLink){var oPopup=$(oLink).parents('.bx-form-input-translator:first').find('#bx-form-field-translator-popup-'+sName);if(oPopup.filter(':visible').length>0){oPopup.dolPopupHide();return}
oPopup.dolPopup({moveToDocRoot:!1,pointer:{el:$(oLink)}})};function fvtSelectLanguage(sName,sLangName,oLink){var oTranslator=$(oLink).parents('.bx-form-input-translator:first');var sId='#bx-form-language-'+sName+'-'+sLangName;$(oLink).parent().siblings('.active:visible').hide().siblings('.not-active:hidden').show().siblings(sId+'-pas:visible').hide().siblings(sId+'-act:hidden').show();oTranslator.find('.bx-form-input-language-current').css('background-image',$(oLink).parent('.bx-form-input-language').css('background-image')).find('a').html($(oLink).html());oTranslator.find('#bx-form-field-translator-popup-'+sName).dolPopupHide();$(oLink).parents('#bx-form-element-'+sName+':first').find('.bx-form-input-text:visible, .bx-form-input-textarea:visible').hide().siblings('#bx-form-input-'+sName+'-'+sLangName+':hidden').show()}
 }

 {
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2.W=b(7){7=2.R({y:o,L:o,K:Y,x:o,A:o,n:o,J:Y},7);g(7.y){g(2.V(7.A)&&2.m(7.n)===\'o\'){7.n=b(M,z,e){7.A(z,e)}}D g(2.m(7.A)===2.m(7.n)===\'o\'){7.n=b(M,z,e){1j.X&&X.1i(\'W 1h 1g 1f h\',M,z,e)}}1e $.1d({m:\'1c\',y:7.y,L:7.L,K:7.K,1b:(2.T.S)?"6":"4",x:b(4){f h=k I(4);g(2.V(7.x))7.x(h)},n:7.n,J:7.J})}};b I(4){g(4)3.U(4)};I.v={m:\'\',p:\'\',d:\'\',c:\'\',j:\'\',U:b(4){g(2.T.S){f H=k 1a("19.18");H.17(4);4=H}g(2(\'9\',4).E==1){3.m=\'C\';f w=k F(4)}D g(2(\'h\',4).E==1){3.m=\'16\';f w=k G(4)}g(w)2.R(3,w)}};b s(){};s.v={d:\'\',c:\'\',j:\'\',l:\'\',r:\'\'};b G(4){3.u(4)};G.v={u:b(4){f 9=2(\'h\',4).a(0);3.p=\'1.0\';3.d=2(9).5(\'d:i\').6();3.c=2(9).5(\'c:i\').t(\'Q\');3.j=2(9).5(\'15:i\').6();3.B=2(9).t(\'4:14\');3.l=2(9).5(\'l:i\').6();3.q=k P();f h=3;2(\'13\',4).O(b(){f 8=k s();8.d=2(3).5(\'d\').a(0).6();8.c=2(3).5(\'c\').a(0).t(\'Q\');8.j=2(3).5(\'12\').a(0).6();8.l=2(3).5(\'l\').a(0).6();8.r=2(3).5(\'r\').a(0).6();h.q.N(8)})}};b F(4){3.u(4)};F.v={u:b(4){g(2(\'C\',4).E==0)3.p=\'1.0\';D 3.p=2(\'C\',4).a(0).t(\'p\');f 9=2(\'9\',4).a(0);3.d=2(9).5(\'d:i\').6();3.c=2(9).5(\'c:i\').6();3.j=2(9).5(\'j:i\').6();3.B=2(9).5(\'B:i\').6();3.l=2(9).5(\'11:i\').6();3.q=k P();f h=3;2(\'8\',4).O(b(){f 8=k s();8.d=2(3).5(\'d\').a(0).6();8.c=2(3).5(\'c\').a(0).6();8.j=2(3).5(\'j\').a(0).6();8.l=2(3).5(\'10\').a(0).6();8.r=2(3).5(\'Z\').a(0).6();h.q.N(8)})}};',62,82,'||jQuery|this|xml|find|text|options|item|channel|eq|function|link|title||var|if|feed|first|description|new|updated|type|error|null|version|items|id|JFeedItem|attr|_parse|prototype|feedClass|success|url|msg|failure|language|rss|else|length|JRss|JAtom|xmlDoc|JFeed|global|cache|data|xhr|push|each|Array|href|extend|msie|browser|parse|isFunction|getFeed|console|true|guid|pubDate|lastBuildDate|content|entry|lang|subtitle|atom|loadXML|XMLDOM|Microsoft|ActiveXObject|dataType|GET|ajax|return|load|to|failed|log|window'.split('|')))
 }

 {
(function($){$.fn.dolRSSFeed=function(oOptions){var oOptions=oOptions||{};return this.each(function(){var $Cont=$(this);var sRSSObject=$Cont.attr('rssobject');var iRSSID=$Cont.attr('rssid');if((!iRSSID||!sRSSObject)&&oOptions.forceUrl==undefined)
return!1;var iMaxNum=parseInt($Cont.attr('rssnum')||0);var iMemID=parseInt($Cont.attr('member')||0);var sFeedURL=(oOptions.forceUrl!=undefined)?oOptions.forceUrl:sUrlRoot+'get_rss_feed.php?object='+sRSSObject+'&id='+iRSSID+'&member='+iMemID;bx_loading_content($(this),!0,!0);$.getFeed({url:sFeedURL,error:function(oResponse){if(typeof oOptions.onError=='function')
oOptions.onError()},success:function(feed){if(feed==undefined||!feed.items)
return;if(typeof oOptions.onLoad=='function')
oOptions.onLoad();var sCode='<div class="sys-rss-feed-wrapper bx-def-bc-margin bx-def-padding-sec-top">';var sTarget,iCount=0;for(var iItemId=0;iItemId<feed.items.length;iItemId ++){var item=feed.items[iItemId];var sDate='',oDate,a;if(null!=(a=item.updated.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)Z/))){oDate=new Date(a[1],a[2]-1,a[3],a[4],a[5],a[6],0);sDate=oDate.toLocaleString()}else if(item.updated.length>0){oDate=new Date(item.updated.replace(/z$/i,"-00:00"));sDate=isNaN(oDate)?'':oDate.toLocaleString()}
sTarget='';if(item.link.substring(0,sUrlRoot.length)!=sUrlRoot)
sTarget='target="_blank"';sCode+='<div class="sys-rss-item-wrapper">'+'<div class="sys-rss-item-header bx-def-font-h2">'+'<a href="'+item.link+'" '+sTarget+'>'+item.title+'</a>'+'</div>'+'<div class="sys-rss-item-desc">'+item.description+'</div>'+'<div class="sys-rss-item-info bx-def-font-small bx-def-font-grayed">'+'<span>'+sDate+'</span>'+'</div>'+'</div>'+'<hr class="bx-def-hr bx-def-margin-sec-top bx-def-margin-sec-bottom" />';iCount ++;if(iCount==iMaxNum)
break}
sTarget='';if(feed.link.substring(0,sUrlRoot.length)!=sUrlRoot)
sTarget='target="_blank"';sCode+='</div>'+'<div class="sys-rss-read-more">'+'<i class="sys-icon link"></i><a href="'+feed.link+'" '+sTarget+' class="bx-def-margin-sec-left sys-rss-read-more-link">'+feed.title+'</a>'+'</div>';$Cont.hide().html(sCode);if(typeof oOptions.onBeforeShow=='function')
oOptions.onBeforeShow();$Cont.show();if(typeof oOptions.onShow=='function')
oOptions.onShow()}})})}})(jQuery)
 }

 {
function BxDolStudioPage(oOptions){this.sActionsUrl=oOptions.sActionUrl;this.sObjName=oOptions.sObjName==undefined?'oBxDolStudioPage':oOptions.sObjName;this.sAnimationEffect=oOptions.sAnimationEffect==undefined?'slide':oOptions.sAnimationEffect;this.iAnimationSpeed=oOptions.iAnimationSpeed==undefined?'slow':oOptions.iAnimationSpeed;this.oPopupOptions={fog:{color:'#fff',opacity:.7},closeOnOuterClick:!1}}
BxDolStudioPage.prototype.processJson=function(oData){bx_loading('bx-std-page-columns',!1);processJsonData(oData)};BxDolStudioPage.prototype.togglePopup=function(sName,oLink){var $this=this;var sId='#bx-std-pcap-menu-popup-'+sName;if($(sId+':visible').length>0){$(sId).dolPopupHide();return}
$(oLink).parent().addClass('bx-menu-tab-active');var oPopupOptions={pointer:{el:$(oLink)},onHide:function(){$(oLink).parent().removeClass('bx-menu-tab-active')}};switch(sName){case 'help':oPopupOptions=$.extend({},oPopupOptions,{onBeforeShow:function(){var oPopup=$(sId);var oPopupRss=oPopup.find('.RSSAggrCont');if(oPopupRss.contents().length)
return;oPopupRss.dolRSSFeed({onError:function(){oPopupRss.html(_t('_adm_txt_show_help_content_empty'));oPopup._dolPopupSetPosition(oPopupOptions)},onShow:function(){oPopup._dolPopupSetPosition(oPopupOptions)}});oPopup._dolPopupSetPosition(oPopupOptions)}});break}
if($(sId).html().length>0)
$(sId).dolPopup(oPopupOptions)};BxDolStudioPage.prototype.bookmark=function(sPageName,oLink){var oDate=new Date();$.get(this.sActionsUrl,{action:'page-bookmark',page:sPageName,_t:oDate.getTime()},function(oData){if(oData.code!=0){bx_alert(oData.message);return}
$(oLink).attr('title',oData.title);$(oLink).find('img').attr('src',oData.icon).attr('title',oData.title)},'json');return!0}
 }

 {
function BxDolStudioSettings(oOptions){this.sActionsUrl=oOptions.sActionUrl;this.sObjName=oOptions.sObjName==undefined?'oBxDolStudioSettings':oOptions.sObjName;this.sType=oOptions.sType==undefined?'':oOptions.sType;this.sCategory=oOptions.sCategory==undefined?'':oOptions.sCategory;this.sMix=oOptions.sMix==undefined?'':oOptions.sMix;this.sAnimationEffect=oOptions.sAnimationEffect==undefined?'fade':oOptions.sAnimationEffect;this.iAnimationSpeed=oOptions.iAnimationSpeed==undefined?'slow':oOptions.iAnimationSpeed}
BxDolStudioSettings.prototype.mixCreate=function(oButton){this.mixActionWithValue(oButton,'create-mix')};BxDolStudioSettings.prototype.onMixCreate=function(oData){document.location.href=document.location.href};BxDolStudioSettings.prototype.mixImport=function(oButton){this.mixActionWithValue(oButton,'import-mix')};BxDolStudioSettings.prototype.onMixImport=function(oData){document.location.href=document.location.href};BxDolStudioSettings.prototype.mixSelect=function(oSelect){this.mixActionWithValue(oSelect,'select-mix',$(oSelect).val())};BxDolStudioSettings.prototype.onMixSelect=function(oData){document.location.href=document.location.href};BxDolStudioSettings.prototype.mixExport=function(oButton,iId){this.mixActionWithValue(oButton,'export-mix',iId)};BxDolStudioSettings.prototype.onMixExport=function(oData){document.location.href=oData.url};BxDolStudioSettings.prototype.mixPublish=function(oButton,iId){this.mixActionWithValue(oButton,'publish-mix',iId)};BxDolStudioSettings.prototype.onMixPublish=function(oData){document.location.href=document.location.href};BxDolStudioSettings.prototype.mixHide=function(oButton,iId){this.mixActionWithValue(oButton,'hide-mix',iId)};BxDolStudioSettings.prototype.onMixHide=function(oData){document.location.href=document.location.href};BxDolStudioSettings.prototype.mixDelete=function(oButton,iId){this.mixActionWithValue(oButton,'delete-mix',iId,1)};BxDolStudioSettings.prototype.onMixDelete=function(oData){document.location.href=document.location.href};BxDolStudioSettings.prototype.mixAction=function(oSource,sAction){var $this=this;var oDate=new Date();$.post(sUrlStudio+'settings.php',{page:this.sType,category:this.sCategory,stg_action:sAction,_t:oDate.getTime()},function(oData){$this.processResult(oData)},'json')};BxDolStudioSettings.prototype.mixActionWithValue=function(oSource,sAction,mixedValue,bConfirm){var $this=this;var oDate=new Date();var oPerform=function(){$.post(sUrlStudio+'settings.php',{page:$this.sType,category:$this.sCategory,stg_action:sAction,stg_value:mixedValue,_t:oDate.getTime()},function(oData){$this.processResult(oData)},'json')};if(bConfirm!=undefined&&parseInt(bConfirm)==1)
bx_confirm('',oPerform);else oPerform()};BxDolStudioSettings.prototype.changePage=function(sType){var oDate=new Date();var $this=this;$.get(this.sActionsUrl,{stg_action:'get-page-by-type',stg_value:sType,_t:oDate.getTime()},function(oData){if(oData.code!=0){bx_alert(oData.message);return}
$('#bx-std-pc-menu > .bx-std-pmi-active').removeClass('bx-std-pmi-active');$('#bx-std-pmi-'+sType).addClass('bx-std-pmi-active');$('#bx-std-pc-content').bx_anim('hide',$this.sAnimationEffect,$this.iAnimationSpeed,function(){$(this).html(oData.content).bx_anim('show',$this.sAnimationEffect,$this.iAnimationSpeed)})},'json');return!0};BxDolStudioSettings.prototype.processResult=function(oData){var $this=this;if(oData&&oData.message!=undefined&&oData.message.length!=0)
$(document).dolPopupAlert({message:oData.message});if(oData&&oData.reload!=undefined&&parseInt(oData.reload)==1)
document.location=document.location;if(oData&&oData.popup!=undefined){var oPopup=$(oData.popup).hide();$('#'+oPopup.attr('id')).remove();oPopup.prependTo('body').dolPopup({fog:{color:'#fff',opacity:.7},closeOnOuterClick:!1})}
if(oData&&oData.eval!=undefined)
eval(oData.eval)}
 }

 {
function BxDolStudioPolyglot(oOptions){this.sActionsUrl=oOptions.sActionUrl;this.sObjName=oOptions.sObjName==undefined?'oBxDolStudioPolyglot':oOptions.sObjName;this.sAnimationEffect=oOptions.sAnimationEffect==undefined?'fade':oOptions.sAnimationEffect;this.iAnimationSpeed=oOptions.iAnimationSpeed==undefined?'slow':oOptions.iAnimationSpeed;this.sCodeMirror=oOptions.sCodeMirror==undefined?'':oOptions.sCodeMirror;this.sPage=oOptions.sPage==undefined?'general':oOptions.sPage;var $this=this;$(document).ready(function(){if($this.sCodeMirror!='')
$this.initCodeMirror($this.sCodeMirror)})}
BxDolStudioPolyglot.prototype.initCodeMirror=function(sSelector){var oSelector=$(sSelector);for(var i=0;i<oSelector.length;i++){var e=CodeMirror.fromTextArea(oSelector.get(i),{lineNumbers:!0,mode:"htmlmixed",htmlMode:!0,matchBrackets:!0})}};BxDolStudioPolyglot.prototype.changePage=function(sType,iStart,iLength){var oDate=new Date();var $this=this;var oParams={pgt_action:'get-page-by-type',pgt_value:sType,_t:oDate.getTime()};if(sType=='keys'){oParams.pgt_category=$('#pgt-keys-category').val();oParams.pgt_language=$('#pgt-keys-language').val();oParams.pgt_keyword=$('#pgt-keys-keyword').val();if(iStart)
oParams.pgt_start=iStart;if(iLength)
oParams.pgt_length=iLength}
$.get(this.sActionsUrl,oParams,function(oData){if(oData.code!=0){bx_alert(oData.message);return!0}
$('#bx-std-pc-menu > .bx-std-pmi-active').removeClass('bx-std-pmi-active');$('#bx-std-pmi-'+sType).addClass('bx-std-pmi-active');$('#bx-std-pc-content').bx_anim('hide',$this.sAnimationEffect,$this.iAnimationSpeed,function(){$(this).html(oData.content).bx_anim('show',$this.sAnimationEffect,$this.iAnimationSpeed)})},'json');return!0}
 }

 {
function BxDolStudioMenuTop(oOptions){this.sActionsUrl=oOptions.sActionUrl;this.sObjName=oOptions.sObjName==undefined?'oBxDolStudioMenuTop':oOptions.sObjName;this.sAnimationEffect=oOptions.sAnimationEffect==undefined?'slide':oOptions.sAnimationEffect;this.iAnimationSpeed=oOptions.iAnimationSpeed==undefined?'slow':oOptions.iAnimationSpeed}
BxDolStudioMenuTop.prototype.clickEdit=function(oItem){var oParent=$(oItem).parent();if(oParent.hasClass('bx-menu-tab-active')){oParent.removeClass('bx-menu-tab-active');oBxDolStudioLauncher.disableJitter()}else{oParent.addClass('bx-menu-tab-active');oBxDolStudioLauncher.enableJitter()}};BxDolStudioMenuTop.prototype.clickFavorite=function(oItem){var oParent=$(oItem).parent();if(oParent.hasClass('bx-menu-tab-active')){oParent.removeClass('bx-menu-tab-active');oBxDolStudioLauncher.disableFavorites()}else{oParent.addClass('bx-menu-tab-active');oBxDolStudioLauncher.enableFavorites()}};BxDolStudioMenuTop.prototype.clickLogout=function(oItem){$(oItem).parent().toggleClass('bx-menu-tab-active')}
 }
