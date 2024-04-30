
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
  const [openIndexLang, setOpenIndexLang] = useState(-1); // Add state for language list


  const languages = [
    "English",
    "Spanish",
    "French",
    "Chinese (Mandarin)",
    "Hindi",
    "Arabic",
    "Bengali",
    "Russian",
    "Portuguese",
    "Urdu",
    "Indonesian",
    "German",
    "Japanese",
    "Swahili",
    "Italian",
    "Turkish",
    "Korean",
    "Vietnamese",
    "Tamil",
    "Telugu",
    "Marathi",
    "Thai",
    "Persian (Farsi)",
    "Filipino (Tagalog)",
    "Polish",
    "Dutch",
    "Yoruba",
    "Ukrainian",
    "Malay",
    "Romanian",
    "Kurdish",
    "Sinhala",
    "Amharic",
    "Finnish",
    "Hungarian",
    "Czech",
    "Greek",
    "Swedish",
    "Bulgarian",
    "Danish",
    "Slovak",
    "Norwegian",
    "Lithuanian",
    "Latvian",
    "Estonian",
    "Slovenian",
    "Croatian",
    "Serbian",
    "Bosnian",
    "Macedonian",
    "Albanian",
    "Icelandic",
    "Irish",
    "Welsh",
    "Gaelic (Scottish)",
    "Hawaiian",
    "Maori",
    "Fijian",
    "Tahitian",
    "Samoan",
    "Guarani",
    "Quechua",
    "Aymara",
    "Mapudungun",
    "Nahuatl",
    "Mayan languages",
    "Haitian Creole",
    "Frisian",
    "Luxembourgish",
    "Maltese",
    "Greenlandic",
    "Inuktitut",
    "Cherokee",
    "Navajo",
    "Hopi",
    "Innu-aimun",
    "Cree",
    "Mohawk",
    "Ojibwe",
    "Wolof",
    "Zulu",
    "Xhosa",
    "Sesotho",
    "Tswana",
    "Somali",
    "Kinyarwanda",
    "Chichewa",
    "Tigrinya",
    "Akan",
    "Ganda",
    "Susu",
    "Lingala",
    "Kirundi",
    "Kikuyu",
    "Oromo",
    "Tigrinya",
    "Gujarati",
    "Malayalam",
    "Punjabi",
    "Kannada",
    "Assamese",
    "Oriya",
    "Gujarati",
    "Konkani",
    "Manipuri",
    "Sanskrit",
    "Nepali",
    "Sindhi",
    "Assamese",
    "Dari",
    "Pashto",
    "Balochi",
    "Sindhi",
    "Fijian Hindi",
    "Fijian Punjabi",
    "Fijian Tamil",
    "Palauan",
    "Marshallese",
    "Kiribati",
    "Nauruan",
    "Tok Pisin",
    "Hiri Motu",
    "Pijin",
    "Bislama",
    "Solomon Islands Pijin",
    "Samoan",
    "Cook Islands Māori",
    "Tongan",
    "Niuean",
    "Tuvaluan",
    "Tokelauan",
    "Māori",
    "Rapa Nui",
    "Rarotongan",
    "Rotuman",
    "Nukuoro",
    "Nukumanu",
    "Takuu",
    "Mortlockese",
    "Kapingamarangi",
    "Nukuoro",
    "Nukumanu",
    "Takuu",
    "Mortlockese",
    "Kapingamarangi",
    "Pohnpeian",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Marshallese",
    "Kwajalein",
    "Maloelap",
    "Woleaian",
    "Pingelapese",
    "Satawalese",
    "Mokilese",
    "Ulithian",
    "Woleaian",
    "Pingelapese",
    "Satawalese",
    "Mokilese",
    "Ulithian",
    "Hawaiian",
    "Samoan",
    "Tahitian",
    "Tongan",
    "Māori",
    "Rapa Nui",
    "Cook Islands Māori",
    "Rarotongan",
    "Niuean",
    "Tokelauan",
    "Tuvaluan",
    "Marshallese",
    "Kwajalein",
    "Maloelap",
    "Woleaian",
    "Pingelapese",
    "Satawalese",
    "Mokilese",
    "Ulithian",
    "Woleaian",
    "Pingelapese",
    "Satawalese",
    "Mokilese",
    "Ulithian",
    "Samoan",
    "Futunan",
    "Wallisian",
    "Rapa",
    "Rennellese",
    "Nengone",
    "Drehu",
    "Ajië",
    "Tjwao",
    "Lifou",
    "Hmong",
    "Mien",
    "Karen",
    "Chin",
    "Mizo",
    "Khasi",
    "Garo",
    "Pangasinan",
    "Ibanag",
    "Tausug",
    "Surigaonon",
    "Waray-Waray",
    "Kapampangan",
    "Pangasinan",
    "Ibanag",
    "Tausug",
    "Surigaonon",
    "Waray-Waray",
    "Kapampangan",
    "Pangasinan",
    "Ibanag",
    "Tausug",
    "Surigaonon",
    "Waray-Waray",
    "Kapampangan",
    "Pangasinan",
    "Ibanag",
    "Tausug",
    "Surigaonon",
    "Waray-Waray",
    "Kapampangan",
    "Pangasinan",
    "Ibanag",
    "Tausug",
    "Surigaonon",
    "Waray-Waray",
    "Kapampangan",
    "Ilocano",
    "Tboli",
    "Ivatan",
    "Kankanaey",
    "Yakan",
    "Aklanon",
    "Hiligaynon",
    "Ilonggo",
    "Bikol",
    "Tausug",
    "Maguindanao",
    "Maranao",
    "Manobo",
    "Tagalog",
    "Cebuano",
    "Visayan",
    "Bisaya",
    "Dagatnon",
    "Karay-a",
    "Capiznon",
    "Kinaray-a",
    "Surigaonon",
    "Waray-Waray",
    "Cuyonon",
    "Chavacano",
    "Yakan",
    "Maguindanao",
    "Maranao",
    "Tausug",
    "Chamorro",
    "Carolinian",
    "Belauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
    "Marshallese",
    "Kosraean",
    "Chuukese",
    "Yapese",
    "Palauan",
  ];


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
  const handleToggleLang = (e) => {
    setOpenIndexLang(e.target.value);

  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    console.log(selectedCategory);
    // console.log(category)
  };
  return (
    <div>
      <div className="max-w-3xl mx-auto md:py-20 px-10">
        <div className="mb-6">
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

{/*  */}
  <div className="mb-1">
                  <label className="form-label"><b>Target Country
</b> </label>
                  <div className="w-full">
                   
                    <select
                      className="border rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                      value={openIndexLang}
                      onChange={handleToggleLang}
                    >
                    {languages.map((language, index) => (
                        <option key={index} value={language}>
                          {language}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p>Each option provides a different way to generate content.
                  </p>
                </div>

{/*  */}

              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
