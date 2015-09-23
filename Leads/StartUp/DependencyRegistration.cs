using System.Web.Http;
using Microsoft.Practices.Unity;
using Unity.WebApi;

namespace Leads.StartUp
{
    public class DependencyRegistration
    {
        public static void Register(HttpConfiguration config)
        {
            var c = new UnityContainer();
            config.Properties["container"] = c;

            config.DependencyResolver = new UnityDependencyResolver(c);

            // TODO: Dependencies here

        }
    }
}