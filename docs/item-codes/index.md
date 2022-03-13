# Item Codes

Spawning items can be a bit hit or miss - the string used to spawn the items is used as the nearest match, so using the
actual string is the easiest.

For example, `Bucket` would normally spawn the expected bucket for bailing a ship, however if you use a mod that adds a
new bucket, or something with bucket in the name, it may spawn that.

The command for spawning an item is as follows:

```
cheat gfi <Item Spawn Code> <Quantity> <Quality> <Is Blueprint>
```

For example, the following command will give 1 basic bucket

```
cheat gfi PrimalItem_WeaponBucket 1 0 0
```
