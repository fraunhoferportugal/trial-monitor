"use strict";(self.webpackChunktm_docs=self.webpackChunktm_docs||[]).push([[947],{7169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(5893),s=t(1151);const a={id:"ui_components",title:"Data Components"},r=void 0,l={id:"UI Definition/ui_components",title:"Data Components",description:"The main purpose of Data Components is to support the data analysis by representing data visually. Each component has type property that specifies which component should be used, properties common to all components, as well as other properties specific to the type of component.",source:"@site/docs/03-UI Definition/02-ui_components.md",sourceDirName:"03-UI Definition",slug:"/UI Definition/ui_components",permalink:"/trial-monitor/UI Definition/ui_components",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"ui_components",title:"Data Components"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/trial-monitor/UI Definition/overview"},next:{title:"Layout",permalink:"/trial-monitor/UI Definition/layout"}},o={},d=[{value:"Fields",id:"fields",level:3},{value:"Alerts",id:"alerts",level:3},{value:"Components",id:"components",level:2},{value:"Charts",id:"charts",level:3},{value:"Table",id:"table",level:3},{value:"Value",id:"value",level:3},{value:"Summary",id:"summary",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The main purpose of Data Components is to support the data analysis by representing data visually. Each component has ",(0,i.jsx)(n.code,{children:"type"})," property that specifies which component should be used, properties common to all components, as well as other properties specific to the type of component."]}),"\n",(0,i.jsx)(n.p,{children:"All Data Component share the following properties:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"type:"})," ",(0,i.jsx)(n.code,{children:"chart"})," | ",(0,i.jsx)(n.code,{children:"table"})," | ",(0,i.jsx)(n.code,{children:"value"})," | ",(0,i.jsx)(n.code,{children:"summary"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"title:"})," a string that represents the component title"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"query:"})," describes which data to retrieve from the database","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"database:"})," database identifier"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"table:"})," string or an array of strings identifying the docs/tables/resources holding data"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"fields:"})," (optional) defines which fields should be retrieved. If not provided, all fields will be retrieved."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"filters:"})," (optional) defines how data should be filtered. Please check the ",(0,i.jsx)(n.a,{href:"../Data%20Connectors/overview#filters",children:(0,i.jsx)(n.code,{children:"filters"})})," section for details."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"groupby:"})," (optional) groups data based on one of the table fields. Requires fields to have aggregation operations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"reducer:"})," (optional) name of a custom function to transform the data before being used by the component."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"type: chart\ntitle: Component title\nquery:\n  database: database_id\n  table: table_name\n  fields: [type, value]\n  filters:\n    - target: value\n      operator: '>='\n      value: 2400\n"})}),"\n",(0,i.jsx)(n.h3,{id:"fields",children:"Fields"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fields"})," properties can be a simple string array with the name of the fields you want to retrieve from the database or an array of objects."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# Array of strings\nfields: [fieldNameA, fieldNameB]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# Array of objects with custom field names\nfields:\n  - target: fieldNameA\n    name: Field Name A\n  - target: fieldNameB\n    name: Field Name B\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# Array of objects with aggregation operations and custom field names\nfields:\n  - target: fieldName\n    name: Field Name\n    operator: [min, max, avg]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"target:"})," string identifying a field from the database"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"name:"})," (optional) string with a user-friendly name to be shown on the dashboard"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"operator:"})," string or string array with the operation to perform. The following operations are available: ",(0,i.jsx)(n.code,{children:"avg"})," | ",(0,i.jsx)(n.code,{children:"max"})," | ",(0,i.jsx)(n.code,{children:"min"})," | ",(0,i.jsx)(n.code,{children:"sum"})," | ",(0,i.jsx)(n.code,{children:"count"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"alerts",children:"Alerts"}),"\n",(0,i.jsxs)(n.p,{children:["The components ",(0,i.jsx)(n.code,{children:"table"}),", and ",(0,i.jsx)(n.code,{children:"value"})," can be configured to display warnings when one or more values are over a specific threshold. We can use this to quickly monitor specific parameters of the system (e.g. check if the average value is within the reference values)."]}),"\n",(0,i.jsxs)(n.p,{children:["To define a warning, add a property named ",(0,i.jsx)(n.code,{children:"warnings"})," and inside set as key the corresponding fields for which you want to add a warning. For each field define the properties ",(0,i.jsx)(n.code,{children:"threshold"})," and ",(0,i.jsx)(n.code,{children:"operator"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"  - type: table\n    title: All data\n    query:\n      database: database_id\n      table: table_name\n      fields: [Duration, Date, ActivityType, Steps, Calories]\n    warnings:\n      Duration:\n        threshold: 1222000\n        operator: '>'\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"threshold"}),": (number) threshold value for triggering the warning in the interface"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"operator"}),": ",(0,i.jsx)(n.code,{children:">"})," | ",(0,i.jsx)(n.code,{children:"<"})," | ",(0,i.jsx)(n.code,{children:"=>"})," | ",(0,i.jsx)(n.code,{children:"=>"})," | ",(0,i.jsx)(n.code,{children:"=="})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,i.jsx)(n.h3,{id:"charts",children:"Charts"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of a chart",src:t(3733).Z+"",width:"1575",height:"312"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"chart"})," component enables the creation of a wide range of visualization for data analysis. Charts are built on top of ",(0,i.jsx)(n.a,{href:"https://vega.github.io/vega-lite",children:"Vega-Lite"}),", which is a high-level grammar to create interactive graphics. It uses a declarative syntax that supports data and visual transformations (e.g. aggregation, binning, staking). Please check Vega-Lite website for more details and ",(0,i.jsx)(n.a,{href:"https://vega.github.io/vega-lite/examples/",children:"examples"})," of how to describe a chart."]}),"\n",(0,i.jsxs)(n.p,{children:["The property ",(0,i.jsx)(n.code,{children:"spec"})," accepts normal Vega-Lite specifications to describe charts. The data property that is available in normal Vega-Lite specifications is injected by Trial Monitor and does not need to be defined."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Chart properties:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"spec:"})," Vega-Lite ",(0,i.jsx)(n.a,{href:"https://vega.github.io/vega-lite/docs/",children:"specification"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"  - type: chart\n    title: Chart title\n    query:\n      [...]\n    spec:\n      mark: bar\n      encoding:\n        x:\n          field: a\n          type: nominal\n        y:\n          field: b\n          type: quantitative\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"table",children:"Table"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of a table",src:t(5283).Z+"",width:"1566",height:"763"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Table properties:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"export:"})," ",(0,i.jsx)(n.code,{children:"boolean"})," (optional) Default: false. Allow users to export an CSV with the table data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"pagination:"})," ",(0,i.jsx)(n.code,{children:"boolean"})," | ",(0,i.jsx)(n.code,{children:"integer"})," (optional) Allows users to disable the pagination or to change the number of rows per page. By default, pagination is enabled with 20 rows per page."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"search:"})," ",(0,i.jsx)(n.code,{children:"boolean"})," (optional) Default: true."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- type: table\n  title: Table title\n  query:\n    database: database_id\n    table: table_name\n    fields: [name, type, description, score]\n  export: true\n  pagination: 40\n"})}),"\n",(0,i.jsx)(n.h3,{id:"value",children:"Value"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"value"})," component provides a summative view of one or more measures. Values shown in the component are based on the ",(0,i.jsx)(n.a,{href:"#fields",children:"fields"})," property and required the definition of an ",(0,i.jsx)(n.code,{children:"operator"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of a Value component",src:t(8810).Z+"",width:"397",height:"139"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Value properties:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"precision:"})," ",(0,i.jsx)(n.code,{children:"number"})," (optional) Default: 2. Controls the decimal places in the result"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- type: value\n  title: Value title\n  query:\n    database: database_id\n    table: table_name\n    fields:\n      - target: Steps\n        operator: min\n      - target: Steps\n        operator: max\n  precision: 0\n"})}),"\n",(0,i.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"summary"})," component provides summary statistics from a specific field. The component will calculate the measures that are available for ",(0,i.jsx)(n.a,{href:"#fields",children:"fields"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Example of a Summary component",src:t(3944).Z+"",width:"501",height:"193"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Value properties:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"precision:"})," ",(0,i.jsx)(n.code,{children:"number"})," (optional) Default: 2. Controls the decimal places in the result"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"- type: summary\n  title: Summary title\n  query:\n    database: database_id\n    table: table_name\n    fields: Steps\n  precision: 0\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},3733:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/chart-cc1a6fd842dde544782b01805134d761.png"},3944:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/summary-242ef142adbd4d01e78dc15ef4200178.png"},5283:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/table-8ede14161fcca8bd84ddc3e2abf5cf34.png"},8810:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/value-f6d82b72b44bde4365426056d58cdd10.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);