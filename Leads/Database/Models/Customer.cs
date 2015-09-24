using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace Leads.Database.Models
{
    public class Customer : ISubDocument
    {
        [BsonRequired]
        public string FirstName { get; set; }

        public string MiddleNames { get; set; }

        [BsonRequired]
        public string LastName { get; set; }

        public DateTime? BirthDate { get; set; }

        public IDictionary<string, Address> Addresses { get; set; }

        [BsonRequired]
        public IDictionary<string, ContactMethod> ContactMethods { get; set; }

        public IDictionary<string, object> Meta { get; set; }

		[BsonRequired]
	    public string Id { get; set; }

		[BsonRequired]
		public string ParentId { get; set; }
    }
}