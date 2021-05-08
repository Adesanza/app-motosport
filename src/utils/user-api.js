import axios from 'axios';
const reserveUser = async (userDetails) => {
  const response = await axios.post(
    'https://motosport-api.herokuapp.com/reserve/user',
    {
      ...userDetails,
    }
  );
  if (response.data.type === 'error') {
    throw new Error(response.data.message);
  }
  return response.data;
};
export { reserveUser };
