using System.Web.Http;
using Leads.StartUp;

using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(StartUpApp))]

namespace Leads.StartUp
{
    public class StartUpApp
    {
        public void Configuration(IAppBuilder app)
        {
            var config = new HttpConfiguration();

            // Dependencies must be resolved first - subsequent steps rely on it.
            DependencyRegistration.Register(config);

            JsonRegistration.Register(config);

            WebApiRegistration.Register(app, config);

            CorsRegistration.Register(app, config);

			StaticContentRegistration.Register(app);

#if (DEBUG)
            config.EnableSystemDiagnosticsTracing();
#endif
        }
    }
}