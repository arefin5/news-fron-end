
// "use client"
// import { useState } from "react";
// import { ChakraProvider, Icon } from "@chakra-ui/react";
// import { CheckCircleIcon } from "@chakra-ui/icons";
// import Content from "./Content";
// import Knowledge from "./Knowledge"
// const Base = () => {
//   const [openIndex, setOpenIndex] = useState(-1);
//   const [openIndext, setOpenIndext] = useState(-1);
//   const [openIndexth, setOpenIndexth] = useState(-1);
//   const [category, setCategory] = useState('title');

//   const handleToggle = (index) => {
//     setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
//   };

//   const handleTogglet = (index) => {
//     setOpenIndext((prevIndex) => (prevIndex === index ? -1 : index));
//   };
//   const handleToggleth = (index) => {
//     setOpenIndexth((prevIndex) => (prevIndex === index ? -1 : index));
//   };

//   const handleCategoryChange = (event) => {
//     // setCategory(event.target.value);
//     const selectedCategory = event.target.value;
//     setCategory(selectedCategory);
//     console.log(selectedCategory);
//     // console.log(category)
//   };
//   return (
//     <div>
//       <div className="max-w-3xl mx-auto md:py-20 px-10">
//         <div className="mb-6">
//           {/*  */}
//           <div className='bg-white'>
//             <div
//               className={`flex justify-between items-center cursor-pointer font-light ${openIndex === 0 ? 'bg-min/10 shadow-md' : 'border-y'
//                 }`}
//               onClick={() => handleToggle(0)}
//             >
//               <h4 className="text-base">
//                 <span className="bg-sl"></span>
//                 Base </h4>
//               <ChakraProvider>
//                 <Icon
//                   as={CheckCircleIcon}
//                   color="#718096"
//                   w={5}
//                   h={5}
//                   transform={openIndex === 0 ? 'rotate(180deg)' : 'none'} // Rotate the icon based on openIndex state
//                 />
//               </ChakraProvider>
//             </div>
//             {openIndex === 0 && (
//               <>
//                 <div className="mb-3">
//                   <label className="form-label">Generation Mode</label>
//                   <select
//                     value={category}
//                     onChange={handleCategoryChange}
//                     className="form-select"
//                   >

//                     <optgroup label="Static">
//                       <option value="description">Description</option>
//                       <option value="title">Titles</option>
//                       <option value="keyword">KeyWords</option>
//                     </optgroup>
//                     <optgroup label="dynamic">
//                       <option value="montor">Keyword Monitor</option>
//                     </optgroup>
//                   </select>
//                   <p>Each option provides a different way to generate content.
//                   </p>
//                 </div>

//                 {category === "title" && (
//                   <>
//                     <label for="review">Titles (1 per line)</label>
//                     <textarea name="title" className="w-100" placeholder="How to Bake Bread">
//                     </textarea>
//                     <p>We'll generate an article for each title.</p>
//                   </>

//                 )}
//                 {/*  */}
//                 {category === "keyword" && (
//                   <>
//                     <label for="review">Titles (1 per line)</label>
//                     <textarea name="keyword" className="w-100" placeholder="How to Bake Bread">
//                     </textarea>
//                     <p>We'll generate an article for each title.</p>
//                   </>
//                 )}
//                 {/*  */}
//                 {category === "description" && (
//                   <>
//                     <label for="review">Context Description</label>
//                     <textarea name="description"
//                       className="w-100"
//                       placeholder="SpeceX is a company that produce                     rockets">
//                     </textarea>
//                     <p>We'll generate an article for each keyword.
//                     </p>
//                   </>
//                 )}
//                 {/*  */}
//                 {category === "montor" && (
//                   <>


//                     <p><strong>Monitor</strong></p>
//                     <button type="button" class="chakra-button css-1csoi55">+ Create Monitor</button>
//                     <br />
//                     <br />

//                     <select>
//                       <optgroup >
//                         <option value="montorselect">Select a Monitor</option>
//                       </optgroup>
//                     </select>
//                     <p>We'll use this monitor to extract relevant keywords.</p>


//                     <label className="form-label">Generation Mode</label>
//                     <select

//                       className="form-select"
//                     >

//                       <optgroup >
//                         <option value="top1">Top1</option>
//                         <option value="top3">Top3</option>
//                         <option value="top5">Top5</option>
//                         <option value="top10">Top10</option>
//                         <option value="top20">Top20</option>
//                         <option value="top50">Top50</option>
//                         <option value="top100">Top100</option>
//                       </optgroup>
//                     </select>
//                     <p>We'll generate an article for each of the top keywords in the monitor.</p>
//                   </>




//                 )

