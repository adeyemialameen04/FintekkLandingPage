import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const Faq = ({ question, answer }) => {
  const [showAns, setShowAns] = useState(false);

  return (
    <div className="faq">
      <div className="question"
        onClick={() => setShowAns(prev => !prev)}
      >
        <p>{question}</p>
        <div
          className="faq__btns"
        >
          <button>
            {
              showAns ? <AiOutlineMinus /> : <AiOutlinePlus />
            }
          </button>
        </div>
      </div>
      <div className={`answer ${showAns ? "show" : "remove"}`}>
        {answer}
      </div>
    </div>
  );
};

export default Faq;