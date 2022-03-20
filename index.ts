// TO-DO create an object that is able to store your person data separating the data into health, academic and your biometric

type Degree = "MSc" | "BSc";

type Person = {
  health: {
    bloodGroup: string;
    genotype: string;
    allergies?: string;
  };
  academics: {
    degree?: Degree;
    schoolAttended?: string;
  };
  biometrics: {
    eyeColor: string;
    hairColor: string;
    age: number;
  };
};
const personObject: Person = {
  health: {
    bloodGroup: "0+",
    genotype: "AA",
  },
  academics: {
    degree: "MSc",
    schoolAttended: "Unizik",
  },
  biometrics: {
    eyeColor: "Brown",
    hairColor: "black",
    age: 29,
  },
};

console.log(personObject);
