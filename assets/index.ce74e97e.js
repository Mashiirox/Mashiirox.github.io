import{r as o,j as e,a as t}from"./index.bf220dd3.js";function d({onChange:c}){const[s,l]=o.exports.useState(72),[a,i]=o.exports.useState("#ff9900"),[r,p]=o.exports.useState("#ffffff"),[h,u]=o.exports.useState("#000000");return o.exports.useEffect(()=>{c({fontSize:s,hubBackgroundColor:a,pornTextColor:r,hubTextColor:h})},[s,a,r,h]),e("div",{className:"flex justify-center items-center",children:t("div",{className:"ph-setting",children:[t("div",{className:"ph-setting-content",children:[e("input",{type:"range",min:"30",max:"180",value:s,onChange:n=>l(parseInt(n.target.value))}),t("span",{className:"ml-2",children:[s,"\xA0px"]})]}),t("div",{className:"ph-setting-content",children:[e("span",{className:"mr-2",children:"suffix background"}),e("input",{type:"color",value:a,onChange:n=>i(n.target.value)})]}),t("div",{className:"ph-setting-content",children:[e("span",{className:"mr-2",children:"prefix text color"}),e("input",{type:"color",value:r,onChange:n=>p(n.target.value)})]}),t("div",{className:"ph-setting-content",children:[e("span",{className:"mr-2",children:"suffix text color"}),e("input",{type:"color",value:h,onChange:n=>u(n.target.value)})]})]})})}function g(){const[c,s]=o.exports.useState({fontSize:72,hubBackgroundColor:"#ff9900",pornTextColor:"#ffffff",hubTextColor:"#000000"}),{fontSize:l,hubBackgroundColor:a,pornTextColor:i,hubTextColor:r}=c;return t("div",{className:"ph-page",children:[t("div",{className:"w-full pt-10 flex justify-center mb-24",children:[e("span",{className:"ph-logo bg-black text-white",children:"Make"}),e("span",{className:"ph-logo ph-logo-logo text-black",children:"Logo"})]}),e("div",{className:"ph-preview",children:e("div",{className:"ph-preview-box",children:t("div",{className:"ph-view",id:"preview",children:[e("span",{contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,className:"ph-preview-content ph-preview-porn",style:{fontSize:l,color:i},children:"edit\xA0"}),e("span",{contentEditable:!0,suppressContentEditableWarning:!0,spellCheck:!1,className:"ph-preview-content ph-preview-hub",style:{fontSize:l,color:r,backgroundColor:a},children:"this"})]})})}),e(d,{onChange:p=>s(p)})]})}export{g as default};
