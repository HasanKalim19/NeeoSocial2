using DotNetCoreArchitecture.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DotNetCoreArchitecture.Domain
{
    public class UserEntity
    {
        public UserEntity
        (
            long userId,
            FullName fullName,
            Email email,
            SignIn signIn,
            Roles roles,
            Status status,
            string dob,
            string city,
            string country,
            string gender
        )
        {
            UserId = userId;
            FullName = fullName;
            Email = email;
            SignIn = signIn;
            Roles = roles;
            Status = status;
            DOB = dob;
            City = city;
            Country = country;
            Gender = gender;

        }

        public UserEntity(long userId)
        {
            UserId = userId;
        }

        public long UserId { get; private set; }

        public FullName FullName { get; private set; }

        public Email Email { get; private set; }

        public SignIn SignIn { get; private set; }

        public Roles Roles { get; private set; }

        public Status Status { get; private set; }
        public string DOB { get; private set; }
        public string Gender { get; private set; }
        public string City { get; private set; }
        public string Country { get; private set; }

        public ICollection<UserLogEntity> UsersLogs { get; private set; }
        public ICollection<UserAccountSettings> UserAccountSettings { get; private set; }

        public void Add()
        {
            Roles = Roles.User;
            Status = Status.Active;
        }

        public void ChangeEmail(string address)
        {
            Email = new Email(address);
        }

        public void ChangeDOB(string dob)
        {
            DOB = dob;
        }

        public void ChangeGender(string gender)
        {
            Gender = gender;
        }

        public void ChangeCity(string city)
        {
            City = city;
        }

        public void ChangeCountry(string country)
        {
            Country = country;
        }

        public void ChangeFullName(string name, string surname)
        {
            FullName = new FullName(name, surname);
        }

        public void Inactivate()
        {
            Status = Status.Inactive;
        }
    }
}
