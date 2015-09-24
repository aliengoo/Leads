namespace Leads.Exceptions
{
	using System;

	public class DocumentNotFoundException : Exception
	{
		public DocumentNotFoundException(string id, string message)
			: base(message)
		{
		}

		public DocumentNotFoundException(string message, Exception innerException)
			: base(message, innerException)
		{
		}
	}
}