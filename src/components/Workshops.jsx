import React from "react";


const Workshop = ({ img, name, desc }) => {
   
    return(

        <main className="flex border border-dashed border-buttonPurple px-4 py-4">
            <div>
                <img 
                    src={img} 
                    className="hidden lg:block lg:w-60 lg:h-60 object-cover"
                    alt={name}
                />
            </div>

            <div className="ml-6 " style={{ width: '500px' }}>
                <h1 className="text-2xl italic font-bold">{name}</h1>
                <p className="whitespace-normal">{desc}</p>
            </div>
        </main>

    )
        
    
}



export default Workshop
