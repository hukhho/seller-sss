import{r as l,b,aK as y,a as e,j as s,B as N,aL as w,F as S,p as v}from"./index-57d11ccb.js";import{u as f}from"./index.esm-47ffbe71.js";import{S as h,L as k}from"./login-layout-0d691b0a.js";import{b as x}from"./api-606c1433.js";import{C as E}from"./index-46b0135f.js";import{S as C}from"./index-7c35a557.js";const L=({toResetPassword:a})=>{const[r,n]=l.useState(!1),{register:i,handleSubmit:o,reset:d}=f(),u=b(),c=y();return l.useEffect(()=>{(async()=>{try{const t=await x.auth.batch();console.log("check in useEffect",t)}catch{console.log("error")}})()},[]),e("form",{onSubmit:o(m=>{try{const t=x.auth.batch();console.log("check",t)}catch{console.log("error")}c.mutate(m,{onSuccess:()=>{u("/a/orders")},onError:()=>{n(!0),d()}})}),children:s("div",{className:"flex flex-col items-center",children:[e("span",{className:"inter-2xlarge-semibold mt-4 text-grey-90",children:"Trang bán giày"}),e("span",{className:"inter-base-regular text-grey-50 mt-2",children:"👋🏼"}),e("span",{className:"inter-base-regular text-grey-50 mb-xlarge",children:"Đăng nhập vào tài khoản"}),e(h,{placeholder:"Email...",...i("email",{required:!0}),autoComplete:"email"}),e(h,{placeholder:"Password...",type:"password",...i("password",{required:!0}),autoComplete:"current-password"}),r&&e("span",{className:"text-rose-50 w-full mt-2 inter-small-regular",children:"These credentials do not match our records"}),e(N,{className:"rounded-rounded mt-4 w-[320px] inter-base-regular",variant:"primary",size:"large",type:"submit",loading:c.isLoading,children:"Đăng nhập"}),e("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:a,children:"Quên mật khẩu?"})]})})},j=/^\S+@\S+$/i,I=({goBack:a})=>{const[r,n]=l.useState(!1),[i,o]=l.useState(!1),[d,u]=l.useState(!1),{register:c,handleSubmit:g}=f(),m=w();return e("form",{onSubmit:g(p=>{if(!j.test(p.email)){o(!0);return}o(!1),n(!1),m.mutate({email:p.email},{onSuccess:()=>{u(!0)},onError:()=>{n(!0)}})}),children:s("div",{className:"flex flex-col items-center",children:[e("span",{className:"inter-2xlarge-semibold mt-base text-grey-90",children:"Reset your password"}),s("span",{className:"inter-base-regular text-grey-50 mt-xsmall text-center",children:["Enter your email address below, and we'll send you",e("br",{}),"instructions on how to reset your password."]}),d?s("div",{className:"text-violet-60 rounded-rounded bg-violet-10 p-base flex gap-x-small mt-large",children:[e("div",{children:e(E,{size:20})}),s("div",{className:"flex flex-col gap-y-2xsmall",children:[e("span",{className:"inter-small-semibold",children:"Succesfully sent you an email"}),e("span",{className:"inter-small-regular",children:"We've sent you an email which you can use to reset your password. Check your spam folder if you haven't received it after a few minutes."})]})]}):s(S,{children:[e(h,{placeholder:"lebron@james.com...",...c("email",{required:!0}),className:"mb-0 mt-xlarge"}),r&&e("div",{className:"mt-xsmall w-[318px]",children:e("span",{className:"inter-small-regular text-rose-50 text-left",children:"We can't find a user with that email address"})}),i&&e("div",{className:"mt-xsmall w-[318px]",children:e("span",{className:"inter-small-regular text-rose-50 text-left",children:"Not a valid email address"})}),e("button",{className:"text-grey-0 w-[320px] h-[48px] border rounded-rounded mt-4 bg-violet-50 inter-base-regular py-3 px-4",type:"submit",children:"Send reset instructions"})]}),e("span",{className:"inter-small-regular text-grey-50 mt-8 cursor-pointer",onClick:a,children:"Go back to sign in"})]})})},T=()=>{const[a,r]=l.useState(!1);return s(k,{children:[e(C,{title:"Login"}),e("div",{className:"flex h-full w-full items-center justify-center",children:e("div",{className:v("flex min-h-[600px] w-[640px] bg-grey-0 rounded-rounded justify-center transition-['min-height'] duration-300",{"min-h-[480px]":a}),children:e("div",{className:"flex flex-col pt-12 w-full px-[120px] items-center",children:a?e(I,{goBack:()=>r(!1)}):e(L,{toResetPassword:()=>r(!0)})})})})]})};export{T as default};
