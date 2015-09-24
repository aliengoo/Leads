namespace Leads.Exceptions
{
	using System;

	public class CollectionNotFoundException : Exception
	{
		public string CollectionName { get; set; }

		public CollectionNotFoundException(string collectionName, string message)
			: this(collectionName, message, null)
		{
		}

		public CollectionNotFoundException(string collectionName, string message, Exception innerException)
			: base(message, innerException)
		{
			CollectionName = collectionName;
		}
	}
}