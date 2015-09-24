namespace Leads.Database.Models
{
    public class Interest : ISubDocument
    {
	    public string Id { get; set; }

	    public string ParentId { get; set; }

        public string Type { get; set; }

        public string Description { get; set; }

        // TODO: Add more information here
    }
}