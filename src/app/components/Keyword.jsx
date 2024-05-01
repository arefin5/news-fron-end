import React from 'react';

const Keyword = () => {
    return (
        <div className="chakra-form-control css-1kxonj9"> {/* Outer div class */}
            <label htmlFor="field-:ri:" className="chakra-form__label css-g6pte">Include Exact Keywords (1 per line)</label> {/* Label */}
            <textarea
                name="includeKeywords"
                placeholder="how to bake bread"
                id="field-:ri:"
                className="form-control css-1yz2t1d"
                aria-describedby="field-:ri:-helptext"
            />
            <div id="field-:ri:-helptext" className="chakra-form__helper-text css-186pyma"> {/* Helper text */}
                We will <b>force-feed</b> these keywords to the article. We'll try to include them exactly as you've written them.<br />
                Make sure the keywords are related to the article's topic and do not contain typos.
            </div>
        </div>
    );
}

export default Keyword;
