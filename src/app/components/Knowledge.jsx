
"use client"
import { useState } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PointOfview from "./PointOfview";
import Instraction from "./Instraction";
import Keyword from "./Keyword";
import Toggle from "./Toggle";
import ToggleD from "./ToggleD";

const Knowledge = () => {
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
                <h4 className="text-base"><span className="bg-sl"></span>Knowledge</h4> {/* Correct the label to FAQ 2 */}
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
                    <label for="c">Connect to Web</label>
                    <div className="flex flex-wrap items-center w-full my-3 space-x-2 leading-normal">
                        <ToggleD label="on"
                            on="Enabled"
                            off="Disabled"
                        />
                     

                    </div>
                  
                    <span className="text-xs">
                            We'll search on Google for similar topics to generate up-to-date content.

                        </span>
                    <div class="chakra-stack css-1igwmid"><p class="chakra-text css-1rr4qq7">Knowledge Base</p><a href="/dashboard/customization/knowledge/create">
                        <button type="button" class="chakra-button css-1csoi55">+ Create Knowledge Base</button></a></div>
                    {/*  */}
                    <select

                        className="form-select"
                    >


                        <option value="keyword">
                            No specific knowledge base
                        </option>


                    </select>
                    <div id="field-:r2u:-helptext" class="chakra-form__helper-text css-186pyma">
                        We'll generate content inspired on the knowledge base's assets.</div>
                </>


            )}
        </div>
    );
};

export default Knowledge;
