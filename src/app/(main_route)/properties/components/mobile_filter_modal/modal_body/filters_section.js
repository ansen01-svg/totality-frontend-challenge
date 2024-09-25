import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FiltersSection(props) {
  const { title, data, filters, handleFilterChange } = props;

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2">
      <TitleHolder title={title} />
      <CheckboxesHolder
        filters={filters}
        data={data}
        handleFilterChange={handleFilterChange}
      />
    </div>
  );
}

function TitleHolder({ title }) {
  return (
    <div className="w-full flex flex-row items-center justify-start">
      <h2 className="font-bold text-sm">{title}</h2>
    </div>
  );
}

function CheckboxesHolder(props) {
  const { data, filters, handleFilterChange } = props;

  return (
    <div className="w-full flex flex-col items-start justify-center gap-2">
      <FormGroup>
        {data.map((item) => {
          const { id, label, labelFor, name, value } = item;
          return (
            <FormControlLabel
              key={id}
              control={
                <Checkbox
                  size="small"
                  value={labelFor}
                  checked={filters[name].includes(value[0])}
                  onChange={() => handleFilterChange(name, value)}
                />
              }
              label={label}
              id={labelFor}
              name={labelFor}
              sx={{
                ".MuiTypography-root": {
                  fontSize: "14px",
                  color: "rgba(36,39,44,.7)",
                },
              }}
            />
          );
        })}
      </FormGroup>
    </div>
  );
}
