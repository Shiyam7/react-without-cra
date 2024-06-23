import React from "react";
import ProfilePhoto from '../assets/profile_photo.jpeg'

const App = (props: any) => {

    return (
        <main>
            <h1>React App 🎉</h1>
            <div>
                <img src={ProfilePhoto}></img>
            </div>
        </main>
    )

}

export default App;