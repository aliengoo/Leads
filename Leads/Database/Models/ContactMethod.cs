using System.Collections.Generic;

namespace Leads.Database.Models
{
    public class ContactMethod
    {
        public string Uri { get; set; }

        public IDictionary<string, object> Meta { get; set; }
    }
}