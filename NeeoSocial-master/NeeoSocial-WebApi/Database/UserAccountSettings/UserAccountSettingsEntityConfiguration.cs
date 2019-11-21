using DotNetCoreArchitecture.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace DotNetCoreArchitecture.Database
{
    public sealed class UserAccountSettingsEntityConfiguration : IEntityTypeConfiguration<UserAccountSettings>
    {
        public void Configure(EntityTypeBuilder<UserAccountSettings> builder)
        {
            builder.ToTable("UserAccountSettings", "User");

            builder.HasKey(x => x.UserAccounntSettingId);

            builder.Property(x => x.UserAccounntSettingId).IsRequired().ValueGeneratedOnAdd();
            builder.Property(x => x.UserId).IsRequired();
            builder.Property(x => x.EnableFollowMe).IsRequired();
            builder.Property(x => x.SendNotifications).IsRequired();

            builder.Property(x => x.TextMessages).IsRequired();
            builder.Property(x => x.EnableTagging).IsRequired();
            builder.Property(x => x.EnableSound).IsRequired();

            builder.HasOne(x => x.User).WithMany(x => x.UserAccountSettings).HasForeignKey(x => x.UserId);
        }
    }
}
