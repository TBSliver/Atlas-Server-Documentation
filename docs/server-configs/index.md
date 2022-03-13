# Server Configs

The server config files are various files used to configure the server as the admin sees fit. There are two main types
of config file available, JSON and INI files.

## JSON Files

The format of the grid configuration is a JSON file, which looks similar to the following:

```json
{
  "key": "value"
}
```

This file type is used for the base grid configuration, and includes all the settings for quests and other similar
items, as well as for islands, and other parts of the general game setup.

## INI Files

The format of the server configs are general ini files, which looks similar to the following:

```ini
[section]
key = value
```

These files are used for cell wide configuration settings, such as claim types, resource overrides, and other such
items.
