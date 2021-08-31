
import {useSelector} from "react-redux";
import Preloader from "../Preloader/Preloader";
import s from './OneBook.module.css'


export const OneBook= ({setClick,book})=>{

    const isFetching = useSelector(state=> state.test.isFetching)
    const  thumbnail = 'https://st.depositphotos.com/1034300/2775/i/600/depositphotos_27755729-stock-photo-book-notebook-textbook-white-blank.jpg'

    if(!isFetching){
        return <Preloader/>
    }



    debugger







  return  (<div style={{display:'flex', width:'100%'}}>
      <div className={s.OneBook}>
              <img  src={book.imageLinks != null?book.imageLinks.thumbnail: thumbnail}/>
      </div>
      <div style={{display:'flex', flexDirection:'column'}}>
          <button style={{width:'60px',backgroundColor:'red', marginLeft:'30px'}} onClick={()=>{setClick(true)}}>back</button>
          <div style={{margin:'20px'}}>{book.title}</div>
          <div style={{margin:'20px'}}>
              <b>Authors:</b>
<ul>
    {book.authors != null ?  book.authors.map((ul,index)=>{
        return <li key={index}>{ul}</li>
    }): null}
</ul>
          </div>

          {book.description ? <div style={{maxWidth: '800px', padding: '15px', border:"2px solid black", marginLeft:'20px'}}>
              {book.description}
          </div>: null}


      </div>

    </div>)

}