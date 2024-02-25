"use strict";(self["webpackChunkjust_sell"]=self["webpackChunkjust_sell"]||[]).push([[886],{2375:function(e,l,a){a.d(l,{Cb:function(){return d},oh:function(){return n},zo:function(){return o}});var t=a(7736),r=a(7629);const o=(0,r.Ry)({terminal_id:(0,r.Z_)().required(t.r.REQUIRED_FIELD),can_offline:(0,r.O7)().required(t.r.REQUIRED_FIELD),can_user_reversal:(0,r.O7)().required(t.r.REQUIRED_FIELD),callback_req_type:(0,r.Z_)().required(t.r.REQUIRED_FIELD),callback_type:(0,r.Z_)().required(t.r.REQUIRED_FIELD),inShifts:(0,r.O7)().required(t.r.REQUIRED_FIELD)}),n=(0,r.Ry)({id:(0,r.Z_)().required(t.r.REQUIRED_FIELD),secret_key:(0,r.Z_)().required(t.r.REQUIRED_FIELD)}),d=(0,r.Ry)({secret_key:(0,r.Z_)().required(t.r.REQUIRED_FIELD),req_type:(0,r.Z_)().required(t.r.REQUIRED_FIELD),settings:(0,r.Z_)().required(t.r.REQUIRED_FIELD),sync_type:(0,r.Z_)().required(t.r.REQUIRED_FIELD),max_offline_sum:(0,r.Rx)().required(t.r.REQUIRED_FIELD).min(1,t.r.MIN_NUMBER),endpoint_result:(0,r.Z_)().required(t.r.REQUIRED_FIELD),payload:(0,r.Z_)().required(t.r.REQUIRED_FIELD),sign_stract:(0,r.Z_)().required(t.r.REQUIRED_FIELD),card_wait:(0,r.Rx)().required(t.r.REQUIRED_FIELD).min(1,t.r.MIN_NUMBER),sync_period:(0,r.Rx)().required(t.r.REQUIRED_FIELD).min(1,t.r.MIN_NUMBER)})},6390:function(e,l,a){a.d(l,{Z:function(){return v}});var t=a(3396),r=a(7139),o=a(9242),n=a.p+"img/close-icon.622be15f.svg";const d={class:"modal-header"},s={class:"modal-title"},i=(0,t._)("img",{src:n,alt:"Close"},null,-1),u=[i],m={class:"modal-footer"};function c(e,l,a,n,i,c){return(0,t.wg)(),(0,t.j4)(t.lR,{to:"body"},[(0,t._)("div",{class:(0,r.C_)(["modal",{"modal--opened":e.opened,[`${e.classNames}`]:Boolean(e.classNames)}]),tabindex:"-1",role:"dialog",onClick:l[2]||(l[2]=(...l)=>e.close&&e.close(...l)),ref:"modal"},[(0,t._)("div",{class:"modal-content",style:(0,r.j5)({minWidth:e.minWidth,maxWidth:e.maxWidth,minHeight:e.minHeight,maxHeight:e.maxHeight}),onClick:l[1]||(l[1]=(0,o.iM)((()=>{}),["stop"]))},[(0,t._)("div",d,[(0,t._)("h4",s,[(0,t.WI)(e.$slots,"title")]),e.showCloseButton?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"modal-close-button",onClick:l[0]||(l[0]=(...l)=>e.close&&e.close(...l))},u)):(0,t.kq)("",!0)]),(0,t.WI)(e.$slots,"content",{close:e.close}),(0,t._)("div",m,[(0,t.WI)(e.$slots,"footer",{close:e.close})])],4)],2)])}var p=(0,t.aZ)({modalController:null,props:{classNames:String,showCloseButton:{type:Boolean,default:!1},minWidth:String,maxWidth:String,minHeight:String,maxHeight:String},data(){return{opened:!1}},mounted(){document.addEventListener("keydown",this.onKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.onKeydown)},methods:{open(){let e,l;const a=new Promise(((a,t)=>{e=a,l=t}));return this.$options.modalController={resolve:e,reject:l},this.opened=!0,a},close(){this.$options.modalController.resolve(!0),this.opened=!1},onKeydown(e){"Escape"===e.key&&this.close()}}}),f=a(89);const _=(0,f.Z)(p,[["render",c]]);var v=_},1255:function(e,l,a){a.d(l,{Z:function(){return E}});var t=a(3396);const r=["type","placeholder","name","required","value"],o={class:"form-field__extra-container"};function n(e,l,a,n,d,s){const i=(0,t.up)("password-visibility-button"),u=(0,t.up)("password-generate-button");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("input",{type:e.type,placeholder:e.placeholder,name:e.name,required:e.required,value:e.password,class:"form-field__input",onInput:l[0]||(l[0]=l=>e.input(l)),onBlur:l[1]||(l[1]=l=>e.$emit("blur"))},null,40,r),(0,t._)("div",o,[(0,t.Wm)(i,{onChange:e.changeType},null,8,["onChange"]),e.hasGenerateButton?((0,t.wg)(),(0,t.j4)(u,{key:0,onGeneratedPassword:e.onGeneratePassword},null,8,["onGeneratedPassword"])):(0,t.kq)("",!0)])],64)}var d=a.p+"img/eye_hidden.08669155.svg",s=a.p+"img/eye_visible.cfc84e83.svg";const i={key:0,src:d,alt:"Show\n    password"},u={key:1,src:s,alt:"Show\n    password"};function m(e,l,a,r,o,n){return(0,t.wg)(),(0,t.iD)("button",{type:"button",class:"form-field__extra password-visibility-button",tabindex:"-1",onClick:l[0]||(l[0]=(...l)=>e.changeVisibility&&e.changeVisibility(...l))},[e.visibility?((0,t.wg)(),(0,t.iD)("img",u)):((0,t.wg)(),(0,t.iD)("img",i))])}var c=(0,t.aZ)({emits:["change"],data(){return{visibility:!1}},watch:{visibility(e){const l=e?"text":"password";this.$emit("change",l)}},methods:{changeVisibility(){this.visibility=!this.visibility}}}),p=a(89);const f=(0,p.Z)(c,[["render",m]]);var _=f,v=a.p+"img/key_icon.9e7583e7.svg";const h=(0,t._)("img",{src:v,alt:"Generate"},null,-1),g=[h];function y(e,l,a,r,o,n){return(0,t.wg)(),(0,t.iD)("button",{type:"button",class:"form-field__extra password-visibility-button",tabindex:"-1",onClick:l[0]||(l[0]=(...l)=>e.generatePassword&&e.generatePassword(...l))},g)}var b=(0,t.aZ)({emits:["generatedPassword"],data(){return{generatedPassword:""}},watch:{generatedPassword(e){this.$emit("generatedPassword",e)}},methods:{generatePassword(){const e="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",l=15;let a="";for(var t=0;t<l;t++){const l=Math.floor(Math.random()*e.length);a+=e.substring(l,l+1)}this.generatedPassword=a}}});const w=(0,p.Z)(b,[["render",y]]);var V=w,k=(0,t.aZ)({props:{name:{type:String,required:!0},placeholder:{type:String,required:!1},required:{type:Boolean,required:!1},hasGenerateButton:{type:Boolean,default:!1},modelValue:String},emits:["update:modelValue","blur"],components:{PasswordVisibilityButton:_,PasswordGenerateButton:V},data(){return{type:"password",password:this.modelValue||""}},watch:{modelValue(e){this.password=e}},methods:{changeType(e){this.type=e},input(e){const l=e.target?.value;this.$emit("update:modelValue",l)},onGeneratePassword(e){this.$emit("update:modelValue",e)}}});const Z=(0,p.Z)(k,[["render",n]]);var E=Z},2446:function(e,l,a){a.d(l,{Z:function(){return u}});var t=a(3396),r=a(7139);const o={class:"form-title__content"};function n(e,l,a,n,d,s){return(0,t.wg)(),(0,t.iD)("div",{class:(0,r.C_)(["form-title",`form-title--${e.direction}`])},[(0,t._)("div",o,[(0,t.WI)(e.$slots,"title")])],2)}var d=(0,t.aZ)({props:{direction:{type:String,required:!1,default:"bottom"}}}),s=a(89);const i=(0,s.Z)(d,[["render",n]]);var u=i},1166:function(e,l,a){a.d(l,{Z:function(){return m}});var t=a(3396),r=a(9242);const o={class:"tab-pane"};function n(e,l,a,n,d,s){return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",o,[(0,t.WI)(e.$slots,"default")],512)),[[r.F8,n.isActive]])}var d=a(4870),s={props:["title"],setup(e){const l=(0,d.iH)(!1),a=(0,t.f3)("TabsProvider");return(0,t.YP)((()=>a.selectedIndex),(()=>{l.value=e.title===a.selectedIndex})),(0,t.wF)((()=>{l.value=e.title===a.selectedIndex})),{isActive:l}}},i=a(89);const u=(0,i.Z)(s,[["render",n]]);var m=u},2960:function(e,l,a){a.d(l,{Z:function(){return f}});var t=a(3396),r=a(7139);const o={class:"tabs"},n={class:"tabs-pills"},d=["onClick"],s={class:"tabs-panes"};function i(e,l,a,i,u,m){return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",n,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.tabs,(l=>((0,t.wg)(),(0,t.iD)("div",{class:(0,r.C_)(["tab-pill",{active:e.selectedIndex===l.props.title}]),key:l.props.title,onClick:a=>e.selectedIndex=l.props.title},(0,r.zw)(l.props.title),11,d)))),128))]),(0,t._)("div",s,[(0,t.WI)(e.$slots,"default")])])}var u=a(4870),m=(0,t.aZ)({setup(e,{slots:l}){const a=(0,u.qj)({selectedIndex:null,tabs:[],count:0});(0,t.JJ)("TabsProvider",a);const r=e=>{a.selectedIndex=e},o=()=>{l.default&&(a.tabs=l.default())};return(0,t.wF)((()=>o())),(0,t.Xn)((()=>o())),(0,t.bv)((()=>{r(a.tabs.at(0).props.title)})),{...(0,u.BK)(a),selectTab:r}}}),c=a(89);const p=(0,c.Z)(m,[["render",i]]);var f=p},5375:function(e,l,a){a.d(l,{Z:function(){return u}});var t=a(3396);function r(e,l,a,r,o,n){const d=(0,t.up)("select-field"),s=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(s,{label:e.label||"Тип запиту",error:e.error},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{options:e.types,name:"callback_type","input-placeholder":"Оберіть тип запиту","search-placeholder":"Введіть тип запиту","model-value":e.modelValue,"onUpdate:modelValue":e.select,"has-search":!1},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["label","error"])}var o=a(4560),n=a(6112),d=(0,t.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],components:{FormField:o.Z,SelectField:n.Z},data(){return{types:[{value:"POST",label:"POST"},{value:"GET",label:"GET"}]}},methods:{select(e){this.$emit("update:modelValue",e)}}}),s=a(89);const i=(0,s.Z)(d,[["render",r]]);var u=i},4887:function(e,l,a){a.d(l,{Z:function(){return u}});var t=a(3396);function r(e,l,a,r,o,n){const d=(0,t.up)("select-field"),s=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(s,{label:e.label||"Тип запиту",error:e.error},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{options:e.types,name:"callback_req_type","input-placeholder":"Оберіть тип запиту","search-placeholder":"Введіть тип запиту","model-value":e.modelValue,"onUpdate:modelValue":e.select,"has-search":!1},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["label","error"])}var o=a(4560),n=a(6112),d=(0,t.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],components:{FormField:o.Z,SelectField:n.Z},data(){return{types:[{value:"json",label:"JSON"},{value:"xml",label:"XML"},{value:"x-www-form",label:"X-WWW-FORM"}]}},methods:{select(e){this.$emit("update:modelValue",e)}}}),s=a(89);const i=(0,s.Z)(d,[["render",r]]);var u=i},3013:function(e,l,a){a.d(l,{Z:function(){return m}});var t=a(3396);const r=(0,t._)("p",null,[(0,t.Uk)(" Параметр вказує, як будуть застосовуватись налаштування то терміналів. "),(0,t._)("br"),(0,t._)("br"),(0,t._)("b",null,"Всі термінали"),(0,t.Uk)(" – вказані параметри автоматично застосовуються для всіх нових терміналів. "),(0,t._)("br"),(0,t._)("b",null,"Кожний термінал окремо"),(0,t.Uk)(" – вказані параметри не застосовуються до нових терміналів. Кожний термінал налаштовуються окремо ")],-1);function o(e,l,a,o,n,d){const s=(0,t.up)("select-field"),i=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(i,{label:"Тип налаштування",error:e.error},{hint:(0,t.w5)((()=>[r])),default:(0,t.w5)((()=>[(0,t.Wm)(s,{options:e.settings,name:"settings","input-placeholder":"Оберіть тип налаштування","search-placeholder":"Введіть тип налаштування","has-search":!1,"model-value":e.modelValue,"onUpdate:modelValue":e.select},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["error"])}var n=a(4560),d=a(6112),s=(0,t.aZ)({props:{modelValue:String,error:String},emits:["update:modelValue"],components:{FormField:n.Z,SelectField:d.Z},computed:{settings(){const e=this.$store.state.terminals.terminalsRef;return e?e.offline_settings.map((e=>({value:e.id.toString(),label:e.name||""}))):[]}},methods:{select(e){this.$emit("update:modelValue",e)}}}),i=a(89);const u=(0,i.Z)(s,[["render",o]]);var m=u},1297:function(e,l,a){a.d(l,{Z:function(){return u}});var t=a(3396);function r(e,l,a,r,o,n){const d=(0,t.up)("select-field"),s=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(s,{label:"Тип синхронізації",error:e.error},{hint:(0,t.w5)((()=>[(0,t.Uk)(" Дає змогу налаштувати синхронізацію чорних списків (банківські карти по яким не пройшла оплата) між учасниками системи JustSell ")])),default:(0,t.w5)((()=>[(0,t.Wm)(d,{options:e.syncTypes,name:"syncTypes","input-placeholder":"Оберіть тип синхронізації","search-placeholder":"Введіть тип синхронізації","has-search":!1,"model-value":e.modelValue,"onUpdate:modelValue":e.select},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["error"])}var o=a(4560),n=a(6112),d=(0,t.aZ)({props:{modelValue:String,error:String},emits:["update:modelValue"],components:{FormField:o.Z,SelectField:n.Z},computed:{syncTypes(){const e=this.$store.state.terminals.terminalsRef;return e?e.sync_type.map((e=>({value:e.id.toString(),label:e.name||""}))):[]}},methods:{select(e){this.$emit("update:modelValue",e)}}}),s=a(89);const i=(0,s.Z)(d,[["render",r]]);var u=i},2074:function(e,l,a){a.r(l),a.d(l,{default:function(){return Fe}});var t=a(3396);function r(e,l,a,r,o,n){const d=(0,t.up)("app-loading"),s=(0,t.up)("terminal-form"),i=(0,t.up)("app-layout");return(0,t.wg)(),(0,t.j4)(i,null,{appTitle:(0,t.w5)((()=>[(0,t.Uk)(" Загальні налаштування терміналу ")])),appContent:(0,t.w5)((()=>[(0,t.Wm)(d,{loading:e.loading},null,8,["loading"]),e.loading?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(s,{key:0,"actions-fixed":!0,"config-data":e.configData},null,8,["config-data"]))])),_:1})}var o=a(5627),n=a(7139);const d={key:0,class:"terminal-form__container"};function s(e,l,a,r,o,s){const i=(0,t.up)("general-config"),u=(0,t.up)("v-tab"),m=(0,t.up)("add-config-selector"),c=(0,t.up)("add-config"),p=(0,t.up)("v-tabs"),f=(0,t.up)("v-button"),_=(0,t.up)("v-form");return Boolean(this.configData)?((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(_,{class:"terminal-form",onSubmit:e.sendConfig,schema:e.offlineTerminal,"initial-values":e.initialValues},{fields:(0,t.w5)((({values:l,errors:a})=>[(0,t.Wm)(p,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{title:"Загальні налаштвання"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{"form-values":l,"form-errors":a},null,8,["form-values","form-errors"])])),_:2},1024),(0,t.Wm)(u,{title:"Додадкові налаштування"},{default:(0,t.w5)((()=>[e.hasAddFields?((0,t.wg)(),(0,t.j4)(m,{key:0,"form-values":l,"form-errors":a.add_config},null,8,["form-values","form-errors"])):((0,t.wg)(),(0,t.j4)(c,{key:1,"form-values":{add_config:l.add_config||[],add_data:l.add_data||{}},"form-errors":a.add_config},null,8,["form-values","form-errors"]))])),_:2},1024)])),_:2},1024),(0,t._)("div",{class:(0,n.C_)(["form-actions",{"form-actions--fixed":e.actionsFixed}])},[(0,t.Wm)(f,{type:"submit",loading:e.loading},{text:(0,t.w5)((()=>[(0,t.Uk)("Додати налаштування")])),_:1},8,["loading"])],2)])),_:1},8,["onSubmit","schema","initial-values"])])):(0,t.kq)("",!0)}var i=a(4677),u=a(4856),m=a(1166),c=a(2960),p=a(4610),f=a(5384),_=a(5577),v=a(2375);const h={class:"checkbox-container"},g=(0,t._)("br",null,null,-1),y={class:"checkbox-container"},b={class:"checkbox-container"};function w(e,l,a,r,o,n){const d=(0,t.up)("settings-select"),s=(0,t.up)("checkbox-field"),i=(0,t.up)("form-field"),u=(0,t.up)("input-field"),m=(0,t.up)("password-field"),c=(0,t.up)("form-title"),p=(0,t.up)("textarea-field"),f=(0,t.up)("payload-field"),_=(0,t.up)("sign-stract-field"),v=(0,t.up)("request-method-select"),w=(0,t.up)("request-type-select"),V=(0,t.up)("synctype-select");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(d,{modelValue:e.values.settings,"onUpdate:modelValue":l[0]||(l[0]=l=>e.values.settings=l),error:e.errors.settings},null,8,["modelValue","error"]),(0,t._)("div",h,[(0,t.Wm)(i,null,{hint:(0,t.w5)((()=>[(0,t.Uk)(" У всіх нових терміналах буде дозволена робота в режимі offline ")])),default:(0,t.w5)((()=>[(0,t.Wm)(s,{name:"is_default_offline",modelValue:e.values.is_default_offline,"onUpdate:modelValue":l[1]||(l[1]=l=>e.values.is_default_offline=l),label:"Оффлайн за замовчуванням"},null,8,["modelValue"])])),_:1})]),(0,t.Wm)(i,{label:"Максимальна сума для оффлайн платежу",error:e.errors.max_offline_sum},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:e.values.max_offline_sum,"onUpdate:modelValue":l[2]||(l[2]=l=>e.values.max_offline_sum=l),name:"max_offline_sum",type:"number",placeholder:"Введіть максимальну суму для оффлайн платежу"},null,8,["modelValue"])])),_:1},8,["error"]),"1"===e.values.allocation_type?((0,t.wg)(),(0,t.j4)(i,{key:0,label:"Ідентифікатор ПТКС",error:e.errors.ptks_num},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:e.values.ptks_num,"onUpdate:modelValue":l[3]||(l[3]=l=>e.values.ptks_num=l),name:"ptks_num",type:"number",placeholder:"Введіть ідентифікатор ПТКС"},null,8,["modelValue"])])),_:1},8,["error"])):(0,t.kq)("",!0),(0,t.Wm)(i,{label:"Secret Key (підпис HmacSHA256)",error:e.errors.secret_key},{hint:(0,t.w5)((()=>[(0,t.Uk)(" Потрібне для підпису запитів зі сторони клієнтів (наприклад запит статусу транзакції) ")])),default:(0,t.w5)((()=>[(0,t.Wm)(m,{name:"secrey_key",modelValue:e.values.secret_key,"onUpdate:modelValue":l[4]||(l[4]=l=>e.values.secret_key=l),hasGenerateButton:!0,placeholder:"Введіть або згенеруйте"},null,8,["modelValue"])])),_:1},8,["error"]),(0,t.Wm)(c,null,{title:(0,t.w5)((()=>[(0,t.Uk)("Ви можете отримувати результати транзакцій на свій backend. "),g,(0,t.Uk)(" Для цього заповніть поля нижче")])),_:1}),(0,t.Wm)(i,{label:"Endpoint для повідомлень про результати транзакцій",error:e.errors.endpoint_result},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:e.values.endpoint_result,"onUpdate:modelValue":l[5]||(l[5]=l=>e.values.endpoint_result=l),name:"endpoint_result",placeholder:"Наприклад, https://example.com/callback"},null,8,["modelValue"])])),_:1},8,["error"]),(0,t.Wm)(i,{label:"GET параметри для передачі"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:e.values.add_get,"onUpdate:modelValue":l[6]||(l[6]=l=>e.values.add_get=l),name:"add_get",placeholder:"Наприклад, ?param_name=param_value"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(i,{label:"Заголовки запиту"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{modelValue:e.values.headers,"onUpdate:modelValue":l[7]||(l[7]=l=>e.values.headers=l),name:"headers",placeholder:"Наприклад, Content-type: application/json; Host:example.it"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(f,{modelValue:e.values.payload,"onUpdate:modelValue":l[8]||(l[8]=l=>e.values.payload=l),error:e.errors.payload},null,8,["modelValue","error"]),(0,t.Wm)(_,{modelValue:e.values.sign_stract,"onUpdate:modelValue":l[9]||(l[9]=l=>e.values.sign_stract=l),error:e.errors.sign_stract},null,8,["modelValue","error"]),(0,t._)("div",y,[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(s,{modelValue:e.values.regen_key,"onUpdate:modelValue":l[10]||(l[10]=l=>e.values.regen_key=l),name:"regen_key",label:"Згенерувати новий приватний ключ підпису"},null,8,["modelValue"])])),_:1})]),(0,t.Wm)(v,{label:"Тип запиту зворотного виклику",modelValue:e.values.req_type,"onUpdate:modelValue":l[11]||(l[11]=l=>e.values.req_type=l),error:e.errors.req_type},null,8,["modelValue","error"]),(0,t.Wm)(w,{label:"Тип зворотного виклику",modelValue:e.values.callback_req_type,"onUpdate:modelValue":l[12]||(l[12]=l=>e.values.callback_req_type=l),error:e.errors.callback_req_type},null,8,["modelValue","error"]),(0,t.Wm)(i,{label:"Час очікування картки, в секундах",error:e.errors.card_wait},{hint:(0,t.w5)((()=>[(0,t.Uk)(" Час, який термінал очікує, що клієнт прикладе платіжний пристрій ")])),default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:e.values.card_wait,"onUpdate:modelValue":l[13]||(l[13]=l=>e.values.card_wait=l),name:"card_wait",placeholder:"Наприклад, 30",type:"number"},null,8,["modelValue"])])),_:1},8,["error"]),(0,t.Wm)(V,{modelValue:e.values.sync_type,"onUpdate:modelValue":l[14]||(l[14]=l=>e.values.sync_type=l),error:e.errors.sync_type},null,8,["modelValue","error"]),(0,t._)("div",b,[(0,t.Wm)(i,null,{hint:(0,t.w5)((()=>[(0,t.Uk)(" Робота на терміналі не почнеться, якщо не буде користувач не проведе авторизацію по відкриттю зміни ")])),default:(0,t.w5)((()=>[(0,t.Wm)(s,{modelValue:e.values.need_shift,"onUpdate:modelValue":l[15]||(l[15]=l=>e.values.need_shift=l),name:"need_shift",label:"Необхідне відкриття зміни"},null,8,["modelValue"])])),_:1})]),(0,t.Wm)(i,{label:"Час синхронізації, в секундах",error:e.errors.sync_period},{hint:(0,t.w5)((()=>[(0,t.Uk)(" Як часто термінал буде виходити на зв’язок з сервером для передачі та отримання даних ")])),default:(0,t.w5)((()=>[(0,t.Wm)(u,{modelValue:e.values.sync_period,"onUpdate:modelValue":l[16]||(l[16]=l=>e.values.sync_period=l),name:"sync_period",placeholder:"Наприклад, 30",type:"number"},null,8,["modelValue"])])),_:1},8,["error"])],64)}var V=a(4560),k=a(2619),Z=a(2729),E=a(6686),U=a(913),D=a(2446),F=a(1255),W=a(1225),x=a(3013),R=a(5375),I=a(4887),q=a(1297),S=(0,t.aZ)({props:["formValues","formErrors"],components:{FormField:V.Z,InputField:k.Z,CheckboxField:Z.Z,TextareaField:E.Z,RequestMethodSelect:R.Z,RequestTypeSelect:I.Z,PayloadField:U.Z,SettingsSelect:x.Z,SynctypeSelect:q.Z,SignStractField:W.Z,FormTitle:D.Z,PasswordField:F.Z},data(){return{values:this.formValues||{},errors:this.formErrors||{}}},watch:{formValues:{handler(e){this.values=e},immediate:!0},formErrors:{handler(e){this.errors=e||{}},immediate:!0}}}),C=a(89);const T=(0,C.Z)(S,[["render",w]]);var $=T;const L=(0,t._)("br",null,null,-1),j={class:"fields-container"};function B(e,l,a,r,o,n){const d=(0,t.up)("form-title"),s=(0,t.up)("AddConfigModal"),i=(0,t.up)("input-field"),u=(0,t.up)("form-field");return(0,t.wg)(),(0,t.iD)(t.HY,null,[Boolean(e.values.add_config.length)?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(d,{key:0},{title:(0,t.w5)((()=>[(0,t.Uk)("У вас ще немає додадкових налаштувань "),L,(0,t.Uk)(" Додайти натиснувши на кнопку нижче")])),_:1})),(0,t.Wm)(s,{"form-values":{add_config:e.values.add_config}},null,8,["form-values"]),(0,t._)("div",j,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.values.add_config,(l=>((0,t.wg)(),(0,t.j4)(u,{key:l.name,label:l.label,error:e.errors[l.name]},{default:(0,t.w5)((()=>[(0,t.Wm)(i,{modelValue:l.value,"onUpdate:modelValue":e=>l.value=e,name:l.name,type:"text"},null,8,["modelValue","onUpdate:modelValue","name"])])),_:2},1032,["label","error"])))),128))])],64)}const P={class:"form-actions"};function A(e,l,a,r,o,n){const d=(0,t.up)("v-button"),s=(0,t.up)("input-field"),i=(0,t.up)("form-field"),u=(0,t.up)("v-form"),m=(0,t.up)("v-modal");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(d,{onClick:e.openModal},{text:(0,t.w5)((()=>[(0,t.Uk)("Додати налаштвання")])),_:1},8,["onClick"]),(0,t.Wm)(m,{ref:"modal","min-width":"30vw","max-width":"30vw"},{title:(0,t.w5)((()=>[(0,t.Uk)("Додати налаштвання")])),content:(0,t.w5)((()=>[(0,t.Wm)(u,{class:"terminal-form",onSubmit:e.create,"initial-values":e.initialValues},{fields:(0,t.w5)((({values:e,errors:l})=>[(0,t.Wm)(i,{label:"Назва налаштування",error:l.max_offline_sum},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{modelValue:e.label,"onUpdate:modelValue":l=>e.label=l,name:"max_offline_sum",type:"text",placeholder:"Наприклад, Протокол спілкування з контролером"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(i,{label:"Ключ налаштування",error:l.name},{hint:(0,t.w5)((()=>[(0,t.Uk)("Ключ - назва з якою буде збережено поле налаштування")])),default:(0,t.w5)((()=>[(0,t.Wm)(s,{modelValue:e.name,"onUpdate:modelValue":l=>e.name=l,name:"max_offline_sum",type:"text",placeholder:"Наприклад, vmc_prot"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t.Wm)(i,{label:"Значення",error:l.value},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{modelValue:e.value,"onUpdate:modelValue":l=>e.value=l,name:"max_offline_sum",type:"text",placeholder:"Наприклад, 500"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["error"]),(0,t._)("div",P,[(0,t.Wm)(d,{"has-max-width":!1,type:"submit"},{text:(0,t.w5)((()=>[(0,t.Uk)("Додати")])),_:1})])])),_:1},8,["onSubmit","initial-values"])])),_:1},512)],64)}a(7658);var M=a(6390),H=(0,t.aZ)({props:["formValues"],components:{VForm:u.Z,VButton:p.Z,VModal:M.Z,InputField:k.Z,FormField:V.Z},data(){return{values:this.formValues||{},initialValues:{name:"",label:"",value:""}}},watch:{formValues:{handler(e){this.values=e},immediate:!0}},methods:{openModal(){const e=this.$refs.modal;e.open()},create(e){this.values.add_config.push(e),this.initialValues={name:"",label:"",value:""};const l=this.$refs.modal;l.close()}}});const N=(0,C.Z)(H,[["render",A]]);var Q=N,G=(0,t.aZ)({props:["formValues","formErrors"],components:{FormTitle:D.Z,FormField:V.Z,InputField:k.Z,AddConfigModal:Q},data(){return{values:this.formValues||{},errors:this.formErrors||{}}},watch:{formValues:{handler(e){this.values=e},immediate:!0},formErrors:{handler(e){this.errors=e||{}},immediate:!0}}});const O=(0,C.Z)(G,[["render",B]]);var Y=O;const K={key:0,class:"fields-container"};function J(e,l,a,r,o,n){const d=(0,t.up)("AddDataFields");return Boolean(e.values.add_config&&e.values.add_config.length)?((0,t.wg)(),(0,t.iD)("div",K,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.values.add_config,(e=>((0,t.wg)(),(0,t.j4)(d,{key:e.name,fieldData:e.field,values:e},null,8,["fieldData","values"])))),128))])):(0,t.kq)("",!0)}const X={key:0},z={key:1},ee={key:2},le={key:3},ae={key:4};function te(e,l,a,r,o,n){const d=(0,t.up)("input-field"),s=(0,t.up)("form-field"),i=(0,t.up)("checkbox-field"),u=(0,t.up)("field-select"),m=(0,t.up)("array-field");return(0,t.wg)(),(0,t.iD)(t.HY,null,["text"===e.field?.type?((0,t.wg)(),(0,t.iD)("div",X,[(0,t.Wm)(s,{label:e.field.info},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"max_offline_sum",type:"text",modelValue:e.values.value,"onUpdate:modelValue":l[0]||(l[0]=l=>e.values.value=l),placeholder:e.field.info,disabled:!JSON.parse(e.field.can_user_edit)},null,8,["modelValue","placeholder","disabled"])])),_:1},8,["label"])])):(0,t.kq)("",!0),"tag"===e.field?.type?((0,t.wg)(),(0,t.iD)("div",z,[(0,t.Wm)(s,{label:e.field.info},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"max_offline_sum",type:"text",modelValue:e.values.value,"onUpdate:modelValue":l[1]||(l[1]=l=>e.values.value=l),placeholder:e.field.info,disabled:!JSON.parse(e.field.can_user_edit)},null,8,["modelValue","placeholder","disabled"])])),_:1},8,["label"])])):(0,t.kq)("",!0),"bool"===e.field?.type?((0,t.wg)(),(0,t.iD)("div",ee,[(0,t.Wm)(i,{name:"is_default_offline",modelValue:e.values.value,"onUpdate:modelValue":l[2]||(l[2]=l=>e.values.value=l),label:e.field.info,disabled:!JSON.parse(e.field.can_user_edit)},null,8,["modelValue","label","disabled"])])):(0,t.kq)("",!0),"select"===e.field?.type?((0,t.wg)(),(0,t.iD)("div",le,[(0,t.Wm)(u,{name:"is_default_offline",modelValue:e.values.value,"onUpdate:modelValue":l[3]||(l[3]=l=>e.values.value=l),label:e.field.info,data:e.field.data},null,8,["modelValue","label","data"])])):(0,t.kq)("",!0),"array_text"===e.field?.type?((0,t.wg)(),(0,t.iD)("div",ae,[(0,t.Wm)(m,{name:e.field.field_name,label:e.field.info,min:e.field.data.min,max:e.field.data.max,values:e.values,disabled:!JSON.parse(e.field.can_user_edit)},null,8,["name","label","min","max","values","disabled"])])):(0,t.kq)("",!0)],64)}function re(e,l,a,r,o,n){const d=(0,t.up)("select-field"),s=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(s,{label:e.label},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{hasSearch:!1,options:e.options,"model-value":e.value,"onUpdate:modelValue":e.select},null,8,["options","model-value","onUpdate:modelValue"])])),_:1},8,["label"])}var oe=a(6112),ne=(0,t.aZ)({props:["modelValue","data","label"],emits:["update:modelValue"],components:{SelectField:oe.Z,FormField:V.Z},data(){return{options:[]}},watch:{data:{handler(e){this.options=e.split("|").map((e=>({label:e,value:e})))},immediate:!0}},methods:{select(e){this.$emit("update:modelValue",e)}}});const de=(0,C.Z)(ne,[["render",re]]);var se=de;const ie={class:"container"},ue=["onClick"];function me(e,l,a,r,o,n){const d=(0,t.up)("InputField"),s=(0,t.up)("form-field");return(0,t.wg)(),(0,t.j4)(s,{label:e.label},{default:(0,t.w5)((()=>[(0,t._)("div",ie,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.records,((a,r)=>((0,t.wg)(),(0,t.iD)("div",{class:"record",key:r},[(0,t.Wm)(d,{name:"name",modelValue:e.values.value[r],"onUpdate:modelValue":l=>e.values.value[r]=l,disabled:!e.canEdit},null,8,["modelValue","onUpdate:modelValue","disabled"]),e.canRemove?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"button",onClick:l=>e.remove(r)},"-",8,ue)):(0,t.kq)("",!0),e.canAdd&&e.records.length-1===r?((0,t.wg)(),(0,t.iD)("div",{key:1,class:"button",onClick:l[0]||(l[0]=(...l)=>e.add&&e.add(...l))}," + ")):(0,t.kq)("",!0)])))),128))])])),_:1},8,["label"])}var ce=(0,t.aZ)({props:["label","values","min","max","canEdit","name"],components:{FormField:V.Z,InputField:k.Z},data(){return{records:[""],canAdd:!0,canRemove:!1}},watch:{values:{handler(e){console.log(e),e.value&&e.value.length&&(this.records=e.value)},immediate:!0},"records.length":{handler(e){this.canAdd=this.canEdit&&e<parseInt(this.max||1/0),this.canRemove=this.canEdit&&e>parseInt(this.min||1)},immediate:!0}},methods:{add(){this.records.push("")},remove(e){this.records=this.records.filter(((l,a)=>a!==e))}}});const pe=(0,C.Z)(ce,[["render",me],["__scopeId","data-v-64b896ca"]]);var fe=pe,_e=(0,t.aZ)({props:["fieldData","values"],components:{FormField:V.Z,InputField:k.Z,CheckboxField:Z.Z,FieldSelect:se,ArrayField:fe},data(){return{field:null,fieldValues:{}}},watch:{fieldData:{handler(e){this.field=e},immediate:!0},values:{handler(e){console.log(e),e&&e.length&&(this.fieldValues=e)},immediate:!0}}});const ve=(0,C.Z)(_e,[["render",te]]);var he=ve,ge=(0,t.aZ)({props:["formValues","formErrors"],components:{AddDataFields:he},data(){return{values:this.formValues||{add_config:[],add_data:{}},errors:this.formErrors||{}}},computed:{allocType(){return this.$route.query.alloc_type},terminalRef(){return this.$store.state.terminals.terminalsRef},addDataFields(){if(!this.terminalRef||!this.terminalRef.add_data_fields)return[];const e=this.terminalRef.add_data_fields.filter((e=>e.alloc_type===this.allocType));return e}},watch:{formValues:{handler(e){e.add_config?.length&&Object.keys(e.add_data).length&&(this.values=e)},immediate:!0},formErrors:{handler(e){this.errors=e||{}},immediate:!0},addDataFields:{handler(e){this.values.add_config=e.map((e=>{const l={text:e.data||"",tag:e.data||"",bool:e.data||!1,select:"",array_text:[]};return{name:e.field_name,label:e.info,type:e.type,value:this.values.add_data[e.field_name]||l[e.type],data:e.data,field:e}}))},immediate:!0}}});const ye=(0,C.Z)(ge,[["render",J]]);var be=ye;const we={name:"",settings:"",secret_key:"",max_offline_sum:0,is_default_offline:!1,is_for_all_card:!0,can_user_add_card:!1,endpoint_result:"",add_get:"",headers:"",payload:"",sign_stract:"",card_wait:30,req_type:"",need_shift:!1,sync_type:"",sync_period:30,update_all_term:!1,add_data:[],callback_req_type:"",regen_key:!1,allocation_type:"",ptks_num:"",add_config:[]};var Ve=(0,t.aZ)({props:{actionsFixed:{type:Boolean,required:!1,default:!1},configData:{type:Object,required:!1,default(){return we}}},components:{VForm:u.Z,VTab:m.Z,VTabs:c.Z,VButton:p.Z,GeneralConfig:$,AddConfig:Y,AddConfigSelector:be},setup(){const e=(0,i.pm)();return{toast:e,Rules:_.i,offlineTerminal:v.Cb}},data(){return{initialValues:{...we,...this.configData}}},watch:{configData:{handler(e){this.initialValues={...this.initialValues,...e}},immediate:!0}},computed:{loading(){return this.$store.state.terminals.formLoading},allocType(){return this.$route.query.alloc_type},terminalRef(){return this.$store.state.terminals.terminalsRef},hasAddFields(){return this.terminalRef?.add_data_fields?.some((e=>e.alloc_type===this.allocType))}},methods:{sendConfig(e){const l=this.$route.query.alloc_type,a={...e,alloc_type:l,add_data:e.add_config.reduce(((e,l)=>(e[l.name]=l.value,e)),{})};this.$store.dispatch(f.T.CREATE_OFFLINE_TERMINAL,{terminalData:a,toast:this.toast})}}});const ke=(0,C.Z)(Ve,[["render",s]]);var Ze=ke,Ee=a(7863),Ue=(0,t.aZ)({components:{AppLayout:o.Z,AppLoading:Ee.Z,TerminalForm:Ze},computed:{loading(){return this.$store.state.terminals.loading},allocType(){return this.$route.query.alloc_type},configData(){return this.$store.state.terminals.terminalConfig}},mounted(){this.$store.dispatch(f.T.GET_TERMINALS_REF),this.$store.dispatch(f.T.GET_TERMINAL_CONFIG,{alloc_type:this.allocType})}});const De=(0,C.Z)(Ue,[["render",r]]);var Fe=De}}]);
//# sourceMappingURL=886.74f2d9d5.js.map