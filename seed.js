export default [
  {
    model: 'Unit',
    records: [
      { id: 1, name: '' },
      { id: 2, name: 'g' },
      { id: 3, name: 'kg' },
      { id: 4, name: 'ml' },
      { id: 5, name: 'dl' },
      { id: 6, name: 'cl' },
      { id: 7, name: 'l' },
      { id: 8, name: 'ks' },
      { id: 9, name: 'Podle chuti' },
      { id: 10, name: 'Špetka' },
      { id: 11, name: 'Podle uvážení' },
    ],
  },
  {
    model: 'IngredientType',
    records: [
      { id: 1, name: 'Rýže', unitId: 2 },
      { id: 2, name: 'Cibule', unitId: 1 },
      { id: 3, name: 'Sůl', unitId: 9 },
      { id: 4, name: 'Pepř', unitId: 10 },
      { id: 5, name: 'Mražená kukuřice', unitId: 11 },
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
  {
    model: 'Recipe',
    records: [
      {
        id: 1,
        name: 'Letní rychlé rizoto',
        steps: `
1. Uvaříme rýži podle svého osvědčeného návodu. Cibulku
pokrájíme nadrobno. Na rozehřátém oleji na pánvi orestujeme cibulku.
2. Na cibulku vsypeme zmraženou kukuřici a okapané červené fazole a krátce podusíme.
3. Masovou směs ochutíme špetkou uzené papriky, osolíme,
opepříme a vše vmícháme k uvařené rýži. Podáváme se salátem.`,
      },
      { id: 2, name: 'secondary test food' },
    ],
  },
  {
    model: 'Ingredient',
    records: [
      {
        id: 1,
        amount: 400,
        recipeId: 1,
        typeId: 1,
      },
      {
        id: 2,
        amount: 1,
        recipeId: 1,
        typeId: 2,
      },
    ],
  },
];
