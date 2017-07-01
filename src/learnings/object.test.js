/**
 * Created by larryjones on 7/1/17.
 */

describe('objects', () => {
  describe('all have prototypes', () => {
    function Fish() {}
    Fish.prototype.foo = () => this;
    const oneFish = new Fish();
    it('this is just an object', () => {
      expect(typeof Object.getPrototypeOf(oneFish)).toBe('object');
    });
    
    it('that is the `prototype` member of its constructor', () => {
      expect(Object.getPrototypeOf(oneFish)).toBe(Fish.prototype);
    });
  
    it('allows sharing of properties between instances', () => {
      const twoFish = new Fish();
      expect(oneFish.foo).not.toBe(undefined);
      expect(twoFish.foo).not.toBe(undefined);
    });
    
    it('which allow adding properties after constructing instances', () => {
      const redFish = new Fish();
      expect(redFish.bar).toBe(undefined);
      Fish.prototype.bar = () => this;
      expect(redFish.bar).not.toBe(undefined);
    });
    
    it('can also simulate inheritance by prototype chaining', () => {
      function ColoredFish() {}
      ColoredFish.prototype = new Fish();
      const blueFish = new ColoredFish();
      expect(blueFish.bar).not.toBe(undefined);
    });
    
    describe('unless created with Object.create', () => {
      it('with a `null` value', () => {
        const o = Object.create(null);
        expect(Object.getPrototypeOf(o)).toBe(null);
      });
    });
  });
});
