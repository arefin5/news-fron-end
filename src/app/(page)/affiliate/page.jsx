"use client";
import { Icon } from '@iconify/react';
import Does from '../../components/Does';
import Footer from "../..//components/Footer";
import Header from "../..//components/Header";
import Image from "next/image";
import Link from "next/link";
import Scroll from '../../components/Scroll';
import GoogleImages from '@/app/components/GoogleImages';
import YouTubeSearch from '@/app/components/YouTubeSearch ';

export default function Home() {
    return (
      <>
        <Header />
        
        <Scroll />
        <div className="relative bg-[#1b1b3b] overflow-hidden">
            <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -top-2/4 -left-1/4 w-[800px] h-[800px] bg-[url('/bg/blur-n.png')]"></div>
            <div className="absolute md:block hidden bg-no-repeat bg-center bg-contain -bottom-2/4 -right-1/4 w-[1000px] h-[1000px] bg-[url('/bg/blur-o.png')]"></div>
            <div className="max-w-screen-xl relative mx-auto md:px-10 px-2 pb-20 pt-24">
                <div className="flex items-center flex-wrap md:flex-row-reverse">
                    <div className="w-full md:w-2/4 p-6 pt-0">
                        <Image
                            src="/affiliate.png"
                            width={600}
                            height={600}
                            alt='hero'
                            className=''
                        />
                    </div>
                    <div className="w-full md:w-2/4 space-y-6">
                        <h1 className="md:text-4xl text-3xl text-center md:text-left text-white font-extrabold leading-snug block">
                        Earn money by referring <br />
                        CoPilot to your friends
                        </h1>                        
                        <p className="md:text-sm text-xs text-center md:text-left text-white font-normal leading-normal">
                        You will get 25% commission and your friend will get 50K extra bonus Affpilot AI credit for any plan.
                        </p>
                        <ul className="flex flex-col space-y-3 text-white">
                            <li>
                            <Icon
                                icon="tabler:circle-check-filled"
                                className='mr-2 text-blue-500 float-left'
                                fontSize={25}
                            />
                            <span>
                            Weekly Payment (On Every Monday).
                            </span>
                            </li>
                            <li>
                            <Icon
                                icon="tabler:circle-check-filled"
                                className='mr-2 text-blue-500 float-left'
                                fontSize={25}
                            />
                            <span>
                            Minimum Withdraw $10 USD.
                            </span>
                            </li>
                            <li>
                            <Icon
                                icon="tabler:circle-check-filled"
                                className='mr-2 text-blue-500 float-left'
                                fontSize={25}
                            />
                            <span>
                            Payment Method: Payoneer, Wise, Bank, Paypal.
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto md:px-10 px-2">
          <div className="md:p-20 p-10 my-20 text-base leading-8 shadow-xl space-y-4">
            <h1 className='text-2xl font-bold'>Get 25% affiliate partnership commission from copilot just by referring!</h1>
            <p>In simple terms, you will receive 25% of the sales generated through your referral. For example, if a customer buys a package worth 10$ through your referral, you will earn 250$</p>
            <p>If you can generate 1 lakh taka in sales per month, you will earn 25$</p>
            <p>Login to <Link href="/">copilot</Link> and find your Referral Link on the dashboard. Share this link, and when someone clicks on your referral link and becomes an copilot customer, you will earn a 25% commission.</p>
            <p>copilot is a tool that makes starting a blogging and affiliate marketing career very easy!</p>
            <p>This tool automates a large amount of work, from writing articles to publishing on the website, making it highly popular. Promote it, and you will see a significant increase in sales, InshaAllah.</p>
            <p>Initially, you can promote it in three ways:</p>
            <ol className='list-disc ml-8'>
                <li>Share your referral link on your social media profiles such as Facebook, Twitter, Instagram, LinkedIn, Reddit, Quora, Gab, etc. with friends and followers.</li>
                <li>Share it in Facebook groups related to blogging, affiliate marketing, SEO, and writing.</li>
                <li>Write blog articles about copilot on your website and include the referral link in the article. 🥰</li>
            </ol>
          </div>
        </div>

        <GoogleImages />
        <YouTubeSearch/>
        <Footer />
      </>
  );
}