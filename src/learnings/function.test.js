/**
 * Created by larryjones on 6/30/17.
 */

describe('function', () => {
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
  
  it('is an object to which one can add properties', () => {
    assert(1);
    expect(assert.count).toBe(1);
  });
  
  it('has a length property whose value is the arity of the function', () => {
    expect(assert.length).toBe(2);
  });
  
  it('has a prototype', () => {
    expect(Object.getPrototypeOf(assert)).toBe(Function.prototype);
  });
  
  it('has a prototype whose prototype is Object.prototype', () => {
    expect(Object.getPrototypeOf(Object.getPrototypeOf(assert))).toBe(Object.prototype);
  });
  
  it('has a prototype with `apply`', () => {
    expect(Object.getOwnPropertyNames(Function.prototype)).toContain('apply');
  });
  
  it('has a prototype with `call`', () => {
    expect(Object.getOwnPropertyNames(Function.prototype)).toContain('call');
  });
});
