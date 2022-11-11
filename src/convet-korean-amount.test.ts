import convertKoreanAmount from "./convert-korean-amount";

describe("first", () => {
  test("1000 --> 1,000원", () => {
    expect(convertKoreanAmount(1000)).toBe("1,000원");
  });
  test("374000 --> 37만 4,000원", () => {
    expect(convertKoreanAmount(374000)).toBe("37만 4,000원");
  });

  test("3000000 --> 3,000만원", () => {
    expect(convertKoreanAmount(30000000)).toBe("3,000만원");
  });

  test("527000000 --> 5억 2,700만원", () => {
    expect(convertKoreanAmount(527000000)).toBe("5억 2,700만원");
  });

  test("[띄어쓰기 없이] 527000000 --> 5억2,700만원", () => {
    expect(convertKoreanAmount(527000000, { wordSpacing: false })).toBe(
      "5억2,700만원"
    );
  });

  test("[원 없이] 3000000 --> 3,000만", () => {
    expect(convertKoreanAmount(30000000, { withWonSuffix: false })).toBe(
      "3,000만"
    );
  });

  test("[띄어쓰기/원 없이] 527000000 --> 5억2,700만", () => {
    expect(
      convertKoreanAmount(527000000, {
        wordSpacing: false,
        withWonSuffix: false,
      })
    ).toBe("5억2,700만");
  });
});
