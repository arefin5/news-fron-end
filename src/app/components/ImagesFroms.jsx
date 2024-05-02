
"use client"
import { useState } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PointOfview from "./PointOfview";
import Instraction from "./Instraction";
import Keyword from "./Keyword";
import Toggle from "./Toggle";
import ToggleD from "./ToggleD";

const ImagesFrom = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };


    return (

        <div className='bg-white'>
            <div
                className=
                {`flex justify-between items-center cursor-pointer  font-light ${openIndex === 1 ? 'bg-min/10 shadow-md' : 'border-y'
                    }`}
                onClick={() => handleToggle(1)} // Change the index to 1
            >
                <h4 className="text-base">
                    <span className="bg-sl"></span>
                    Images </h4> {/* Correct the label to FAQ 2 */}
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
            {openIndex === 1 && (
                <>
                <div className="mb-3">
                  <label className="form-label">Image Provider</label>
                  <select
                    
                    className="form-select"
                  >

                    <optgroup label="Ai Images(Recommended)">
                      <option value="Statble Diffusion Xl">
                      Statble Diffusion Xl
                      </option>
                      <option value="DALLE-3 Images">
                      DALLE-3 Images(+2 credits)</option>
                    </optgroup>
                    <optgroup label="Non -Ai- images">
                      <option value="bing">Organic Images(Bing)</option>
                      <option value="Stock Images">Stock Images (Unsplash)</option>
                      <option value="Custom Images">Custom Images</option>
                    </optgroup>
                    <optgroup label="Deprecated">
                      <option value="montor">Dalle -2 Images</option>
                    </optgroup>
                  </select>
                </div>






                    <p>Featured Image
</p>
                            <ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />
                            <p>In-Article Images
</p>
<ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />
                    {/*  */}
                  
                </>


            )}
        </div>
    );
};

export default ImagesFrom;
