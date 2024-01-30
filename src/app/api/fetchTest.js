// https://youtu.be/OwxxCibSFKk?si=RaP4FUibIrvLFXQ5&t=1060
const fetchTest = async () => {
  return fetch(process.env.API_URL + '/home')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default fetchTest;
