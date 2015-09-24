namespace Leads.Database.Document.Sub
{
	using global::Leads.Database.Models;

	public class Customers : SubDocumentCrud<Lead, Customer>
	{
		public Customers(IDocumentCrud<Lead> documentCrud, ILeadsDatabase leadsDatabase)
			: base(documentCrud, "Customers", leadsDatabase)
		{
		}
	}
}