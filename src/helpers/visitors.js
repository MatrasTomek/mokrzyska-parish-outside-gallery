import request from "./request";

export const addVisitor = async (dataObj) => {
  const visitor = dataObj[0].visitorNo + 1;
  const newObject = {
    id: dataObj[0]._id,
    visitorNo: visitor,
  };

  if (typeof Storage === "undefined") {
    return;
  } else if (sessionStorage.getItem("visitor") === "one") {
    return;
  } else {
    sessionStorage.setItem("visitor", "one");
    const { data, status } = await request.put("/visitors", newObject);
    if (status === 200) {
      return;
    } else {
      console.log(status, data.message);
    }
  }
};

export const addVisitorMonth = async (dataObj) => {
  const visitor = dataObj[0].visitorNo + 1;
  const date = new Date();
  const month = date.getMonth();
  const newMonthObject = {
    id: dataObj[0]._id,
    visitorNo: visitor,
    month: month,
  };
  if (typeof Storage === "undefined") {
    return;
  } else if (sessionStorage.getItem("month") === "one") {
    return;
  } else {
    sessionStorage.setItem("month", "one");
    const { data, status } = await request.put("/month", newMonthObject);
    if (status === 200) {
      return;
    } else {
      console.log(status, data.message);
    }
  }
};
