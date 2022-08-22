"use strict";(self.webpackChunktm_docs=self.webpackChunktm_docs||[]).push([[819],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2951:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={id:"fhir",title:"FHIR"},o=void 0,s={unversionedId:"Data Connectors/fhir",id:"Data Connectors/fhir",title:"FHIR",description:"The FHIR connector currently only supports Hapi FHIR implementation of the HL7 FHIR standard (version R4). In this connector, the field tables links to the resources from the FHIR standard and for each one we use the search endpoints to retrieve the data, using the available and compatible filters if desired.",source:"@site/docs/02-Data Connectors/fhir.md",sourceDirName:"02-Data Connectors",slug:"/Data Connectors/fhir",permalink:"/trial-monitor/Data Connectors/fhir",draft:!1,tags:[],version:"current",frontMatter:{id:"fhir",title:"FHIR"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/trial-monitor/Data Connectors/overview"},next:{title:"Firebase",permalink:"/trial-monitor/Data Connectors/firebase"}},l={},c=[{value:"Database configuration",id:"database-configuration",level:2},{value:"Config",id:"config",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Data search",id:"data-search",level:2},{value:"Example",id:"example",level:4}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The FHIR connector currently only supports ",(0,a.kt)("a",{parentName:"p",href:"https://hapifhir.io"},"Hapi FHIR")," implementation of the ",(0,a.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/"},"HL7 FHIR")," standard (version R4). In this connector, the field ",(0,a.kt)("inlineCode",{parentName:"p"},"tables")," links to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/resourcelist.html"},"resources")," from the FHIR standard and for each one we use the ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/search.html"},"search")," endpoints to retrieve the data, using the available and compatible filters if desired."),(0,a.kt)("h2",{id:"database-configuration"},"Database configuration"),(0,a.kt)("p",null,"To use this connector with an Hapi FHIR API, you need to configure the connection in the ",(0,a.kt)("inlineCode",{parentName:"p"},"site.yaml")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: database_fhir\n    type: fhir\n    subtype: hapi\n    config:\n      url: http://hapi.fhir.org/baseR4\n    authentication:\n      username: myusername\n      password: mypassword\n    users: ...\n")),(0,a.kt)("h3",{id:"config"},"Config"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"data access")," is done by defining a property ",(0,a.kt)("inlineCode",{parentName:"p"},"config"),". This property only requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," which indicates where the Hapi Server can be accessed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  url: http://hapi.fhir.org/baseR4\n")),(0,a.kt)("p",null,"Make sure that the URL does not end with ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," and that a resource can be searched by ",(0,a.kt)("inlineCode",{parentName:"p"},"{url}/{resource}"),"."),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Since Hapi FHIR APIs' can require an Authorization header, the connector allows you to specify a Basic authentication (username and password) or Bearer authentication (bearer token)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  username: myusername\n  password: mypassword\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"authentication:\n  bearer: mytoken\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"authentication")," property is not provided, Trial Monitor it will try to request data from the API without authentication."),(0,a.kt)("h2",{id:"data-search"},"Data search"),(0,a.kt)("p",null,"Since in the FHIR standard the values to get can be nested inside multiple objects, in this connector de values can be obtained by specifying the properties of each object separated by ",(0,a.kt)("inlineCode",{parentName:"p"},"."),". This can be used in ",(0,a.kt)("inlineCode",{parentName:"p"},"fields"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"target")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"groupby")," properties."),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("p",null,"In this example ",(0,a.kt)("inlineCode",{parentName:"p"},"fields: [valueQuantity.value]")," will retrive the value ",(0,a.kt)("inlineCode",{parentName:"p"},"12"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  ...\n  "entry": [\n    {\n      "fullUrl": "http://localhost:8080/fhir/Observation/102",\n      "resource": {\n        "resourceType": "Observation",\n        "subject": {\n          "reference": "Patient/52"\n        },\n        "valueQuantity": {\n          "value": 12,\n          "unit": "kg"\n        }\n        ...\n      },\n      ...\n    },\n    ...\n  ]\n}\n')),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The names for the fields and the targets may vary. Check this ",(0,a.kt)("a",{parentName:"p",href:"http://hapi.fhir.org/resource?serverId=home_r4&pretty=true&_summary=&resource=Observation"},"link")," to see the available targets to be filtered."),(0,a.kt)("p",{parentName:"div"},"In most Hapi FHIR APIs you can test the filterings for each resource in ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<HAPI_FHIR_API_URL>/resource"),"."))))}u.isMDXComponent=!0}}]);