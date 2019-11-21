namespace DotNetCoreArchitecture.Model
{
    public class TokenModel
    {
        public TokenModel(string token, long userId)
        {
            Token = token;
            UserId = userId;
        }

        public string Token { get; }
        public long UserId { get; }
    }
}
