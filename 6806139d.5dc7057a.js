(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return m}));var a=n(2),o=n(6),r=(n(0),n(84)),i=n(91),c=n(92),l={id:"windows",title:"Windows"},s={unversionedId:"getting-started/windows",id:"getting-started/windows",isDocsHomePage:!1,title:"Windows",description:"Installation of CYTools is done via a Docker image. There is the option of building it or downloading it from Docker Hub.",source:"@site/docs/getting-started/windows.md",slug:"/getting-started/windows",permalink:"/docs/getting-started/windows",version:"current",sidebar:"docs",previous:{title:"macOS",permalink:"/docs/getting-started/macos"},next:{title:"Tutorial",permalink:"/docs/getting-started/tutorial"}},b=[{value:"Requirements",id:"requirements",children:[]},{value:"Installation instructions",id:"installation-instructions",children:[]},{value:"Usage",id:"usage",children:[]}],u={rightToc:b};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Installation of CYTools is done via a Docker image. There is the option of building it or downloading it from Docker Hub."),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"The only requirement is a Windows installation capable of running Docker Desktop. In particular, it requires Windows 10: Pro, Enterprise, or Education (Version 1903 or later); or Windows 10: Home (Version 2004 or later) running on a modern x86_64 processor. See the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"Docker installation guide")," for more details."),Object(r.b)("h2",{id:"installation-instructions"},"Installation instructions"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"For most users we recommend building the Docker image ",Object(r.b)("strong",{parentName:"p"},"with")," ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mosek.com/"}),"MOSEK"),", which is an optimizer that is greatly superior to open-source alternatives. A license is required to use MOSEK, but an academic license can be requested for free at ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.mosek.com/products/academic-licenses/"}),"this link"),". MOSEK is not entirely necessary, but some K\xe4hler cone computations may be slower or fail at large ",Object(r.b)("span",Object(a.a)({parentName:"p"},{className:"math math-inline"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"katex"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"katex-mathml"}),Object(r.b)("math",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(r.b)("semantics",{parentName:"math"},Object(r.b)("mrow",{parentName:"semantics"},Object(r.b)("msup",{parentName:"mrow"},Object(r.b)("mi",{parentName:"msup"},"h"),Object(r.b)("mrow",{parentName:"msup"},Object(r.b)("mn",{parentName:"mrow"},"1"),Object(r.b)("mo",Object(a.a)({parentName:"mrow"},{separator:"true"}),","),Object(r.b)("mn",{parentName:"mrow"},"1")))),Object(r.b)("annotation",Object(a.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"h^{1,1}")))),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"base"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"strut",style:{height:"0.8141079999999999em",verticalAlign:"0em"}})),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"mord"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"mord mathnormal"}),"h"),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"msupsub"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-t"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"vlist-r"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"vlist",style:{height:"0.8141079999999999em"}}),Object(r.b)("span",Object(a.a)({parentName:"span"},{style:{top:"-3.063em",marginRight:"0.05em"}}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"1"),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"mpunct mtight"}),","),Object(r.b)("span",Object(a.a)({parentName:"span"},{className:"mord mtight"}),"1"))))))))))))),"."))),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We recommend using PowerShell to run all commands. Some commands may not work with CMD."))),Object(r.b)(i.a,{defaultValue:"bdocker",values:[{label:"Build Docker image",value:"bdocker"},{label:"Download Docker image",value:"ddocker"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"ddocker",mdxType:"TabItem"},Object(r.b)(i.a,{groupId:"mosek",defaultValue:"with",values:[{label:"With MOSEK",value:"with"},{label:"Without MOSEK",value:"without"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"without",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",null," Install Docker Desktop. The installation guide for the Home version of Windows can be found ",Object(r.b)("a",{href:"https://docs.docker.com/docker-for-windows/install-windows-home/"},"here"),", and the guide for other versions can be found ",Object(r.b)("a",{href:"https://docs.docker.com/docker-for-windows/install/"},"here"),"."),Object(r.b)("li",null," Download the Docker image. This can be done with ",Object(r.b)("code",null,"docker pull liammcallistergroup/cytools"),"."),Object(r.b)("li",null,"Create a shorter tag for the Docker image. This step is only for convenience. This can be done with ",Object(r.b)("code",null,"docker tag liammcallistergroup/cytools cytools")))),Object(r.b)(c.a,{value:"with",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",null," Install Docker Desktop. The installation guide for the Home version of Windows can be found ",Object(r.b)("a",{href:"https://docs.docker.com/docker-for-windows/install-windows-home/"},"here"),", and the guide for other versions can be found ",Object(r.b)("a",{href:"https://docs.docker.com/docker-for-windows/install/"},"here"),"."),Object(r.b)("li",null," Download the Docker image. This can be done with ",Object(r.b)("code",null,"docker pull liammcallistergroup/cytools"),"."),Object(r.b)("li",null," Create a new container using ",Object(r.b)("code",null,"docker run -it --name=cytools_mosek liammcallistergroup/cytools bash"),"."),Object(r.b)("li",null," Once inside the container run ",Object(r.b)("code",null,"nano /cytools-install/external/mosek/mosek.lic")," to create a license file in the right location."),Object(r.b)("li",null," Paste the contents of your license file (Ctrl+Shift+v), save (Ctrl+s), and exit (Ctrl+x)."),Object(r.b)("li",null," Now exit the container with (Ctrl+d), or by running ",Object(r.b)("code",null,"exit"),"."),Object(r.b)("li",null," Save the container as a new Docker image with ",Object(r.b)("code",null,'docker commit --change="CMD jupyter lab --ip 0.0.0.0 --port 8888 --no-browser --allow-root" cytools_mosek cytools'),"."),Object(r.b)("li",null," Remove the old container with ",Object(r.b)("code",null,"docker rm cytools_mosek")," and the old Docker image with ",Object(r.b)("code",null,"docker rmi liammcallistergroup/cytools"),"."))))),Object(r.b)(c.a,{value:"bdocker",mdxType:"TabItem"},Object(r.b)(i.a,{groupId:"mosek",defaultValue:"with",values:[{label:"With MOSEK",value:"with"},{label:"Without MOSEK",value:"without"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"without",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",null," Install Docker Desktop. The installation guide for the Home version of Windows can be found ",Object(r.b)("a",{href:"https://docs.docker.com/docker-for-windows/install-windows-home/"},"here"),", and the guide for other versions can be found ",Object(r.b)("a",{href:"https://docs.docker.com/docker-for-windows/install/"},"here"),"."),Object(r.b)("li",null," Clone the ",Object(r.b)("a",{href:"https://github.com/LiamMcAllisterGroup/cytools"},"CYTools GitHub repository"),". This can be done with ",Object(r.b)("code",null,"git clone https://github.com/LiamMcAllisterGroup/cytools.git")," or simply by downloading the zipped repo and unzipping it."),Object(r.b)("li",null,"Build the Docker image. The Docker image can be built by first navigating to the root CYTools folder on the terminal and then running ",Object(r.b)("code",null,"docker build -t cytools .")," (note the period at the end)."))),Object(r.b)(c.a,{value:"with",mdxType:"TabItem"},Object(r.b)("ol",null,Object(r.b)("li",null," Install Docker Engine, if not already installed. Installation instructions can be found ",Object(r.b)("a",{href:"https://docs.docker.com/engine/install/"},"here"),"."),Object(r.b)("li",null," Clone the ",Object(r.b)("a",{href:"https://github.com/LiamMcAllisterGroup/cytools"},"CYTools GitHub repository"),". This can be done with ",Object(r.b)("code",null,"git clone https://github.com/LiamMcAllisterGroup/cytools.git")," or simply by downloading the zipped repo and unzipping it."),Object(r.b)("li",null,"Activate Mosek. This is done simply by placing the license file in ",Object(r.b)("code",null,"cytools\\external\\mosek\\mosek.lic"),"."),Object(r.b)("li",null,"Build the Docker image. The Docker image can be built by first navigating to the root CYTools folder on the terminal and then running ",Object(r.b)("code",null,"docker build -t cytools .")," (note the period at the end).")))))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("p",null,"There are two main ways of using the CYTools Docker image. It can be used via JupyterLab or directly on the terminal. The command used to run the image is:"),Object(r.b)(i.a,{defaultValue:"jupyter",values:[{label:"JupyterLab",value:"jupyter"},{label:"Terminal",value:"terminal"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"jupyter",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"docker run --rm -it -v ${PWD}:/home -p 8888:8888 cytools\n")),Object(r.b)("p",null,"This will start a JupyterLab server. To access it, the shown URL of the form ",Object(r.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:8888/?token=xxxxxxxxx")," should be copied and pasted into your browser of choice. From there all the usual JupyterLab functionality can be accessed and the full CYTools package is available.")),Object(r.b)(c.a,{value:"terminal",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"docker run --rm -it -v ${PWD}:/home cytools python\n")),Object(r.b)("p",null,"This will directly start the Python interpreter, where cytools can be imported. Alternatively, one can launch a bash terminal in the image by replacing ",Object(r.b)("inlineCode",{parentName:"p"},"python")," with ",Object(r.b)("inlineCode",{parentName:"p"},"bash"),", which can be useful sometimes."))))}m.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,p=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?o.a.createElement(p,c(c({ref:t},s),{},{components:n})):o.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},87:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},88:function(e,t,n){"use strict";var a=n(0),o=n(87);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},91:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(88),i=n(86),c=n(47),l=n.n(c),s=37,b=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,u=e.values,m=e.groupId,d=Object(r.a)(),p=d.tabGroupChoices,h=d.setTabGroupChoices,O=Object(a.useState)(c),j=O[0],f=O[1],g=Object(a.useState)(!1),w=g[0],v=g[1];if(null!=m){var y=p[m];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&f(y)}var k=function(e){f(e),null!=m&&h(m,e)},N=[],T=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},x=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",T),window.addEventListener("mousedown",x)}),[]),o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},u.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e),T(e)},onFocus:function(){return k(t)},onClick:function(){k(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},92:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);