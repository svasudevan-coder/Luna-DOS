import React from 'react';

const Question = ({ question, answer }) => {
  return (
    <div className="p-4 bg-boxPurple flex flex-col  min-h-[150px]">
      <h3 className="text-xl font-bold ">{question}</h3>
      <p className="text-black-700 text-xl">{answer}</p>
    </div>
  );
};


const Faq = () => {
  return (
    <div>
      <div className='items-left mt-12'>
        <h1 className="text-6xl mb-10 font-bold">Frequently Asked Questions</h1>
      </div>

    
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-full'>
  <Question question="Who Can Attend?" answer="This event is for all teenagers who identify as girls or nonbinary" />
  <Question question="What if I have never coded before? Can I still come?" answer="Of course! This event is beginner-friendly, and we will have workshops and mentors to help you along the way." />
  <Question question="How much does attendance cost?" answer="Luna is free thanks to Hack Club's support!" />
  <Question question="What should I bring?" answer="Just a laptop and yourself!" />
  <Question question="Where is Luna?" answer="Luna is being held from 8am to 8pm at Civic Hall in Manhattan." />
  <Question question="I have more questions!" answer={
    <>Feel free to reach out! You can send us an email at <a href="mailto:zenab@hackclub.com" className="text-buttonPurple2">zenab@hackclub.com</a>!</>
  } />

    </div>
  );
};

export default Faq;
