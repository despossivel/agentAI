import { agent } from '../src/modules';
import {
  Headlines
} from "../src/types"


describe('Agent', () => {
  it('returns an array of Headlines', async () => {
    const actual = await agent();  
    const expected: Headlines = [
      {
        href: expect.any(String),
        title: expect.any(String),
        content: expect.any(String),
        summarize: expect.any(String),
        moderation: expect.anything(),
      }
    ];
 
    
    expect(actual).toEqual(expect.arrayContaining(expected));
    
  }, 150000); 

 
});
