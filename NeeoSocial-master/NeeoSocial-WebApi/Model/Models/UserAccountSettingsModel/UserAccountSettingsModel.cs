using System;
using System.Collections.Generic;
using System.Text;

namespace DotNetCoreArchitecture.Model.Models.UserAccountSettingsModel
{
    public class UserAccountSettingsModel
    {
        public long UserAccounntSettingId { get; private set; }
        public long UserId { get; private set; }
        public Status EnableFollowMe { get; private set; }
        public Status SendNotifications { get; private set; }
        public Status TextMessages { get; private set; }
        public Status EnableTagging { get; private set; }
        public Status EnableSound { get; private set; }
    }
}
