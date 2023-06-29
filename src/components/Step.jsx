const Step = ({ step1, step2, number }) => {
  return (
    <div className="step">
      <div className="number">
        <div>{number}</div>
        <div></div>
      </div>
      <div>
        <p className="step1">{step1}</p>
        <p className="step2 p-gray">{step2}</p>
      </div>
    </div>
  );
};

export default Step;