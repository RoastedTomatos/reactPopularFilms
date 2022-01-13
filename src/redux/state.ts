interface initialStateType {
  data: Array<dataType>
  fetchedData: any
}

export interface dataType {
  id: number,
  name: string,
  year: number,
  genre: string,
  image: string
}

export const initialState: any = {
  fetchedData: [
      
    ],
  data: [

    ]
}