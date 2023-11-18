const FloweringPlants = ({ details }) => {
  if (!details || !details.flowering_plants) {
    return <p>No flowering plants data available.</p>;
  }

  return (
    <div className="container">
      <div className="body">
      <h1 className="heading">Flowering Plants</h1>

        <div className="displaybody">
          {details.flowering_plants.map((plant, index) => (
            <div key={index}>
              <div className="contentbody">
                <h2 className="title">{plant.name}</h2>
                <h3 className="para"> Season: {plant.season}</h3>
                <h3 className="para">Soil Type: {plant.soil_type}</h3>
                <h3 className="methods">Growth Methods:</h3>
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
     
    </div>
</div>   
  );
};

export default FloweringPlants;
