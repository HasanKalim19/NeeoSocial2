using Microsoft.EntityFrameworkCore.Migrations;

namespace DotNetCoreArchitecture.Database.Migrations
{
    public partial class UserAccountSettings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "UserAccountSettings",
                schema: "User",
                columns: table => new
                {
                    UserAccounntSettingId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<long>(nullable: false),
                    EnableFollowMe = table.Column<int>(nullable: false),
                    SendNotifications = table.Column<int>(nullable: false),
                    TextMessages = table.Column<int>(nullable: false),
                    EnableTagging = table.Column<int>(nullable: false),
                    EnableSound = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserAccountSettings", x => x.UserAccounntSettingId);
                    table.ForeignKey(
                        name: "FK_UserAccountSettings_Users_UserId",
                        column: x => x.UserId,
                        principalSchema: "User",
                        principalTable: "Users",
                        principalColumn: "UserId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserAccountSettings_UserId",
                schema: "User",
                table: "UserAccountSettings",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserAccountSettings",
                schema: "User");
        }
    }
}
