import React, { useState } from 'react';
import FloweringPlants from '../PlantComponents/FloweringPlants';
import Vegetables from '../PlantComponents/Vegetables';
import Herbs from '../PlantComponents/Herbs';
import Trees from '../PlantComponents/Trees';

const Plants = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const details = {
    "flowering_plants": [
      {
        "name": "Rose",
        "season": "Spring and Summer",
        "soil_type": "Well-drained soil",
        "image_url": "/",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      },
      {
        "name": "jasmine",
        "season": "Spring and Summer",
        "soil_type": "Well-drained soil",
        "image_url": "/",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      }
    ],
    "vegetables": [
      {
        "name": "Tomato",
        "season": "Spring and Summer",
        "soil_type": "Rich, well-drained soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      },
      {
        "name": "Carrot",
        "season": "Spring and Fall",
        "soil_type": "Sandy soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      },
      {
        "name": "Cucumber",
        "season": "Summer",
        "soil_type": "Rich, well-drained soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      }
    ],
    "herbs": [
      {
        "name": "Basil",
        "season": "Spring and Summer",
        "soil_type": "Well-drained soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      },
      {
        "name": "Mint",
        "season": "Spring and Summer",
        "soil_type": "Moist soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      },
      {
        "name": "Cilantro",
        "season": "Spring and Fall",
        "soil_type": "Well-drained soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      }
    ],
    "trees": [
      {
        "name": "Oak",
        "season": "Spring",
        "soil_type": "Well-drained soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      },
      {
        "name": "Maple",
        "season": "Spring and Fall",
        "soil_type": "Moist, well-drained soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      },
      {
        "name": "Pine",
        "season": "Spring",
        "soil_type": "Well-drained soil",
        "image_url": "#",
        "methods": [
          {
            "method_name": "Planting seeds",
            "procedure": [
              "Select a well-drained and nutrient-rich soil for planting rose seeds.",
              "Soak rose seeds in water for 24 hours before planting.",
              "Plant the seeds 1/4 inch deep in seed trays or directly in the garden soil.",
              "Maintain consistent moisture and provide indirect sunlight.",
              "Transplant seedlings to the desired location once they have several leaves."
            ]
          },
          {
            "method_name": "Propagating cuttings",
            "procedure": [
              "Take a 6-inch cutting from a healthy rose plant, ensuring it has at least two sets of leaves.",
              "Remove the lower leaves, leaving only the top set.",
              "Dip the cut end in rooting hormone to encourage root development.",
              "Plant the cutting in a well-draining potting mix and keep it consistently moist.",
              "Transplant the rooted cutting to its permanent location after a few weeks."
            ]
          }
        ]
      }
    ]
  }


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  

  return (
    <div>
    <center>
      <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px' }}>
        <div onClick={() => handleCategoryClick('flowering_plants')} style={{ cursor: 'pointer', border: selectedCategory === 'flowering_plants' ? '2px solid black' : '2px solid white', padding: '10px' }}>
          Flowering Plants
        </div>
        <div onClick={() => handleCategoryClick('vegetables')} style={{ cursor: 'pointer', border: selectedCategory === 'vegetables' ? '2px solid black' : '2px solid white', padding: '10px' }}>
          Vegetables
        </div>
        <div onClick={() => handleCategoryClick('herbs')} style={{ cursor: 'pointer', border: selectedCategory === 'herbs' ? '2px solid black' : '2px solid white', padding: '10px' }}>
          Herbs
        </div>
        <div onClick={() => handleCategoryClick('trees')} style={{ cursor: 'pointer', border: selectedCategory === 'trees' ? '2px solid black' : '2px solid white', padding: '10px' }}>
          Trees
        </div>
      </div>
      {selectedCategory === 'flowering_plants' && <FloweringPlants details={details} />}
      {selectedCategory === 'vegetables' && <Vegetables details={details} />}
      {selectedCategory === 'herbs' && <Herbs details={details} />}
      {selectedCategory === 'trees' && <Trees details={details} />}
    </center>
  </div>
);
}

export default Plants
