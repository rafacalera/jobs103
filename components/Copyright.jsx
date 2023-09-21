import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";



export default props => {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="/">
                Jobs-103
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}