const Vegetables = ({ details }) => {
  if (!details || !details.vegetables) {
    return <p>No vegetables data available.</p>;
  }

  return (
    <div className="container">
      <div>
      <h1 className="heading">vegetables</h1>

        <div className="displaybody">
          {details.vegetables.map((vegetables, index) => (
            <div key={index}>
              <div className="contentbody">
                <h2 className="title">{vegetables.name}</h2>
                <h3 className="para"> Season: {vegetables.season}</h3>
                <h3 className="para">Soil Type: {vegetables.soil_type}</h3>
                <h3 className="methods">Growth Methods:</h3>
                <ul>
                  {vegetables.methods.map((method, methodIndex) => (
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

export default Vegetables;
