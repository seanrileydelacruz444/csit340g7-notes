import { useState } from "react";

export default function NoteCard({title, body}) {
    const [visible, setVisible] = useState(false);
    
    return(
        <div>
            <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>

            {visible && <p className="mt-3 text-[15px] font-normal text-[#949494]">{body}</p>}
            
            <button 
                type="button" 
                className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
                onClick={() => setVisible((prev) => !prev)}
            
            > {visible ? "Show Less" : "Show More"}</button>
        </div>
    );
}