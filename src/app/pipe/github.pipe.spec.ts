import { GithubPipe } from './github.pipe';

describe('GithubPipe', () => {
  it('create an instance', () => {
    const pipe = new GithubPipe();
    expect(pipe).toBeTruthy();
  });
});
