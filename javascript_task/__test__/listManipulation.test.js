const { processList } = require('../listManipulation');

test('processList should filter items correctly', () => {
  const inputList = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20';
  const expectedOutput = 'Processed List: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19';
  
  // Mocking DOM elements
  document.getElementById = jest.fn(() => ({
    value: inputList,
    textContent: '',
  }));

  // Mocking console.log
  console.log = jest.fn();

  processList();

  expect(console.log).toHaveBeenCalledWith(expectedOutput);
});

