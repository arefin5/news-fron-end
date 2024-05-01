import React from 'react';

const PointOfview = () => {
    return (
        <div className="css-b8am6i d-flex justify-content-between"> {/* Outer div class */}
            <div className="chakra-form-control css-1kxonj9"> {/* First form group */}
                <label htmlFor="field-:rf:" className="chakra-form__label css-g6pte">Point of View</label>
                <div className="chakra-stack css-2xph3x"> {/* Bootstrap stack class */}
                    <div className="chakra-select__wrapper css-42b2qy"> {/* Bootstrap select wrapper class */}
                        <select
                            name="pointOfView"
                            id="field-:rf:"
                            className="form-select css-su0tvm w-50"
                            data-gtm-form-interact-field-id="0"
                        >
                            <option value="">Automatic</option>
                            <option value="first-plural">First Person Plural (we, us, our, ours)</option>
                            <option value="first-singular">First Person Singular (I, me, my, mine)</option>
                            <option value="second">Second Person (you, your, yours)</option>
                            <option value="third">Third Person (he, she, it, they)</option>
                        </select>
                     
                    </div>
                </div>
            </div>
            <div className="chakra-form-control css-1kxonj9"> {/* Second form group */}
                <label htmlFor="field-:rg:" className="chakra-form__label css-g6pte">Formality</label>
                <div className="chakra-stack css-2xph3x"> {/* Bootstrap stack class */}
                    <div className="chakra-select__wrapper css-42b2qy w-50"> {/* Bootstrap select wrapper class */}
                        <select
                            name="formality"
                            id="field-:rg:"
                            className="form-select css-su0tvm" 
                            aria-describedby="field-:rg:-helptext"
                            data-gtm-form-interact-field-id="1"
                        >
                            <option value="">Automatic</option>
                            <option value="formal">Formal</option>
                            <option value="informal">Informal</option>
                        </select>
                    
                    </div>
                    <div id="field-:rg:-helptext" className="chakra-form__helper-text css-186pyma"> {/* Bootstrap form helper-text class */}
                        Useful if selected language has both formal & informal verb conjugations.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PointOfview;
