(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{246:function(n,t){},255:function(n,t){},273:function(n,t){},275:function(n,t){},294:function(n,t){},295:function(n,t){},358:function(n,t){},360:function(n,t){},393:function(n,t){},395:function(n,t){},396:function(n,t){},401:function(n,t){},403:function(n,t){},409:function(n,t){},411:function(n,t){},424:function(n,t){},436:function(n,t){},439:function(n,t){},444:function(n,t){},452:function(n,t){},461:function(n,t){},463:function(n,t){},533:function(n,t,e){},534:function(n,t,e){"use strict";e.r(t);var c,r,a,o,i,s,l,d,u,x,p,b,j,h,f,g,O=e(1),y=e.n(O),m=e(85),v=e.n(m),C=e(16),w=e.n(C),A=e(43),S=e(69),E=e(14),T=e(58),N=e(68),_=e.n(N),k=e(220),M=e.n(k),D=e(70),I=e(221),L=e(19),R={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},K=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(L.a)(Object(L.a)({},R),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(L.a)(Object(L.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(L.a)(Object(L.a)({},R),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(L.a)(Object(L.a)({},n),{},{account:t.payload.account});default:return n}},F={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(L.a)(Object(L.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(L.a)(Object(L.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(L.a)(Object(L.a)({},F),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},U=Object(D.b)({blockchain:K,data:P}),W=[I.a],Y=Object(D.c)(D.a.apply(void 0,W)),z=Object(D.d)(U,Y),B=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},H=function(){return function(){var n=Object(A.a)(w.a.mark((function n(t){var e;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,z.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(B("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},G=function(n){return{type:"CONNECTION_FAILED",payload:n}},Q=function(n){return function(){var t=Object(A.a)(w.a.mark((function t(e){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(H());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},X=e(15),q=X.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),J=X.a.div(r||(r=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),V=X.a.div(a||(a=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),Z=X.a.div(o||(o=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),$=X.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),nn=X.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),tn=X.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),en=(X.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),X.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),cn=(X.a.div(x||(x=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(3));function rn(){return Object(cn.jsxs)(y.a.Fragment,{children:[Object(cn.jsx)("h1",{children:"If your not on the Whitelist the RocketElevator NFT will be available in:"}),Object(cn.jsx)("div",{id:"flipdown",className:"flipdown"})]})}var an=X.a.button(p||(p=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),on=X.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),sn=X.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),ln=X.a.img(h||(h=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),dn=X.a.img(f||(f=Object(E.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),un=X.a.a(g||(g=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"])));var xn=function(){var n,t,e=Object(T.b)(),c=Object(T.c)((function(n){return n.blockchain})),r=Object(T.c)((function(n){return n.data})),a=Object(O.useState)(!1),o=Object(S.a)(a,2),i=o[0],s=o[1],l=Object(O.useState)("Click buy to mint your NFT."),d=Object(S.a)(l,2),u=d[0],x=d[1],p=Object(O.useState)(1),b=Object(S.a)(p,2),j=b[0],h=b[1],f=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),g=Object(S.a)(f,2),y=g[0],m=g[1],v=function(){""!==c.account&&null!==c.smartContract&&e(H(c.account))},C=function(){var n=Object(A.a)(w.a.mark((function n(){var t,e;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,m(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){C()}),[]),Object(O.useEffect)((function(){v()}),[c.account]),Object(cn.jsx)(q,{children:Object(cn.jsxs)(nn,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:y.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(cn.jsx)(ln,{alt:"logo",src:"/config/images/logo.png"}),Object(cn.jsx)(V,{}),Object(cn.jsxs)(sn,{flex:1,style:{padding:24},test:!0,children:[Object(cn.jsx)(nn,{flex:1,jc:"center",ai:"center",children:Object(cn.jsx)(dn,{alt:"example",src:"/config/images/example.gif"})}),Object(cn.jsx)($,{}),Object(cn.jsxs)(nn,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"var(--accent)",padding:24,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(cn.jsxs)(tn,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)"},children:[r.totalSupply," / ",y.MAX_SUPPLY]}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(cn.jsx)(un,{target:"_blank",href:y.SCAN_LINK,children:(n=y.CONTRACT_ADDRESS,t=15,n.length>t?"".concat(n.substring(0,t),"..."):n)})}),Object(cn.jsx)(V,{}),Number(r.totalSupply)>=y.MAX_SUPPLY?Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",y.NFT_NAME," on"]}),Object(cn.jsx)(V,{}),Object(cn.jsx)(un,{target:"_blank",href:y.MARKETPLACE_LINK,children:y.MARKETPLACE})]}):Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsxs)(tn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 ",y.SYMBOL," costs ",y.DISPLAY_COST," ",y.NETWORK.SYMBOL,"."]}),Object(cn.jsx)(J,{}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(cn.jsx)(V,{}),""===c.account||null===c.smartContract?Object(cn.jsxs)(nn,{ai:"center",jc:"center",children:[Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",y.NETWORK.NAME," network"]}),Object(cn.jsx)(V,{}),Object(cn.jsx)(rn,{}),Object(cn.jsx)(an,{onClick:function(n){n.preventDefault(),e(function(){var n=Object(A.a)(w.a.mark((function n(t){var e,c,r,a,o,i,s,l,d;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=n.sent,n.next=6,e.json();case 6:return c=n.sent,n.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=n.sent,n.next=12,r.json();case 12:if(a=n.sent,o=window,!(i=o.ethereum)||!i.isMetaMask){n.next=33;break}return _.a.setProvider(i),s=new M.a(i),n.prev=18,n.next=21,i.request({method:"eth_requestAccounts"});case 21:return l=n.sent,n.next=24,i.request({method:"net_version"});case 24:n.sent==a.NETWORK.ID?(d=new _.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){t(Q(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(G("Change network to ".concat(a.NETWORK.NAME,"."))),n.next=31;break;case 28:n.prev=28,n.t0=n.catch(18),t(G("Something went wrong."));case 31:n.next=34;break;case 33:t(G("Install Metamask."));case 34:case"end":return n.stop()}}),n,null,[[18,28]])})));return function(t){return n.apply(this,arguments)}}()),v()},children:"CONNECT"}),""!==c.errorMsg?Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(V,{}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(cn.jsxs)(cn.Fragment,{children:[Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(cn.jsx)(Z,{}),Object(cn.jsxs)(nn,{ai:"center",jc:"center",fd:"row",children:[Object(cn.jsx)(on,{style:{lineHeight:.4},disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j-1;n<1&&(n=1),h(n)}()},children:"-"}),Object(cn.jsx)(Z,{}),Object(cn.jsx)(en,{style:{textAlign:"center",color:"var(--accent-text)"},children:j}),Object(cn.jsx)(Z,{}),Object(cn.jsx)(on,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=j+1;n>10&&(n=10),h(n)}()},children:"+"})]}),Object(cn.jsx)(V,{}),Object(cn.jsx)(nn,{ai:"center",jc:"center",fd:"row",children:Object(cn.jsx)(an,{disabled:i?1:0,onClick:function(n){n.preventDefault(),function(){var n=y.WEI_COST,t=y.GAS_LIMIT,r=String(n*j),a=String(t*j);console.log("Cost: ",r),console.log("Gas limit: ",a),x("Minting your ".concat(y.NFT_NAME,"...")),s(!0),c.smartContract.methods.mint(j).send({gasLimit:String(a),to:y.CONTRACT_ADDRESS,from:c.account,value:r}).once("error",(function(n){console.log(n),x("Sorry, something went wrong please try again later."),s(!1)})).then((function(n){console.log(n),x("WOW, the ".concat(y.NFT_NAME," is yours! go visit Opensea.io to view it.")),s(!1),e(H(c.account))}))}(),v()},children:i?"BUSY":"BUY"})})]})]}),Object(cn.jsx)(Z,{})]}),Object(cn.jsx)($,{}),Object(cn.jsx)(nn,{flex:1,jc:"center",ai:"center",children:Object(cn.jsx)(dn,{alt:"example",src:"/config/images/example.gif",style:{transform:"scaleX(-1)"}})})]}),Object(cn.jsx)(Z,{}),Object(cn.jsxs)(nn,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",y.NETWORK.NAME," Mainnet) and the correct address. Please note: Once you make the purchase, you cannot undo this action."]}),Object(cn.jsx)(V,{}),Object(cn.jsxs)(en,{style:{textAlign:"center",color:"var(--primary-text)"},children:["We have set the gas limit to ",y.GAS_LIMIT," for the contract to successfully mint your NFT. We recommend that you don't lower the gas limit."]})]})]})})},pn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,538)).then((function(t){var e=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),c(n),r(n),a(n),o(n)}))};e(533);v.a.render(Object(cn.jsx)(T.a,{store:z,children:Object(cn.jsx)(xn,{})}),document.getElementById("root")),pn()}},[[534,1,2]]]);
//# sourceMappingURL=main.591e3c42.chunk.js.map