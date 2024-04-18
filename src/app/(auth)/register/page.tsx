"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Toggle from "@/components/Toggle";
import { useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import useApiRequest from '@/components/useApiRequest';
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('Czech Republic');
  const [name, setName] = useState<string>(' ');
  const [email, setEmail] = useState<string>(' ');
  const [password, setPassword] = useState<string>(' ');
  const { responseData, error, loading, makeRequest } = useApiRequest();
  const router = useRouter();

  const countries = [
    'Select Your Country',
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua & Deps', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Central African Rep', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Congo {Democratic Rep}', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland {Republic}', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar, {Burma}', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russian Federation', 'Rwanda', 'St Kitts & Nevis', 'St Lucia', 'Saint Vincent & the Grenadines', 'Samoa', 'San Marino', 'Sao Tome & Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  interface ApiResponse {
    success: boolean;
    message: string;
    // Add other fields as per your API response
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };
  const handleSubmite = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const country = selectedCountry;
    makeRequest({
      url: "http://localhost:4000/api/register", requestData:
      {
        name,
        password,
        email,
        country,
        selectedCountry
      }
    })
  console.log(responseData)
if(error){
  toast.error(error);

}else{
  toast.success("Create Account Succssfully");
  router.push("/login")
}
  }
  return (
    <>
      <div className=" ">
        <div className="flex flex-col md:flex-row h-screen">

          <div className="w-full h-full overflow-y-auto flex flex-col justify-center items-center md:w-1/2 bg-white">
            <div className="max-w-lg w-full">
              <h3 className="text-center font-bold text-3xl drop-shadow-2xl text-gray-700 mb-6">
                Welcome Back to <br />
                <Link
                  href="/"
                  className="text-blue-500"
                >
                  Textory
                </Link>
              </h3>
              <p className="uppercase text-center mb-3 font-light text-sm">
                CONTINUE WITH YOUR SOCIAL MEDIA ACCOUNT
              </p>
              <div className="flex md:flex-row flex-col text-sm font-light items-center md:space-x-4 md:space-y-0 space-y-4 px-6 md:px-0 w-full">
                <Link
                  href="/"
                  className="border rounded-xl py-2 w-full flex items-center justify-center">
                  <Icon icon="logos:facebook" className='mr-2' fontSize={25} />
                  Facebook
                </Link>
                <Link
                  href="/"
                  className="border rounded-xl py-2 w-full flex items-center justify-center">
                  <Icon icon="flat-color-icons:google" className='mr-2' fontSize={25} />
                  Google
                </Link>
                <Link
                  href="/"
                  className="border rounded-xl py-2 w-full flex items-center justify-center">
                  <Icon icon="openmoji:apple" className='mr-2' fontSize={25} />
                  Apple
                </Link>
              </div>

              <p className="uppercase text-center my-3 font-light text-sm">
                OR REGISTER WITH EMAIL
              </p>
              <div className="flex flex-col justify-center items-center px-4">
                <form onSubmit={handleSubmite} className="flex flex-col justify-center items-center px-4">
 <ToastContainer/>
                  <div className="w-full">
                    <h1>
                      Full Name
                    </h1>
                    <input
                      type="text"
                      className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      placeholder="First and Last Names"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <h1>
                      Email Address
                    </h1>
                    <input
                      type="email"
                      className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                      name="email"
                      placeholder="Email Address"

                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
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
                  <div className="w-full">
                    <h1>
                      Password
                    </h1>
                    <input
                      type="password"
                      className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                      name="password"
                      placeholder="Password"
                      required
                      value={password}

                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-wrap items-center w-full my-3 space-x-2 leading-normal">
                    <Toggle label="on" />
                    <span className="text-xs">
                      By continuing, I agree with your
                    </span>
                    <Link
                      className="text-blue-500 text-xs"
                      href="/"
                    >
                      Terms and Conditions
                    </Link>
                    <span className="text-xs">
                      and
                    </span>
                    <Link
                      className="text-blue-500 text-xs"
                      href="/"
                    >
                      Privacy Policies
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white font-bold hover:bg-gray-700 rounded-full px-20 py-2"
                  >
                    Sign Up
                  </button>
                </form>

                <p
                  className="text-xs text-muted pt-5 mb-0"
                >
                  New to  <Link href="/">Textory?</Link>
                </p>
                <Link
                  href="/login"
                  className="font-bold"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full md:flex flex-col justify-center items-center hidden bg-[linear-gradient(230deg,_#007bff,_#000)] bg-[length:300%_300%]">
            <Image
              src="/login.png"
              width={600}
              height={600}
              alt='hero'
              className=''
            />
          </div>
        </div>
      </div>
    </>
  );
}