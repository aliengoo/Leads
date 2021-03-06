﻿namespace Leads.StartUp
{
	using Microsoft.Owin.FileSystems;
	using Microsoft.Owin.StaticFiles;

	using Owin;

	public class StaticContentRegistration
	{
		public static void Register(IAppBuilder app)
		{
			var physicalFileSystem = new PhysicalFileSystem(@"./wwwroot");
			var options = new FileServerOptions
			{
				EnableDefaultFiles = true,
				FileSystem = physicalFileSystem
			};
			options.StaticFileOptions.FileSystem = physicalFileSystem;
			options.StaticFileOptions.ServeUnknownFileTypes = true;
			options.DefaultFilesOptions.DefaultFileNames = new[]
			{
				"index.html"
			};

			app.UseFileServer(options);

			// TODO: Remember to add these virtual directories
			/*
                <virtualDirectory path="/js" physicalPath="C:\src\github.com\aliengoo\Leads\Leads\wwwroot\js" />
                <virtualDirectory path="/assets" physicalPath="C:\src\github.com\aliengoo\Leads\Leads\wwwroot\assets" />
			*/
		}
	}
}