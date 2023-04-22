import weather from '../assets/img/weather.jpg'
import genie from '../assets/img/GenieGPT.png'
import gptExtension from '../assets/img/gpt-ext-demo.png'

export const projects = [
    {
        name: "ChatGPT Prompt Templater",
        description: "This is a Chrome Extension for ChatGPT that provides useful templates for your prompts by modifying the standard UI of the ChatGPT website. It will soon be available on the Chrome Web Store (for now you can see a short video demo by clicking 'website' down below in the 'check it out' section). Please keep in mind that since this is paid project done for a client, the code is private. The extension is written in JavaScript and uses React to render UI, Webpack for bundling, Tailwind CSS for styling and the so called 'headless' WordPress for backend.",
        learned: ["WebPack", "Tailwind CSS", "JQuery", "Promises in JS and error handling", "WordPress", "How JSX works 'under the hood', and how to build React apps without 'npx create-react-app'"],
        site: "https://vimeo.com/820089056?share=copy",
        content: () => {
            return <img src={gptExtension} alt="" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }}></img>
        }
    },
    {
        name: "GenieGPT",
        description: "GenieGPT is a Telegram bot designed to bring assistance, entertainment and humor to those who use the popular messaging platform. This bot is powered by the powerful GPT-3.5-turbo AI model from OpenAI. It can understand both written text and voice messages (transcription happens withing a fraction of a second), making it an extremely powerful and practical tool. Genie also has memory, meaning that you can refer to your previous messages, and the bot will understand you. The bot is written in python and hosten on AWS EC2. It can be found by its username: @GenieGPT_AI_bot",
        learned: ["Telegram API", "python-telegram-bot library", "OpenAI API", "Hosting on AWS EC2"],
        code: "https://github.com/IgorIvanter/gpt3.5-telegram-chatbot-voice-support",
        site: "https://t.me/GenieGPT_AI_bot",
        content: () => {
            return <img src={genie} alt="" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }}></img>
        }
    },
    // {
    //     name: "Online German textbook",
    //     description: "This is a website that will teach you the basics of German language (since in this country people don't speak JavaScript). The website consists of two modules: basic and advanced. The lessons provided will help you get the basic grammar and vocabluary fast, so that you can start speaking and having fun after a couple of days. I build this site from scratch, without any CSS library - and I ain't doing this again!:) But it helped me get A LOT more comfortable with CSS.",
    //     learned: ["Advanced CSS", "Linking multiple CSS files to one webpage", "Responsive design using media queries", "Animated hover effects", "Responsive grid layout", "CSS variables"],
    //     code: "https://github.com/IgorIvanter/free-german-course",
    //     site: "https://igorivanter.github.io/free-german-course/",
    //     content: () => {
    //         return <img src={german} alt="" style={{
    //             width: "100%",
    //             height: "100%",
    //             objectFit: "cover"
    //         }}></img>
    //     }
    // },
    {
        name: "Weather around the world",
        description: "This is a weather app. It allows you to search for a city (minimum population 0.5M people) and see the current weather there, as well as a weather forecast for the next 5 days (with an interval of 3 hours). For every timestamp, temperature, wind speed and a weather description (eg. snow, rain, clouds) is available. To build this app I used React. To retrieve information about the weather I used the openweathermap API.",
        learned: ["Basics of React: components, built-in and custom hooks, conditional rendering, context, data flow via props, rendering multiple components using Array.map(), inline styling, JSX and how it's transpiled to JS, etc.", "API requests using 'fetch() function'", "Handling request being sent too often, setting timeout between requests, aborting old requests", "JS Promises", "Extracting React components and functions into separate files", "Working with unix timestampes and Date() object"],
        code: "https://github.com/IgorIvanter/weather-around-the-world",
        site: "https://igorivanter.github.io/weather-app/",
        content: () => {
            return <img src={weather} alt="" style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
            }}></img>
        }
    },
    {
        name: "2048",
        description: "This is a copy of the famous 2048 game. Use arrows or WASD keys to swipe left, right, up, or down. Every time two tiles withe equal numbers collide, they combine into a new tile with double that number. The goal of the game is to reach the number 2048. This was my first project using JavaScript that taught me a lot.",
        learned: ["The basics of JavaScript: DOM manipulation, event listeners, classes, modules, etc.", "Basic animations", "Async functions"],
        code: "https://github.com/IgorIvanter/2048",
        site: "https://igorivanter.github.io/2048/",
        content: () => {
            return (
                <div
                    className="text-center"
                    style={{
                        height: "calc(15rem - 4px)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "darkslateblue"
                    }}
                >
                    <span style={{
                        fontSize: "5rem"
                    }}>
                        2048
                    </span>
                </div>)
        }
    },
]
