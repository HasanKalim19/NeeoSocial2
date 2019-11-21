using Microsoft.EntityFrameworkCore.Migrations;

namespace DotNetCoreArchitecture.Database.Migrations
{
    public partial class AddUserFeilds : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "City",
                schema: "User",
                table: "Users",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Country",
                schema: "User",
                table: "Users",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DOB",
                schema: "User",
                table: "Users",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Gender",
                schema: "User",
                table: "Users",
                maxLength: 100,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                schema: "User",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Country",
                schema: "User",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DOB",
                schema: "User",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Gender",
                schema: "User",
                table: "Users");
        }
    }
}
