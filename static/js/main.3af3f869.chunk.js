(this["webpackJsonpfrontend-portfolio"]=this["webpackJsonpfrontend-portfolio"]||[]).push([[0],[,,function(e,t,r){e.exports={curvedHalo:"CurvedHaloFrame_curvedHalo__16YF6",curvedHaloYellow:"CurvedHaloFrame_curvedHaloYellow__1pbpR",curvedHaloYellowHover:"CurvedHaloFrame_curvedHaloYellowHover__1GaiJ",curvedHaloBlue:"CurvedHaloFrame_curvedHaloBlue__3Upim",curvedHaloBlueHover:"CurvedHaloFrame_curvedHaloBlueHover__3r-Mv"}},function(e,t,r){e.exports={placeHolder:"ActiveHeader_placeHolder__2NFJU",barBackground:"ActiveHeader_barBackground__H3Ez6",activeHeader:"ActiveHeader_activeHeader__2jO1M",thinBar:"ActiveHeader_thinBar__NYIHj",botContainer:"ActiveHeader_botContainer__1UGpK"}},function(e,t,r){e.exports={askButton:"AskButton_askButton__2bkmV",showHalo:"AskButton_showHalo__JQIde",removeHalo:"AskButton_removeHalo__jlNVG",askIcon:"AskButton_askIcon__1NRwm"}},function(e,t,r){e.exports={hyperlink:"Hyperlink_hyperlink__2yjbW",yellow:"Hyperlink_yellow__VIBFn",blue:"Hyperlink_blue__1zW9k"}},,function(e,t,r){e.exports={glowingAvatarContainer:"GlowingAvatar_glowingAvatarContainer__2KAFv",glowing:"GlowingAvatar_glowing__1xILu",glow:"GlowingAvatar_glow__331K-",avatarContainer:"GlowingAvatar_avatarContainer__35_aN",avatar:"GlowingAvatar_avatar__1vcvo"}},function(e,t,r){e.exports={placeholder:"AskQuestions_placeholder__1jU_C",barBackground:"AskQuestions_barBackground__1r_Pg",askQuestionBar:"AskQuestions_askQuestionBar__11Vu0"}},function(e,t,r){e.exports={section:"Section_section__3vam2",anchor:"Section_anchor__qk8TW",heading:"Section_heading__NxgOj"}},function(e,t,r){e.exports={descriptionList:"DescriptionList_descriptionList__G6ID5",title:"DescriptionList_title__27pFO",item:"DescriptionList_item__23yQx"}},,function(e,t,r){e.exports={paragraph:"Paragraphs_paragraph__2kWMK"}},function(e,t,r){e.exports={question:"QuestionSelector_question__2e5xh",questionSelector:"QuestionSelector_questionSelector__3KG5g"}},function(e,t,r){e.exports={projectFrame:"ProjectFrame_projectFrame__1Et4Q",title:"ProjectFrame_title__19Cko"}},function(e,t,r){e.exports={projectCaseContainer:"ProjectCase_projectCaseContainer__2IULf",projectCase:"ProjectCase_projectCase__24kiz"}},function(e,t,r){e.exports={workExperience:"WorkExperience_workExperience__3ykwN"}},,function(e,t,r){e.exports={projectFrameFooter:"ProjectFrameFooter_projectFrameFooter__1T98r"}},function(e,t,r){e.exports={nonHostedProjects:"NonHostedProjects_nonHostedProjects__2OQX0"}},function(e,t,r){e.exports={skills:"Skills_skills__3D4oT"}},function(e,t,r){e.exports={address:"ContactDetails_address__2rRDv"}},,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(1),i=r(17),s=r.n(i),o=(r(27),r(6)),c=r(12),l=r.n(c),d=function(e){return Object(n.jsx)("p",{style:{fontSize:e.fontSize,margin:e.margin},className:l.a.paragraph,children:e.children})},u=function(e){return e.children.split("\n").map((function(t,r){return Object(n.jsx)("p",{style:{fontSize:e.fontSize,margin:e.margin},className:l.a.paragraph,children:t},r)}))},h=r(2),j=r.n(h),b=function(e){var t=e.disableHalo?"":j.a.curvedHaloYellowHover,r="".concat(j.a.curvedHaloYellow," ").concat(j.a.curvedHalo," ").concat(t);return Object(n.jsx)("div",{className:r,children:e.children})},p=function(e){var t=e.disableHalo?"":j.a.curvedHaloBlueHover,r="".concat(j.a.curvedHaloBlue," ").concat(j.a.curvedHalo," ").concat(t);return Object(n.jsx)("div",{className:r,children:e.children})},m=function(e){var t=e.answer?e.answer:"";return Object(n.jsx)(b,{disableHalo:!0,children:Object(n.jsx)(u,{fontSize:"1rem",children:t})})},_=r.p+"static/media/user.d1e16a00.svg",f=function(e){return Object(n.jsx)("img",{"aria-hidden":"true",style:{width:e.size},alt:"me",src:_})},v=r(7),x=r.n(v),g=function(){return Object(n.jsxs)("div",{className:x.a.glowingAvatarContainer,children:[Object(n.jsx)("div",{className:x.a.glowing}),Object(n.jsx)("div",{className:x.a.avatarContainer,children:Object(n.jsx)(f,{size:"70%"})})]})},O=r(3),k=r.n(O),w=function(e){return Object(n.jsxs)("header",{className:k.a.activeHeaderContainer,children:[Object(n.jsx)("div",{className:k.a.placeHolder}),Object(n.jsxs)("div",{className:k.a.activeHeader,children:[Object(n.jsx)("div",{className:k.a.thinBar}),Object(n.jsxs)("div",{className:k.a.barBackground,children:[Object(n.jsx)(g,{}),Object(n.jsx)(m,{answer:e.botAnswer})]})]})]})},H=r(4),N=r.n(H),y=r.p+"static/media/chat.8ce3bb3a.svg",C=function(e){var t="".concat(N.a.askButton," ").concat(e.isHaloVisible?N.a.showHalo:N.a.removeHalo);return Object(n.jsx)("button",{onClick:e.onClick,title:"Select a question to ask",className:t,children:Object(n.jsx)("img",{alt:"chat",style:{width:e.size},className:N.a.askIcon,"aria-hidden":"true",src:y})})},S=r(5),A=r.n(S),B=function(e){return Object(n.jsx)("a",{className:"".concat(A.a.hyperlink," ").concat(A.a.yellow),rel:"noreferrer",href:e.href,target:e.target,children:e.children})},F=function(e){return Object(n.jsx)("a",{className:"".concat(A.a.hyperlink," ").concat(A.a.blue),rel:"noreferrer",href:e.href,target:e.target,children:e.children})},I=[{title:"Personal Websites?",answer:"These are the projects I created in my personal time.",id:2},{title:"Professional Experience?",answer:"This is my work experience.",id:0},{title:"Skills?",answer:"These are my skills.",id:3},{title:"Contact Details?",answer:"These are my contact details.",id:4}],U=r(13),P=r.n(U),D=function(e){var t=I.map((function(t,r){return Object(n.jsx)("li",{onClick:function(){return e.onQuestionSelected(t)},className:P.a.question,children:Object(n.jsx)(F,{href:"#"+t.id,children:t.title})},r)}));return Object(n.jsx)(p,{disableHalo:!0,children:Object(n.jsx)("ul",{className:P.a.questionSelector,children:t})})},T=r(8),E=r.n(T),Q=function(e){var t=Object(a.useState)(!1),r=Object(o.a)(t,2),i=r[0],s=r[1],c=i?Object(n.jsx)(D,{onQuestionSelected:e.onQuestionSelected}):null;return Object(a.useEffect)((function(){return document.getElementsByTagName("body")[0].addEventListener("click",(function(){s(!1)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:E.a.placeholder}),Object(n.jsxs)("div",{className:E.a.askQuestionBar,children:[c,Object(n.jsx)("div",{className:E.a.barBackground,children:Object(n.jsx)(C,{isHaloVisible:i,onClick:function(e){e.stopPropagation(),s((function(e){return!e}))},size:"2rem"})})]})]})},L=function(e){var t=Object(a.useState)({answer:"Hi! I am Abhishek. This is my portfolio."}),r=Object(o.a)(t,2),i=r[0],s=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{botAnswer:i.answer}),e.children,Object(n.jsx)(Q,{onQuestionSelected:function(e){console.log(e),s(e)}})]})},W=r(18),z=r.n(W),G=function(e){return Object(n.jsxs)("div",{className:z.a.projectFrameFooter,children:[Object(n.jsx)(B,{href:e.webUrl,target:"_blank",children:"Website"}),Object(n.jsx)(B,{href:e.repoUrl,target:"_blank",children:"Github"})]})},q=r(14),R=r.n(q),J=function(e){return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:R.a.projectFrame,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{className:R.a.title,children:e.title}),Object(n.jsx)(u,{children:e.description})]}),Object(n.jsx)(G,{webUrl:e.webUrl,repoUrl:e.repoUrl})]})})},V=r.p+"static/media/arrow-right.bb28c7f2.svg",Y=r(19),M=r.n(Y),K=function(){return Object(n.jsx)(b,{children:Object(n.jsxs)("a",{href:"https://github.com/abhishekbane/",rel:"noreferrer",target:"_blank",className:M.a.nonHostedProjects,children:["Check me on Github",Object(n.jsx)("img",{src:V,"aria-hidden":"true",alt:">"})]})})},X=r(9),Z=r.n(X),$=function(e){return Object(n.jsx)("section",{className:Z.a.section,children:Object(n.jsxs)(b,{responsive:!0,width:"",disableHalo:!0,children:[Object(n.jsx)("h3",{className:Z.a.heading,children:e.heading}),Object(n.jsx)("p",{className:Z.a.anchor,id:e.anchorId,children:"anchor"}),e.children]})})},ee=r(15),te=r.n(ee),re=[{title:"NeuralWorksNeat",description:"A web tool I first created in college to help students calculate neural network weights. \n        I had recently updated the user interface and converted the existing backend php script to act as a REST endpoint.",repoUrl:"https://github.com/abhishekbane/neural-works-neat",webUrl:"https://abhishekbane.github.io/NeuralWorksNeat"}],ne=function(){var e=re.map((function(e,t){return Object(n.jsx)(J,{title:e.title,description:e.description,webUrl:e.webUrl,repoUrl:e.repoUrl},t)}));return Object(n.jsx)($,{anchorId:2,heading:"Personal websites",children:Object(n.jsxs)("div",{className:te.a.projectCaseContainer,children:[Object(n.jsx)("div",{className:te.a.projectCase,children:e}),Object(n.jsx)(K,{})]})})},ae=r(10),ie=r.n(ae),se=function(e){var t=e.list.map((function(e,t){return Object(n.jsx)("dd",{className:ie.a.item,children:e},t)}));return Object(n.jsxs)("dl",{className:ie.a.descriptionList,children:[Object(n.jsx)("dt",{className:ie.a.title,children:e.title}),t]})},oe=r(16),ce=r.n(oe),le=function(){return Object(n.jsxs)($,{anchorId:0,heading:"Work Experience",children:[Object(n.jsx)("div",{className:ce.a.workExperience,children:Object(n.jsx)(se,{title:"Delhivery (2021 - Present)",list:["Designed and architected a UI Library called Aquarius Prime. Two libraries were built, one using Vue and the other using React Native. The Ul libraries are used by around 4 to 5 products within Delhivery which process millions of orders on a monthly basis for a consistent Ul experience which reduces their development efforts and time to market.","Founding member of Delhivery One Web App which is being used by around 30,000 customers which includes SMEs and D2C brands, where we formulated development frameworks and libraries to reduce development effort for new features.","Created a framework for writing mobile friendly code for the Delhivery One Web app.","Led development of Delhivery One Mobile App in React Native.","Wrote CI/CD pipeline using Github Actions for mobile app building and deployment to app stores\u2019 developer consoles.","Additional responsibilities included handling interviews for frontend developers and reviewing pull requests of entry/mid/senior level developers.","Wrote and owned API endpoints for multiple features like putting orders on hold, customer experience services like ticket management systems and exception management systems in Java Spring Boot."]})}),Object(n.jsx)("div",{className:ce.a.workExperience,children:Object(n.jsx)(se,{title:"Accenture (2018 - 2021)",list:["Worked with UX designers to implement chatbot and landing pages for our client.","Created and deployed a form framework that helped admins and business users to create forms easily for a variety of business needs.","Developed interfaces for the automation of site creation and deletion process.","Created a large scale file management system along with an easy to use interface for business users."]})})]})},de=r(20),ue=r.n(de),he=function(e){return Object(n.jsx)($,{anchorId:3,heading:"Skills",children:Object(n.jsx)("div",{className:ue.a.skills,children:Object(n.jsx)(se,{title:"Languages and Technologies",list:["Javascript","Typescript","React.JS","React Native","Vue.js","Node.js","Redux","Tailwind","HTML","CSS","SCSS"]})})})},je=r(21),be=r.n(je),pe=function(){return Object(n.jsx)($,{heading:"Contact Details",anchorId:4,children:Object(n.jsxs)("address",{className:be.a.address,children:[Object(n.jsxs)(d,{margin:"1rem 1.5rem 0.5rem 1.5rem",fontSize:"1rem",children:["Name: ",Object(n.jsx)(B,{href:"https://www.linkedin.com/in/abhishek-bane-012589b9/",children:"Abhishek Bane"})]}),Object(n.jsxs)(d,{margin:"0.5rem 1.5rem 1.5rem 1.5rem",fontSize:"1rem",children:["Email: ",Object(n.jsx)(B,{href:"mailto:abhishek.bane97@gmail.com",children:"abhishek.bane97@gmail.com"})]})]})})},me=function(){return Object(n.jsxs)(L,{children:[Object(n.jsx)(ne,{}),Object(n.jsx)(le,{}),Object(n.jsx)(he,{}),Object(n.jsx)(pe,{})]})};r(28);var _e=function(){return Object(n.jsx)(me,{})},fe=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,30)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(n.jsx)(_e,{}),document.getElementById("root")),fe()}],[[29,1,2]]]);
//# sourceMappingURL=main.3af3f869.chunk.js.map