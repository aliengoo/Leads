namespace Leads.Database.Collections
{
	using System.Reflection;
	using System.Threading.Tasks;

	using Models;

	public interface ISubDocumentCrud<TParentDoc, TDoc>
		where TParentDoc : class, IDocument
		where TDoc : class, ISubDocument
	{
		Task<TDoc> CreateAsync(string parentId, TDoc doc);

		Task<TDoc> RetrieveAsync(string parentId, string id);

		Task<TDoc> UpdateAsync(string parentId, TDoc doc);

		Task DeleteAsync(string parentId, string id);

		Task<TParentDoc> RetrieveParent(string parentId);

		Task AssignSubDocumentId(TDoc doc);

		PropertyInfo PropertyOnParent { get; }
	}
}