!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DigitalSambaEmbedded=t():e.DigitalSambaEmbedded=t()}(this,(()=>(()=>{"use strict";var e={187:e=>{var t,s="object"==typeof Reflect?Reflect:null,i=s&&"function"==typeof s.apply?s.apply:function(e,t,s){return Function.prototype.apply.call(e,t,s)};t=s&&"function"==typeof s.ownKeys?s.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!=e};function r(){r.init.call(this)}e.exports=r,e.exports.once=function(e,t){return new Promise((function(s,i){function o(s){e.removeListener(t,r),i(s)}function r(){"function"==typeof e.removeListener&&e.removeListener("error",o),s([].slice.call(arguments))}g(e,t,r,{once:!0}),"error"!==t&&function(e,t,s){"function"==typeof e.on&&g(e,"error",t,{once:!0})}(e,o)}))},r.EventEmitter=r,r.prototype._events=void 0,r.prototype._eventsCount=0,r.prototype._maxListeners=void 0;var n=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function d(e){return void 0===e._maxListeners?r.defaultMaxListeners:e._maxListeners}function h(e,t,s,i){var o,r,n,h;if(a(s),void 0===(r=e._events)?(r=e._events=Object.create(null),e._eventsCount=0):(void 0!==r.newListener&&(e.emit("newListener",t,s.listener?s.listener:s),r=e._events),n=r[t]),void 0===n)n=r[t]=s,++e._eventsCount;else if("function"==typeof n?n=r[t]=i?[s,n]:[n,s]:i?n.unshift(s):n.push(s),(o=d(e))>0&&n.length>o&&!n.warned){n.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+n.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=e,l.type=t,l.count=n.length,h=l,console&&console.warn&&console.warn(h)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function u(e,t,s){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:s},o=l.bind(i);return o.listener=s,i.wrapFn=o,o}function m(e,t,s){var i=e._events;if(void 0===i)return[];var o=i[t];return void 0===o?[]:"function"==typeof o?s?[o.listener||o]:[o]:s?function(e){for(var t=new Array(e.length),s=0;s<t.length;++s)t[s]=e[s].listener||e[s];return t}(o):p(o,o.length)}function c(e){var t=this._events;if(void 0!==t){var s=t[e];if("function"==typeof s)return 1;if(void 0!==s)return s.length}return 0}function p(e,t){for(var s=new Array(t),i=0;i<t;++i)s[i]=e[i];return s}function g(e,t,s,i){if("function"==typeof e.on)i.once?e.once(t,s):e.on(t,s);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(r){i.once&&e.removeEventListener(t,o),s(r)}))}}Object.defineProperty(r,"defaultMaxListeners",{enumerable:!0,get:function(){return n},set:function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");n=e}}),r.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},r.prototype.getMaxListeners=function(){return d(this)},r.prototype.emit=function(e){for(var t=[],s=1;s<arguments.length;s++)t.push(arguments[s]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var n;if(t.length>0&&(n=t[0]),n instanceof Error)throw n;var a=new Error("Unhandled error."+(n?" ("+n.message+")":""));throw a.context=n,a}var d=r[e];if(void 0===d)return!1;if("function"==typeof d)i(d,this,t);else{var h=d.length,l=p(d,h);for(s=0;s<h;++s)i(l[s],this,t)}return!0},r.prototype.addListener=function(e,t){return h(this,e,t,!1)},r.prototype.on=r.prototype.addListener,r.prototype.prependListener=function(e,t){return h(this,e,t,!0)},r.prototype.once=function(e,t){return a(t),this.on(e,u(this,e,t)),this},r.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,u(this,e,t)),this},r.prototype.removeListener=function(e,t){var s,i,o,r,n;if(a(t),void 0===(i=this._events))return this;if(void 0===(s=i[e]))return this;if(s===t||s.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,s.listener||t));else if("function"!=typeof s){for(o=-1,r=s.length-1;r>=0;r--)if(s[r]===t||s[r].listener===t){n=s[r].listener,o=r;break}if(o<0)return this;0===o?s.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(s,o),1===s.length&&(i[e]=s[0]),void 0!==i.removeListener&&this.emit("removeListener",e,n||t)}return this},r.prototype.off=r.prototype.removeListener,r.prototype.removeAllListeners=function(e){var t,s,i;if(void 0===(s=this._events))return this;if(void 0===s.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==s[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete s[e]),this;if(0===arguments.length){var o,r=Object.keys(s);for(i=0;i<r.length;++i)"removeListener"!==(o=r[i])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=s[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},r.prototype.listeners=function(e){return m(this,e,!0)},r.prototype.rawListeners=function(e){return m(this,e,!1)},r.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):c.call(e,t)},r.prototype.listenerCount=c,r.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}},432:function(e,t,s){var i,o=this&&this.__awaiter||function(e,t,s,i){return new(s||(s=Promise))((function(o,r){function n(e){try{d(i.next(e))}catch(e){r(e)}}function a(e){try{d(i.throw(e))}catch(e){r(e)}}function d(e){var t;e.done?o(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(n,a)}d((i=i.apply(e,t||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DigitalSambaEmbedded=void 0;const n=r(s(187)),a=s(737),d=s(480),h=s(604),l=s(517);class u extends n.default{constructor(e={},t={},s=!0){super(),this.roomSettings={},this.savedIframeSrc="",this.allowedOrigin="*",this.connected=!1,this.frame=document.createElement("iframe"),this.reportErrors=!1,this.permissionManager=new a.PermissionManager(this),this.queuedEventListeners=[],this.mountFrame=e=>{const{url:t,frame:s,root:i}=this.initOptions;if(i?i.appendChild(this.frame):s?(this.frame=s,s.allow||this.logError(l.ALLOW_ATTRIBUTE_MISSING)):document.body.appendChild(this.frame),t||this.frame.src&&this.frame.src!==window.location.href)try{let e=t||this.frame.src;e.includes("https://")||(e="https://"+e);const s=new URL(e).toString();this.frame.src=s,this.savedIframeSrc=s}catch(e){this.logError(l.INVALID_URL)}e||(this.savedIframeSrc=this.frame.src,this.frame.src="")},this.load=(e={})=>{this.reportErrors=e.reportErrors||!1,this.setFrameSrc(),this.applyFrameProperties(e),this.frame.style.display="block"},this.prepareRoomSettings=e=>o(this,void 0,void 0,(function*(){var t;if(null!==(t=e.mediaDevices)&&void 0!==t||(e.mediaDevices={}),e.mediaDevices){const t=yield navigator.mediaDevices.enumerateDevices();Object.entries(e.mediaDevices).forEach((([s,i])=>{const o=t.find((e=>e.deviceId===i));o&&(e.mediaDevices[s]=o.label)}))}this.roomSettings=e})),this.onMessage=e=>{if(e.origin!==this.allowedOrigin)return;const t=e.data.DSPayload;t&&t.type&&(d.internalEvents[t.type]?this.handleInternalMessage(e.data):this._emit(t.type,t))},this.addFrameEventListener=(e,t,s)=>{const i=`frameEvent_${e}_${t}`;this.connected?this.listenerCount(i)||this.sendMessage({type:"connectEventListener",data:{eventName:e,target:t}}):this.queuedEventListeners.push({operation:"connectEventListener",event:e,target:t}),this.on(i,s)},this.removeFrameEventListener=(e,t,s)=>{const i=`frameEvent_${e}_${t}`;this.off(i,s),this.connected?this.listenerCount(e)||this.sendMessage({type:"disconnectEventListener",data:{eventName:e,target:t}}):this.queuedEventListeners.push({operation:"disconnectEventListener",event:e,target:t})},this.setupInternalEventListeners=()=>{this.on("userJoined",(e=>{const{user:t,type:s}=e.data;this.stored.users[t.id]=Object.assign(Object.assign({},t),{kind:s}),"local"===s&&(this.stored.userId=t.id),this.emitUsersUpdated()})),this.on("userLeft",(e=>{var t,s;(null===(s=null===(t=e.data)||void 0===t?void 0:t.user)||void 0===s?void 0:s.id)&&delete this.stored.users[e.data.user.id],this.emitUsersUpdated()})),this.on("permissionsChanged",(e=>{if(this.stored.users[this.stored.userId]){let t=[...this.stored.users[this.stored.userId].dynamicPermissions||[]];Object.entries(e.data).forEach((([e,s])=>{s&&!t.includes(e)&&t.push(e),s||(t=t.filter((t=>t!==e)))})),this.stored.users[this.stored.userId].dynamicPermissions=t}})),this.on("activeSpeakerChanged",(e=>{var t,s;this.stored.activeSpeaker=null===(s=null===(t=e.data)||void 0===t?void 0:t.user)||void 0===s?void 0:s.id})),this.on("videoEnabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.videoEnabled=!0)})),this.on("videoDisabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.videoEnabled=!1)})),this.on("audioEnabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.audioEnabled=!0)})),this.on("audioDisabled",(e=>{var t;"local"===(null===(t=e.data)||void 0===t?void 0:t.type)&&(this.stored.roomState.media.audioEnabled=!1)})),this.on("layoutModeChanged",(e=>{this.stored.roomState.layout.mode=e.data.mode})),this.on("captionsSpokenLanguageChanged",(e=>{this.stored.roomState.captionsState.spokenLanguage=e.data.language})),this.on("captionsEnabled",(()=>{this.stored.roomState.captionsState.showCaptions=!0})),this.on("captionsDisabled",(()=>{this.stored.roomState.captionsState.showCaptions=!1})),this.on("captionsFontSizeChanged",(e=>{this.stored.roomState.captionsState.fontSize=e.data.fontSize})),this.on("virtualBackgroundChanged",(e=>{const{type:t,value:s,enforced:i}=e.data.virtualBackgroundConfig;this.stored.roomState.virtualBackground={enabled:!0,type:t,value:s,enforced:i}})),this.on("virtualBackgroundDisabled",(e=>{this.stored.roomState.virtualBackground={enabled:!1}})),this.on("localTileMinimized",(()=>{this.stored.roomState.layout.localTileMinimized=!0})),this.on("localTileMaximized",(()=>{this.stored.roomState.layout.localTileMinimized=!1})),this.on("userMaximized",(({data:e})=>{this.stored.roomState.layout.content={userId:e.userId,type:e.type},this.stored.roomState.layout.contentMode=e.mode})),this.on("userMinimized",(()=>{this.stored.roomState.layout.content=void 0,this.stored.roomState.layout.contentMode=void 0}))},this._emit=(e,...t)=>(this.emit("*",...t),this.emit(e,...t)),this.handleInternalMessage=e=>{const t=e.DSPayload;switch(t.type){case"roomJoined":{const{users:e,roomState:s,activeSpeaker:i,permissionsMap:o,features:r}=t.data;this.stored.users=Object.assign(Object.assign({},this.stored.users),e),this.stored.roomState=(0,h.createWatchedProxy)(Object.assign({},s),this.emitRoomStateUpdated),this.stored.activeSpeaker=i,this.stored.features=(0,h.createWatchedProxy)(Object.assign({},r),this.emitFeatureSetUpdated),this.permissionManager.permissionsMap=o,this.emitUsersUpdated(),this.emitFeatureSetUpdated(),this.emitRoomStateUpdated(),this._emit("roomJoined",{type:"roomJoined"});break}case"documentEvent":{const{eventName:e,target:s,payload:i}=t.data,o=`frameEvent_${e}_${s}`;this._emit(o,JSON.parse(i))}}},this.emitUsersUpdated=()=>{this._emit("usersUpdated",{type:"usersUpdated",data:{users:this.listUsers()}})},this.emitRoomStateUpdated=()=>{this._emit("roomStateUpdated",{type:"roomStateUpdated",data:{state:this.roomState}})},this.emitFeatureSetUpdated=()=>{this._emit("featureSetUpdated",{type:"featureSetUpdated",data:{state:this.stored.features}})},this.setFrameSrc=()=>{let e=this.savedIframeSrc;const{cname:t,team:s,room:i,token:o}=this.initOptions;if(s&&i&&(e=`https://${s}.digitalsamba.com/${i}`),t&&i&&(e=`https://${t}/${i}`),e){const t=new URL(e);t.searchParams.append("dsEmbedFrame","true"),o&&t.searchParams.append("token",o),e=t.toString()}if(!e)return void(this.initOptions.url||this.logError(l.INVALID_CONFIG));this.frame.src=e;const r=new URL(this.frame.src);this.allowedOrigin=r.origin,this.frame.onload=()=>{this._emit("frameLoaded",{type:"frameLoaded"}),this.checkTarget()}},this.logError=e=>{if(this.reportErrors)throw e;console.error(e)},this.applyFrameProperties=e=>{e.frameAttributes&&Object.entries(e.frameAttributes).forEach((([e,t])=>{null!=t?this.frame.setAttribute(e,t.toString()):this.frame.removeAttribute(e)})),e.reportErrors&&(this.reportErrors=!0)},this.enableVideo=()=>{this.roomSettings.videoEnabled=!0,this.sendMessage({type:"enableVideo"})},this.disableVideo=()=>{this.roomSettings.videoEnabled=!1,this.sendMessage({type:"disableVideo"})},this.toggleVideo=e=>{void 0===e?this.sendMessage({type:"toggleVideo"}):e?this.enableVideo():this.disableVideo()},this.enableAudio=()=>{this.roomSettings.audioEnabled=!0,this.sendMessage({type:"enableAudio"})},this.disableAudio=()=>{this.roomSettings.audioEnabled=!1,this.sendMessage({type:"disableAudio"})},this.toggleAudio=e=>{void 0===e?this.sendMessage({type:"toggleAudio"}):e?this.enableAudio():this.disableAudio()},this.startScreenshare=()=>{this.sendMessage({type:"startScreenshare"})},this.stopScreenshare=()=>{this.sendMessage({type:"stopScreenshare"})},this.startRecording=()=>{this.sendMessage({type:"startRecording"})},this.stopRecording=()=>{this.sendMessage({type:"stopRecording"})},this.showToolbar=()=>{this.roomSettings.showToolbar=!0,this.stored.roomState.layout.showToolbar=!0,this.sendMessage({type:"showToolbar"})},this.hideToolbar=()=>{this.roomSettings.showToolbar=!1,this.stored.roomState.layout.showToolbar=!1,this.sendMessage({type:"hideToolbar"})},this.changeToolbarPosition=e=>{this.sendMessage({type:"changeToolbarPosition",data:e})},this.changeBrandingOptions=e=>{this.sendMessage({type:"changeBrandingOptions",data:e})},this.changeLayoutMode=e=>{this.roomSettings.layoutMode=e,this.sendMessage({type:"changeLayoutMode",data:e})},this.leaveSession=()=>{this.sendMessage({type:"leaveSession"})},this.endSession=()=>{this.sendMessage({type:"endSession"})},this.toggleToolbar=e=>{void 0===e?(this.stored.roomState.layout.showToolbar=!this.stored.roomState.layout.showToolbar,this.sendMessage({type:"toggleToolbar"})):e?this.showToolbar():this.hideToolbar()},this.requestToggleAudio=(e,t)=>{void 0===t?this.sendMessage({type:"requestToggleAudio",data:e}):t?this.requestMute(e):this.requestUnmute(e)},this.requestMute=e=>{this.sendMessage({type:"requestMute",data:e})},this.requestUnmute=e=>{this.sendMessage({type:"requestUnmute",data:e})},this.removeUser=e=>{this.sendMessage({type:"removeUser",data:e})},this.listUsers=()=>Object.values(this.stored.users),this.getUser=e=>{var t;return null===(t=this.stored.users)||void 0===t?void 0:t[e]},this.showCaptions=()=>{this.roomSettings.showCaptions=!0,this.sendMessage({type:"showCaptions"})},this.hideCaptions=()=>{this.roomSettings.showCaptions=!1,this.sendMessage({type:"hideCaptions"})},this.toggleCaptions=e=>{void 0===e?this.sendMessage({type:"toggleCaptions"}):e?this.showCaptions():this.hideCaptions()},this.configureCaptions=e=>{this.sendMessage({type:"configureCaptions",data:e||{}})},this.raiseHand=()=>{this.sendMessage({type:"raiseHand"})},this.lowerHand=e=>{this.sendMessage({type:"lowerHand",data:e})},this.allowBroadcast=e=>{this.sendMessage({type:"allowBroadcast",data:e})},this.disallowBroadcast=e=>{this.sendMessage({type:"disallowBroadcast",data:e})},this.allowScreenshare=e=>{this.sendMessage({type:"allowScreenshare",data:e})},this.disallowScreenshare=e=>{this.sendMessage({type:"disallowScreenshare",data:e})},this.configureVirtualBackground=e=>{this.roomSettings.virtualBackground=e;const t={enabled:!0,type:void 0,value:"",enforced:e.enforce};["blur","image","imageUrl"].forEach((s=>{e[s]&&(t.type=s,t.value=e[s])})),this.sendMessage({type:"configureVirtualBackground",data:e||{}})},this.enableVirtualBackground=e=>this.configureVirtualBackground(e),this.disableVirtualBackground=()=>{this.roomSettings.virtualBackground=void 0,this.sendMessage({type:"disableVirtualBackground"})},this.muteFrame=()=>{this.roomSettings.muteFrame=!0,this.stored.roomState.frameMuted=!0,this.sendMessage({type:"muteFrame"})},this.unmuteFrame=()=>{this.roomSettings.muteFrame=!1,this.stored.roomState.frameMuted=!1,this.sendMessage({type:"unmuteFrame"})},this.toggleMuteFrame=e=>{void 0===e?(this.roomSettings.muteFrame=!this.roomSettings.muteFrame,this.stored.roomState.frameMuted=!this.stored.roomState.frameMuted,this.sendMessage({type:"toggleMuteFrame"})):e?this.muteFrame():this.unmuteFrame()},this.minimizeLocalTile=()=>{this.sendMessage({type:"minimizeLocalTile"})},this.maximizeLocalTile=()=>{this.sendMessage({type:"maximizeLocalTile"})},this.pinUser=(e,t="media")=>{this.sendMessage({type:"pinUser",data:{tile:t,userId:e}})},this.unpinUser=()=>{this.minimizeContent()},this.maximizeUser=(e,t="media")=>{this.sendMessage({type:"maximizeUser",data:{tile:t,userId:e}})},this.minimizeUser=()=>{this.minimizeContent()},this.minimizeContent=()=>{this.sendMessage({type:"minimizeContent"})},this.stored=(0,d.getDefaultStoredState)(),window.isSecureContext||this.logError(l.INSECURE_CONTEXT),this.initOptions=e,this.prepareRoomSettings(e.roomSettings||{}),this.reportErrors=t.reportErrors||!1,this.frame.allow="camera; microphone; display-capture; autoplay;",this.frame.setAttribute("allowFullscreen","true"),this.mountFrame(s),s?this.load(t):this.frame.style.display="none",window.addEventListener("message",this.onMessage),this.setupInternalEventListeners()}checkTarget(){return o(this,void 0,void 0,(function*(){const e=Object.assign(Object.assign({},this.roomSettings),{eventListeners:this.queuedEventListeners});this.sendMessage({type:"connect",data:e});const t=window.setTimeout((()=>{this.logError(l.UNKNOWN_TARGET)}),d.CONNECT_TIMEOUT);this.on("connected",(()=>{this.connected=!0,this.queuedEventListeners=[],clearTimeout(t)}))}))}sendMessage(e){if(this.frame.contentWindow){if(!this.connected&&"connect"!==e.type)return;this.frame.contentWindow.postMessage(e,{targetOrigin:this.allowedOrigin})}}get roomState(){return this.stored.roomState}get localUser(){return this.stored.users[this.stored.userId]}get features(){return this.stored.features}featureEnabled(e){return!!this.stored.features[e]}}t.DigitalSambaEmbedded=u,i=u,u.createControl=(e,t={})=>new i(e,t,!1),t.default=u},625:(e,t,s)=>{const{DigitalSambaEmbedded:i}=s(432);e.exports=i},737:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PermissionManager=void 0,t.PermissionManager=class{constructor(e){this.permissionsMap={},this.lookupDynamicPermission=(e,t)=>!!t&&t.includes(e),this.lookupPermission=e=>{const{permissionsMap:t,permission:s,targetRole:i,role:o,dynamicPermissions:r}=e;return!(!r||!this.lookupDynamicPermission(s,r))||(!!t[o][s]||Boolean(t[o][`${s}_${i}`]))},this.checkPermissions=({permissions:e,targetRole:t,permissionsMap:s,role:i,dynamicPermissions:o})=>Array.isArray(e)?e.some((e=>this.lookupPermission({permission:e,targetRole:t,role:i,permissionsMap:s,dynamicPermissions:o}))):this.lookupPermission({permission:e,targetRole:t,role:i,permissionsMap:s,dynamicPermissions:o}),this.refinePermissions=(e,{targetRole:t,role:s,userId:i,users:o,permissionsMap:r,localUser:n})=>{const a={permissionsMap:r,permissions:e,targetRole:t,role:n.role,dynamicPermissions:n.dynamicPermissions};return s&&(a.role=s,a.dynamicPermissions=void 0),i&&o&&(a.role=o[i].role,a.dynamicPermissions=o[i].dynamicPermissions),this.checkPermissions(a)},this.hasPermissions=(e,{targetRole:t,role:s,userId:i}={})=>{const o=this.parent.stored.users,r=this.parent.localUser;return!!r&&this.refinePermissions(e,{permissionsMap:this.permissionsMap,role:s,targetRole:t,users:o,userId:i,localUser:r})},this.parent=e}}},517:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.INSECURE_CONTEXT=t.INVALID_URL=t.ALLOW_ATTRIBUTE_MISSING=t.INVALID_CONFIG=t.UNKNOWN_TARGET=t.RichError=void 0;class s extends Error{constructor(e){super(e.message),this.name=e.name}}t.RichError=s,t.UNKNOWN_TARGET=new s({name:"UNKNOWN_TARGET",message:"Could not verify the identity of target frame. Commands may not work"}),t.INVALID_CONFIG=new s({name:"INVALID_INIT_CONFIG",message:"Initializations options are invalid. Missing team name or room ID"}),t.ALLOW_ATTRIBUTE_MISSING=new s({name:"ALLOW_ATTRIBUTE_MISSING",message:"You've provided a frame that is mising 'allow' attribute. Some functionality may not work."}),t.INVALID_URL=new s({name:"INVALID_URL",message:"Invalid room URL specified"}),t.INSECURE_CONTEXT=new s({name:"INSECURE_CONTEXT",message:"Initializing embedded app in an insecure context, media capabilities unavailable. See https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts for details"})},604:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createWatchedProxy=void 0,t.createWatchedProxy=(e,t)=>new Proxy(e,(e=>{const t={get:(e,s)=>"object"==typeof e[s]&&null!==e[s]?new Proxy(e[s],t):e[s],set:(t,s,i)=>(t[s]=i,e(t),t)};return t})(t))},480:(e,t)=>{var s,i;Object.defineProperty(t,"__esModule",{value:!0}),t.getDefaultStoredState=t.PermissionTypes=t.LayoutMode=t.internalEvents=t.CONNECT_TIMEOUT=void 0,t.CONNECT_TIMEOUT=1e4,t.internalEvents={roomJoined:!0,documentEvent:!0},function(e){e.tiled="tiled",e.auto="auto"}(s=t.LayoutMode||(t.LayoutMode={})),(i=t.PermissionTypes||(t.PermissionTypes={})).broadcast="broadcast",i.manageBroadcast="manage_broadcast",i.endSession="end_session",i.startSession="start_session",i.removeParticipant="remove_participant",i.screenshare="screenshare",i.manageScreenshare="manage_screenshare",i.recording="recording",i.generalChat="general_chat",i.remoteMuting="remote_muting",i.askRemoteUnmute="ask_remote_unmute",i.raiseHand="raise_hand",i.manageRoles="manage_roles",t.getDefaultStoredState=()=>({userId:"",roomState:{frameMuted:!1,media:{audioEnabled:!1,videoEnabled:!1},layout:{mode:s.tiled,showToolbar:!0,toolbarPosition:"left",localTileMinimized:!1},captionsState:{showCaptions:!1,spokenLanguage:"en",fontSize:"medium"},virtualBackground:{enabled:!1}},users:{},features:{chat:!1,contentLibrary:!1,captions:!1,qa:!1,endSession:!1,fullScreen:!1,languageSelection:!1,minimizeOwnTile:!1,participantsList:!1,pin:!1,screenshare:!1,whiteboard:!1,recordings:!1,virtualBackgrounds:!1,raiseHand:!0,invite:!1}})}},t={};return function s(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={exports:{}};return e[i].call(r.exports,r,r.exports,s),r.exports}(625)})()));