!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DigitalSambaEmbedded=t():e.DigitalSambaEmbedded=t()}(this,(()=>(()=>{"use strict";var e={187:e=>{var t,s="object"==typeof Reflect?Reflect:null,i=s&&"function"==typeof s.apply?s.apply:function(e,t,s){return Function.prototype.apply.call(e,t,s)};t=s&&"function"==typeof s.ownKeys?s.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function r(){r.init.call(this)}e.exports=r,e.exports.once=function(e,t){return new Promise((function(s,i){function o(s){e.removeListener(t,r),i(s)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",o),s([].slice.call(arguments))}f(e,t,r,{once:!0}),"error"!==t&&function(e,t,s){"function"==typeof e.on&&f(e,"error",t,{once:!0})}(e,o)}))},r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var n=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function d(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function h(e,t,s,i){var o,r,n,h;if(a(s),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,s.listener?s.listener:s),r=e._events),n=r[t]),void 0===n)n=r[t]=s,++e._eventsCount;else if("function"==typeof n?n=r[t]=i?[s,n]:[n,s]:i?n.unshift(s):n.push(s),(o=d(e))>0&&n.length>o&&!n.warned){n.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+n.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=n.length,h=l,console&&console.warn&&console.warn(h)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(e,t,s){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:s},o=l.bind(i);return o.listener=s,i.wrapFn=o,o}function c(e,t,s){var i=e._events;if(void 0===i)return[];var o=i[t];return void 0===o?[]:"function"==typeof o?s?[o.listener||o]:[o]:s?function(e){for(var t=new Array(e.length),s=0;s<t.length;++s)t[s]=e[s].listener||e[s];return t}(o):p(o,o.length)}function m(e){var t=this._events;if(void 0!==t){var s=t[e];if("function"==typeof s)return 1;if(void 0!==s)return s.length}return 0}function p(e,t){for(var s=new Array(t),i=0;i<t;++i)s[i]=e[i];return s}function f(e,t,s,i){if("function"==typeof e.on)i.once?e.once(t,s):e.on(t,s);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(r){i.once&&e.removeEventListener(t,o),s(r)}))}}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return n},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");n=e}}),r.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return d(this)},r.prototype.emit=function(e){for(var t=[],s=1;s<arguments.length;s++)t.push(arguments[s]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var n;if(t.length>0&&(n=t[0]),n instanceof Error)throw n;var a=new Error("Unhandled error."+(n?" ("+n.message+")":""));throw a.context=n,a}var d=r[e];if(void 0===d)return!1;if("function"==typeof d)i(d,this,t);else{var h=d.length,l=p(d,h);for(s=0;s<h;++s)i(l[s],this,t)}return!0},r.prototype.addListener=function(e,t){return h(this,e,t,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(e,t){return h(this,e,t,!0)},r.prototype.once=function(e,t){return a(t),this.on(e,u(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,u(this,e,t)),this},r.prototype.removeListener=function(e,t){var s,i,o,r,n;if(a(t),void 0===(i=this._events))return this;if(void 0===(s=i[e]))return this;if(s===t||s.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,s.listener||t));else if("function"!=typeof s){for(o=-1,r=s.length-1;r>=0;r--)if(s[r]===t||s[r].listener===t){n=s[r].listener,o=r;break}if(o<0)return this;0===o?s.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(s,o),1===s.length&&(i[e]=s[0]),void 0!==i.removeListener&&this.emit("removeListener",e,n||t)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(e){var t,s,i;if(void 0===(s=this._events))return this;if(void 0===s.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==s[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete s[e]),this;if(0===arguments.length){var o,r=Object.keys(s);for(i=0;i<r.length;++i)"removeListener"!==(o=r[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=s[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},r.prototype.listeners=function(e){return c(this,e,!0)},r.prototype.rawListeners=function(e){return c(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},r.prototype.listenerCount=m,r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},432:function(e,t,s){var i,o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DigitalSambaEmbedded=void 0;const r=o(s(187)),n=s(737),a=s(480),d=s(604),h=s(517);class l extends r.default{constructor(e={},t={},s=!0){super(),this.roomSettings={},this.savedIframeSrc="",this.allowedOrigin="*",this.connected=!1,this.frame=document.createElement("iframe"),this.reportErrors=!1,this.stored=Object.assign({},a.defaultStoredState),this.permissionManager=new n.PermissionManager(this),this.mountFrame=e=>{const{url:t,frame:s,root:i}=this.initOptions;if(i?i.appendChild(this.frame):s?(this.frame=s,s.allow||this.logError(h.ALLOW_ATTRIBUTE_MISSING)):document.body.appendChild(this.frame),t||this.frame.src&&this.frame.src!==window.location.href)try{const e=new URL(t||this.frame.src).toString();this.frame.src=e,this.savedIframeSrc=e}catch(e){this.logError(h.INVALID_URL)}e||(this.savedIframeSrc=this.frame.src,this.frame.src="")},this.load=(e={})=>{this.reportErrors=e.reportErrors||!1,this.setFrameSrc(),this.applyFrameProperties(e),this.frame.style.display="block"},this.onMessage=e=>{if(e.origin!==this.allowedOrigin)return;const t=e.data.DSPayload;t&&t.type&&(a.internalEvents[t.type]?this.handleInternalMessage(e.data):this._emit(t.type,t))},this.setupInternalEventListeners=()=>{this.on("userJoined",(e=>{const{user:t,type:s}=e.data;this.stored.users[t.id]=Object.assign(Object.assign({},t),{kind:s}),"local"===s&&(this.stored.userId=t.id),this.emitUsersUpdated()})),this.on("userLeft",(e=>{var t,s;(null===(s=null===(t=e.data)||void 0===t?void 0:t.user)||void 0===s?void 0:s.id)&&delete this.stored.users[e.data.user.id],this.emitUsersUpdated()})),this.on("permissionsChanged",(e=>{if(this.stored.users[this.stored.userId]){let t=[...this.stored.users[this.stored.userId].dynamicPermissions||[]];Object.entries(e.data).forEach((([e,s])=>{s&&!t.includes(e)&&t.push(e),s||(t=t.filter((t=>t!==e)))})),this.stored.users[this.stored.userId].dynamicPermissions=t}})),this.on("activeSpeakerChanged",(e=>{var t,s;this.stored.activeSpeaker=null===(s=null===(t=e.data)||void 0===t?void 0:t.user)||void 0===s?void 0:s.id})),this.on("videoEnabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.cameraEnabled=!0)})),this.on("videoDisabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.cameraEnabled=!1)})),this.on("audioEnabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.micEnabled=!0)})),this.on("audioDisabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.micEnabled=!1)})),this.on("layoutModeChanged",(e=>{this.stored.roomState.layout.mode=e.data.mode})),this.on("captionsSpokenLanguageChanged",(e=>{this.stored.roomState.captionsState.spokenLanguage=e.data.language})),this.on("captionsFontSizeChanged",(e=>{this.stored.roomState.captionsState.fontSize=e.data.fontSize}))},this._emit=(e,...t)=>(this.emit("*",...t),this.emit(e,...t)),this.handleInternalMessage=e=>{const t=e.DSPayload;switch(t.type){case"roomJoined":{const{users:e,roomState:s,activeSpeaker:i,permissionsMap:o}=t.data;this.stored.users=Object.assign(Object.assign({},this.stored.users),e),this.stored.roomState=(0,d.createWatchedProxy)(Object.assign({},s),this.emitRoomStateUpdated),this.stored.activeSpeaker=i,this.permissionManager.permissionsMap=o,this.emitUsersUpdated(),this._emit("roomJoined",{type:"roomJoined"});break}}},this.emitUsersUpdated=()=>{this._emit("usersUpdated",{type:"usersUpdated",data:{users:this.listUsers()}})},this.emitRoomStateUpdated=()=>{this._emit("roomStateUpdated",{type:"roomStateUpdated",data:{state:this.roomState}})},this.setFrameSrc=()=>{let e=this.savedIframeSrc;const{team:t,room:s,token:i}=this.initOptions;if(t&&s&&(e=`https://${t}.digitalsamba.com/${s}`),e&&i){const t=new URL(e);t.searchParams.append("token",i),e=t.toString()}if(!e)return void this.logError(h.INVALID_CONFIG);this.frame.src=e;const o=new URL(this.frame.src);this.allowedOrigin=o.origin,this.frame.onload=()=>this.checkTarget()},this.logError=e=>{if(this.reportErrors)throw e},this.applyFrameProperties=e=>{e.frameAttributes&&Object.entries(e.frameAttributes).forEach((([e,t])=>{null!=t?this.frame.setAttribute(e,t.toString()):this.frame.removeAttribute(e)})),e.reportErrors&&(this.reportErrors=!0)},this.enableVideo=()=>{this.roomSettings.cameraEnabled=!0,this.sendMessage({type:"enableVideo"})},this.disableVideo=()=>{this.roomSettings.cameraEnabled=!1,this.sendMessage({type:"disableVideo"})},this.toggleVideo=e=>{void 0===e?this.sendMessage({type:"toggleVideo"}):e?this.enableVideo():this.disableVideo()},this.enableAudio=()=>{this.roomSettings.micEnabled=!0,this.sendMessage({type:"enableAudio"})},this.disableAudio=()=>{this.roomSettings.micEnabled=!1,this.sendMessage({type:"disableAudio"})},this.toggleAudio=e=>{void 0===e?this.sendMessage({type:"toggleAudio"}):e?this.enableAudio():this.disableAudio()},this.startScreenshare=()=>{this.sendMessage({type:"startScreenshare"})},this.stopScreenshare=()=>{this.sendMessage({type:"stopScreenshare"})},this.startRecording=()=>{this.sendMessage({type:"startRecording"})},this.stopRecording=()=>{this.sendMessage({type:"stopRecording"})},this.showToolbar=()=>{this.roomSettings.showToolbar=!0,this.stored.roomState.layout.showToolbar=!0,this.sendMessage({type:"showToolbar"})},this.hideToolbar=()=>{this.roomSettings.showToolbar=!1,this.stored.roomState.layout.showToolbar=!1,this.sendMessage({type:"hideToolbar"})},this.changeLayoutMode=e=>{this.roomSettings.layoutMode=e,this.sendMessage({type:"changeLayoutMode",data:e})},this.leaveSession=()=>{this.sendMessage({type:"leaveSession"})},this.endSession=()=>{this.sendMessage({type:"endSession"})},this.toggleToolbar=e=>{void 0===e?(this.stored.roomState.layout.showToolbar=!this.stored.roomState.layout.showToolbar,this.sendMessage({type:"toggleToolbar"})):e?this.showToolbar():this.hideToolbar()},this.requestToggleAudio=(e,t)=>{void 0===t?this.sendMessage({type:"requestToggleAudio",data:e}):t?this.requestMute(e):this.requestUnmute(e)},this.requestMute=e=>{this.sendMessage({type:"requestMute",data:e})},this.requestUnmute=e=>{this.sendMessage({type:"requestUnmute",data:e})},this.removeUser=e=>{this.sendMessage({type:"removeUser",data:e})},this.listUsers=()=>Object.values(this.stored.users),this.showCaptions=()=>{this.roomSettings.showCaptions=!0,this.stored.roomState.captionsState.showCaptions=!0,this.sendMessage({type:"showCaptions"})},this.hideCaptions=()=>{this.roomSettings.showCaptions=!1,this.stored.roomState.captionsState.showCaptions=!1,this.sendMessage({type:"hideCaptions"})},this.toggleCaptions=e=>{void 0===e?(this.stored.roomState.captionsState.showCaptions=!this.stored.roomState.captionsState.showCaptions,this.sendMessage({type:"toggleCaptions"})):e?this.showCaptions():this.hideCaptions()},this.configureCaptions=e=>{this.sendMessage({type:"configureCaptions",data:e||{}})},this.raiseHand=()=>{this.sendMessage({type:"raiseHand"})},this.lowerHand=e=>{this.sendMessage({type:"lowerHand",data:e})},this.allowBroadcast=e=>{this.sendMessage({type:"allowBroadcast",data:e})},this.disallowBroadcast=e=>{this.sendMessage({type:"disallowBroadcast",data:e})},this.allowScreenshare=e=>{this.sendMessage({type:"allowScreenshare",data:e})},this.disallowScreenshare=e=>{this.sendMessage({type:"disallowScreenshare",data:e})},this.initOptions=e,this.roomSettings=e.roomSettings||{},this.reportErrors=t.reportErrors||!1,this.frame.allow="camera; microphone; display-capture; autoplay;",this.frame.setAttribute("allowFullscreen","true"),this.mountFrame(s),s?this.load(t):this.frame.style.display="none",window.addEventListener("message",this.onMessage),this.setupInternalEventListeners()}checkTarget(){this.sendMessage({type:"connect",data:this.roomSettings||{}});const e=window.setTimeout((()=>{this.logError(h.UNKNOWN_TARGET)}),a.CONNECT_TIMEOUT);this.on("connected",(()=>{this.connected=!0,clearTimeout(e)}))}sendMessage(e){if(this.frame.contentWindow){if(!this.connected&&"connect"!==e.type)return;this.frame.contentWindow.postMessage(e,{targetOrigin:this.allowedOrigin})}}get roomState(){return this.stored.roomState}get localUser(){return this.stored.users[this.stored.userId]}}t.DigitalSambaEmbedded=l,i=l,l.createControl=e=>new i(e,{},!1)},625:(e,t,s)=>{const{DigitalSambaEmbedded:i}=s(432);e.exports=i},737:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionManager=void 0,t.PermissionManager=class{constructor(e){this.permissionsMap={},this.lookupDynamicPermission=(e,t)=>!!t&&t.includes(e),this.lookupPermission=e=>{const{permissionsMap:t,permission:s,targetRole:i,role:o,dynamicPermissions:r}=e;return!(!r||!this.lookupDynamicPermission(s,r))||(!!t[o][s]||Boolean(t[o][`${s}_${i}`]))},this.checkPermissions=({permissions:e,targetRole:t,permissionsMap:s,role:i,dynamicPermissions:o})=>Array.isArray(e)?e.some((e=>this.lookupPermission({permission:e,targetRole:t,role:i,permissionsMap:s,dynamicPermissions:o}))):this.lookupPermission({permission:e,targetRole:t,role:i,permissionsMap:s,dynamicPermissions:o}),this.refinePermissions=(e,{targetRole:t,role:s,userId:i,users:o,permissionsMap:r,localUser:n})=>{const a={permissionsMap:r,permissions:e,targetRole:t,role:n.role,dynamicPermissions:n.dynamicPermissions};return s&&(a.role=s,a.dynamicPermissions=void 0),i&&o&&(a.role=o[i].role,a.dynamicPermissions=o[i].dynamicPermissions),this.checkPermissions(a)},this.hasPermissions=(e,{targetRole:t,role:s,userId:i}={})=>{const o=this.parent.stored.users,r=this.parent.localUser;return!!r&&this.refinePermissions(e,{permissionsMap:this.permissionsMap,role:s,targetRole:t,users:o,userId:i,localUser:r})},this.parent=e}}},517:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.INVALID_URL=t.ALLOW_ATTRIBUTE_MISSING=t.INVALID_CONFIG=t.UNKNOWN_TARGET=t.RichError=void 0;class s extends Error{constructor(e){super(e.message),this.name=e.name}}t.RichError=s,t.UNKNOWN_TARGET=new s({name:"UNKNOWN_TARGET",message:"Could not verify the identity of target frame. Commands may not work"}),t.INVALID_CONFIG=new s({name:"INVALID_INIT_CONFIG",message:"Initializations options are invalid. Missing team name or room ID"}),t.ALLOW_ATTRIBUTE_MISSING=new s({name:"ALLOW_ATTRIBUTE_MISSING",message:"You've provided a frame that is mising 'allow' attribute. Some functionality may not work."}),t.INVALID_URL=new s({name:"INVALID_URL",message:"Invalid frame url specified"})},604:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createWatchedProxy=void 0,t.createWatchedProxy=(e,t)=>new Proxy(e,(e=>{const t={get:(e,s)=>"object"==typeof e[s]&&null!==e[s]?new Proxy(e[s],t):e[s],set:(t,s,i)=>(t[s]=i,e(t),t)};return t})(t))},480:(e,t)=>{var s,i,o;Object.defineProperty(t,"__esModule",{value:!0}),t.defaultStoredState=t.PermissionTypes=t.AppLayout=t.LayoutMode=t.internalEvents=t.CONNECT_TIMEOUT=void 0,t.CONNECT_TIMEOUT=1e4,t.internalEvents={roomJoined:!0},function(e){e.tiled="tiled",e.auto="auto"}(s=t.LayoutMode||(t.LayoutMode={})),function(e){e.tiled="tiled",e.tiled_content="tiled_content"}(i=t.AppLayout||(t.AppLayout={})),(o=t.PermissionTypes||(t.PermissionTypes={})).broadcast="broadcast",o.manageBroadcast="manage_broadcast",o.endSession="end_session",o.startSession="start_session",o.removeParticipant="remove_participant",o.screenshare="screenshare",o.manageScreenshare="manage_screenshare",o.recording="recording",o.generalChat="general_chat",o.remoteMuting="remote_muting",o.askRemoteUnmute="ask_remote_unmute",o.raiseHand="raise_hand",o.manageRoles="manage_roles",t.defaultStoredState={userId:"",roomState:{media:{micEnabled:!1,cameraEnabled:!1},layout:{mode:s.tiled,presentation:i.tiled,showToolbar:!0,toolbarPosition:"left"},captionsState:{showCaptions:!1,spokenLanguage:"en",fontSize:"medium"}},users:{}}}},t={};return function s(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,s),r.exports}(625)})()));