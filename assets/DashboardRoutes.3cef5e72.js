import{r as m,a as l,F as g,j as e,$ as f,ap as B,aq as x,ar as P,R as k,c as p}from"./index.faf86fd4.js";import{d as y,e as z,E as M,s as O,f as q,g as c,M as $,a as D,u as C,h as U,i as R,j as n,k as V,p as T,l as w,D as _,m as F,L as I,R as L,B as H,n as j,V as K,C as W,o as G}from"./Nosotros.f6e82633.js";function J(){const o=y();return l(g,{children:[l("div",{className:"mb-3",children:[e("label",{htmlFor:"formFile",className:"form-label",children:"Imagen"}),e("input",{className:"form-control",id:"formFile",type:"file",name:"file",accept:"video/*",onChange:d=>{var a;if(((a=d.target.files)==null?void 0:a.length)!==void 0){const r=d.target.files[0];r&&(f.fire({title:"Cargando..",text:"Por favor no cierre hasta que termine de cargar...",allowOutsideClick:!1}),console.log(r),O(r).then(h=>{o.setFieldValue("url",h),f.close(),f.fire({title:":D",allowOutsideClick:!1,text:"Su video fue guardado correctamente",html:`<iframe width="560" height="315" src="${h}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,imageWidth:400,imageHeight:200,imageAlt:"Custom image"})},h=>{console.log(h)}))}}})]}),e(z,{name:"url",id:"url",type:"hidden"}),e(M,{name:"url",component:"span"})]})}var Q=m.exports.memo(J);function X({currentNosotros:o}){const i=y(),d=a=>{i.setFieldValue("id",a.id),i.setFieldValue("url",a.url),i.setFieldValue("name",a.name),i.setFieldValue("descripcion",a.descripcion),i.setFieldValue("estado",a.estado),i.setFieldValue("municipio",a.municipio),i.setFieldValue("phone",a.phone),i.setFieldValue("domicilio",a.domicilio),i.setFieldValue("face",a.face),i.setFieldValue("whatsapp",a.whatsapp),i.setFieldValue("correo",a.correo)};return m.exports.useEffect(()=>{d(o)},[o]),l(g,{children:[e(q,{title:"Nosotros",main:!0,children:e("button",{className:"btn btn-primary",type:"button",children:"Agregar nuevo usuario"})}),l("div",{className:"row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn notes__image",children:[l("div",{className:"col-md-6",children:[e(c,{label:"Nombre de empresa",name:"name",id:"name",type:"text",placeholder:"Nombre de empresa"}),e(Q,{}),e(c,{label:"Phone",name:"phone",id:"phone",type:"text",placeholder:"Phone"}),e(c,{label:"whatsapp",name:"whatsapp",id:"whatsapp",type:"text",placeholder:"whatsapp"})]})," ",o.url!=""?e($,{material:o,children:()=>e(D,{className:"custom-image",style:{boxShadow:"10px 10px 10px rgba(0,0,0,0.2)"}})},o.id):e(g,{children:"NoImage"})," "]}),e("div",{className:"col-12",children:e(c,{label:"Descripcion",name:"descripcion",id:"descripcion",type:"text",placeholder:"Descripcion"})}),e("div",{className:"col-12",children:e(c,{label:"Domicilio",name:"domicilio",id:"domicilio",type:"text",placeholder:"Domicilio"})}),e("div",{className:"col-md-6",children:e(c,{label:"Municipio",name:"municipio",id:"municipio",type:"text",placeholder:"Municipio"})}),e("div",{className:"col-md-6",children:e(c,{label:"Estado",name:"estado",id:"estado",type:"text",placeholder:"Estado"})}),e("div",{className:"col-md-12",children:e(c,{label:"face",name:"face",id:"face",type:"text",placeholder:"face"})}),e("div",{className:"col-md-12",children:e(c,{label:"correo",name:"correo",id:"correo",type:"text",placeholder:"correo"})})]})}var Y=m.exports.memo(X);function Z(){const{currentNosotros:o,setCurrentNosotros:i}=C(),d=a=>{console.log(a),B.update(a).then(r=>{i({id:r.data.name||0,name:r.data.name||"",descripcion:r.data.descripcion||"",url:r.data.url||"",domicilio:r.data.domicilio||"",estado:r.data.estado||"",municipio:r.data.municipio||"",phone:r.data.phone||"",whatsapp:r.data.whatsapp||"",face:r.data.face||"",correo:r.data.correo||""}),f.fire({title:"Actualizado",text:"Datos actualizados con \xE9xito",icon:"success",confirmButtonText:"OK"})}).catch(r=>{alert("Ocurrio un error actualizando"),console.log(r)})};return e("div",{className:"submit-form",children:o?e("div",{children:e(U,{initialValues:{id:0,name:"",domicilio:"",url:"",estado:"",municipio:"",phone:"",descripcion:"",face:"",whatsapp:"",correo:""},onSubmit:a=>{console.log(a),d(a)},validationSchema:R({name:n().required("Requerido"),url:n().required("Requerido"),domicilio:n().required("Requerido"),phone:n().required("Requerido"),municipio:n().required("Requerido"),estado:n().required("Requerido"),descripcion:n().required("Requerido"),whatsapp:n().required("Requerido"),face:n().required("Requerido"),correo:n().email("El correo no tiene un formato v\xE1lido").required("Requerido")}),children:a=>l(V,{children:[e("div",{className:"row g-3",children:e(Y,{currentNosotros:o})}),e("div",{className:"col-12",children:e("button",{type:"submit",className:"float-end btn btn-primary",children:"Actualizar"})})]})})}):e("div",{children:e("h4",{children:"Por favor selecciona un registro"})})})}var ee=m.exports.memo(Z);function ae({currentUser:o}){const i=y(),d=a=>{i.setFieldValue("id",a.id),i.setFieldValue("name",a.name),i.setFieldValue("username",a.username),i.setFieldValue("password",a.password)};return m.exports.useEffect(()=>{d(o)},[o]),l(g,{children:[e("div",{className:"form-group mb-3 ",children:e(c,{label:"Nombre",name:"name",id:"name",type:"text",placeholder:"Nombre"})}),e("div",{className:"form-group mb-3",children:e(c,{label:"Usuario",name:"username",id:"username",type:"text",placeholder:"Usuario"})}),e("div",{className:"form-group mb-3",children:e(c,{label:"Password",name:"password",id:"password",type:"password",placeholder:"Password"})})]})}var ie=m.exports.memo(ae);E.propTypes={id:T.exports.number.isRequired};function E({id:o}){const i={id:0,name:"",username:"",password:""},[d,a]=m.exports.useState(i),r=u=>{x.getById(u).then(s=>{a({id:s.data.id||0,name:s.data.name||"",username:s.data.username||"",password:s.data.password||""})}).catch(s=>{alert("Ocurrio un error"),console.log(s)})};m.exports.useEffect(()=>{r(o)},[o]);const h=u=>{x.update(d.id,u).then(s=>{f.fire({title:"Actualizado",text:"El Usuario fue actualizado con \xE9xito",icon:"success",confirmButtonText:"OK"}),console.log(s.data)}).catch(s=>{alert("Ocurrio un error actualizando el Usuario"),console.log(s)})};return e("div",{className:"submit-form",children:d?e("div",{children:e(U,{initialValues:{id:0,name:"",username:"",password:""},onSubmit:u=>{console.log(u),h(u)},validationSchema:R({username:n().required("Requerido"),name:n().required("Requerido"),password:n().required("Requerido")}),children:u=>l(V,{children:[e("div",{className:"modal-body",children:e(ie,{currentUser:d})}),e("div",{className:"modal-footer",children:e("button",{type:"submit",className:"btn btn-primary",children:"Actualizar"})})]})})}):e("div",{children:e("h4",{children:"Por favor selecciona un registro"})})})}var re=m.exports.memo(E);function oe(){const o=[{field:"id",headerName:"#",width:70},{field:"name",headerName:"Nombre",width:300},{field:"username",headerName:"Usuario",width:300},{field:"created_at",headerName:"Fecha de creacion",width:200,renderCell:t=>l("p",{children:[" ",F(`${t.row.created_at}`).subtract(10,"days").calendar()," "]})},{field:"updated_at",headerName:"Ultima actualizacion",width:200,renderCell:t=>l("p",{children:[" ",F(`${t.row.updated_at}`).subtract(10,"days").calendar()," "]})},{field:"Acciones",headerName:"Acciones",width:130,renderCell:t=>l(g,{children:[e("i",{style:{color:"green"},className:"fa-solid fa-pen-to-square",onClick:()=>v(t.row.id),onKeyPress:()=>v(t.row.id),role:"button",tabIndex:0}),e("i",{className:"fa-solid fa-trash-can",style:{color:"red"},onClick:()=>A(t.row.id),onKeyPress:()=>v(t.row.id),role:"button",tabIndex:0})]})}],{user:i,setUser:d}=C(),[a,r]=m.exports.useState(null),[h,u]=m.exports.useState(!1),s=()=>{x.getAll().then(t=>{d(t.data),console.log(t.data)}).catch(t=>{alert("Ocurrio un error"),console.log(t)})},v=t=>{x.getById(t).then(b=>{r(b.data)}).catch(b=>{alert("Ocurrio un error"),console.log(b)}),u(!0)},S=()=>{s(),u(!1)},A=t=>{f.fire({title:"\xBF Est\xE1s seguro ?",text:"No podr\xE1s revertir los cambios",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:"Cancelar",confirmButtonText:"S\xED, eliminarlo"}).then(b=>{b.isConfirmed&&(f.fire("\xA1Eliminado!","El usuario ha sido eliminado correctamente.","success"),x.remove(t).then(N=>{s()}).catch(N=>{alert("Ocurrio un error al tratar de eliminar el Usuario"),console.log(N)}))})};return l(g,{children:[e(q,{title:"Usuarios",main:!0,children:e("button",{className:"btn btn-primary",type:"button",children:"Agregar nuevo usuario"})}),l(w,{size:"lg",show:h,onHide:()=>S(),"aria-labelledby":"example-modal-sizes-title-lg",children:[e(w.Header,{closeButton:!0,children:e(w.Title,{id:"example-modal-sizes-title-lg",children:"Editar Usuario"})}),e(w.Body,{children:e(re,{id:a?a.id:0})})]}),e("div",{style:{height:500,width:"100%"},children:e(_,{rows:i,columns:o,pageSize:10,rowsPerPageOptions:[5]})})]})}var te=m.exports.memo(oe);function se(){return l(I,{maxWidth:"sm",children:[e(P,{}),e("div",{className:"container py-5",children:e("div",{className:"row",children:l(k,{children:[e(p,{path:"nosotros",element:e(ee,{})}),e(p,{path:"registrar",element:e(L,{})}),e(p,{path:"anuncios",element:e(H,{})}),e(p,{path:"bolsa",element:e(j,{})}),e(p,{path:"usuarios",element:e(te,{})}),e(p,{path:"videos",element:e(K,{})}),e(p,{path:"materiales",element:e(W,{})}),e(p,{path:"categorias",element:e(G,{})})]})})})]})}export{se as DashboardRoutes,se as default};
