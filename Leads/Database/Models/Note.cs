using System;
using MongoDB.Bson.Serialization.Attributes;

namespace Leads.Database.Models
{
    public class Note
    {
        [BsonRequired]
        public string Content { get; set; }

        [BsonRequired]
        public DateTime Created { get; set; }
    }
}