module.exports = [
  {
    model: 'Recipe',
    records: [
      { id: 1, name: 'test food' },
      { id: 2, name: 'secondary test food' },
    ],
  },
  {
    model: 'FoodTag',
    records: [
      { id: 1, name: 'meat-preference-meat' },
      { id: 2, name: 'meat-preference-vegetarian' },
      { id: 3, name: 'meat-preference-vegan' },
      { id: 4, name: 'dish-type-starter' },
      { id: 5, name: 'dish-type-soup' },
      { id: 6, name: 'dish-type-main-course' },
      { id: 7, name: 'dish-type-salad' },
      { id: 8, name: 'dish-type-desert' },
      { id: 9, name: 'dish-time-breakfast' },
      { id: 10, name: 'dish-time-brunch' },
      { id: 11, name: 'dish-time-lunch' },
      { id: 12, name: 'dish-time-snack' },
      { id: 13, name: 'dish-time-dinner' },
      { id: 14, name: 'salt-preference-salty' },
      { id: 15, name: 'salt-preference-sweet' },
    ],
  },
  {
    model: 'FoodTagCategory',
    records: [
      {
        id: 1,
        name: 'meat-preference',
        tags: [1, 2, 3],
      },
      {
        id: 2,
        name: 'dish-type',
        tags: [4, 5, 6, 7, 8],
      },
      {
        id: 3,
        name: 'dish-time',
        tags: [9, 10, 11, 12, 13],
      },
      {
        id: 4,
        name: 'salt-preference',
        tags: [14, 15],
      },
    ],
  },
];
