import { useState } from 'react';

const CustomHook = (intval, initError) => {
    const [inp, setInput] = useState(intval)
    const [errors, setError] = useState(initError)

    const handleChangeLogin = (e) => {
        // console.log("called",e);
        // console.log("called",e.target);
        // console.log(e.target.className);
        setInput((inp) => ({ ...inp, [e.target.name]: e.target.value }))
        if (e.target.className === "required") {
            console.log("called inside if",e.target.value);
            if (e.target.value === "") {
                let SpanId = [e.target.name]+"Error";
                console.log("inside condition",SpanId);
                setError({ ...errors,[SpanId]: "This field is required" })
            } else {
                console.log("inside else condition");
                setError({ ...errors, "usernameError": "" })
            }
        }
    }
    const updatedData = (data) => {
        setInput(data)
    }
    return { handleChangeLogin,inp,errors,updatedData }
};

export default CustomHook;