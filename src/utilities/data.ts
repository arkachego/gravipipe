const generateNumber = (limit: number, formatter: (input: number) => number) => {
  return formatter(Math.random() * limit);
};

const generateString = (length: number) => {
  const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  return Array.from({ length }).map(_ => {
    const index = generateNumber(dictionary.length, Math.floor);
    return dictionary[index];
  }).join('');
};

const generateItems = () => {
  return Array.from({ length: generateNumber(10, Math.ceil) }).map(_ => {
    return {
      name: generateString(8),
      quantity: generateNumber(10, Math.ceil),
      price: generateNumber(100, Math.ceil),
    };
  });
};

const generateData = () => {
  return 'ABCDEFGH'.split('').map(store => `Store ${store}`).map(store => {
    return Array.from({ length: 12 }).map((_, month) => {
      const pointsLimit = generateNumber(15, Math.ceil);
      const pointDates: number[] = [];
      while (pointDates.length < pointsLimit) {
        const date = generateNumber(28, Math.ceil);
        if (!pointDates.includes(date)) {
          pointDates.push(date);
        }
      }
      let monthString = (month + 1).toString();
      if (monthString.length === 1) {
        monthString = `0${monthString}`;
      }
      return pointDates.map(date => {
        let dateString = date.toString();
        if (dateString.length === 1) {
          dateString = `0${dateString}`;
        }
        return {
          date: `2024-${monthString}-${dateString}T00:00:00.000Z`,
          store: store,
          items: generateItems(),
        }
      });
    }).flat();
  }).flat();
};

export default generateData;
