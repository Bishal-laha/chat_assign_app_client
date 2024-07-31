import { Avatar, Box, Stack } from "@mui/material";
import { transformImage } from "../../libs/Features";

const AvatarCard = ({ avatar = "", }) => {
    return (
        <Stack direction={"row"} spacing={0.5}>
            <Box width={"5rem"} height={"3rem"}>
                <Avatar key={Math.random() * 100} src={transformImage(avatar)} alt="Avatar" sx={{ width: "3rem", height: "3rem", position: "absolute" }} />
            </Box>

        </Stack>
    );
};

export default AvatarCard;