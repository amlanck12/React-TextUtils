import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked.")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upercase", "success")
    }

    const handleLowClick=()=>{
        console.log("Lowercase was clicked.")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handleClearClick=()=>{
        console.log("Text is cleared.")
        let newText = '';
        setText(newText)
    }

    const handleCopyClick=()=>{
        console.log("Text is copied.")
        let newText = navigator.clipboard.writeText(text);
        
        alert("Text copied!");
        return newText;
    }
    const handleSpacesClick=()=>{
        console.log("Removed spaces.")
        let newText = text.split(/[ ] + /);
        setText(newText.join(""))
    }

    const handleOnChange=(event)=>{
        console.log("on change.")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style = {{color : props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control my-4" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#422929':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpacesClick}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>Text Summary</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words & {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mins reading time</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : 'Enter text to preview'}</p>
        </div>
        
        </>
    );
}
