import { getOneBucks} from "./tesr-reducer"
import {getBucks} from "../API/api";
jest.mock('../API/api')
const getBooksMock = getBucks

const result = {
 config:{},
 data:{
  volumeInfo:{
   allowAnonLogging: null,
   authors:[],
   canonicalVolumeLink:'',
   categories: [],
   contentVersion:'',
   description:'',
   imageLinks:{},
   industryIdentifiers: [],
   infoLink:'',
   language: '',
   maturityRating:'',
   pageCount: null,
   panelizationSummary: {},
   previewLink: " ",
   printType: " ",
   printedPageCount: null,
   publishedDate: " ",
   publisher: " ",
   readingModes: {},
   title:''
  }
 },
 headers:{},
 request:{},
 status:200,
 statusText:''
}

getBooksMock.getBook.mockReturnValue(result)


test('', ()=>{

 const thunk = getOneBucks(1)
 const dispatchMock =jest.fn()

 thunk(dispatchMock)

 expect(dispatchMock).toBeCalledTimes(3)
})