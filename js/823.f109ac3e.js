"use strict";(self["webpackChunkjust_sell"]=self["webpackChunkjust_sell"]||[]).push([[823],{2354:function(e,t,a){a.d(t,{m:function(){return n}});const n=e=>{const t=document.createElement("textarea");return t.innerHTML=e,t.value}},2729:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(3396),l=a(7139),s=a(9167);const i=["checked","name","disabled"],d={key:0,for:"#checkbox-field",class:"checkbox-field__label"},o={id:"checkbox-field",class:"checkbox-field__box"},r={key:0,src:s,alt:"Checked"},m={key:0,class:"form-field__error"},c=(0,n.aZ)({emits:["change","update:modelValue"],data(){return{checked:this.$props.modelValue}},computed:{hasError(){return Boolean(this.$props.error)}},watch:{modelValue:{handler(e){this.checked="string"===typeof e?JSON.parse(e):e},immediate:!0}},methods:{check(){this.checked=!this.checked,this.$emit("change",this.checked),this.$emit("update:modelValue",this.checked)}}});var u=(0,n.aZ)({...c,__name:"CheckboxField",props:{name:null,label:null,defaultChecked:{type:Boolean},direction:{default:"right"},variant:{default:"primary"},size:{default:"md"},modelValue:{type:Boolean},disabled:null,error:null,justify:{default:"space-between"}},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("input",{type:"checkbox",class:"checkbox-field__input",checked:e.modelValue||t.checked,name:e.name,disabled:e.disabled},null,8,i),(0,n._)("div",{class:(0,l.C_)(["checkbox-field",{"checkbox-field--checked":t.checked,"checkbox-field--disabled":e.disabled,[`checkbox-field--${e.direction}`]:!0,[`checkbox-field--${e.variant}`]:!0,[`checkbox-field--${e.size}`]:!0}]),style:(0,l.j5)({justifyContent:"space-between"===e.justify?"space-between":"flex-start"}),onClick:a[0]||(a[0]=(...e)=>t.check&&t.check(...e))},[Boolean(e.label)?((0,n.wg)(),(0,n.iD)("label",d,(0,l.zw)(e.label),1)):(0,n.kq)("",!0),(0,n._)("div",o,[t.checked?((0,n.wg)(),(0,n.iD)("img",r)):(0,n.kq)("",!0)])],6),t.hasError?((0,n.wg)(),(0,n.iD)("div",m,(0,l.zw)(e.error),1)):(0,n.kq)("",!0)],64))}});const h=u;var p=h},2619:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(3396),l=a(7139);const s=["type","placeholder","name","required","value","disabled"],i=(0,n.aZ)({emits:["update:modelValue","blur"],methods:{input(e){const t=e.target?.value;this.$emit("update:modelValue",t)}}});var d=(0,n.aZ)({...i,__name:"InputField",props:{name:null,type:null,placeholder:null,required:{type:Boolean},size:{default:"lg"},variant:{default:"default"},modelValue:null,disabled:null},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("input",{type:e.type,placeholder:e.placeholder,name:e.name,required:e.required,class:(0,l.C_)([`form-field__input--${e.size} form-field__input--${e.variant}`,"form-field__input"]),value:e.modelValue,disabled:e.disabled,onInput:a[0]||(a[0]=e=>t.input(e)),onBlur:a[1]||(a[1]=e=>t.$emit("blur"))},null,42,s))}});const o=d;var r=o},6686:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(3396),l=a(7139);const s=["placeholder","name","required","value","disabled","maxlength"],i=(0,n.aZ)({emits:["update:modelValue","update:selection"],inject:["rules"],data(){return{canEdit:!1}},mounted(){this.canEdit=Boolean(null!==this.rules),document.addEventListener("selectionchange",this.onSelectionChange)},methods:{input(e){const t=e.target?.value;this.$emit("update:modelValue",t)},onTabPressed(e){const t=this.$refs.textarea;let a=e.target.value;if("Tab"==e.key){e.preventDefault();const n=t.selectionStart,l=t.selectionEnd;e.target.value=a.substring(0,n)+"\t"+a.substring(l),t.selectionStart=t.selectionEnd=n+1,this.$emit("update:modelValue",a)}},onSelectionChange(){const e=document.activeElement,t=this.$refs.textarea;if(e&&e===t){const t={start:e.selectionStart,end:e.selectionEnd};this.$emit("update:selection",t)}}}});var d=(0,n.aZ)({...i,__name:"TextareaField",props:{name:null,placeholder:null,required:{type:Boolean},size:{default:"lg"},variant:{default:"default"},modelValue:null,disabled:null,maxLength:null},setup(e){return(t,a)=>((0,n.wg)(),(0,n.iD)("textarea",{ref:"textarea",placeholder:e.placeholder,name:e.name,required:e.required,class:(0,l.C_)(["form-field__input form-field__textarea",`form-field__input--${e.size} form-field__input--${e.variant}`]),value:e.modelValue,disabled:void 0!==e.disabled?e.disabled:!t.canEdit,onInput:a[0]||(a[0]=e=>t.input(e)),onKeydown:a[1]||(a[1]=(...e)=>t.onTabPressed&&t.onTabPressed(...e)),maxlength:e.maxLength},null,42,s))}});const o=d;var r=o},913:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3396),l=a(7139);const s={class:"hint-more"},i=(0,n._)("div",{class:"hint-more__title"}," Натисніть на потрібний елемент, щоб додати до шаблону ",-1),d=["onClick"];function o(e,t,a,o,r,m){const c=(0,n.up)("textarea-field"),u=(0,n.up)("form-field");return(0,n.wg)(),(0,n.j4)(u,{label:e.label||"Шаблон тіла запиту",error:e.error},{hint:(0,n.w5)((()=>[(0,n._)("div",s,[i,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.hint,(({name:t,message:a})=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:(0,l.C_)(["hint-more__item",{"hint-more__item--selected":e.payload.includes(t)}]),onClick:a=>e.addTemplateElement(t)},[(0,n._)("span",null,(0,l.zw)(t)+" "+(0,l.zw)(a),1)],10,d)))),128)),(0,n._)("div",{class:"hint-more-btn",onClick:t[0]||(t[0]=t=>e.hintOpened=!e.hintOpened)},(0,l.zw)(e.hintOpened?"Показати меньше":"Показати більше"),1)])])),default:(0,n.w5)((()=>[(0,n.Wm)(c,{ref:"textarea","model-value":e.modelValue,"onUpdate:modelValue":e.input,"onUpdate:selection":e.changeSelection,name:"payload",placeholder:"Наприклад, \n  {\n    'status': ${status_code},\n    'error_msg':'${error_msg}',\n  }"},null,8,["model-value","onUpdate:modelValue","onUpdate:selection"])])),_:1},8,["label","error"])}var r=a(4560),m=a(6686),c=a(2354),u=(0,n.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],data(){return{payload:"",hintOpened:!1,selectionStart:0,selectionEnd:0,hintMessages:[{name:"${transaction_id}",message:" - ідентифікатор платежу"},{name:"${pay_time}",message:" – час платежу"},{name:"${get_time}",message:" - час отримання"},{name:"${device_id}",message:" – ідентифікатор пристрою"},{name:"${pay_inst}",message:" - идентификатор платежа"},{name:"${pay_mask}",message:" – маска платежу"},{name:"${end_pay_time}",message:" - час закінчення платежу"},{name:"${transaction_type}",message:" – тип транзакції"},{name:"${amount}",message:" – кількість"},{name:"${ticket_num}",message:" – номер квитка"},{name:"${sign}",message:" – підпис"},{name:"${pan_mask}",message:"- маскований номер карти"},{name:"${code}",message:" - код результату транзакції"},{name:"${msg}",message:" - повідомлення коду помилки"},{name:"${rrn}",message:" - інтифікатор в системах МПС"},{name:"${is_test}",message:" - тип транзакції, тестова чи продова"}]}},mounted(){this.modelValue&&(this.payload=this.modelValue)},computed:{hint(){return this.hintOpened?this.hintMessages:this.hintMessages.slice(0,3)}},watch:{payload(e){const t=(0,c.m)(e);this.payload=(0,c.m)(e),this.$emit("update:modelValue",t)}},methods:{input(e){this.payload=e},addTemplateElement(e){this.payload.includes(e)?this.payload=this.payload.replace(e,""):(this.payload.substring(this.selectionEnd,this.payload.length),this.payload=this.payload.substring(0,this.selectionStart)+e+this.payload.substring(this.selectionEnd,this.payload.length)),this.$emit("update:modelValue",this.payload)},changeSelection(e){this.selectionStart=e.start,this.selectionEnd=e.end}},components:{FormField:r.Z,TextareaField:m.Z}}),h=a(89);const p=(0,h.Z)(u,[["render",o]]);var g=p},1225:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(3396),l=a(7139);const s={class:"hint-more"},i=(0,n._)("div",{class:"hint-more__title"}," Натисніть на потрібний елемент, щоб додати до шаблону ",-1),d=["onClick"];function o(e,t,a,o,r,m){const c=(0,n.up)("textarea-field"),u=(0,n.up)("form-field");return(0,n.wg)(),(0,n.j4)(u,{label:e.label||"Структура підпису (SHA256WithRSA)",error:e.error},{hint:(0,n.w5)((()=>[(0,n._)("div",s,[i,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.hint,(({name:t,message:a})=>((0,n.wg)(),(0,n.iD)("div",{key:t,class:(0,l.C_)(["hint-more__item",{"hint-more__item--selected":e.payload.includes(t)}]),onClick:a=>e.addTemplateElement(t)},[(0,n._)("span",null,(0,l.zw)(t)+" "+(0,l.zw)(a),1)],10,d)))),128)),(0,n._)("div",{class:"hint-more-btn",onClick:t[0]||(t[0]=t=>e.hintOpened=!e.hintOpened)},(0,l.zw)(e.hintOpened?"Показати меньше":"Показати більше"),1)])])),default:(0,n.w5)((()=>[(0,n.Wm)(c,{"model-value":e.modelValue,"onUpdate:modelValue":e.input,"onUpdate:selection":e.changeSelection,name:"sign_stract",placeholder:"Наприклад, ${transaction_id}${pay_time}${get_time}"},null,8,["model-value","onUpdate:modelValue","onUpdate:selection"])])),_:1},8,["label","error"])}var r=a(4560),m=a(6686),c=a(2354),u=(0,n.aZ)({props:{modelValue:String,label:String,error:String},emits:["update:modelValue"],data(){return{payload:"",hintOpened:!1,selectionStart:0,selectionEnd:0,hintMessages:[{name:"${transaction_id}",message:" - ідентифікатор платежу"},{name:"${pay_time}",message:" – час платежу"},{name:"${get_time}",message:" - час отримання"},{name:"${device_id}",message:" – ідентифікатор пристрою"},{name:"${pay_inst}",message:" - идентификатор платежа"},{name:"${pay_mask}",message:" – маска платежу"},{name:"${end_pay_time}",message:" - час закінчення платежу"},{name:"${transaction_type}",message:" – тип транзакції"},{name:"${amount}",message:" – кількість"},{name:"${ticket_num}",message:" – номер квитка"},{name:"${pan_mask}",message:"- маскований номер карти"},{name:"${code}",message:" - код результату транзакції"},{name:"${msg}",message:" - повідомлення коду помилки"},{name:"${rrn}",message:" - інтифікатор в системах МПС"},{name:"${is_test}",message:" - тип транзакції, тестова чи продова"}]}},mounted(){this.modelValue&&(this.payload=this.modelValue)},computed:{hint(){return this.hintOpened?this.hintMessages:this.hintMessages.slice(0,3)}},watch:{payload(e){const t=(0,c.m)(e);this.payload=(0,c.m)(e),this.$emit("update:modelValue",t)}},methods:{input(e){this.payload=e},addTemplateElement(e){this.payload.includes(e)?this.payload=this.payload.replace(e,""):(this.payload.substring(this.selectionEnd,this.payload.length),this.payload=this.payload.substring(0,this.selectionStart)+e+this.payload.substring(this.selectionEnd,this.payload.length)),this.$emit("update:modelValue",this.payload)},changeSelection(e){this.selectionStart=e.start,this.selectionEnd=e.end}},components:{FormField:r.Z,TextareaField:m.Z}}),h=a(89);const p=(0,h.Z)(u,[["render",o]]);var g=p},9167:function(e,t,a){e.exports=a.p+"img/check-icon.972bc3c4.svg"}}]);
//# sourceMappingURL=823.f109ac3e.js.map