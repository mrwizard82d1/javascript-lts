/**
 * Created by larryjones on 6/30/17.
 */

describe('function', () => {
  it('is an object to which one can add properties', () => {
    const assert = (() => {
      const result = (expr, message) => {
        if (!expr) {
          throw new Error(message);
        }
        
        result.count++;
        
        return true;
      };
      result.count = 0;
      
      return result;
    })();
    
    assert(1);
    expect(assert.count).toBe(1);
  });
});
