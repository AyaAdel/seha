
 {
function fviuDelete(sName,oLink){var $this=this;var oDate=new Date()}
function fvtTogglePopup(sName,oLink){var oPopup=$(oLink).parents('.bx-form-input-translator:first').find('#bx-form-field-translator-popup-'+sName);if(oPopup.filter(':visible').length>0){oPopup.dolPopupHide();return}
oPopup.dolPopup({moveToDocRoot:!1,pointer:{el:$(oLink)}})};function fvtSelectLanguage(sName,sLangName,oLink){var oTranslator=$(oLink).parents('.bx-form-input-translator:first');var sId='#bx-form-language-'+sName+'-'+sLangName;$(oLink).parent().siblings('.active:visible').hide().siblings('.not-active:hidden').show().siblings(sId+'-pas:visible').hide().siblings(sId+'-act:hidden').show();oTranslator.find('.bx-form-input-language-current').css('background-image',$(oLink).parent('.bx-form-input-language').css('background-image')).find('a').html($(oLink).html());oTranslator.find('#bx-form-field-translator-popup-'+sName).dolPopupHide();$(oLink).parents('#bx-form-element-'+sName+':first').find('.bx-form-input-text:visible, .bx-form-input-textarea:visible').hide().siblings('#bx-form-input-'+sName+'-'+sLangName+':hidden').show()}
 }

 {
function BxDolGrid(sObject,oOptions){this._iSearchTimeoutId=!1;this._sObject=sObject;this._sIdWrapper='bx-grid-wrap-'+sObject;this._sIdContainer='bx-grid-cont-'+sObject;this._sIdTable='bx-grid-table-'+sObject;this._oOptions=oOptions;this._sFilter=undefined==oOptions.filter?'':oOptions.filter;this._sOrderField=undefined==oOptions.order_field?'':oOptions.order_field;this._sOrderDir=undefined==oOptions.order_dir?'ASC':oOptions.order_dir;this._sSearchInputText=undefined==oOptions.text_search_input?'':oOptions.text_search_input;this._oPopupOptions=$.extend({onBeforeShow:function(oElement){jQuery(oElement).bxProcessHtml()}},oOptions.popup_options);this._oQueryAppend=oOptions.query_append;this._oConfirmMessages=oOptions.confirm_messages;if(this._sFilter.length)
this._sSearchInputText=this._sFilter;$('#bx-grid-search-'+this._sObject).val(this._sSearchInputText);this._onDataReloaded();if(this._sOrderField.length)
this.setSorting(this._sOrderField,this._sOrderDir,!0)}
BxDolGrid.prototype.resetSorting=function(sField,sDir){this._sOrderField='';this._sOrderDir='ASC';this.reload(0)};BxDolGrid.prototype.setSorting=function(sField,sDir,isDisableReload){if(typeof(sField)=="undefined"||0==sField.length)
return;if(typeof(sDir)!="undefined")
this._sOrderDir='DESC'==sDir?'DESC':'ASC';else this._sOrderDir='ASC';this._sOrderField=sField;var sHtmlIndi='ASC'==this._sOrderDir?' &darr;':' &uarr;';jQuery('#'+this._sIdTable+' *[bx_grid_sort_head] .bx-grid-sort-indi').hide();jQuery('#'+this._sIdTable+' *[bx_grid_sort_head='+sField+'] .bx-grid-sort-indi').html(sHtmlIndi).show();if(typeof(isDisableReload)=="undefined"||!isDisableReload)
this.reload(0)};BxDolGrid.prototype.setFilter=function(sFilter,isReload){if(this._sFilter==sFilter)
return;this._sFilter=sFilter;if(isReload){if(sFilter.length>0)
this.reload(0);else this.reload()}};BxDolGrid.prototype.orderable=function(){var $this=this;jQuery('#'+this._sIdTable+' *[bx_grid_sort_head] .bx-grid-sort-handle').bind('click',function(){var sField=$(this).parents('*[bx_grid_sort_head]').attr('bx_grid_sort_head');if(sField){$this.setSorting(sField,sField==$this._sOrderField?('ASC'==$this._sOrderDir?'DESC':'ASC'):undefined)}});if(this._sOrderField)
this.setSorting(this._sOrderField,this._sOrderDir,!0)};BxDolGrid.prototype.sortable=function(){var $this=this;jQuery('#'+this._sIdTable+' tbody .bx-grid-drag-handle').show();jQuery('#'+this._sIdTable+' tbody').sortable({handle:'.bx-grid-drag-handle',placeholder:'bx-grid-drag-placeholder',items:'tr',forcePlaceholderSize:!0,start:function(oEvent,oUi){jQuery('#'+$this._sIdTable+' tbody tr').removeClass('bx-def-color-bg-hl bx-grid-table-row-trans');oUi.placeholder.html('<td colspan="'+$this._oOptions.columns+'">&rarr;</td>');oUi.item.addClass('bx-grid-gragging-row bx-def-color-bg-active')},stop:function(oEvent,oUi){oUi.item.removeClass('bx-grid-gragging-row');jQuery('#'+$this._sIdTable+' tbody tr:odd').addClass('bx-def-color-bg-hl');$this.blink(oUi.item.attr('id'));var s=jQuery('#'+$this._sIdTable+' tbody').sortable('serialize');$this.action('reorder',{},s,!0)}})};BxDolGrid.prototype.blink=function(sId){var e=jQuery('#'+sId);e.removeClass('bx-grid-table-row-trans');e.addClass('bx-def-color-bg-active');setTimeout('glGrids.'+this._sObject+'._blinkCallback("'+sId+'")',200)};BxDolGrid.prototype.enable=function(sId,isEnable){var e=jQuery('#'+sId);var eActions=e.find('.bx-grid-cell-single-actions-wrapper *[bx_grid_action_single]').not('*[bx_grid_permanent_state]');if(isEnable){e.removeClass('bx-grid-table-row-disabled bx-def-font-grayed');eActions.removeClass('bx-btn-disabled');if(eActions.length)
this._bindActionsSingle(e)}else{eActions.addClass('bx-btn-disabled');e.addClass('bx-grid-table-row-disabled bx-def-font-grayed');if(eActions.length)
this._unbindActionsSingle(e)}};BxDolGrid.prototype._blinkCallback=function(sId){var e=jQuery('#'+sId);e.addClass('bx-grid-table-row-trans');e.removeClass('bx-def-color-bg-active')};BxDolGrid.prototype.actionWithId=function(sId,sAction,oData,sData,isDisableLoading,isConfirm){var sDataAdd='ids[]='+sId;if(typeof(sData)=="undefined"||!sData.length){sData=sDataAdd}else{if('&'!=sData[sData.length-1])
sData+='&';sData+=sDataAdd}
this.action(sAction,oData,sData,isDisableLoading,isConfirm)};BxDolGrid.prototype.actionWithSelected=function(sActionData,sAction,oData,sData,isDisableLoading,isConfirm){var sDataAdd='';jQuery("#"+this._sIdTable+" input[name="+this._sObject+"_check]:checked").each(function(){if(sDataAdd.length)
sDataAdd+="&";sDataAdd+='ids[]='+$(this).val()});if(!sDataAdd.length)
return;if(typeof(sData)=="undefined"||!sData.length){sData=sDataAdd}else{if('&'!=sData[sData.length-1])
sData+='&';sData+=sDataAdd}
this.action(sAction,oData,sData,isDisableLoading,isConfirm)};BxDolGrid.prototype.action=function(sAction,oData,sData,isDisableLoading,isConfirm){var $this=this;var fPerform=function(){var i;var sUrl=sUrlRoot+"grid.php?o="+$this._sObject+"&a="+sAction;if(typeof($this._oQueryAppend)=='object')
oData=$.extend({},$this._oQueryAppend,oData);for(i in oData)
sUrl+="&"+i+"="+encodeURIComponent(oData[i]);if(typeof(sData)!='undefined')
sUrl+='&'+sData;if($this._sFilter.length)
sUrl+='&'+$this._oOptions.filter_get+'='+encodeURIComponent($this._sFilter);if($this._sOrderField.length)
sUrl+='&'+$this._oOptions.order_get_field+'='+encodeURIComponent($this._sOrderField);if($this._sOrderDir.length)
sUrl+='&'+$this._oOptions.order_get_dir+'='+encodeURIComponent($this._sOrderDir);sUrl+='&_r='+Math.random();if(typeof(isDisableLoading)=='undefined'||!isDisableLoading)
$this.loading(!0);if(sUrl.length<2048)
$.getJSON(sUrl,function(oResult){$this.processJson(oResult,sAction,isDisableLoading)});else{var oUri=new URI(sUrl);oData=oUri.query(!0);sUrl=oUri.query("").toString();$.post(sUrl,oData,function(oResult){$this.processJson(oResult,sAction,isDisableLoading)},'json')}};if(typeof(isConfirm)!='undefined'&&parseInt(isConfirm)==1)
bx_confirm(typeof(this._oConfirmMessages[sAction])=='undefined'?_t('_sys_grid_confirmation'):this._oConfirmMessages[sAction],function(){fPerform()});else fPerform()};BxDolGrid.prototype.processJson=function(oData,sAction,isDisableLoading){var $this=this;var fContinue=function(){if(oData&&undefined!=oData.grid){$('#'+$this._sIdContainer).html($(oData.grid).find('#'+$this._sIdContainer).html());var sFooter=$(oData.grid).find('.bx-grid-footer').size()?$(oData.grid).find('.bx-grid-footer').html():'';$('#'+$this._sIdWrapper).find('.bx-grid-footer').html(sFooter);$this._onDataReloaded(!0)}
if(oData&&undefined!=oData.blink){if('object'==typeof(oData.blink)){for(var i in oData.blink)
$this.blink($this._sObject+'_row_'+oData.blink[i]);}else{$this.blink($this._sObject+'_row_'+oData.blink)}}
if(oData&&undefined!=oData.disable){if('object'==typeof(oData.disable)){for(var i in oData.disable)
$this.enable($this._sObject+'_row_'+oData.disable[i],!1);}else{$this.enable($this._sObject+'_row_'+oData.disable,!1)}}
if(oData&&undefined!=oData.enable){if('object'==typeof(oData.enable)){for(var i in oData.enable)
$this.enable($this._sObject+'_row_'+oData.enable[i],!0);}else{$this.enable($this._sObject+'_row_'+oData.enable,!0)}}
if(oData&&undefined!=oData.popup){var sId='grid-popup-'+$this._sObject+'-'+sAction;$('#'+sId).remove();if('object'==typeof(oData.popup)){var o=$.extend({},$this._oPopupOptions,oData.popup.options);$('<div id="'+sId+'" style="display: none;"></div>').prependTo('body').html(oData.popup.html);$('#'+sId).dolPopup(o)}else{$('<div id="'+sId+'" style="display: none;"></div>').prependTo('body').html(oData.popup);$('#'+sId).dolPopup($this._oPopupOptions)}}
if(oData&&undefined!=oData.eval){eval(oData.eval)}};if(typeof(isDisableLoading)=='undefined'||!isDisableLoading)
this.loading(!1);if(oData&&undefined!=oData.msg){bx_alert(oData.msg,function(){fContinue()})}else fContinue()};BxDolGrid.prototype.loading=function(bShow){bx_loading(this._sIdContainer,bShow)};BxDolGrid.prototype.reload=function(iStart,iPerPage){var oData=this._getActionDataForReload(iStart,iPerPage);this.action('display',oData)};BxDolGrid.prototype._getActionDataForReload=function(iStart,iPerPage){var oData={};if(typeof(iStart)!='undefined'){oData[this._oOptions.paginate_get_start]=iStart;this._oOptions.start=iStart}else{oData[this._oOptions.paginate_get_start]=this._oOptions.start}
if(this._oOptions.paginate_get_per_page.length){if(typeof(iPerPage)!='undefined'){oData[this._oOptions.paginate_get_per_page]=iPerPage;this._oOptions.per_page=iPerPage}else{oData[this._oOptions.paginate_get_per_page]=this._oOptions.per_page}}
return oData};BxDolGrid.prototype._unbindActionsSingle=function(eElement){var elements;if('undefined'==typeof(eElement))
elements=jQuery('#'+this._sIdWrapper+' *[bx_grid_action_single]');else elements=eElement.find('*[bx_grid_action_single]');elements.unbind('click')};BxDolGrid.prototype._bindActionsSingle=function(eElement){var $this=this;var elements;if('undefined'==typeof(eElement))
elements=jQuery('#'+this._sIdWrapper+' *[bx_grid_action_single]');else elements=eElement.find('*[bx_grid_action_single]');elements.not('.bx-btn-disabled').bind('click',function(){if($(this).hasClass('bx-btn-disabled'))
return;var sAction=$(this).attr('bx_grid_action_single');var sActionConfirm=$(this).attr('bx_grid_action_confirm');var sActionData=$(this).attr('bx_grid_action_data');var iActionResetPaginate=parseInt($(this).attr('bx_grid_action_reset_paginate'));var oData=iActionResetPaginate?{}:$this._getActionDataForReload();oData=$this._checkAppend(this,oData);$this.actionWithId(sActionData,sAction,oData,'',!1,sActionConfirm)})};BxDolGrid.prototype._bindActions=function(isSkipSearchInput){var $this=this;jQuery('#'+this._sIdContainer).bind('scroll',function(){if(-$(this).find('.bx-grid-table').position().left>=($(this).find('.bx-grid-table').width()-$(this).width()))
$(this).parents('.bx-grid-table-wrapper2').addClass('bx-grid-table-hide-shadow-after');else $(this).parents('.bx-grid-table-wrapper2').removeClass('bx-grid-table-hide-shadow-after');if($(this).find('.bx-grid-table').position().left>=0)
$(this).parents('.bx-grid-table-wrapper2').addClass('bx-grid-table-hide-shadow-before');else $(this).parents('.bx-grid-table-wrapper2').removeClass('bx-grid-table-hide-shadow-before')});jQuery('#'+this._sIdWrapper+' *[bx_grid_action_bulk]').bind('click',function(){if($(this).hasClass('bx-btn-disabled'))
return;var sAction=$(this).attr('bx_grid_action_bulk');var sActionConfirm=$(this).attr('bx_grid_action_confirm');var sActionData=$(this).attr('bx_grid_action_data');var iActionResetPaginate=parseInt($(this).attr('bx_grid_action_reset_paginate'));var oData=iActionResetPaginate?{}:$this._getActionDataForReload();oData=$this._checkAppend(this,oData);$this.actionWithSelected(sActionData,sAction,oData,'',!1,sActionConfirm)});this._bindActionsSingle();if(jQuery('#'+this._sIdWrapper+' .bx-switcher-cont input').length)
jQuery('#'+this._sIdWrapper).addWebForms();jQuery('#'+this._sIdWrapper+' .bx-switcher-cont input').bind('change',function(){var sAction=$(this).attr('bx_grid_action_single');var sActionConfirm=$(this).attr('bx_grid_action_confirm');var sActionData=$(this).attr('bx_grid_action_data');var iActionResetPaginate=parseInt($(this).attr('bx_grid_action_reset_paginate'));var oData=iActionResetPaginate?{}:$this._getActionDataForReload();$this.actionWithId(sActionData,sAction,$.extend({},oData,{checked:this.checked?1:0}),'',!1,sActionConfirm)});if(typeof(isSkipSearchInput)=='undefined'||!1==isSkipSearchInput){jQuery('#'+this._sIdWrapper+' *[bx_grid_action_independent]').bind('click',function(){if($(this).hasClass('bx-btn-disabled'))
return;var sAction=$(this).attr('bx_grid_action_independent');var sActionConfirm=$(this).attr('bx_grid_action_confirm');var iActionResetPaginate=parseInt($(this).attr('bx_grid_action_reset_paginate'));var oData=iActionResetPaginate?{}:$this._getActionDataForReload();oData=$this._checkAppend(this,oData);$this.action(sAction,oData,'',!1,sActionConfirm)});var callbackSearch=function(sTerm){clearTimeout($this._iSearchTimeoutId);$this._iSearchTimeoutId=setTimeout(function(){if(glGrids[$this._sObject])
glGrids[$this._sObject].setFilter(sTerm,!0)},500)};jQuery('#bx-grid-search-'+this._sObject).bind({keyup:function(e){callbackSearch(this.value)},focusout:function(e){if(0==this.value.length)
this.value=$this._sSearchInputText;callbackSearch(this.value==$this._sSearchInputText?'':this.value)},focusin:function(e){if(this.value==$this._sSearchInputText)
this.value=''}})}};BxDolGrid.prototype._onDataReloaded=function(isSkipSearchInput){jQuery('#'+this._sIdTable+' tbody tr:odd').addClass('bx-def-color-bg-hl');jQuery('#'+this._sIdTable).bxProcessHtml();if(this._oOptions.sorting)
this.orderable();if(this._oOptions.sortable&&0==this._sFilter.length&&0==this._sOrderField.length)
this.sortable();this._bindActions(isSkipSearchInput);this.onDataReloaded(isSkipSearchInput)};BxDolGrid.prototype.onDataReloaded=function(isSkipSearchInput){};BxDolGrid.prototype._checkAppend=function(oInput,oData){var oAppend=$.parseJSON($(oInput).attr('bx_grid_action_append'));if(typeof(oAppend)=='object')
oData=$.extend({},oData,oAppend);return oData}
 }

 {
function BxDolStudioPermissionsActions(oOptions){this._iSearchTimeoutId=!1;this.sActionsUrl=oOptions.sActionUrl;this.sPageUrl=oOptions.sPageUrl;this.sObjNameGrid=oOptions.sObjNameGrid;this.sObjName=oOptions.sObjName==undefined?'oBxDolStudioPermissionsActions':oOptions.sObjName;this.sAnimationEffect=oOptions.sAnimationEffect==undefined?'fade':oOptions.sAnimationEffect;this.iAnimationSpeed=oOptions.iAnimationSpeed==undefined?'slow':oOptions.iAnimationSpeed;this.sParamsDivider=oOptions.sParamsDivider==undefined?'#-#':oOptions.sParamsDivider;this.sTextSearchInput=oOptions.sTextSearchInput==undefined?'':oOptions.sTextSearchInput}
BxDolStudioPermissionsActions.prototype.onChangeLevel=function(){var iLevel=parseInt($('#bx-grid-level-'+this.sObjNameGrid).val().replace('id-',''));document.location.href=this.sPageUrl+(iLevel>0?'&level='+iLevel:'')};BxDolStudioPermissionsActions.prototype.onChangeFilter=function(){var $this=this;var sValueModule=$('#bx-grid-module-'+this.sObjNameGrid).val();var sValueSearch=$('#bx-grid-search-'+this.sObjNameGrid).val();if(sValueSearch==this.sTextSearchInput)
sValueSearch='';clearTimeout($this._iSearchTimeoutId);$this._iSearchTimeoutId=setTimeout(function(){glGrids[$this.sObjNameGrid].setFilter(sValueModule+$this.sParamsDivider+sValueSearch,!0)},500)}
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
function BxDolStudioPermissions(oOptions){this.sActionsUrl=oOptions.sActionUrl;this.sObjName=oOptions.sObjName==undefined?'oBxDolStudioPermissions':oOptions.sObjName;this.sAnimationEffect=oOptions.sAnimationEffect==undefined?'fade':oOptions.sAnimationEffect;this.iAnimationSpeed=oOptions.iAnimationSpeed==undefined?'slow':oOptions.iAnimationSpeed;this.sPage=oOptions.sPage==undefined?'general':oOptions.sPage}
 }

 {
function BxDolStudioMenuTop(oOptions){this.sActionsUrl=oOptions.sActionUrl;this.sObjName=oOptions.sObjName==undefined?'oBxDolStudioMenuTop':oOptions.sObjName;this.sAnimationEffect=oOptions.sAnimationEffect==undefined?'slide':oOptions.sAnimationEffect;this.iAnimationSpeed=oOptions.iAnimationSpeed==undefined?'slow':oOptions.iAnimationSpeed}
BxDolStudioMenuTop.prototype.clickEdit=function(oItem){var oParent=$(oItem).parent();if(oParent.hasClass('bx-menu-tab-active')){oParent.removeClass('bx-menu-tab-active');oBxDolStudioLauncher.disableJitter()}else{oParent.addClass('bx-menu-tab-active');oBxDolStudioLauncher.enableJitter()}};BxDolStudioMenuTop.prototype.clickFavorite=function(oItem){var oParent=$(oItem).parent();if(oParent.hasClass('bx-menu-tab-active')){oParent.removeClass('bx-menu-tab-active');oBxDolStudioLauncher.disableFavorites()}else{oParent.addClass('bx-menu-tab-active');oBxDolStudioLauncher.enableFavorites()}};BxDolStudioMenuTop.prototype.clickLogout=function(oItem){$(oItem).parent().toggleClass('bx-menu-tab-active')}
 }
