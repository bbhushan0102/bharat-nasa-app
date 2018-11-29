const faker = require("faker");
const { sampleSize, random } = require("lodash");

exports.generateOwnerData = n => {
  return Array.from({ length: n }, () => {
    return {
      name: faker.name(),
      address: faker.address.city() + faker.address.streetAddress(),
      contact_number: faker.phone.phoneNumber()
    };
  });
};
exports.generateAnimalData = n => {
  return Array.from({ length: n }, () => {
    return {
      name: faker.name.firstName(),
      colour: faker.coomerce.color(),
      imageUrl: faker.image.animals(),
      traits: generateTraits()
    };
  });
};
generateTraits = () => {
  const sampleTraits = [
    "fuzzy",
    "gentle",
    "seductive",
    "hates kids",
    "hated by kids",
    "aloof",
    "ambivalent",
    "curious",
    "stylish",
    "narcissistic",
    "sufferer of hallitosis"
  ];
  return sampleSize(sampleTraits, random(1, 3));
};
