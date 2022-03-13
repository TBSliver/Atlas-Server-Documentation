"use strict";(self.webpackChunkatlas_server_documentation=self.webpackChunkatlas_server_documentation||[]).push([[691],{3905:function(e,i,t){t.d(i,{Zo:function(){return m},kt:function(){return v}});var n=t(7294);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,a=function(e,i){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),d=function(e){var i=n.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},m=function(e){var i=d(e.components);return n.createElement(o.Provider,{value:i},e.children)},c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},u=n.forwardRef((function(e,i){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=d(t),v=a,p=u["".concat(o,".").concat(v)]||u[v]||c[v]||l;return t?n.createElement(p,r(r({ref:i},m),{},{components:t})):n.createElement(p,r({ref:i},m))}));function v(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=u;var s={};for(var o in i)hasOwnProperty.call(i,o)&&(s[o]=i[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<l;d++)r[d]=t[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5002:function(e,i,t){t.d(i,{Z:function(){return d}});var n=t(7462),a=t(3366),l=t(7294),r=t(3725),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var i=e.toc,t=e.className,n=e.linkClassName,a=e.isChild;return i.length?l.createElement("ul",{className:a?void 0:t},i.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:t,linkClassName:n}))}))):null}function d(e){var i=e.toc,t=e.className,d=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,c=void 0===m?"table-of-contents__link":m,u=e.linkActiveClassName,v=void 0===u?void 0:u,p=e.minHeadingLevel,g=e.maxHeadingLevel,h=(0,a.Z)(e,s),f=(0,r.LU)(),k=null!=p?p:f.tableOfContents.minHeadingLevel,N=null!=g?g:f.tableOfContents.maxHeadingLevel,b=(0,r.b9)({toc:i,minHeadingLevel:k,maxHeadingLevel:N}),y=(0,l.useMemo)((function(){if(c&&v)return{linkClassName:c,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:N}}),[c,v,k,N]);return(0,r.Si)(y),l.createElement(o,(0,n.Z)({toc:b,className:d,linkClassName:c},h))}},7398:function(e,i,t){t.r(i),t.d(i,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return v},toc:function(){return g}});var n=t(7462),a=t(3366),l=t(7294),r=t(3905),s="tableOfContentsInline_gwOO",o=t(5002);function d(e){var i=e.toc,t=e.minHeadingLevel,n=e.maxHeadingLevel;return l.createElement("div",{className:s},l.createElement(o.Z,{toc:i,minHeadingLevel:t,maxHeadingLevel:n,className:"table-of-contents",linkClassName:null}))}var m=["components"],c={sidebar_position:2},u="game.ini",v={unversionedId:"server-configs/game-ini",id:"server-configs/game-ini",title:"game.ini",description:"The game.ini file is available in the ShooterGame\\Saved\\00\\Config\\WindowsServer folder. All the settings should be",source:"@site/docs/server-configs/game-ini.md",sourceDirName:"server-configs",slug:"/server-configs/game-ini",permalink:"/Atlas-Server-Documentation/docs/server-configs/game-ini",editUrl:"https://github.com/tbsliver/atlas-server-documentation/docs/server-configs/game-ini.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Server Configs",permalink:"/Atlas-Server-Documentation/docs/server-configs/"}},p={},g=[{value:"Claim Settings",id:"claim-settings",level:2},{value:"bDontUserClaimFlags",id:"bdontuserclaimflags",level:3},{value:"bIsLawlessHomeServer",id:"bislawlesshomeserver",level:3},{value:"bUseSettlementClaims",id:"busesettlementclaims",level:3},{value:"bDontRequireClaimFlagsForBuilding",id:"bdontrequireclaimflagsforbuilding",level:3},{value:"bForceRequireClaimFlagsForBuildingCannons",id:"bforcerequireclaimflagsforbuildingcannons",level:3},{value:"NoClaimFlagDecayPeriodMultiplier",id:"noclaimflagdecayperiodmultiplier",level:3},{value:"SettlementCombatPhaseLengthSeconds",id:"settlementcombatphaselengthseconds",level:3},{value:"Treasure Settings",id:"treasure-settings",level:2},{value:"TreasureGoldMultiplier",id:"treasuregoldmultiplier",level:3},{value:"Discovery Zone Settings",id:"discovery-zone-settings",level:2},{value:"MinPointsPerDiscoveryZone",id:"minpointsperdiscoveryzone",level:3},{value:"Player Leveling Settings",id:"player-leveling-settings",level:2},{value:"PlayerDefaultNoDiscoveriesMaxLevelUps",id:"playerdefaultnodiscoveriesmaxlevelups",level:3},{value:"bClampHomeServerXP",id:"bclamphomeserverxp",level:3},{value:"ClampHomeServerXPLevel",id:"clamphomeserverxplevel",level:3},{value:"Voice Chat Settings",id:"voice-chat-settings",level:2},{value:"ProximityRadius",id:"proximityradius",level:3},{value:"YellingRadius",id:"yellingradius",level:3},{value:"WhisperRadius",id:"whisperradius",level:3},{value:"Building Settings",id:"building-settings",level:2},{value:"EnemyBuildPreventionRadiusMultiplier",id:"enemybuildpreventionradiusmultiplier",level:3},{value:"NonShipTurretInitializationTimeScale",id:"nonshipturretinitializationtimescale",level:3}],h={toc:g};function f(e){var i=e.components,t=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:i,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"gameini"},"game.ini"),(0,r.kt)("p",null,"The game.ini file is available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShooterGame\\Saved\\00\\Config\\WindowsServer")," folder. All the settings should be\nunder the ",(0,r.kt)("inlineCode",{parentName:"p"},"ShooterGameMode")," section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"[/Script/ShooterGame.ShooterGameMode]\n# Your settings here\n")),(0,r.kt)(d,{toc:g,mdxType:"TOCInline"}),(0,r.kt)("h2",{id:"claim-settings"},"Claim Settings"),(0,r.kt)("h3",{id:"bdontuserclaimflags"},"bDontUserClaimFlags"),(0,r.kt)("h3",{id:"bislawlesshomeserver"},"bIsLawlessHomeServer"),(0,r.kt)("h3",{id:"busesettlementclaims"},"bUseSettlementClaims"),(0,r.kt)("h3",{id:"bdontrequireclaimflagsforbuilding"},"bDontRequireClaimFlagsForBuilding"),(0,r.kt)("h3",{id:"bforcerequireclaimflagsforbuildingcannons"},"bForceRequireClaimFlagsForBuildingCannons"),(0,r.kt)("h3",{id:"noclaimflagdecayperiodmultiplier"},"NoClaimFlagDecayPeriodMultiplier"),(0,r.kt)("h3",{id:"settlementcombatphaselengthseconds"},"SettlementCombatPhaseLengthSeconds"),(0,r.kt)("h2",{id:"treasure-settings"},"Treasure Settings"),(0,r.kt)("h3",{id:"treasuregoldmultiplier"},"TreasureGoldMultiplier"),(0,r.kt)("h2",{id:"discovery-zone-settings"},"Discovery Zone Settings"),(0,r.kt)("h3",{id:"minpointsperdiscoveryzone"},"MinPointsPerDiscoveryZone"),(0,r.kt)("h2",{id:"player-leveling-settings"},"Player Leveling Settings"),(0,r.kt)("h3",{id:"playerdefaultnodiscoveriesmaxlevelups"},"PlayerDefaultNoDiscoveriesMaxLevelUps"),(0,r.kt)("h3",{id:"bclamphomeserverxp"},"bClampHomeServerXP"),(0,r.kt)("h3",{id:"clamphomeserverxplevel"},"ClampHomeServerXPLevel"),(0,r.kt)("h2",{id:"voice-chat-settings"},"Voice Chat Settings"),(0,r.kt)("p",null,"The following settings are for managing in game Voice Chat settings."),(0,r.kt)("h3",{id:"proximityradius"},"ProximityRadius"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Added in 20.1"))),(0,r.kt)("p",null,"Alter the distance for Normal voice mode. Value is in Unreal units"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Default\nProximityRadius = 8500\n")),(0,r.kt)("h3",{id:"yellingradius"},"YellingRadius"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Added in 20.1"))),(0,r.kt)("p",null,"Alter the distance for Yelling voice mode. Value is in Unreal units"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Default\nProximityRadius = 22000\n")),(0,r.kt)("h3",{id:"whisperradius"},"WhisperRadius"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Added in 20.1"))),(0,r.kt)("p",null,"Alter the distance for Whisper voice mode. Value is in Unreal units"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Default\nProximityRadius = 2000\n")),(0,r.kt)("h2",{id:"building-settings"},"Building Settings"),(0,r.kt)("h3",{id:"enemybuildpreventionradiusmultiplier"},"EnemyBuildPreventionRadiusMultiplier"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Added in MegaPatch 1.5"))),(0,r.kt)("p",null,"Scales the build prevention radius for enemy structures. This setting is a multiplier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"# Default\nEnemyBuildPreventionRadiusMultiplier = 1.0\n")),(0,r.kt)("h3",{id:"nonshipturretinitializationtimescale"},"NonShipTurretInitializationTimeScale"))}f.isMDXComponent=!0}}]);