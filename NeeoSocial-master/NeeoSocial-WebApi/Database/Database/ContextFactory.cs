using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace DotNetCoreArchitecture.Database
{
    public sealed class ContextFactory : IDesignTimeDbContextFactory<Context>
    {
        public Context CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<Context>();

            builder.UseSqlServer("Server=.;Database=NeeoSocial;Trusted_Connection=True;");

            return new Context(builder.Options);
        }
    }
}
