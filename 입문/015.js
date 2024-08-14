var hometown = [
  { name: "진", place: "과천" },
  { name: "남준", place: "일산", city: "고양" },
  { name: "호석", place: "광주", city: "전라도" },
  { name: "지민", place: "부산", city: "경상도" },
];

var isHometown = function (h, name) {
  // 백틱(``)을 사용하면 console.log() 안에 변수의 값을 바로 넣을 수 있다.
  console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다.`);

  // === : 값 뿐만 아니라 자료형까지 비교
  if (h.name === name) {
    console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
    return true;
  }
  return false;
};

var h;
// .shift() : 배열의 앞에서부터 값을 하나씩 빼내오는 함수. hometown에 [1,2] 배열이 있는데 shift()를 사용하면 1이 빠지고 [2]만 남게 됨
while ((h = hometown.shift())) {
  if (!h.name || !h.place || !h.city) continue;

  // isHometown() 함수 실행
  var result = isHometown(h, "호석");
  // isHometown()의 값이 true라면 반복문 종료
  if (result) break;
}

var i = 0;
var names = ["남준", "정국", "윤기", "호섭"];
var cities = ["경기", "부산", "대구", "광주"];
do {
  hometown[i] = { name: names[i], city: cities[i] };
  i++;
} while (i < 4);

console.log(hometown);
