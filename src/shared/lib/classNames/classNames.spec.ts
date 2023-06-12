import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  it('should return main class', () => {
    expect(classNames('mainClass')).toBe('mainClass');
  });

  it('should return additional classes', () => {
    expect(classNames('main-class', {}, ['additional-class-a', 'additional-class-b']))
      .toBe('main-class additional-class-a additional-class-b');
  });

  it('should return conditional classes if condition is true', () => {
    expect(classNames('main-class', { 'conditional-class': true }))
      .toBe('main-class conditional-class');
  });

  it('should not return conditional classes if condition is false', () => {
    expect(classNames('main-class', { 'conditional-class': false }))
      .toBe('main-class');
  });

  it('should show all classes together', () => {
    expect(classNames('main-class', { 'conditional-class': true }, ['additional-class-a']))
      .toBe('main-class additional-class-a conditional-class');
  });

  it('should hide class if condition is undefined', () => {
    expect(classNames('main-class', { 'conditional-class': undefined }))
      .toBe('main-class');
  });
});
