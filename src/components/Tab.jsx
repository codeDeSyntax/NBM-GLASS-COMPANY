// Tabs.js
import { useState } from "react";
import QuestionAnswer from "./Answers";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "What we do",
      questions: [
        {
          question: "What is glass?",
          answer:
            "Glass is a non-crystalline, often transparent, amorphous solid.",
        },
        {
          question: "What is glass?",
          answer:
            "Glass is a non-crystalline, often transparent, amorphous solid.",
        },
      ],
    },
    {
      title: "How we do it",
      questions: [
        {
          question: "How is glass made?",
          answer: "Glass is made by melting silica sand and other ingredients.",
        },
      ],
    },
    {
      title: "When we do it",
      questions: [
        {
          question: "Uses of glass?",
          answer:
            "Glass is used in windows, bottles, and many other applications.",
        },
      ],
    },
    {
      title: "Tab 4",
      questions: [
        {
          question: "Types of glass?",
          answer:
            "There are many types of glass, including tempered, laminated, and borosilicate.",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex  relative">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={` py-6 px-4 w-[20%] border-[1px] border-r-0 flex-1 flex items-center justify-center  border-secondary ${
              activeTab === index
                ? "bg-text text-background"
                : "bg-background"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab].questions.map((qa, index) => (
          <QuestionAnswer
            key={index}
            question={qa.question}
            answer={qa.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
