namespace Leads.Database.Collections
{
	using System.Threading.Tasks;

	using Models;

	public interface IDocumentCrud<TDoc> where TDoc: IDocument
	{
		Task<TDoc> CreateAsync(TDoc doc);

		Task<TDoc> RetrieveAsync(string id);

		Task<TDoc> UpdateAsync(TDoc doc);

		Task DeleteAsync(string id);
	}
}