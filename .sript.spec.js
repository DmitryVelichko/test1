import sleep from "./script.js";

describe("Function sleep", () => {
  it("should be defined", () => {
    expect(sleep).toBeDefined();
  });

  it('should be function', () => {
    expect(typeof sleep).toBe('function');
});

it('should return Promise', () => {
    expect(sleep(1000)).toBeInstanceOf(Promise);
});

it('should return "Delayed print"', () => {
    expect(sleep()).resolves.toBe('Delayed print')
});


});
