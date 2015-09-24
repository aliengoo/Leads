namespace Leads.Database.Document
{
	using System.Collections.Generic;
	using System.Threading.Tasks;

	using global::Leads.Database.Models;
	using global::Leads.Pagination;

	public interface IDocumentCrud<TDoc> where TDoc: IDocument
	{
		Task<TDoc> CreateAsync(TDoc doc);

		Task<TDoc> RetrieveAsync(string id);

		Task<TDoc> UpdateAsync(TDoc doc);

		Task DeleteAsync(string id);

		Task<Page> RetrieveAsync(IDictionary<string, object> filter, Page page);
	}
}