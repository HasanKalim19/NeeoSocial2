using DotNetCoreArchitecture.Model.Models.UserAccountSettingsModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotNetCoreArchitecture.Domain
{
    public class UserAccountSettingsFactory
    {
        public static UserAccountSettings Create(UserAccountSettingsModel userAccountSettingsModel)
        {
            return new UserAccountSettings
            (
                 userAccountSettingsModel.UserAccounntSettingId,
                 userAccountSettingsModel.UserId,
                 userAccountSettingsModel.EnableFollowMe,
                 userAccountSettingsModel.SendNotifications,
                 userAccountSettingsModel.TextMessages,
                 userAccountSettingsModel.EnableTagging,
                 userAccountSettingsModel.EnableSound
            );
        }
    }
}
