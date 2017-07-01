/**
 * Created by larryjones on 6/30/17.
 */

describe('function', () => {
  it('is an object to which one can add properties', () => {
    const assert = (expr, message) => {
      if (!expr) {
        throw new Error(message);
      }
      
      assert.count++;
      
      return true;
    };
    assert.count = 0;
    
    assert(1);
    expect(assert.count).toBe(1);
  });
});
