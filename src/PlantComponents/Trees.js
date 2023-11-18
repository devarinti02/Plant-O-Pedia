const Trees = ({ details }) => {
  if (!details || !details.trees) {
    return <p>No Trees data available.</p>;
  }

  return (
    <div>
      <h2>Trees</h2>
     <center>
        <div>
          {details.trees.map((plant, index) => (
            <div key={index}>
              <div>
                <h3>{plant.name}</h3>
                <p>Season: {plant.season}</p>
                <p>Soil Type: {plant.soil_type}</p>
                <h4>Growth Methods:</h4>
                <ul>
                  {plant.methods.map((method, methodIndex) => (
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
      </center>
    </div>
  );
};

export default Trees;
