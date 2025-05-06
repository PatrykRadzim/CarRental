import {
  Autocomplete,
  Box,
  InputAdornment,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";

const Filter = ({
  type,
  name,
  value,
  label,
  collection,
  adornment,
  disabled = false,
  onValueChange,
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "10vw" }}>
      {type === "list" && Array.isArray(collection) && (
        <Autocomplete
          disabled={disabled}
          value={value || ""}
          onChange={(_, newValue) => {
            console.log(name + ": " + newValue);
            onValueChange(name, newValue || "");
          }}
          options={collection}
          renderInput={(params) => (
            <TextField
              variant="filled"
              {...params}
              label={label}
              name={name}
              sx={{ backgroundColor: theme.palette.background }}
            />
          )}
          slotProps={{
            paper: {
              sx: {
                backgroundColor: theme.palette.background,
              },
            },
          }}
        />
      )}

      {type === "number" && (
        <TextField
          onChange={(event) => {
            const value = Math.max(0, Number(event.target.value));
            console.log(name + ": " + value);
            onValueChange(name, value);
          }}
          variant="filled"
          name={name}
          value={value}
          label={label}
          type="number"
          {...(adornment && {
            slotProps: {
              input: {
                startAdornment: (
                  <InputAdornment position="start">{adornment}</InputAdornment>
                ),
              },
            },
          })}
          sx={{ backgroundColor: theme.palette.background }}
        />
      )}
    </Box>
  );
};
export default Filter;
