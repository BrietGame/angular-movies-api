import { Movie } from './movie';

describe('Movie', () => {
  it('should create an instance', () => {
    expect(new Movie(1, "Spider man", "us", "Ceci est un film", 20, "cool", "test")).toBeTruthy();
  });
});
