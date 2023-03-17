import{r as b,j as t,s as e,b as g}from"./index-d351707d.js";const I=r=>{const[i,o]=b.useState(""),{disabled:l=!1,type:a,tabIndex:p=0,placeholder:n,label:x,name:c,error:u,required:f}=r,[d,w]=b.useState(a||"text"),y=s=>{o(s.currentTarget.value)},h=()=>{w(s=>s==="password"?"text":"password")},_=s=>{s.code==="Enter"&&(s.preventDefault(),h())},m=a==="password";return t.jsxs("div",{className:`${e.inputWrapper}${m?` ${e.inputWrapperPassword}`:""}${m&&d==="text"?` ${e.inputWrapperPasswordShown}`:""}${u?` ${e.inputWrapperInvalid}`:""}`,children:[t.jsx("input",{required:f,value:i,onChange:y,className:e.input,name:c,tabIndex:p,type:d,"aria-label":x,disabled:l}),t.jsx("label",{className:e.inputLabel,htmlFor:c,children:x||n}),f&&t.jsx("span",{title:`${c} is required`,className:e.inputRequired,children:"*"}),m&&t.jsx("button",{"aria-label":"Show-Hide password button",type:"button",tabIndex:0,onKeyDown:_,onClick:h,className:`${e.passwordButton} ${d==="password"?e.hidePassword:e.showPassword}`}),!!u&&t.jsx("span",{className:e.inputError,children:u})]})},j=()=>t.jsxs("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30",xmlSpace:"preserve",children:[t.jsx("rect",{x:"0",y:"0",width:"4",height:"10",fill:"#fff",children:t.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0",dur:"0.6s",repeatCount:"indefinite"})}),t.jsx("rect",{x:"10",y:"0",width:"4",height:"10",fill:"#fff",children:t.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.2s",dur:"0.6s",repeatCount:"indefinite"})}),t.jsx("rect",{x:"20",y:"0",width:"4",height:"10",fill:"#fff",children:t.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"translate",values:"0 0; 0 20; 0 0",begin:"0.4s",dur:"0.6s",repeatCount:"indefinite"})})]}),W=r=>{const{isLoading:i,children:o,disabled:l,type:a,ariaLabel:p,className:n}=r;return t.jsx("button",{className:`${g.button}${n?` ${n}`:""}`,disabled:l,type:a,tabIndex:0,"aria-label":p||"Button",children:i?t.jsx(j,{}):o})},$="_container_10sme_1",v="_formWrapper_10sme_7",T="_formTitle_10sme_13",N="_form_10sme_7",B="_formSubmitButton_10sme_25",C="_actions_10sme_30",L="_actionLink_10sme_37",k={container:$,formWrapper:v,formTitle:T,form:N,formSubmitButton:B,actions:C,actionLink:L};export{W as B,I,k as s};
