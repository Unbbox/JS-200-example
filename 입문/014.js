var store = { snack: 1000, flower: 50000, beverage: 2000 };

for (var item in store) {
  // .hasOwnProperty() : 객체 안에 속성이 있는지 확인
  if (!store.hasOwnProperty(item)) continue;

  console.log(item + "는 가격이 " + store[item] + " 입니다.");
}
