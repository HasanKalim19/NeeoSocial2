using DotNetCoreArchitecture.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCoreArchitecture.Domain
{
    public class UserAccountSettings
    {
        public UserAccountSettings
       (
            long userAccounntSettingId,
            long userId,
            Status enableFollowMe,
            Status sendNotifications,
            Status textMessages,
            Status enableTagging,
            Status enableSound
        )
        {
            UserAccounntSettingId = userAccounntSettingId;
            UserId = userId;
            EnableFollowMe = enableFollowMe;
            SendNotifications = sendNotifications;
            TextMessages = textMessages;
            EnableTagging = enableTagging;
            EnableSound = enableSound;
        }

        public long UserAccounntSettingId { get; private set; }
        public long UserId { get; private set; }
        public Status EnableFollowMe { get; private set; }
        public Status SendNotifications { get; private set; }
        public Status TextMessages { get; private set; }
        public Status EnableTagging { get; private set; }
        public Status EnableSound { get; private set; }


        public UserEntity User { get; private set; }

    }
}
