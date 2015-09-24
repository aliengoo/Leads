namespace Leads.Database.Models
{
	public interface ISubDocument : IDocument
	{
		string ParentId { get; set; }
	}
}