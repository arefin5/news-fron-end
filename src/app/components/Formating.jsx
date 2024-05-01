
"use client"
import { useState } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PointOfview from "./PointOfview";
import Instraction from "./Instraction";
import Keyword from "./Keyword";
import Toggle from "./Toggle";
import ToggleD from "./ToggleD";

const Formating = () => {
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
                    Formating</h4> {/* Correct the label to FAQ 2 */}
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
                    <div className="flex justify-between p-3 items-center">

                        {/*  */}
                        <div>
                            <p>Bold</p>
                            <ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />
                            <p>We will bold important keywords in your article</p>
                        </div>
                        {/*  */}
                        <div>
                            <p>Italices</p>
                            <ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />
                            <p>we will use italices for subtitle emphasis in your article</p>
                        </div>
                        {/*  */}
                        <div>
                            <p>Tables</p>
                            <ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />
                            <p>If appropriate we'll include tables in your article</p>
                        </div>

                    </div>
                    <p>Quotes</p>
                    <ToggleD label="on"
                        on="Enabled"
                        off="Disabled"
                    />
                    <p>If appropriate, we'll include<br />
                        quotes/tips/recommendations in your article.
                    </p>

                    {/*  */}
                    <div id="field-:r2u:-helptext" class="chakra-form__helper-text css-186pyma">
                        We'll generate content inspired on the knowledge base's assets.</div>
                </>


            )}
        </div>
    );
};

export default Formating;
