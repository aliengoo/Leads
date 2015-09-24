using System;
using MongoDB.Bson.Serialization.Attributes;

namespace Leads.Database.Models
{
    public class Note : ISubDocument
    {
        [BsonRequired]
        public string Content { get; set; }

        [BsonRequired]
        public DateTime Created { get; set; }

		[BsonRequired]
		public string Id { get; set; }

		[BsonRequired]
		public string ParentId { get; set; }
    }
}