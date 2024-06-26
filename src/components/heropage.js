import React from "react";
const Heropage = () =>{
    return(
        <div className="flex container mx-auto">
        <div className="flex-1 items-center justify-center  pt-13 p-20 pr-16 m-4 ">
            <img src={`${process.env.PUBLIC_URL}/intro.png`} alt="logo" className="h-32 ml-28 mt-16" />
            
        </div>
        <div className="flex-1 items-center justify-center p-20 pt-9 m-4 ">
            <img src={`${process.env.PUBLIC_URL}/profile.png`} alt="logo" className=" w-65 h-65 " />
        </div>
    </div>
    );
}
export default Heropage;