import { useEffect, useRef, useState } from "react";

const OTP_input_Digits = 4;

export default function OTP_Input() {


  const [inputArr, setInputArr] = useState(new Array(OTP_input_Digits).fill(""));
  const refArr = useRef([]);



  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;

    let newValue = value.trim();
    const newArr = [...inputArr];

    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    if (newValue) {
      refArr.current[index + 1]?.focus();
    }
    
  };

  const handleKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };

  const styles = {
    app: {
      fontFamily: "sans-serif",
      textAlign: "center",
    },
    otpInput: {
      height: "30px",
      width: "30px",
      textAlign: "center",
      fontSize: "30px",
      margin: "5px",
    },
  };

  return (
    <div style={styles.app}>
      <h1>Validate OTP</h1>

      {inputArr.map((input, index) => (
        <input
          key={index}
          type="text"
          value={input}
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleOnChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={styles.otpInput}
        />
      ))}
    </div>
  );
}