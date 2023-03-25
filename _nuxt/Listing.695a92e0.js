import{k as I,f as R,a as H,d as L,i as N,e as U}from"./Footer.2ffd1cec.js";import{_ as C,x as M,o as t,g as o,h as x,c as l,l as s,a as h,i,b as r,r as v,d as w,t as c,F as g,v as S,z as T}from"./entry.155d5b82.js";let b=0;const O={mixins:[I],props:{blockLink:{type:Boolean,default:!1},headingLevel:{type:Number,default:3},image:{type:Object,default:null},largeTitle:{type:Boolean,default:!1},link:{type:Object,default:null},links:{type:Array,default(){return[]}},items:{type:Array,default(){return[]}},listMarker:{type:String,default:null},content:{type:String,default:null},meta:{type:Object,default:null},subtitle:{type:String,default:null},title:{type:String,default:null},imagePreset:{type:String,default:null}},data(){return b+=1,{}},computed:{ariaLabel(){if(this.blockLink)return`${this.title?this.title:""}${this.link&&this.link.text?` - ${this.link.text}`:""}`},titleId(){return`post${b}title`},linksHeadingId(){return`post${b}links`}},methods:{handleClick(n){this.blockLink&&(n.preventDefault(),M(this.link.url,{external:this.isExternal(this.link.url)}))},getDisplayDate(n){const u=new Date(n),e={year:"numeric",month:"short",day:"numeric"};return u.toLocaleDateString("en-US",e)},getFullDate(n){const u=new Date(n),e={year:"numeric",month:"long",day:"numeric"};return u.toLocaleDateString("en-US",e)}}},F={key:3,class:"f-body-1 mt-4"},j={"aria-hidden":"true"},z={class:"sr-only"},V={key:1,"aria-hidden":"true"},A={class:"f-ui-1 underline-thickness-1 underline-offset-4 underline group-hover:decoration-[rgba(var(--text-primary-rgb),0.2)]"},E=["aria-labelledby"],q={key:6,class:"mt-12 md:mt-16"},G={class:"f-body-1 ui-richtext"},J=["aria-labelledby","role"],K=["role"];function Q(n,u,e,D,P,a){const f=R,m=H,y=L,_=N;return t(),o(v(e.blockLink?"a":"div"),{href:e.blockLink?e.link.url:null,class:s([{"w-full md:flex md:flex-col lg:block":e.items.length},{"ui-link group relative":e.blockLink,"cursor-pointer":e.blockLink}]),"aria-label":a.ariaLabel,onClick:a.handleClick},{default:x(()=>[e.image?(t(),l("div",{key:0,class:s(e.items.length?"md:w-4-cols lg:w-full":null)},[h(f,{image:e.image,imagePreset:e.imagePreset},null,8,["image","imagePreset"])],2)):i("",!0),r("div",{class:s(e.items.length?"md:w-4-cols lg:ml-0 lg:w-full":null)},[e.title?(t(),o(v(`h${e.headingLevel}`),{key:0,id:a.titleId,class:s([e.image&&!e.largeTitle&!e.items.length?"f-subhead-2":"f-heading-3 md:pr-16 md:max-w-[24rem]",{"mt-8":e.image},{"mt-12 f-heading-3":e.items.length},{"decoration-1 underline-offset-1 underline-transparent":e.blockLink},{"group-hover:underline-text-primary":e.image&&e.blockLink&&e.link&&!e.link.text}])},{default:x(()=>[w(c(e.title),1)]),_:1},8,["id","class"])):i("",!0),e.subtitle?(t(),l("span",{key:1,class:s(["f-body-1 block w-full first:mt-0",e.largeTitle?"mt-spacing-3":"mt-4"])},c(e.subtitle),3)):i("",!0),e.content?(t(),l("div",{key:2,class:s(["f-body-1 block w-full",e.image?"":"mt-4"])},c(e.content),3)):i("",!0),e.meta?(t(),l("div",F,[e.meta.date?(t(),l(g,{key:0},[r("span",j,c(a.getDisplayDate(e.meta.date)),1),r("span",z,c(a.getFullDate(e.meta.date)),1)],64)):i("",!0)])):i("",!0),e.link?(t(),l("div",{key:4,class:s(e.subtitle?"mt-spacing-4":"mt-spacing-3")},[e.blockLink?(t(),l("span",V,[r("span",A,c(e.link.text),1)])):(t(),o(m,{key:0,label:e.link.text,url:e.link.url,modifier:"underline"},null,8,["label","url"]))],2)):i("",!0),e.links&&e.links.length?(t(),l("div",{key:5,class:s(e.subtitle?"mt-spacing-4":"mt-spacing-3")},[h(y,{id:a.linksHeadingId,level:e.headingLevel+1,title:`${e.title} links`,class:"sr-only"},null,8,["id","level","title"]),r("ul",{"aria-labelledby":a.linksHeadingId},[(t(!0),l(g,null,S(e.links,(d,k)=>(t(),l("li",{key:k,class:"mt-4 first:mt-0"},[h(m,{label:d.text||d.label,url:d.url,modifier:"underline"},null,8,["label","url"])]))),128))],8,E)],2)):i("",!0),e.items.length?(t(),l("div",q,[r("div",G,[r("ul",{"aria-labelledby":a.titleId,role:e.items.length===1?"presentation":null,class:""},[(t(!0),l(g,null,S(e.items,d=>(t(),l("li",{role:e.items.length===1?"presentation":null,class:s(e.listMarker!=="bullets"?"list-none relative pl-8 md:pr-16":"")},[e.listMarker!=="bullets"?(t(),o(_,{key:0,name:"Check400",size:"text",class:"f-body-1 absolute left-[-1em] top-[0.15em] a-icon--no-align"})):i("",!0),w(" "+c(d),1)],10,K))),256))],8,J)])])):i("",!0)],2)]),_:1},8,["href","class","aria-label","onClick"])}const W=C(O,[["render",Q]]),X={mixins:[I],props:{headingLevel:{type:Number,default:3},tallRatio:{type:[String,Boolean],default:!1,validator:n=>typeof n=="string"?["always","large-up"].includes(n):!0},url:{type:String,default:null},content:{type:String,default:null},contentSecondary:{type:String,default:null},inverse:{type:Boolean,default:!1},meta:{type:Object,default:null},staticCard:{type:Boolean,default:!1},subtitle:{type:String,default:null},title:{type:String,default:null}},computed:{computedIconName(){return this.url?this.iconType(this.url,!0):null},componentType(){return this.url?U:"div"},linkTarget(){return this.url?this.getLinkTarget(this.url):null}},methods:{getDisplayDate(n){const u=new Date(n),e={year:"numeric",month:"short",day:"numeric"};return u.toLocaleDateString("en-US",e)},getFullDate(n){const u=new Date(n),e={year:"numeric",month:"long",day:"numeric"};return u.toLocaleDateString("en-US",e)}}},Y={key:1,class:"f-body-1 text-secondary"},Z={key:0,class:"pt-spacing-4 f-body-1 mt-auto"},p={key:1,class:"text-secondary"},$={key:2,class:"pt-spacing-4"},ee={"aria-hidden":"true"},te={class:"sr-only"};function le(n,u,e,D,P,a){const f=L,m=N;return t(),o(v(a.componentType),{class:s(["ui-card ratio",{"focus:outline focus:outline-4 focus:outline-offset-4 focus:outline-[color:var(--border-primary)]":e.url},{"bg-inverse text-inverse":e.inverse},{"border border-secondary bg-primary text-primary":!e.inverse},{"ratio-1x1":e.tallRatio===!1,"ratio-4x5":e.tallRatio===!0||e.tallRatio==="always","ratio-1x1 lg:ratio-4x5":e.tallRatio==="large-up"}]),to:e.url,target:a.linkTarget},{default:x(()=>[r("div",{class:s(["ratio-content flex flex-col",{"min-h-[161px] py-12 px-16 md:min-h-[236px] lg:min-h-[200px] lg:py-16 lg:px-24":e.staticCard},{"p-spacing-4":!e.staticCard}])},[r("span",{class:s(["relative w-full",{"pr-32":a.computedIconName}])},[e.title?(t(),o(f,{key:0,title:e.title,"heading-level":e.headingLevel,class:s(e.staticCard?"f-heading-5":"f-heading-3")},null,8,["title","heading-level","class"])):i("",!0),e.subtitle?(t(),l("span",Y,c(e.subtitle),1)):i("",!0),a.computedIconName?(t(),o(m,{key:2,name:a.computedIconName,size:"text",class:"a-icon--no-align f-heading-3 absolute right-0 top-0"},null,8,["name"])):i("",!0)],2),e.content||e.contentSecondary||e.meta.date?(t(),l("div",Z,[e.content?(t(),l(g,{key:0},[w(c(e.content),1)],64)):i("",!0),e.contentSecondary?(t(),l("span",p,c(e.contentSecondary),1)):i("",!0),e.meta&&e.meta.date?(t(),l("div",$,[r("span",ee,c(a.getDisplayDate(e.meta.date)),1),r("span",te,c(a.getFullDate(e.meta.date)),1)])):i("",!0)])):i("",!0)],2)]),_:1},8,["class","to","target"])}const ne=C(X,[["render",le]]);let B=0;const ae={props:{blockLink:{type:Boolean,default:!1},title:{type:String,default:null},itemsPerRow:{type:Number,default:4},largeTitle:{type:Boolean,default:!1},level:{type:String,default:"primary"},link:{type:Object,default:null},listMarker:{type:String,default:null},listOnly:{type:Boolean,default:!1},items:{type:Array,default(){return[]}},itemType:{type:String,default:"Post"},spacing:{type:Boolean,default:!0},staticCard:{type:Boolean,default:!1},retainListSpacing:{type:Boolean,default:null},theme:{type:String,default:null},appearance:{type:String,default:"default",validator:n=>["default","inverse"].includes(n)},pending:{type:Boolean,default:!1}},data(){return B+=1,{}},computed:{imagePreset(){let n="post-2up";return(this.items.length>3||this.items.length===1||this.pending)&&!(this.itemsPerRow<=3)?n="post-4up":this.items.length===2||this.itemsPerRow===2?n="post-2up":(this.items.length===3||this.itemsPerRow===3)&&(n="post-3up"),n},showHeading(){return this.listOnly?!1:!!(this.title||this.link)},titleId(){return`listing${B}title`}},methods:{itemClass(n,u){let e=[];return this.imagePreset==="post-4up"?e.push("lg:w-3-cols"):this.imagePreset==="post-2up"?e.push("lg:w-6-cols"):this.imagePreset==="post-3up"&&e.push("lg:w-1/3-cols"),this.itemType==="Card"?(e.push("md:w-4-cols"),this.staticCard?(e.push("xs:mt-48 xs:w-5-cols-vw flex-shrink-0"),u<2&&e.push("lg:mt-60")):(e.push("xs:w-6-cols"),u<2&&e.push("md:mt-48 lg:mt-60"),u<1?e.push("xs:mt-48"):e.push("xs:mt-gutter")),u>1&&u<4&&e.push("md:mt-gutter lg:mt-60"),u>=4&&e.push("md:mt-gutter")):(e.push("xs:w-6-cols"),this.listMarker?e.push("mt-spacing-7"):e.push("mt-spacing-6"),n.list?e.push("md:w-8-cols"):e.push("md:w-4-cols")),e}}},ie={key:0,class:"f-body-1"},se=r("p",null,"Loading…",-1),re=[se],ue={key:0,class:s(["pt-spacing-3 w-full border-t border-primary"])},ce={class:"cols-container"},de={class:"xs:w-6-cols md:w-4-cols lg:w-6-cols"},oe={key:0,class:"xs:w-6-cols md:w-4-cols md:flex md:flex-col lg:w-6-cols"},me={class:"block xs:mt-12 md:mt-0 md:ml-auto lg:mt-4"},ge={class:"ui-list"},fe=["aria-labelledby"];function he(n,u,e,D,P,a){const f=L,m=H,y=W,_=ne;return t(),l("div",{class:s([{"mt-spacing-7":a.showHeading&&e.spacing&&!e.pending,"pt-spacing-6":e.pending}])},[e.pending?(t(),l("div",ie,re)):(t(),l(g,{key:1},[a.showHeading?(t(),l("div",ue,[r("div",ce,[r("div",de,[e.title?(t(),o(f,{key:0,headingLevel:2,class:"f-heading-1",id:a.titleId,title:e.title},null,8,["id","title"])):i("",!0)]),e.link?(t(),l("div",oe,[r("div",me,[h(m,{label:e.link.text,url:e.link.url,modifier:"underline"},null,8,["label","url"])])])):i("",!0)])])):i("",!0),r("div",ge,[r("div",{class:s([{"-mt-spacing-6":!a.showHeading&&!e.retainListSpacing&&e.theme&&e.theme!=="light-gray"&&e.theme!=="none"&&e.itemType==="Post"}])},[r("ul",{"aria-labelledby":e.title?a.titleId:null,class:s(["cols-container",{"flex flex-row flex-nowrap -mr-gutter pr-gutter md:mr-0 md:pr-0 md:flex-wrap overflow-x-auto":e.staticCard,"-mt-spacing-4":e.itemType==="Post"&&e.listMarker}])},[(t(!0),l(g,null,S(e.items,(d,k)=>(t(),l("li",{class:s(a.itemClass(d,k))},[e.itemType==="Post"?(t(),o(y,T({key:0},d,{blockLink:e.blockLink,largeTitle:e.largeTitle,listMarker:e.listMarker,imagePreset:a.imagePreset}),null,16,["blockLink","largeTitle","listMarker","imagePreset"])):i("",!0),e.itemType==="Card"?(t(),o(_,T({key:1},d,{contentSecondary:d.contentSecondary,meta:d.meta,staticCard:e.staticCard,tallRatio:!e.staticCard&&e.items.length>=4?"large-up":!1,inverse:e.appearance==="inverse"}),null,16,["contentSecondary","meta","staticCard","tallRatio","inverse"])):i("",!0)],2))),256))],10,fe)],2)])],64))],2)}const ke=C(ae,[["render",he]]);export{ke as _,W as a};
