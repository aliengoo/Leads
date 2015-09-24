namespace Leads.Database.Document.Sub
{
	using global::Leads.Database.Models;

	public class Interests : SubDocumentCrud<Lead, Interest>
	{
		public Interests(IDocumentCrud<Lead> documentCrud, ILeadsDatabase leadsDatabase)
			: base(documentCrud, "Interests", leadsDatabase)
		{
		}
	}
}