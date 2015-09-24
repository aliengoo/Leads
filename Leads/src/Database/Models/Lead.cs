using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson.Serialization.IdGenerators;

namespace Leads.Database.Models
{
	using Configuration.Attributes;

	[CollectionName("leads")]
    public class Lead : IDocument
    {
        [BsonId(IdGenerator = typeof(StringObjectIdGenerator))]
        public string Id { get; set; }

        [BsonRequired]
        public List<Customer> Customers { get; set; }

        [BsonRequired]
        public DateTime Created { get; set; }

        public List<Interest> Interests { get; set; }

        [BsonRequired]
        public LeadStatus Status { get; set; }

        public List<Note> Notes { get; set; }

		[BsonExtraElements]
		public IDictionary<string, object> Extras { get; set; }
	}
}