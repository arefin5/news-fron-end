import React from 'react';

const Instraction = () => {
    return (
        <div className="chakra-form-control css-9jg2do">
            <label htmlFor="field-:rh:" className="chakra-form__label css-kj416w"> 
                <div className="chakra-stack css-1igwmid"> 
                    <p className="chakra-text css-1rr4qq7">Custom Instructions</p> {/* Text */}
                    <span className="css-icqrzr">Advanced</span> {/* Advanced */}
                </div>
            </label>
            <textarea
                name="customPrompt"
                maxLength="250"
                placeholder="Short and punchy phrases."
                id="field-:rh:"
                className="form-control css-1yz2t1d" 
                aria-describedby="field-:rh:-helptext"
            />
            <div id="field-:rh:-helptext" className="chakra-form__helper-text css-186pyma"> {/* Helper text */}
                We'll use these instructions to generate each paragraph. <br />
                These instructions <b>do not affect the headings</b>.<br />
                Misuse of this feature might lead to erroneous or repeated content.
            </div>
        </div>
    );
}

export default Instraction;
