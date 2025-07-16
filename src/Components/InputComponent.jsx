import React from "react";
import "../Styles/Components.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function InputComponent({
  placeholder,
  type,
  iconcomponent = "",
  altStyle = {},
}) {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="customInput" style={altStyle}>
        <input type={type} placeholder={placeholder} />
        {iconcomponent != "" && iconcomponent}
      </div>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />; */}
    </>
  );
}

export default InputComponent;
