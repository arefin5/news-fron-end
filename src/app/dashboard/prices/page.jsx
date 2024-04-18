import Prices from "../../components/Prices";

import Link from "next/link";

export default function Home() {
    return (
      <>
        <Prices
          sub="VARIOUS SUBSCRIPTION PLANS"
          title="Most competitive prices are guaranteed"
          dec="Do you need a customized plan? Do not hesitate to contact us."
          items={[
            {
              title: "Monthly Plans",
              content:
              <>
                <h3 className="md:text-xl text-xl leading-snug text-gray-700 text-center font-bold my-10 block">
                  Subscribe to our Monthly Subscription Plans and enjoy ton of benefit
                </h3>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-6 w-full'>
                  <div className="px-6 py-10 rounded-2xl border-2 bg-white text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 relative py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <p className=" absolute right-0 top-0 bg-min text-white font-bold py-1 px-6 rounded-tr-xl rounded-bl-xl">
                      Most Popular
                    </p>
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
            },
            {
              title: "Yearly Plans",
              content:
              <>
                <h3 className="md:text-xl text-xl leading-snug text-gray-700 text-center font-bold my-10 block">
                  Subscribe to our Yearly Subscription Plans and enjoy ton of benefit
                </h3>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-6 w-full'>
                  <div className="px-6 py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 relative py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <p className=" absolute right-0 top-0 bg-min text-white font-bold py-1 px-6 rounded-tr-xl rounded-bl-xl">
                      Most Popular
                    </p>
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                  <div className="px-6 py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
            },
            {
              title: "Lifetime Plans",
              content:
              <>
                <h3 className="md:text-xl text-xl leading-snug text-gray-700 text-center font-bold my-10 block">
                  Subscribe to our Lifetime Subscription Plans and enjoy ton of benefit
                </h3>
                <div className='grid md:grid-cols-4 grid-cols-1 justify-center gap-6 w-full'>
                  <div className="px-6 py-10 rounded-2xl border-2 text-gray-500 group font-light text-sm hover:shadow-xl hover:border-blue-500">
                    <h1 className="text-xl text-blue-500 font-bold text-center">START</h1>
                    <p className="text-center my-4 block">
                      Startovací balíček pro uživatele generující malé obsahy
                    </p>
                    <p className="md:text-4xl text-2xl font-extrabold group-hover:text-blue-500 text-black text-center mb-0">
                      490 Kč
                    </p>
                    <p className="fs-12 text-center mb-3">CZK / Month</p>
                    <Link
                      href="/"
                      className="bg-min text-white font-bold text-xl rounded-full py-2 px-6 my-6 block"
                    >
                      Subscribe Now
                    </Link>
                    <p className="text-center mb-3" />
                    <ul className="">
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">20000</span>
                        <span className="plan-feature-text">words / month</span>
                        <div className="text-xs mx-4">Pro práci s textem</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">500</span>
                        <span className="plan-feature-text">images / month</span>
                        <div className="small2 mx-4">Pro práci s obrázky</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">60</span>
                        <span className="plan-feature-text">minutes / month</span>
                        <div className="small2 mx-4">Pro přepis nahrávek</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">1000</span>
                        <span className="plan-feature-text">characters / month</span>
                        <div className="small2 mx-4">Pro vytváření Ai hlasů</div>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="font-bold mr-1">3</span>
                        <span className="plan-feature-text">team members</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Chats Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Images Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Voiceover Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Speech to Text Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">AI Code Feature</span>
                      </li>
                      <li className="mb-3">
                        <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        <span className="plan-feature-text">Team Members Option</span>
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg> přístup ke
                        všem šablonám
                      </li>
                      <li className="mb-3">
                      <svg className="w-6 h-6 mr-1 text-green-500 float-left" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                        zákaznická podpora
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
            },
          ]}
        />
      </>
  );
}