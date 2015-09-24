using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace Leads.Database.Models
{
	using MongoDB.Bson.Serialization.Options;

	public class Customer : ISubDocument
    {
        [BsonRequired]
        public string FirstName { get; set; }

        public string MiddleNames { get; set; }

        [BsonRequired]
        public string LastName { get; set; }

        public DateTime? BirthDate { get; set; }

        public IEnumerable<Address> Addresses { get; set; }

        [BsonRequired]
		[BsonDictionaryOptions(DictionaryRepresentation.Document)]
        public IDictionary<string, string> ContactMethods { get; set; }

		[BsonDictionaryOptions(DictionaryRepresentation.Document)]
		public IDictionary<string, object> Meta { get; set; }

		[BsonRequired]
	    public string Id { get; set; }

		[BsonRequired]
		public string ParentId { get; set; }
    }
}