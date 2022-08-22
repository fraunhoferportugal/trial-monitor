"use strict";(self.webpackChunktm_docs=self.webpackChunktm_docs||[]).push([[204],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const i={id:"sql",title:"SQL"},o=void 0,l={unversionedId:"Databases/sql",id:"Databases/sql",title:"SQL",description:"SQL support is achieved through Sequelize. We need to define the connection parameters, as well as the database models and their relationships for the information we want to display on the user interface.",source:"@site/docs/02-Databases/sql.md",sourceDirName:"02-Databases",slug:"/Databases/sql",permalink:"/trial-monitor/Databases/sql",draft:!1,tags:[],version:"current",frontMatter:{id:"sql",title:"SQL"},sidebar:"tutorialSidebar",previous:{title:"Firebase",permalink:"/trial-monitor/Databases/firebase"},next:{title:"Overview",permalink:"/trial-monitor/UI Definition/overview"}},s={},u=[{value:"Setting up a connection",id:"setting-up-a-connection",level:2},{value:"Configuring the database structure",id:"configuring-the-database-structure",level:2},{value:"1-* Relation",id:"1--relation",level:3},{value:"N-M Relation",id:"n-m-relation",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"SQL support is achieved through ",(0,r.kt)("a",{parentName:"p",href:"https://sequelize.org/master/manual/getting-started"},"Sequelize"),". We need to define the connection parameters, as well as the database models and their relationships for the information we want to display on the user interface."),(0,r.kt)("h2",{id:"setting-up-a-connection"},"Setting up a connection"),(0,r.kt)("p",null,"We can connect by passing a URI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"uri: mysql://username:password@host:port/DatabaseName\n")),(0,r.kt)("p",null,"Or by passing the parameters individually using the ",(0,r.kt)("inlineCode",{parentName:"p"},"config")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  database: classicmodels\n  username: user\n  password: user123\n  host: 172.18.1.27\n")),(0,r.kt)("p",null,"If you are using SQLite, you should do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"config:\n  dialect: sqlite\n  storage: path/to/database.sqlite\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note that you have to manually install the ",(0,r.kt)("a",{parentName:"p",href:"https://sequelize.org/master/manual/getting-started.html"},"driver")," for your database of choice")),(0,r.kt)("h2",{id:"configuring-the-database-structure"},"Configuring the database structure"),(0,r.kt)("p",null,"Each table comprises a common set of properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PK")," - a string that identifies the name of the primary key. This field is not needed for scenarios where its use is direct, in other words, the table will not be joint with others."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"attributes")," - an array containing the list of attributes that will be used by the UI components."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"relations")," - an array of relations. A relation contains a:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," - the type of relation, assuming as values: \\<belongsTo",">"," ","|"," \\<belongsToMany",">"," ","|"," \\<hasMany",">"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"target")," - the table to which it is linked to"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"through")," - only used in ",(0,r.kt)("inlineCode",{parentName:"li"},"N-M")," relations, since it reflects the intermediate table that relates both"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FK")," - the name of the foreign key (a relation of type ",(0,r.kt)("inlineCode",{parentName:"li"},"hasMany")," does not require the definition of this property)")))),(0,r.kt)("p",null,"In a SQL typical structure, there can be three different types of relations: ",(0,r.kt)("inlineCode",{parentName:"p"},"1-1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1-N"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"N-M"),"."),(0,r.kt)("h3",{id:"1--relation"},"1-* Relation"),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"1-1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1-N")," are similar when it comes to its configuration with just a little tweak. If it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"1-1")," relation we choose one of the tables, that will reference the other\nby having its type defined to ",(0,r.kt)("inlineCode",{parentName:"p"},"belongsTo")," and the other one with it defined as ",(0,r.kt)("inlineCode",{parentName:"p"},"hasMany"),". On the other hand, in a ",(0,r.kt)("inlineCode",{parentName:"p"},"1-N")," relation, the table which is being referenced (meaning that has multiple) will contain a relation of type ",(0,r.kt)("inlineCode",{parentName:"p"},"hasMany")," and the remaining one ",(0,r.kt)("inlineCode",{parentName:"p"},"belongsTo")," as its type."),(0,r.kt)("p",null,"For example, we have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- activities:\n    PK: activity_id\n    attributes: value\n    relations:\n      - type: belongsTo\n        target: users\n        FK: user_id\n- users:\n    PK: user_id\n    attributes: age\n    relations:\n      - type: hasMany\n        target: activities\n")),(0,r.kt)("h3",{id:"n-m-relation"},"N-M Relation"),(0,r.kt)("p",null,"In a scenario where both tables are related to each other based on an ",(0,r.kt)("inlineCode",{parentName:"p"},"N-M")," relation, naturally, it will result in an additional table. This table will not require additional information besides its attributes, while the tables that are related must acknowledge each other based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"through")," property."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"}," - product:\n     PK: product_id\n     attributes: [ name ]\n     relations:\n       - type: belongsToMany\n         target: users\n         through: productUser\n         FK: product_id\n - productUser:\n     attributes: [ product_id, user_id ]\n - users:\n     PK: user_id\n     attributes: age\n     relations:\n       - type: belongsToMany\n         target: product\n         through: productUser\n         FK: user_id\n")))}c.isMDXComponent=!0}}]);