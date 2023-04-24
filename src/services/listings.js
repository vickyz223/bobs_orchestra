const getAllTest = () => {
    const all = [
      {
        Title: "Beethoven's Greatest Works ",

        Type: "Master’s Performance",

        Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/5/50/Baschenis_-_Musical_Instruments.jpg",

        Description: "Come witness this amazing performance.",
      },
      {
        Title: "Lorem ipsum dolor sit amet",

        Type: "Master’s Performance",

        Dates: ["2023-08-02T18:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJO_Konzert_Phil_MR_098.jpg/600px-BJO_Konzert_Phil_MR_098.jpg",

        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        Title: "Consectetur Adipiscing Elit",

        Type: "Master’s Performance",

        Dates: ["2023-07-03T03:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Josef_Danhauser_Liszt_am_Fl%C3%BCgel_1840_02.jpg/1920px-Josef_Danhauser_Liszt_am_Fl%C3%BCgel_1840_02.jpg",

        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      },
      {
        Title: "Consectetur Adipiscing Elit",

        Type: "Master’s Performance",

        Dates: ["2023-07-03T03:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Archive-ugent-be-D1674182-DD29-11E1-8189-1C588375B242_DS-13.jpg/1920px-Archive-ugent-be-D1674182-DD29-11E1-8189-1C588375B242_DS-13.jpg",

        Description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      },
    ];
    return all
}

const getAll = () => {
  const all = [
    {
      Title: "Beethoven's Greatest Works",

      Type: "Master’s Performance",

      Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],

      Image:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Baschenis_-_Musical_Instruments.jpg",

      Description: "Come witness this amazing performance.",
    },
  ];
  return all;
};

const conversion = (date) => {
  const dateTime = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "America/Los_Angeles",
  };
  const format = new Intl.DateTimeFormat("en-US", options);
  const final = format.format(dateTime);
  return final;
};

const exportObj = {
  getAllTest, 
  getAll, 
  conversion
}

export default exportObj