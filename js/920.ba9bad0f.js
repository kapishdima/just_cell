"use strict";(self["webpackChunkjust_sell"]=self["webpackChunkjust_sell"]||[]).push([[920],{6390:function(e,t,r){r.d(t,{Z:function(){return _}});var a=r(3396),i=r(7139),l=r(9242),s=r.p+"img/close-icon.622be15f.svg";const o={class:"modal-header"},d={class:"modal-title"},n=(0,a._)("img",{src:s,alt:"Close"},null,-1),c=[n],u={class:"modal-footer"};function m(e,t,r,s,n,m){return(0,a.wg)(),(0,a.j4)(a.lR,{to:"body"},[(0,a._)("div",{class:(0,i.C_)(["modal",{"modal--opened":e.opened,[`${e.classNames}`]:Boolean(e.classNames)}]),tabindex:"-1",role:"dialog",onClick:t[2]||(t[2]=(...t)=>e.close&&e.close(...t)),ref:"modal"},[(0,a._)("div",{class:"modal-content",style:(0,i.j5)({minWidth:e.minWidth,maxWidth:e.maxWidth,minHeight:e.minHeight,maxHeight:e.maxHeight}),onClick:t[1]||(t[1]=(0,l.iM)((()=>{}),["stop"]))},[(0,a._)("div",o,[(0,a._)("h4",d,[(0,a.WI)(e.$slots,"title")]),e.showCloseButton?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"modal-close-button",onClick:t[0]||(t[0]=(...t)=>e.close&&e.close(...t))},c)):(0,a.kq)("",!0)]),(0,a.WI)(e.$slots,"content",{close:e.close}),(0,a._)("div",u,[(0,a.WI)(e.$slots,"footer",{close:e.close})])],4)],2)])}var v=(0,a.aZ)({modalController:null,props:{classNames:String,showCloseButton:{type:Boolean,default:!1},minWidth:String,maxWidth:String,minHeight:String,maxHeight:String},data(){return{opened:!1}},mounted(){document.addEventListener("keydown",this.onKeydown)},beforeUnmount(){document.removeEventListener("keydown",this.onKeydown)},methods:{open(){let e,t;const r=new Promise(((r,a)=>{e=r,t=a}));return this.$options.modalController={resolve:e,reject:t},this.opened=!0,r},close(){this.$options.modalController.resolve(!0),this.opened=!1},onKeydown(e){"Escape"===e.key&&this.close()}}}),h=r(89);const p=(0,h.Z)(v,[["render",m]]);var _=p},2729:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(3396),i=r(7139),l=r(9167);const s=["checked","name","disabled"],o={key:0,for:"#checkbox-field",class:"checkbox-field__label"},d={id:"checkbox-field",class:"checkbox-field__box"},n={key:0,src:l,alt:"Checked"},c={key:0,class:"form-field__error"},u=(0,a.aZ)({emits:["change","update:modelValue"],data(){return{checked:this.$props.modelValue}},computed:{hasError(){return Boolean(this.$props.error)}},watch:{modelValue:{handler(e){this.checked="string"===typeof e?JSON.parse(e):e},immediate:!0}},methods:{check(){this.checked=!this.checked,this.$emit("change",this.checked),this.$emit("update:modelValue",this.checked)}}});var m=(0,a.aZ)({...u,__name:"CheckboxField",props:{name:null,label:null,defaultChecked:{type:Boolean},direction:{default:"right"},variant:{default:"primary"},size:{default:"md"},modelValue:{type:Boolean},disabled:null,error:null,justify:{default:"space-between"}},setup(e){return(t,r)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("input",{type:"checkbox",class:"checkbox-field__input",checked:e.modelValue||t.checked,name:e.name,disabled:e.disabled},null,8,s),(0,a._)("div",{class:(0,i.C_)(["checkbox-field",{"checkbox-field--checked":t.checked,"checkbox-field--disabled":e.disabled,[`checkbox-field--${e.direction}`]:!0,[`checkbox-field--${e.variant}`]:!0,[`checkbox-field--${e.size}`]:!0}]),style:(0,i.j5)({justifyContent:"space-between"===e.justify?"space-between":"flex-start"}),onClick:r[0]||(r[0]=(...e)=>t.check&&t.check(...e))},[Boolean(e.label)?((0,a.wg)(),(0,a.iD)("label",o,(0,i.zw)(e.label),1)):(0,a.kq)("",!0),(0,a._)("div",d,[t.checked?((0,a.wg)(),(0,a.iD)("img",n)):(0,a.kq)("",!0)])],6),t.hasError?((0,a.wg)(),(0,a.iD)("div",c,(0,i.zw)(e.error),1)):(0,a.kq)("",!0)],64))}});const v=m;var h=v},2619:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(3396),i=r(7139);const l=["type","placeholder","name","required","value","disabled"],s=(0,a.aZ)({emits:["update:modelValue","blur"],methods:{input(e){const t=e.target?.value;this.$emit("update:modelValue",t)}}});var o=(0,a.aZ)({...s,__name:"InputField",props:{name:null,type:null,placeholder:null,required:{type:Boolean},size:{default:"lg"},variant:{default:"default"},modelValue:null,disabled:null},setup(e){return(t,r)=>((0,a.wg)(),(0,a.iD)("input",{type:e.type,placeholder:e.placeholder,name:e.name,required:e.required,class:(0,i.C_)([`form-field__input--${e.size} form-field__input--${e.variant}`,"form-field__input"]),value:e.modelValue,disabled:e.disabled,onInput:r[0]||(r[0]=e=>t.input(e)),onBlur:r[1]||(r[1]=e=>t.$emit("blur"))},null,42,l))}});const d=o;var n=d},1461:function(e,t,r){r.r(t),r.d(t,{default:function(){return We}});var a=r(3396);const i={class:"driver-actions-container"},l={class:"drivers-list"};function s(e,t,r,s,o,d){const n=(0,a.up)("create-driver-button"),c=(0,a.up)("driver-filters"),u=(0,a.up)("driver-card"),m=(0,a.up)("app-layout");return(0,a.wg)(),(0,a.j4)(m,null,{appTitle:(0,a.w5)((()=>[(0,a.Uk)("Водії")])),appExtra:(0,a.w5)((()=>[(0,a._)("div",i,[(0,a.Wm)(n)])])),appContent:(0,a.w5)((()=>[(0,a.Wm)(c),(0,a._)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.driversForView,(e=>((0,a.wg)(),(0,a.j4)(u,{key:e.name,driver:e},null,8,["driver"])))),128))])])),_:1})}var o=r(5627),d=r(7139),n=r(4610);const c={class:"driver-form-container"},u={class:"modal-actions"};function m(e,t,r,i,l,s){const o=(0,a.up)("v-button"),d=(0,a.up)("transport-select-field"),n=(0,a.up)("v-form"),m=(0,a.up)("v-modal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(o,{hasMaxWidth:!1,onClick:e.open},{text:(0,a.w5)((()=>[(0,a.Uk)(" Змінити ТС ")])),_:1},8,["onClick"]),(0,a.Wm)(m,{ref:"modal","max-width":"50vw","min-width":"30vw","min-height":"50vh"},{title:(0,a.w5)((()=>[(0,a.Uk)("Змінити ТС ")])),content:(0,a.w5)((({close:t})=>[(0,a.Wm)(n,{"initial-values":{transport_number:""},onSubmit:r=>{e.submit(r,t)}},{fields:(0,a.w5)((({values:e})=>[(0,a._)("div",c,[(0,a.Wm)(d,{modelValue:e.transport_number,"onUpdate:modelValue":t=>e.transport_number=t},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("div",u,[(0,a.Wm)(o,{"has-max-width":!1,variant:"success",type:"submit"},{text:(0,a.w5)((()=>[(0,a.Uk)("Змінити")])),_:1})])])),_:2},1032,["onSubmit"])])),_:1},512)],64)}var v=r(6390),h=r(4856),p=r(585),_=r(1781),f=r(4677),b=r(7941),k=(0,a.aZ)({components:{VModal:v.Z,VForm:h.Z,VButton:n.Z,TransportSelectField:p.PO},setup(){const e=(0,f.pm)();return{toast:e}},mounted(){this.$store.dispatch(b.K.GET_TRANSPORTS)},methods:{open(){const e=this.$refs.modal;e.open()},submit(e,t){this.$store.dispatch(_.c.CHANGE_TRANSPORT,{payload:e,toast:this.toast}),t()}}}),w=r(89);const g=(0,w.Z)(k,[["render",m],["__scopeId","data-v-5265d388"]]);var x=g;const y={class:"driver-form-container"},W={class:"modal-actions"};function Z(e,t,r,i,l,s){const o=(0,a.up)("v-button"),d=(0,a.up)("route-select-field"),n=(0,a.up)("v-form"),c=(0,a.up)("v-modal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(o,{hasMaxWidth:!1,onClick:e.open},{text:(0,a.w5)((()=>[(0,a.Uk)(" Змінити маршрут ")])),_:1},8,["onClick"]),(0,a.Wm)(c,{ref:"modal","max-width":"50vw","min-width":"30vw","min-height":"50vh"},{title:(0,a.w5)((()=>[(0,a.Uk)("Змінити маршрут ")])),content:(0,a.w5)((({close:t})=>[(0,a.Wm)(n,{"initial-values":{route:""},onSubmit:r=>{e.submit(r,t)}},{fields:(0,a.w5)((({values:e})=>[(0,a._)("div",y,[(0,a.Wm)(d,{modelValue:e.route,"onUpdate:modelValue":t=>e.route=t},null,8,["modelValue","onUpdate:modelValue"])]),(0,a._)("div",W,[(0,a.Wm)(o,{"has-max-width":!1,variant:"success",type:"submit"},{text:(0,a.w5)((()=>[(0,a.Uk)("Змінити")])),_:1})])])),_:2},1032,["onSubmit"])])),_:1},512)],64)}var V=r(2028),C=r(5837),$=(0,a.aZ)({components:{VModal:v.Z,VForm:h.Z,VButton:n.Z,RouteSelectField:V.pV},setup(){const e=(0,f.pm)();return{toast:e}},mounted(){this.$store.dispatch(C.V.GET_ROUTES)},methods:{open(){const e=this.$refs.modal;e.open()},submit(e,t){this.$store.dispatch(_.c.CHANGE_ROUTE,{payload:e,toast:this.toast}),t()}}});const U=(0,w.Z)($,[["render",Z],["__scopeId","data-v-52848f3c"]]);var D=U;const S={class:"driver-card"},F={class:"driver-card__header"},z={class:"driver-card__username"},B={class:"driver-card__info"},E={class:"driver-card__item"},R=(0,a._)("h5",{class:"driver-card__label"},"Телефон",-1),j=["href"],H={class:"driver-card__item"},T=(0,a._)("h5",{class:"driver-card__label"},"Табельний номер",-1),I={class:"driver-card__item"},q=(0,a._)("h5",{class:"driver-card__label"},"Маршрут",-1),N={class:"driver-card__item"},M=(0,a._)("h5",{class:"driver-card__label"},"№ ТС",-1),O={class:"driver-card__item"},A=(0,a._)("h5",{class:"driver-card__label"},"Час відкриття зміни",-1),G={class:"driver-card__item"},K=(0,a._)("h5",{class:"driver-card__label"},"Виторг",-1),P={key:0,class:"driver-card__item"},Y=(0,a._)("h5",{class:"driver-card__label"},"Додаткова інформація",-1),L={class:"driver-card__item"},J=(0,a._)("h5",{class:"driver-card__label"},"Швидкий зв'язок",-1),Q={class:"driver-card__actions"},X=(0,a.aZ)({components:{VButton:n.Z,ChangeDriverTransport:x,ChangeDriverRoute:D}});var ee=(0,a.aZ)({...X,__name:"DriverCard",props:{driver:null},setup(e){return(t,r)=>((0,a.wg)(),(0,a.iD)("div",S,[(0,a._)("div",F,[(0,a._)("h4",z,(0,d.zw)(e.driver.name),1)]),(0,a._)("div",B,[(0,a._)("div",E,[R,(0,a._)("a",{href:`tel:${e.driver.phone}`},(0,d.zw)(e.driver.phone),9,j)]),(0,a._)("div",H,[T,(0,a.Uk)(" "+(0,d.zw)(e.driver.tabulation_number),1)]),(0,a._)("div",I,[q,(0,a.Uk)(" "+(0,d.zw)(e.driver.route),1)]),(0,a._)("div",N,[M,(0,a.Uk)(" "+(0,d.zw)(e.driver.transport_number),1)]),(0,a._)("div",O,[A,(0,a.Uk)(" "+(0,d.zw)(e.driver.session_open_time),1)]),(0,a._)("div",G,[K,(0,a.Uk)(" "+(0,d.zw)(e.driver.money),1)]),e.driver.add_data?((0,a.wg)(),(0,a.iD)("div",P,[Y,(0,a.Uk)(" "+(0,d.zw)(e.driver.add_data),1)])):(0,a.kq)("",!0),(0,a._)("div",L,[J,(0,a.Uk)(" "+(0,d.zw)(e.driver.call_message),1)])]),(0,a._)("div",Q,[(0,a.Wm)(n.Z,{hasMaxWidth:!1},{text:(0,a.w5)((()=>[(0,a.Uk)(" Закрити зміну ")])),_:1}),(0,a.Wm)(x),(0,a.Wm)(D)])]))}});const te=ee;var re=te;function ae(e,t,r,i,l,s){const o=(0,a.up)("v-button"),d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.j4)(d,{to:{name:"createDriver"},class:"driver-create-btn"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{hasMaxWidth:!0},{text:(0,a.w5)((()=>[(0,a.Uk)("Додати водія")])),_:1})])),_:1})}var ie=r(5577),le=(0,a.aZ)({components:{VButton:n.Z},setup(){return{Rules:ie.i}}});const se=(0,w.Z)(le,[["render",ae],["__scopeId","data-v-04371272"]]);var oe=se;const de={class:"driver-filters"},ne={class:"filter-item"},ce={class:"filter-item"},ue={class:"filter-item"},me={class:"filter-item"},ve={class:"filter-item filter-checkbox-item"};function he(e,t,r,i,l,s){const o=(0,a.up)("input-field"),d=(0,a.up)("form-field"),n=(0,a.up)("routes-select-field"),c=(0,a.up)("checkbox-field");return(0,a.wg)(),(0,a.iD)("div",de,[(0,a._)("div",ne,[(0,a.Wm)(d,{label:"Пошук за ФІО"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{placeholder:"Пошук за ФІО"})])),_:1})]),(0,a._)("div",ce,[(0,a.Wm)(d,{label:"Пошук за Табельним номером"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{placeholder:"Пошук за Табельним номером"})])),_:1})]),(0,a._)("div",ue,[(0,a.Wm)(d,{label:"Пошук за ТС"},{default:(0,a.w5)((()=>[(0,a.Wm)(o,{placeholder:"Пошук за ТС"})])),_:1})]),(0,a._)("div",me,[(0,a.Wm)(n)]),(0,a._)("div",ve,[(0,a.Wm)(c,{label:"Зараз на рейсах"})])])}var pe=r(4560),_e=r(2619),fe=r(2247),be=r(2729),ke=(0,a.aZ)({components:{CheckboxField:be.Z,FormField:pe.Z,InputField:_e.Z,RoutesSelectField:fe.Z}});const we=(0,w.Z)(ke,[["render",he],["__scopeId","data-v-ef1c6cd8"]]);var ge=we,xe=(0,a.aZ)({components:{AppLayout:o.Z,DriverCard:re,CreateDriverButton:oe,DriverFilters:ge},data(){return{query:""}},computed:{loading(){return this.$store.state.drivers.loading},driversForView(){return this.$store.state.drivers.driversForView},hasDrivers(){return this.$store.state.drivers.driversForView&&this.$store.state.drivers.driversForView.length>0}},mounted(){this.$store.dispatch(_.c.GET_DRIVERS)}});const ye=(0,w.Z)(xe,[["render",s]]);var We=ye},9167:function(e,t,r){e.exports=r.p+"img/check-icon.972bc3c4.svg"}}]);
//# sourceMappingURL=920.ba9bad0f.js.map