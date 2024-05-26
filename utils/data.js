const randomStringGenerator = require("./random");

let tasks = {
  pending: {
    title: "pending",
    items: [
      {
        id: randomStringGenerator(),
        title: "Send the Figma file to Dima",
        comments: [],
      },
    ],
  },
  ongoing: {
    title: "ongoing",
    items: [
      {
        id: randomStringGenerator(),
        title: "Review GitHub issues",
        comments: [
          {
            name: "David",
            text: "Ensure you review before merging",
            id: randomStringGenerator(),
          },
        ],
      },
    ],
  },
  completed: {
    title: "completed",
    items: [
      {
        id: randomStringGenerator(),
        title: "Create technical contents",
        comments: [
          {
            name: "Dima",
            text: "Make sure you check the requirements",
            id: randomStringGenerator(),
          },
        ],
      },
    ],
  },
};

module.exports = tasks;
