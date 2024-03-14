export default function Mirror({ textdisp, onChange }) {
    return (
        <div>
            <input type="text" onChange={onChange} />
            <label>{textdisp}</label>
        </div>)
}
     
    