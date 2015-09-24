namespace Leads.Database.Document.Sub
{
	using global::Leads.Database.Models;

	public class Notes : SubDocumentCrud<Lead, Note>
	{
		public Notes(IDocumentCrud<Lead> documentCrud, ILeadsDatabase leadsDatabase)
			: base(documentCrud, "Notes", leadsDatabase)
		{
		}
	}
}