// QuestionAnswer.js
import  { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const QuestionAnswer = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
        <div className="border-b  p-4 my-2 rounded shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{question}</h3>
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl font-bold text-red">
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-2">{answer}</p>
      </motion.div>
    </div>
    </div>
  );
};
QuestionAnswer.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  };
export default QuestionAnswer;
