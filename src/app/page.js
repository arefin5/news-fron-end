
"use client";
import { Icon } from '@iconify/react';
import Does from "./components/Does";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Heros from './components/Heros';
import Scroll from './components/Scroll';
import Review from './components/Review';
import Header from './components/Header';
import Footer from './components/Footer';
import Partner from './components/Partner';
import Questions from './components/Questions';
import UserInfo from './components/UserInfo';
import Image from "next/image";
import axios from "axios"
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';
export default function Home() {
  const [toph, setToph] = useState([]);
  const [work, setWork] = useState([]);
  const [subdata, setSubdata] = useState(null); // Initialize subdata state
  const [wtitle, setwtitle] = useState(null);

  useEffect(() => {
    fetchTopCard();
    fetchWork();
    fetchWorkCard();
  }, [toph, work]);

  const fetchTopCard = async () => {
    try {
      const response = await axios.get("/get-top");
      setToph(response.data.top);
      // console.log("data users", response.data.top);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchWork = async () => {
    try {
      const response = await axios.get("/get-work-top");
      const title = response.data.work[0].title
      const sub = response.data.work[0].subtitle + response.data.work[0].subtitle1;
      setwtitle(title)
      setSubdata(sub);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchWorkCard = async () => {
    try {
      const response = await axios.get("/get-work-card");
      setWork(response.data.workcard)

    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      <Header />

      <Scroll />
      <Suspense fallback={<Loading/>}>
      {toph && (
        <div>
          {toph.map(item => (
            <div key={item._id}>
              <Hero data={item} />

            </div>
          ))}
        </div>
      )}
      <>
      {
        work ?
          (
            <Does
              sub={subdata}
              title={wtitle}
              items={work}
            />
          ):null
     }
      </>
      </Suspense>
      <Tabs
        sub="FEATURES OVERVIEW"
        title="What can artificial intelligence do?"
        items={[
          {
            title: <h1>Creation of content</h1>,
            icon: <Icon
              icon="material-symbols:bolt"
              className='mr-2'
              fontSize={25}
            />,
            content:
              <>
                <div className='flex flex-col md:flex-row-reverse items-center w-full'>
                  <div className='w-full md:w-3/6'>
                    <Image
                      src="/tabs/1.webp"
                      width={600}
                      height={600}
                      alt='hero'
                      className='mb-4 md:mb-0'
                    />
                  </div>
                  <div className='w-full md:w-3/6 md:mr-14 space-y-6'>
                    <h4 className="text-lg font-bold mb-2">
                      Artificial intelligence will help you create texts
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Describe what you want to write about and artificial intelligence will generate a text for you based on the specified criteria.
                    </p>
                    <ul className="flex flex-col space-y-3">
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Choose from dozens of templates for easy writing.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          The resulting text can be generated in +35 languages.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Generation of several variants at once incl. tone of voice (informal, professional, funny...).
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>Easy editing of the generated text thanks to the built-in text editor.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Export to a .pdf, .doc (Word), .txt file, etc.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
          },
          {
            title: <h1>Generating images</h1>,
            icon: <Icon
              icon="material-symbols:bolt"
              className='mr-2'
              fontSize={25}
            />,
            content:
              <>
                <div className='flex flex-col md:flex-row-reverse items-center w-full'>
                  <div className='w-full md:w-3/6'>
                    <Image
                      src="/tabs/2.webp"
                      width={600}
                      height={600}
                      alt='hero'
                      className='mb-4 md:mb-0'
                    />
                  </div>
                  <div className='w-full md:w-3/6 md:mr-14 space-y-6'>
                    <h4 className="text-lg font-bold mb-2">
                      Artificial intelligence will help you create texts
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Describe what you want to write about and artificial intelligence will generate a text for you based on the specified criteria.
                    </p>
                    <ul className="flex flex-col space-y-3">
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Choose from dozens of templates for easy writing.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          The resulting text can be generated in +35 languages.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Generation of several variants at once incl. tone of voice (informal, professional, funny...).
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>Easy editing of the generated text thanks to the built-in text editor.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Export to a .pdf, .doc (Word), .txt file, etc.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
          },
          {
            title: <h1>Creation of content</h1>,
            icon: <Icon
              icon="material-symbols:bolt"
              className='mr-2'
              fontSize={25}
            />,
            content:
              <>
                <div className='flex flex-col md:flex-row-reverse items-center w-full'>
                  <div className='w-full md:w-3/6'>
                    <Image
                      src="/tabs/3.webp"
                      width={600}
                      height={600}
                      alt='hero'
                      className='mb-4 md:mb-0'
                    />
                  </div>
                  <div className='w-full md:w-3/6 md:mr-14 space-y-6'>
                    <h4 className="text-lg font-bold mb-2">
                      Artificial intelligence will help you create texts
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Describe what you want to write about and artificial intelligence will generate a text for you based on the specified criteria.
                    </p>
                    <ul className="flex flex-col space-y-3">
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Choose from dozens of templates for easy writing.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          The resulting text can be generated in +35 languages.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Generation of several variants at once incl. tone of voice (informal, professional, funny...).
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>Easy editing of the generated text thanks to the built-in text editor.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Export to a .pdf, .doc (Word), .txt file, etc.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
          },
          {
            title: <h1>Creation of content</h1>,
            icon: <Icon
              icon="material-symbols:bolt"
              className='mr-2'
              fontSize={25}
            />,
            content:
              <>
                <div className='flex flex-col md:flex-row-reverse items-center w-full'>
                  <div className='w-full md:w-3/6'>
                    <Image
                      src="/tabs/4.webp"
                      width={600}
                      height={600}
                      alt='hero'
                      className='mb-4 md:mb-0'
                    />
                  </div>
                  <div className='w-full md:w-3/6 md:mr-14 space-y-6'>
                    <h4 className="text-lg font-bold mb-2">
                      Artificial intelligence will help you create texts
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Describe what you want to write about and artificial intelligence will generate a text for you based on the specified criteria.
                    </p>
                    <ul className="flex flex-col space-y-3">
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Choose from dozens of templates for easy writing.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          The resulting text can be generated in +35 languages.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Generation of several variants at once incl. tone of voice (informal, professional, funny...).
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>Easy editing of the generated text thanks to the built-in text editor.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Export to a .pdf, .doc (Word), .txt file, etc.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
          },
          {
            title: <h1>Creation of content</h1>,
            icon: <Icon
              icon="material-symbols:bolt"
              className='mr-2'
              fontSize={25}
            />,
            content:
              <>
                <div className='flex flex-col md:flex-row-reverse items-center w-full'>
                  <div className='w-full md:w-3/6'>
                    <Image
                      src="/tabs/5.webp"
                      width={600}
                      height={600}
                      alt='hero'
                      className='mb-4 md:mb-0'
                    />
                  </div>
                  <div className='w-full md:w-3/6 md:mr-14 space-y-6'>
                    <h4 className="text-lg font-bold mb-2">
                      Artificial intelligence will help you create texts
                    </h4>
                    <p className="text-gray-600 text-lg">
                      Describe what you want to write about and artificial intelligence will generate a text for you based on the specified criteria.
                    </p>
                    <ul className="flex flex-col space-y-3">
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Choose from dozens of templates for easy writing.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          The resulting text can be generated in +35 languages.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Generation of several variants at once incl. tone of voice (informal, professional, funny...).
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>Easy editing of the generated text thanks to the built-in text editor.
                        </span>
                      </li>
                      <li>
                        <Icon
                          icon="tabler:circle-check-filled"
                          className='mr-2 text-blue-500 float-left'
                          fontSize={25}
                        />
                        <span>
                          Export to a .pdf, .doc (Word), .txt file, etc.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </>,
          },
        ]}
      />
      <Heros />

      <Review
        sub="TESTIMONIALS & REVIEWS"
        title="Be one of our <span class='text-blue-500'>Happy Customers?</span>"
        items={[
          {
            img: "/user/1.jpg",
            sub: "Musím pochválit Textory. Je to nástroj, který mi usnadňuje každodenní práci. S jeho pomocí vytvářím texty, které vypadají, jako by je psal profesionální copywriter. A to vše rychle a bez námahy. Díky tomu mám více času na jiné věci.",
            title: "Select a template for writing",
          },
          {
            img: "/user/1.jpg",
            sub: "Musím pochválit Textory. Je to nástroj, který mi usnadňuje každodenní práci. S jeho pomocí vytvářím texty, které vypadají, jako by je psal profesionální copywriter. A to vše rychle a bez námahy. Díky tomu mám více času na jiné věci.",
            title: "Select a template for writing",
          },
          {
            img: "/user/1.jpg",
            sub: "Musím pochválit Textory. Je to nástroj, který mi usnadňuje každodenní práci. S jeho pomocí vytvářím texty, které vypadají, jako by je psal profesionální copywriter. A to vše rychle a bez námahy. Díky tomu mám více času na jiné věci.",
            title: "Select a template for writing",
          },
          {
            img: "/user/1.jpg",
            sub: "Musím pochválit Textory. Je to nástroj, který mi usnadňuje každodenní práci. S jeho pomocí vytvářím texty, které vypadají, jako by je psal profesionální copywriter. A to vše rychle a bez námahy. Díky tomu mám více času na jiné věci.",
            title: "Select a template for writing",
          },
          {
            img: "/user/1.jpg",
            sub: "Musím pochválit Textory. Je to nástroj, který mi usnadňuje každodenní práci. S jeho pomocí vytvářím texty, které vypadají, jako by je psal profesionální copywriter. A to vše rychle a bez námahy. Díky tomu mám více času na jiné věci.",
            title: "Select a template for writing",
          },
        ]}
      />
      <Partner
        sub="OUR PARTNERS"
        items={[
          {
            img: "/partner/1.png",
          },
          {
            img: "/partner/2.png",
          },
          {
            img: "/partner/3.png",
          },
          {
            img: "/partner/2.png",
          },
          {
            img: "/partner/3.png",
          },
        ]}
      />

      <Questions
        sub="FREQUENTLY ASKED"
        title="Got questions? We have you covered."
        items={[
          {
            title: "Select a template for writing",
            content: "Tell the artificial intelligence what your article should be about in a few words and it will start writing it for you.",
          },
          {
            title: "Describe your topic",
            content: "Tell the artificial intelligence what your article should be about in a few words and it will start writing it for you.",
          },
          {
            title: "Create, edit and save",
            content: "Tell the artificial intelligence what your article should be about in a few words and it will start writing it for you.",
          },
        ]}
      />
      <Footer />
    </>
  );
}
