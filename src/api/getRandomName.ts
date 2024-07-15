import axios from "axios";

export const getRandomName = async () => {
  const { data } = await axios.get(
    "https://randomuser.me/api/?inc=name&nat=us"
  );
  return data.results[0].name.first;
};
