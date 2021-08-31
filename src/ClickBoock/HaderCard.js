import React from "react";
import ClickCard from "./ClickBoock";
import Preloader from "../Preloader/Preloader";
import e from './ClickBoock.module.css'
import {useSelector} from "react-redux";



const HandleCard= ({cards,setClick,setId,totalItems}) => {
 const isFetching = useSelector(state=> state.test.isFetching)


    if(!isFetching){
        return <Preloader/>
    }

        const items = cards.map((item, i) => {
            let thumbnail = 'https://st.depositphotos.com/1034300/2775/i/600/depositphotos_27755729-stock-photo-book-notebook-textbook-white-blank.jpg';
            if (item.volumeInfo.imageLinks) {
                thumbnail = item.volumeInfo.imageLinks.thumbnail;
            }


            return (

                    <ClickCard
                        isFetching={isFetching}
                        setId={setId}
                        setClick={setClick}
                        id={item.id}
                        thumbnail={thumbnail}
                        title={item.volumeInfo.title}
                        authors={item.volumeInfo.authors}
                    />

            );
        });
        return (<>
                {totalItems && <div style={{ margin:'10px auto', width:'50px'}}><b>Books:</b>{totalItems}</div>}
                <div className={e.wrapp}>{items}</div>
            </>

        );
    }


export default HandleCard