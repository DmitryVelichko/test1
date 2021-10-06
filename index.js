const _ = require("lodash");
const geo = require("./geo.json");

const incomings = require("./incomings.json");

// Из массива geo сделать объект "Федеральные округа" - ключ code (числовое значение), значение caption (название федерального округа)
const createFederalDistricsObj = () => {
  const obj = {};
  _.forEach(geo, (item) => {
    return (obj[item.code] = item.caption);
  });
  return obj;
};

console.log(createFederalDistricsObj());

// Из массива geo сделать объект "Регионы" - также ключ code, значение - название региона

const createRegionsObj = () => {
  const obj = {};

  _.forEach(geo, (item) => {
    return _.forEach(item.regions, (item) => {
      return (obj[item.code] = item.caption);
    });
  });

  return obj;
};

console.log(createRegionsObj());

// Сформировать отчет report2020 в виде объекта, где ключ - название региона, а значение - число из ключа value

const createReport = () => {
	
  };
  
  // Отчет report2020
  
  const report2020 = createReport();
  