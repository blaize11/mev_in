import{r as l,u as x,j as e,L as t}from"./app-Dw3gLdO5.js";import{X as d}from"./x-WnBCTU82.js";import{c as h}from"./createLucideIcon-KijxsBYK.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],g=h("Menu",u);function j(){const[o,n]=l.useState(!1),[i,s]=l.useState(!1),{url:c}=x();l.useEffect(()=>{const r=()=>{n(window.scrollY>50)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]);const m=()=>{s(!i)},a=r=>c===r;return e.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-50 py-2 px-4 sm:px-8 transition-all duration-300 ${o?"bg-white/25 backdrop-blur-sm shadow-md":"bg-white shadow-md"}`,children:[e.jsxs("div",{className:"flex items-center justify-between max-w-7xl mx-auto",children:[e.jsx(t,{href:"/",className:"flex items-center space-x-3",children:e.jsx("img",{src:"/logo.png",alt:"Pura Vida Resort Logo",className:"h-26 sm:h-30 w-auto object-contain"})}),e.jsx("button",{className:"sm:hidden text-gray-800 focus:outline-none",onClick:m,"aria-label":"Toggle navigation menu",children:i?e.jsx(d,{className:"h-6 w-6"}):e.jsx(g,{className:"h-6 w-6"})}),e.jsxs("div",{className:`${i?"block":"hidden"} sm:flex sm:items-center sm:space-x-6 absolute sm:static top-full left-0 right-0 bg-white sm:bg-transparent shadow-lg sm:shadow-none p-4 sm:p-0 transition-all duration-300`,children:[e.jsxs("ul",{className:"list-none text-gray-800 font-medium sm:flex sm:space-x-6",children:[e.jsx("li",{className:"relative group",children:e.jsx(t,{href:"/",className:`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${a("/")?"bg-[#800000] text-white":""}`,onClick:()=>s(!1),children:"Home"})}),e.jsx("li",{className:"relative group",children:e.jsx(t,{href:"/about",className:`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${a("/about")?"bg-[#800000] text-white":""}`,onClick:()=>s(!1),children:"About Us"})}),e.jsx("li",{className:"relative group",children:e.jsx(t,{href:"/room",className:`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${a("/room")?"bg-[#800000] text-white":""}`,onClick:()=>s(!1),children:"Rooms"})}),e.jsx("li",{className:"relative group",children:e.jsx(t,{href:"/contact",className:`block px-6 py-4 sm:py-3 hover:text-white transition-all duration-300 ease-in-out relative bg-transition ${a("/contact")?"bg-[#800000] text-white":""}`,onClick:()=>s(!1),children:"Contact"})})]}),e.jsx("a",{href:"https://www.booking.com/searchresults.html?ss=Coco+Grove+Beach+Resort%2C+Siquijor+Island%2C+Siquijor%2C+Visayas%2C+Philippines&ssne=Dauin&ssne_untouched=Dauin&efdco=1&label=gen173nr-10CAEoggI46AdIM1gEaLQBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuAK51NHHBsACAdICJGRhZWU5OGFjLTJiNzYtNGFjMy05OTc5LTFkZTNjNGRmZjc1MNgCAeACAQ&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=1518524&dest_type=hotel&ac_position=0&ac_click_type=b&ac_langcode=en&ac_suggestion_list_length=5&search_selected=true&search_pageview_id=a8c8201ce0fe0089&ac_meta=GhBhOGM4MjAxY2UwZmUwMDg5IAAoATICZW46CmNvY28gZ3JvdmVAAEoAUAA%3D&group_adults=2&no_rooms=1&group_children=0",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:mt-0 sm:ml-8 bg-[#800000] text-white px-4 py-2 rounded-lg hover:bg-[#660000] transition-colors text-center font-medium",onClick:()=>s(!1),children:"Book a Room"})]})]}),e.jsx("style",{jsx:!0,children:`
        .bg-transition {
          position: relative;
        }
        .bg-transition::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #800000;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 300ms ease-in-out;
          z-index: -1;
        }
        .group:hover .bg-transition::before {
          transform: scaleX(1);
        }
        .bg-transition.active::before {
          transform: scaleX(1);
        }
        .bg-transition.active {
          background-color: transparent;
        }
        /* Ensure dropdown container stays white on hover */
        .group:hover ul {
          background-color: white !important;
        }
        /* Apply hover effect only to links within dropdown */
        .group:hover ul li a:hover::before {
          transform: scaleX(1);
        }
        .group:hover ul li a:hover {
          color: white;
        }
      `})]})}function v(){return e.jsx("footer",{className:"footer-area bg-[#f8f8f8] text-gray-800 mt-12",children:e.jsxs("div",{className:"container mx-auto px-6 py-12",children:[e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10",children:[e.jsxs("div",{className:"text-center sm:text-left",children:[e.jsx(t,{href:"/",className:"inline-block mb-5",children:e.jsx("img",{src:"/logo.png",alt:"Pura Vida Logo",className:"h-30 w-auto mx-auto sm:mx-0 object-contain"})}),e.jsx("p",{className:"text-gray-700 leading-relaxed text-sm sm:text-base max-w-md mx-auto sm:mx-0",children:"“Stay, relax, and feel the warmth at Maeve’s Place Inn.”"})]}),e.jsxs("div",{className:"text-center sm:text-left",children:[e.jsx("h6",{className:"text-lg font-semibold text-[#8B7355] mb-5",children:"Contact Us"}),e.jsxs("div",{className:"space-y-3 text-gray-700 text-sm sm:text-base",children:[e.jsxs("p",{className:"flex flex-col sm:flex-row sm:items-start sm:gap-2 justify-center sm:justify-start",children:[e.jsx("i",{className:"fa fa-map-marker mt-1 text-[#8B7355]"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Address:"}),"  Purok 3, Tubod, San Juan, Siquijor, Philippines"]})]}),e.jsxs("p",{className:"flex flex-col sm:flex-row sm:items-start sm:gap-2 justify-center sm:justify-start",children:[e.jsx("i",{className:"fa fa-envelope mt-1 text-[#8B7355]"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Email Us:"})," ",e.jsx("a",{href:"mailto:reservation@puravidadauin.com",className:"hover:text-[#8B7355] break-words",children:"maeve@gmail.com"})]})]}),e.jsxs("p",{className:"flex flex-col sm:flex-row sm:items-start sm:gap-2 justify-center sm:justify-start",children:[e.jsx("i",{className:"fa fa-phone mt-1 text-[#8B7355]"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Call Us:"})," +63 (035) 400 6959 ",e.jsx("br",{})," +63 (0)917 320 2284"]})]})]})]}),e.jsxs("div",{className:"text-center sm:text-left",children:[e.jsx("h6",{className:"text-lg font-semibold text-[#8B7355] mb-5",children:"Subscribe to our Newsletter"}),e.jsxs("form",{onSubmit:o=>{o.preventDefault(),alert("Thank you for subscribing!")},className:"flex flex-col sm:flex-row gap-3 sm:justify-start justify-center",children:[e.jsx("input",{type:"email",name:"subscribe-email",id:"subscribeemail",placeholder:"Your E-mail",required:!0,className:"flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#8B7355]"}),e.jsx("button",{type:"submit",className:"bg-[#8B7355] text-white rounded-lg px-5 py-2 hover:bg-[#a08764] transition-colors",children:"Subscribe"})]})]})]}),e.jsx("div",{className:"text-center mt-10 border-t border-gray-200 pt-5 text-sm text-gray-600",children:e.jsxs("p",{children:["© ",new Date().getFullYear()," All rights reserved |"," ",e.jsx("span",{className:"font-semibold text-[#8B7355]",children:" Maeve’s Place Inn."})]})})]})})}export{v as F,j as H};
