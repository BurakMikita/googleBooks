import {getBucks} from "../API/api";

const SET_ALL_BUCKS = 'SET_ALL_BUCKS';
const SET_ONE_BOOK = 'SET_ONE_BOOK'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const HAU_ALL_BOOKS = 'HAU_ALL_BOOKS'
let initialState = {

   bucks: [],
    book:{},
    isFetching: true,
    totalItems: null

};


const testReducer = (state= initialState, action )=> {

  switch (action.type){
      case SET_ALL_BUCKS: {
        return{...state,
            bucks: action.data
        }
      }
      case SET_ONE_BOOK: {
          return {
              ...state,
              book:action.obj
          }
      }
      case TOGGLE_IS_FETCHING: {
          return { ...state, isFetching: action.isFetching}
      }
      case HAU_ALL_BOOKS: {
          return { ...state, totalItems: action.number}
      }
      default:
          return state
  }


}

export const setAllBucks = (data) => ({type: SET_ALL_BUCKS, data})
export const setBuck = (obj) => ({type: SET_ONE_BOOK, obj})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const hauAllBooks = (number) => ({type:HAU_ALL_BOOKS, number})




export const getBucksThunk = (filter) => (dispatch) => {
dispatch(toggleIsFetching(false))
    getBucks.getOllBucks(filter).then(response => {
        dispatch(setAllBucks(response.data.items));
        dispatch(hauAllBooks(response.data.totalItems));
        dispatch(toggleIsFetching(true))
    });
}



export const getOneBucks = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(false))
    let obj =   await getBucks.getBook(id)
        dispatch(setBuck(obj.data.volumeInfo));
        dispatch(toggleIsFetching(true))

}




export default testReducer