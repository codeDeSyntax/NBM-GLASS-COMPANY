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
    <div className="container p-2  mx-auto border-t-[1px] border-t-background border-secondary bg-[white] my-10">
      <div className="flex flex-col md:flex-row relative border-t-[1px] border-secondary">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`py-10 px-4 w-full md:w-[20%] border-t-background border-b-[1px] border-b-secondary border-x-secondary border-l-[1px]  flex-1 flex items-center justify-center border-secondary ${
              activeTab === index
                ? "bg-secondary md:bg-red text-text md:text-background"
                : "bg-[white]"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <div className="w-full">
              {tab.title}
              {activeTab === index && (
                <div className="block md:hidden mt-4">
                  {tab.questions.map((qa, qaIndex) => (
                    <QuestionAnswer
                      key={qaIndex}
                      question={qa.question}
                      answer={qa.answer}
                    />
                  ))}
                  <img
                    src="glassroom.jpeg"
                    alt=""
                    className="w-full h-auto mt-4"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 w-full hidden md:flex md:flex-row">
        <div className="md:w-[65%] px-6">
          {tabs[activeTab].questions.map((qa, index) => (
            <QuestionAnswer
              key={index}
              question={qa.question}
              answer={qa.answer}
            />
          ))}
        </div>
        <div className="md:w-[35%] p-2">
          <img src="glassroom.jpeg" alt="" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
