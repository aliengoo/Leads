namespace Leads.Database.Models
{
    public class Address
    {
        public string Line1 { get; set; }

        public string Line2 { get; set; }

        public string Line3 { get; set; }

        public string Town { get; set; }

        public string PostcodeOut { get; set; }

        public string PostCodeIn { get; set; }

	    public string Type { get; set; }
    }
}