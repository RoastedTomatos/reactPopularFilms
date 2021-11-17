interface initialStateType {
  data: Array<dataType>
}

export interface dataType {
  id: number,
  name: string,
  year: number,
  genre: string,
  image: string
}

export const initialState: initialStateType = {
  data: [

    ]
}