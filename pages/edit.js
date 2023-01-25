import Layout from "@/components/Layout";
import Header from "@/components/viewCV/Header";
import {useState} from "react";
import LeftBar from "@/components/viewCV/LeftBar";

const Edit = () => {
    const mainInfoFromBlockchain = {
        name: "Andrey Solovov",
        position: "Blockchain developer",
        hello: `Hello there! Welcome to my crazy web3 CV. It is a web3 CV because it gets all the content from the ethereum Georli test net. You can see smart-contract and front repositories by the links. I am a blockchain developer and I am looking for a remote full-time or freelance job. I can write and test solidity smart-contracts, make front-end prototypes, create main front logic with ethers.js and even guide less skilled solidity developers and testers. Enjoy exploring this web app and remember to set likes on cases, if you have metamask and Georli test tokens! You can also check how this app works looking at the code and edit section.`,
        location: "Tbilisi, Georgia",
        background: `Since 2017, I have worked as an FP&A in small and medium-sized businesses. Most of my work was in financial analytics and management accounting. Interest in building systems and working with spreadsheets led me to learn Python to enhance my analytical tools. Since the end of 2021, I have deeply immersed myself in programming and found myself in blockchain development.`,
        education: [
            { year: 2013, description: "Griboedov Institute of International Law and Economics, specialist" },
            { year: 2018, description: "Advanced Diploma MA (rus) CIMA" },
            { year: 2021, description: "Yandex Praktikum Data Analytics" },
            { year: 2022, description: "Institute of Business Studies RANEPA MBA" },
        ],
        contacts: {
            email: { value: "andre.solovov@gmail.com", link: "" },
            tg: { value: "@sigurdrus", link: "https://t.me/sigurdrus" },
            linkedIn: { value: "andrey-solovov", link: "https://www.linkedin.com/in/andrey-solovov-bb665884" },
            github: { value: "/asolovov", link: "https://github.com/asolovov" },
        },
        skills: [
            { name: "Solidity", description: "Strong knowledge, main cases, QA" },
            { name: "NextJS", description: "Prototypes, ethers.js logic" },
            { name: "PSQL", description: "FTS, simple queries, backand logic" },
            { name: "Python", description: "Django pet-projects" },
            { name: "GO", description: "Actively studying" },
        ],
    };

    const [name, setName] = useState(mainInfoFromBlockchain.name);
    const [hello, setHello] = useState(mainInfoFromBlockchain.hello);
    const [position, setPosition] = useState(mainInfoFromBlockchain.position);
    const [mainInfo, setMainInfo] = useState(mainInfoFromBlockchain);

    const header = <Header
        name={name}
        setName={setName}
        hello={hello}
        setHello={setHello}
        position={position}
        setPosition={setPosition}
        isEdit={true}
    />

    const leftBar = <LeftBar
        setMainInfo={setMainInfo}
        mainInfo={mainInfo}
        isEdit={true}
    />

    return (
        <Layout header={header} leftBar={leftBar}/>
    );
};

export default Edit;