using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace Leads.Database.Collections
{
    public interface IBaseCollection<TDoc>
    {
        Task<TDoc> FindByIdAsync(string id);

        Task<IEnumerable<TDoc>> FindAsync(FilterDefinition<TDoc> filter);

        Task<TDoc> SaveAsync(TDoc doc);

        Task<bool> DeleteAsync(string id);

        Task<bool> Exists(FilterDefinition<TDoc> filter);
    }
}