//                 }
//                 {/*  */}
//               </>
//             )}
//           </div>
//           {/*  */}
//           <div className='bg-white'>
//             <div
//               className={`flex justify-between items-center cursor-pointer p-3 font-light ${openIndext === 1 ? 'bg-min/10 shadow-md' : 'border-y'
//                 }`}
//               onClick={() => handleTogglet(1)} // Change the index to 1
//             >
//               <h4 className="text-base">FAQ 2</h4> {/* Correct the label to FAQ 2 */}
//               <svg
//                 className={`w-4 h-4 transition-transform transform ${openIndext === 1 ? 'rotate-180' : 'rotate-0'
//                   }`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 1024 1024"
//               >
//                 <path fill="currentColor"
//                   d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
//               </svg>
//             </div>
//             {openIndext === 1 && (
//               <input
//                 type="text"
//                 className="text-gray-700 p-2 m-2 border border-gray-300 rounded-md"
//                 placeholder="Enter text"
//               />
//             )}
//           </div>
//           {/*  */}
//           <div className='bg-white'>
//             <div
//               className={`flex justify-between items-center cursor-pointer p-3 font-light ${openIndexth === 2 ? 'bg-min/10 shadow-md' : 'border-y'
//                 }`}
//               onClick={() => handleToggleth(2)} // Change the index to 1
//             >
//               <h4 className="text-base">FAQ 3</h4> {/* Correct the label to FAQ 2 */}
//               <svg
//                 className={`w-4 h-4 transition-transform transform ${openIndexth === 2 ? 'rotate-180' : 'rotate-0'
//                   }`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 1024 1024"
//               >
//                 <path fill="currentColor"
//                   d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
//               </svg>
//             </div>
//             {openIndexth === 2 && (
//               <input
//                 type="text"
//                 className="text-gray-700 p-2 m-2 border border-gray-300 rounded-md"
//                 placeholder="Enter text"
//               />
//             )}
//           </div>
//           {/*  */}
// <Content/>
//           {/*  */}
//           <Knowledge />
//           {/*  */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Base;

"use client"
import { useState } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Content from "./Content";
import Knowledge from "./Knowledge"
import Formating from "./Formating";
import Structure from "./Structure";
import InternalLinking from "./InternalLinking";
import VideosFrom from "./VideosFrom";
import ImagesFrom from "./ImagesFroms";
const Base = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [openIndext, setOpenIndext] = useState(-1);
  const [openIndexth, setOpenIndexth] = useState(-1);
  const [category, setCategory] = useState('title');

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleTogglet = (index) => {
    setOpenIndext((prevIndex) => (prevIndex === index ? -1 : index));
  };
  const handleToggleth = (index) => {
    setOpenIndexth((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const handleCategoryChange = (event) => {
    // setCategory(event.target.value);
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    console.log(selectedCategory);
    // console.log(category)
  };
  return (
    <div>
      <div className="">
        <>
          {/*  */}
          <div className='bg-white'>
            <div
              className={`flex justify-between items-center cursor-pointer font-light ${openIndex === 0 ? 'bg-min/10 shadow-md' : 'border-y'
                }`}
              onClick={() => handleToggle(0)}
            >
              <h4 className="text-base">
                <span className="bg-sl"></span>
                Base </h4>
              <ChakraProvider>
                <Icon
                  as={CheckCircleIcon}
                  color="#718096"
                  w={5}
                  h={5}
                  transform={openIndex === 0 ? 'rotate(180deg)' : 'none'} // Rotate the icon based on openIndex state
                />
              </ChakraProvider>
            </div>
            {openIndex === 0 && (
              <>
                <div className="mb-3">
                  <label className="form-label">Generation Mode</label>
                  <select
                    value={category}
                    onChange={handleCategoryChange}
                    className="form-select"
                  >

                    <optgroup label="Static">
                      <option value="description">Description</option>
                      <option value="title">Titles</option>
                      <option value="keyword">KeyWords</option>
                    </optgroup>
                    <optgroup label="dynamic">
                      <option value="montor">Keyword Monitor</option>
                    </optgroup>
                  </select>
                  <p>Each option provides a different way to generate content.
                  </p>
                </div>

                {category === "title" && (
                  <>
                    <label for="review">Titles (1 per line)</label>
                    <textarea name="title" className="w-100" placeholder="How to Bake Bread">
                    </textarea>
                    <p>We'll generate an article for each title.</p>
                  </>

                )}
                {/*  */}
                {category === "keyword" && (
                  <>
                    <label for="review">Titles (1 per line)</label>
                    <textarea name="keyword" className="w-100" placeholder="How to Bake Bread">
                    </textarea>
                    <p>We'll generate an article for each title.</p>
                  </>
                )}
                {/*  */}
                {category === "description" && (
                  <>
                    <label for="review">Context Description</label>
                    <textarea name="description"
                      className="w-100"
                      placeholder="SpeceX is a company that produce                     rockets">
                    </textarea>
                    <p>We'll generate an article for each keyword.
                    </p>
                  </>
                )}
                {/*  */}
                {category === "montor" && (
                  <>


                    <p><strong>Monitor</strong></p>
                    <button type="button" class="chakra-button css-1csoi55">+ Create Monitor</button>
                    <br />
                    <br />

                    <select>
                      <optgroup >
                        <option value="montorselect">Select a Monitor</option>
                      </optgroup>
                    </select>
                    <p>We'll use this monitor to extract relevant keywords.</p>


                    <label className="form-label">Generation Mode</label>
                    <select

                      className="form-select"
                    >

                      <optgroup >
                        <option value="top1">Top1</option>
                        <option value="top3">Top3</option>
                        <option value="top5">Top5</option>
                        <option value="top10">Top10</option>
                        <option value="top20">Top20</option>
                        <option value="top50">Top50</option>
                        <option value="top100">Top100</option>
                      </optgroup>
                    </select>
                    <p>We'll generate an article for each of the top keywords in the monitor.</p>
                  </>




                )

                }
                {/*  */}
              </>
            )}
          </div>

          <Content />
          <Knowledge />
          <Formating />
          <Structure/>
          <InternalLinking />
          <ImagesFrom />
          <VideosFrom />
        </>
      </div>
    </div>
  );
};

export default Base;
