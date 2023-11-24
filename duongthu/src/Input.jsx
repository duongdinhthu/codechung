import ErrorIcon from "./icons/Erro";
import Valid from "./icons/Valid";

export default function Input(props){
    return(
        <div
         className={`input-group ${
            !props.isValid && props.isTouched
                ? "inValid"
                : `${props.isValid && props.isTouched ? "valid": ""}` }`}        >
            <label htmlFor={props.name}>{props.label}</label>
            <Input className="input" 
                name={props.name} 
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={(e) => props.onChange(e)}           />
            <span className="input-error">{`${
                !props.isValid && props.isTouched ? props.errorMsg : ""
            }`}</span>
            <div className="input__icon">
                {props.isTouched && !props.isValid && <ErrorIcon/>}
                {props.isTouched && props.isValid && <Valid/>}
            </div>
        </div>
    );
}