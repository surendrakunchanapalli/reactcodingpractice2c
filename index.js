const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="container">
      <Box text="Small" className="btn1" />
      <Box text="Medium" className="btn2" />
      <Box text="Large" className="btn3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
