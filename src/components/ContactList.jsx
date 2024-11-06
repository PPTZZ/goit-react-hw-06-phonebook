import { Stack } from "@mui/material";
import Contact from "./Contact";

const ContactList = () => {
    return(
        <Stack spacing={2}>
            <Contact/>
            <Contact/>
            <Contact/>
            <Contact/>
        </Stack>
    )
}
export default ContactList;