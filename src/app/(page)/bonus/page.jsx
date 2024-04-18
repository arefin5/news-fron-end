"use client";
import { Icon } from '@iconify/react';
import Footer from "../..//components/Footer";
import Header from "../..//components/Header";
import Image from "next/image";
import Link from "next/link";
import Scroll from '../..//components/Scroll';

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
                            src="/sm.png"
                            width={600}
                            height={600}
                            alt='hero'
                            className=''
                        />
                    </div>
                    <div className="w-full md:w-2/4 space-y-6">
                        <h1 className="md:text-4xl text-3xl text-center md:text-left text-white font-extrabold leading-snug block">
                        Earn money by Social Media <br />
                        The Power of Social Media Marketing
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
            <h1 className='text-xl font-semibold'>Leveraging Social Media to Promote Your Website: A Strategic Approach for Bonus Credits</h1>
            <p>In the ever-evolving landscape of online presence, marketing your website effectively is crucial for attracting the right audience and boosting visibility. One powerful avenue for achieving this is through social media platforms. In this article, we will explore the concept of marketing your website on social media and how it can lead to bonus credits for your efforts.</p>
            <h3 className='text-xl font-semibold'>The Power of Social Media Marketing</h3>
            <p>Social media platforms have become indispensable tools for businesses and individuals alike to connect, engage, and promote their products or services. With billions of users across various platforms, social media provides a vast and diverse audience to tap into.</p>
            <h4>1. <strong>Identify Your Target Audience:</strong>
            </h4>
            <p>Before diving into social media marketing, its essential to identify your target audience. Understanding the demographics, interests, and behaviors of your potential users will help tailor your marketing strategies to resonate with them effectively.</p>
            <h4>2. <strong>Create Compelling Content:</strong>
            </h4>
            <p>Content is king in the realm of social media. Develop engaging and shareable content that highlights the unique aspects of your website concept. This could include informative articles, visually appealing graphics, or captivating videos.</p>
            <h4>3. <strong>Choose the Right Platforms:</strong>
            </h4>
            <p>Not all social media platforms are created equal. Depending on your target audience, choose the platforms that align with your goals. For example, if your website concept is visually oriented, platforms like Instagram and Pinterest might be ideal.</p>
            <h4>4. <strong>Consistent Branding:</strong>
            </h4>
            <p>Maintain a consistent brand image across all your social media channels. This includes using the same logo, color scheme, and tone of voice. Consistency fosters recognition and trust among your audience.</p>
            <h3>Bonus Credits Incentive</h3>
            <p>To add an extra layer of motivation, consider offering bonus credits to individuals who actively participate in promoting your website on social media. This can be achieved through a simple yet effective process:</p>
            <h4>1. <strong>Share a Marketing Link:</strong>
            </h4>
            <p>Provide a unique marketing link to your audience. This link could lead to a landing page on your website or a specific promotion page.</p>
            <h4>2. <strong>Promote the Link on Social Media:</strong>
            </h4>
            <p>Encourage your audience to share the marketing link on their social media profiles. This could be accompanied by a call-to-action, explaining the benefits of your website and the bonus credits incentive.</p>
            <h4>3. <strong>Verify Shares on WhatsApp:</strong>
            </h4>
            <p>To streamline the process, request participants to send screenshots or links of their social media shares via WhatsApp. This allows you to track and verify their efforts.</p>
            <h4>4. <strong>Award Bonus Credits:</strong>
            </h4>
            <p>Once verified, fulfill your promise by awarding bonus credits to those who actively participated. This not only incentivizes current users but also attracts new ones through the power of word-of-mouth marketing.</p>
            <h3 className='text-xl font-semibold'>Conclusion</h3>
            <p>In conclusion, marketing your website concept on social media can be a game-changer in expanding your online presence. By strategically leveraging the power of social platforms and adding an extra incentive like bonus credits, you can turn your audience into active advocates, leading to increased visibility and engagement for your website. So, embrace the social media wave, share your unique website concept, and watch as your online community grows, bringing with it the potential for bonus credits and increased success.</p>

          </div>
        </div>
        <Footer />
      </>
  );
}