(this["webpackJsonp@chainsafe/chainbridge-ui"]=this["webpackJsonp@chainsafe/chainbridge-ui"]||[]).push([[45],{290:function(n,e,r){"use strict";r.r(e);var t=r(2),i=r.n(t),u=(r(170),r(191));r(100),r(173),r(172);function o(n,e,r,t,i,u,o){try{var a=n[u](o),c=a.value}catch(s){return void r(s)}a.done?e(c):Promise.resolve(c).then(t,i)}function a(n){return function(){var e=this,r=arguments;return new Promise((function(t,i){var u=n.apply(e,r);function a(n){o(u,t,i,a,c,"next",n)}function c(n){o(u,t,i,a,c,"throw",n)}a(void 0)}))}}e.default=function(n){var e=n.apiKey,t=n.networkId,o=n.preferred,c=n.label,s=n.iconSrc;return{name:c||"Fortmatic",svg:n.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:s,wallet:function(){var n=a(i.a.mark((function n(o){var c,s,f,h,v,d,l;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.e(53).then(r.t.bind(null,794,7));case 2:return c=n.sent,s=c.default,f=new s(e,1===t?void 0:Object(u.g)(t)),h=f.getProvider(),v=o.BigNumber,d=o.getAddress,n.abrupt("return",{provider:h,instance:f,interface:{name:"Fortmatic",connect:function(){return f.user.login().then((function(n){return l=!0,n}))},disconnect:function(){return f.user.logout()},address:{get:function(){return l?d(h):Promise.resolve()}},network:{get:function(){return Promise.resolve(t)}},balance:{get:function(){var n=a(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",l&&f.user.getBalances().then((function(n){return n[0]?v(n[0].crypto_amount).times(v("1000000000000000000")).toString(10):null})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()},dashboard:function(){return f.user.settings()}}});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),type:"sdk",desktop:!0,mobile:!0,preferred:o}}}}]);