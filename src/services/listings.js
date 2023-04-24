const getAllTest = () => {
    const all = [
      {
        Title: "Beethoven's Greatest Works ",

        Type: "Master’s Performance",

        Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJO_Konzert_Phil_MR_098.jpg/600px-BJO_Konzert_Phil_MR_098.jpg",

        Description: "Come witness this amazing performance.",
      },
      {
        Title: "Beethoven's Greatest Works 2",

        Type: "Master’s Performance",

        Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJO_Konzert_Phil_MR_098.jpg/600px-BJO_Konzert_Phil_MR_098.jpg",

        Description:
          "Come witness this amazing performance. Come witness this amazing performance. Come witness this amazing performance.",
      },
      {
        Title: "Beethoven's Greatest Works 3",

        Type: "Master’s Performance",

        Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJO_Konzert_Phil_MR_098.jpg/600px-BJO_Konzert_Phil_MR_098.jpg",

        Description: "Come witness this amazing performance.",
      },
      {
        Title: "Beethoven's Greatest Works 5",

        Type: "Master’s Performance",

        Dates: ["2023-06-23T23:00:00Z", "2023-07-23T23:00:00Z"],

        Image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/BJO_Konzert_Phil_MR_098.jpg/600px-BJO_Konzert_Phil_MR_098.jpg",

        Description: "Come witness this amazing performance.",
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
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png",

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