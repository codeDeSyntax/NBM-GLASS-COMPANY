import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function NumberCard({ title, generateNumber }) {
  const [number, setNumber] = useState(generateNumber());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNumber(generateNumber());
    }, 5000);

    return () => clearInterval(intervalId);
  }, [generateNumber]);

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-4xl font-bold">{number}</p>
    </div>
  );
}

NumberCard.propTypes = {
  title: PropTypes.string.isRequired,
  generateNumber: PropTypes.func.isRequired,
};

function NumberRun() {
  const generateNumber = () => randomNumber(1000, 9999);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <NumberCard title="Projects Finished" generateNumber={generateNumber} />
      <NumberCard title="Happy Clients" generateNumber={generateNumber} />
      <NumberCard title="Coffee Cups" generateNumber={generateNumber} />
      <NumberCard title="Working Hours" generateNumber={generateNumber} />
    </div>
  );
}

export default NumberRun;
