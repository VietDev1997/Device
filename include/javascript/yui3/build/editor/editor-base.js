/*
 Copyright (c) 2010, Yahoo! Inc. All rights reserved.
 Code licensed under the BSD License:
 http://developer.yahoo.com/yui/license.html
 version: 3.3.0
 build: 3167
 */
YUI.add('editor-base',function(Y){var EditorBase=function(){EditorBase.superclass.constructor.apply(this,arguments);},LAST_CHILD=':last-child',BODY='body';Y.extend(EditorBase,Y.Base,{frame:null,initializer:function(){var frame=new Y.Frame({designMode:true,title:EditorBase.STRINGS.title,use:EditorBase.USE,dir:this.get('dir'),extracss:this.get('extracss'),linkedcss:this.get('linkedcss'),defaultblock:this.get('defaultblock'),host:this}).plug(Y.Plugin.ExecCommand);frame.after('ready',Y.bind(this._afterFrameReady,this));frame.addTarget(this);this.frame=frame;this.publish('nodeChange',{emitFacade:true,bubbles:true,defaultFn:this._defNodeChangeFn});},destructor:function(){this.frame.destroy();this.detachAll();},copyStyles:function(from,to){if(from.test('a')){return;}
var styles=['color','fontSize','fontFamily','backgroundColor','fontStyle'],newStyles={};Y.each(styles,function(v){newStyles[v]=from.getStyle(v);});if(from.ancestor('b,strong')){newStyles.fontWeight='bold';}
if(from.ancestor('u')){if(!newStyles.textDecoration){newStyles.textDecoration='underline';}}
to.setStyles(newStyles);},_lastBookmark:null,_resolveChangedNode:function(n){var inst=this.getInstance(),lc,lc2,found;if(inst&&n&&n.test('html')){lc=inst.one(BODY).one(LAST_CHILD);while(!found){if(lc){lc2=lc.one(LAST_CHILD);if(lc2){lc=lc2;}else{found=true;}}else{found=true;}}
if(lc){if(lc.test('br')){if(lc.previous()){lc=lc.previous();}else{lc=lc.get('parentNode');}}
if(lc){n=lc;}}}
return n;},_defNodeChangeFn:function(e){var startTime=(new Date()).getTime();var inst=this.getInstance(),sel,cur,btag=inst.Selection.DEFAULT_BLOCK_TAG;if(Y.UA.ie){try{sel=inst.config.doc.selection.createRange();if(sel.getBookmark){this._lastBookmark=sel.getBookmark();}}catch(ie){}}
e.changedNode=this._resolveChangedNode(e.changedNode);switch(e.changedType){case'keydown':if(!Y.UA.gecko){if(!EditorBase.NC_KEYS[e.changedEvent.keyCode]&&!e.changedEvent.shiftKey&&!e.changedEvent.ctrlKey&&(e.changedEvent.keyCode!==13)){}}
break;case'tab':if(!e.changedNode.test('li, li *')&&!e.changedEvent.shiftKey){e.changedEvent.frameEvent.preventDefault();if(Y.UA.webkit){this.execCommand('inserttext','\t');}else if(Y.UA.gecko){this.frame.exec._command('inserthtml','<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>');}else if(Y.UA.ie){sel=new inst.Selection();sel._selection.pasteHTML(EditorBase.TABKEY);}}
break;}
if(Y.UA.webkit&&e.commands&&(e.commands.indent||e.commands.outdent)){var bq=inst.all('.webkit-indent-blockquote');if(bq.size()){bq.setStyle('margin','');}}
var changed=this.getDomPath(e.changedNode,false),cmds={},family,fsize,classes=[],fColor='',bColor='';if(e.commands){cmds=e.commands;}
Y.each(changed,function(el){var tag=el.tagName.toLowerCase(),cmd=EditorBase.TAG2CMD[tag];if(cmd){cmds[cmd]=1;}
var s=el.currentStyle||el.style;if((''+s.fontWeight)=='bold'){cmds.bold=1;}
if(Y.UA.ie){if(s.fontWeight>400){cmds.bold=1;}}
if(s.fontStyle=='italic'){cmds.italic=1;}
if(s.textDecoration=='underline'){cmds.underline=1;}
if(s.textDecoration=='line-through'){cmds.strikethrough=1;}
var n=inst.one(el);if(n.getStyle('fontFamily')){var family2=n.getStyle('fontFamily').split(',')[0].toLowerCase();if(family2){family=family2;}
if(family){family=family.replace(/'/g,'').replace(/"/g,'');}}
fsize=EditorBase.NORMALIZE_FONTSIZE(n);var cls=el.className.split(' ');Y.each(cls,function(v){if(v!==''&&(v.substr(0,4)!=='yui_')){classes.push(v);}});fColor=EditorBase.FILTER_RGB(n.getStyle('color'));var bColor2=EditorBase.FILTER_RGB(s.backgroundColor);if(bColor2!=='transparent'){if(bColor2!==''){bColor=bColor2;}}});e.dompath=inst.all(changed);e.classNames=classes;e.commands=cmds;if(!e.fontFamily){e.fontFamily=family;}
if(!e.fontSize){e.fontSize=fsize;}
if(!e.fontColor){e.fontColor=fColor;}
if(!e.backgroundColor){e.backgroundColor=bColor;}
var endTime=(new Date()).getTime();},getDomPath:function(node,nodeList){var domPath=[],domNode,inst=this.frame.getInstance();domNode=inst.Node.getDOMNode(node);while(domNode!==null){if((domNode===inst.config.doc.documentElement)||(domNode===inst.config.doc)||!domNode.tagName){domNode=null;break;}
if(!inst.DOM.inDoc(domNode)){domNode=null;break;}
if(domNode.nodeName&&domNode.nodeType&&(domNode.nodeType==1)){domPath.push(domNode);}
if(domNode==inst.config.doc.body){domNode=null;break;}
domNode=domNode.parentNode;}
if(domPath.length===0){domPath[0]=inst.config.doc.body;}
if(nodeList){return inst.all(domPath.reverse());}else{return domPath.reverse();}},_afterFrameReady:function(){var inst=this.frame.getInstance();this.frame.on('dom:mouseup',Y.bind(this._onFrameMouseUp,this));this.frame.on('dom:mousedown',Y.bind(this._onFrameMouseDown,this));this.frame.on('dom:keydown',Y.bind(this._onFrameKeyDown,this));if(Y.UA.ie){this.frame.on('dom:activate',Y.bind(this._onFrameActivate,this));this.frame.on('dom:beforedeactivate',Y.bind(this._beforeFrameDeactivate,this));}
this.frame.on('dom:keyup',Y.bind(this._onFrameKeyUp,this));this.frame.on('dom:keypress',Y.bind(this._onFrameKeyPress,this));inst.Selection.filter();this.fire('ready');},_beforeFrameDeactivate:function(){var inst=this.getInstance(),sel=inst.config.doc.selection.createRange();if((!sel.compareEndPoints('StartToEnd',sel))){sel.pasteHTML('<var id="yui-ie-cursor">');}},_onFrameActivate:function(){var inst=this.getInstance(),sel=new inst.Selection(),range=sel.createRange(),cur=inst.all('#yui-ie-cursor');if(cur.size()){cur.each(function(n){n.set('id','');range.moveToElementText(n._node);range.move('character',-1);range.move('character',1);range.select();range.text='';n.remove();});}},_onFrameMouseUp:function(e){this.fire('nodeChange',{changedNode:e.frameTarget,changedType:'mouseup',changedEvent:e.frameEvent});},_onFrameMouseDown:function(e){this.fire('nodeChange',{changedNode:e.frameTarget,changedType:'mousedown',changedEvent:e.frameEvent});},_currentSelection:null,_currentSelectionTimer:null,_currentSelectionClear:null,_onFrameKeyDown:function(e){var inst,sel;if(!this._currentSelection){if(this._currentSelectionTimer){this._currentSelectionTimer.cancel();}
this._currentSelectionTimer=Y.later(850,this,function(){this._currentSelectionClear=true;});inst=this.frame.getInstance();sel=new inst.Selection(e);this._currentSelection=sel;}else{sel=this._currentSelection;}
inst=this.frame.getInstance();sel=new inst.Selection();this._currentSelection=sel;if(sel&&sel.anchorNode){this.fire('nodeChange',{changedNode:sel.anchorNode,changedType:'keydown',changedEvent:e.frameEvent});if(EditorBase.NC_KEYS[e.keyCode]){this.fire('nodeChange',{changedNode:sel.anchorNode,changedType:EditorBase.NC_KEYS[e.keyCode],changedEvent:e.frameEvent});this.fire('nodeChange',{changedNode:sel.anchorNode,changedType:EditorBase.NC_KEYS[e.keyCode]+'-down',changedEvent:e.frameEvent});}}},_onFrameKeyPress:function(e){var sel=this._currentSelection;if(sel&&sel.anchorNode){this.fire('nodeChange',{changedNode:sel.anchorNode,changedType:'keypress',changedEvent:e.frameEvent});if(EditorBase.NC_KEYS[e.keyCode]){this.fire('nodeChange',{changedNode:sel.anchorNode,changedType:EditorBase.NC_KEYS[e.keyCode]+'-press',changedEvent:e.frameEvent});}}},_onFrameKeyUp:function(e){var sel=this._currentSelection;if(sel&&sel.anchorNode){this.fire('nodeChange',{changedNode:sel.anchorNode,changedType:'keyup',selection:sel,changedEvent:e.frameEvent});if(EditorBase.NC_KEYS[e.keyCode]){this.fire('nodeChange',{changedNode:sel.anchorNode,changedType:EditorBase.NC_KEYS[e.keyCode]+'-up',selection:sel,changedEvent:e.frameEvent});}}
if(this._currentSelectionClear){this._currentSelectionClear=this._currentSelection=null;}},execCommand:function(cmd,val){var ret=this.frame.execCommand(cmd,val),inst=this.frame.getInstance(),sel=new inst.Selection(),cmds={},e={changedNode:sel.anchorNode,changedType:'execcommand',nodes:ret};switch(cmd){case'forecolor':e.fontColor=val;break;case'backcolor':e.backgroundColor=val;break;case'fontsize':e.fontSize=val;break;case'fontname':e.fontFamily=val;break;}
cmds[cmd]=1;e.commands=cmds;this.fire('nodeChange',e);return ret;},getInstance:function(){return this.frame.getInstance();},render:function(node){this.frame.set('content',this.get('content'));this.frame.render(node);return this;},focus:function(fn){this.frame.focus(fn);return this;},show:function(){this.frame.show();return this;},hide:function(){this.frame.hide();return this;},getContent:function(){var html='',inst=this.getInstance();if(inst&&inst.Selection){html=inst.Selection.unfilter();}
html=html.replace(/ _yuid="([^>]*)"/g,'');return html;}},{NORMALIZE_FONTSIZE:function(n){var size=n.getStyle('fontSize'),oSize=size;switch(size){case'-webkit-xxx-large':size='48px';break;case'xx-large':size='32px';break;case'x-large':size='24px';break;case'large':size='18px';break;case'medium':size='16px';break;case'small':size='13px';break;case'x-small':size='10px';break;}
if(oSize!==size){n.setStyle('fontSize',size);}
return size;},TABKEY:'<span class="tab">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>',FILTER_RGB:function(css){if(css.toLowerCase().indexOf('rgb')!=-1){var exp=new RegExp("(.*?)rgb\\s*?\\(\\s*?([0-9]+).*?,\\s*?([0-9]+).*?,\\s*?([0-9]+).*?\\)(.*?)","gi");var rgb=css.replace(exp,"$1,$2,$3,$4,$5").split(',');if(rgb.length==5){var r=parseInt(rgb[1],10).toString(16);var g=parseInt(rgb[2],10).toString(16);var b=parseInt(rgb[3],10).toString(16);r=r.length==1?'0'+r:r;g=g.length==1?'0'+g:g;b=b.length==1?'0'+b:b;css="#"+r+g+b;}}
return css;},TAG2CMD:{'b':'bold','strong':'bold','i':'italic','em':'italic','u':'underline','sup':'superscript','sub':'subscript','img':'insertimage','a':'createlink','ul':'insertunorderedlist','ol':'insertorderedlist'},NC_KEYS:{8:'backspace',9:'tab',13:'enter',32:'space',33:'pageup',34:'pagedown',35:'end',36:'home',37:'left',38:'up',39:'right',40:'down',46:'delete'},USE:['substitute','node','selector-css3','selection','stylesheet'],NAME:'editorBase',STRINGS:{title:'Rich Text Editor'},ATTRS:{content:{value:'<br class="yui-cursor">',setter:function(str){if(str.substr(0,1)==="\n"){str=str.substr(1);}
if(str===''){str='<br class="yui-cursor">';}
if(str===' '){if(Y.UA.gecko){str='<br class="yui-cursor">';}}
return this.frame.set('content',str);},getter:function(){return this.frame.get('content');}},dir:{writeOnce:true,value:'ltr'},linkedcss:{value:'',setter:function(css){if(this.frame){this.frame.set('linkedcss',css);}
return css;}},extracss:{value:false,setter:function(css){if(this.frame){this.frame.set('extracss',css);}
return css;}},defaultblock:{value:'p'}}});Y.EditorBase=EditorBase;},'3.3.0',{requires:['base','frame','node','exec-command','selection','editor-para'],skinnable:false});