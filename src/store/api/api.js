import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const api = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:`${import.meta.env.VITE_SERVER}/api/v1/`}),
    tagTypes:["Chat","User","Message"],

    endpoints: (builder) => ({
        myChats: builder.query({
            query: ()=>({
                url: "chat/my",
                credentials:"include"
            }),
            providesTags:["Chat"]
        }),

        searchUser: builder.query({
            query: (name) => ({
                url: `user/search?name=${name}`,
                credentials: "include",
            }),
            providesTags: ["User"],
        }),

        sendFriendRequest: builder.mutation({
            query: (data) => ({
                url: "user/send-request",
                method: "PUT",
                credentials: "include",
                body: data,
            }),
            invalidatesTags: ["User"],
        }),

        getNotifications: builder.query({
            query: () => ({
                url: `user/notifications`,
                credentials: "include",
            }),
            keepUnusedDataFor: 0,
        }),

        acceptFriendRequest: builder.mutation({
            query: (data) => ({
                url: "user/accept-request",
                method: "PUT",
                credentials: "include",
                body: data,
            }),
            invalidatesTags: ["Chat"],
        }),

        chatDetails: builder.query({
            query: ({ chatId, populate = false }) => {
                let url = `chat/${chatId}`;
                if (populate) url += "?populate=true";

                return {
                url,
                credentials: "include",
                };
            },
            providesTags: ["Chat"],
        }),

        getOldMessages: builder.query({
            query: ({ chatId, page }) => ({
                url: `chat/message/${chatId}?page=${page}`,
                credentials: "include",
            }),
            keepUnusedDataFor: 0,
        }),

        sendAttachments: builder.mutation({
            query: (data) => ({
                url: "chat/message",
                method: "POST",
                credentials: "include",
                body: data,
            }),
        }),

        getAvailableFriends: builder.query({
            query: (chatId) => {
                let url = `user/friends`;
                if (chatId) url += `?chatId=${chatId}`;

                return {
                url,
                credentials: "include",
                };
            },
            providesTags: ["Chat"],
        }),      
  }),
});


export default api;
export const {useMyChatsQuery,useLazySearchUserQuery,useSendFriendRequestMutation,useGetNotificationsQuery,useAcceptFriendRequestMutation,useChatDetailsQuery,useGetOldMessagesQuery,useSendAttachmentsMutation,useGetAvailableFriendsQuery} = api;