## 설치하기

```
$ npm i convert-korean-amount
```

```
$ yarn add convert-korean-amount
```

## 사용하기

```javascript
import convertKoreanAmount from "convert-korean-amount";

console.log(convertKoreanAmount("527000000")); // Result: 5억 2,700만원
console.log(convertKoreanAmount("527000000", { wordSpacing: false })); // Result: 5억2,700만원
console.log(convertKoreanAmount("527000000", { withWonSuffix: false })); // Result: 5억 2,700만
```

## 옵션

| key           | value   | optional          | description                  |
| ------------- | ------- | ----------------- | ---------------------------- |
| wordSpacing   | boolean | O (default: true) | 단위 간 띄어쓰기 여부        |
| withWonSuffix | boolean | O (default: true) | 금액 마지막에 '원' 추가 여부 |
