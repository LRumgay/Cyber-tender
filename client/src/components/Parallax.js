import React, { useState, useEffect } from "react";
import M from "materialize-css"

const Parallax = () => {

    useEffect(() => {
        let elements = document.querySelectorAll(".parallax");
        M.Parallax.init(elements);
    }, [])


        return(
            <div class="parallax-container">
              <div class="parallax"><img src="https://picsum.photos/600/1000?random=1" alt="parallax1" /></div>
            </div>
        )
    }


export default Parallax