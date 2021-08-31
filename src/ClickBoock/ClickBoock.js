import s from './ClickBoock.module.css'

const ClickCard = ({   setClick,
                      thumbnail,
                      title,
                      authors,
                       setId,
                       id


                  }) => {

    const toggle = () =>{ setClick(false)};
     const eddIdSave = ()=>{setId(id)}


       return <><div style={{padding:'10px', backgroundColor:'#c8c8c8 ', margin:'20px'}}>
       <div className={s.card}
       >
           <img style={{ display:'block',width: '140px', height: '130px', padding:'10px'}}
                src={thumbnail}
                alt={title}/>
           <div style={{flex:' 1 1 auto'}}>{title}</div>
           <div style={{padding:'10px'}}>{authors}</div>
           <button  onClick={()=>{toggle();eddIdSave()}}>More info</button>

       </div>
       </div>
       </>




    }



    export default ClickCard;