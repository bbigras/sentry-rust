initSidebarItems({"enum":[["Level","Represents the level of severity of an event or breadcrumb."]],"fn":[["add_breadcrumb","Records a breadcrumb by calling a function."],["capture_event","Captures an event on the currently active client if any."],["capture_message","Captures an arbitrary message."],["configure_scope","Invokes a function that can modify the current scope."],["init","Creates the Sentry client for a given client config and binds it."],["last_event_id","Returns the last event ID captured."],["with_scope","Temporarily pushes a scope for a single call optionally reconfiguring it."]],"macro":[["release_name","Returns the intended release for Sentry as an `Option<Cow<'static, str>>`."]],"mod":[["integrations","This module provides support for various integrations."],["internals","Useful internals."],["protocol","The current latest sentry protocol version."],["transports","The provided transports."],["utils","Useful utilities for working with events."]],"struct":[["Breadcrumb","Represents a single breadcrumb."],["Client","The Sentry client object."],["ClientOptions","Configuration settings for the client."],["Hub","The central object that can manages scopes and clients."],["Scope","Holds contextual data for the current scope."],["User","Represents user info."]]});