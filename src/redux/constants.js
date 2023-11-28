export const filter = (dataCars, dataFilters) => {
  var carBrand = [...dataCars];

  if (dataFilters?.carBrand) {
    const findBrand = carBrand.filter(car =>
      car.make.includes(dataFilters.carBrand)
    );
    carBrand = [...findBrand];
  }
  if (dataFilters?.price) {
    const findPrase = carBrand.filter(
      car => Number(car.rentalPrice.slice(1)) <= Number(dataFilters.price)
    );
    carBrand = [...findPrase];
  }
  if (dataFilters?.fromMileage) {
    const findMileage = carBrand.filter(
      car => dataFilters.fromMileage * 1000 <= car.mileage
    );
    carBrand = [...findMileage];
  }
  if (dataFilters?.toMileage) {
    const findMileage = carBrand.filter(
      car => dataFilters.toMileage * 1000 >= car.mileage
    );
    carBrand = [...findMileage];
  }

  return carBrand;
};
