"use client"


import { ButtonSuccess, ButtonWarning, ButtonDanger, ButtonSuccessOutline,  } from "../components/p bidin";


const TestButton = () => {
   return(
       <div className="m-10">
           <ButtonSuccess type="button" onClick={() => alert("Success button clicked!")}>
               Success Button
           </ButtonSuccess>
           <ButtonWarning type="button" className="ml-2" onClick={() => alert("Warning button clicked!")}>
               Warning Button
           </ButtonWarning>
           <ButtonDanger type="button" className="ml-2" onClick={() => alert("Danger button clicked!")}>
               Danger Button
           </ButtonDanger>
            <ButtonSuccessOutline type="button" className="ml-2" onClick={() => alert("Success Outline button clicked!")}>
                Success Outline Button
            </ButtonSuccessOutline>
            <ButtonSuccessOutline type="button" className="ml-2" onClick={() => alert("Danger Outline button clicked!")}>
                Danger Outline Button
            </ButtonSuccessOutline>
            <ButtonSuccessOutline type="button" className="ml-2" onClick={() => alert("Outline Info button clicked!")}>
                Outline Info Button
            </ButtonSuccessOutline>
       </div>
   )
}


export default TestButton;