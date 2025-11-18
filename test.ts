{
  type TItem = { title: string; rating: number };
  const filterByRating = (arr: TItem[]): TItem[] => {
    return arr.filter((item) => item.rating >= 4 && item.rating <= 5);
  };
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 51.0 },
  ];

  console.log(filterByRating(books));
}
