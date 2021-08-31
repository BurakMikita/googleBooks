import React from "react";
import preloader from "./../img/preloader.svg";



let Preloader= () => {
    return <div  style={ { backgroundColor: 'white', margin: '0 auto', width: '300px' } }>
        <img src={preloader} />
    </div>
}

export default Preloader;