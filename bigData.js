const fs = require("fs");

const numRecords = 100_000;
const data = [];

const getUsers = () => {
  const numRecords = 10;
  const data = [];

  for (let i = 0; i < numRecords; i++) {
    data.push({
      id: Math.random().toString(),
      name: `User-${i}`
    });
  }

  return data;
};

const getComments = () => {
  const numRecords = 10;
  const data = [];

  for (let i = 0; i < numRecords; i++) {
    const userId = Math.random().toString();

    data.push({
      id: Math.random().toString(),
      comment: `Comment-${i}`,
      user: {
        id: userId,
        name: `User-${userId}`,
        followers: getUsers()
      }
    });
  }

  return data;
};

for (let i = 0; i < numRecords; i++) {
  data.push({
    id: Math.random().toString(),
    name: `Posts-${i}`,
    comments: getComments()
  });
}

fs.writeFileSync("./data.json", JSON.stringify(data));
