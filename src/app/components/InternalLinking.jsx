
"use client"
import { useState } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PointOfview from "./PointOfview";
import Instraction from "./Instraction";
import Keyword from "./Keyword";
import Toggle from "./Toggle";
import ToggleD from "./ToggleD";

const InternalLinking = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const handleToggle = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };


    const [value, setValue] = useState(0);
    const handleChange = (e) => {
        setValue(parseFloat(e.target.value));
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
                    Internal Linking</h4> {/* Correct the label to FAQ 2 */}
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
                    <p>Sitemaps</p>
                    <div className="flex justify-between p-3 items-center">

                        {/*  */}
                        <div>
                            <p>URL
                            </p>
                            <button type="button" class="chakra-button css-1csoi55">
                                <span class="chakra-button__icon css-1wh2kri">
                                    <svg stroke="currentColor" fill="currentColor"
                                        stroke-width="0" viewBox="0 0 512 512"
                                        aria-hidden="true" focusable="false"
                                        height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z">

                                        </path></svg></span>Add Sitemap</button>
                            <p>Example Sitemap:
                            </p>
                            <a href="https://www.wpbeginner.com/sitemap.xml.">
                                https://www.wpbeginner.com/sitemap.xml.

                            </a>
                        </div>
                        {/*  */}
                        <div>
                            <p>Filter Pattern</p>
                            <br />
                            <br />
                            <p>Optional. We will only use URLs from the sitemap that contain this pattern. Use a comma , to separate multiple patterns.

                                Examples: /my-category/, /blog/.</p>

                        </div>
                        {/*  */}
                        <div>
                            <p>Exclude Pattern
                            </p>
                            <p>
                                Optional. We will exclude any URLs that contain the exclude pattern.

                                We will give you a preview of all the internal links that will be placed in your article.
                            </p>
                        </div>

                    </div>


                    <button type="button"
                        class="chakra-button css-q66ae0"
                        disabled="">Test &amp; Preview Links</button>
                    <br />
                    <br />
                    <p>We will give you a preview of all the internal links that will be placed in your article.
                    </p>

                    <br />
                    <br />


                    {/*  */}
                    <label className="form-label">Link Density</label>

                    <input
                        type="range"
                        min="0"
                        max="600"
                        step="25"
                        value={value}
                        onChange={handleChange}
                        className="custom-range w-100"
                        id="customRange1"
                    />
                    <div className="value">{value}</div>
                    {/*  */}
                    <div className="d-flex justify-content-between">
                        <p className="chakra-text css-1rr4qq7">
                            No Link
                        </p>
                        <p className="chakra-text css-0">
                        This also affects the External Links.

                        </p>
                    </div>

                    <p>

                    </p>
                    {/*  */}
                </>


            )}
        </div>
    );
};

export default InternalLinking;
