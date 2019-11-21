using DotNetCore.EntityFrameworkCore;
using DotNetCoreArchitecture.Domain;

namespace DotNetCoreArchitecture.Database
{
    public sealed class UserAccountSettingsRepository : EntityFrameworkCoreRelationalRepository<UserAccountSettings>, IUserAccountSettingsRepository
    {
        public UserAccountSettingsRepository(Context context) : base(context)
        {
        }
    }
}
