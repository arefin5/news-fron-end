// "use client"
// import React, { useEffect, useState } from 'react';
// import OpenAI from "openai";

// const HomePage = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');

//   useEffect(() => {
//     async function main() {
//       try {
//         const openai = new OpenAI({
//           apiKey: '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',
//           dangerouslyAllowBrowser: true 
//         });

//         const completion = await openai.chat.completions.create({
//           messages: [
//             {
//               role: "system",
//               content: "You are a helpful assistant designed to output JSON.",
//             },
//             { role: "user", content: "Who won the world series in 2020?" },
//           ],
//           model: "gpt-3.5-turbo-0125",
//           response_format: { type: "json_object" },
//         });

//         console.log(completion.choices[0].message.content);
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }

//     main();
//   }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

//   return (
//     <>
//       {/* Your component JSX */}
//     </>
//   );
// }

// export default HomePage;

import React from 'react';
import WordPressT from '../components/WordPressT';

const Page = () => {
    return (
        <div>
            <WordPressT/>
        </div>
    );
}

export default Page;

