namespace DotNetCoreArchitecture.Model
{
    public class UserModel
    {
        public long UserId { get; set; }

        public FullNameModel FullName { get; set; }

        public string Email { get; set; }
        public string DOB { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Gender { get; set; }

        public Roles Roles { get; set; }
    }
}
