using System.Threading.Tasks;
using Leads.Database.Models;

namespace Leads.Database.Collections
{
    public interface ILeads
    {
        Task<Note> AddNote(string leadId, Note note);

        Task RemoveNote()
    }
}