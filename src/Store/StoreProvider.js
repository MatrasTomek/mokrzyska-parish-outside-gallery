import React, { createContext, useEffect, useState } from "react";
import request from "../helpers/request";
import { addVisitor, addVisitorMonth } from "../helpers/visitors";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  //cookie
  const [vievBanner, setVievBanner] = useState(true);
  const [vievPiknik, setVievPiknik] = useState(true);

  const checkCookie = () => {
    if (document.cookie === "accessForParafiaMokrzyska") {
      setVievBanner(false);
    } else {
      setVievBanner(true);
    }
  };

  // storage
  const [visitorsObj, setVisitorsObj] = useState(null);

  const getVisitorsObj = async () => {
    // fetch("http://vps-02f6bdbc.vps.ovh.net:8080/visitors")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setVisitorsObj(data.data[0].visitorNo);
    //     addVisitor(data.data);
    //   })
    //   .catch((err) => console.log("Błąd:  ", err));
    const { data, status } = await request.get("/visitors");
    if (status === 200) {
      setVisitorsObj(data.data[0].visitorNo);
      addVisitor(data.data);
    } else {
      console.log(status, data.message);
    }
  };

  const [visitorsMonthObj, setVisitorsMonthObj] = useState(null);

  const getVisitorsMonthObj = async () => {
    // fetch("http://vps-02f6bdbc.vps.ovh.net:8080/month")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setVisitorsMonthObj(data.data[0].visitorNo);
    //     addVisitorMonth(data.data);
    //   })
    //   .catch((err) => console.log("Błąd:  ", err));
    const { data, status } = await request.get("/month");
    if (status === 200) {
      setVisitorsMonthObj(data.data[0].visitorNo);
      addVisitorMonth(data.data);
    } else {
      console.log(status, data.message);
    }
  };

  // news
  const [news, setNews] = useState(null);

  const getNewsObj = async () => {
    // fetch("http://vps-02f6bdbc.vps.ovh.net:8080/news")
    //   .then((res) => res.json())
    //   .then((data) => setNews(data.data.reverse()))
    //   .catch((err) => console.log("Błąd:  ", err));
    const { data, status } = await request.get("/news");
    if (status === 200) {
      setNews(data.data.reverse());
    } else {
      console.log(status, data.message);
    }
  };

  useEffect(() => {
    checkCookie();
    getNewsObj();
    getVisitorsObj();
    getVisitorsMonthObj();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        vievBanner,
        setVievBanner,
        vievPiknik,
        setVievPiknik,
        visitorsObj,
        setVisitorsObj,
        visitorsMonthObj,
        setVisitorsMonthObj,
        news,
        setNews,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
