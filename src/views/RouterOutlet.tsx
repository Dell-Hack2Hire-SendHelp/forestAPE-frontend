import { Routes, Route } from 'react-router-dom';


// The outlet for all the routes. This is where the routes view are defined.
function RouterOutlet() {
    return <>
        <Routes>
            <Route path="/" element={ <img src='/images/tree.jpg' className='w-full h-[500px] object-cover object-bottom' /> } />

            <Route path="*" element={ "Not Found" } />
        </Routes>
    </> 
}

export default RouterOutlet;