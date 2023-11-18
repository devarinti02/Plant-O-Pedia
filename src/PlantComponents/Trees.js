const Trees = ({ details }) => {
  if (!details || !details.trees) {
    return <p>No Trees data available.</p>;
  }

  return (
    <div className="container">
      <div>
      <h1 className="heading">Trees</h1>

        <div className="displaybody">
          {details.trees.map((trees, index) => (
            <div key={index}>
              <div className="contentbody">
                <h2 className="title">{trees.name}</h2>
                <h3 className="para"> Season: {trees.season}</h3>
                <h3 className="para">Soil Type: {trees.soil_type}</h3>
                <h3 className="methods">Growth Methods:</h3>
                <ul>
                  {trees.methods.map((method, methodIndex) => (
                    <li key={methodIndex}>
                      <strong>{method.method_name}</strong>
                      <ul>
                        {method.procedure.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
     
    </div>
</div>   
  );
};

export default Trees;
