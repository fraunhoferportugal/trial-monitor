"use strict";(self.webpackChunktm_docs=self.webpackChunktm_docs||[]).push([[78],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var a=n(3117),r=(n(7294),n(3905));const o={id:"firebase",title:"Firebase"},i=void 0,s={unversionedId:"Data Connectors/firebase",id:"Data Connectors/firebase",title:"Firebase",description:"The Firebase connector currently supports Cloud Firestore databases. The Cloud Firestore connector follows a NoSQL paradigm, in which data is organized on a flat structure. Collections should have references to other collections in a similar fashion to a SQL structure. A collection is linked by defining a property that references the doc id in other collections.",source:"@site/docs/02-Data Connectors/firebase.md",sourceDirName:"02-Data Connectors",slug:"/Data Connectors/firebase",permalink:"/trial-monitor/Data Connectors/firebase",draft:!1,tags:[],version:"current",frontMatter:{id:"firebase",title:"Firebase"},sidebar:"tutorialSidebar",previous:{title:"FHIR",permalink:"/trial-monitor/Data Connectors/fhir"},next:{title:"SQL",permalink:"/trial-monitor/Data Connectors/sql"}},l={},c=[{value:"Config",id:"config",level:2},{value:"Authentication",id:"authentication",level:2},{value:"Data structure",id:"data-structure",level:2},{value:"Structure",id:"structure",level:3},{value:"Timestamps",id:"timestamps",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Firebase connector currently supports ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/firestore"},"Cloud Firestore")," databases. The Cloud Firestore connector follows a NoSQL paradigm, in which data is organized on a flat structure. Collections should have references to other collections in a similar fashion to a SQL structure. A collection is linked by defining a property that references the doc id in other collections."),(0,r.kt)("h2",{id:"config"},"Config"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"data access")," is done by defining a property ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),". This ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," is provided via the Firebase Console of the corresponding project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  apiKey: 'PROJECT_API_KEY'\n  authDomain: 'project-name.firebaseapp.com'\n  databaseURL: 'https://project-name.firebaseio.com'\n  projectId: 'project-name'\n  storageBucket: 'project-name.appspot.com'\n  messagingSenderId: 'XXXXXXXXXXXXX'\n")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"Sign in with email and password is currently supported on Firebase databases. In the configuration of each database include an object named ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," with an ",(0,r.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  email: email@example.org\n  password: mypassword\n")),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"authentication")," property is not provided, Trial Monitor it will try to connect to Firebase without authentication."),(0,r.kt)("h2",{id:"data-structure"},"Data structure"),(0,r.kt)("h3",{id:"structure"},"Structure"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"structure")," field is what enables Trial Monitor to know how Firestore collections are connected to each other. To created a relation between collections, on the configuration of each collection, define a property named ",(0,r.kt)("inlineCode",{parentName:"p"},"relations"),". Inside, create a new property with the name of the linked collection with the value of the property used to identify that collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"structure:\n  users:\n    relations:\n      usersDetails: UserId\n  userDetails:\n    relations:\n      clinicalConditions: ClinicalConditionId\n")),(0,r.kt)("h3",{id:"timestamps"},"Timestamps"),(0,r.kt)("p",null,"The Firebase connector can interpret Unix or Firebase native timestamps. Unix timestamps are expected by default."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"timestampField"),": (string | object) Name of the timestamp key on your database, or an object with the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," properties:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name"),": Name of the timestamp property on your database. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type"),": (optional) If you are using Firebase native timestamp you need to set the ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," property to ",(0,r.kt)("inlineCode",{parentName:"li"},"FirebaseTimestamp"),".")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"timestamp: myTimestampName\n\n// --- OR ---\n\ntimestamp:\n  name: myTimestampName\n  type: FirebaseTimestamp\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," Note that you will need to create an index on the Firebase console to be able to filter by date and user simultaneously"))))}u.isMDXComponent=!0}}]);