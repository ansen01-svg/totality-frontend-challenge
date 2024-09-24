import TextField from "@mui/material/TextField";

export default function Field(props) {
  const { value, handleChange, label, type, name, handleClick, icon } = props;

  return (
    <div className="w-full flex items-center justify-items-center h-[60px] px-4 pt-1 border-[1px] border-slate-200 rounded-lg">
      <TextField
        id={name}
        variant="standard"
        size="small"
        fullWidth
        label={label}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        InputProps={{
          disableUnderline: true,
          style: {
            fontSize: "15px",
          },
        }}
        sx={{
          ".MuiFormLabel-root": {
            fontSize: "15px",
            color: "#666",
            fontWeight: 600,
          },
          "& label": {
            "&.Mui-focused": {
              color: "#666",
            },
          },
          "& input:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset",
          },
        }}
      />
      {icon && value && (
        <button
          className="px-1 py-1 flex items-center justify-center text-gray2 rounded-full hover:bg-primary hover:text-primary"
          type="button"
          onClick={handleClick}
        >
          {icon}
        </button>
      )}
    </div>
  );
}
