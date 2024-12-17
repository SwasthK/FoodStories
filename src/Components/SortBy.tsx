import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function ControlledOpenSelect({
  sort,
  setSort,
}: {
  sort: any;
  setSort: any;
}) {
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="">
      <FormControl sx={{ m: 1, minWidth: 120, height: "2rem" }}>
        <InputLabel
          id="demo-controlled-open-select-label"
          style={{ fontSize: ".9rem", padding: "0px", height: "2rem",position:"absolute",top:"-.6rem" }}
        >
        <p>Sort by</p>
        </InputLabel>
        <Select
          style={{ padding: "0px", height: "2rem" }}
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={0} className="capitalize">
            All
          </MenuItem>
          <MenuItem value={10} className="capitalize">
            rating
          </MenuItem>
          <MenuItem value={20} className="capitalize">
            a - z
          </MenuItem>
          <MenuItem value={30} className="capitalize">
            z - a
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
