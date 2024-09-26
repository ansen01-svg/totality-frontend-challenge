import TextField from "@mui/material/TextField";

export default function FieldHolder(props) {
  const {
    value,
    type,
    placeholder,
    disabled,
    handleChange,
    labelTitle,
    labelFor,
  } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <label htmlFor={labelFor} className="text-[13px] text-black font-medium">
        {labelTitle}
      </label>
      <TextField
        size="small"
        fullWidth
        required
        type={type}
        id={labelFor}
        name={labelFor}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        label=""
        disabled={disabled}
        InputProps={{
          style: {
            color: "#24272c",
            fontSize: "13px",
            borderRadius: "4px",
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              border: "1px solid #000",
            },
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
          },
        }}
      />
    </div>
  );
}
