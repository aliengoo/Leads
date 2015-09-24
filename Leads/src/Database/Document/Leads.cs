namespace Leads.Database.Document
{
	using global::Leads.Database.Models;

	public class Leads : DocumentCrud<Lead>, ILeads
	{
		public Leads(ILeadsDatabase leadsDatabase)
			: base(leadsDatabase, "leads")
		{
		}
	}
}