import { createContext, useContext } from "react"
import { IApi } from "./fetchApi"

export type IDataContext = {
  data: IApi[]
  setData:(c: IApi[]) => void
}
export const DataContext = createContext<IDataContext>({
data: [],
setData: () => {},
})
export const useDataContext = () => useContext(DataContext)