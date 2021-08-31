import React, {useEffect, useState} from "react";
import FormSearch from "./Fofm/FormSearch";
import {useDispatch, useSelector} from "react-redux";
import {getBucksThunk, getOneBucks, toggleIsFetching} from "./reducer/tesr-reducer";
import HaderCard from "./ClickBoock/HaderCard";
import {OneBook} from "./OneBook/OneBook";




const App = ()=> {
    const[click, setClick] = useState(true)
    const[id, setId] = useState(null)
    const dispatch = useDispatch()


       const totalItems = useSelector(state=> state.test.totalItems)


    useEffect(()=>{
  if(id){
      dispatch(getOneBucks(id))
  }

    },[id])


    const onClickBody =(filer)=>{
        if(filer){
            dispatch(getBucksThunk(filer))
            setClick(true)
        }
    }
    const cards= useSelector((state)=>{
        return state.test.bucks
    })
    const book = useSelector(state=>{
        return  state.test.book})

  return (
   <div >
      <FormSearch onClickBody={onClickBody} />


 {cards && click ? <HaderCard setClick={setClick} setId={setId} cards={cards} totalItems={totalItems}/>:<OneBook book={book}setClick={setClick} />}



   </div>
  )

}



export default App;
