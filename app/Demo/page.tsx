'use client'
import { StyledDemo } from "./styles";
import Form from "../components/Form/page";
import { useState } from "react";

const Demo = () => {

  const [registered, setRegistered] = useState(true)

  return (
      <StyledDemo>
        <div className="flex items-center justify-center">
              <Form registered={registered} setRegistered={setRegistered} />
        </div>
      </StyledDemo>
   );
}
 
export default Demo;