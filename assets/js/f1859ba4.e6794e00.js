"use strict";(self.webpackChunktm_docs=self.webpackChunktm_docs||[]).push([[877],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},743:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={id:"dashboard",title:"Dashboard"},o=void 0,l={unversionedId:"UI Definition/dashboard",id:"UI Definition/dashboard",title:"Dashboard",description:"The Dashboard of the system by default displays a table listing all users and users' properties. It is, however, possible to configure the Dashboard with additional components.",source:"@site/docs/03-UI Definition/04-dashboard.md",sourceDirName:"03-UI Definition",slug:"/UI Definition/dashboard",permalink:"/trial-monitor/UI Definition/dashboard",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"dashboard",title:"Dashboard"},sidebar:"tutorialSidebar",previous:{title:"Layout",permalink:"/trial-monitor/UI Definition/layout"},next:{title:"Custom permissions",permalink:"/trial-monitor/Advanced/custom-permissions"}},s={},p=[{value:"Alerts",id:"alerts",level:2},{value:"Summary",id:"summary",level:2},{value:"Users table",id:"users-table",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Dashboard of the system by default displays a table listing all users and users' properties. It is, however, possible to configure the Dashboard with additional components."),(0,r.kt)("p",null,"To configure the Dashboard create a file name named ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.md")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"blueprints")," folder."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Properties:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"alerts"))," - Creates a table with warning for specific attributes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"summary"))," - Creates a summary of the data in the users' table."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"users"))," - Configuration of the users' table.")),(0,r.kt)("h2",{id:"alerts"},"Alerts"),(0,r.kt)("p",null,"The Dashboard can be configure with a table displaying warnings for specific attributes. This enables researchers to quickly monitor specific parameters of the system (e.g. check if the average value for the blood pressure is within the reference values)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"alerts")," property contains a list with a reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"database"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," holding the data, and a list of ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes"),". The configuration should have the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"alerts:\n  - database: fradedev\n    table: SurveyNps\n    attributes:\n      - name: answer\n        threshold: 6\n        comparison: '>'\n        aggregation: avg\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Alert structure:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"database"))," - the name of the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"table"))," - the name of the table or document holding the data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"attributes"))," - a list describing the attributes",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"name"))," - (string) Name of the attribute"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"threshold"))," - (number) threshold value for triggering the warning in the interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"comparison"))," - ",(0,r.kt)("inlineCode",{parentName:"li"},">")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"<")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"=>")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"=>")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"==")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"aggregation"))," - ",(0,r.kt)("inlineCode",{parentName:"li"},"avg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"sum"))))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The Summary component allows the visualization of summarized values presented in the users' table."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Properties:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"id"))," - the description of the column from where we want to extract the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"type"))," - ",(0,r.kt)("inlineCode",{parentName:"li"},"average")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"percentage")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"li"},"histogram")," Type of operation to be performed on the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"subtype"))," -",(0,r.kt)("inlineCode",{parentName:"li"},"date")," Treats values as date. Available if the type is ",(0,r.kt)("inlineCode",{parentName:"li"},"average")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"histogram"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"label"))," - (Optional) A string representing the label of this summary. If no label is provided, the ",(0,r.kt)("inlineCode",{parentName:"li"},"id")," will be used.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Types:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"average"))," - calculate the average of the values on the selected column."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"percentage"))," - generates a list with the percentage of each value on the selected column."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"histogram"))," - generates a chart with the distribution of values on the selected column")),(0,r.kt)("h2",{id:"users-table"},"Users table"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," property enables the configuration of the table displaying the users data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"show"))," - (boolean) Sets the visibility of the table. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"attributes"))," - (string[]) Configures which attributes to display in the table. If not set, all attributes will be displayed."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"export"))," - (boolean) Show a button to export the data to ",(0,r.kt)("em",{parentName:"li"},"CSV"),". Default: ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"pagination"))," - (boolean or number) Sets the number rows per page. Default: 20 rows per page.")))}m.isMDXComponent=!0}}]);