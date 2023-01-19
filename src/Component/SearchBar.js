import React,{ useState } from "react";

const SearchBar = ({onFormSubmit}) => {

    const [term,setTerm] = useState('');

    const onSubmitHandle = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    };

    return(
        <div className="ui segment search" style={{marginTop : '5px'}}>
            <form className="ui icon input" onSubmit = {onSubmitHandle} style={{width:'100%'}}>
                <input className="prompt" id = 'inputText' type="text" value={term} onChange = {(e)=>setTerm(e.target.value)} placeholder="Type here..." />
                <i className="search icon"></i>
            </form>
        </div>
    );
};

export default SearchBar;