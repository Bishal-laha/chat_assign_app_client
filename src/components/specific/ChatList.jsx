import { Stack } from '@mui/material';
import { ChatItem } from '../shared/Index';
import { darkBgBackground, lightBgGradient } from '../../constants/color';

const ChatList = ({ width = "100%", chats = [], chatId, onlineUsers = [], newMessagesAlert = [{ chatId: "", messageCount: 0 }] }) => {
    return (
        <Stack width={width} direction={"column"} overflow={"auto"} height={"100%"} sx={{ backgroundImage: (theme) => (theme.palette.mode === 'dark' ? `${darkBgBackground}` : `${lightBgGradient}`) }}>
            {chats?.map((data, id) => {
                if (data) {
                    const { avatar, _id, name, members } = data;
                    const newMessageAlert = newMessagesAlert.find(({ chatId }) => chatId === _id);
                    const isOnline = members?.some((member) => onlineUsers.includes(member));
                    return <ChatItem avatar={avatar} index={id} newMessageAlert={newMessageAlert} isOnline={isOnline} name={name} _id={_id} key={_id} sameSender={chatId === _id} />
                }
            })}
        </Stack>
    )
}

export default ChatList