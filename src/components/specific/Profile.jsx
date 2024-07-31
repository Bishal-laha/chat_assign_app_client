import { Avatar, Stack, Typography } from "@mui/material";
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from "@mui/icons-material";
import { useSelector } from "react-redux";
import moment from "moment";
import { transformImage } from "../../libs/Features";

const Profile = () => {
    const { userData } = useSelector((state) => state.auth);

    return (
        <Stack spacing={"1.2rem"} direction={"column"} alignItems={"center"}>
            <Avatar src={transformImage(userData?.avatar?.url)} sx={{ width: 200, height: 200, objectFit: "contain", marginBottom: "1rem", border: "5px solid white" }} />
            <ProfileCard heading={"Username"} text={userData?.username} Icon={<UserNameIcon />} />
            <ProfileCard heading={"Name"} text={userData?.fullName} Icon={<FaceIcon />} />
            <ProfileCard heading={"Joined"} text={moment(userData?.createdAt).fromNow()} Icon={<CalendarIcon />} />
        </Stack >
    );
};

const ProfileCard = ({ text, Icon, heading }) => (
    <Stack direction={"row"} alignItems={"flex-start"} spacing={"1rem"} color={"white"} textAlign={"center"} position={"relative"}>
        <Stack sx={{ position: "absolute", top: "5px", left: "-20px" }}>{Icon && Icon}</Stack>
        <Stack>
            <Typography variant="body1" color={"white"}>{text}</Typography>
            <Typography variant="caption" color={"gray"}> {heading}</Typography>
        </Stack>
    </Stack>
);

export default Profile;