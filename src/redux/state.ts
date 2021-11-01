interface initialStateType {
  data: Array<dataType>
}

interface dataType {
  id: number,
  name: string,
  year: number,
  genre: string,
  image: string
}

export const initialState: initialStateType = {
  data: [
    {
      id: 18,
      name: "TestFavoritesMovie",
      year: 2021,
      genre: "Comedy(real)",
      image: ""
    },
]}