"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[216],{34375:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Creates a new Class instance from the given class entry.\\nClasses are cached, so if a class with the same name has\\nalready been constructed, it will return that instead.","params":[{"name":"classEntry","desc":"","lua_type":"Class"}],"returns":[{"desc":"","lua_type":"Class"}],"function_type":"static","source":{"line":29,"path":"src/Class.lua"}},{"name":"filterMembers<T>","desc":"Accepts a table of filters, and returns a table of members that\\npassed the filter. The keys of the table are the member names,\\nand the values are the members themselves.","params":[{"name":"filter","desc":"","lua_type":"{ string | GenericFilter<T> }"}],"returns":[{"desc":"","lua_type":"{ [string]: T }"}],"function_type":"method","private":true,"source":{"line":71,"path":"src/Class.lua"}},{"name":"GetProperties","desc":"Returns a table of all properties that match the given\\nfilters. A filter may be a string (property name), or\\na table of filters.\\n\\nA property must match all of the given filters in order to\\npass. If no filters are given, all properties are returned.\\n\\nThe resulting table is a dictionary of properties, where\\nthe key is the property name and the value is the property\\nobject from the API dump.","params":[{"name":"...","desc":"","lua_type":"(string | GenericFilter<Property>)?"}],"returns":[{"desc":"","lua_type":"{ [string]: Property }"}],"function_type":"method","source":{"line":119,"path":"src/Class.lua"}},{"name":"GetProperty","desc":"Returns the property with the given name, or nil if it\\ndoes not exist.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Property?"}],"function_type":"method","source":{"line":135,"path":"src/Class.lua"}},{"name":"GetEvents","desc":"Returns a table of all events that match the given\\nfilters. A filter may be a string (event name), or\\na table of filters.","params":[{"name":"...","desc":"","lua_type":"(string | GenericFilter<Event>)?"}],"returns":[{"desc":"","lua_type":"{ [string]: Event }"}],"function_type":"method","source":{"line":149,"path":"src/Class.lua"}},{"name":"GetEvent","desc":"Returns the event with the given name, or nil if it\\ndoes not exist.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Event?"}],"function_type":"method","source":{"line":164,"path":"src/Class.lua"}},{"name":"GetFunctions","desc":"Returns a table of all functions that match the given\\nfilters. A filter may be a string (function name), or\\na table of filters.","params":[{"name":"...","desc":"","lua_type":"(string | GenericFilter<Function>)?"}],"returns":[{"desc":"","lua_type":"{ [string]: Function }"}],"function_type":"method","source":{"line":178,"path":"src/Class.lua"}},{"name":"GetFunction","desc":"Returns the function with the given name, or nil if it\\ndoes not exist.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Function?"}],"function_type":"method","source":{"line":194,"path":"src/Class.lua"}},{"name":"GetCallbacks","desc":"Returns a table of all callbacks that match the given\\nfilters. A filter may be a string (callback name), or\\na table of filters.","params":[{"name":"...","desc":"","lua_type":"(string | GenericFilter<Callback>)?"}],"returns":[{"desc":"","lua_type":"{ [string]: Callback }"}],"function_type":"method","source":{"line":208,"path":"src/Class.lua"}},{"name":"GetCallback","desc":"Returns the callback with the given name, or nil if it\\ndoes not exist.","params":[{"name":"name","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Callback?"}],"function_type":"method","source":{"line":224,"path":"src/Class.lua"}}],"properties":[{"name":"Name","desc":"","lua_type":"string","source":{"line":39,"path":"src/Class.lua"}},{"name":"Superclass","desc":"","lua_type":"string","source":{"line":43,"path":"src/Class.lua"}},{"name":"Members","desc":"","lua_type":"{ Member }","source":{"line":47,"path":"src/Class.lua"}},{"name":"Tags","desc":"","lua_type":"{ string }?","source":{"line":51,"path":"src/Class.lua"}},{"name":"Inherits","desc":"","lua_type":"{ string }","source":{"line":55,"path":"src/Class.lua"}}],"types":[],"name":"Class","desc":"Represents a Class within the API dump.","source":{"line":7,"path":"src/Class.lua"}}')}}]);