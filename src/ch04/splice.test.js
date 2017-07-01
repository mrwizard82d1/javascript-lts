/**
 * Created by larryjones on 6/30/17.
 */

describe('Array.prototype.splice should', () => {
  it('remove elements between indices in place if no additional value supplied', () => {
    const cut = [1, 2, 3, 4, 5];
    cut.splice(2, 3);
    expect(cut).toEqual([1, 2]);
  });
  
  it('splices in available element even if fewer than original length', () => {
    const cut = [1, 2, 3, 4, 5];
    cut.splice(2, 3, 6, 7);
    expect(cut).toEqual([1, 2, 6, 7]);
  });
  
  it('splices in available element even if more than original length', () => {
    const cut = [1, 2, 3, 4, 5];
    cut.splice(0, 3, 6, 7, 8, 9);
    expect(cut).toEqual([6, 7, 8, 9, 4, 5]);
  });
  
  it('splices in entire array argument if array supplied', () => {
    const cut = [1, 2, 3, 4, 5];
    cut.splice(2, 3, [6, 7, 8, 9]);
    expect(cut).toEqual([1, 2, [6, 7, 8, 9]]);
  });
  
  it('returns the items removed', () => {
    const cut = [1, 2, 3, 4, 5];
    expect(cut.splice(2, 3, [6, 7, 8, 9])).toEqual([3, 4, 5]);
  });
});
