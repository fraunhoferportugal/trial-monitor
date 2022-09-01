"use strict";(self.webpackChunktm_docs=self.webpackChunktm_docs||[]).push([[947],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(f,l(l({ref:t},m),{},{components:a})):n.createElement(f,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4553:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={id:"ui_components",title:"Data Components"},l=void 0,o={unversionedId:"UI Definition/ui_components",id:"UI Definition/ui_components",title:"Data Components",description:"The main purpose of Data Components is to support the data analysis by representing data visually. Each component has type property that specifies which component should be used, properties common to all components, as well as other properties specific to the type of component.",source:"@site/docs/03-UI Definition/02-ui_components.md",sourceDirName:"03-UI Definition",slug:"/UI Definition/ui_components",permalink:"/trial-monitor/UI Definition/ui_components",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ui_components",title:"Data Components"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/trial-monitor/UI Definition/overview"},next:{title:"Layout",permalink:"/trial-monitor/UI Definition/layout"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"Alerts",id:"alerts",level:3},{value:"Components",id:"components",level:2},{value:"Charts",id:"charts",level:3},{value:"Table",id:"table",level:3},{value:"Value",id:"value",level:3},{value:"Summary",id:"summary",level:3}],m={toc:s};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The main purpose of Data Components is to support the data analysis by representing data visually. Each component has ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property that specifies which component should be used, properties common to all components, as well as other properties specific to the type of component."),(0,r.kt)("p",null,"All Data Component share the following properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"chart")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"table")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"value")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"summary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"title:")," a string that represents the component title"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"query:")," describes which data to retrieve from the database",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"database:")," database identifier"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"table:")," string or an array of strings identifying the docs/tables/resources holding data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"fields:")," (optional) defines which fields should be retrieved. If not provided, all fields will be retrieved."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"filters:")," (optional) defines how data should be filtered. Please check the ",(0,r.kt)("a",{parentName:"li",href:"../Databases/overview#filters"},(0,r.kt)("inlineCode",{parentName:"a"},"filters"))," section for details."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"groupby:")," (optional) groups data based on one of the table fields. Requires fields to have aggregation operations."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"reducer:")," (optional) name of a custom function to transform the data before being used by the component.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"type: chart\ntitle: Component title\nquery:\n  database: database_id\n  table: table_name\n  fields: [type, value]\n  filters:\n    - target: value\n      operator: '>='\n      value: 2400\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"fields")," properties can be a simple string array with the name of the fields you want to retrieve from the database or an array of objects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Array of strings\nfields: [fieldNameA, fieldNameB]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Array of objects with custom field names\nfields:\n  - target: fieldNameA\n    name: Field Name A\n  - target: fieldNameB\n    name: Field Name B\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# Array of objects with aggregation operations and custom field names\nfields:\n  - target: fieldName\n    name: Field Name\n    operator: [min, max, avg]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"target:")," string identifying a field from the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name:")," (optional) string with a user-friendly name to be shown on the dashboard"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"operator:")," string or string array with the operation to perform. The following operations are available: ",(0,r.kt)("inlineCode",{parentName:"li"},"avg")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"max")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"min")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"sum")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"count"))),(0,r.kt)("h3",{id:"alerts"},"Alerts"),(0,r.kt)("p",null,"The components ",(0,r.kt)("inlineCode",{parentName:"p"},"table"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," can be configured to display warnings when one or more values are over a specific threshold. We can use this to quickly monitor specific parameters of the system (e.g. check if the average value is within the reference values)."),(0,r.kt)("p",null,"To define a warning, add a property named ",(0,r.kt)("inlineCode",{parentName:"p"},"warnings")," and inside set as key the corresponding fields for which you want to add a warning. For each field define the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"threshold")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - type: table\n    title: All data\n    query:\n      database: database_id\n      table: table_name\n      fields: [Duration, Date, ActivityType, Steps, Calories]\n    warnings:\n      Duration:\n        threshold: 1222000\n        operator: '>'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"threshold"),": (number) threshold value for triggering the warning in the interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"operator"),": ",(0,r.kt)("inlineCode",{parentName:"li"},">")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"<")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"=>")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"=>")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"=="))),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("h3",{id:"charts"},"Charts"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of a chart",src:a(3733).Z,width:"1575",height:"312"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chart")," component enables the creation of a wide range of visualization for data analysis. Charts are built on top of ",(0,r.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite"},"Vega-Lite"),", which is a high-level grammar to create interactive graphics. It uses a declarative syntax that supports data and visual transformations (e.g. aggregation, binning, staking). Please check Vega-Lite website for more details and ",(0,r.kt)("a",{parentName:"p",href:"https://vega.github.io/vega-lite/examples/"},"examples")," of how to describe a chart."),(0,r.kt)("p",null,"The property ",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," accepts normal Vega-Lite specifications to describe charts. The data property that is available in normal Vega-Lite specifications is injected by Trial Monitor and does not need to be defined."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Chart properties:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"spec:")," Vega-Lite ",(0,r.kt)("a",{parentName:"li",href:"https://vega.github.io/vega-lite/docs/"},"specification"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  - type: chart\n    title: Chart title\n    query:\n      [...]\n    spec:\n      mark: bar\n      encoding:\n        x:\n          field: a\n          type: nominal\n        y:\n          field: b\n          type: quantitative\n\n")),(0,r.kt)("h3",{id:"table"},"Table"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of a table",src:a(5283).Z,width:"1566",height:"763"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Table properties:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"export:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," (optional) Default: false. Allow users to export an CSV with the table data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"pagination:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"integer")," (optional) Allows users to disable the pagination or to change the number of rows per page. By default, pagination is enabled with 20 rows per page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"search:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," (optional) Default: true.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: table\n  title: Table title\n  query:\n    database: database_id\n    table: table_name\n    fields: [name, type, description, score]\n  export: true\n  pagination: 40\n")),(0,r.kt)("h3",{id:"value"},"Value"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," component provides a summative view of one or more measures. Values shown in the component are based on the ",(0,r.kt)("a",{parentName:"p",href:"#fields"},"fields")," property and required the definition of an ",(0,r.kt)("inlineCode",{parentName:"p"},"operator"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of a Value component",src:a(8810).Z,width:"397",height:"139"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value properties:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," (optional) Default: 2. Controls the decimal places in the result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: value\n  title: Value title\n  query:\n    database: database_id\n    table: table_name\n    fields:\n      - target: Steps\n        operator: min\n      - target: Steps\n        operator: max\n  precision: 0\n")),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"summary")," component provides summary statistics from a specific field. The component will calculate the measures that are available for ",(0,r.kt)("a",{parentName:"p",href:"#fields"},"fields"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of a Summary component",src:a(3944).Z,width:"501",height:"193"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value properties:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"precision:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"number")," (optional) Default: 2. Controls the decimal places in the result")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: summary\n  title: Summary title\n  query:\n    database: database_id\n    table: table_name\n    fields: Steps\n  precision: 0\n")))}u.isMDXComponent=!0},3733:function(e,t,a){t.Z=a.p+"assets/images/chart-cc1a6fd842dde544782b01805134d761.png"},3944:function(e,t,a){t.Z=a.p+"assets/images/summary-242ef142adbd4d01e78dc15ef4200178.png"},5283:function(e,t,a){t.Z=a.p+"assets/images/table-8ede14161fcca8bd84ddc3e2abf5cf34.png"},8810:function(e,t,a){t.Z=a.p+"assets/images/value-f6d82b72b44bde4365426056d58cdd10.png"}}]);