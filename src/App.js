import React, { useState } from 'react'
import "./App.css";
import Navbar from "./Pages/Navbar"
import About from "./Pages/About"
import Services from './Pages/Services';
import Freelancer from './Pages/Freelancer';
import Switch from "react-switch";
import {
    Form,
    Dropdown,
    Input ,
    Button
} from "semantic-ui-react";
import update from "immutability-helper";
import Boards from './Components/Boards';


const SIZE = [
    { key: "Vehicle", value: "Vehicle", text: "Vehicle", },
    { key: "SubSystem", value: "SubSystem", text: "SubSystem", },
    { key: "Parts", value: "Parts", text: "Parts", },
];

function App() {

    const [selectedProjects, setSelectedProjects] = useState( [] );

    const onChangeHandler = ( e, ed, type ) => {
        // setActive( false );
        switch ( type ) {
            case "pid":
                const updatedProject = update( selectedProjects, {
                    $set: ed.value,
                } );
                return setSelectedProjects( updatedProject );  
        }
    };

    const handleClick=()=>{
        console.log(selectedProjects)
    }

   
    //jsx-----------------
    return (
        <>
              <div>
                       {/* <Navbar/> 
                       <About/>
                       <Services/>
                       <Freelancer/> */}
                     {/* <Form validate="false" size="small">
                        <Form.Select
                            label="Projects"
                            name="module"
                            required
                            search
                            selection
                            placeholder="Select Type"
                            options={ SIZE }
                            onChange={ ( e, ed ) => onChangeHandler( e, ed, "pid" ) }
                        />
                    </Form> */}
                     {/* <Input placeholder='Search...'   onChange={ ( e, ed ) => onChangeHandler( e, ed, "pid" ) } />
                     <Button onClick={handleClick}>Click Here</Button> */}
                    <Boards/>



              </div>  
        </>
    )
}

export default App
