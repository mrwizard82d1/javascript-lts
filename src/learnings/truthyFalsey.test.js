/**
 * Created by larryjones on 6/30/17.
 */

describe('truthy / falsey', () => {
  it('should treat 0 as falsey', () => {
    expect(0 ? true : false).toBe(false);
  })
});
