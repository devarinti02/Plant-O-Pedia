const Herbs = ({ details }) => {
  if (!details || !details.herbs) {
    return <p>No Herbs data available.</p>;
  }

  return (
    <div>
      <h2>Herbs</h2>
     <center>
        <div>
          {details.herbs.map((herb, index) => (
            <div key={index}>
              <div>
                <h3>{herb.name}</h3>
                <p>Season: {herb.season}</p>
                <p>Soil Type: {herb.soil_type}</p>
                <h4>Growth Methods:</h4>
                <ul>
                  {herb.methods.map((method, methodIndex) => (
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

export default Herbs;
