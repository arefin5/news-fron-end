
"use client"
import { useState } from "react";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const Content = () => {
    const [selectedCountry, setSelectedCountry] = useState('Czech Republic');

  const [openIndex, setOpenIndex] = useState(-1);
  const [openIndext, setOpenIndext] = useState(-1);
  const [openIndexth, setOpenIndexth] = useState(-1);
  const [category, setCategory] = useState('title');


  const countries = [
    'Select Your Country',
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Congo {Democratic Rep}', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland {Republic}', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar, {Burma}', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'St Kitts & Nevis', 'St Lucia', 'Saint Vincent & the Grenadines', 'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  const handleSelectChange = (e) => {
    setSelectedCountry(e.target.value);
  };
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
      <div className="max-w-3xl mx-auto md:py-20 px-10">
        <div className="mb-6">
          {/*  */}
          <div className='bg-white'>
            <div
              className={`flex justify-between items-center cursor-pointer p-3 font-light ${openIndex === 0 ? 'bg-min/10 shadow-md' : 'border-y'
                }`}
              onClick={() => handleToggle(0)}
            >
              <h4 className="text-base">
                <span className="bg-s"></span>
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
                  <div className="w-full">
                    <h1>
                      Country
                    </h1>
                    <select
                      className="border rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                      value={selectedCountry}
                      onChange={handleSelectChange}
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </div>




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
          {/*  */}
          <div className='bg-white'>
            <div
              className={`flex justify-between items-center cursor-pointer p-3 font-light ${openIndext === 1 ? 'bg-min/10 shadow-md' : 'border-y'
                }`}
              onClick={() => handleTogglet(1)} // Change the index to 1
            >
              <h4 className="text-base">FAQ 2</h4> {/* Correct the label to FAQ 2 */}
              <svg
                className={`w-4 h-4 transition-transform transform ${openIndext === 1 ? 'rotate-180' : 'rotate-0'
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
              >
                <path fill="currentColor"
                  d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
              </svg>
            </div>
            {openIndext === 1 && (
              <input
                type="text"
                className="text-gray-700 p-2 m-2 border border-gray-300 rounded-md"
                placeholder="Enter text"
              />
            )}
          </div>
          {/*  */}
          <div className='bg-white'>
            <div
              className={`flex justify-between items-center cursor-pointer p-3 font-light ${openIndexth === 2 ? 'bg-min/10 shadow-md' : 'border-y'
                }`}
              onClick={() => handleToggleth(2)} // Change the index to 1
            >
              <h4 className="text-base">FAQ 3</h4> {/* Correct the label to FAQ 2 */}
              <svg
                className={`w-4 h-4 transition-transform transform ${openIndexth === 2 ? 'rotate-180' : 'rotate-0'
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
              >
                <path fill="currentColor"
                  d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z" />
              </svg>
            </div>
            {openIndexth === 2 && (
              <input
                type="text"
                className="text-gray-700 p-2 m-2 border border-gray-300 rounded-md"
                placeholder="Enter text"
              />
            )}
          </div>
          {/*  */}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Content;
