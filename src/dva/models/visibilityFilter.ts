import { Reducer } from 'redux'

export interface VisibilityFilterDvaModel {
  namespace: string
  state: string
  reducers: {
    setVisibilityFilter: Reducer<string>
  }
}

export type TodoFilters = 'show_all' | 'show_completed' | 'show_active'

export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'

const initialState: string = SHOW_ALL

const Model: VisibilityFilterDvaModel = {
  namespace: 'visibilityFilter',
  state: initialState,
  reducers: {
    setVisibilityFilter(state, { payload: { filter } }) {
      return filter
    }
  }
}
export default Model
