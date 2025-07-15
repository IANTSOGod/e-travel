"use client";
import { Bell } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useEffect, useState } from "react";

interface NotificationMenuProps {
  userid: string;
}

export default function NotificationMenu({ userid }: NotificationMenuProps) {
  const notifications = useQuery(
    api.notifications.getNotifications,
    userid ? { userId: userid } : "skip"
  );

  const [Nreadnotifs, setNeadnotifs] = useState<number>(0);

  useEffect(() => {
    const notifsnonreaded = notifications?.filter(
      (notif) => notif.read == false
    );
    setNeadnotifs(notifsnonreaded?.length as number);
    console.log(notifsnonreaded?.length);
  }, [notifications]);

  const markasread = useMutation(api.notifications.markAsRead);

  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <div className="-mt-6">
            <Bell className="rounded-3xl bg-gray-100 w-[35px] h-[35px] p-1 border-1 border-red-400"></Bell>
            <div className="text-white bg-red-500 w-[20px] h-[20px] -mt-9 ml-5 rounded-full flex items-center justify-center text-xs">
              {Nreadnotifs}
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] h-[400px] flex flex-col gap-x-2 items-center m-0 p-0">
          {notifications?.map((notification, index) => (
            <div
              key={index}
              className={`w-auto h-[60px] m-2 flex text-center rounded-xl ${
                notification.read
                  ? "bg-white border-1 border-blue-200"
                  : "bg-gray-200"
              }`}
              id={notification._id.toString()}
              onClick={() => {
                markasread({ id: notification._id });
              }}
            >
              {notification.message}
            </div>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
}
