"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { cities } from "@/app/utils/array-data";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    // border: "1px solid rgba(36,39,44,.25)",
    fontSize: 14,
    padding: "18px 10px",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      //   border: "1px solid #24272c",
      //   borderRadius: 4,
      //   backgroundColor: "white",
    },
  },
}));

export default function FormHolder() {
  const [city, setCity] = useState(cities[0]);

  const router = useRouter();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!city) return;

    router.push(`/properties?city=${city}`);
  };

  return (
    <div className="w-full h-[60px] lg:w-[65%] border-[1px] border-slate-200 rounded-r-md rounded-l-md">
      <form
        className="w-full h-full flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 h-full border-r-[1px] border-slate-200 lg:w-[20%]">
          <FormControl fullWidth variant="standard">
            <Select
              value={city}
              onChange={handleCityChange}
              input={<BootstrapInput />}
            >
              {cities.map((city, index) => {
                return (
                  <MenuItem key={index} value={city} sx={{ fontSize: "14px" }}>
                    {city}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div className="w-[28%] h-full border-l-[1px] border-slate-200 lg:w-[22%]">
          <button
            className="w-full h-full bg-[#e71c28] text-white flex items-center justify-center gap-2 hover:bg-primaryLight disabled:bg-primaryLight rounded-r-md"
            type="submit"
          >
            <SearchRoundedIcon fontSize="small" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
