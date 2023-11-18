const Herbs = ({ details }) => {
  if (!details || !details.herbs) {
    return <p>No Herbs data available.</p>;
  }

  return (
    <div className="container">
      <div>
      <h1 className="heading">Herbs</h1>

        <div className="displaybody">
          {details.herbs.map((herbs, index) => (
            <div key={index}>
              <div className="contentbody">
                <h2 className="title">{herbs.name}</h2>
                <h3 className="para"> Season: {herbs.season}</h3>
                <h3 className="para">Soil Type: {herbs.soil_type}</h3>
                <h3 className="methods">Growth Methods:</h3>
                <ul>
                  {herbs.methods.map((method, methodIndex) => (
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

export default Herbs;
