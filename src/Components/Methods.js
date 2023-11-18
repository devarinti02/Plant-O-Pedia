import React from 'react'

const Methods = () => {
  const details = {
    "cropRotation": {
      "title": "Crop Rotation",
      "equipmentsNeeded": "Tractor, PlowSeed, Drill",
      "procedure": "Crop rotation involves the systematic planting of different crops in a planned sequence over several seasons. The procedure typically includes the following steps:\n\n1. **Field Assessment:** Evaluate soil conditions, nutrient levels, and the previous crop to determine the suitable rotation sequence.\n\n2. **Choose Crop Sequence:** Select a rotation that includes different plant families to disrupt pest and disease cycles. For example, rotate cereals with legumes.\n\n3. **Prepare the Soil:** Use a tractor and plow to prepare the soil for planting. This may involve incorporating residue from the previous crop and adding organic matter.\n\n4. **Seed Planting:** Use a seed drill to plant the chosen crops in their designated areas. Follow recommended spacing and seeding rates.\n\n5. **Monitor Growth:** Regularly monitor the growth of crops, and address any issues such as weeds or pests promptly.\n\n6. **Harvest:** Harvest the crops at the appropriate times, considering the maturation periods of each plant in the rotation.\n\n7. **Repeat:** Repeat the cycle with a new crop sequence in the following seasons to optimize soil health and productivity."
    },
    "dripIrrigation": {
      "title": "Drip Irrigation",
      "equipmentsNeeded": "Drip Lines, Water Pump, Filters",
      "procedure": "Drip irrigation is a water-efficient method that delivers water directly to the root zone of plants. The procedure involves the following steps:\n\n1. **System Setup:** Install a drip irrigation system using drip lines, a water pump, and filters. Position the lines to cover the planting area.\n\n2. **Water Source Connection:** Connect the system to a reliable water source, such as a well or water reservoir.\n\n3. **Filter Installation:** Install filters to ensure that the water distributed through the system is free from debris and sediment.\n\n4. **Emitter Placement:** Place emitters along the drip lines, ensuring they are positioned near the base of each plant to provide targeted watering.\n\n5. **Adjust Water Flow:** Adjust the water flow and pressure to meet the specific needs of the crops. This may involve using pressure regulators.\n\n6. **Regular Maintenance:** Periodically check and clean filters, inspect emitters for clogs, and maintain the overall system to ensure proper functioning.\n\n7. **Optimization:** Monitor soil moisture levels and adjust the irrigation schedule based on plant requirements, weather conditions, and growth stages."
    },
    "organicFarming": {
      "title": "Organic Farming",
      "equipmentsNeeded": "Compost, Natural Pesticides, Cover Crops",
      "procedure": "Organic farming prioritizes sustainable and environmentally friendly practices. The procedure includes the following steps:\n\n1. **Soil Health Assessment:** Assess soil health through testing to determine nutrient levels and overall condition.\n\n2. **Compost Application:** Use compost made from organic matter to improve soil fertility. Apply compost before planting or as a top dressing during the growing season.\n\n3. **Natural Pest Control:** Employ natural predators, companion planting, and biological controls to manage pests. Avoid synthetic pesticides and herbicides.\n\n4. **Crop Diversity:** Plant a variety of crops and include cover crops to enhance biodiversity and minimize the risk of pests and diseases.\n\n5. **Weed Management:** Use mechanical methods, such as mulching or hand weeding, to control weeds without relying on chemical herbicides.\n\n6. **Rotation Practices:** Implement crop rotation to break pest and disease cycles and maintain soil health.\n\n7. **Avoid Synthetic Inputs:** Refrain from using synthetic fertilizers, pesticides, and genetically modified organisms (GMOs).\n\n8. **Continuous Improvement:** Regularly assess and adapt practices to improve sustainability and minimize environmental impact."
    },
    "noTillFarming": {
      "title": "No-Till Farming",
      "equipmentsNeeded": "No-Till Seeder, Herbicide (optional), Cover Crop Roller",
      "procedure": "No-till farming minimizes soil disturbance and erosion. The procedure involves the following steps:\n\n1. **Assess Field Conditions:** Evaluate soil type, moisture levels, and the previous crop residue to determine suitability for no-till.\n\n2. **Cover Crop Roller:** If cover crops were planted, use a cover crop roller to terminate the cover crop and create a mulch layer on the soil surface.\n\n3. **No-Till Seeder:** Use a no-till seeder to plant seeds directly into untilled soil. This equipment cuts through the mulch and places seeds at the desired depth.\n\n4. **Optional Herbicide Use:** In some cases, a minimal amount of herbicide may be used to control existing weeds without tilling.\n\n5. **Monitor Weed Growth:** Monitor weed growth and implement targeted weed control methods if necessary.\n\n6. **Crop Growth:** Allow crops to grow without further soil disturbance, promoting soil structure and water retention.\n\n7. **Harvest:** Harvest crops at the appropriate time, considering the growth and maturity of the plants.\n\n8. **Continuous No-Till:** Maintain the no-till practice in subsequent planting seasons to build and preserve soil health."
    },
    "precisionFarming": {
      "title": "Precision Farming",
      "equipmentsNeeded": "GPS Technology, Variable Rate Technology, Drones",
      "procedure": "Precision farming involves using technology to optimize agricultural practices. The procedure includes the following steps:\n\n1. **Field Mapping:** Use GPS technology to create detailed maps of the field, including soil variations, topography, and crop performance.\n\n2. **Variable Rate Technology (VRT):** Implement VRT to apply inputs such as fertilizers, pesticides, and water at variable rates based on the specific needs of different areas within the field.\n\n3. **Automated Machinery:** Utilize automated tractors and machinery equipped with GPS guidance for precise planting, cultivating, and harvesting.\n\n4. **Data Collection:** Collect data on crop health, soil conditions, and weather through sensors and drones.\n\n5. **Data Analysis:** Analyze the collected data to make informed decisions about planting, irrigation, fertilization, and pest control.\n\n6. **Remote Monitoring:** Use drones for remote monitoring of crop health, pest infestations, and overall field conditions.\n\n7. **Decision Support Systems:** Implement decision support systems to provide real-time recommendations for optimal farming practices.\n\n8. **Continuous Improvement:** Regularly update and adapt precision farming practices based on new technology and data insights for continuous improvement in efficiency and productivity."
    }
  }
  
  return (
    <div >
      <center >
        <div className='main-heading'><h1>METHODS</h1></div>
        <div className='methods-container'>
          {Object.keys(details).map(methodKey => (
            <div className='mainbody' key={methodKey}>
              <h2>{details[methodKey].title}</h2>
              <h3>Equipments Needed:  {details[methodKey].equipmentsNeeded}</h3>
              <h3>Procedure:</h3>
              <p>{details[methodKey].procedure}</p>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
};

export default Methods;
