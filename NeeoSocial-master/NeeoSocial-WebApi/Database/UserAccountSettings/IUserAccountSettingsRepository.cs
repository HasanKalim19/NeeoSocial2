using DotNetCore.Repositories;
using DotNetCoreArchitecture.Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotNetCoreArchitecture.Database
{
    public interface IUserAccountSettingsRepository : IRelationalRepository<UserAccountSettings> { }
}
