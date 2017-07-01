/**
 * Created by larryjones on 6/30/17.
 */

describe('string.trim should', () => {
  it('remove leading whitespace', () => {
    expect('\tomne'.trim()).toBe('omne');
  });
  
  it('remove trailing whitespace', () => {
    expect('insensibilis\t  '.trim()).toBe('insensibilis');
  });
  
  it('not change internal whitespace', () => {
    expect('scindent\t\tmulgetis'.trim()).toBe('scindent\t\tmulgetis');
  });
});