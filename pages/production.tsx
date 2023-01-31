import React, { useEffect, useState } from "react";
import WithLayout from "../components/HOC/withLayout";
import { mainProductionType } from "../components/interfaces";
import ProductionList from "../components/MainComponents/Production/ProductionList";
import { API_SERVICE_URL } from "../config/constants";

interface IProductionProps {
  allProductions: mainProductionType;
}

const production = (props: IProductionProps) => {
  const [allProductions, setAllProductions] = useState<any>();
  useEffect(() => {
    getProductionList();
  }, []);

  const getProductionList = async () => {
    try {
      const res = await fetch(`${API_SERVICE_URL}/productions/read.php`);
      const response = await res.json();
      setAllProductions(response);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  return <ProductionList allProductions={allProductions} />;
};

export default WithLayout(production, "Production");
