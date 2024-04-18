"use client";
import { Icon } from '@iconify/react';
import Footer from "../..//components/Footer";
import Header from "../..//components/Header";
import Link from "next/link";

export default function Home() {
    return (
      <>
        <Header />
        <div className=" max-w-screen-xl mx-auto md:px-10 px-2">
          <div className="flex items-center flex-col md:flex-row flex-wrap my-20">
            <div className="w-full md:w-6/12 md:pr-10">
              <h1 className="md:text-4xl text-xl font-bold my-6">
              Contact With Us
              </h1>
              <p className="text-lg font-light leading-8">
              Did not find the answers in our dokumentaci  or need help, do not hesitate to contact us. We are here for you and will be happy to provide you with any support. Just send us an e-mail or use the support request section in your user account.
              </p>
              <ul className="row gy-4 pt-4">
                <li className="w-full">
                  <h3 className="text-xl font-bold my-3">Email</h3>
                  <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                    <i className="fa-solid fa-envelope" style={{ color: "#0066ff" }} /> 
                    <span>zdravicko@textory.cz</span>
                  </div>
                </li>
                <li className="w-full">
                  <h3 className="text-xl font-bold my-3">Social media</h3>
                  <div className='flex items-center mt-4 space-x-2 text-blue-500'>
                    <Link
                        href="/"
                    >
                        <Icon
                            icon="ic:baseline-tiktok"
                            className='mr-2'
                            fontSize={25}
                        />
                    </Link>
                    <Link
                        href="/"
                    >
                        <Icon
                            icon="mdi:youtube"
                            className='mr-2'
                            fontSize={25}
                        />
                    </Link>
                    <Link
                        href="/"
                    >
                        <Icon
                            icon="mdi:instagram"
                            className='mr-2'
                            fontSize={25}
                        />
                    </Link>
                    <Link
                        href="/"
                    >
                        <Icon
                            icon="ic:baseline-facebook"
                            className='mr-2'
                            fontSize={25}
                        />
                    </Link>
                </div>
                </li>
                <li className="w-full">
                  <h3 className="text-xl font-bold my-3">Company</h3>
                  <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start">
                    <i className="fa-solid fa-briefcase" style={{ color: "#0066ff" }} />
                    
                    <span>Klvaň corps s.r.o. IČ: 09350845</span>
                  </div>
                </li>
              </ul>

            </div>
            <div className="w-full md:w-6/12">
              <h1 className="text-xl font-semibold my-6">
                Feel free to contact us using the form
              </h1>
              <div className="w-full">
                <input
                  type="text"
                  className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                  placeholder="Last Name"
                />
                <input
                  type="email"
                  className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                  placeholder="Email Address"
                  required
                />
                <input
                  type="tal"
                  className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                  placeholder="Phone Number"
                />
                <textarea
                  className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                  rows={4}
                  placeholder="Message"
                >
                </textarea>
              </div>
              <Link
                href="/"
                className="bg-blue-500 text-white font-bold hover:bg-gray-700 rounded-xl px-10 py-3 mt-6 inline-flex"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
}