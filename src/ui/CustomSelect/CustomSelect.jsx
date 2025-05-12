import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CustomSelect = ({ name, value, onChange, options }) => {
    return (
        <FormControl fullWidth size="small">
            <Select
                MenuProps={{ disableScrollLock: true }}
                labelId={`${name}-label`}
                id={`${name}-select`}
                name={name}
                value={value}
                onChange={onChange}
                sx={{ fontFamily: "Montserrat, sans-serif", width: "14vw", minWidth: "max-content", fontSize: "var(--h5-font-size)" }}
            >
                {options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}
                        sx={{ fontFamily: "Montserrat, sans-serif", color: "#777" }}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CustomSelect;
