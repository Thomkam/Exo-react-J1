const Content = (props) => {
  const words = props.duplicate.split(" ");

  const title = words[0];

  const rest = words.slice(1).join(" ");

  return (
    <div className="grey-box">
      <h1>{title}</h1>
      <p>{rest}</p>
    </div>
  );
};

export default Content;
