
"use client"
import { useState } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import PointOfview from "./PointOfview";
import Instraction from "./Instraction";
import Keyword from "./Keyword";
import Toggle from "./Toggle";
import ToggleD from "./ToggleD";

const Structure = () => {
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
                    Structure</h4> {/* Correct the label to FAQ 2 */}
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
                    <label for="">Call-To-Action</label>

                    <input name="ctaUrl"
                        placeholder="https://mywebsite.com/"
                        class="chakra-input css-sn6odx"
                        id="field-:rv:"
                        value=""
                        aria-describedby="field-:rv:-helptext"
                        data-listener-added_092140f0="true">

                    </input>
                    <div className="flex justify-between p-3 items-center">

                        {/*  */}
                        <div>
                            <p>Key Takeaways
                            </p>
                            <ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />
                            <p>We'll add this section at the start of each article.
                            </p>
                        </div>
                        {/*  */}
                        <div>
                            <p>Conclusion</p>
                            <ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />
                            <p>We'll add this section at the end of each article.
                            </p>
                        </div>
                        {/*  */}
                        <div>
                            <p>FAQs
                            </p>
                            <ToggleD label="on"
                                on="Enabled"
                                off="Disabled"
                            />

                            <p>We'll add this section at the end of each article.
                            </p>
                        </div>

                    </div>
                    <div className="mb-3">
                        <label className="form-label">Article Size</label>
                        <select
                            className="form-select w-50"
                        >
                            <option value="large">Large(+1 credit)</option>
                            <option value="small">Small</option>
                            <option value="mediam">Medium</option>
                        </select>
                    </div>
                    <p>Automate Headings

                            </p>
                            <ToggleD label="on"
                                on="Auto-generated"
                                off="Custom"
                            />
                    {/*  */}
                  

                </>


            )}
        </div>
    );
};

export default Structure;
